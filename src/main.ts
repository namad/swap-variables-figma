import { toTitleCase } from './utils/text-to-title-case';
import { flattenObject } from './utils/flatten-object';
import { roundTwoDigits } from './utils/round-two-digits';
import { swapVariables } from './utils/swap-variables';
import { collectVariables, getImportedVariables, removeVariableCollection, syncVariableCollections } from './utils/collect-variables';
import * as store from './utils/storage2';

console.clear();

let globalTokens;

const collectionNames = new Map<string, string>([
    ["brandColors", "Color Theme"/*"Brand Color"*/],
    ["themeColors", "Color Theme"],
    ["componentColors", "Component Tokens"],
    ["spacing", "Spacing"],
    ["opacity", "Opacity"],
    ["radii", "Radii"],
    ["iconScale", "Icon Scale"],
    ["globalSizing", "Global Sizing"],
]);

figma.showUI(__html__, {
    width: 320,
    height: 320,
    themeColors: true,
});



figma.ui.onmessage = async (eventData) => {
    console.log("code received message", eventData);
    const params = eventData.params;

    if (eventData.type === "IMPORT") {
    }
    else if (eventData.type === "COLLECT_VARS") {
        await collectVariables(eventData.fileName);
    }
    else if (eventData.type === "VARS_UI_LOADED") {
        await syncVariableCollections();
    }
    else if (eventData.type === "REMOVE_VARS_COLLECTION") {
        await removeVariableCollection(eventData.fileName);
    }
    else if (eventData.type === "SWAP_VARIABLES") {
        debugger;
        const key = eventData.fileName;

        if(!key) {
            return figma.notify("Select variables to swap");
        }
        const data = store.get(key);

        const layersCount = await swapVariables(data).catch(err => {
            console.error(err);
            figma.notify(err, {error: true});
            throw err;
        });

        figma.ui.postMessage({ event: "SWAP_VARIABLES_DONE" })
        figma.notify(`Processed ${layersCount} layers`);
    }
};

