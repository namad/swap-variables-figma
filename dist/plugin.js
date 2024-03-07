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
/* harmony export */   collectVariables: () => (/* binding */ collectVariables),
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
function collectVariables(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        // const variables = await figma.variables.getLocalVariablesAsync().catch(err => {
        //     throw (err);
        // });
        // const importedData = variables.map(variable => {
        //     const {
        //         key, id, name
        //     } = variable;
        //     return { name, key, id };
        // })
        // let fileKey = figma.root.getPluginData('SDSFileKey');
        // if (!fileKey) {
        //     fileKey = uuidv4();
        //     figma.root.setPluginData('SDSFileKey', fileKey);
        // }
        // await store.set(fileKey, {
        //     type: 'variables',
        //     fileName: fileName || figma.root.name,
        //     timestamp: new Date().getTime(),
        //     variables: importedData
        // });
        // const data = await getImportedVariables();
        // figma.ui.postMessage({ event: "SYNC_VARS", fileName: figma.root.name, data: data });
    });
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
        for (const collection of libraryCollections) {
            yield getVariablesInLibraryCollection(collection, store);
        }
        const localLibraryVariables = yield collectLocalVariables();
        if (localLibraryVariables) {
            store.set(localLibraryVariables.name, localLibraryVariables.libraryVariables);
        }
        debugger;
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
function getVariablesInLibraryCollection(collection, store) {
    return __awaiter(this, void 0, void 0, function* () {
        let variables = store.get(collection.libraryName) || [];
        let collectionVars = yield figma.teamLibrary.getVariablesInLibraryCollectionAsync(collection.key);
        variables = variables.concat(collectionVars);
        store.set(collection.libraryName, variables);
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
function swapVariables(data) {
    return __awaiter(this, void 0, void 0, function* () {
        importadVariablesLibrary = [];
        yield Promise.all(data.map((record) => __awaiter(this, void 0, void 0, function* () {
            const variable = yield figma.variables.importVariableByKeyAsync(record.key);
            importadVariablesLibrary.push(variable);
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
            if ('boundVariables' in node && Object.keys(node.boundVariables).length > 0) {
                _nodes.push(node);
            }
            if ('findAll' in node) {
                const nodes = node.findAll((n) => {
                    if ('boundVariables' in n) {
                        return Object.keys(n.boundVariables).length > 0;
                    }
                    else {
                        return false;
                    }
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
        yield Promise.all(boundVairables.map(([propName, boundVar]) => __awaiter(this, void 0, void 0, function* () {
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
    else if (eventData.type === "COLLECT_VARS") {
        yield (0,_utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__.collectVariables)(eventData.fileName);
    }
    else if (eventData.type === "VARS_UI_LOADED") {
        yield (0,_utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__.syncVariableCollections)();
    }
    else if (eventData.type === "REMOVE_VARS_COLLECTION") {
        yield (0,_utils_collect_variables__WEBPACK_IMPORTED_MODULE_1__.removeVariableCollection)(eventData.fileName);
    }
    else if (eventData.type === "SWAP_VARIABLES") {
        debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDdUQ7QUFDeUQ7QUFDdEU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRUFBZ0I7QUFDOUI7QUFDQTtBQUNBLGNBQWMsaUZBQXVCO0FBQ3JDO0FBQ0E7QUFDQSxjQUFjLGtGQUF3QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBUztBQUM5QixrQ0FBa0Msb0VBQWE7QUFDL0M7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBLFNBQVM7QUFDVCwrQkFBK0IsOEJBQThCO0FBQzdELGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvY2xvbmUudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9jb2xsZWN0LXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2RlbGF5LWFzeW5jLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvc3RvcmFnZTIudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9zd2FwLXZhcmlhYmxlcy50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBfY2xvbmUodmFsKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5tYXAoeCA9PiBfY2xvbmUoeCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbCkge1xuICAgICAgICAgICAgICAgIG9ba2V5XSA9IF9jbG9uZSh2YWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyAndW5rbm93bic7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gXCIuLi91dGlscy9zdG9yYWdlMlwiO1xuZnVuY3Rpb24gdXVpZHY0KCkge1xuICAgIHZhciB1ID0gJycsIG0gPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4JywgaSA9IDAsIHJiID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuICAgIHdoaWxlIChpKysgPCAzNikge1xuICAgICAgICB2YXIgYyA9IG1baSAtIDFdLCByID0gcmIgJiAweGYsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgIHUgKz0gKGMgPT0gJy0nIHx8IGMgPT0gJzQnKSA/IGMgOiB2LnRvU3RyaW5nKDE2KTtcbiAgICAgICAgcmIgPSBpICUgOCA9PSAwID8gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwIDogcmIgPj4gNDtcbiAgICB9XG4gICAgcmV0dXJuIHU7XG59XG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFZhcmlhYmxlcyhmaWxlTmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIGNvbnN0IHZhcmlhYmxlcyA9IGF3YWl0IGZpZ21hLnZhcmlhYmxlcy5nZXRMb2NhbFZhcmlhYmxlc0FzeW5jKCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIHRocm93IChlcnIpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gY29uc3QgaW1wb3J0ZWREYXRhID0gdmFyaWFibGVzLm1hcCh2YXJpYWJsZSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCB7XG4gICAgICAgIC8vICAgICAgICAga2V5LCBpZCwgbmFtZVxuICAgICAgICAvLyAgICAgfSA9IHZhcmlhYmxlO1xuICAgICAgICAvLyAgICAgcmV0dXJuIHsgbmFtZSwga2V5LCBpZCB9O1xuICAgICAgICAvLyB9KVxuICAgICAgICAvLyBsZXQgZmlsZUtleSA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YSgnU0RTRmlsZUtleScpO1xuICAgICAgICAvLyBpZiAoIWZpbGVLZXkpIHtcbiAgICAgICAgLy8gICAgIGZpbGVLZXkgPSB1dWlkdjQoKTtcbiAgICAgICAgLy8gICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YSgnU0RTRmlsZUtleScsIGZpbGVLZXkpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGF3YWl0IHN0b3JlLnNldChmaWxlS2V5LCB7XG4gICAgICAgIC8vICAgICB0eXBlOiAndmFyaWFibGVzJyxcbiAgICAgICAgLy8gICAgIGZpbGVOYW1lOiBmaWxlTmFtZSB8fCBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgIC8vICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAvLyAgICAgdmFyaWFibGVzOiBpbXBvcnRlZERhdGFcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRJbXBvcnRlZFZhcmlhYmxlcygpO1xuICAgICAgICAvLyBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcIlNZTkNfVkFSU1wiLCBmaWxlTmFtZTogZmlnbWEucm9vdC5uYW1lLCBkYXRhOiBkYXRhIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEltcG9ydGVkVmFyaWFibGVzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiB5aWVsZCBzdG9yZS5nZXRTdG9yZURhdGEoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzeW5jVmFyaWFibGVDb2xsZWN0aW9ucygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdG9yZSA9IHlpZWxkIGdldEltcG9ydGVkVmFyaWFibGVzKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgc3RvcmUuZm9yRWFjaCgodmFsdWUsIGtleSwgbWFwKSA9PiB7XG4gICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgZXZlbnQ6IFwiU1lOQ19WQVJTXCIsIGRhdGE6IGRhdGEgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVmFyaWFibGVDb2xsZWN0aW9uKGZpbGVLZXkpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBzdG9yZS5yZW1vdmUoZmlsZUtleSk7XG4gICAgICAgIHlpZWxkIHN5bmNWYXJpYWJsZUNvbGxlY3Rpb25zKCk7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsYXlBc3luYyh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHN0b3JlID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JlRGF0YSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5jbGVhcigpO1xuICAgICAgICBjb25zdCBsaWJyYXJ5Q29sbGVjdGlvbnMgPSB5aWVsZCBmaWdtYS50ZWFtTGlicmFyeS5nZXRBdmFpbGFibGVMaWJyYXJ5VmFyaWFibGVDb2xsZWN0aW9uc0FzeW5jKCkuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBjb2xsZWN0aW9uIG9mIGxpYnJhcnlDb2xsZWN0aW9ucykge1xuICAgICAgICAgICAgeWllbGQgZ2V0VmFyaWFibGVzSW5MaWJyYXJ5Q29sbGVjdGlvbihjb2xsZWN0aW9uLCBzdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9jYWxMaWJyYXJ5VmFyaWFibGVzID0geWllbGQgY29sbGVjdExvY2FsVmFyaWFibGVzKCk7XG4gICAgICAgIGlmIChsb2NhbExpYnJhcnlWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgIHN0b3JlLnNldChsb2NhbExpYnJhcnlWYXJpYWJsZXMubmFtZSwgbG9jYWxMaWJyYXJ5VmFyaWFibGVzLmxpYnJhcnlWYXJpYWJsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb2xsZWN0TG9jYWxWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzQXN5bmMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsaWJyYXJ5VmFyaWFibGVzID0gdmFyaWFibGVzLm1hcCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgcmVzb2x2ZWRUeXBlLCBuYW1lIH0gPSB2YXJpYWJsZTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGtleSwgcmVzb2x2ZWRUeXBlIH07XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmFtZSA9IFwiTG9jYWwgdmFyaWFibGVzXCI7XG4gICAgICAgIGlmIChsaWJyYXJ5VmFyaWFibGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgbGlicmFyeVZhcmlhYmxlcyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFZhcmlhYmxlc0luTGlicmFyeUNvbGxlY3Rpb24oY29sbGVjdGlvbiwgc3RvcmUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdmFyaWFibGVzID0gc3RvcmUuZ2V0KGNvbGxlY3Rpb24ubGlicmFyeU5hbWUpIHx8IFtdO1xuICAgICAgICBsZXQgY29sbGVjdGlvblZhcnMgPSB5aWVsZCBmaWdtYS50ZWFtTGlicmFyeS5nZXRWYXJpYWJsZXNJbkxpYnJhcnlDb2xsZWN0aW9uQXN5bmMoY29sbGVjdGlvbi5rZXkpO1xuICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KGNvbGxlY3Rpb25WYXJzKTtcbiAgICAgICAgc3RvcmUuc2V0KGNvbGxlY3Rpb24ubGlicmFyeU5hbWUsIHZhcmlhYmxlcyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0KG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5zZXQobmFtZSwgZGF0YSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiBzdG9yZS5nZXQobmFtZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzdG9yZS5kZWxldGUobmFtZSk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN0b3JlKCkge1xuICAgIHN0b3JlLmNsZWFyKCk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBkZWxheUFzeW5jIH0gZnJvbSBcIi4vZGVsYXktYXN5bmNcIjtcbmltcG9ydCB7IF9jbG9uZSB9IGZyb20gXCIuL2Nsb25lXCI7XG5sZXQgdG90YWxMYXllcnNDb3VudCA9IDA7XG5sZXQgcmVib3VuZExheWVyc0NvdW50ID0gMDtcbmxldCBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xubGV0IG1pc3NpbmdMYXllcnNDb3VudCA9IDA7XG5sZXQgaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5O1xuZXhwb3J0IGZ1bmN0aW9uIHN3YXBWYXJpYWJsZXMoZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGltcG9ydGFkVmFyaWFibGVzTGlicmFyeSA9IFtdO1xuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChkYXRhLm1hcCgocmVjb3JkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpZ21hLnZhcmlhYmxlcy5pbXBvcnRWYXJpYWJsZUJ5S2V5QXN5bmMocmVjb3JkLmtleSk7XG4gICAgICAgICAgICBpbXBvcnRhZFZhcmlhYmxlc0xpYnJhcnkucHVzaCh2YXJpYWJsZSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQgPSAwO1xuICAgICAgICBsZXQgX25vZGVzID0gW107XG4gICAgICAgIGZpZ21hLnNraXBJbnZpc2libGVJbnN0YW5jZUNoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIGlmIChmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlNlbGVjdCBhdCBsZWFzdCBvbmUgbGF5ZXIgYW5kIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2JvdW5kVmFyaWFibGVzJyBpbiBub2RlICYmIE9iamVjdC5rZXlzKG5vZGUuYm91bmRWYXJpYWJsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfbm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnZmluZEFsbCcgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gbm9kZS5maW5kQWxsKChuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnYm91bmRWYXJpYWJsZXMnIGluIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhuLmJvdW5kVmFyaWFibGVzKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX25vZGVzID0gX25vZGVzLmNvbmNhdChub2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhfbm9kZXMpO1xuICAgICAgICBjb25zdCB0b3RhbCA9IF9ub2Rlcy5sZW5ndGg7XG4gICAgICAgIHRvdGFsTGF5ZXJzQ291bnQgPSB0b3RhbDtcbiAgICAgICAgbGV0IHRocmVzaGhvbGQgPSB0b3RhbCA+IDcwMCA/IDUgOiAxMDtcbiAgICAgICAgd2hpbGUgKF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBfbm9kZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IHRvdGFsIC0gX25vZGVzLmxlbmd0aDtcbiAgICAgICAgICAgIC8vICg3MCAtIDQ0KSAvIDcwXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCgoKHRvdGFsIC0gX25vZGVzLmxlbmd0aCkgLyB0b3RhbCkgKiAxMDApO1xuICAgICAgICAgICAgY29uc3QgbXNnID0gYCR7cGVyY2VudH0lIGRvbmUuIFdvcmtpbmcgb24gbGF5ZXIgJHtwcm9jZXNzZWR9IG91dCBvZiAke3RvdGFsfWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgeWllbGQgcHJvY2Vzc0xheWVyKG5vZGUsIHByb2Nlc3NlZCkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYm91bmRMYXllcnNDb3VudCsrO1xuICAgICAgICAgICAgaWYgKHBlcmNlbnQgJSB0aHJlc2hob2xkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBldmVudDogXCJTV0FQX1ZBUl9QUk9HUkVTU1wiLCBtZXNzYWdlOiBtc2cgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLm5hbWU7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZUFsbCgnc3gnLCAnc3BhY2luZycpLnJlcGxhY2VBbGwoJ3N5JywgJ3NwYWNpbmcvbWlub3InKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVmFyaWFibGVNYXRjaCh2YXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldFZhcmlhYmxlQnlJZEFzeW5jKHZhcklkKTtcbiAgICAgICAgaWYgKCF2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IGdldFZhcmlhYmxlTmFtZSh2YXJpYWJsZSk7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhcmlhYmxlID0gaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5LmZpbmQodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlLm5hbWUgPT0gbmFtZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdGFyZ2V0VmFyaWFibGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2Fubm90IGZpbmQgJHt2YXJpYWJsZS5uYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBpZiAodGFyZ2V0VmFyaWFibGUuaWQgPT0gdmFyaWFibGUuaWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHt2YXJpYWJsZS5uYW1lfSBpcyBhIGxvY2FsIHZhcmlhYmxlYCk7XG4gICAgICAgICAgICBza2lwcGVkTGF5ZXJzQ291bnQrKztcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXRWYXJpYWJsZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NMYXllcihub2RlLCBjb3VudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGJvdW5kVmFpcmFibGVzID0gT2JqZWN0LmVudHJpZXMobm9kZS5ib3VuZFZhcmlhYmxlcyk7XG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGJvdW5kVmFpcmFibGVzLm1hcCgoW3Byb3BOYW1lLCBib3VuZFZhcl0pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBiaW5kVmFyaWFibGUobm9kZSwgcHJvcE5hbWUsIGJvdW5kVmFyKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyciArIGAke3Byb3BOYW1lfWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7IC8vIHNvbWUgY29kaW5nIGVycm9yIGluIGhhbmRsaW5nIGhhcHBlbmVkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY291bnQgJSA1MCA9PSAwKSB7XG4gICAgICAgICAgICB5aWVsZCBkZWxheUFzeW5jKDEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYmluZFByb3BlcnR5VmFyaWFibGVzKHByb3BzLCBmaWdtYUZuKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IHByb3BzQ29weSA9IF9jbG9uZShwcm9wcyk7XG4gICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHNDb3B5KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIHByb3AuYm91bmRWYXJpYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGlhcyA9IHByb3AuYm91bmRWYXJpYWJsZXNbZmllbGRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0geWllbGQgZmluZFZhcmlhYmxlTWF0Y2goYWxpYXMuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwcmVhZCA9IHByb3BbJ3NwcmVhZCddOyAvL3dvcmthcm91bmQgRmlnbWEgYnVnLiBJdCByZXNldHMgc3ByZWFkIGFmdGVyIGNhbGxpbmcgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JFZmZlY3RcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvcC5ib3VuZFZhcmlhYmxlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm9wID0gZmlnbWFGbihwcm9wLCBmaWVsZCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBmaWdtYUZuKHByb3AsIGZpZWxkLCB2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ByZWFkICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BbJ3NwcmVhZCddID0gc3ByZWFkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBiaW5kVmFyaWFibGUobm9kZSwgcHJvcE5hbWUsIHZhcmlhYmxlQmluZGluZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChwcm9wTmFtZSA9PSAnZmlsbHMnICYmICdmaWxscycgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5maWxscyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLmZpbGxzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvclBhaW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnc3Ryb2tlcycgJiYgJ3N0cm9rZXMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuc3Ryb2tlcyA9IHlpZWxkIGJpbmRQcm9wZXJ0eVZhcmlhYmxlcyhub2RlLnN0cm9rZXMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdlZmZlY3RzJyAmJiAnZWZmZWN0cycgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5lZmZlY3RzID0geWllbGQgYmluZFByb3BlcnR5VmFyaWFibGVzKG5vZGUuZWZmZWN0cywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JFZmZlY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdsYXlvdXRHcmlkcycgJiYgJ2xheW91dEdyaWRzJyBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlLmxheW91dEdyaWRzID0geWllbGQgYmluZFByb3BlcnR5VmFyaWFibGVzKG5vZGUubGF5b3V0R3JpZHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yTGF5b3V0R3JpZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2NvbXBvbmVudFByb3BlcnRpZXMnIHx8IHByb3BOYW1lID09ICd0ZXh0UmFuZ2VGaWxscycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgU3dhcCBkb2VzIG5vdCB3b3JrIGZvciAke3Byb3BOYW1lfSwgc2tpcHBpbmcgbm9kZWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB5aWVsZCBmaW5kVmFyaWFibGVNYXRjaCh2YXJpYWJsZUJpbmRpbmcuaWQpO1xuICAgICAgICAgICAgaWYgKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRCb3VuZFZhcmlhYmxlKHByb3BOYW1lLCBudWxsKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIHZhcmlhYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzd2FwVmFyaWFibGVzIH0gZnJvbSAnLi91dGlscy9zd2FwLXZhcmlhYmxlcyc7XG5pbXBvcnQgeyBjb2xsZWN0VmFyaWFibGVzLCByZW1vdmVWYXJpYWJsZUNvbGxlY3Rpb24sIHN5bmNWYXJpYWJsZUNvbGxlY3Rpb25zIH0gZnJvbSAnLi91dGlscy9jb2xsZWN0LXZhcmlhYmxlcyc7XG5pbXBvcnQgKiBhcyBzdG9yZSBmcm9tICcuL3V0aWxzL3N0b3JhZ2UyJztcbmNvbnNvbGUuY2xlYXIoKTtcbmxldCBnbG9iYWxUb2tlbnM7XG5jb25zdCBjb2xsZWN0aW9uTmFtZXMgPSBuZXcgTWFwKFtcbiAgICBbXCJicmFuZENvbG9yc1wiLCBcIkNvbG9yIFRoZW1lXCIgLypcIkJyYW5kIENvbG9yXCIqL10sXG4gICAgW1widGhlbWVDb2xvcnNcIiwgXCJDb2xvciBUaGVtZVwiXSxcbiAgICBbXCJjb21wb25lbnRDb2xvcnNcIiwgXCJDb21wb25lbnQgVG9rZW5zXCJdLFxuICAgIFtcInNwYWNpbmdcIiwgXCJTcGFjaW5nXCJdLFxuICAgIFtcIm9wYWNpdHlcIiwgXCJPcGFjaXR5XCJdLFxuICAgIFtcInJhZGlpXCIsIFwiUmFkaWlcIl0sXG4gICAgW1wiaWNvblNjYWxlXCIsIFwiSWNvbiBTY2FsZVwiXSxcbiAgICBbXCJnbG9iYWxTaXppbmdcIiwgXCJHbG9iYWwgU2l6aW5nXCJdLFxuXSk7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogMzIwLFxuICAgIGhlaWdodDogMzIwLFxuICAgIHRoZW1lQ29sb3JzOiB0cnVlLFxufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAoZXZlbnREYXRhKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvZGUgcmVjZWl2ZWQgbWVzc2FnZVwiLCBldmVudERhdGEpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGV2ZW50RGF0YS5wYXJhbXM7XG4gICAgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIklNUE9SVFwiKSB7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIkNPTExFQ1RfVkFSU1wiKSB7XG4gICAgICAgIHlpZWxkIGNvbGxlY3RWYXJpYWJsZXMoZXZlbnREYXRhLmZpbGVOYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiVkFSU19VSV9MT0FERURcIikge1xuICAgICAgICB5aWVsZCBzeW5jVmFyaWFibGVDb2xsZWN0aW9ucygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJSRU1PVkVfVkFSU19DT0xMRUNUSU9OXCIpIHtcbiAgICAgICAgeWllbGQgcmVtb3ZlVmFyaWFibGVDb2xsZWN0aW9uKGV2ZW50RGF0YS5maWxlTmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlNXQVBfVkFSSUFCTEVTXCIpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50RGF0YS5maWxlTmFtZTtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWdtYS5ub3RpZnkoXCJTZWxlY3QgdmFyaWFibGVzIHRvIHN3YXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICBjb25zdCBsYXllcnNDb3VudCA9IHlpZWxkIHN3YXBWYXJpYWJsZXMoZGF0YSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShlcnIsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcIlNXQVBfVkFSSUFCTEVTX0RPTkVcIiB9KTtcbiAgICAgICAgZmlnbWEubm90aWZ5KGBQcm9jZXNzZWQgJHtsYXllcnNDb3VudH0gbGF5ZXJzYCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=