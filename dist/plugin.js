/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/clone.ts":
/*!****************************!*\
  !*** ./src/utils/clone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _clone: () => (/* binding */ _clone)
/* harmony export */ });
function _clone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    }
    else if (type === 'undefined' || type === 'number' ||
        type === 'string' || type === 'boolean') {
        return val;
    }
    else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => _clone(x));
        }
        else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        }
        else {
            let o = {};
            for (const key in val) {
                o[key] = _clone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}


/***/ }),

/***/ "./src/utils/collect-variables.ts":
/*!****************************************!*\
  !*** ./src/utils/collect-variables.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getImportedVariables: () => (/* binding */ getImportedVariables),
/* harmony export */   removeVariableCollection: () => (/* binding */ removeVariableCollection),
/* harmony export */   syncVariableCollections: () => (/* binding */ syncVariableCollections)
/* harmony export */ });
/* harmony import */ var _utils_storage2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/storage2 */ "./src/utils/storage2.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function uuidv4() {
    var u = '', m = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', i = 0, rb = Math.random() * 0xffffffff | 0;
    while (i++ < 36) {
        var c = m[i - 1], r = rb & 0xf, v = c == 'x' ? r : (r & 0x3 | 0x8);
        u += (c == '-' || c == '4') ? c : v.toString(16);
        rb = i % 8 == 0 ? Math.random() * 0xffffffff | 0 : rb >> 4;
    }
    return u;
}
function getImportedVariables() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _utils_storage2__WEBPACK_IMPORTED_MODULE_0__.getStoreData();
    });
}
function syncVariableCollections() {
    return __awaiter(this, void 0, void 0, function* () {
        const store = yield getImportedVariables();
        const data = {};
        store.forEach((value, key, map) => {
            data[key] = value;
        });
        figma.ui.postMessage({ event: "SYNC_VARS", data: data });
    });
}
function removeVariableCollection(fileKey) {
    return __awaiter(this, void 0, void 0, function* () {
        yield _utils_storage2__WEBPACK_IMPORTED_MODULE_0__.remove(fileKey);
        yield syncVariableCollections();
    });
}


/***/ }),

/***/ "./src/utils/delay-async.ts":
/*!**********************************!*\
  !*** ./src/utils/delay-async.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayAsync: () => (/* binding */ delayAsync)
/* harmony export */ });
function delayAsync(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/***/ }),

/***/ "./src/utils/storage2.ts":
/*!*******************************!*\
  !*** ./src/utils/storage2.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearStore: () => (/* binding */ clearStore),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   getStoreData: () => (/* binding */ getStoreData),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const store = new Map();
function getStoreData() {
    return __awaiter(this, void 0, void 0, function* () {
        store.clear();
        const libraryCollections = yield figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync().catch(e => {
            throw e;
        });
        yield Promise.all(libraryCollections.map((collection) => __awaiter(this, void 0, void 0, function* () {
            return yield figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key).then(data => {
                let variables = store.get(collection.libraryName) || [];
                variables = variables.concat(data);
                store.set(collection.libraryName, variables);
            });
        })));
        const localLibraryVariables = yield collectLocalVariables();
        if (localLibraryVariables) {
            store.set(localLibraryVariables.name, localLibraryVariables.libraryVariables);
        }
        return store;
    });
}
function collectLocalVariables() {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = yield figma.variables.getLocalVariablesAsync().catch(err => {
            throw (err);
        });
        const libraryVariables = variables.map(variable => {
            const { key, resolvedType, name } = variable;
            return { name, key, resolvedType };
        });
        let name = "Local variables";
        if (libraryVariables.length) {
            return { name, libraryVariables };
        }
        else {
            return null;
        }
    });
}
function set(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        store.set(name, data);
        return store;
    });
}
function get(name) {
    return store.get(name);
}
function remove(name) {
    return __awaiter(this, void 0, void 0, function* () {
        store.delete(name);
        return store;
    });
}
function clearStore() {
    store.clear();
    return store;
}


/***/ }),

/***/ "./src/utils/swap-variables.ts":
/*!*************************************!*\
  !*** ./src/utils/swap-variables.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindPropertyVariables: () => (/* binding */ bindPropertyVariables),
/* harmony export */   findVariableMatch: () => (/* binding */ findVariableMatch),
/* harmony export */   swapVariables: () => (/* binding */ swapVariables)
/* harmony export */ });
/* harmony import */ var _delay_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delay-async */ "./src/utils/delay-async.ts");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clone */ "./src/utils/clone.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let totalLayersCount = 0;
let reboundLayersCount = 0;
let skippedLayersCount = 0;
let missingLayersCount = 0;
let importadVariablesLibrary;
function checkBoundVariabled(node) {
    return 'boundVariables' in node && Object.keys(node.boundVariables).length > 0;
}
function swapVariables(data) {
    return __awaiter(this, void 0, void 0, function* () {
        importadVariablesLibrary = [];
        yield Promise.all(data.map((record) => __awaiter(this, void 0, void 0, function* () {
            return yield figma.variables.importVariableByKeyAsync(record.key).then(variable => importadVariablesLibrary.push(variable));
        })));
        totalLayersCount = 0;
        reboundLayersCount = 0;
        skippedLayersCount = 0;
        let _nodes = [];
        figma.skipInvisibleInstanceChildren = false;
        if (figma.currentPage.selection.length == 0) {
            figma.notify("Select at least one layer and try again");
            return 0;
        }
        figma.currentPage.selection.forEach((node) => {
            if (checkBoundVariabled(node)) {
                _nodes.push(node);
            }
            if ('findAll' in node) {
                const nodes = node.findAll((n) => {
                    return checkBoundVariabled(n);
                });
                _nodes = _nodes.concat(nodes);
            }
        });
        console.log(_nodes);
        const total = _nodes.length;
        totalLayersCount = total;
        let threshhold = total > 700 ? 5 : 10;
        while (_nodes.length) {
            const node = _nodes.shift();
            const processed = total - _nodes.length;
            // (70 - 44) / 70
            const percent = Math.round(((total - _nodes.length) / total) * 100);
            const msg = `${percent}% done. Working on layer ${processed} out of ${total}`;
            console.log(msg);
            yield processLayer(node, processed).catch(err => {
                console.error(err);
            });
            reboundLayersCount++;
            if (percent % threshhold === 0) {
                figma.ui.postMessage({ event: "SWAP_VAR_PROGRESS", message: msg });
            }
        }
        return total;
    });
}
function getVariableName(variable) {
    const name = variable.name;
    return name.replaceAll('sx', 'spacing').replaceAll('sy', 'spacing/minor');
}
function findVariableMatch(varId) {
    return __awaiter(this, void 0, void 0, function* () {
        const variable = yield figma.variables.getVariableByIdAsync(varId);
        if (!variable) {
            return null;
        }
        const name = getVariableName(variable);
        const targetVariable = importadVariablesLibrary.find(variable => {
            return variable.name == name;
        });
        if (!targetVariable) {
            console.warn(`Cannot find ${variable.name}`);
            return null;
        }
        ;
        if (targetVariable.id == variable.id) {
            console.warn(`${variable.name} is a local variable`);
            skippedLayersCount++;
            return null;
        }
        return targetVariable;
    });
}
function processLayer(node, count) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundVairables = Object.entries(node.boundVariables);
        if (node.type == 'TEXT') {
            return yield processTextNode(node, count);
        }
        yield Promise.all(boundVairables.map((_a) => __awaiter(this, [_a], void 0, function* ([propName, boundVar]) {
            return yield bindVariable(node, propName, boundVar).catch((err) => {
                return err + `${propName}`;
            });
        }))).catch(function (err) {
            console.log(err.message); // some coding error in handling happened
        });
        if (count % 50 == 0) {
            yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(1);
        }
    });
}
function bindPropertyVariables(props, figmaFn) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = [];
        const propsCopy = (0,_clone__WEBPACK_IMPORTED_MODULE_1__._clone)(props);
        for (let prop of propsCopy) {
            for (const field in prop.boundVariables) {
                const alias = prop.boundVariables[field];
                const variable = yield findVariableMatch(alias.id);
                const spread = prop['spread']; //workaround Figma bug. It resets spread after calling figma.variables.setBoundVariableForEffect
                if (variable) {
                    // prop.boundVariables = {};
                    prop = figmaFn(prop, field, null);
                    prop = figmaFn(prop, field, variable);
                }
                if (typeof spread != 'undefined') {
                    prop['spread'] = spread;
                }
            }
            result.push(prop);
        }
        return result;
    });
}
function bindVariable(node, propName, variableBinding) {
    return __awaiter(this, void 0, void 0, function* () {
        if (propName == 'fills' && 'fills' in node) {
            node.fills = yield bindPropertyVariables(node.fills, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'strokes' && 'strokes' in node) {
            node.strokes = yield bindPropertyVariables(node.strokes, figma.variables.setBoundVariableForPaint);
        }
        else if (propName == 'effects' && 'effects' in node) {
            node.effects = yield bindPropertyVariables(node.effects, figma.variables.setBoundVariableForEffect);
        }
        else if (propName == 'layoutGrids' && 'layoutGrids' in node) {
            node.layoutGrids = yield bindPropertyVariables(node.layoutGrids, figma.variables.setBoundVariableForLayoutGrid);
        }
        else if (propName == 'componentProperties' || propName == 'textRangeFills') {
            console.warn(`Swap does not work for ${propName}, skipping node`);
        }
        else {
            const variable = yield findVariableMatch(variableBinding.id);
            if (variable) {
                node.setBoundVariable(propName, null);
                node.setBoundVariable(propName, variable);
            }
        }
        return node;
    });
}
function processTextNode(node, count) {
    return __awaiter(this, void 0, void 0, function* () {
        const boundStyleVariables = node.getStyledTextSegments(['boundVariables']);
        const fillStyleTextSegments = node.getStyledTextSegments(['fills']);
        for (const textSegment of boundStyleVariables) {
            if ('boundVariables' in textSegment) {
                const boundVairables = Object.entries(textSegment.boundVariables);
                yield Promise.all(boundVairables.map((_a) => __awaiter(this, [_a], void 0, function* ([propName, boundVar]) {
                    return yield bindTextRangeVariables(boundVar, node, textSegment, propName);
                })));
            }
        }
        for (const textSegment of fillStyleTextSegments) {
            if ('fills' in textSegment) {
                let newPaints = [];
                for (const fill of textSegment.fills) {
                    if ('boundVariables' in fill) {
                        const colorVariableReference = fill.boundVariables.color.id;
                        const figmaVariable = yield findVariableMatch(colorVariableReference);
                        if (!figmaVariable)
                            continue;
                        const boundFill = figma.variables.setBoundVariableForPaint(fill, 'color', figmaVariable);
                        newPaints.push(boundFill);
                    }
                }
                if (newPaints.length) {
                    node.setRangeFills(textSegment.start, textSegment.end, newPaints);
                }
            }
        }
        if (count % 50 == 0) {
            yield (0,_delay_async__WEBPACK_IMPORTED_MODULE_0__.delayAsync)(1);
        }
        return node;
    });
}
function bindTextRangeVariables(boundVar, node, textSegment, propName) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`bindTextRangeVariables: ${propName}`);
        const variable = yield findVariableMatch(boundVar.id);
        if (variable) {
            try {
                node.setRangeBoundVariable(textSegment.start, textSegment.end, propName, variable);
            }
            catch (e) {
                console.warn(`Failed to bind ${propName} to a variable${variable.name}:${variable.resolvedType}`);
                console.log(e); // some coding error in handling happened
            }
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_swap_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/swap-variables */ "./src/utils/swap-variables.ts");
/* harmony import */ var _utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/collect-variables */ "./src/utils/collect-variables.ts");
/* harmony import */ var _utils_storage2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/storage2 */ "./src/utils/storage2.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



console.clear();
let globalTokens;
const collectionNames = new Map([
    ["brandColors", "Color Theme" /*"Brand Color"*/],
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
figma.ui.onmessage = (eventData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("code received message", eventData);
    const params = eventData.params;
    if (eventData.type === "IMPORT") {
    }
    else if (eventData.type === "VARS_UI_LOADED") {
        yield (0,_utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__.syncVariableCollections)();
    }
    else if (eventData.type === "REMOVE_VARS_COLLECTION") {
        yield (0,_utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__.removeVariableCollection)(eventData.fileName);
    }
    else if (eventData.type === "SWAP_VARIABLES") {
        const key = eventData.fileName;
        if (!key) {
            return figma.notify("Select variables to swap");
        }
        const data = _utils_storage2__WEBPACK_IMPORTED_MODULE_2__.get(key);
        const layersCount = yield (0,_utils_swap_variables__WEBPACK_IMPORTED_MODULE_0__.swapVariables)(data).catch(err => {
            console.error(err);
            figma.notify(err, { error: true });
            throw err;
        });
        figma.ui.postMessage({ event: "SWAP_VARIABLES_DONE" });
        figma.notify(`Processed ${layersCount} layers`);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDdUQ7QUFDdUM7QUFDcEQ7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRkFBdUI7QUFDckM7QUFDQTtBQUNBLGNBQWMsa0ZBQXdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBUztBQUM5QixrQ0FBa0Msb0VBQWE7QUFDL0M7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBLFNBQVM7QUFDVCwrQkFBK0IsOEJBQThCO0FBQzdELGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9jb2xsZWN0LXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2RlbGF5LWFzeW5jLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvc3RvcmFnZTIudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9zd2FwLXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBfY2xvbmUodmFsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBfY2xvbmUoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IF9jbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyAndW5rbm93bic7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gXCIuLi91dGlscy9zdG9yYWdlMlwiO1xuZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIHZhciB1ID0gJycsIG0gPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4JywgaSA9IDAsIHJiID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuICAgIHdoaWxlIChpKysgPCAzNikge1xuICAgICAgICB2YXIgYyA9IG1baSAtIDFdLCByID0gcmIgJiAweGYsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgIHUgKz0gKGMgPT0gJy0nIHx8IGMgPT0gJzQnKSA/IGMgOiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmIgPSBpICUgOCA9PSAwID8gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwIDogcmIgPj4gNDtcbiAgICB9XG4gICAgcmV0dXJuIHU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1wb3J0ZWRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIHlpZWxkIHN0b3JlLmdldFN0b3JlRGF0YSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN5bmNWYXJpYWJsZUNvbGxlY3Rpb25zKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0geWllbGQgZ2V0SW1wb3J0ZWRWYXJpYWJsZXMoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICBzdG9yZS5mb3JFYWNoKCh2YWx1ZSwga2V5LCBtYXApID0+IHtcbiAgICAgICAgICAgIGRhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBldmVudDogXCJTWU5DX1ZBUlNcIiwgZGF0YTogZGF0YSB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWYXJpYWJsZUNvbGxlY3Rpb24oZmlsZUtleSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIHN0b3JlLnJlbW92ZShmaWxlS2V5KTtcbiAgICAgICAgeWllbGQgc3luY1ZhcmlhYmxlQ29sbGVjdGlvbnMoKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWxheUFzeW5jKHRpbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3Qgc3RvcmUgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RvcmVEYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnlDb2xsZWN0aW9ucyA9IHlpZWxkIGZpZ21hLnRlYW1MaWJyYXJ5LmdldEF2YWlsYWJsZUxpYnJhcnlWYXJpYWJsZUNvbGxlY3Rpb25zQXN5bmMoKS5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChsaWJyYXJ5Q29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEudGVhbUxpYnJhcnkuZ2V0VmFyaWFibGVzSW5MaWJyYXJ5Q29sbGVjdGlvbkFzeW5jKGNvbGxlY3Rpb24ua2V5KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZXMgPSBzdG9yZS5nZXQoY29sbGVjdGlvbi5saWJyYXJ5TmFtZSkgfHwgW107XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzLmNvbmNhdChkYXRhKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQoY29sbGVjdGlvbi5saWJyYXJ5TmFtZSwgdmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSkpO1xuICAgICAgICBjb25zdCBsb2NhbExpYnJhcnlWYXJpYWJsZXMgPSB5aWVsZCBjb2xsZWN0TG9jYWxWYXJpYWJsZXMoKTtcbiAgICAgICAgaWYgKGxvY2FsTGlicmFyeVZhcmlhYmxlcykge1xuICAgICAgICAgICAgc3RvcmUuc2V0KGxvY2FsTGlicmFyeVZhcmlhYmxlcy5uYW1lLCBsb2NhbExpYnJhcnlWYXJpYWJsZXMubGlicmFyeVZhcmlhYmxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29sbGVjdExvY2FsVmFyaWFibGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRocm93IChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbGlicmFyeVZhcmlhYmxlcyA9IHZhcmlhYmxlcy5tYXAodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBrZXksIHJlc29sdmVkVHlwZSwgbmFtZSB9ID0gdmFyaWFibGU7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lLCBrZXksIHJlc29sdmVkVHlwZSB9O1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG5hbWUgPSBcIkxvY2FsIHZhcmlhYmxlc1wiO1xuICAgICAgICBpZiAobGlicmFyeVZhcmlhYmxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGxpYnJhcnlWYXJpYWJsZXMgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0KG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5zZXQobmFtZSwgZGF0YSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiBzdG9yZS5nZXQobmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5kZWxldGUobmFtZSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN0b3JlKCkge1xuICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vZGVsYXktYXN5bmNcIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5sZXQgdG90YWxMYXllcnNDb3VudCA9IDA7XG5sZXQgcmVib3VuZExheWVyc0NvdW50ID0gMDtcbmxldCBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xubGV0IG1pc3NpbmdMYXllcnNDb3VudCA9IDA7XG5sZXQgaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5O1xuZnVuY3Rpb24gY2hlY2tCb3VuZFZhcmlhYmxlZChub2RlKSB7XG4gICAgcmV0dXJuICdib3VuZFZhcmlhYmxlcycgaW4gbm9kZSAmJiBPYmplY3Qua2V5cyhub2RlLmJvdW5kVmFyaWFibGVzKS5sZW5ndGggPiAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBWYXJpYWJsZXMoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGltcG9ydGFkVmFyaWFibGVzTGlicmFyeSA9IFtdO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChkYXRhLm1hcCgocmVjb3JkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgZmlnbWEudmFyaWFibGVzLmltcG9ydFZhcmlhYmxlQnlLZXlBc3luYyhyZWNvcmQua2V5KS50aGVuKHZhcmlhYmxlID0+IGltcG9ydGFkVmFyaWFibGVzTGlicmFyeS5wdXNoKHZhcmlhYmxlKSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBsZXQgX25vZGVzID0gW107XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGF5ZXIgYW5kIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tCb3VuZFZhcmlhYmxlZChub2RlKSkge1xuICAgICAgICAgICAgICAgIF9ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdmaW5kQWxsJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlLmZpbmRBbGwoKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrQm91bmRWYXJpYWJsZWQobik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX25vZGVzID0gX25vZGVzLmNvbmNhdChub2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhfbm9kZXMpO1xuICAgICAgICBjb25zdCB0b3RhbCA9IF9ub2Rlcy5sZW5ndGg7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSB0b3RhbDtcbiAgICAgICAgbGV0IHRocmVzaGhvbGQgPSB0b3RhbCA+IDcwMCA/IDUgOiAxMDtcbiAgICAgICAgd2hpbGUgKF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBfbm9kZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IHRvdGFsIC0gX25vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIC8vICg3MCAtIDQ0KSAvIDcwXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoKHRvdGFsIC0gX25vZGVzLmxlbmd0aCkgLyB0b3RhbCkgKiAxMDApO1xuICAgICAgICAgICAgY29uc3QgbXNnID0gYCR7cGVyY2VudH0lIGRvbmUuIFdvcmtpbmcgb24gbGF5ZXIgJHtwcm9jZXNzZWR9IG91dCBvZiAke3RvdGFsfWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgeWllbGQgcHJvY2Vzc0xheWVyKG5vZGUsIHByb2Nlc3NlZCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYm91bmRMYXllcnNDb3VudCsrO1xuICAgICAgICAgICAgaWYgKHBlcmNlbnQgJSB0aHJlc2hob2xkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBldmVudDogXCJTV0FQX1ZBUl9QUk9HUkVTU1wiLCBtZXNzYWdlOiBtc2cgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZUFsbCgnc3gnLCAnc3BhY2luZycpLnJlcGxhY2VBbGwoJ3N5JywgJ3NwYWNpbmcvbWlub3InKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVNYXRjaCh2YXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcklkKTtcbiAgICAgICAgaWYgKCF2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGdldFZhcmlhYmxlTmFtZSh2YXJpYWJsZSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhcmlhYmxlID0gaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5LmZpbmQodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlLm5hbWUgPT0gbmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdGFyZ2V0VmFyaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IGZpbmQgJHt2YXJpYWJsZS5uYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBpZiAodGFyZ2V0VmFyaWFibGUuaWQgPT0gdmFyaWFibGUuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHt2YXJpYWJsZS5uYW1lfSBpcyBhIGxvY2FsIHZhcmlhYmxlYCk7XG4gICAgICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQrKztcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRWYXJpYWJsZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NMYXllcihub2RlLCBjb3VudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kVmFpcmFibGVzID0gT2JqZWN0LmVudHJpZXMobm9kZS5ib3VuZFZhcmlhYmxlcyk7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgcHJvY2Vzc1RleHROb2RlKG5vZGUsIGNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChib3VuZFZhaXJhYmxlcy5tYXAoKF9hKSA9PiBfX2F3YWl0ZXIodGhpcywgW19hXSwgdm9pZCAwLCBmdW5jdGlvbiogKFtwcm9wTmFtZSwgYm91bmRWYXJdKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgYmluZFZhcmlhYmxlKG5vZGUsIHByb3BOYW1lLCBib3VuZFZhcikuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnIgKyBgJHtwcm9wTmFtZX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpOyAvLyBzb21lIGNvZGluZyBlcnJvciBpbiBoYW5kbGluZyBoYXBwZW5lZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvdW50ICUgNTAgPT0gMCkge1xuICAgICAgICAgICAgeWllbGQgZGVsYXlBc3luYygxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhwcm9wcywgZmlnbWFGbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBwcm9wc0NvcHkgPSBfY2xvbmUocHJvcHMpO1xuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHByb3BzQ29weSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBwcm9wLmJvdW5kVmFyaWFibGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWxpYXMgPSBwcm9wLmJvdW5kVmFyaWFibGVzW2ZpZWxkXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZU1hdGNoKGFsaWFzLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJlYWQgPSBwcm9wWydzcHJlYWQnXTsgLy93b3JrYXJvdW5kIEZpZ21hIGJ1Zy4gSXQgcmVzZXRzIHNwcmVhZCBhZnRlciBjYWxsaW5nIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHByb3AuYm91bmRWYXJpYWJsZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IGZpZ21hRm4ocHJvcCwgZmllbGQsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wID0gZmlnbWFGbihwcm9wLCBmaWVsZCwgdmFyaWFibGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNwcmVhZCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9wWydzcHJlYWQnXSA9IHNwcmVhZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaChwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYmluZFZhcmlhYmxlKG5vZGUsIHByb3BOYW1lLCB2YXJpYWJsZUJpbmRpbmcpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAocHJvcE5hbWUgPT0gJ2ZpbGxzJyAmJiAnZmlsbHMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZmlsbHMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5maWxscywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ3N0cm9rZXMnICYmICdzdHJva2VzJyBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlLnN0cm9rZXMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5zdHJva2VzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnZWZmZWN0cycgJiYgJ2VmZmVjdHMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuZWZmZWN0cyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmVmZmVjdHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yRWZmZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnbGF5b3V0R3JpZHMnICYmICdsYXlvdXRHcmlkcycgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5sYXlvdXRHcmlkcyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmxheW91dEdyaWRzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckxheW91dEdyaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdjb21wb25lbnRQcm9wZXJ0aWVzJyB8fCBwcm9wTmFtZSA9PSAndGV4dFJhbmdlRmlsbHMnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFN3YXAgZG9lcyBub3Qgd29yayBmb3IgJHtwcm9wTmFtZX0sIHNraXBwaW5nIG5vZGVgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmluZFZhcmlhYmxlTWF0Y2godmFyaWFibGVCaW5kaW5nLmlkKTtcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShwcm9wTmFtZSwgbnVsbCk7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKHByb3BOYW1lLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcm9jZXNzVGV4dE5vZGUobm9kZSwgY291bnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBib3VuZFN0eWxlVmFyaWFibGVzID0gbm9kZS5nZXRTdHlsZWRUZXh0U2VnbWVudHMoWydib3VuZFZhcmlhYmxlcyddKTtcbiAgICAgICAgY29uc3QgZmlsbFN0eWxlVGV4dFNlZ21lbnRzID0gbm9kZS5nZXRTdHlsZWRUZXh0U2VnbWVudHMoWydmaWxscyddKTtcbiAgICAgICAgZm9yIChjb25zdCB0ZXh0U2VnbWVudCBvZiBib3VuZFN0eWxlVmFyaWFibGVzKSB7XG4gICAgICAgICAgICBpZiAoJ2JvdW5kVmFyaWFibGVzJyBpbiB0ZXh0U2VnbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kVmFpcmFibGVzID0gT2JqZWN0LmVudHJpZXModGV4dFNlZ21lbnQuYm91bmRWYXJpYWJsZXMpO1xuICAgICAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGJvdW5kVmFpcmFibGVzLm1hcCgoX2EpID0+IF9fYXdhaXRlcih0aGlzLCBbX2FdLCB2b2lkIDAsIGZ1bmN0aW9uKiAoW3Byb3BOYW1lLCBib3VuZFZhcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGJpbmRUZXh0UmFuZ2VWYXJpYWJsZXMoYm91bmRWYXIsIG5vZGUsIHRleHRTZWdtZW50LCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHRleHRTZWdtZW50IG9mIGZpbGxTdHlsZVRleHRTZWdtZW50cykge1xuICAgICAgICAgICAgaWYgKCdmaWxscycgaW4gdGV4dFNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3UGFpbnRzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWxsIG9mIHRleHRTZWdtZW50LmZpbGxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnYm91bmRWYXJpYWJsZXMnIGluIGZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yVmFyaWFibGVSZWZlcmVuY2UgPSBmaWxsLmJvdW5kVmFyaWFibGVzLmNvbG9yLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlnbWFWYXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZU1hdGNoKGNvbG9yVmFyaWFibGVSZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWdtYVZhcmlhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm91bmRGaWxsID0gZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludChmaWxsLCAnY29sb3InLCBmaWdtYVZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1BhaW50cy5wdXNoKGJvdW5kRmlsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5ld1BhaW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRSYW5nZUZpbGxzKHRleHRTZWdtZW50LnN0YXJ0LCB0ZXh0U2VnbWVudC5lbmQsIG5ld1BhaW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudCAlIDUwID09IDApIHtcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBiaW5kVGV4dFJhbmdlVmFyaWFibGVzKGJvdW5kVmFyLCBub2RlLCB0ZXh0U2VnbWVudCwgcHJvcE5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgYmluZFRleHRSYW5nZVZhcmlhYmxlczogJHtwcm9wTmFtZX1gKTtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB5aWVsZCBmaW5kVmFyaWFibGVNYXRjaChib3VuZFZhci5pZCk7XG4gICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBub2RlLnNldFJhbmdlQm91bmRWYXJpYWJsZSh0ZXh0U2VnbWVudC5zdGFydCwgdGV4dFNlZ21lbnQuZW5kLCBwcm9wTmFtZSwgdmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZhaWxlZCB0byBiaW5kICR7cHJvcE5hbWV9IHRvIGEgdmFyaWFibGUke3ZhcmlhYmxlLm5hbWV9OiR7dmFyaWFibGUucmVzb2x2ZWRUeXBlfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpOyAvLyBzb21lIGNvZGluZyBlcnJvciBpbiBoYW5kbGluZyBoYXBwZW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgc3dhcFZhcmlhYmxlcyB9IGZyb20gJy4vdXRpbHMvc3dhcC12YXJpYWJsZXMnO1xuaW1wb3J0IHsgcmVtb3ZlVmFyaWFibGVDb2xsZWN0aW9uLCBzeW5jVmFyaWFibGVDb2xsZWN0aW9ucyB9IGZyb20gJy4vdXRpbHMvY29sbGVjdC12YXJpYWJsZXMnO1xuaW1wb3J0ICogYXMgc3RvcmUgZnJvbSAnLi91dGlscy9zdG9yYWdlMic7XG5jb25zb2xlLmNsZWFyKCk7XG5sZXQgZ2xvYmFsVG9rZW5zO1xuY29uc3QgY29sbGVjdGlvbk5hbWVzID0gbmV3IE1hcChbXG4gICAgW1wiYnJhbmRDb2xvcnNcIiwgXCJDb2xvciBUaGVtZVwiIC8qXCJCcmFuZCBDb2xvclwiKi9dLFxuICAgIFtcInRoZW1lQ29sb3JzXCIsIFwiQ29sb3IgVGhlbWVcIl0sXG4gICAgW1wiY29tcG9uZW50Q29sb3JzXCIsIFwiQ29tcG9uZW50IFRva2Vuc1wiXSxcbiAgICBbXCJzcGFjaW5nXCIsIFwiU3BhY2luZ1wiXSxcbiAgICBbXCJvcGFjaXR5XCIsIFwiT3BhY2l0eVwiXSxcbiAgICBbXCJyYWRpaVwiLCBcIlJhZGlpXCJdLFxuICAgIFtcImljb25TY2FsZVwiLCBcIkljb24gU2NhbGVcIl0sXG4gICAgW1wiZ2xvYmFsU2l6aW5nXCIsIFwiR2xvYmFsIFNpemluZ1wiXSxcbl0pO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgd2lkdGg6IDMyMCxcbiAgICBoZWlnaHQ6IDMyMCxcbiAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKGV2ZW50RGF0YSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJjb2RlIHJlY2VpdmVkIG1lc3NhZ2VcIiwgZXZlbnREYXRhKTtcbiAgICBjb25zdCBwYXJhbXMgPSBldmVudERhdGEucGFyYW1zO1xuICAgIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJJTVBPUlRcIikge1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJWQVJTX1VJX0xPQURFRFwiKSB7XG4gICAgICAgIHlpZWxkIHN5bmNWYXJpYWJsZUNvbGxlY3Rpb25zKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlJFTU9WRV9WQVJTX0NPTExFQ1RJT05cIikge1xuICAgICAgICB5aWVsZCByZW1vdmVWYXJpYWJsZUNvbGxlY3Rpb24oZXZlbnREYXRhLmZpbGVOYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiU1dBUF9WQVJJQUJMRVNcIikge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudERhdGEuZmlsZU5hbWU7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmlnbWEubm90aWZ5KFwiU2VsZWN0IHZhcmlhYmxlcyB0byBzd2FwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBzdG9yZS5nZXQoa2V5KTtcbiAgICAgICAgY29uc3QgbGF5ZXJzQ291bnQgPSB5aWVsZCBzd2FwVmFyaWFibGVzKGRhdGEpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoZXJyLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBldmVudDogXCJTV0FQX1ZBUklBQkxFU19ET05FXCIgfSk7XG4gICAgICAgIGZpZ21hLm5vdGlmeShgUHJvY2Vzc2VkICR7bGF5ZXJzQ291bnR9IGxheWVyc2ApO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9