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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0w7QUFDdUQ7QUFDdUM7QUFDcEQ7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpRkFBdUI7QUFDckM7QUFDQTtBQUNBLGNBQWMsa0ZBQXdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFTO0FBQzlCLGtDQUFrQyxvRUFBYTtBQUMvQztBQUNBLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0EsU0FBUztBQUNULCtCQUErQiw4QkFBOEI7QUFDN0Qsa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9jbG9uZS50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL2NvbGxlY3QtdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdXRpbHMvZGVsYXktYXN5bmMudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91dGlscy9zdG9yYWdlMi50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3V0aWxzL3N3YXAtdmFyaWFibGVzLnRzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIF9jbG9uZSh2YWwpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLm1hcCh4ID0+IF9jbG9uZSh4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgb1trZXldID0gX2Nsb25lKHZhbFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93ICd1bmtub3duJztcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0ICogYXMgc3RvcmUgZnJvbSBcIi4uL3V0aWxzL3N0b3JhZ2UyXCI7XG5mdW5jdGlvbiB1dWlkdjQoKSB7XG4gICAgdmFyIHUgPSAnJywgbSA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLCBpID0gMCwgcmIgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG4gICAgd2hpbGUgKGkrKyA8IDM2KSB7XG4gICAgICAgIHZhciBjID0gbVtpIC0gMV0sIHIgPSByYiAmIDB4ZiwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgdSArPSAoYyA9PSAnLScgfHwgYyA9PSAnNCcpID8gYyA6IHYudG9TdHJpbmcoMTYpO1xuICAgICAgICByYiA9IGkgJSA4ID09IDAgPyBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDAgOiByYiA+PiA0O1xuICAgIH1cbiAgICByZXR1cm4gdTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbXBvcnRlZFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4geWllbGQgc3RvcmUuZ2V0U3RvcmVEYXRhKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3luY1ZhcmlhYmxlQ29sbGVjdGlvbnMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSB5aWVsZCBnZXRJbXBvcnRlZFZhcmlhYmxlcygpO1xuICAgICAgICBjb25zdCBkYXRhID0ge307XG4gICAgICAgIHN0b3JlLmZvckVhY2goKHZhbHVlLCBrZXksIG1hcCkgPT4ge1xuICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcIlNZTkNfVkFSU1wiLCBkYXRhOiBkYXRhIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZhcmlhYmxlQ29sbGVjdGlvbihmaWxlS2V5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgc3RvcmUucmVtb3ZlKGZpbGVLZXkpO1xuICAgICAgICB5aWVsZCBzeW5jVmFyaWFibGVDb2xsZWN0aW9ucygpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGF5QXN5bmModGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBzdG9yZSA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcbiAgICAgICAgY29uc3QgbGlicmFyeUNvbGxlY3Rpb25zID0geWllbGQgZmlnbWEudGVhbUxpYnJhcnkuZ2V0QXZhaWxhYmxlTGlicmFyeVZhcmlhYmxlQ29sbGVjdGlvbnNBc3luYygpLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGxpYnJhcnlDb2xsZWN0aW9ucy5tYXAoKGNvbGxlY3Rpb24pID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS50ZWFtTGlicmFyeS5nZXRWYXJpYWJsZXNJbkxpYnJhcnlDb2xsZWN0aW9uQXN5bmMoY29sbGVjdGlvbi5rZXkpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlcyA9IHN0b3JlLmdldChjb2xsZWN0aW9uLmxpYnJhcnlOYW1lKSB8fCBbXTtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMuY29uY2F0KGRhdGEpO1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldChjb2xsZWN0aW9uLmxpYnJhcnlOYW1lLCB2YXJpYWJsZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKSk7XG4gICAgICAgIGNvbnN0IGxvY2FsTGlicmFyeVZhcmlhYmxlcyA9IHlpZWxkIGNvbGxlY3RMb2NhbFZhcmlhYmxlcygpO1xuICAgICAgICBpZiAobG9jYWxMaWJyYXJ5VmFyaWFibGVzKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXQobG9jYWxMaWJyYXJ5VmFyaWFibGVzLm5hbWUsIGxvY2FsTGlicmFyeVZhcmlhYmxlcy5saWJyYXJ5VmFyaWFibGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjb2xsZWN0TG9jYWxWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0geWllbGQgZmlnbWEudmFyaWFibGVzLmdldExvY2FsVmFyaWFibGVzQXN5bmMoKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhyb3cgKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBsaWJyYXJ5VmFyaWFibGVzID0gdmFyaWFibGVzLm1hcCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGtleSwgcmVzb2x2ZWRUeXBlLCBuYW1lIH0gPSB2YXJpYWJsZTtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIGtleSwgcmVzb2x2ZWRUeXBlIH07XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgbmFtZSA9IFwiTG9jYWwgdmFyaWFibGVzXCI7XG4gICAgICAgIGlmIChsaWJyYXJ5VmFyaWFibGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbmFtZSwgbGlicmFyeVZhcmlhYmxlcyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXQobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN0b3JlLnNldChuYW1lLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChuYW1lKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU3RvcmUoKSB7XG4gICAgc3RvcmUuY2xlYXIoKTtcbiAgICByZXR1cm4gc3RvcmU7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGRlbGF5QXN5bmMgfSBmcm9tIFwiLi9kZWxheS1hc3luY1wiO1xuaW1wb3J0IHsgX2Nsb25lIH0gZnJvbSBcIi4vY2xvbmVcIjtcbmxldCB0b3RhbExheWVyc0NvdW50ID0gMDtcbmxldCByZWJvdW5kTGF5ZXJzQ291bnQgPSAwO1xubGV0IHNraXBwZWRMYXllcnNDb3VudCA9IDA7XG5sZXQgbWlzc2luZ0xheWVyc0NvdW50ID0gMDtcbmxldCBpbXBvcnRhZFZhcmlhYmxlc0xpYnJhcnk7XG5leHBvcnQgZnVuY3Rpb24gc3dhcFZhcmlhYmxlcyhkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5ID0gW107XG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKGRhdGEubWFwKChyZWNvcmQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBmaWdtYS52YXJpYWJsZXMuaW1wb3J0VmFyaWFibGVCeUtleUFzeW5jKHJlY29yZC5rZXkpLnRoZW4odmFyaWFibGUgPT4gaW1wb3J0YWRWYXJpYWJsZXNMaWJyYXJ5LnB1c2godmFyaWFibGUpKTtcbiAgICAgICAgfSkpKTtcbiAgICAgICAgdG90YWxMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHJlYm91bmRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIHNraXBwZWRMYXllcnNDb3VudCA9IDA7XG4gICAgICAgIGxldCBfbm9kZXMgPSBbXTtcbiAgICAgICAgZmlnbWEuc2tpcEludmlzaWJsZUluc3RhbmNlQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBsYXllciBhbmQgdHJ5IGFnYWluXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmICgnYm91bmRWYXJpYWJsZXMnIGluIG5vZGUgJiYgT2JqZWN0LmtleXMobm9kZS5ib3VuZFZhcmlhYmxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdmaW5kQWxsJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBub2RlLmZpbmRBbGwoKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdib3VuZFZhcmlhYmxlcycgaW4gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG4uYm91bmRWYXJpYWJsZXMpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfbm9kZXMgPSBfbm9kZXMuY29uY2F0KG5vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ub2Rlcyk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gX25vZGVzLmxlbmd0aDtcbiAgICAgICAgdG90YWxMYXllcnNDb3VudCA9IHRvdGFsO1xuICAgICAgICBsZXQgdGhyZXNoaG9sZCA9IHRvdGFsID4gNzAwID8gNSA6IDEwO1xuICAgICAgICB3aGlsZSAoX25vZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IF9ub2Rlcy5zaGlmdCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gdG90YWwgLSBfbm9kZXMubGVuZ3RoO1xuICAgICAgICAgICAgLy8gKDcwIC0gNDQpIC8gNzBcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKCgodG90YWwgLSBfbm9kZXMubGVuZ3RoKSAvIHRvdGFsKSAqIDEwMCk7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBgJHtwZXJjZW50fSUgZG9uZS4gV29ya2luZyBvbiBsYXllciAke3Byb2Nlc3NlZH0gb3V0IG9mICR7dG90YWx9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICB5aWVsZCBwcm9jZXNzTGF5ZXIobm9kZSwgcHJvY2Vzc2VkKS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVib3VuZExheWVyc0NvdW50Kys7XG4gICAgICAgICAgICBpZiAocGVyY2VudCAlIHRocmVzaGhvbGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcIlNXQVBfVkFSX1BST0dSRVNTXCIsIG1lc3NhZ2U6IG1zZyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRWYXJpYWJsZU5hbWUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGUubmFtZTtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlQWxsKCdzeCcsICdzcGFjaW5nJykucmVwbGFjZUFsbCgnc3knLCAnc3BhY2luZy9taW5vcicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRWYXJpYWJsZU1hdGNoKHZhcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSB5aWVsZCBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkQXN5bmModmFySWQpO1xuICAgICAgICBpZiAoIXZhcmlhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gZ2V0VmFyaWFibGVOYW1lKHZhcmlhYmxlKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFyaWFibGUgPSBpbXBvcnRhZFZhcmlhYmxlc0xpYnJhcnkuZmluZCh2YXJpYWJsZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGUubmFtZSA9PSBuYW1lO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF0YXJnZXRWYXJpYWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5ub3QgZmluZCAke3ZhcmlhYmxlLm5hbWV9YCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGlmICh0YXJnZXRWYXJpYWJsZS5pZCA9PSB2YXJpYWJsZS5pZCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3ZhcmlhYmxlLm5hbWV9IGlzIGEgbG9jYWwgdmFyaWFibGVgKTtcbiAgICAgICAgICAgIHNraXBwZWRMYXllcnNDb3VudCsrO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldFZhcmlhYmxlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcHJvY2Vzc0xheWVyKG5vZGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYm91bmRWYWlyYWJsZXMgPSBPYmplY3QuZW50cmllcyhub2RlLmJvdW5kVmFyaWFibGVzKTtcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoYm91bmRWYWlyYWJsZXMubWFwKChbcHJvcE5hbWUsIGJvdW5kVmFyXSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIGJpbmRWYXJpYWJsZShub2RlLCBwcm9wTmFtZSwgYm91bmRWYXIpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyICsgYCR7cHJvcE5hbWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSkpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTsgLy8gc29tZSBjb2RpbmcgZXJyb3IgaW4gaGFuZGxpbmcgaGFwcGVuZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjb3VudCAlIDUwID09IDApIHtcbiAgICAgICAgICAgIHlpZWxkIGRlbGF5QXN5bmMoMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBiaW5kUHJvcGVydHlWYXJpYWJsZXMocHJvcHMsIGZpZ21hRm4pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY29uc3QgcHJvcHNDb3B5ID0gX2Nsb25lKHByb3BzKTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBvZiBwcm9wc0NvcHkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gcHJvcC5ib3VuZFZhcmlhYmxlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsaWFzID0gcHJvcC5ib3VuZFZhcmlhYmxlc1tmaWVsZF07XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB5aWVsZCBmaW5kVmFyaWFibGVNYXRjaChhbGlhcy5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByZWFkID0gcHJvcFsnc3ByZWFkJ107IC8vd29ya2Fyb3VuZCBGaWdtYSBidWcuIEl0IHJlc2V0cyBzcHJlYWQgYWZ0ZXIgY2FsbGluZyBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckVmZmVjdFxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBwcm9wLmJvdW5kVmFyaWFibGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBmaWdtYUZuKHByb3AsIGZpZWxkLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IGZpZ21hRm4ocHJvcCwgZmllbGQsIHZhcmlhYmxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzcHJlYWQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcFsnc3ByZWFkJ10gPSBzcHJlYWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJpbmRWYXJpYWJsZShub2RlLCBwcm9wTmFtZSwgdmFyaWFibGVCaW5kaW5nKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKHByb3BOYW1lID09ICdmaWxscycgJiYgJ2ZpbGxzJyBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlLmZpbGxzID0geWllbGQgYmluZFByb3BlcnR5VmFyaWFibGVzKG5vZGUuZmlsbHMsIGZpZ21hLnZhcmlhYmxlcy5zZXRCb3VuZFZhcmlhYmxlRm9yUGFpbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09ICdzdHJva2VzJyAmJiAnc3Ryb2tlcycgaW4gbm9kZSkge1xuICAgICAgICAgICAgbm9kZS5zdHJva2VzID0geWllbGQgYmluZFByb3BlcnR5VmFyaWFibGVzKG5vZGUuc3Ryb2tlcywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JQYWludCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2VmZmVjdHMnICYmICdlZmZlY3RzJyBpbiBub2RlKSB7XG4gICAgICAgICAgICBub2RlLmVmZmVjdHMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5lZmZlY3RzLCBmaWdtYS52YXJpYWJsZXMuc2V0Qm91bmRWYXJpYWJsZUZvckVmZmVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT0gJ2xheW91dEdyaWRzJyAmJiAnbGF5b3V0R3JpZHMnIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUubGF5b3V0R3JpZHMgPSB5aWVsZCBiaW5kUHJvcGVydHlWYXJpYWJsZXMobm9kZS5sYXlvdXRHcmlkcywgZmlnbWEudmFyaWFibGVzLnNldEJvdW5kVmFyaWFibGVGb3JMYXlvdXRHcmlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PSAnY29tcG9uZW50UHJvcGVydGllcycgfHwgcHJvcE5hbWUgPT0gJ3RleHRSYW5nZUZpbGxzJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTd2FwIGRvZXMgbm90IHdvcmsgZm9yICR7cHJvcE5hbWV9LCBza2lwcGluZyBub2RlYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHlpZWxkIGZpbmRWYXJpYWJsZU1hdGNoKHZhcmlhYmxlQmluZGluZy5pZCk7XG4gICAgICAgICAgICBpZiAodmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnNldEJvdW5kVmFyaWFibGUocHJvcE5hbWUsIG51bGwpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0Qm91bmRWYXJpYWJsZShwcm9wTmFtZSwgdmFyaWFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHN3YXBWYXJpYWJsZXMgfSBmcm9tICcuL3V0aWxzL3N3YXAtdmFyaWFibGVzJztcbmltcG9ydCB7IHJlbW92ZVZhcmlhYmxlQ29sbGVjdGlvbiwgc3luY1ZhcmlhYmxlQ29sbGVjdGlvbnMgfSBmcm9tICcuL3V0aWxzL2NvbGxlY3QtdmFyaWFibGVzJztcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmFnZTInO1xuY29uc29sZS5jbGVhcigpO1xubGV0IGdsb2JhbFRva2VucztcbmNvbnN0IGNvbGxlY3Rpb25OYW1lcyA9IG5ldyBNYXAoW1xuICAgIFtcImJyYW5kQ29sb3JzXCIsIFwiQ29sb3IgVGhlbWVcIiAvKlwiQnJhbmQgQ29sb3JcIiovXSxcbiAgICBbXCJ0aGVtZUNvbG9yc1wiLCBcIkNvbG9yIFRoZW1lXCJdLFxuICAgIFtcImNvbXBvbmVudENvbG9yc1wiLCBcIkNvbXBvbmVudCBUb2tlbnNcIl0sXG4gICAgW1wic3BhY2luZ1wiLCBcIlNwYWNpbmdcIl0sXG4gICAgW1wib3BhY2l0eVwiLCBcIk9wYWNpdHlcIl0sXG4gICAgW1wicmFkaWlcIiwgXCJSYWRpaVwiXSxcbiAgICBbXCJpY29uU2NhbGVcIiwgXCJJY29uIFNjYWxlXCJdLFxuICAgIFtcImdsb2JhbFNpemluZ1wiLCBcIkdsb2JhbCBTaXppbmdcIl0sXG5dKTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgIHdpZHRoOiAzMjAsXG4gICAgaGVpZ2h0OiAzMjAsXG4gICAgdGhlbWVDb2xvcnM6IHRydWUsXG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChldmVudERhdGEpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY29kZSByZWNlaXZlZCBtZXNzYWdlXCIsIGV2ZW50RGF0YSk7XG4gICAgY29uc3QgcGFyYW1zID0gZXZlbnREYXRhLnBhcmFtcztcbiAgICBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiSU1QT1JUXCIpIHtcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnREYXRhLnR5cGUgPT09IFwiVkFSU19VSV9MT0FERURcIikge1xuICAgICAgICB5aWVsZCBzeW5jVmFyaWFibGVDb2xsZWN0aW9ucygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChldmVudERhdGEudHlwZSA9PT0gXCJSRU1PVkVfVkFSU19DT0xMRUNUSU9OXCIpIHtcbiAgICAgICAgeWllbGQgcmVtb3ZlVmFyaWFibGVDb2xsZWN0aW9uKGV2ZW50RGF0YS5maWxlTmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50RGF0YS50eXBlID09PSBcIlNXQVBfVkFSSUFCTEVTXCIpIHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50RGF0YS5maWxlTmFtZTtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWdtYS5ub3RpZnkoXCJTZWxlY3QgdmFyaWFibGVzIHRvIHN3YXBcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHN0b3JlLmdldChrZXkpO1xuICAgICAgICBjb25zdCBsYXllcnNDb3VudCA9IHlpZWxkIHN3YXBWYXJpYWJsZXMoZGF0YSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShlcnIsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcIlNXQVBfVkFSSUFCTEVTX0RPTkVcIiB9KTtcbiAgICAgICAgZmlnbWEubm90aWZ5KGBQcm9jZXNzZWQgJHtsYXllcnNDb3VudH0gbGF5ZXJzYCk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=