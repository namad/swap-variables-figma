import { delayAsync } from "./delay-async";
import { _clone } from "./clone";

let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;

let importadVariablesLibrary: Variable[];

function checkBoundVariabled(node: SceneNode): boolean {
    return 'boundVariables' in node && Object.keys(node.boundVariables).length > 0
}

export async function swapVariables(data: LibraryVariable[]) {

    importadVariablesLibrary = [];

    await Promise.all(data.map(async (record) => {
        return await figma.variables.importVariableByKeyAsync(record.key).then(variable => importadVariablesLibrary.push(variable));
    }));

    totalLayersCount = 0;
    reboundLayersCount = 0;
    skippedLayersCount = 0;

    let _nodes = [];
    figma.skipInvisibleInstanceChildren = false;

    if (figma.currentPage.selection.length == 0) {
        figma.notify("Select at least one layer and try again");
        return 0;    
    }

    figma.currentPage.selection.forEach((node: SceneNode) => {

        if(checkBoundVariabled(node)) {
            _nodes.push(node);
        }

        if ('findAll' in node) {
            const nodes = node.findAll((n: SceneNode) => {
                return checkBoundVariabled(n);
            });

            _nodes = _nodes.concat(nodes);
        }
    });

    console.log(_nodes);
    const total = _nodes.length;
    totalLayersCount = total;

    let threshhold = total > 700 ? 5 : 10;

    while(_nodes.length) {
        const node = _nodes.shift();
        const processed = total - _nodes.length;
        // (70 - 44) / 70
        const percent = Math.round(((total - _nodes.length) / total) * 100);
        const msg = `${percent}% done. Working on layer ${processed} out of ${total}`
        console.log(msg);

        await processLayer(node, processed).catch(err => {
            console.error(err);
        });

        reboundLayersCount++;

        
        if(percent % threshhold === 0) {
            figma.ui.postMessage({ event: "SWAP_VAR_PROGRESS", message:  msg})
        }
    }

    return total;
}

function getVariableName(variable: Variable): string {
    const name = variable.name;
    return name.replaceAll('sx', 'spacing').replaceAll('sy', 'spacing/minor');
}

export async function findVariableMatch(varId: string) {
    const variable = await figma.variables.getVariableByIdAsync(varId);

    if (!variable) {
        return null;
    }

    const name = getVariableName(variable);

    const targetVariable = importadVariablesLibrary.find(variable => {
        return variable.name == name
    });

    if(!targetVariable) {
        console.warn(`Cannot find ${variable.name}`);
        return null;
    };

    if (targetVariable.id == variable.id) {
        console.warn(`${variable.name} is a local variable`);
        skippedLayersCount++;
        return null;
    }

    return targetVariable;
}


async function processLayer(node:SceneNode, count:number) {
    const boundVairables = Object.entries(node.boundVariables);

    if(node.type == 'TEXT') {
        return await processTextNode(node, count)
    }

    
    await Promise.all(boundVairables.map(async ([propName, boundVar]) => {
        return await bindVariable(node, propName, boundVar).catch((err) => {
            return err + `${propName}`;
        });
    })).catch(function(err) {
        console.log(err.message); // some coding error in handling happened
    });

    if(count % 50 == 0) {
        await delayAsync(1);
    }
}

export async function bindPropertyVariables(props, figmaFn) {
    const result = [];

    const propsCopy = _clone(props);
    
    for(let prop of propsCopy) {
        for(const field in prop.boundVariables) {
            const alias = prop.boundVariables[field];
            const variable = await findVariableMatch(alias.id);

            const spread = prop['spread']; //workaround Figma bug. It resets spread after calling figma.variables.setBoundVariableForEffect

            if (variable) {
                // prop.boundVariables = {};
                prop = figmaFn(prop, field, null);
                prop = figmaFn(prop, field, variable);
            }

            if(typeof spread != 'undefined') {
                prop['spread'] = spread;
            }
        }

        result.push(prop);
    }

    return result;
}

async function bindVariable(node: SceneNode, propName: any, variableBinding: any): Promise<SceneNode> {
    if (propName == 'fills' && 'fills' in node) {
        node.fills = await bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
    }
    else if (propName == 'strokes' && 'strokes' in node) {
        node.strokes = await bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
    }    
    else if (propName == 'effects' && 'effects' in node) {
        node.effects = await bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
    }
    else if(propName == 'layoutGrids' && 'layoutGrids' in node) {
        node.layoutGrids = await bindPropertyVariables(node.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
    }
    else if(propName == 'componentProperties' || propName == 'textRangeFills') {
        console.warn(`Swap does not work for ${propName}, skipping node`);
    }
    else {
        const variable = await findVariableMatch(variableBinding.id);
        if (variable) {
            node.setBoundVariable(propName, null);
            node.setBoundVariable(propName, variable);
        }    
    }

    return node;
}

async function processTextNode(node: TextNode, count: number): Promise<TextNode> {
    const boundStyleVariables = node.getStyledTextSegments(['boundVariables']);
    const fillStyleTextSegments = node.getStyledTextSegments(['fills']);

    for(const textSegment of boundStyleVariables) {
        if('boundVariables' in textSegment) {
            const boundVairables = Object.entries(textSegment.boundVariables) as [any, VariableAlias][];

            
            await Promise.all(boundVairables.map(async ([propName, boundVar]) => {
                return await bindTextRangeVariables(boundVar, node, textSegment, propName);
            }))

        }
    }

    for(const textSegment of fillStyleTextSegments) {
        if('fills' in textSegment) {
            let newPaints = []
            for(const fill of textSegment.fills) {
                if('boundVariables' in fill) {
                    const colorVariableReference = fill.boundVariables.color.id;
                    const figmaVariable = await findVariableMatch(colorVariableReference);

                    if(!figmaVariable) continue;

                    const boundFill = figma.variables.setBoundVariableForPaint(fill, 'color', figmaVariable);
                    newPaints.push(boundFill);
                }
            }

            if(newPaints.length) {
                node.setRangeFills(textSegment.start, textSegment.end, newPaints);
            }
        }
    }
    
    if(count % 50 == 0) {
        await delayAsync(1);
    }
    
    return node;
}

async function bindTextRangeVariables(boundVar: VariableAlias, node: TextNode, textSegment: Pick<StyledTextSegment, "characters" | "start" | "end" | "boundVariables">, propName: any) {
    console.log(`bindTextRangeVariables: ${propName}`);

    const variable = await findVariableMatch(boundVar.id);
    if (variable) {
        try {
            node.setRangeBoundVariable(textSegment.start, textSegment.end, propName, variable);
        }
        catch(e) {
            console.warn(`Failed to bind ${propName} to a variable${variable.name}:${variable.resolvedType}`);
            console.log(e); // some coding error in handling happened
        }    
    }
}
