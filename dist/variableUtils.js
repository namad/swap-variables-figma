/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/dialog.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/dialog.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
    display: none;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    max-width: none;
    max-height: none;
    overflow: hidden;
    margin: 0;
    background-color: color-mix(in srgb, var(--fill-base-300), var(--utility-transparent) 20%);
}

dialog[open] {
    display: flex;
    align-items: center;
    justify-content: center;
}

dialog::backdrop {
    display: none;
}

dialog .modal-container {
    display: flex;
    flex-flow: column;
    width: 95%;
    padding: 0;
    color: var(--text-base-600);
    background-color: var(--fill-base-100);
    border-radius: var(--radii-lg);
    outline: 1px solid var(--alt-base-400);
    max-height: 95vh;
    animation: open-modal 250ms ease-in-out;
    --tw-shadow: 0px 16px 10px -7px var(--box-shadow-color), 0px 24px 28px -8px var(--box-shadow-color), 0px 24px 48px -10px var(--box-shadow-color);
    --tw-shadow-colored: 0px 16px 10px -7px var(--tw-shadow-color), 0px 24px 28px -8px var(--tw-shadow-color), 0px 24px 48px -10px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --shadow-color: var(--utility-shade-200);
    --shadow-opacity: 100%;
    --box-shadow-color: color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)));
    --box-shadow: 0px 16px 10px -7px var(--box-shadow-color), 0px 24px 28px -8px var(--box-shadow-color), 0px 24px 48px -10px var(--box-shadow-color);
    box-shadow: var(--box-shadow);
}

dialog .header {
    padding: var(--spacing-minor-md) var(--spacing-md) 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

dialog .body {
    padding: var(--spacing-minor-lg) var(--spacing-lg);
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing-base);
    flex: 1;
}

dialog .footer {
    padding: 0 var(--spacing-lg) var(--spacing-minor-lg);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

button.close {
    color: currentColor;
    appearance: none;
    border: 0 none;
    background: transparent;
    border-radius: var(--radii-base);
    opacity: 0.6;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--line-height-md);
    height: var(--line-height-md);
}

button.close:hover {
    opacity: 1;
}

.presets-list {
    margin-bottom: var(--spacing-minor-lg);
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    gap: var(--spacing-minor-xs4);
    overflow: auto;
    overflow-y: visible;
    --padding-x: var(--spacing-lg);
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
    padding-right: calc(var(--spacing-lg) - var(--scrollbar-width));
}

.theme-item {
    position: relative;
    display: flex;
    flex-direction: row;
    border-radius: var(--radii-md);
    --bg-color: var(--alt-base-100);
    background-color: var(--bg-color);
}

.theme-item input[type=radio] {
    opacity: 0;
    position: absolute;
}

.theme-item:hover {
    outline:1px solid var(--primary-300);
    outline-offset: -1px;
}

.theme-item:has(input:checked) {
    background-color: transparent;
    outline:2px solid var(--primary-300);
    outline-offset: -2px;
}

.theme-item:focus-within,
.theme-item:has(input:focus),
.theme-item:has(input:focus-visible) {
    outline:1px solid var(--primary-500);
    outline-width: 2px;
    outline-offset: -2px;
}

dialog .body + .presets-list {
    padding-top: 0;
}

.theme-item .col-info {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-minor-xs3);
    --padding-x: var(--spacing-base);
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
}
.theme-item .col-info .info-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: var(--spacing-xs2);
    white-space: nowrap;
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
}

.theme-item .col-swatches {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    gap: var(--spacing-xs);
    --padding: var(--spacing-xs);
    padding: var(--padding);
}

.swatches {
    outline: 1px solid var(--alt-base-100);
    outline-offset: -1px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    overflow: hidden;
    border-radius: var(--radii-base);
}

.swatches .swatch {
    display: block;
    height: 2rem;
    flex: 1;
}


@keyframes open-modal {
    from {
        background-color: transparent;
        opacity: 0;
        transform: translateY(-25%);    
    }
    to {
        opacity: 1;
        transform: translateY(0);    
    }
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/dialog.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,OAAO;IACP,MAAM;IACN,YAAY;IACZ,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,0FAA0F;AAC9F;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,UAAU;IACV,UAAU;IACV,2BAA2B;IAC3B,sCAAsC;IACtC,8BAA8B;IAC9B,sCAAsC;IACtC,gBAAgB;IAChB,uCAAuC;IACvC,gJAAe;IAAf,qJAAe;IAAf,uGAAe;IAAf,wCAAe;IAAf,sBAAe;IAAf,2GAAe;IAAf,iJAAe;IAAf,6BAAe;AACnB;;AAEA;IACI,oDAAoD;IACpD,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,kDAAkD;IAClD,aAA+B;IAA/B,sBAA+B;IAA/B,4BAA+B;IAC/B,OAAO;AACX;;AAEA;IACI,oDAAoD;IACpD,aAAgC;IAAhC,mBAAgC;IAAhC,yBAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;IACd,uBAAuB;IACvB,gCAAgC;IAChC,YAAY;IACZ,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,UAAU;AACd;;AAGI;IAAA,sCAA4F;IAA5F,aAA4F;IAA5F,YAA4F;IAA5F,sBAA4F;IAA5F,6BAA4F;IAA5F,cAA4F;IAA5F,mBAA4F;IAA5F,8BAA4F;IAA5F,8BAA4F;IAA5F,+BAA4F;IAC5F;AAD4F;;AAK5F;IAAA,kBAAwD;IAAxD,aAAwD;IAAxD,mBAAwD;IAAxD,8BAAwD;IAAxD,+BAAwD;IAAxD;AAAwD;;AAG5D;IACI,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;;;IAGI,oCAAoC;IACpC,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,cAAc;AAClB;;AAGI;IAAA,aAA+D;IAA/D,YAA+D;IAA/D,sBAA+D;IAA/D,uBAA+D;IAA/D,6BAA+D;IAA/D,gCAA+D;IAA/D,8BAA+D;IAA/D;AAA+D;AAG/D;IAAA,aAA+E;IAA/E,mBAA+E;IAA/E,iBAA+E;IAA/E,mBAA+E;IAA/E,uBAA+E;IAA/E,mBAA+E;IAA/E,8BAA+E;IAA/E;AAA+E;;AAI/E;IAAA,aAAsC;IAAtC,YAAsC;IAAtC,sBAAsC;IAAtC,sBAAsC;IAAtC,4BAAsC;IAAtC;AAAsC;;AAG1C;IACI,sCAAsC;IACtC,oBAAoB;IACpB,aAAkD;IAAlD,mBAAkD;IAAlD,QAAkD;IAAlD,gBAAkD;IAAlD,gCAAkD;AACtD;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,OAAO;AACX;;;AAGA;IACI;QACI,6BAA6B;QAC7B,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ","sourcesContent":["dialog {\n    display: none;\n    left: 0;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    max-width: none;\n    max-height: none;\n    overflow: hidden;\n    margin: 0;\n    background-color: color-mix(in srgb, var(--fill-base-300), var(--utility-transparent) 20%);\n}\n\ndialog[open] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ndialog::backdrop {\n    display: none;\n}\n\ndialog .modal-container {\n    display: flex;\n    flex-flow: column;\n    width: 95%;\n    padding: 0;\n    color: var(--text-base-600);\n    background-color: var(--fill-base-100);\n    border-radius: var(--radii-lg);\n    outline: 1px solid var(--alt-base-400);\n    max-height: 95vh;\n    animation: open-modal 250ms ease-in-out;\n    @apply shadow-6;\n}\n\ndialog .header {\n    padding: var(--spacing-minor-md) var(--spacing-md) 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ndialog .body {\n    padding: var(--spacing-minor-lg) var(--spacing-lg);\n    @apply flex flex-col gap-y-base;\n    flex: 1;\n}\n\ndialog .footer {\n    padding: 0 var(--spacing-lg) var(--spacing-minor-lg);\n    @apply flex flex-row justify-end;\n}\n\nbutton.close {\n    color: currentColor;\n    appearance: none;\n    border: 0 none;\n    background: transparent;\n    border-radius: var(--radii-base);\n    opacity: 0.6;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: var(--line-height-md);\n    height: var(--line-height-md);\n}\n\nbutton.close:hover {\n    opacity: 1;\n}\n\n.presets-list {\n    @apply flex flex-col flex-1 gap-minor-xs4 px-lg mb-minor-lg overflow-auto overflow-y-visible;\n    padding-right: calc(var(--spacing-lg) - var(--scrollbar-width));\n}\n\n.theme-item {\n    @apply rounded-md bg-alt-base-100 flex flex-row relative;\n}\n\n.theme-item input[type=radio] {\n    opacity: 0;\n    position: absolute;\n}\n\n.theme-item:hover {\n    outline:1px solid var(--primary-300);\n    outline-offset: -1px;\n}\n\n.theme-item:has(input:checked) {\n    background-color: transparent;\n    outline:2px solid var(--primary-300);\n    outline-offset: -2px;\n}\n\n.theme-item:focus-within,\n.theme-item:has(input:focus),\n.theme-item:has(input:focus-visible) {\n    outline:1px solid var(--primary-500);\n    outline-width: 2px;\n    outline-offset: -2px;\n}\n\ndialog .body + .presets-list {\n    padding-top: 0;\n}\n\n.theme-item .col-info {\n    @apply flex flex-col flex-1 justify-center px-base gap-minor-xs3\n}\n.theme-item .col-info .info-item {\n    @apply flex flex-row gap-xs2 text-sm flex-nowrap whitespace-nowrap items-center;\n}\n\n.theme-item .col-swatches {\n    @apply flex flex-col gap-xs p-xs flex-1\n}\n\n.swatches {\n    outline: 1px solid var(--alt-base-100);\n    outline-offset: -1px;\n    @apply flex flex-row gap-0 rounded overflow-hidden;\n}\n\n.swatches .swatch {\n    display: block;\n    height: 2rem;\n    flex: 1;\n}\n\n\n@keyframes open-modal {\n    from {\n        background-color: transparent;\n        opacity: 0;\n        transform: translateY(-25%);    \n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);    \n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/icons.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/icons.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z" fill="%23D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z\" fill=\"%23D9D9D9\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z" fill="white"/><path d="M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z\" fill=\"white\"/><path d=\"M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 64 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z" fill="white"/><path d="M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z\" fill=\"white\"/><path d=\"M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --ads-elevation: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    --ads-radii: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    --ads-spacing: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    --ads-typography: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    --ads-colors: url(${___CSS_LOADER_URL_REPLACEMENT_4___});

}

.icon {
    --icon-size: var(--line-height-base);
}

.icon-typography::before {
    --icon-src: var(--ads-typography);
}
.icon-spacing::before {
    --icon-src: var(--ads-spacing);
}
.icon-radii::before {
    --icon-src: var(--ads-radii);
}
.icon-colors::before {
    --icon-src: var(--ads-colors);
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/icons.css"],"names":[],"mappings":"AAAA;IACI,wDAA0zB;IAC1zB,oDAA6vF;IAC7vF,sDAA8gC;IAC9gC,yDAA++C;IAC/+C,qDAAikD;;AAErkD;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iCAAiC;AACrC;AACA;IACI,8BAA8B;AAClC;AACA;IACI,4BAA4B;AAChC;AACA;IACI,6BAA6B;AACjC","sourcesContent":[":root {\n    --ads-elevation: url('data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z\" fill=\"white\"/></svg>');\n    --ads-radii: url('data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z\" fill=\"%23D9D9D9\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z\" fill=\"white\"/></svg>');\n    --ads-spacing: url('data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z\" fill=\"white\"/><path d=\"M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z\" fill=\"white\"/></svg>');\n    --ads-typography: url('data:image/svg+xml,<svg viewBox=\"0 0 64 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z\" fill=\"white\"/></svg>');\n    --ads-colors: url('data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z\" fill=\"white\"/><path d=\"M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z\" fill=\"white\"/></svg>');\n\n}\n\n.icon {\n    --icon-size: var(--line-height-base);\n}\n\n.icon-typography::before {\n    --icon-src: var(--ads-typography);\n}\n.icon-spacing::before {\n    --icon-src: var(--ads-spacing);\n}\n.icon-radii::before {\n    --icon-src: var(--ads-radii);\n}\n.icon-colors::before {\n    --icon-src: var(--ads-colors);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/source-variables.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/source-variables.css ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --accent-red-100: hsla(3.84,88.65%,72.35%,0.125);
    --accent-red-200: hsla(3.84,88.65%,72.35%,0.33);
    --accent-red-300: hsl(4,86.54%,59.22%);
    --accent-red-400: hsl(4.09,100%,46.08%);
    --accent-red-500: hsl(4.19,99.08%,42.55%);
    --accent-red-600: hsl(3.43,94.59%,85.49%);
    --accent-amber-100: hsla(24.44,76.27%,65.29%,0.125);
    --accent-amber-200: hsla(24.44,76.27%,65.29%,0.33);
    --accent-amber-300: hsl(24.58,68.03%,52.16%);
    --accent-amber-400: hsl(24.85,100%,38.82%);
    --accent-amber-500: hsl(25,98.9%,35.69%);
    --accent-amber-600: hsl(23.88,94.5%,78.63%);
    --accent-brown-100: hsla(31.89,71.86%,60.98%,0.125);
    --accent-brown-200: hsla(31.89,71.86%,60.98%,0.33);
    --accent-brown-300: hsl(32.63,65.57%,47.84%);
    --accent-brown-400: hsl(32.88,100%,34.71%);
    --accent-brown-500: hsl(33.17,98.77%,31.96%);
    --accent-brown-600: hsl(31.43,95.45%,74.12%);
    --accent-green-100: hsla(126.03,96.14%,40.59%,0.125);
    --accent-green-200: hsla(126.03,96.14%,40.59%,0.33);
    --accent-green-300: hsl(127.86,97.67%,33.73%);
    --accent-green-400: hsl(130.07,100%,26.86%);
    --accent-green-500: hsl(131.52,98.43%,24.9%);
    --accent-green-600: hsl(124.96,95.04%,47.45%);
    --accent-teal-100: hsla(178.13,96.97%,38.82%,0.125);
    --accent-teal-200: hsla(178.13,96.97%,38.82%,0.33);
    --accent-teal-300: hsl(180.74,97.6%,32.75%);
    --accent-teal-400: hsl(183.86,100%,27.45%);
    --accent-teal-500: hsl(185.91,98.51%,26.27%);
    --accent-teal-600: hsl(176.49,95.69%,45.49%);
    --accent-blue-100: hsla(216.09,98.52%,73.53%,0.125);
    --accent-blue-200: hsla(216.09,98.52%,73.53%,0.33);
    --accent-blue-300: hsl(218.31,98.88%,64.9%);
    --accent-blue-400: hsl(220,100%,56.47%);
    --accent-blue-500: hsl(223.01,98.26%,54.9%);
    --accent-blue-600: hsl(210.68,95.65%,81.96%);
    --accent-indigo-100: hsla(235.58,97.94%,80.98%,0.125);
    --accent-indigo-200: hsla(235.58,97.94%,80.98%,0.33);
    --accent-indigo-300: hsl(238.57,98.44%,74.9%);
    --accent-indigo-400: hsl(240,100%,68.82%);
    --accent-indigo-500: hsl(243.77,97.77%,64.9%);
    --accent-indigo-600: hsl(230.32,93.94%,87.06%);
    --accent-violet-100: hsla(256.08,97.98%,80.59%,0.125);
    --accent-violet-200: hsla(256.08,97.98%,80.59%,0.33);
    --accent-violet-300: hsl(258.39,100%,73.14%);
    --accent-violet-400: hsl(260,100%,65.29%);
    --accent-violet-500: hsl(263.94,92.34%,59.02%);
    --accent-violet-600: hsl(249.47,96.61%,88.43%);
    --accent-purple-100: hsla(276.21,98.31%,76.86%,0.125);
    --accent-purple-200: hsla(276.21,98.31%,76.86%,0.33);
    --accent-purple-300: hsl(278.7,98.83%,66.47%);
    --accent-purple-400: hsl(280.09,100%,56.27%);
    --accent-purple-500: hsl(283.11,81.75%,49.41%);
    --accent-purple-600: hsl(269.03,93.94%,87.06%);
    --accent-pink-100: hsla(335.04,88.65%,72.35%,0.125);
    --accent-pink-200: hsla(335.04,88.65%,72.35%,0.33);
    --accent-pink-300: hsl(338.21,85.65%,59.02%);
    --accent-pink-400: hsl(340,100%,45.88%);
    --accent-pink-500: hsl(343.53,99.08%,42.55%);
    --accent-pink-600: hsl(326.57,94.59%,85.49%);
    --text-base-400: hsla(0,0%,5.88%,0.45);
    --text-base-500: hsla(0,0%,5.88%,0.65);
    --text-base-600: hsl(0,0%,5.88%);
    --text-base-action: var(--primary-500);
    --text-base-info: var(--info-500);
    --text-base-success: var(--success-500);
    --text-base-warning: var(--warning-500);
    --text-base-danger: var(--danger-500);
    --text-contrast-400: hsla(0,0%,100%,0.45);
    --text-contrast-500: hsla(0,0%,100%,0.7);
    --text-contrast-600: hsl(0,0%,100%);
    --text-contrast-action: var(--primary-600);
    --text-contrast-info: var(--info-600);
    --text-contrast-success: var(--success-600);
    --text-contrast-warning: var(--warning-600);
    --text-contrast-danger: var(--danger-600);
    --alt-base-100: hsla(180,100%,13.92%,0.04);
    --alt-base-200: hsla(180,100%,13.92%,0.08);
    --alt-base-300: hsla(180,100%,13.92%,0.16);
    --alt-base-400: hsla(180,100%,13.92%,0.24);
    --alt-base-500: hsla(180,100%,13.92%,0.32);
    --alt-base-600: hsla(180,100%,13.92%,0.44);
    --alt-contrast-100: hsla(0,0%,100%,0.04);
    --alt-contrast-200: hsla(0,0%,100%,0.08);
    --alt-contrast-300: hsla(0,0%,100%,0.12);
    --alt-contrast-400: hsla(0,0%,100%,0.16);
    --alt-contrast-500: hsla(0,0%,100%,0.24);
    --alt-contrast-600: hsla(0,0%,100%,0.32);
    --utility-white: hsl(0,0%,100%);
    --utility-black: hsl(0,0%,3.92%);
    --utility-transparent: hsla(0,0%,100%,0);
    --utility-shade-100: hsla(180,100%,8.04%,0.04);
    --utility-shade-200: hsla(180,100%,8.04%,0.08);
    --utility-shade-300: hsla(180,100%,8.04%,0.16);
    --utility-shade-400: hsla(180,100%,8.04%,0.24);
    --utility-shade-500: hsla(180,100%,8.04%,0.32);
    --utility-shade-600: hsla(180,100%,8.04%,0.44);
    --utility-tint-100: hsla(0,0%,100%,0.5);
    --utility-tint-200: hsla(0,0%,100%,0.6);
    --utility-tint-300: hsla(0,0%,100%,0.7);
    --utility-tint-400: hsla(0,0%,100%,0.8);
    --utility-tint-500: hsla(0,0%,100%,0.9);
    --utility-tint-600: hsl(0,0%,100%);
    --primary-100: var(--accent-blue-100);
    --primary-200: var(--accent-blue-200);
    --primary-300: var(--accent-blue-300);
    --primary-400: var(--accent-blue-400);
    --primary-500: var(--accent-blue-500);
    --primary-600: var(--accent-blue-600);
    --info-100: var(--accent-teal-100);
    --info-200: var(--accent-teal-200);
    --info-300: var(--accent-teal-300);
    --info-400: var(--accent-teal-400);
    --info-500: var(--accent-teal-500);
    --info-600: var(--accent-teal-600);
    --success-100: var(--accent-green-100);
    --success-200: var(--accent-green-200);
    --success-300: var(--accent-green-300);
    --success-400: var(--accent-green-400);
    --success-500: var(--accent-green-500);
    --success-600: var(--accent-green-600);
    --warning-100: var(--accent-amber-100);
    --warning-200: var(--accent-amber-200);
    --warning-300: var(--accent-amber-300);
    --warning-400: var(--accent-amber-400);
    --warning-500: var(--accent-amber-500);
    --warning-600: var(--accent-amber-600);
    --danger-100: var(--accent-red-100);
    --danger-200: var(--accent-red-200);
    --danger-300: var(--accent-red-300);
    --danger-400: var(--accent-red-400);
    --danger-500: var(--accent-red-500);
    --danger-600: var(--accent-red-600);
    --fill-base-100: hsl(0,0%,100%);
    --fill-base-200: hsl(0,0%,98.04%);
    --fill-base-300: hsl(0,0%,96.08%);
    --fill-base-400: hsl(0,0%,94.12%);
    --fill-base-500: hsl(180,2.44%,91.96%);
    --fill-base-600: hsl(180,1.64%,88.04%);
    --fill-contrast-100: hsl(180,0.81%,24.12%);
    --fill-contrast-200: hsl(240,0.88%,22.16%);
    --fill-contrast-300: hsl(0,0%,20%);
    --fill-contrast-400: hsl(0,0%,18.04%);
    --fill-contrast-500: hsl(180,1.23%,15.88%);
    --fill-contrast-600: hsl(180,1.41%,13.92%);
    --stroke-base-100: hsl(0,0%,92.94%);
    --stroke-base-200: hsl(180,1.64%,88.04%);
    --stroke-base-300: hsl(180,1.3%,84.9%);
    --stroke-base-400: hsl(0,0%,80%);
    --stroke-base-500: hsl(180,0.65%,70%);
    --stroke-base-600: hsl(180,0.43%,53.92%);
    --stroke-contrast-100: hsl(180,0.7%,28.04%);
    --stroke-contrast-200: hsl(180,0.65%,30%);
    --stroke-contrast-300: hsl(180,0.59%,33.14%);
    --stroke-contrast-400: hsl(180,0.55%,35.88%);
    --stroke-contrast-500: hsl(180,0.5%,39.02%);
    --stroke-contrast-600: hsl(180,0.44%,44.9%);
}

.figma-dark {
    --accent-red-100: hsla(4.32,79.86%,72.75%,0.2);
    --accent-red-200: hsla(4.32,79.86%,72.75%,0.45);
    --accent-red-300: hsl(3.73,80.9%,60.98%);
    --accent-red-400: hsl(3.98,84.74%,48.82%);
    --accent-red-500: hsl(3.93,79.22%,84.9%);
    --accent-red-600: hsl(3.93,79.22%,84.9%);
    --accent-amber-100: hsla(24.31,67.44%,66.27%,0.2);
    --accent-amber-200: hsla(24.31,67.44%,66.27%,0.45);
    --accent-amber-300: hsl(24.83,60.67%,53.14%);
    --accent-amber-400: hsl(25.03,85.37%,40.2%);
    --accent-amber-500: hsl(23.72,81.13%,79.22%);
    --accent-amber-600: hsl(23.72,81.13%,79.22%);
    --accent-brown-100: hsla(32.5,62.5%,62.35%,0.2);
    --accent-brown-200: hsla(32.5,62.5%,62.35%,0.45);
    --accent-brown-300: hsl(32.37,54.94%,49.61%);
    --accent-brown-400: hsl(33.04,84.95%,36.47%);
    --accent-brown-500: hsl(31.49,80.8%,75.49%);
    --accent-brown-600: hsl(31.49,80.8%,75.49%);
    --accent-green-100: hsla(126.38,65.57%,47.84%,0.2);
    --accent-green-200: hsla(126.38,65.57%,47.84%,0.45);
    --accent-green-300: hsl(127.61,72.45%,38.43%);
    --accent-green-400: hsl(130,85.14%,29.02%);
    --accent-green-500: hsl(124.77,80.73%,57.25%);
    --accent-green-600: hsl(124.77,80.73%,57.25%);
    --accent-teal-100: hsla(178.29,81.4%,42.16%,0.2);
    --accent-teal-200: hsla(178.29,81.4%,42.16%,0.45);
    --accent-teal-300: hsl(181.21,82.32%,35.49%);
    --accent-teal-400: hsl(184.22,85.33%,29.41%);
    --accent-teal-500: hsl(176.73,80.16%,49.41%);
    --accent-teal-600: hsl(176.73,80.16%,49.41%);
    --accent-blue-100: hsla(216.11,82.48%,73.14%,0.2);
    --accent-blue-200: hsla(216.11,82.48%,73.14%,0.45);
    --accent-blue-300: hsl(218.82,84.53%,64.51%);
    --accent-blue-400: hsl(220.21,84.89%,55.88%);
    --accent-blue-500: hsl(211.2,80.65%,81.76%);
    --accent-blue-600: hsl(211.2,80.65%,81.76%);
    --accent-indigo-100: hsla(236.43,82.35%,80%,0.2);
    --accent-indigo-200: hsla(236.43,82.35%,80%,0.45);
    --accent-indigo-300: hsl(238.42,83.82%,73.33%);
    --accent-indigo-400: hsl(240,84.62%,66.86%);
    --accent-indigo-500: hsl(231.27,79.71%,86.47%);
    --accent-indigo-600: hsl(231.27,79.71%,86.47%);
    --accent-violet-100: hsla(255.86,82.86%,79.41%,0.2);
    --accent-violet-200: hsla(255.86,82.86%,79.41%,0.45);
    --accent-violet-300: hsl(258.2,84.72%,71.76%);
    --accent-violet-400: hsl(259.87,84.86%,63.73%);
    --accent-violet-500: hsl(249.23,81.25%,87.45%);
    --accent-violet-600: hsl(249.23,81.25%,87.45%);
    --accent-purple-100: hsla(275.76,83.19%,76.67%,0.2);
    --accent-purple-200: hsla(275.76,83.19%,76.67%,0.45);
    --accent-purple-300: hsl(278.6,84.62%,66.86%);
    --accent-purple-400: hsl(280.11,85.39%,57.06%);
    --accent-purple-500: hsl(268.36,79.71%,86.47%);
    --accent-purple-600: hsl(268.36,79.71%,86.47%);
    --accent-pink-100: hsla(335.14,79.86%,72.75%,0.2);
    --accent-pink-200: hsla(335.14,79.86%,72.75%,0.45);
    --accent-pink-300: hsl(338.39,80.9%,60.98%);
    --accent-pink-400: hsl(340.09,84.74%,48.82%);
    --accent-pink-500: hsl(326.56,79.22%,84.9%);
    --accent-pink-600: hsl(326.56,79.22%,84.9%);
    --text-base-400: hsla(0,0%,100%,0.45);
    --text-base-500: hsla(0,0%,100%,0.7);
    --text-base-600: hsl(0,0%,100%);
    --text-base-action: var(--primary-500);
    --text-base-info: var(--info-500);
    --text-base-success: var(--success-500);
    --text-base-warning: var(--warning-500);
    --text-base-danger: var(--danger-500);
    --text-contrast-400: hsla(0,0%,100%,0.45);
    --text-contrast-500: hsla(0,0%,100%,0.7);
    --text-contrast-600: hsl(0,0%,100%);
    --text-contrast-action: var(--primary-600);
    --text-contrast-info: var(--info-600);
    --text-contrast-success: var(--success-600);
    --text-contrast-warning: var(--warning-600);
    --text-contrast-danger: var(--danger-600);
    --alt-base-100: hsla(180,1.79%,78.04%,0.08);
    --alt-base-200: hsla(180,1.79%,78.04%,0.12);
    --alt-base-300: hsla(180,1.79%,78.04%,0.16);
    --alt-base-400: hsla(180,1.79%,78.04%,0.24);
    --alt-base-500: hsla(180,1.79%,78.04%,0.32);
    --alt-base-600: hsla(180,1.79%,78.04%,0.44);
    --alt-contrast-100: hsla(180,1.79%,78.04%,0.08);
    --alt-contrast-200: hsla(180,1.79%,78.04%,0.12);
    --alt-contrast-300: hsla(180,1.79%,78.04%,0.16);
    --alt-contrast-400: hsla(180,1.79%,78.04%,0.24);
    --alt-contrast-500: hsla(180,1.79%,78.04%,0.32);
    --alt-contrast-600: hsla(180,1.79%,78.04%,0.44);
    --utility-white: hsl(0,0%,100%);
    --utility-black: hsl(0,0%,3.92%);
    --utility-transparent: hsla(0,0%,0%,0);
    --utility-shade-100: hsla(0,0%,0%,0.1);
    --utility-shade-200: hsla(0,0%,0%,0.2);
    --utility-shade-300: hsla(0,0%,0%,0.3);
    --utility-shade-400: hsla(0,0%,0%,0.4);
    --utility-shade-500: hsla(0,0%,0%,0.5);
    --utility-shade-600: hsla(0,0%,0%,0.6);
    --utility-tint-100: hsla(180,1.79%,78.04%,0.08);
    --utility-tint-200: hsla(180,1.79%,78.04%,0.12);
    --utility-tint-300: hsla(180,1.79%,78.04%,0.16);
    --utility-tint-400: hsla(180,1.79%,78.04%,0.24);
    --utility-tint-500: hsla(180,1.79%,78.04%,0.32);
    --utility-tint-600: hsla(180,1.79%,78.04%,0.44);
    --primary-100: var(--accent-blue-100);
    --primary-200: var(--accent-blue-200);
    --primary-300: var(--accent-blue-300);
    --primary-400: var(--accent-blue-400);
    --primary-500: var(--accent-blue-500);
    --primary-600: var(--accent-blue-600);
    --info-100: var(--accent-teal-100);
    --info-200: var(--accent-teal-200);
    --info-300: var(--accent-teal-300);
    --info-400: var(--accent-teal-400);
    --info-500: var(--accent-teal-500);
    --info-600: var(--accent-teal-600);
    --success-100: var(--accent-green-100);
    --success-200: var(--accent-green-200);
    --success-300: var(--accent-green-300);
    --success-400: var(--accent-green-400);
    --success-500: var(--accent-green-500);
    --success-600: var(--accent-green-600);
    --warning-100: var(--accent-amber-100);
    --warning-200: var(--accent-amber-200);
    --warning-300: var(--accent-amber-300);
    --warning-400: var(--accent-amber-400);
    --warning-500: var(--accent-amber-500);
    --warning-600: var(--accent-amber-600);
    --danger-100: var(--accent-red-100);
    --danger-200: var(--accent-red-200);
    --danger-300: var(--accent-red-300);
    --danger-400: var(--accent-red-400);
    --danger-500: var(--accent-red-500);
    --danger-600: var(--accent-red-600);
    --fill-base-100: hsl(180,1.41%,13.92%);
    --fill-base-200: hsl(180,1.64%,11.96%);
    --fill-base-300: hsl(180,1.96%,10%);
    --fill-base-400: hsl(180,2.44%,8.04%);
    --fill-base-500: hsl(0,0%,5.88%);
    --fill-base-600: hsl(0,0%,3.92%);
    --fill-contrast-100: hsl(180,0.81%,24.12%);
    --fill-contrast-200: hsl(240,0.88%,22.16%);
    --fill-contrast-300: hsl(0,0%,20%);
    --fill-contrast-400: hsl(0,0%,18.04%);
    --fill-contrast-500: hsl(180,1.23%,15.88%);
    --fill-contrast-600: hsl(180,1.41%,13.92%);
    --stroke-base-100: hsl(240,0.88%,22.16%);
    --stroke-base-200: hsl(180,0.79%,24.9%);
    --stroke-base-300: hsl(180,0.68%,28.82%);
    --stroke-base-400: hsl(180,0.58%,33.92%);
    --stroke-base-500: hsl(210,0.98%,40%);
    --stroke-base-600: hsl(210,0.83%,47.06%);
    --stroke-contrast-100: hsl(180,0.7%,28.04%);
    --stroke-contrast-200: hsl(180,0.65%,30%);
    --stroke-contrast-300: hsl(180,0.59%,33.14%);
    --stroke-contrast-400: hsl(180,0.55%,35.88%);
    --stroke-contrast-500: hsl(180,0.5%,39.02%);
    --stroke-contrast-600: hsl(180,0.44%,44.9%);
}

[data-radii=compact],
.radii-compact {
    --radii-none: 0px;
    --radii-sm: 3px;
    --radii-base: 4px;
    --radii-md: 6px;
    --radii-lg: 9px;
    --radii-xl: 13px;
    --radii-xl2: 20px;
    --radii-round: 999px;
}

[data-radii=base],
.radii-base {
    --radii-none: 0px;
    --radii-sm: 4.5px;
    --radii-base: 6px;
    --radii-md: 9px;
    --radii-lg: 12px;
    --radii-xl: 16px;
    --radii-xl2: 22px;
    --radii-round: 999px;
}

[data-radii=large],
.radii-large {
    --radii-none: 0px;
    --radii-sm: 6px;
    --radii-base: 8px;
    --radii-md: 12px;
    --radii-lg: 16px;
    --radii-xl: 24px;
    --radii-xl2: 40px;
    --radii-round: 999px;
}

[data-spacing=compact],
.spacing-compact {
    --spacing-xs4: 2px;
    --spacing-xs3: 4px;
    --spacing-xs2: 6px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-base: 16px;
    --spacing-md: 20px;
    --spacing-lg: 24px;
    --spacing-xl: 28px;
    --spacing-xl2: 32px;
    --spacing-xl3: 40px;
    --spacing-xl4: 48px;
    --spacing-xl5: 60px;
    --spacing-minor-xs4: 1px;
    --spacing-minor-xs3: 2px;
    --spacing-minor-xs2: 4px;
    --spacing-minor-xs: 6px;
    --spacing-minor-sm: 8px;
    --spacing-minor-base: 12px;
    --spacing-minor-md: 16px;
    --spacing-minor-lg: 20px;
    --spacing-minor-xl: 24px;
    --spacing-minor-xl2: 28px;
    --spacing-minor-xl3: 36px;
    --spacing-minor-xl4: 44px;
    --spacing-minor-xl5: 56px;
}

[data-spacing=base],
.spacing-base {
    --spacing-xs4: 4px;
    --spacing-xs3: 6px;
    --spacing-xs2: 8px;
    --spacing-xs: 12px;
    --spacing-sm: 16px;
    --spacing-base: 20px;
    --spacing-md: 24px;
    --spacing-lg: 28px;
    --spacing-xl: 32px;
    --spacing-xl2: 40px;
    --spacing-xl3: 48px;
    --spacing-xl4: 60px;
    --spacing-xl5: 72px;
    --spacing-minor-xs4: 2px;
    --spacing-minor-xs3: 4px;
    --spacing-minor-xs2: 6px;
    --spacing-minor-xs: 8px;
    --spacing-minor-sm: 12px;
    --spacing-minor-base: 16px;
    --spacing-minor-md: 20px;
    --spacing-minor-lg: 24px;
    --spacing-minor-xl: 28px;
    --spacing-minor-xl2: 36px;
    --spacing-minor-xl3: 44px;
    --spacing-minor-xl4: 56px;
    --spacing-minor-xl5: 68px;
}

[data-spacing=large],
.spacing-large {
    --spacing-xs4: 4px;
    --spacing-xs3: 8px;
    --spacing-xs2: 12px;
    --spacing-xs: 16px;
    --spacing-sm: 20px;
    --spacing-base: 24px;
    --spacing-md: 28px;
    --spacing-lg: 36px;
    --spacing-xl: 44px;
    --spacing-xl2: 52px;
    --spacing-xl3: 64px;
    --spacing-minor-xs4: 2px;
    --spacing-minor-xs3: 4px;
    --spacing-minor-xs2: 8px;
    --spacing-minor-xs: 12px;
    --spacing-minor-sm: 16px;
    --spacing-minor-base: 20px;
    --spacing-minor-md: 24px;
    --spacing-minor-lg: 32px;
    --spacing-minor-xl: 40px;
    --spacing-minor-xl2: 48px;
    --spacing-minor-xl3: 60px;
}

[data-spacing=touch],
.spacing-touch {
    --spacing-xs4: 4px;
    --spacing-xs3: 6px;
    --spacing-xs2: 8px;
    --spacing-xs: 12px;
    --spacing-sm: 16px;
    --spacing-base: 16px;
    --spacing-md: 16px;
    --spacing-lg: 20px;
    --spacing-xl: 24px;
    --spacing-minor-xs4: 2px;
    --spacing-minor-xs3: 4px;
    --spacing-minor-xs2: 6px;
    --spacing-minor-xs: 8px;
    --spacing-minor-sm: 12px;
    --spacing-minor-base: 12px;
    --spacing-minor-md: 12px;
    --spacing-minor-lg: 16px;
    --spacing-minor-xl: 20px;
}

[data-typography=compact],
.typography-compact {
    --font-size-xs2: 10px;
    --font-size-xs: 11px;
    --font-size-sm: 12px;
    --font-size-base: 13px;
    --font-size-md: 16px;
    --font-size-lg: 19px;
    --font-size-xl: 22px;
    --font-size-xl2: 27px;
    --font-size-xl3: 32px;
    --font-size-xl4: 39px;
    --font-size-xl5: 47px;
    --font-size-xl6: 56px;
    --font-size-xl7: 67px;
    --line-height-xs2: 10px;
    --line-height-xs: 12px;
    --line-height-sm: 14px;
    --line-height-base: 16px;
    --line-height-md: 20px;
    --line-height-lg: 24px;
    --line-height-xl: 28px;
    --line-height-xl2: 32px;
    --line-height-xl3: 40px;
    --line-height-xl4: 44px;
    --line-height-xl5: 52px;
    --line-height-xl6: 60px;
    --line-height-xl7: 78px;
    --letter-spacing-0: 0%px;
    --paragraph-spacing-label: 8px;
    --paragraph-spacing-paragraph: 12px;
    --paragraph-spacing-display: 16px;
}

[data-typography=base],
.typography-base {
    --font-size-xs2: 10px;
    --font-size-xs: 11px;
    --font-size-sm: 13px;
    --font-size-base: 15px;
    --font-size-md: 18px;
    --font-size-lg: 22px;
    --font-size-xl: 26px;
    --font-size-xl2: 31px;
    --font-size-xl3: 37px;
    --font-size-xl4: 45px;
    --font-size-xl5: 54px;
    --font-size-xl6: 64px;
    --font-size-xl7: 77px;
    --line-height-xs2: 12px;
    --line-height-xs: 14px;
    --line-height-sm: 16px;
    --line-height-base: 20px;
    --line-height-md: 24px;
    --line-height-lg: 28px;
    --line-height-xl: 32px;
    --line-height-xl2: 36px;
    --line-height-xl3: 44px;
    --line-height-xl4: 48px;
    --line-height-xl5: 60px;
    --line-height-xl6: 72px;
    --line-height-xl7: 86px;
    --letter-spacing-0: 0%px;
    --paragraph-spacing-label: 12px;
    --paragraph-spacing-paragraph: 16px;
    --paragraph-spacing-display: 20px;
}

[data-typography=large],
.typography-large {
    --font-size-xs2: 11px;
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 17px;
    --font-size-md: 20px;
    --font-size-lg: 24px;
    --font-size-xl: 29px;
    --font-size-xl2: 35px;
    --font-size-xl3: 42px;
    --font-size-xl4: 51px;
    --font-size-xl5: 61px;
    --font-size-xl6: 73px;
    --font-size-xl7: 88px;
    --line-height-xs2: 12px;
    --line-height-xs: 16px;
    --line-height-sm: 20px;
    --line-height-base: 24px;
    --line-height-md: 28px;
    --line-height-lg: 32px;
    --line-height-xl: 34px;
    --line-height-xl2: 40px;
    --line-height-xl3: 52px;
    --line-height-xl4: 56px;
    --line-height-xl5: 68px;
    --line-height-xl6: 80px;
    --line-height-xl7: 96px;
    --letter-spacing-0: 0%px;
    --paragraph-spacing-label: 12px;
    --paragraph-spacing-paragraph: 16px;
    --paragraph-spacing-display: 20px;
}

[data-iconSize=base],
.iconSize-base {
    --icon-size-sm: 12px;
    --icon-size-base: 16px;
    --icon-size-md: 24px;
    --icon-size-lg: 32px;
    --icon-size-xl: 48px;
    --icon-size-xl2: 64px;
    --icon-size-xl3: 96px;
    --icon-size-xl4: 128px;
    --icon-size-xl5: 256px;
}

[data-iconSize=touch],
.iconSize-touch {
    --icon-size-sm: 16px;
    --icon-size-base: 24px;
    --icon-size-md: 32px;
    --icon-size-lg: 48px;
    --icon-size-xl: 64px;
    --icon-size-xl2: 96px;
    --icon-size-xl3: 128px;
    --icon-size-xl4: 256px;
    --icon-size-xl5: 512px;
}

:root {
    --opacity-0: 0;
    --opacity-5: 0.5;
    --opacity-10: 0.1;
    --opacity-15: 0.15;
    --opacity-20: 0.2;
    --opacity-25: 0.25;
    --opacity-30: 0.3;
    --opacity-35: 0.35;
    --opacity-40: 0.4;
    --opacity-45: 0.45;
    --opacity-50: 0.5;
    --opacity-55: 0.55;
    --opacity-60: 0.6;
    --opacity-65: 0.65;
    --opacity-70: 0.7;
    --opacity-75: 0.75;
    --opacity-80: 0.8;
    --opacity-85: 0.85;
    --opacity-90: 0.9;
    --opacity-95: 0.95;
    --opacity-100: 1;
    --shadow-0: 0px 0.75px 0.5px 0px var(--box-shadow-color);
    --shadow-1: 0px 1px 2px -1px var(--box-shadow-color), 0px 2px 4px -1px var(--box-shadow-color);
    --shadow-2: 0px 2px 4px -2px var(--box-shadow-color), 0px 4px 6px -2px var(--box-shadow-color);
    --shadow-3: 0px 4px 6px -4px var(--box-shadow-color), 0px 10px 15px -3px var(--box-shadow-color);
    --shadow-4: 0px 12px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
    --shadow-5: 0px 23px 28px -7px var(--box-shadow-color), 0px 16px 10px -7px var(--box-shadow-color), 0px 24px 48px -10px var(--box-shadow-color);
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/source-variables.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --accent-red-100: hsla(3.84,88.65%,72.35%,0.125);\n    --accent-red-200: hsla(3.84,88.65%,72.35%,0.33);\n    --accent-red-300: hsl(4,86.54%,59.22%);\n    --accent-red-400: hsl(4.09,100%,46.08%);\n    --accent-red-500: hsl(4.19,99.08%,42.55%);\n    --accent-red-600: hsl(3.43,94.59%,85.49%);\n    --accent-amber-100: hsla(24.44,76.27%,65.29%,0.125);\n    --accent-amber-200: hsla(24.44,76.27%,65.29%,0.33);\n    --accent-amber-300: hsl(24.58,68.03%,52.16%);\n    --accent-amber-400: hsl(24.85,100%,38.82%);\n    --accent-amber-500: hsl(25,98.9%,35.69%);\n    --accent-amber-600: hsl(23.88,94.5%,78.63%);\n    --accent-brown-100: hsla(31.89,71.86%,60.98%,0.125);\n    --accent-brown-200: hsla(31.89,71.86%,60.98%,0.33);\n    --accent-brown-300: hsl(32.63,65.57%,47.84%);\n    --accent-brown-400: hsl(32.88,100%,34.71%);\n    --accent-brown-500: hsl(33.17,98.77%,31.96%);\n    --accent-brown-600: hsl(31.43,95.45%,74.12%);\n    --accent-green-100: hsla(126.03,96.14%,40.59%,0.125);\n    --accent-green-200: hsla(126.03,96.14%,40.59%,0.33);\n    --accent-green-300: hsl(127.86,97.67%,33.73%);\n    --accent-green-400: hsl(130.07,100%,26.86%);\n    --accent-green-500: hsl(131.52,98.43%,24.9%);\n    --accent-green-600: hsl(124.96,95.04%,47.45%);\n    --accent-teal-100: hsla(178.13,96.97%,38.82%,0.125);\n    --accent-teal-200: hsla(178.13,96.97%,38.82%,0.33);\n    --accent-teal-300: hsl(180.74,97.6%,32.75%);\n    --accent-teal-400: hsl(183.86,100%,27.45%);\n    --accent-teal-500: hsl(185.91,98.51%,26.27%);\n    --accent-teal-600: hsl(176.49,95.69%,45.49%);\n    --accent-blue-100: hsla(216.09,98.52%,73.53%,0.125);\n    --accent-blue-200: hsla(216.09,98.52%,73.53%,0.33);\n    --accent-blue-300: hsl(218.31,98.88%,64.9%);\n    --accent-blue-400: hsl(220,100%,56.47%);\n    --accent-blue-500: hsl(223.01,98.26%,54.9%);\n    --accent-blue-600: hsl(210.68,95.65%,81.96%);\n    --accent-indigo-100: hsla(235.58,97.94%,80.98%,0.125);\n    --accent-indigo-200: hsla(235.58,97.94%,80.98%,0.33);\n    --accent-indigo-300: hsl(238.57,98.44%,74.9%);\n    --accent-indigo-400: hsl(240,100%,68.82%);\n    --accent-indigo-500: hsl(243.77,97.77%,64.9%);\n    --accent-indigo-600: hsl(230.32,93.94%,87.06%);\n    --accent-violet-100: hsla(256.08,97.98%,80.59%,0.125);\n    --accent-violet-200: hsla(256.08,97.98%,80.59%,0.33);\n    --accent-violet-300: hsl(258.39,100%,73.14%);\n    --accent-violet-400: hsl(260,100%,65.29%);\n    --accent-violet-500: hsl(263.94,92.34%,59.02%);\n    --accent-violet-600: hsl(249.47,96.61%,88.43%);\n    --accent-purple-100: hsla(276.21,98.31%,76.86%,0.125);\n    --accent-purple-200: hsla(276.21,98.31%,76.86%,0.33);\n    --accent-purple-300: hsl(278.7,98.83%,66.47%);\n    --accent-purple-400: hsl(280.09,100%,56.27%);\n    --accent-purple-500: hsl(283.11,81.75%,49.41%);\n    --accent-purple-600: hsl(269.03,93.94%,87.06%);\n    --accent-pink-100: hsla(335.04,88.65%,72.35%,0.125);\n    --accent-pink-200: hsla(335.04,88.65%,72.35%,0.33);\n    --accent-pink-300: hsl(338.21,85.65%,59.02%);\n    --accent-pink-400: hsl(340,100%,45.88%);\n    --accent-pink-500: hsl(343.53,99.08%,42.55%);\n    --accent-pink-600: hsl(326.57,94.59%,85.49%);\n    --text-base-400: hsla(0,0%,5.88%,0.45);\n    --text-base-500: hsla(0,0%,5.88%,0.65);\n    --text-base-600: hsl(0,0%,5.88%);\n    --text-base-action: var(--primary-500);\n    --text-base-info: var(--info-500);\n    --text-base-success: var(--success-500);\n    --text-base-warning: var(--warning-500);\n    --text-base-danger: var(--danger-500);\n    --text-contrast-400: hsla(0,0%,100%,0.45);\n    --text-contrast-500: hsla(0,0%,100%,0.7);\n    --text-contrast-600: hsl(0,0%,100%);\n    --text-contrast-action: var(--primary-600);\n    --text-contrast-info: var(--info-600);\n    --text-contrast-success: var(--success-600);\n    --text-contrast-warning: var(--warning-600);\n    --text-contrast-danger: var(--danger-600);\n    --alt-base-100: hsla(180,100%,13.92%,0.04);\n    --alt-base-200: hsla(180,100%,13.92%,0.08);\n    --alt-base-300: hsla(180,100%,13.92%,0.16);\n    --alt-base-400: hsla(180,100%,13.92%,0.24);\n    --alt-base-500: hsla(180,100%,13.92%,0.32);\n    --alt-base-600: hsla(180,100%,13.92%,0.44);\n    --alt-contrast-100: hsla(0,0%,100%,0.04);\n    --alt-contrast-200: hsla(0,0%,100%,0.08);\n    --alt-contrast-300: hsla(0,0%,100%,0.12);\n    --alt-contrast-400: hsla(0,0%,100%,0.16);\n    --alt-contrast-500: hsla(0,0%,100%,0.24);\n    --alt-contrast-600: hsla(0,0%,100%,0.32);\n    --utility-white: hsl(0,0%,100%);\n    --utility-black: hsl(0,0%,3.92%);\n    --utility-transparent: hsla(0,0%,100%,0);\n    --utility-shade-100: hsla(180,100%,8.04%,0.04);\n    --utility-shade-200: hsla(180,100%,8.04%,0.08);\n    --utility-shade-300: hsla(180,100%,8.04%,0.16);\n    --utility-shade-400: hsla(180,100%,8.04%,0.24);\n    --utility-shade-500: hsla(180,100%,8.04%,0.32);\n    --utility-shade-600: hsla(180,100%,8.04%,0.44);\n    --utility-tint-100: hsla(0,0%,100%,0.5);\n    --utility-tint-200: hsla(0,0%,100%,0.6);\n    --utility-tint-300: hsla(0,0%,100%,0.7);\n    --utility-tint-400: hsla(0,0%,100%,0.8);\n    --utility-tint-500: hsla(0,0%,100%,0.9);\n    --utility-tint-600: hsl(0,0%,100%);\n    --primary-100: var(--accent-blue-100);\n    --primary-200: var(--accent-blue-200);\n    --primary-300: var(--accent-blue-300);\n    --primary-400: var(--accent-blue-400);\n    --primary-500: var(--accent-blue-500);\n    --primary-600: var(--accent-blue-600);\n    --info-100: var(--accent-teal-100);\n    --info-200: var(--accent-teal-200);\n    --info-300: var(--accent-teal-300);\n    --info-400: var(--accent-teal-400);\n    --info-500: var(--accent-teal-500);\n    --info-600: var(--accent-teal-600);\n    --success-100: var(--accent-green-100);\n    --success-200: var(--accent-green-200);\n    --success-300: var(--accent-green-300);\n    --success-400: var(--accent-green-400);\n    --success-500: var(--accent-green-500);\n    --success-600: var(--accent-green-600);\n    --warning-100: var(--accent-amber-100);\n    --warning-200: var(--accent-amber-200);\n    --warning-300: var(--accent-amber-300);\n    --warning-400: var(--accent-amber-400);\n    --warning-500: var(--accent-amber-500);\n    --warning-600: var(--accent-amber-600);\n    --danger-100: var(--accent-red-100);\n    --danger-200: var(--accent-red-200);\n    --danger-300: var(--accent-red-300);\n    --danger-400: var(--accent-red-400);\n    --danger-500: var(--accent-red-500);\n    --danger-600: var(--accent-red-600);\n    --fill-base-100: hsl(0,0%,100%);\n    --fill-base-200: hsl(0,0%,98.04%);\n    --fill-base-300: hsl(0,0%,96.08%);\n    --fill-base-400: hsl(0,0%,94.12%);\n    --fill-base-500: hsl(180,2.44%,91.96%);\n    --fill-base-600: hsl(180,1.64%,88.04%);\n    --fill-contrast-100: hsl(180,0.81%,24.12%);\n    --fill-contrast-200: hsl(240,0.88%,22.16%);\n    --fill-contrast-300: hsl(0,0%,20%);\n    --fill-contrast-400: hsl(0,0%,18.04%);\n    --fill-contrast-500: hsl(180,1.23%,15.88%);\n    --fill-contrast-600: hsl(180,1.41%,13.92%);\n    --stroke-base-100: hsl(0,0%,92.94%);\n    --stroke-base-200: hsl(180,1.64%,88.04%);\n    --stroke-base-300: hsl(180,1.3%,84.9%);\n    --stroke-base-400: hsl(0,0%,80%);\n    --stroke-base-500: hsl(180,0.65%,70%);\n    --stroke-base-600: hsl(180,0.43%,53.92%);\n    --stroke-contrast-100: hsl(180,0.7%,28.04%);\n    --stroke-contrast-200: hsl(180,0.65%,30%);\n    --stroke-contrast-300: hsl(180,0.59%,33.14%);\n    --stroke-contrast-400: hsl(180,0.55%,35.88%);\n    --stroke-contrast-500: hsl(180,0.5%,39.02%);\n    --stroke-contrast-600: hsl(180,0.44%,44.9%);\n}\n\n.figma-dark {\n    --accent-red-100: hsla(4.32,79.86%,72.75%,0.2);\n    --accent-red-200: hsla(4.32,79.86%,72.75%,0.45);\n    --accent-red-300: hsl(3.73,80.9%,60.98%);\n    --accent-red-400: hsl(3.98,84.74%,48.82%);\n    --accent-red-500: hsl(3.93,79.22%,84.9%);\n    --accent-red-600: hsl(3.93,79.22%,84.9%);\n    --accent-amber-100: hsla(24.31,67.44%,66.27%,0.2);\n    --accent-amber-200: hsla(24.31,67.44%,66.27%,0.45);\n    --accent-amber-300: hsl(24.83,60.67%,53.14%);\n    --accent-amber-400: hsl(25.03,85.37%,40.2%);\n    --accent-amber-500: hsl(23.72,81.13%,79.22%);\n    --accent-amber-600: hsl(23.72,81.13%,79.22%);\n    --accent-brown-100: hsla(32.5,62.5%,62.35%,0.2);\n    --accent-brown-200: hsla(32.5,62.5%,62.35%,0.45);\n    --accent-brown-300: hsl(32.37,54.94%,49.61%);\n    --accent-brown-400: hsl(33.04,84.95%,36.47%);\n    --accent-brown-500: hsl(31.49,80.8%,75.49%);\n    --accent-brown-600: hsl(31.49,80.8%,75.49%);\n    --accent-green-100: hsla(126.38,65.57%,47.84%,0.2);\n    --accent-green-200: hsla(126.38,65.57%,47.84%,0.45);\n    --accent-green-300: hsl(127.61,72.45%,38.43%);\n    --accent-green-400: hsl(130,85.14%,29.02%);\n    --accent-green-500: hsl(124.77,80.73%,57.25%);\n    --accent-green-600: hsl(124.77,80.73%,57.25%);\n    --accent-teal-100: hsla(178.29,81.4%,42.16%,0.2);\n    --accent-teal-200: hsla(178.29,81.4%,42.16%,0.45);\n    --accent-teal-300: hsl(181.21,82.32%,35.49%);\n    --accent-teal-400: hsl(184.22,85.33%,29.41%);\n    --accent-teal-500: hsl(176.73,80.16%,49.41%);\n    --accent-teal-600: hsl(176.73,80.16%,49.41%);\n    --accent-blue-100: hsla(216.11,82.48%,73.14%,0.2);\n    --accent-blue-200: hsla(216.11,82.48%,73.14%,0.45);\n    --accent-blue-300: hsl(218.82,84.53%,64.51%);\n    --accent-blue-400: hsl(220.21,84.89%,55.88%);\n    --accent-blue-500: hsl(211.2,80.65%,81.76%);\n    --accent-blue-600: hsl(211.2,80.65%,81.76%);\n    --accent-indigo-100: hsla(236.43,82.35%,80%,0.2);\n    --accent-indigo-200: hsla(236.43,82.35%,80%,0.45);\n    --accent-indigo-300: hsl(238.42,83.82%,73.33%);\n    --accent-indigo-400: hsl(240,84.62%,66.86%);\n    --accent-indigo-500: hsl(231.27,79.71%,86.47%);\n    --accent-indigo-600: hsl(231.27,79.71%,86.47%);\n    --accent-violet-100: hsla(255.86,82.86%,79.41%,0.2);\n    --accent-violet-200: hsla(255.86,82.86%,79.41%,0.45);\n    --accent-violet-300: hsl(258.2,84.72%,71.76%);\n    --accent-violet-400: hsl(259.87,84.86%,63.73%);\n    --accent-violet-500: hsl(249.23,81.25%,87.45%);\n    --accent-violet-600: hsl(249.23,81.25%,87.45%);\n    --accent-purple-100: hsla(275.76,83.19%,76.67%,0.2);\n    --accent-purple-200: hsla(275.76,83.19%,76.67%,0.45);\n    --accent-purple-300: hsl(278.6,84.62%,66.86%);\n    --accent-purple-400: hsl(280.11,85.39%,57.06%);\n    --accent-purple-500: hsl(268.36,79.71%,86.47%);\n    --accent-purple-600: hsl(268.36,79.71%,86.47%);\n    --accent-pink-100: hsla(335.14,79.86%,72.75%,0.2);\n    --accent-pink-200: hsla(335.14,79.86%,72.75%,0.45);\n    --accent-pink-300: hsl(338.39,80.9%,60.98%);\n    --accent-pink-400: hsl(340.09,84.74%,48.82%);\n    --accent-pink-500: hsl(326.56,79.22%,84.9%);\n    --accent-pink-600: hsl(326.56,79.22%,84.9%);\n    --text-base-400: hsla(0,0%,100%,0.45);\n    --text-base-500: hsla(0,0%,100%,0.7);\n    --text-base-600: hsl(0,0%,100%);\n    --text-base-action: var(--primary-500);\n    --text-base-info: var(--info-500);\n    --text-base-success: var(--success-500);\n    --text-base-warning: var(--warning-500);\n    --text-base-danger: var(--danger-500);\n    --text-contrast-400: hsla(0,0%,100%,0.45);\n    --text-contrast-500: hsla(0,0%,100%,0.7);\n    --text-contrast-600: hsl(0,0%,100%);\n    --text-contrast-action: var(--primary-600);\n    --text-contrast-info: var(--info-600);\n    --text-contrast-success: var(--success-600);\n    --text-contrast-warning: var(--warning-600);\n    --text-contrast-danger: var(--danger-600);\n    --alt-base-100: hsla(180,1.79%,78.04%,0.08);\n    --alt-base-200: hsla(180,1.79%,78.04%,0.12);\n    --alt-base-300: hsla(180,1.79%,78.04%,0.16);\n    --alt-base-400: hsla(180,1.79%,78.04%,0.24);\n    --alt-base-500: hsla(180,1.79%,78.04%,0.32);\n    --alt-base-600: hsla(180,1.79%,78.04%,0.44);\n    --alt-contrast-100: hsla(180,1.79%,78.04%,0.08);\n    --alt-contrast-200: hsla(180,1.79%,78.04%,0.12);\n    --alt-contrast-300: hsla(180,1.79%,78.04%,0.16);\n    --alt-contrast-400: hsla(180,1.79%,78.04%,0.24);\n    --alt-contrast-500: hsla(180,1.79%,78.04%,0.32);\n    --alt-contrast-600: hsla(180,1.79%,78.04%,0.44);\n    --utility-white: hsl(0,0%,100%);\n    --utility-black: hsl(0,0%,3.92%);\n    --utility-transparent: hsla(0,0%,0%,0);\n    --utility-shade-100: hsla(0,0%,0%,0.1);\n    --utility-shade-200: hsla(0,0%,0%,0.2);\n    --utility-shade-300: hsla(0,0%,0%,0.3);\n    --utility-shade-400: hsla(0,0%,0%,0.4);\n    --utility-shade-500: hsla(0,0%,0%,0.5);\n    --utility-shade-600: hsla(0,0%,0%,0.6);\n    --utility-tint-100: hsla(180,1.79%,78.04%,0.08);\n    --utility-tint-200: hsla(180,1.79%,78.04%,0.12);\n    --utility-tint-300: hsla(180,1.79%,78.04%,0.16);\n    --utility-tint-400: hsla(180,1.79%,78.04%,0.24);\n    --utility-tint-500: hsla(180,1.79%,78.04%,0.32);\n    --utility-tint-600: hsla(180,1.79%,78.04%,0.44);\n    --primary-100: var(--accent-blue-100);\n    --primary-200: var(--accent-blue-200);\n    --primary-300: var(--accent-blue-300);\n    --primary-400: var(--accent-blue-400);\n    --primary-500: var(--accent-blue-500);\n    --primary-600: var(--accent-blue-600);\n    --info-100: var(--accent-teal-100);\n    --info-200: var(--accent-teal-200);\n    --info-300: var(--accent-teal-300);\n    --info-400: var(--accent-teal-400);\n    --info-500: var(--accent-teal-500);\n    --info-600: var(--accent-teal-600);\n    --success-100: var(--accent-green-100);\n    --success-200: var(--accent-green-200);\n    --success-300: var(--accent-green-300);\n    --success-400: var(--accent-green-400);\n    --success-500: var(--accent-green-500);\n    --success-600: var(--accent-green-600);\n    --warning-100: var(--accent-amber-100);\n    --warning-200: var(--accent-amber-200);\n    --warning-300: var(--accent-amber-300);\n    --warning-400: var(--accent-amber-400);\n    --warning-500: var(--accent-amber-500);\n    --warning-600: var(--accent-amber-600);\n    --danger-100: var(--accent-red-100);\n    --danger-200: var(--accent-red-200);\n    --danger-300: var(--accent-red-300);\n    --danger-400: var(--accent-red-400);\n    --danger-500: var(--accent-red-500);\n    --danger-600: var(--accent-red-600);\n    --fill-base-100: hsl(180,1.41%,13.92%);\n    --fill-base-200: hsl(180,1.64%,11.96%);\n    --fill-base-300: hsl(180,1.96%,10%);\n    --fill-base-400: hsl(180,2.44%,8.04%);\n    --fill-base-500: hsl(0,0%,5.88%);\n    --fill-base-600: hsl(0,0%,3.92%);\n    --fill-contrast-100: hsl(180,0.81%,24.12%);\n    --fill-contrast-200: hsl(240,0.88%,22.16%);\n    --fill-contrast-300: hsl(0,0%,20%);\n    --fill-contrast-400: hsl(0,0%,18.04%);\n    --fill-contrast-500: hsl(180,1.23%,15.88%);\n    --fill-contrast-600: hsl(180,1.41%,13.92%);\n    --stroke-base-100: hsl(240,0.88%,22.16%);\n    --stroke-base-200: hsl(180,0.79%,24.9%);\n    --stroke-base-300: hsl(180,0.68%,28.82%);\n    --stroke-base-400: hsl(180,0.58%,33.92%);\n    --stroke-base-500: hsl(210,0.98%,40%);\n    --stroke-base-600: hsl(210,0.83%,47.06%);\n    --stroke-contrast-100: hsl(180,0.7%,28.04%);\n    --stroke-contrast-200: hsl(180,0.65%,30%);\n    --stroke-contrast-300: hsl(180,0.59%,33.14%);\n    --stroke-contrast-400: hsl(180,0.55%,35.88%);\n    --stroke-contrast-500: hsl(180,0.5%,39.02%);\n    --stroke-contrast-600: hsl(180,0.44%,44.9%);\n}\n\n[data-radii=compact],\n.radii-compact {\n    --radii-none: 0px;\n    --radii-sm: 3px;\n    --radii-base: 4px;\n    --radii-md: 6px;\n    --radii-lg: 9px;\n    --radii-xl: 13px;\n    --radii-xl2: 20px;\n    --radii-round: 999px;\n}\n\n[data-radii=base],\n.radii-base {\n    --radii-none: 0px;\n    --radii-sm: 4.5px;\n    --radii-base: 6px;\n    --radii-md: 9px;\n    --radii-lg: 12px;\n    --radii-xl: 16px;\n    --radii-xl2: 22px;\n    --radii-round: 999px;\n}\n\n[data-radii=large],\n.radii-large {\n    --radii-none: 0px;\n    --radii-sm: 6px;\n    --radii-base: 8px;\n    --radii-md: 12px;\n    --radii-lg: 16px;\n    --radii-xl: 24px;\n    --radii-xl2: 40px;\n    --radii-round: 999px;\n}\n\n[data-spacing=compact],\n.spacing-compact {\n    --spacing-xs4: 2px;\n    --spacing-xs3: 4px;\n    --spacing-xs2: 6px;\n    --spacing-xs: 8px;\n    --spacing-sm: 12px;\n    --spacing-base: 16px;\n    --spacing-md: 20px;\n    --spacing-lg: 24px;\n    --spacing-xl: 28px;\n    --spacing-xl2: 32px;\n    --spacing-xl3: 40px;\n    --spacing-xl4: 48px;\n    --spacing-xl5: 60px;\n    --spacing-minor-xs4: 1px;\n    --spacing-minor-xs3: 2px;\n    --spacing-minor-xs2: 4px;\n    --spacing-minor-xs: 6px;\n    --spacing-minor-sm: 8px;\n    --spacing-minor-base: 12px;\n    --spacing-minor-md: 16px;\n    --spacing-minor-lg: 20px;\n    --spacing-minor-xl: 24px;\n    --spacing-minor-xl2: 28px;\n    --spacing-minor-xl3: 36px;\n    --spacing-minor-xl4: 44px;\n    --spacing-minor-xl5: 56px;\n}\n\n[data-spacing=base],\n.spacing-base {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 6px;\n    --spacing-xs2: 8px;\n    --spacing-xs: 12px;\n    --spacing-sm: 16px;\n    --spacing-base: 20px;\n    --spacing-md: 24px;\n    --spacing-lg: 28px;\n    --spacing-xl: 32px;\n    --spacing-xl2: 40px;\n    --spacing-xl3: 48px;\n    --spacing-xl4: 60px;\n    --spacing-xl5: 72px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 6px;\n    --spacing-minor-xs: 8px;\n    --spacing-minor-sm: 12px;\n    --spacing-minor-base: 16px;\n    --spacing-minor-md: 20px;\n    --spacing-minor-lg: 24px;\n    --spacing-minor-xl: 28px;\n    --spacing-minor-xl2: 36px;\n    --spacing-minor-xl3: 44px;\n    --spacing-minor-xl4: 56px;\n    --spacing-minor-xl5: 68px;\n}\n\n[data-spacing=large],\n.spacing-large {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 8px;\n    --spacing-xs2: 12px;\n    --spacing-xs: 16px;\n    --spacing-sm: 20px;\n    --spacing-base: 24px;\n    --spacing-md: 28px;\n    --spacing-lg: 36px;\n    --spacing-xl: 44px;\n    --spacing-xl2: 52px;\n    --spacing-xl3: 64px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 8px;\n    --spacing-minor-xs: 12px;\n    --spacing-minor-sm: 16px;\n    --spacing-minor-base: 20px;\n    --spacing-minor-md: 24px;\n    --spacing-minor-lg: 32px;\n    --spacing-minor-xl: 40px;\n    --spacing-minor-xl2: 48px;\n    --spacing-minor-xl3: 60px;\n}\n\n[data-spacing=touch],\n.spacing-touch {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 6px;\n    --spacing-xs2: 8px;\n    --spacing-xs: 12px;\n    --spacing-sm: 16px;\n    --spacing-base: 16px;\n    --spacing-md: 16px;\n    --spacing-lg: 20px;\n    --spacing-xl: 24px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 6px;\n    --spacing-minor-xs: 8px;\n    --spacing-minor-sm: 12px;\n    --spacing-minor-base: 12px;\n    --spacing-minor-md: 12px;\n    --spacing-minor-lg: 16px;\n    --spacing-minor-xl: 20px;\n}\n\n[data-typography=compact],\n.typography-compact {\n    --font-size-xs2: 10px;\n    --font-size-xs: 11px;\n    --font-size-sm: 12px;\n    --font-size-base: 13px;\n    --font-size-md: 16px;\n    --font-size-lg: 19px;\n    --font-size-xl: 22px;\n    --font-size-xl2: 27px;\n    --font-size-xl3: 32px;\n    --font-size-xl4: 39px;\n    --font-size-xl5: 47px;\n    --font-size-xl6: 56px;\n    --font-size-xl7: 67px;\n    --line-height-xs2: 10px;\n    --line-height-xs: 12px;\n    --line-height-sm: 14px;\n    --line-height-base: 16px;\n    --line-height-md: 20px;\n    --line-height-lg: 24px;\n    --line-height-xl: 28px;\n    --line-height-xl2: 32px;\n    --line-height-xl3: 40px;\n    --line-height-xl4: 44px;\n    --line-height-xl5: 52px;\n    --line-height-xl6: 60px;\n    --line-height-xl7: 78px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 8px;\n    --paragraph-spacing-paragraph: 12px;\n    --paragraph-spacing-display: 16px;\n}\n\n[data-typography=base],\n.typography-base {\n    --font-size-xs2: 10px;\n    --font-size-xs: 11px;\n    --font-size-sm: 13px;\n    --font-size-base: 15px;\n    --font-size-md: 18px;\n    --font-size-lg: 22px;\n    --font-size-xl: 26px;\n    --font-size-xl2: 31px;\n    --font-size-xl3: 37px;\n    --font-size-xl4: 45px;\n    --font-size-xl5: 54px;\n    --font-size-xl6: 64px;\n    --font-size-xl7: 77px;\n    --line-height-xs2: 12px;\n    --line-height-xs: 14px;\n    --line-height-sm: 16px;\n    --line-height-base: 20px;\n    --line-height-md: 24px;\n    --line-height-lg: 28px;\n    --line-height-xl: 32px;\n    --line-height-xl2: 36px;\n    --line-height-xl3: 44px;\n    --line-height-xl4: 48px;\n    --line-height-xl5: 60px;\n    --line-height-xl6: 72px;\n    --line-height-xl7: 86px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 12px;\n    --paragraph-spacing-paragraph: 16px;\n    --paragraph-spacing-display: 20px;\n}\n\n[data-typography=large],\n.typography-large {\n    --font-size-xs2: 11px;\n    --font-size-xs: 12px;\n    --font-size-sm: 14px;\n    --font-size-base: 17px;\n    --font-size-md: 20px;\n    --font-size-lg: 24px;\n    --font-size-xl: 29px;\n    --font-size-xl2: 35px;\n    --font-size-xl3: 42px;\n    --font-size-xl4: 51px;\n    --font-size-xl5: 61px;\n    --font-size-xl6: 73px;\n    --font-size-xl7: 88px;\n    --line-height-xs2: 12px;\n    --line-height-xs: 16px;\n    --line-height-sm: 20px;\n    --line-height-base: 24px;\n    --line-height-md: 28px;\n    --line-height-lg: 32px;\n    --line-height-xl: 34px;\n    --line-height-xl2: 40px;\n    --line-height-xl3: 52px;\n    --line-height-xl4: 56px;\n    --line-height-xl5: 68px;\n    --line-height-xl6: 80px;\n    --line-height-xl7: 96px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 12px;\n    --paragraph-spacing-paragraph: 16px;\n    --paragraph-spacing-display: 20px;\n}\n\n[data-iconSize=base],\n.iconSize-base {\n    --icon-size-sm: 12px;\n    --icon-size-base: 16px;\n    --icon-size-md: 24px;\n    --icon-size-lg: 32px;\n    --icon-size-xl: 48px;\n    --icon-size-xl2: 64px;\n    --icon-size-xl3: 96px;\n    --icon-size-xl4: 128px;\n    --icon-size-xl5: 256px;\n}\n\n[data-iconSize=touch],\n.iconSize-touch {\n    --icon-size-sm: 16px;\n    --icon-size-base: 24px;\n    --icon-size-md: 32px;\n    --icon-size-lg: 48px;\n    --icon-size-xl: 64px;\n    --icon-size-xl2: 96px;\n    --icon-size-xl3: 128px;\n    --icon-size-xl4: 256px;\n    --icon-size-xl5: 512px;\n}\n\n:root {\n    --opacity-0: 0;\n    --opacity-5: 0.5;\n    --opacity-10: 0.1;\n    --opacity-15: 0.15;\n    --opacity-20: 0.2;\n    --opacity-25: 0.25;\n    --opacity-30: 0.3;\n    --opacity-35: 0.35;\n    --opacity-40: 0.4;\n    --opacity-45: 0.45;\n    --opacity-50: 0.5;\n    --opacity-55: 0.55;\n    --opacity-60: 0.6;\n    --opacity-65: 0.65;\n    --opacity-70: 0.7;\n    --opacity-75: 0.75;\n    --opacity-80: 0.8;\n    --opacity-85: 0.85;\n    --opacity-90: 0.9;\n    --opacity-95: 0.95;\n    --opacity-100: 1;\n}\n\n:root {\n    --shadow-0: 0px 0.75px 0.5px 0px var(--box-shadow-color);\n    --shadow-1: 0px 1px 2px -1px var(--box-shadow-color), 0px 2px 4px -1px var(--box-shadow-color);\n    --shadow-2: 0px 2px 4px -2px var(--box-shadow-color), 0px 4px 6px -2px var(--box-shadow-color);\n    --shadow-3: 0px 4px 6px -4px var(--box-shadow-color), 0px 10px 15px -3px var(--box-shadow-color);\n    --shadow-4: 0px 12px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);\n    --shadow-5: 0px 23px 28px -7px var(--box-shadow-color), 0px 16px 10px -7px var(--box-shadow-color), 0px 24px 48px -10px var(--box-shadow-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/styles.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/styles.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M11.354 8.354a.5.5 0 0 1-.708 0L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708%27/%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M15.294 8A7.3 7.3 0 1 1 .695 8a7.3 7.3 0 0 1 14.6 0m-1 0A6.3 6.3 0 1 1 1.695 8a6.3 6.3 0 0 1 12.6 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M11.354 8.354a.5.5 0 0 1-.708 0L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708%27/%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M15.294 8A7.3 7.3 0 1 1 .695 8a7.3 7.3 0 0 1 14.6 0m-1 0A6.3 6.3 0 1 1 1.695 8a6.3 6.3 0 0 1 12.6 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M3.396 5.396a.5.5 0 0 1 .708 0L8 9.293l3.896-3.897a.5.5 0 0 1 .708.708l-4.25 4.25a.5.5 0 0 1-.708 0l-4.25-4.25a.5.5 0 0 1 0-.708%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M3.396 5.396a.5.5 0 0 1 .708 0L8 9.293l3.896-3.897a.5.5 0 0 1 .708.708l-4.25 4.25a.5.5 0 0 1-.708 0l-4.25-4.25a.5.5 0 0 1 0-.708%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M8 1a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 0 1 .708.708L8 12.207 4.646 8.854a.5.5 0 1 1 .708-.708L7.5 10.293V1.5A.5.5 0 0 1 8 1m-6.5 9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M8 1a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 0 1 .708.708L8 12.207 4.646 8.854a.5.5 0 1 1 .708-.708L7.5 10.293V1.5A.5.5 0 0 1 8 1m-6.5 9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M7.146.854a.5.5 0 1 1 .708-.708L10.207 2.5 7.854 4.854a.5.5 0 1 1-.708-.708L8.293 3H8a5 5 0 0 0-2.939 9.045.5.5 0 1 1-.588.81A6 6 0 0 1 8 2h.293L7.146.854M8 13a5 5 0 0 0 2.939-9.045.5.5 0 0 1 .588-.81A6 6 0 0 1 8 14h-.293l1.147 1.146a.5.5 0 0 1-.708.708L5.793 13.5l2.353-2.354a.5.5 0 0 1 .708.708L7.707 13z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M7.146.854a.5.5 0 1 1 .708-.708L10.207 2.5 7.854 4.854a.5.5 0 1 1-.708-.708L8.293 3H8a5 5 0 0 0-2.939 9.045.5.5 0 1 1-.588.81A6 6 0 0 1 8 2h.293L7.146.854M8 13a5 5 0 0 0 2.939-9.045.5.5 0 0 1 .588-.81A6 6 0 0 1 8 14h-.293l1.147 1.146a.5.5 0 0 1-.708.708L5.793 13.5l2.353-2.354a.5.5 0 0 1 .708.708L7.707 13z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M10.147.146a.5.5 0 0 1 .707 0L14.207 3.5l-3.353 3.354a.5.5 0 1 1-.707-.708L12.293 4H5.5A2.5 2.5 0 0 0 3 6.5v1a.5.5 0 1 1-1 0v-1A3.5 3.5 0 0 1 5.5 3h6.793L10.147.854a.5.5 0 0 1 0-.708M13 9.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708L1.793 12.5l3.353-3.354a.5.5 0 1 1 .708.708L3.707 12H10.5A2.5 2.5 0 0 0 13 9.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M10.147.146a.5.5 0 0 1 .707 0L14.207 3.5l-3.353 3.354a.5.5 0 1 1-.707-.708L12.293 4H5.5A2.5 2.5 0 0 0 3 6.5v1a.5.5 0 1 1-1 0v-1A3.5 3.5 0 0 1 5.5 3h6.793L10.147.854a.5.5 0 0 1 0-.708M13 9.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708L1.793 12.5l3.353-3.354a.5.5 0 1 1 .708.708L3.707 12H10.5A2.5 2.5 0 0 0 13 9.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M8.5 2.914v8.793a.5.5 0 0 1-1 0V2.914L5.354 5.061a.5.5 0 1 1-.708-.707L8 1l3.354 3.354a.5.5 0 0 1-.708.707L8.5 2.914%27/%3e%3cpath fill=%27%230E1011%27 d=%27M2 10.5a.5.5 0 0 0-1 0v3.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.5a.5.5 0 0 0-1 0v3.25a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M8.5 2.914v8.793a.5.5 0 0 1-1 0V2.914L5.354 5.061a.5.5 0 1 1-.708-.707L8 1l3.354 3.354a.5.5 0 0 1-.708.707L8.5 2.914%27/%3e%3cpath fill=%27%230E1011%27 d=%27M2 10.5a.5.5 0 0 0-1 0v3.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.5a.5.5 0 0 0-1 0v3.25a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M12.854 3.854a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146Z%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M12.854 3.854a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146Z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M5.396 12.604a.5.5 0 0 1 0-.708L9.293 8 5.396 4.104a.5.5 0 1 1 .708-.708l4.25 4.25a.5.5 0 0 1 0 .708l-4.25 4.25a.5.5 0 0 1-.708 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e */ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M5.396 12.604a.5.5 0 0 1 0-.708L9.293 8 5.396 4.104a.5.5 0 1 1 .708-.708l4.25 4.25a.5.5 0 0 1 0 .708l-4.25 4.25a.5.5 0 0 1-.708 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z" fill="white"/></svg> */ "data:image/svg+xml,<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z\" fill=\"white\"/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: currentColor; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.icon {
  --bg-image: none;
  --icon-size: var(--icon-size-base);
  min-height: var(--line-height-base);
  display: inline-flex;
  align-items: center;
  flex-flow: row;
  background-image: none !important;
  background-blend-mode: initial;
}
.icon::before {
  aspect-ratio: 1 / 1;
  content: " ";
  display: inline-block;
  background-color: currentColor;
  width: var(--icon-size);
  -webkit-mask: var(--icon-src);
  mask: var(--icon-src);
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-position: center;
  background-image: var(--bg-image);
  background-blend-mode: var(--bg-blend-mode);
}
.visible {
  visibility: visible;
}
.collapse {
  visibility: collapse;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.mb-minor-lg {
  margin-bottom: var(--spacing-minor-lg);
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.h-full {
  height: 100%;
}
.flex-1 {
  flex: 1 1 0%;
}
.border-collapse {
  border-collapse: collapse;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize {
  resize: both;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.items-center {
  align-items: center;
}
.items-baseline {
  align-items: baseline;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0 {
  gap: 0px;
}
.gap-0\\.5 {
  gap: 0.125rem;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-minor-base {
  gap: var(--spacing-minor-base);
}
.gap-minor-xs {
  gap: var(--spacing-minor-xs);
}
.gap-minor-xs3 {
  gap: var(--spacing-minor-xs3);
}
.gap-minor-xs4 {
  gap: var(--spacing-minor-xs4);
}
.gap-sm {
  gap: var(--spacing-sm);
}
.gap-xs {
  gap: var(--spacing-xs);
}
.gap-xs2 {
  gap: var(--spacing-xs2);
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-ellipsis {
  text-overflow: ellipsis;
}
.text-ellipsis {
  text-overflow: ellipsis;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.text-wrap {
  text-wrap: wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.rounded {
  border-radius: var(--radii-base);
}
.rounded-md {
  border-radius: var(--radii-md);
}
.border {
  border-width: 1px;
}
.text-right {
  text-align: right;
}
.text-base {
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}
.text-lg {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}
.text-md {
  font-size: var(--font-size-md);
  line-height: var(--line-height-md);
}
.text-sm {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
}
.font-bold {
  font-weight: 700;
}
.underline {
  text-decoration-line: underline;
}
.shadow-5 {
  --tw-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
  --tw-shadow-colored: 0px 8px 10px -6px var(--tw-shadow-color), 0px 20px 25px -5px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.border {
  --border-width: 1px;
}
.bg-alt-base-100 {
  --bg-color: var(--alt-base-100);
  background-color: var(--bg-color);
}
.bg-fill-base-300 {
  --bg-color: var(--fill-base-300);
  background-color: var(--bg-color);
}
.color-primary-300 {
  --text-color: var(--primary-300);
  color: var(--text-color);
}
.color-text-base-500 {
  --text-color: var(--text-base-500);
  color: var(--text-color);
}
.shadow-5 {
  --shadow-color: var(--utility-shade-200);
  --shadow-opacity: 100%;
  --box-shadow-color: color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)));
  --box-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
  box-shadow: var(--box-shadow);
}
.icon-arrow-up-circle {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.icon-chevron-down {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
.icon-download {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
.icon-refresh-ccw {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}
.icon-repeat {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}
.icon-upload {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}
.icon-x {
  --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}
.p-sm {
  --padding: var(--spacing-sm);
  padding: var(--padding);
}
.p-xs {
  --padding: var(--spacing-xs);
  padding: var(--padding);
}
.px-base {
  --padding-x: var(--spacing-base);
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.px-lg {
  --padding-x: var(--spacing-lg);
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.px-sm {
  --padding-x: var(--spacing-sm);
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
}
.py-4 {
  --padding-y: 1rem;
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
}
.py-minor-base {
  --padding-y: var(--spacing-minor-base);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
}
.py-sm {
  --padding-y: var(--spacing-sm);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
}

:root {
    --spacing: 0.5rem 1rem;
    --slider-thumb-size: calc(var(--line-height-md) + var(--spacing-minor-xs));
    --slider-track-size: calc(var(--slider-thumb-size) / 4);
    --slider-margin: var(--slider-thumb-size);
    --scrollbar-width: 8px;
    --form-gap: var(--spacing-sm);
}

* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: var(--fill-base-300);
    color: var(--text-base-600);
    margin: 0;
    overflow: hidden;
    height: 100%;
}

html,
body {
    height: 100%;
}

a {
    color: var(--primary-500);
}

a:hover {
    text-decoration: underline;
}

::-webkit-scrollbar {
    width: var(--scrollbar-width);
    height: var(--scrollbar-width);
}

::-webkit-scrollbar-thumb {
    /* Foreground */
    background: red;
    background: var(--stroke-base-600);
    border-radius: 999px;
    border: 2px solid transparent;
    background-clip: padding-box;
}

::-webkit-scrollbar-track {
    /* Background */
    background: transparent;
}

.card {
    background-color: var(--fill-base-100);
    border-radius: var(--radii-lg);
    padding: var(--spacing-minor-md) var(--spacing-md);
    gap: var(--spacing-minor-base);
    display: flex;
    flex-direction: column;
}

.brand-card {
    --bg-color: var(--primary-400);
    background-color: var(--bg-color);
    color: var(--text-contrast-600);
}

.brand-card .slider {
        transition: opacity 200ms ease-in-out;
    }

.brand-card.disabled .slider {
        opacity: 0;
        pointer-events: none;
    }

.height-expander {
    display: grid;
    grid-template-rows: 1fr;
    transition: all 200ms ease-out;
    align-items: end;
    overflow: hidden;
}

.height-expander.collapsed {
        opacity: 0;
        grid-template-rows: 0fr;
    }

.height-expander>* {
        overflow: hidden;
    }

.card-sticky {
    position: sticky;
    top: 0;
    z-index: 10;
}

.card-sticky::before {
        content: "";
        display: block;
        pointer-events: none;
        position: absolute;
        inset: calc(-1 * var(--form-gap));
        bottom: 33%;
        background-image: linear-gradient(180deg, var(--fill-base-300) 70%, transparent);
        z-index: -1;
    }

.card-sticky .card {
        position: relative;
    }

.sentinal {
    height: var(--spacing-xs2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
}

.is-pinned .card {
  --tw-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
  --tw-shadow-colored: 0px 8px 10px -6px var(--tw-shadow-color), 0px 20px 25px -5px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --shadow-color: var(--utility-shade-200);
  --box-shadow-color: color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)));
  --box-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
  box-shadow: var(--box-shadow);
  --shadow-color: var(--utility-shade-300);
  --shadow-opacity: 100%;
}

.is-pinned .card .height-expander {
        opacity: 0;
        grid-template-rows: 0fr;
        margin-bottom: calc(var(--spacing-minor-base) * -1);
    }

/* & .instruction {
        display: none;
    } */

.is-pinned .card .radio-segment {
        background-color: var(--alt-contrast-200);
        outline-color: var(--alt-contrast-200);
    }

.is-pinned .card .radio-segment input[type=radio]:checked+.container {
        color: var(--text-base-600)
    }


form {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    margin: 0;
}

form .container {
    flex: 1;
    overflow: auto;
    overflow-x: hidden;
    padding: var(--form-gap);
    padding-right: calc(var(--form-gap) - var(--scrollbar-width));
    gap: var(--form-gap);
}

button {
    appearance: none;
    border-radius: var(--radii-base);
    padding: var(--spacing-minor-xs) var(--spacing-sm);
    color: var(--text-base-action);
}

button .spinner {
        display: none;
    }

button.loading {
        position: relative;
    }

button.loading .spinner {
        display: block;
        position: absolute;
        left: calc(50% - var(--line-height-base)/2);
    }

button.loading .text-label {
        visibility: hidden;
     }

button:hover {
    background-color: var(--primary-100);
}

button.primary {
    background-color: var(--primary-400);
    border: none;
    color: var(--text-contrast-600);
}

button.primary:hover {
    background-image: linear-gradient(var(--alt-contrast-200), var(--alt-contrast-200));
}

input,
select,
textarea {
    padding: var(--spacing-minor-xs) var(--spacing-sm);
    border-radius: var(--radii-base);
    background-color: var(--fill-base-100);
    color: var(--text-base-600);
    border: 1px solid var(--stroke-base-400);
}

.custom-select {
    position: relative;
}

.custom-select select {
    appearance: none;
    width: 100%;
}

.custom-select .icon-chevron-down {
    position: absolute;
    right: var(--spacing-xs);
    top: var(--spacing-minor-xs);
    pointer-events: none;
    color: var(--text-base-action);
}

input:hover,
select:hover,
textarea:hover {
    border-color: var(--primary-500);
}

input[type=radio] {
    appearance: none;
    padding: 0;
    border-radius: 50%;
    width: var(--line-height-base);
    height: var(--line-height-base);
    margin: 0;
    vertical-align: middle;
}

input[type=radio]:checked {
    --width: calc(var(--line-height-base)/4);
    background-color: white;
    border: var(--width) solid var(--primary-400);
}

.radio-segment {
    display: flex;
    flex-flow: row;
    background-color: var(--alt-base-200);
    outline: 1px solid var(--alt-base-200);
    border-radius: var(--radii-base);
}

.radio-segment input[type=radio] {
    opacity: 0;
    position: absolute;
}

.radio-segment .container {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-xs2);
    padding: var(--spacing-minor-xs) var(--spacing-sm);
    min-height: var(--line-height-base);
    min-width: var(--line-height-base);
    border-radius: var(--radii-base);
    opacity: 0.8;
}

.radio-segment .container:hover {
    background-color: var(--alt-base-100);
    opacity: 1;
}

.radio-segment input[type=radio]:checked+.container {
    background-color: var(--utility-tint-600);
    outline: 1px solid var(--utility-shade-100);
    box-shadow: var(--elevation-2);
    opacity: 1;
}

.radio-segment input[type=radio]:focus-visible+.container {
    outline: 2px auto var(--primary-500);
    outline-offset: 2px;
}


.radiogroup {
    background-color: var(--fill-base-300);
    padding: 2px;
    gap: 1px;
    display: flex;
    flex-direction: row;
    border-radius: var(--radii-base);
}

.radiogroup input[type=radio] {
    background-color: var(--primary-400);
    border: 0 none;
    appearance: none;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    vertical-align: middle;
    transition: 0.2s all linear;
    opacity: 0.5;
    border-radius: var(--radii-none);
}

.radiogroup input[type=radio]:checked {
    opacity: 1;
    --tw-shadow: 0px 1px 0.5px 0px var(--box-shadow-color);
    --tw-shadow-colored: 0px 1px 0.5px 0px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --shadow-color: var(--utility-shade-200);
    --shadow-opacity: 100%;
    --box-shadow-color: color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)));
    --box-shadow: 0px 1px 0.5px 0px var(--box-shadow-color);
    box-shadow: var(--box-shadow);
}

input:focus,
textarea:focus {
    border-color: var(--primary-500);
    /* outline: none; */
}

textarea {
    flex: 1;
    /* white-space: pre; */
}

fieldset {
    border-style: solid;
    border-color: var(--stroke-base-300);
    border-radius: var(--radii-md);
    border-width: 1px;
}

[data-name='red'] {
    --thumb-color: var(--accent-red-400);
}

[data-name='amber'] {
    --thumb-color: var(--accent-amber-400);
}

[data-name='brown'] {
    --thumb-color: var(--accent-brown-400);
}

[data-name='green'] {
    --thumb-color: var(--accent-green-400);
}

[data-name='teal'] {
    --thumb-color: var(--accent-teal-400);
}

[data-name='cyan'] {
    --thumb-color: var(--accent-cyan-400);
}

[data-name='blue'] {
    --thumb-color: var(--accent-blue-400);
}

[data-name='indigo'] {
    --thumb-color: var(--accent-indigo-400);
}

[data-name='violet'] {
    --thumb-color: var(--accent-violet-400);
}

[data-name='purple'] {
    --thumb-color: var(--accent-purple-400);
}

[data-name='pink'] {
    --thumb-color: var(--accent-pink-400);
}

[data-name='info'] {
    --thumb-color: var(--info-400);
}

[data-name='warning'] {
    --thumb-color: var(--warning-400);
}

[data-name='success'] {
    --thumb-color: var(--success-400);
}

[data-name='danger'] {
    --thumb-color: var(--danger-400);
}


[data-slider],
#luminanceSlider {
    --thumb-color: var(--primary-400);
}

#luminanceSlider {
    flex: 1;
    border-radius: var(--radii-round);
    background-color: var(--alt-base-300);
    margin: var(--spacing-minor-sm) 0;
    padding-left: calc(var(--slider-thumb-size) / 2 + 2px);
    padding-right: calc(var(--slider-thumb-size) / 2 + 2px);
}

#luminanceSlider .slider {
    background-color: transparent;
    margin: 0;
}

.sliders label {
    display: flex;
    align-items: center;
}

.sliders .text-label {
    width: 20%;
}

.sliders .slider {
    border: 0 none;
    box-sizing: content-box;
    background-clip: padding-box;

    height: var(--slider-track-size);
    background-color: var(--alt-base-300);
    box-shadow: none;
    flex: 3;
    margin: 0 var(--slider-margin);
    border-radius: var(--radii-round);
}

.sliders input[type=text] {
    width: 5rem;
    border: 1px solid var(--stroke-base-300);
    background: transparent;
    text-align: center;
    border-radius: var(--radii-base);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-sm);
    padding-left: 0;
    padding-right: 0;
}

.sliders .slider .noUi-connect {
    background-color: var(--thumb-color);
}

.sliders .slider .noUi-handle {
    border: calc(var(--slider-thumb-size) / 5) solid white;
    cursor: default;
    box-shadow: none;


    height: var(--slider-thumb-size);
    width: var(--slider-thumb-size);

    top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);
    right: calc(var(--slider-thumb-size) / -2);

    box-shadow: 0px 1px 2px -1px rgba(0, 35, 41, 0.04), 0px 1px 3px 0px rgba(0, 35, 41, 0.04), 0px 0px 0px 1px rgba(0, 35, 41, 0.1);

    /*custom styles*/
    background: var(--thumb-color);
    border-radius: 50%;

}

.sliders .slider .noUi-tooltip {
    bottom: initial;
    top: calc(var(--slider-thumb-size) - var(--slider-thumb-size) / 10);
    font-size: var(--font-size-xs2);
    line-height: var(--line-height-xs2);
    visibility: hidden;
    background: var(--fill-base-100);
    border-color: var(--stroke-base-300);
    color: var(--text-base-600);
    border-radius: var(--radii-base);
    --tw-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
    --tw-shadow-colored: 0px 8px 10px -6px var(--tw-shadow-color), 0px 20px 25px -5px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    --shadow-color: var(--utility-shade-200);
    --shadow-opacity: 100%;
    --box-shadow-color: color-mix(in srgb, var(--shadow-color), transparent calc(100% - var(--shadow-opacity)));
    --box-shadow: 0px 8px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);
    box-shadow: var(--box-shadow);
}

.sliders .slider .noUi-handle:hover {
    border: calc(var(--slider-thumb-size) / 4) solid white;
}

.sliders .slider:hover .noUi-tooltip {
    visibility: visible;
}

.sliders .slider .noUi-handle::before,
.sliders .slider .noUi-handle::after {
    display: none;
}

[data-semantics] .sliders input[type=text] {
    font-size: 0.9rem;
}

main {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-minor-base);
    height: 100%;
}


#export {
    background-color: var(--fill-base-100-component);
}

/********** Range Input Styles **********/
/*Range Reset*/
input[type="range"] {
    --thumb-color: var(--primary-400);
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 15rem;
    border: 0 none;
    padding: 0;
}

/* Removes default focus */
input[type="range"]:focus {
    outline: none;
}

/***** Chrome, Safari, Opera and Edge Chromium styles *****/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
    background-color: var(--stroke-base-300);
    border-radius: 0.5rem;
    height: var(--slider-track-size);
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);

    /*custom styles*/
    background-color: var(--thumb-color);
    height: var(--slider-thumb-size);
    width: var(--slider-thumb-size);
    border-radius: var(--slider-thumb-size);
}

input[type="range"]:focus::-webkit-slider-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;

    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);
    outline-offset: 0.125rem;
}

hr {
    border-color: var(--stroke-base-100);
}

a[data-expander] {
    display: inline-flex;
    flex-flow: row-reverse;
    gap: var(--spacing-xs2);
    transition: transform 150ms ease-in-out;
    --icon-src: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
}

a[data-expander]::before {
        transition: transform 200ms ease-in-out;
    }

a[data-expanded=true]::before {
    transform: rotate(90deg);
}

.font-preview-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    background-color: var(--fill-base-300);
}

.font-preview-box .base {
    font-size: var(--font-size-base);
}

.font-preview-box .md {
    font-size: var(--font-size-md);
}

.font-preview-box .lg {
    font-size: var(--font-size-lg);
}

.checkbox {
    display: flex;
}

.checkbox:hover input[type=checkbox] {
    border-color: var(--primary-500);
}

.checkbox input[type="checkbox"] {
    appearance: none;
    width: var(--line-height-base);
    height: var(--line-height-base);
    padding: 0;
    border-radius: 4px;
    flex: 0 0 auto;

}

.checkbox input[type="checkbox"]:checked {
    border-color: var(--primary-400);
    background-color: var(--primary-400);
    position: relative;
    background-size: cover;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_8___});
}


.action-list {
    display: flex;
    flex-direction: column;
    width: auto;
}

.action-list li {
    display: block;
    padding: var(--spacing-minor-xs3) 0;
    border-bottom: 1px solid var(--stroke-base-100);
}

.action-list li:last-child {
    border-width: 0;
}

.action-list li a {
    border-radius: var(--radii-base);
    margin: 0 calc(var(--spacing-sm) * -1);
    color: var(--text-base-600);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--spacing-minor-sm) var(--spacing-sm);
}

.action-list li a:hover {
    background-color: var(--primary-100);
    color: var(--text-base-action);
    text-decoration: none;
}

:focus-visible {
    outline: var(--primary-500) auto 2px;
    outline-offset: 2px;
}

#brandAccent {
    --thumb-color: color-mix(in srgb, var(--primary-300), white 10%);
}

#brandAccent .slider {
        background-color: var(--alt-contrast-300);
    }

#brandAccent .noUi-connect {
        background-color: var(--text-contrast-400);
    }

#brandAccent input[type=text] {
        background-color: var(--alt-contrast-200);
        border-color: var(--alt-contrast-300);
        color: var(--text-contrast-600)
    }

.spinner {
    width: var(--line-height-base);
    height: var(--line-height-base);
    display: inline-block;
    vertical-align: middle;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid currentColor;
    border-radius: 100%;

    transform: translateZ(0);
    animation: spin 1.2s linear infinite;
}

.spinner::after {
    content: '';
    display: block;
    position: absolute;
    inset: -2px;
    border: 2px solid currentColor;
    opacity: 0.2;
    border-radius: 100%;
}

@keyframes spin {
    0% {
        transform: rotate(0turn)
    }

    100% {
        transform: rotate(1turn)
    }
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: calc(var(--line-height-md) + var(--spacing-minor-xs));\n    --slider-track-size: calc(var(--slider-thumb-size) / 4);\n    --slider-margin: var(--slider-thumb-size);\n    --scrollbar-width: 8px;\n    --form-gap: var(--spacing-sm);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--fill-base-300);\n    color: var(--text-base-600);\n    margin: 0;\n    overflow: hidden;\n    height: 100%;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: var(--primary-500);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n::-webkit-scrollbar {\n    width: var(--scrollbar-width);\n    height: var(--scrollbar-width);\n}\n\n::-webkit-scrollbar-thumb {\n    /* Foreground */\n    background: red;\n    background: var(--stroke-base-600);\n    border-radius: 999px;\n    border: 2px solid transparent;\n    background-clip: padding-box;\n}\n\n::-webkit-scrollbar-track {\n    /* Background */\n    background: transparent;\n}\n\n.card {\n    background-color: var(--fill-base-100);\n    border-radius: var(--radii-lg);\n    padding: var(--spacing-minor-md) var(--spacing-md);\n    gap: var(--spacing-minor-base);\n\n    @apply flex flex-col;\n}\n\n.brand-card {\n    --bg-color: var(--primary-400);\n    background-color: var(--bg-color);\n    color: var(--text-contrast-600);\n\n    & .slider {\n        transition: opacity 200ms ease-in-out;\n    }\n\n    &.disabled .slider {\n        opacity: 0;\n        pointer-events: none;\n    }\n}\n\n.height-expander {\n    display: grid;\n    grid-template-rows: 1fr;\n    transition: all 200ms ease-out;\n    align-items: end;\n    overflow: hidden;\n\n    &.collapsed {\n        opacity: 0;\n        grid-template-rows: 0fr;\n    }\n\n    &>* {\n        overflow: hidden;\n    }\n}\n\n.card-sticky {\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    &::before {\n        content: \"\";\n        display: block;\n        pointer-events: none;\n        position: absolute;\n        inset: calc(-1 * var(--form-gap));\n        bottom: 33%;\n        background-image: linear-gradient(180deg, var(--fill-base-300) 70%, transparent);\n        z-index: -1;\n    }\n\n    .card {\n        position: relative;\n    }\n}\n\n.sentinal {\n    height: var(--spacing-xs2);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n}\n\n.is-pinned .card {\n    @apply shadow-5 shadow-utility-shade-300;\n\n    & .height-expander {\n        opacity: 0;\n        grid-template-rows: 0fr;\n        margin-bottom: calc(var(--spacing-minor-base) * -1);\n    }\n\n    /* & .instruction {\n        display: none;\n    } */\n\n    & .radio-segment {\n        background-color: var(--alt-contrast-200);\n        outline-color: var(--alt-contrast-200);\n    }\n\n    & .radio-segment input[type=radio]:checked+.container {\n        color: var(--text-base-600)\n    }\n}\n\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: hidden;\n    margin: 0;\n}\n\nform .container {\n    flex: 1;\n    overflow: auto;\n    overflow-x: hidden;\n    padding: var(--form-gap);\n    padding-right: calc(var(--form-gap) - var(--scrollbar-width));\n    gap: var(--form-gap);\n}\n\nbutton {\n    appearance: none;\n    border-radius: var(--radii-base);\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    color: var(--text-base-action);\n\n    & .spinner {\n        display: none;\n    }\n\n    &.loading {\n        position: relative;\n    }\n\n    &.loading .spinner {\n        display: block;\n        position: absolute;\n        left: calc(50% - var(--line-height-base)/2);\n    }\n\n     &.loading .text-label {\n        visibility: hidden;\n     }\n}\n\nbutton:hover {\n    background-color: var(--primary-100);\n}\n\nbutton.primary {\n    background-color: var(--primary-400);\n    border: none;\n    color: var(--text-contrast-600);\n}\n\nbutton.primary:hover {\n    background-image: linear-gradient(var(--alt-contrast-200), var(--alt-contrast-200));\n}\n\ninput,\nselect,\ntextarea {\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    border-radius: var(--radii-base);\n    background-color: var(--fill-base-100);\n    color: var(--text-base-600);\n    border: 1px solid var(--stroke-base-400);\n}\n\n.custom-select {\n    position: relative;\n}\n\n.custom-select select {\n    appearance: none;\n    width: 100%;\n}\n\n.custom-select .icon-chevron-down {\n    position: absolute;\n    right: var(--spacing-xs);\n    top: var(--spacing-minor-xs);\n    pointer-events: none;\n    color: var(--text-base-action);\n}\n\ninput:hover,\nselect:hover,\ntextarea:hover {\n    border-color: var(--primary-500);\n}\n\ninput[type=radio] {\n    appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    margin: 0;\n    vertical-align: middle;\n}\n\ninput[type=radio]:checked {\n    --width: calc(var(--line-height-base)/4);\n    background-color: white;\n    border: var(--width) solid var(--primary-400);\n}\n\n.radio-segment {\n    display: flex;\n    flex-flow: row;\n    background-color: var(--alt-base-200);\n    outline: 1px solid var(--alt-base-200);\n    border-radius: var(--radii-base);\n}\n\n.radio-segment input[type=radio] {\n    opacity: 0;\n    position: absolute;\n}\n\n.radio-segment .container {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-xs2);\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    min-height: var(--line-height-base);\n    min-width: var(--line-height-base);\n    border-radius: var(--radii-base);\n    opacity: 0.8;\n}\n\n.radio-segment .container:hover {\n    background-color: var(--alt-base-100);\n    opacity: 1;\n}\n\n.radio-segment input[type=radio]:checked+.container {\n    background-color: var(--utility-tint-600);\n    outline: 1px solid var(--utility-shade-100);\n    box-shadow: var(--elevation-2);\n    opacity: 1;\n}\n\n.radio-segment input[type=radio]:focus-visible+.container {\n    outline: 2px auto var(--primary-500);\n    outline-offset: 2px;\n}\n\n\n.radiogroup {\n    background-color: var(--fill-base-300);\n    padding: 2px;\n    gap: 1px;\n    @apply flex flex-row rounded;\n}\n\n.radiogroup input[type=radio] {\n    background-color: var(--primary-400);\n    border: 0 none;\n    appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n\n    @apply rounded-none;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    @apply shadow-1;\n}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--primary-500);\n    /* outline: none; */\n}\n\ntextarea {\n    flex: 1;\n    /* white-space: pre; */\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--stroke-base-300);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n[data-name='red'] {\n    --thumb-color: var(--accent-red-400);\n}\n\n[data-name='amber'] {\n    --thumb-color: var(--accent-amber-400);\n}\n\n[data-name='brown'] {\n    --thumb-color: var(--accent-brown-400);\n}\n\n[data-name='green'] {\n    --thumb-color: var(--accent-green-400);\n}\n\n[data-name='teal'] {\n    --thumb-color: var(--accent-teal-400);\n}\n\n[data-name='cyan'] {\n    --thumb-color: var(--accent-cyan-400);\n}\n\n[data-name='blue'] {\n    --thumb-color: var(--accent-blue-400);\n}\n\n[data-name='indigo'] {\n    --thumb-color: var(--accent-indigo-400);\n}\n\n[data-name='violet'] {\n    --thumb-color: var(--accent-violet-400);\n}\n\n[data-name='purple'] {\n    --thumb-color: var(--accent-purple-400);\n}\n\n[data-name='pink'] {\n    --thumb-color: var(--accent-pink-400);\n}\n\n[data-name='info'] {\n    --thumb-color: var(--info-400);\n}\n\n[data-name='warning'] {\n    --thumb-color: var(--warning-400);\n}\n\n[data-name='success'] {\n    --thumb-color: var(--success-400);\n}\n\n[data-name='danger'] {\n    --thumb-color: var(--danger-400);\n}\n\n\n[data-slider],\n#luminanceSlider {\n    --thumb-color: var(--primary-400);\n}\n\n#luminanceSlider {\n    flex: 1;\n    border-radius: var(--radii-round);\n    background-color: var(--alt-base-300);\n    margin: var(--spacing-minor-sm) 0;\n    padding-left: calc(var(--slider-thumb-size) / 2 + 2px);\n    padding-right: calc(var(--slider-thumb-size) / 2 + 2px);\n}\n\n#luminanceSlider .slider {\n    background-color: transparent;\n    margin: 0;\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    width: 20%;\n}\n\n.sliders .slider {\n    border: 0 none;\n    box-sizing: content-box;\n    background-clip: padding-box;\n\n    height: var(--slider-track-size);\n    background-color: var(--alt-base-300);\n    box-shadow: none;\n    flex: 3;\n    margin: 0 var(--slider-margin);\n    border-radius: var(--radii-round);\n}\n\n.sliders input[type=text] {\n    width: 5rem;\n    border: 1px solid var(--stroke-base-300);\n    background: transparent;\n    text-align: center;\n    border-radius: var(--radii-base);\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.sliders .slider .noUi-connect {\n    background-color: var(--thumb-color);\n}\n\n.sliders .slider .noUi-handle {\n    border: calc(var(--slider-thumb-size) / 5) solid white;\n    cursor: default;\n    box-shadow: none;\n\n\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n\n    top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n    right: calc(var(--slider-thumb-size) / -2);\n\n    box-shadow: 0px 1px 2px -1px rgba(0, 35, 41, 0.04), 0px 1px 3px 0px rgba(0, 35, 41, 0.04), 0px 0px 0px 1px rgba(0, 35, 41, 0.1);\n\n    /*custom styles*/\n    background: var(--thumb-color);\n    border-radius: 50%;\n\n}\n\n.sliders .slider .noUi-tooltip {\n    bottom: initial;\n    top: calc(var(--slider-thumb-size) - var(--slider-thumb-size) / 10);\n    font-size: var(--font-size-xs2);\n    line-height: var(--line-height-xs2);\n    visibility: hidden;\n    background: var(--fill-base-100);\n    border-color: var(--stroke-base-300);\n    color: var(--text-base-600);\n    border-radius: var(--radii-base);\n    @apply shadow-5;\n}\n\n.sliders .slider .noUi-handle:hover {\n    border: calc(var(--slider-thumb-size) / 4) solid white;\n}\n\n.sliders .slider:hover .noUi-tooltip {\n    visibility: visible;\n}\n\n.sliders .slider .noUi-handle::before,\n.sliders .slider .noUi-handle::after {\n    display: none;\n}\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-minor-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--fill-base-100-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary-400);\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--stroke-base-300);\n    border-radius: 0.5rem;\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--stroke-base-100);\n}\n\na[data-expander] {\n    display: inline-flex;\n    flex-flow: row-reverse;\n    gap: var(--spacing-xs2);\n    transition: transform 150ms ease-in-out;\n\n    @apply icon-chevron-right;\n\n    &::before {\n        transition: transform 200ms ease-in-out;\n    }\n}\n\na[data-expanded=true]::before {\n    transform: rotate(90deg);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--fill-base-300);\n}\n\n.font-preview-box .base {\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--primary-500);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    appearance: none;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n\n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: var(--primary-400);\n    background-color: var(--primary-400);\n    position: relative;\n    background-size: cover;\n    background-image: url('data:image/svg+xml,<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z\" fill=\"white\"/></svg>');\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n    width: auto;\n}\n\n.action-list li {\n    display: block;\n    padding: var(--spacing-minor-xs3) 0;\n    border-bottom: 1px solid var(--stroke-base-100);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    border-radius: var(--radii-base);\n    margin: 0 calc(var(--spacing-sm) * -1);\n    color: var(--text-base-600);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: var(--spacing-minor-sm) var(--spacing-sm);\n}\n\n.action-list li a:hover {\n    background-color: var(--primary-100);\n    color: var(--text-base-action);\n    text-decoration: none;\n}\n\n:focus-visible {\n    outline: var(--primary-500) auto 2px;\n    outline-offset: 2px;\n}\n\n#brandAccent {\n    --thumb-color: color-mix(in srgb, var(--primary-300), white 10%);\n\n    & .slider {\n        background-color: var(--alt-contrast-300);\n    }\n\n    & .noUi-connect {\n        background-color: var(--text-contrast-400);\n    }\n\n    & input[type=text] {\n        background-color: var(--alt-contrast-200);\n        border-color: var(--alt-contrast-300);\n        color: var(--text-contrast-600)\n    }\n}\n\n.spinner {\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 10px;\n    position: relative;\n    text-indent: -9999em;\n    border-top: 2px solid transparent;\n    border-right: 2px solid transparent;\n    border-bottom: 2px solid transparent;\n    border-left: 2px solid currentColor;\n    border-radius: 100%;\n\n    transform: translateZ(0);\n    animation: spin 1.2s linear infinite;\n}\n\n.spinner::after {\n    content: '';\n    display: block;\n    position: absolute;\n    inset: -2px;\n    border: 2px solid currentColor;\n    opacity: 0.2;\n    border-radius: 100%;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0turn)\n    }\n\n    100% {\n        transform: rotate(1turn)\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/ui/styles/dialog.css":
/*!**********************************!*\
  !*** ./src/ui/styles/dialog.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/styles/icons.css":
/*!*********************************!*\
  !*** ./src/ui/styles/icons.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./icons.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/icons.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_icons_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/styles/source-variables.css":
/*!********************************************!*\
  !*** ./src/ui/styles/source-variables.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_source_variables_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./source-variables.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/source-variables.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_source_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_source_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_source_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_source_variables_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/styles/styles.css":
/*!**********************************!*\
  !*** ./src/ui/styles/styles.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/ui/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ui/helpers/modal.ts":
/*!*********************************!*\
  !*** ./src/ui/helpers/modal.ts ***!
  \*********************************/
/***/ (() => {

document.querySelectorAll('[data-modal').forEach((el) => {
    const modalID = el.dataset.modal;
    const modal = document.getElementById(modalID);
    el.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.querySelector('button.close').addEventListener('click', (e) => {
        e.preventDefault();
        modal.close();
    });
});


/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M11.354 8.354a.5.5 0 0 1-.708 0L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708%27/%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M15.294 8A7.3 7.3 0 1 1 .695 8a7.3 7.3 0 0 1 14.6 0m-1 0A6.3 6.3 0 1 1 1.695 8a6.3 6.3 0 0 1 12.6 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M11.354 8.354a.5.5 0 0 1-.708 0L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708%27/%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M15.294 8A7.3 7.3 0 1 1 .695 8a7.3 7.3 0 0 1 14.6 0m-1 0A6.3 6.3 0 1 1 1.695 8a6.3 6.3 0 0 1 12.6 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M11.354 8.354a.5.5 0 0 1-.708 0L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708%27/%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M15.294 8A7.3 7.3 0 1 1 .695 8a7.3 7.3 0 0 1 14.6 0m-1 0A6.3 6.3 0 1 1 1.695 8a6.3 6.3 0 0 1 12.6 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M12.854 3.854a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146Z%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M12.854 3.854a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146Z%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M12.854 3.854a.5.5 0 0 0-.708-.708L8 7.293 3.854 3.146a.5.5 0 1 0-.708.708L7.293 8l-4.147 4.146a.5.5 0 0 0 .708.708L8 8.707l4.146 4.147a.5.5 0 0 0 .708-.708L8.707 8l4.147-4.146Z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M7.146.854a.5.5 0 1 1 .708-.708L10.207 2.5 7.854 4.854a.5.5 0 1 1-.708-.708L8.293 3H8a5 5 0 0 0-2.939 9.045.5.5 0 1 1-.588.81A6 6 0 0 1 8 2h.293L7.146.854M8 13a5 5 0 0 0 2.939-9.045.5.5 0 0 1 .588-.81A6 6 0 0 1 8 14h-.293l1.147 1.146a.5.5 0 0 1-.708.708L5.793 13.5l2.353-2.354a.5.5 0 0 1 .708.708L7.707 13z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M7.146.854a.5.5 0 1 1 .708-.708L10.207 2.5 7.854 4.854a.5.5 0 1 1-.708-.708L8.293 3H8a5 5 0 0 0-2.939 9.045.5.5 0 1 1-.588.81A6 6 0 0 1 8 2h.293L7.146.854M8 13a5 5 0 0 0 2.939-9.045.5.5 0 0 1 .588-.81A6 6 0 0 1 8 14h-.293l1.147 1.146a.5.5 0 0 1-.708.708L5.793 13.5l2.353-2.354a.5.5 0 0 1 .708.708L7.707 13z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M7.146.854a.5.5 0 1 1 .708-.708L10.207 2.5 7.854 4.854a.5.5 0 1 1-.708-.708L8.293 3H8a5 5 0 0 0-2.939 9.045.5.5 0 1 1-.588.81A6 6 0 0 1 8 2h.293L7.146.854M8 13a5 5 0 0 0 2.939-9.045.5.5 0 0 1 .588-.81A6 6 0 0 1 8 14h-.293l1.147 1.146a.5.5 0 0 1-.708.708L5.793 13.5l2.353-2.354a.5.5 0 0 1 .708.708L7.707 13z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M8.5 2.914v8.793a.5.5 0 0 1-1 0V2.914L5.354 5.061a.5.5 0 1 1-.708-.707L8 1l3.354 3.354a.5.5 0 0 1-.708.707L8.5 2.914%27/%3e%3cpath fill=%27%230E1011%27 d=%27M2 10.5a.5.5 0 0 0-1 0v3.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.5a.5.5 0 0 0-1 0v3.25a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M8.5 2.914v8.793a.5.5 0 0 1-1 0V2.914L5.354 5.061a.5.5 0 1 1-.708-.707L8 1l3.354 3.354a.5.5 0 0 1-.708.707L8.5 2.914%27/%3e%3cpath fill=%27%230E1011%27 d=%27M2 10.5a.5.5 0 0 0-1 0v3.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.5a.5.5 0 0 0-1 0v3.25a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 d=%27M8.5 2.914v8.793a.5.5 0 0 1-1 0V2.914L5.354 5.061a.5.5 0 1 1-.708-.707L8 1l3.354 3.354a.5.5 0 0 1-.708.707L8.5 2.914%27/%3e%3cpath fill=%27%230E1011%27 d=%27M2 10.5a.5.5 0 0 0-1 0v3.25c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V10.5a.5.5 0 0 0-1 0v3.25a.25.25 0 0 1-.25.25H2.25a.25.25 0 0 1-.25-.25z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M10.147.146a.5.5 0 0 1 .707 0L14.207 3.5l-3.353 3.354a.5.5 0 1 1-.707-.708L12.293 4H5.5A2.5 2.5 0 0 0 3 6.5v1a.5.5 0 1 1-1 0v-1A3.5 3.5 0 0 1 5.5 3h6.793L10.147.854a.5.5 0 0 1 0-.708M13 9.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708L1.793 12.5l3.353-3.354a.5.5 0 1 1 .708.708L3.707 12H10.5A2.5 2.5 0 0 0 13 9.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M10.147.146a.5.5 0 0 1 .707 0L14.207 3.5l-3.353 3.354a.5.5 0 1 1-.707-.708L12.293 4H5.5A2.5 2.5 0 0 0 3 6.5v1a.5.5 0 1 1-1 0v-1A3.5 3.5 0 0 1 5.5 3h6.793L10.147.854a.5.5 0 0 1 0-.708M13 9.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708L1.793 12.5l3.353-3.354a.5.5 0 1 1 .708.708L3.707 12H10.5A2.5 2.5 0 0 0 13 9.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M10.147.146a.5.5 0 0 1 .707 0L14.207 3.5l-3.353 3.354a.5.5 0 1 1-.707-.708L12.293 4H5.5A2.5 2.5 0 0 0 3 6.5v1a.5.5 0 1 1-1 0v-1A3.5 3.5 0 0 1 5.5 3h6.793L10.147.854a.5.5 0 0 1 0-.708M13 9.5v-1a.5.5 0 0 1 1 0v1a3.5 3.5 0 0 1-3.5 3.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708L1.793 12.5l3.353-3.354a.5.5 0 1 1 .708.708L3.707 12H10.5A2.5 2.5 0 0 0 13 9.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M3.396 5.396a.5.5 0 0 1 .708 0L8 9.293l3.896-3.897a.5.5 0 0 1 .708.708l-4.25 4.25a.5.5 0 0 1-.708 0l-4.25-4.25a.5.5 0 0 1 0-.708%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M3.396 5.396a.5.5 0 0 1 .708 0L8 9.293l3.896-3.897a.5.5 0 0 1 .708.708l-4.25 4.25a.5.5 0 0 1-.708 0l-4.25-4.25a.5.5 0 0 1 0-.708%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M3.396 5.396a.5.5 0 0 1 .708 0L8 9.293l3.896-3.897a.5.5 0 0 1 .708.708l-4.25 4.25a.5.5 0 0 1-.708 0l-4.25-4.25a.5.5 0 0 1 0-.708%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M5.396 12.604a.5.5 0 0 1 0-.708L9.293 8 5.396 4.104a.5.5 0 1 1 .708-.708l4.25 4.25a.5.5 0 0 1 0 .708l-4.25 4.25a.5.5 0 0 1-.708 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M5.396 12.604a.5.5 0 0 1 0-.708L9.293 8 5.396 4.104a.5.5 0 1 1 .708-.708l4.25 4.25a.5.5 0 0 1 0 .708l-4.25 4.25a.5.5 0 0 1-.708 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M5.396 12.604a.5.5 0 0 1 0-.708L9.293 8 5.396 4.104a.5.5 0 1 1 .708-.708l4.25 4.25a.5.5 0 0 1 0 .708l-4.25 4.25a.5.5 0 0 1-.708 0%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M8 1a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 0 1 .708.708L8 12.207 4.646 8.854a.5.5 0 1 1 .708-.708L7.5 10.293V1.5A.5.5 0 0 1 8 1m-6.5 9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M8 1a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 0 1 .708.708L8 12.207 4.646 8.854a.5.5 0 1 1 .708-.708L7.5 10.293V1.5A.5.5 0 0 1 8 1m-6.5 9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%230E1011%27 fill-rule=%27evenodd%27 d=%27M8 1a.5.5 0 0 1 .5.5v8.793l2.146-2.147a.5.5 0 0 1 .708.708L8 12.207 4.646 8.854a.5.5 0 1 1 .708-.708L7.5 10.293V1.5A.5.5 0 0 1 8 1m-6.5 9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5%27 clip-rule=%27evenodd%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z\" fill=\"white\"/></svg>":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z" fill="white"/></svg> ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z\" fill=\"white\"/></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z\" fill=\"white\"/><path d=\"M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z\" fill=\"white\"/></svg>":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z" fill="white"/><path d="M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z" fill="white"/></svg> ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M45.6568 50.3431L54.3431 41.6569C54.5002 41.4998 54.6493 41.3379 54.7905 41.1716H25.1716L34.3431 50.3431C37.4673 53.4673 42.5327 53.4673 45.6568 50.3431Z\" fill=\"white\"/><path d=\"M6.67144 54.0215L6.69842 54.1429C7.45892 57.5651 10.4943 60 14 60C17.5057 60 20.5411 57.5651 21.3016 54.1429L21.3286 54.0215C21.7592 52.0838 21.4182 50.0545 20.3778 48.364L14 38L7.62218 48.364C6.58185 50.0545 6.24083 52.0838 6.67144 54.0215Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.75 5.77539V13.2754L55.5806 29.106C59.3882 32.9136 59.3882 39.0869 55.5806 42.8946L46.8943 51.5809C43.0867 55.3885 36.9133 55.3885 33.1057 51.5808L13.5251 32.0003L39.75 5.77539ZM36 14.4751L18.4749 32.0003L35.5806 49.106C38.0214 51.5467 41.9786 51.5468 44.4194 49.106L53.1057 40.4197C55.5465 37.9789 55.5465 34.0216 53.1057 31.5808L36 14.4751Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2374 15.2377C55.9209 14.5543 55.9209 13.4462 55.2374 12.7628C54.554 12.0794 53.446 12.0794 52.7626 12.7628L39.6364 25.889C38.8467 25.4808 37.9503 25.2503 37 25.2503C33.8244 25.2503 31.25 27.8246 31.25 31.0003C31.25 34.1759 33.8244 36.7503 37 36.7503C40.1756 36.7503 42.75 34.1759 42.75 31.0003C42.75 30.05 42.5195 29.1536 42.1113 28.3638L55.2374 15.2377ZM34.75 31.0003C34.75 29.7576 35.7574 28.7503 37 28.7503C38.2426 28.7503 39.25 29.7576 39.25 31.0003C39.25 32.2429 38.2426 33.2503 37 33.2503C35.7574 33.2503 34.75 32.2429 34.75 31.0003Z\" fill=\"white\"/></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z\" fill=\"%23D9D9D9\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z\" fill=\"white\"/></svg>":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z" fill="%23D9D9D9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z" fill="white"/></svg> ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g opacity=\"0.5\"><path d=\"M58 52C58 26.5949 37.4051 6 12 6H0V10H12C35.196 10 54 28.804 54 52V64H58V52Z\" fill=\"%23D9D9D9\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 6.25002C12.9665 6.25002 13.75 7.03353 13.75 8.00002L13.75 11.3244C13.75 12.2909 12.9665 13.0744 12 13.0744C11.0335 13.0744 10.25 12.2909 10.25 11.3244L10.25 8.00002C10.25 7.03352 11.0335 6.25002 12 6.25002ZM12 16.2231C12.9665 16.2231 13.75 17.0066 13.75 17.9731L13.75 24.6218C13.75 25.5883 12.9665 26.3718 12 26.3718C11.0335 26.3718 10.25 25.5883 10.25 24.6218L10.25 17.9731C10.25 17.0066 11.0335 16.2231 12 16.2231ZM12 29.5205C12.9665 29.5205 13.75 30.304 13.75 31.2705L13.75 37.9192C13.75 38.8857 12.9665 39.6692 12 39.6692C11.0335 39.6692 10.25 38.8857 10.25 37.9192L10.25 31.2705C10.25 30.304 11.0335 29.5205 12 29.5205ZM12 42.8179C12.9665 42.8179 13.75 43.6014 13.75 44.5679L13.75 47.8922C13.75 48.8587 12.9665 49.6422 12 49.6422C11.0335 49.6422 10.25 48.8587 10.25 47.8922L10.25 44.5679C10.25 43.6014 11.0335 42.8179 12 42.8179ZM14.25 52.0001C14.25 51.0336 15.0335 50.2501 16 50.2501L19.3333 50.2501C20.2998 50.2501 21.0833 51.0336 21.0833 52.0001C21.0833 52.9666 20.2998 53.7501 19.3333 53.7501L16 53.7501C15.0335 53.7501 14.25 52.9666 14.25 52.0001ZM24.25 52.0001C24.25 51.0336 25.0335 50.2501 26 50.2501H32.6667C33.6332 50.2501 34.4167 51.0336 34.4167 52.0001C34.4167 52.9666 33.6332 53.7501 32.6667 53.7501H26C25.0335 53.7501 24.25 52.9666 24.25 52.0001ZM37.5833 52.0001C37.5833 51.0336 38.3668 50.2501 39.3333 50.2501L46 50.2501C46.9665 50.2501 47.75 51.0336 47.75 52.0001C47.75 52.9666 46.9665 53.7501 46 53.7501H39.3333C38.3668 53.7501 37.5833 52.9666 37.5833 52.0001ZM50.9167 52.0001C50.9167 51.0336 51.7002 50.2501 52.6667 50.2501H56C56.9665 50.2501 57.75 51.0336 57.75 52.0001C57.75 52.9666 56.9665 53.7501 56 53.7501H52.6667C51.7002 53.7501 50.9167 52.9666 50.9167 52.0001Z\" fill=\"white\"/></g><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10 8C10 6.89543 10.8954 6 12 6C18.0408 6 24.0225 7.18983 29.6034 9.50154C35.1844 11.8133 40.2554 15.2016 44.5269 19.4731C48.7984 23.7446 52.1867 28.8156 54.4985 34.3966C56.8102 39.9775 58 45.9592 58 52C58 53.1046 57.1046 54 56 54C54.8954 54 54 53.1046 54 52C54 46.4845 52.9136 41.023 50.8029 35.9273C48.6922 30.8316 45.5985 26.2016 41.6985 22.3015C37.7984 18.4015 33.1684 15.3078 28.0727 13.1971C22.977 11.0864 17.5155 10 12 10C10.8954 10 10 9.10457 10 8Z\" fill=\"white\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11 50C9.34315 50 8 51.3431 8 53C8 54.6569 9.34315 56 11 56C12.6569 56 14 54.6569 14 53C14 51.3431 12.6569 50 11 50ZM4 53C4 49.134 7.13401 46 11 46C14.866 46 18 49.134 18 53C18 56.866 14.866 60 11 60C7.13401 60 4 56.866 4 53Z\" fill=\"white\"/></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z\" fill=\"white\"/></svg>":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z" fill="white"/></svg> ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.9185 4.69557C31.5773 4.27205 32.4227 4.27205 33.0815 4.69557L57.383 20.318C58.6076 21.1052 58.6076 22.8954 57.383 23.6827L33.0815 39.3051C32.4227 39.7286 31.5773 39.7286 30.9185 39.3051L6.61697 23.6827C5.39233 22.8954 5.39232 21.1052 6.61697 20.318L30.9185 4.69557Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32 26.7555L11.397 40.0003L32 53.2451L52.6029 40.0003L32 26.7555ZM33.0815 22.6956C32.4227 22.272 31.5773 22.272 30.9185 22.6956L6.61697 38.318C5.39232 39.1052 5.39233 40.8954 6.61697 41.6827L30.9185 57.3051C31.5773 57.7286 32.4227 57.7286 33.0815 57.3051L57.383 41.6827C58.6076 40.8954 58.6076 39.1052 57.383 38.318L33.0815 22.6956Z\" fill=\"white\"/></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z\" fill=\"white\"/><path d=\"M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z\" fill=\"white\"/></svg>":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z" fill="white"/><path d="M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z" fill="white"/></svg> ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M56 8C52.6863 8 50 10.6863 50 14V50C50 53.3137 52.6863 56 56 56H64V52H56C54.8954 52 54 51.1046 54 50V14C54 12.8954 54.8954 12 56 12H64V8H56Z\" fill=\"white\"/><path d=\"M14 14C14 10.6863 11.3137 8 8 8H0V12H8C9.10457 12 10 12.8954 10 14V50C10 51.1046 9.10457 52 8 52H0V56H8C11.3137 56 14 53.3137 14 50V14Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.2374 24.7626C27.9208 25.446 27.9208 26.554 27.2374 27.2374L24.2249 30.25H39.7751L36.7626 27.2374C36.0791 26.554 36.0791 25.446 36.7626 24.7626C37.446 24.0791 38.554 24.0791 39.2374 24.7626L46.4749 32L39.2374 39.2374C38.554 39.9209 37.446 39.9209 36.7626 39.2374C36.0791 38.554 36.0791 37.446 36.7626 36.7626L39.7751 33.75H24.2249L27.2374 36.7626C27.9208 37.446 27.9208 38.554 27.2374 39.2374C26.554 39.9209 25.446 39.9209 24.7626 39.2374L17.5251 32L24.7626 24.7626C25.446 24.0791 26.554 24.0791 27.2374 24.7626Z\" fill=\"white\"/></svg>";

/***/ }),

/***/ "data:image/svg+xml,<svg viewBox=\"0 0 64 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z\" fill=\"white\"/></svg>":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,<svg viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z" fill="white"/><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z" fill="white"/></svg> ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,<svg viewBox=\"0 0 64 66\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.3888 9.49512L32.1549 51.5378C32.6028 52.7324 31.9976 54.0639 30.803 54.5119C29.6085 54.9598 28.277 54.3546 27.829 53.16L23.8567 42.5673H8.92092L4.94864 53.16C4.50069 54.3546 3.16918 54.9598 1.97463 54.5119C0.780081 54.0639 0.174848 52.7324 0.622803 51.5378L16.3888 9.49512ZM10.6534 37.9473H22.1242L16.3888 22.6529L10.6534 37.9473Z\" fill=\"white\"/><path opacity=\"0.5\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.4198 28.9628C46.1324 28.9628 42.1496 33.0428 42.1496 38.7444C42.1496 44.4461 46.1324 48.5261 50.4198 48.5261C54.6728 48.5261 58.626 44.5113 58.6892 38.8815V38.6074C58.626 32.9775 54.6728 28.9628 50.4198 28.9628ZM58.6892 27.6844C56.4888 25.6163 53.6344 24.3428 50.4198 24.3428C43.0206 24.3428 37.5296 31.09 37.5296 38.7444C37.5296 46.3988 43.0206 53.1461 50.4198 53.1461C53.6344 53.1461 56.4888 51.8726 58.6892 49.8044V53.859C58.6892 57.2705 55.3334 60.6177 50.419 60.6177C47.2539 60.6177 44.6209 59.1685 43.2401 57.2043C42.5064 56.1606 41.0655 55.9093 40.0218 56.643C38.9781 57.3767 38.7268 58.8175 39.4605 59.8612C41.7825 63.1642 45.8868 65.2377 50.419 65.2377C57.1912 65.2377 63.3092 60.4645 63.3092 53.859V38.9013C63.3097 38.849 63.31 38.7967 63.31 38.7444C63.31 38.6921 63.3097 38.6398 63.3092 38.5876V26.6528C63.3092 25.377 62.275 24.3428 60.9992 24.3428C59.7234 24.3428 58.6892 25.377 58.6892 26.6528V27.6844Z\" fill=\"white\"/></svg>";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"variableUtils": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/ui/variable-utils.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_source_variables_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/source-variables.css */ "./src/ui/styles/source-variables.css");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/ui/styles/styles.css");
/* harmony import */ var _styles_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/icons.css */ "./src/ui/styles/icons.css");
/* harmony import */ var _styles_dialog_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/dialog.css */ "./src/ui/styles/dialog.css");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/modal */ "./src/ui/helpers/modal.ts");
/* harmony import */ var _helpers_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_modal__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let importButton = document.getElementById('importVariablesButton');
let swapVariablesButton = document.getElementById('swapVariablesButton');
let reloadStoreButton = document.getElementById('reloadStore');
let fileName;
const state = {};
// importButton.addEventListener('click', (e) => {
//     const fileNameInput = document.querySelector('#importModal input[name=fileName]') as HTMLInputElement;
//     parent.postMessage({
//         pluginMessage: { type: 'COLLECT_VARS', fileName: fileNameInput.value }
//     }, "*");
// });
reloadStoreButton.addEventListener('click', (e) => {
    parent.postMessage({
        pluginMessage: { type: 'VARS_UI_LOADED' }
    }, "*");
});
swapVariablesButton.addEventListener('click', (e) => {
    const radioButton = document.querySelector('#presetsList input[type=radio]:checked');
    const key = (radioButton === null || radioButton === void 0 ? void 0 : radioButton.value) || null;
    const overrideTextStylesCheckbox = document.querySelector('input[name=overrideTextStyles]');
    const overrideTextStyles = overrideTextStylesCheckbox.checked;
    const modal = document.getElementById('swapModal');
    const swapProgressMsg = document.getElementById('swapProgress');
    swapProgressMsg.innerHTML = 'Working...';
    key && modal.showModal();
    parent.postMessage({
        pluginMessage: { type: 'SWAP_VARIABLES', fileName: key, overrideTextStyles }
    }, "*");
});
// window.addEventListener('message', ({ data: { pluginMessage } ) => {
//     console.log(e);
// })
window.onmessage = (_a) => __awaiter(void 0, [_a], void 0, function* ({ data: { pluginMessage } }) {
    if (pluginMessage.event == 'SYNC_VARS') {
        renderList(pluginMessage.data);
        document.querySelectorAll('dialog').forEach((modal) => {
            modal.close();
        });
    }
    if (pluginMessage.event == 'SWAP_VARIABLES_DONE') {
        const modal = document.getElementById('swapModal');
        modal.close();
    }
    if (pluginMessage.event == 'SWAP_VAR_PROGRESS') {
        const swapProgressMsg = document.getElementById('swapProgress');
        swapProgressMsg.innerHTML = pluginMessage.message + '...';
    }
});
function renderList(storedData) {
    const markup = [];
    const entries = Object.entries(storedData);
    entries.forEach(([fileKey, value]) => {
        markup.push(`
            <label class="theme-item">
                <input type="radio" name="theme" value="${fileKey}" />
                <div class="flex-1 flex flex-col px-base py-minor-base gap-minor-xs">
                    <span class="flex flex-row items-baseline justify-between">
                        <div class="text-sm" title="${fileKey}">${fileKey}</div>
                    </span>
                </div>
            </label>`);
    });
    if (!markup.length) {
    }
    const listboxElement = document.getElementById('presetsList');
    listboxElement.innerHTML = markup.join('');
}
parent.postMessage({
    pluginMessage: { type: 'VARS_UI_LOADED' }
}, "*");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVVdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0saUNBQWlDLG9CQUFvQixjQUFjLGFBQWEsbUJBQW1CLGtCQUFrQixzQkFBc0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsaUdBQWlHLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLDZCQUE2QixvQkFBb0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsa0NBQWtDLDZDQUE2QyxxQ0FBcUMsNkNBQTZDLHVCQUF1Qiw4Q0FBOEMsc0JBQXNCLEdBQUcsb0JBQW9CLDJEQUEyRCxvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLGtCQUFrQix5REFBeUQsc0NBQXNDLGNBQWMsR0FBRyxvQkFBb0IsMkRBQTJELHVDQUF1QyxHQUFHLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHFCQUFxQiw4QkFBOEIsdUNBQXVDLG1CQUFtQixpQkFBaUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsbUNBQW1DLG9DQUFvQyxHQUFHLHdCQUF3QixpQkFBaUIsR0FBRyxtQkFBbUIsbUdBQW1HLHNFQUFzRSxHQUFHLGlCQUFpQiwrREFBK0QsR0FBRyxtQ0FBbUMsaUJBQWlCLHlCQUF5QixHQUFHLHVCQUF1QiwyQ0FBMkMsMkJBQTJCLEdBQUcsb0NBQW9DLG9DQUFvQywyQ0FBMkMsMkJBQTJCLEdBQUcsb0dBQW9HLDJDQUEyQyx5QkFBeUIsMkJBQTJCLEdBQUcsa0NBQWtDLHFCQUFxQixHQUFHLDJCQUEyQix5RUFBeUUsb0NBQW9DLHNGQUFzRixHQUFHLCtCQUErQixnREFBZ0QsZUFBZSw2Q0FBNkMsMkJBQTJCLHlEQUF5RCxHQUFHLHVCQUF1QixxQkFBcUIsbUJBQW1CLGNBQWMsR0FBRyw2QkFBNkIsWUFBWSx3Q0FBd0MscUJBQXFCLDBDQUEwQyxPQUFPLFVBQVUscUJBQXFCLHVDQUF1QyxPQUFPLEdBQUcsbUJBQW1CO0FBQ2o4SjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE12QztBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QyxpcURBQXkwQjtBQUNyM0IsNENBQTRDLCtqTEFBZ3lGO0FBQzUwRiw0Q0FBNEMsaWxFQUFtaUM7QUFDL2tDLDRDQUE0Qyw2Z0dBQWlnRDtBQUM3aUQsNENBQTRDLGlzR0FBK2xEO0FBQzNvRCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RCx1QkFBdUIsbUNBQW1DO0FBQzFELHlCQUF5QixtQ0FBbUM7QUFDNUQsNEJBQTRCLG1DQUFtQztBQUMvRCx3QkFBd0IsbUNBQW1DOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwRkFBMEYsYUFBYSxlQUFlLGVBQWUsZUFBZSxnQkFBZ0IsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksaUNBQWlDLHExQkFBcTFCLHd5RkFBd3lGLDZpQ0FBNmlDLDhnREFBOGdELHdtREFBd21ELEtBQUssV0FBVywyQ0FBMkMsR0FBRyw4QkFBOEIsd0NBQXdDLEdBQUcseUJBQXlCLHFDQUFxQyxHQUFHLHVCQUF1QixtQ0FBbUMsR0FBRyx3QkFBd0Isb0NBQW9DLEdBQUcsbUJBQW1CO0FBQzE3UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDdkM7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLFlBQVksTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sTUFBTSxvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sWUFBWSxvQkFBb0IscUJBQXFCLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxLQUFLLE1BQU0sWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsVUFBVSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsY0FBYyxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLFlBQVksV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZ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QUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUN1QztBQUNWO0FBQ0Q7QUFDQztBQUNKO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsS0FBSztBQUNMLENBQUM7QUFDRCx5Q0FBeUMsUUFBUSxnQkFBZ0I7QUFDakU7QUFDQSxJQUFJO0FBQ0osd0VBQXdFLFFBQVEsaUJBQWlCO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsUUFBUTtBQUNsRTtBQUNBO0FBQ0Esc0RBQXNELFFBQVEsSUFBSSxRQUFRO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91aS9zdHlsZXMvaWNvbnMuY3NzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL3NvdXJjZS12YXJpYWJsZXMuY3NzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL2RpYWxvZy5jc3M/OWFiNyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9pY29ucy5jc3M/Y2QxNiIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9zb3VyY2UtdmFyaWFibGVzLmNzcz8wNDBkIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL3N0eWxlcy5jc3M/YjM3MCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvaGVscGVycy9tb2RhbC50cyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvdmFyaWFibGUtdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtYmFzZS0zMDApLCB2YXIoLS11dGlsaXR5LXRyYW5zcGFyZW50KSAyMCUpO1xufVxuXG5kaWFsb2dbb3Blbl0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGlhbG9nIC5tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMTAwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1sZyk7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWFsdC1iYXNlLTQwMCk7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICBhbmltYXRpb246IG9wZW4tbW9kYWwgMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgLS10dy1zaGFkb3c6IDBweCAxNnB4IDEwcHggLTdweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggMjhweCAtOHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjRweCA0OHB4IC0xMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAxNnB4IDEwcHggLTdweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMjRweCAyOHB4IC04cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggNDhweCAtMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gICAgLS1zaGFkb3ctY29sb3I6IHZhcigtLXV0aWxpdHktc2hhZGUtMjAwKTtcbiAgICAtLXNoYWRvdy1vcGFjaXR5OiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdy1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNoYWRvdy1jb2xvciksIHRyYW5zcGFyZW50IGNhbGMoMTAwJSAtIHZhcigtLXNoYWRvdy1vcGFjaXR5KSkpO1xuICAgIC0tYm94LXNoYWRvdzogMHB4IDE2cHggMTBweCAtN3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjRweCAyOHB4IC04cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyNHB4IDQ4cHggLTEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbmRpYWxvZyAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLW1kKSB2YXIoLS1zcGFjaW5nLW1kKSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpYWxvZyAuYm9keSB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1sZykgdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IHZhcigtLXNwYWNpbmctYmFzZSk7XG4gICAgZmxleDogMTtcbn1cblxuZGlhbG9nIC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1sZykgdmFyKC0tc3BhY2luZy1taW5vci1sZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmJ1dHRvbi5jbG9zZSB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xufVxuXG5idXR0b24uY2xvc2U6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wcmVzZXRzLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWlub3ItbGcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzNCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAtLXBhZGRpbmcteDogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcteCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1zcGFjaW5nLWxnKSAtIHZhcigtLXNjcm9sbGJhci13aWR0aCkpO1xufVxuXG4udGhlbWUtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMTAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG5cbi50aGVtZS1pdGVtIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRoZW1lLWl0ZW06aG92ZXIge1xuICAgIG91dGxpbmU6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktMzAwKTtcbiAgICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLnRoZW1lLWl0ZW06aGFzKGlucHV0OmNoZWNrZWQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTMwMCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cbi50aGVtZS1pdGVtOmZvY3VzLXdpdGhpbixcbi50aGVtZS1pdGVtOmhhcyhpbnB1dDpmb2N1cyksXG4udGhlbWUtaXRlbTpoYXMoaW5wdXQ6Zm9jdXMtdmlzaWJsZSkge1xuICAgIG91dGxpbmU6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktNTAwKTtcbiAgICBvdXRsaW5lLXdpZHRoOiAycHg7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG5cbmRpYWxvZyAuYm9keSArIC5wcmVzZXRzLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4udGhlbWUtaXRlbSAuY29sLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzMyk7XG4gICAgLS1wYWRkaW5nLXg6IHZhcigtLXNwYWNpbmctYmFzZSk7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcteCk7XG59XG4udGhlbWUtaXRlbSAuY29sLWluZm8gLmluZm8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzMik7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcbn1cblxuLnRoZW1lLWl0ZW0gLmNvbC1zd2F0Y2hlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmcteHMpO1xuICAgIC0tcGFkZGluZzogdmFyKC0tc3BhY2luZy14cyk7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG59XG5cbi5zd2F0Y2hlcyB7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWFsdC1iYXNlLTEwMCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG59XG5cbi5zd2F0Y2hlcyAuc3dhdGNoIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZmxleDogMTtcbn1cblxuXG5Aa2V5ZnJhbWVzIG9wZW4tbW9kYWwge1xuICAgIGZyb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpOyAgICBcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7ICAgIFxuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULDBGQUEwRjtBQUM5Rjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDViwyQkFBMkI7SUFDM0Isc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxnSkFBZTtJQUFmLHFKQUFlO0lBQWYsdUdBQWU7SUFBZix3Q0FBZTtJQUFmLHNCQUFlO0lBQWYsMkdBQWU7SUFBZixpSkFBZTtJQUFmLDZCQUFlO0FBQ25COztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELGFBQStCO0lBQS9CLHNCQUErQjtJQUEvQiw0QkFBK0I7SUFDL0IsT0FBTztBQUNYOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGFBQWdDO0lBQWhDLG1CQUFnQztJQUFoQyx5QkFBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHSTtJQUFBLHNDQUE0RjtJQUE1RixhQUE0RjtJQUE1RixZQUE0RjtJQUE1RixzQkFBNEY7SUFBNUYsNkJBQTRGO0lBQTVGLGNBQTRGO0lBQTVGLG1CQUE0RjtJQUE1Riw4QkFBNEY7SUFBNUYsOEJBQTRGO0lBQTVGLCtCQUE0RjtJQUM1RjtBQUQ0Rjs7QUFLNUY7SUFBQSxrQkFBd0Q7SUFBeEQsYUFBd0Q7SUFBeEQsbUJBQXdEO0lBQXhELDhCQUF3RDtJQUF4RCwrQkFBd0Q7SUFBeEQ7QUFBd0Q7O0FBRzVEO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4Qjs7QUFFQTs7O0lBR0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdJO0lBQUEsYUFBK0Q7SUFBL0QsWUFBK0Q7SUFBL0Qsc0JBQStEO0lBQS9ELHVCQUErRDtJQUEvRCw2QkFBK0Q7SUFBL0QsZ0NBQStEO0lBQS9ELDhCQUErRDtJQUEvRDtBQUErRDtBQUcvRDtJQUFBLGFBQStFO0lBQS9FLG1CQUErRTtJQUEvRSxpQkFBK0U7SUFBL0UsbUJBQStFO0lBQS9FLHVCQUErRTtJQUEvRSxtQkFBK0U7SUFBL0UsOEJBQStFO0lBQS9FO0FBQStFOztBQUkvRTtJQUFBLGFBQXNDO0lBQXRDLFlBQXNDO0lBQXRDLHNCQUFzQztJQUF0QyxzQkFBc0M7SUFBdEMsNEJBQXNDO0lBQXRDO0FBQXNDOztBQUcxQztJQUNJLHNDQUFzQztJQUN0QyxvQkFBb0I7SUFDcEIsYUFBa0Q7SUFBbEQsbUJBQWtEO0lBQWxELFFBQWtEO0lBQWxELGdCQUFrRDtJQUFsRCxnQ0FBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLE9BQU87QUFDWDs7O0FBR0E7SUFDSTtRQUNJLDZCQUE2QjtRQUM3QixVQUFVO1FBQ1YsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWZpbGwtYmFzZS0zMDApLCB2YXIoLS11dGlsaXR5LXRyYW5zcGFyZW50KSAyMCUpO1xcbn1cXG5cXG5kaWFsb2dbb3Blbl0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpYWxvZyAubW9kYWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWFsdC1iYXNlLTQwMCk7XFxuICAgIG1heC1oZWlnaHQ6IDk1dmg7XFxuICAgIGFuaW1hdGlvbjogb3Blbi1tb2RhbCAyNTBtcyBlYXNlLWluLW91dDtcXG4gICAgQGFwcGx5IHNoYWRvdy02O1xcbn1cXG5cXG5kaWFsb2cgLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3ItbWQpIHZhcigtLXNwYWNpbmctbWQpIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGlhbG9nIC5ib2R5IHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1sZykgdmFyKC0tc3BhY2luZy1sZyk7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC15LWJhc2U7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpYWxvZyAuZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLWxnKSB2YXIoLS1zcGFjaW5nLW1pbm9yLWxnKTtcXG4gICAgQGFwcGx5IGZsZXggZmxleC1yb3cganVzdGlmeS1lbmQ7XFxufVxcblxcbmJ1dHRvbi5jbG9zZSB7XFxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XFxuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xcbn1cXG5cXG5idXR0b24uY2xvc2U6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucHJlc2V0cy1saXN0IHtcXG4gICAgQGFwcGx5IGZsZXggZmxleC1jb2wgZmxleC0xIGdhcC1taW5vci14czQgcHgtbGcgbWItbWlub3ItbGcgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy15LXZpc2libGU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tc3BhY2luZy1sZykgLSB2YXIoLS1zY3JvbGxiYXItd2lkdGgpKTtcXG59XFxuXFxuLnRoZW1lLWl0ZW0ge1xcbiAgICBAYXBwbHkgcm91bmRlZC1tZCBiZy1hbHQtYmFzZS0xMDAgZmxleCBmbGV4LXJvdyByZWxhdGl2ZTtcXG59XFxuXFxuLnRoZW1lLWl0ZW0gaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi50aGVtZS1pdGVtOmhvdmVyIHtcXG4gICAgb3V0bGluZToxcHggc29saWQgdmFyKC0tcHJpbWFyeS0zMDApO1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTFweDtcXG59XFxuXFxuLnRoZW1lLWl0ZW06aGFzKGlucHV0OmNoZWNrZWQpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG91dGxpbmU6MnB4IHNvbGlkIHZhcigtLXByaW1hcnktMzAwKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbi50aGVtZS1pdGVtOmZvY3VzLXdpdGhpbixcXG4udGhlbWUtaXRlbTpoYXMoaW5wdXQ6Zm9jdXMpLFxcbi50aGVtZS1pdGVtOmhhcyhpbnB1dDpmb2N1cy12aXNpYmxlKSB7XFxuICAgIG91dGxpbmU6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgb3V0bGluZS13aWR0aDogMnB4O1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG59XFxuXFxuZGlhbG9nIC5ib2R5ICsgLnByZXNldHMtbGlzdCB7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4udGhlbWUtaXRlbSAuY29sLWluZm8ge1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBmbGV4LTEganVzdGlmeS1jZW50ZXIgcHgtYmFzZSBnYXAtbWlub3IteHMzXFxufVxcbi50aGVtZS1pdGVtIC5jb2wtaW5mbyAuaW5mby1pdGVtIHtcXG4gICAgQGFwcGx5IGZsZXggZmxleC1yb3cgZ2FwLXhzMiB0ZXh0LXNtIGZsZXgtbm93cmFwIHdoaXRlc3BhY2Utbm93cmFwIGl0ZW1zLWNlbnRlcjtcXG59XFxuXFxuLnRoZW1lLWl0ZW0gLmNvbC1zd2F0Y2hlcyB7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGdhcC14cyBwLXhzIGZsZXgtMVxcbn1cXG5cXG4uc3dhdGNoZXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYWx0LWJhc2UtMTAwKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IGdhcC0wIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuO1xcbn1cXG5cXG4uc3dhdGNoZXMgLnN3YXRjaCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgb3Blbi1tb2RhbCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpOyAgICBcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAgICBcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMzAuOTE4NSA0LjY5NTU3QzMxLjU3NzMgNC4yNzIwNSAzMi40MjI3IDQuMjcyMDUgMzMuMDgxNSA0LjY5NTU3TDU3LjM4MyAyMC4zMThDNTguNjA3NiAyMS4xMDUyIDU4LjYwNzYgMjIuODk1NCA1Ny4zODMgMjMuNjgyN0wzMy4wODE1IDM5LjMwNTFDMzIuNDIyNyAzOS43Mjg2IDMxLjU3NzMgMzkuNzI4NiAzMC45MTg1IDM5LjMwNTFMNi42MTY5NyAyMy42ODI3QzUuMzkyMzMgMjIuODk1NCA1LjM5MjMyIDIxLjEwNTIgNi42MTY5NyAyMC4zMThMMzAuOTE4NSA0LjY5NTU3WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBvcGFjaXR5PVxcXCIwLjVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzIgMjYuNzU1NUwxMS4zOTcgNDAuMDAwM0wzMiA1My4yNDUxTDUyLjYwMjkgNDAuMDAwM0wzMiAyNi43NTU1Wk0zMy4wODE1IDIyLjY5NTZDMzIuNDIyNyAyMi4yNzIgMzEuNTc3MyAyMi4yNzIgMzAuOTE4NSAyMi42OTU2TDYuNjE2OTcgMzguMzE4QzUuMzkyMzIgMzkuMTA1MiA1LjM5MjMzIDQwLjg5NTQgNi42MTY5NyA0MS42ODI3TDMwLjkxODUgNTcuMzA1MUMzMS41NzczIDU3LjcyODYgMzIuNDIyNyA1Ny43Mjg2IDMzLjA4MTUgNTcuMzA1MUw1Ny4zODMgNDEuNjgyN0M1OC42MDc2IDQwLjg5NTQgNTguNjA3NiAzOS4xMDUyIDU3LjM4MyAzOC4zMThMMzMuMDgxNSAyMi42OTU2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGcgb3BhY2l0eT1cXFwiMC41XFxcIj48cGF0aCBkPVxcXCJNNTggNTJDNTggMjYuNTk0OSAzNy40MDUxIDYgMTIgNkgwVjEwSDEyQzM1LjE5NiAxMCA1NCAyOC44MDQgNTQgNTJWNjRINThWNTJaXFxcIiBmaWxsPVxcXCIlMjNEOUQ5RDlcXFwiLz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEyIDYuMjUwMDJDMTIuOTY2NSA2LjI1MDAyIDEzLjc1IDcuMDMzNTMgMTMuNzUgOC4wMDAwMkwxMy43NSAxMS4zMjQ0QzEzLjc1IDEyLjI5MDkgMTIuOTY2NSAxMy4wNzQ0IDEyIDEzLjA3NDRDMTEuMDMzNSAxMy4wNzQ0IDEwLjI1IDEyLjI5MDkgMTAuMjUgMTEuMzI0NEwxMC4yNSA4LjAwMDAyQzEwLjI1IDcuMDMzNTIgMTEuMDMzNSA2LjI1MDAyIDEyIDYuMjUwMDJaTTEyIDE2LjIyMzFDMTIuOTY2NSAxNi4yMjMxIDEzLjc1IDE3LjAwNjYgMTMuNzUgMTcuOTczMUwxMy43NSAyNC42MjE4QzEzLjc1IDI1LjU4ODMgMTIuOTY2NSAyNi4zNzE4IDEyIDI2LjM3MThDMTEuMDMzNSAyNi4zNzE4IDEwLjI1IDI1LjU4ODMgMTAuMjUgMjQuNjIxOEwxMC4yNSAxNy45NzMxQzEwLjI1IDE3LjAwNjYgMTEuMDMzNSAxNi4yMjMxIDEyIDE2LjIyMzFaTTEyIDI5LjUyMDVDMTIuOTY2NSAyOS41MjA1IDEzLjc1IDMwLjMwNCAxMy43NSAzMS4yNzA1TDEzLjc1IDM3LjkxOTJDMTMuNzUgMzguODg1NyAxMi45NjY1IDM5LjY2OTIgMTIgMzkuNjY5MkMxMS4wMzM1IDM5LjY2OTIgMTAuMjUgMzguODg1NyAxMC4yNSAzNy45MTkyTDEwLjI1IDMxLjI3MDVDMTAuMjUgMzAuMzA0IDExLjAzMzUgMjkuNTIwNSAxMiAyOS41MjA1Wk0xMiA0Mi44MTc5QzEyLjk2NjUgNDIuODE3OSAxMy43NSA0My42MDE0IDEzLjc1IDQ0LjU2NzlMMTMuNzUgNDcuODkyMkMxMy43NSA0OC44NTg3IDEyLjk2NjUgNDkuNjQyMiAxMiA0OS42NDIyQzExLjAzMzUgNDkuNjQyMiAxMC4yNSA0OC44NTg3IDEwLjI1IDQ3Ljg5MjJMMTAuMjUgNDQuNTY3OUMxMC4yNSA0My42MDE0IDExLjAzMzUgNDIuODE3OSAxMiA0Mi44MTc5Wk0xNC4yNSA1Mi4wMDAxQzE0LjI1IDUxLjAzMzYgMTUuMDMzNSA1MC4yNTAxIDE2IDUwLjI1MDFMMTkuMzMzMyA1MC4yNTAxQzIwLjI5OTggNTAuMjUwMSAyMS4wODMzIDUxLjAzMzYgMjEuMDgzMyA1Mi4wMDAxQzIxLjA4MzMgNTIuOTY2NiAyMC4yOTk4IDUzLjc1MDEgMTkuMzMzMyA1My43NTAxTDE2IDUzLjc1MDFDMTUuMDMzNSA1My43NTAxIDE0LjI1IDUyLjk2NjYgMTQuMjUgNTIuMDAwMVpNMjQuMjUgNTIuMDAwMUMyNC4yNSA1MS4wMzM2IDI1LjAzMzUgNTAuMjUwMSAyNiA1MC4yNTAxSDMyLjY2NjdDMzMuNjMzMiA1MC4yNTAxIDM0LjQxNjcgNTEuMDMzNiAzNC40MTY3IDUyLjAwMDFDMzQuNDE2NyA1Mi45NjY2IDMzLjYzMzIgNTMuNzUwMSAzMi42NjY3IDUzLjc1MDFIMjZDMjUuMDMzNSA1My43NTAxIDI0LjI1IDUyLjk2NjYgMjQuMjUgNTIuMDAwMVpNMzcuNTgzMyA1Mi4wMDAxQzM3LjU4MzMgNTEuMDMzNiAzOC4zNjY4IDUwLjI1MDEgMzkuMzMzMyA1MC4yNTAxTDQ2IDUwLjI1MDFDNDYuOTY2NSA1MC4yNTAxIDQ3Ljc1IDUxLjAzMzYgNDcuNzUgNTIuMDAwMUM0Ny43NSA1Mi45NjY2IDQ2Ljk2NjUgNTMuNzUwMSA0NiA1My43NTAxSDM5LjMzMzNDMzguMzY2OCA1My43NTAxIDM3LjU4MzMgNTIuOTY2NiAzNy41ODMzIDUyLjAwMDFaTTUwLjkxNjcgNTIuMDAwMUM1MC45MTY3IDUxLjAzMzYgNTEuNzAwMiA1MC4yNTAxIDUyLjY2NjcgNTAuMjUwMUg1NkM1Ni45NjY1IDUwLjI1MDEgNTcuNzUgNTEuMDMzNiA1Ny43NSA1Mi4wMDAxQzU3Ljc1IDUyLjk2NjYgNTYuOTY2NSA1My43NTAxIDU2IDUzLjc1MDFINTIuNjY2N0M1MS43MDAyIDUzLjc1MDEgNTAuOTE2NyA1Mi45NjY2IDUwLjkxNjcgNTIuMDAwMVpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9nPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTAgOEMxMCA2Ljg5NTQzIDEwLjg5NTQgNiAxMiA2QzE4LjA0MDggNiAyNC4wMjI1IDcuMTg5ODMgMjkuNjAzNCA5LjUwMTU0QzM1LjE4NDQgMTEuODEzMyA0MC4yNTU0IDE1LjIwMTYgNDQuNTI2OSAxOS40NzMxQzQ4Ljc5ODQgMjMuNzQ0NiA1Mi4xODY3IDI4LjgxNTYgNTQuNDk4NSAzNC4zOTY2QzU2LjgxMDIgMzkuOTc3NSA1OCA0NS45NTkyIDU4IDUyQzU4IDUzLjEwNDYgNTcuMTA0NiA1NCA1NiA1NEM1NC44OTU0IDU0IDU0IDUzLjEwNDYgNTQgNTJDNTQgNDYuNDg0NSA1Mi45MTM2IDQxLjAyMyA1MC44MDI5IDM1LjkyNzNDNDguNjkyMiAzMC44MzE2IDQ1LjU5ODUgMjYuMjAxNiA0MS42OTg1IDIyLjMwMTVDMzcuNzk4NCAxOC40MDE1IDMzLjE2ODQgMTUuMzA3OCAyOC4wNzI3IDEzLjE5NzFDMjIuOTc3IDExLjA4NjQgMTcuNTE1NSAxMCAxMiAxMEMxMC44OTU0IDEwIDEwIDkuMTA0NTcgMTAgOFpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMSA1MEM5LjM0MzE1IDUwIDggNTEuMzQzMSA4IDUzQzggNTQuNjU2OSA5LjM0MzE1IDU2IDExIDU2QzEyLjY1NjkgNTYgMTQgNTQuNjU2OSAxNCA1M0MxNCA1MS4zNDMxIDEyLjY1NjkgNTAgMTEgNTBaTTQgNTNDNCA0OS4xMzQgNy4xMzQwMSA0NiAxMSA0NkMxNC44NjYgNDYgMTggNDkuMTM0IDE4IDUzQzE4IDU2Ljg2NiAxNC44NjYgNjAgMTEgNjBDNy4xMzQwMSA2MCA0IDU2Ljg2NiA0IDUzWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTU2IDhDNTIuNjg2MyA4IDUwIDEwLjY4NjMgNTAgMTRWNTBDNTAgNTMuMzEzNyA1Mi42ODYzIDU2IDU2IDU2SDY0VjUySDU2QzU0Ljg5NTQgNTIgNTQgNTEuMTA0NiA1NCA1MFYxNEM1NCAxMi44OTU0IDU0Ljg5NTQgMTIgNTYgMTJINjRWOEg1NlpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggZD1cXFwiTTE0IDE0QzE0IDEwLjY4NjMgMTEuMzEzNyA4IDggOEgwVjEySDhDOS4xMDQ1NyAxMiAxMCAxMi44OTU0IDEwIDE0VjUwQzEwIDUxLjEwNDYgOS4xMDQ1NyA1MiA4IDUySDBWNTZIOEMxMS4zMTM3IDU2IDE0IDUzLjMxMzcgMTQgNTBWMTRaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIG9wYWNpdHk9XFxcIjAuNVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yNy4yMzc0IDI0Ljc2MjZDMjcuOTIwOCAyNS40NDYgMjcuOTIwOCAyNi41NTQgMjcuMjM3NCAyNy4yMzc0TDI0LjIyNDkgMzAuMjVIMzkuNzc1MUwzNi43NjI2IDI3LjIzNzRDMzYuMDc5MSAyNi41NTQgMzYuMDc5MSAyNS40NDYgMzYuNzYyNiAyNC43NjI2QzM3LjQ0NiAyNC4wNzkxIDM4LjU1NCAyNC4wNzkxIDM5LjIzNzQgMjQuNzYyNkw0Ni40NzQ5IDMyTDM5LjIzNzQgMzkuMjM3NEMzOC41NTQgMzkuOTIwOSAzNy40NDYgMzkuOTIwOSAzNi43NjI2IDM5LjIzNzRDMzYuMDc5MSAzOC41NTQgMzYuMDc5MSAzNy40NDYgMzYuNzYyNiAzNi43NjI2TDM5Ljc3NTEgMzMuNzVIMjQuMjI0OUwyNy4yMzc0IDM2Ljc2MjZDMjcuOTIwOCAzNy40NDYgMjcuOTIwOCAzOC41NTQgMjcuMjM3NCAzOS4yMzc0QzI2LjU1NCAzOS45MjA5IDI1LjQ0NiAzOS45MjA5IDI0Ljc2MjYgMzkuMjM3NEwxNy41MjUxIDMyTDI0Ljc2MjYgMjQuNzYyNkMyNS40NDYgMjQuMDc5MSAyNi41NTQgMjQuMDc5MSAyNy4yMzc0IDI0Ljc2MjZaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTE2LjM4ODggOS40OTUxMkwzMi4xNTQ5IDUxLjUzNzhDMzIuNjAyOCA1Mi43MzI0IDMxLjk5NzYgNTQuMDYzOSAzMC44MDMgNTQuNTExOUMyOS42MDg1IDU0Ljk1OTggMjguMjc3IDU0LjM1NDYgMjcuODI5IDUzLjE2TDIzLjg1NjcgNDIuNTY3M0g4LjkyMDkyTDQuOTQ4NjQgNTMuMTZDNC41MDA2OSA1NC4zNTQ2IDMuMTY5MTggNTQuOTU5OCAxLjk3NDYzIDU0LjUxMTlDMC43ODAwODEgNTQuMDYzOSAwLjE3NDg0OCA1Mi43MzI0IDAuNjIyODAzIDUxLjUzNzhMMTYuMzg4OCA5LjQ5NTEyWk0xMC42NTM0IDM3Ljk0NzNIMjIuMTI0MkwxNi4zODg4IDIyLjY1MjlMMTAuNjUzNCAzNy45NDczWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBvcGFjaXR5PVxcXCIwLjVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNTAuNDE5OCAyOC45NjI4QzQ2LjEzMjQgMjguOTYyOCA0Mi4xNDk2IDMzLjA0MjggNDIuMTQ5NiAzOC43NDQ0QzQyLjE0OTYgNDQuNDQ2MSA0Ni4xMzI0IDQ4LjUyNjEgNTAuNDE5OCA0OC41MjYxQzU0LjY3MjggNDguNTI2MSA1OC42MjYgNDQuNTExMyA1OC42ODkyIDM4Ljg4MTVWMzguNjA3NEM1OC42MjYgMzIuOTc3NSA1NC42NzI4IDI4Ljk2MjggNTAuNDE5OCAyOC45NjI4Wk01OC42ODkyIDI3LjY4NDRDNTYuNDg4OCAyNS42MTYzIDUzLjYzNDQgMjQuMzQyOCA1MC40MTk4IDI0LjM0MjhDNDMuMDIwNiAyNC4zNDI4IDM3LjUyOTYgMzEuMDkgMzcuNTI5NiAzOC43NDQ0QzM3LjUyOTYgNDYuMzk4OCA0My4wMjA2IDUzLjE0NjEgNTAuNDE5OCA1My4xNDYxQzUzLjYzNDQgNTMuMTQ2MSA1Ni40ODg4IDUxLjg3MjYgNTguNjg5MiA0OS44MDQ0VjUzLjg1OUM1OC42ODkyIDU3LjI3MDUgNTUuMzMzNCA2MC42MTc3IDUwLjQxOSA2MC42MTc3QzQ3LjI1MzkgNjAuNjE3NyA0NC42MjA5IDU5LjE2ODUgNDMuMjQwMSA1Ny4yMDQzQzQyLjUwNjQgNTYuMTYwNiA0MS4wNjU1IDU1LjkwOTMgNDAuMDIxOCA1Ni42NDNDMzguOTc4MSA1Ny4zNzY3IDM4LjcyNjggNTguODE3NSAzOS40NjA1IDU5Ljg2MTJDNDEuNzgyNSA2My4xNjQyIDQ1Ljg4NjggNjUuMjM3NyA1MC40MTkgNjUuMjM3N0M1Ny4xOTEyIDY1LjIzNzcgNjMuMzA5MiA2MC40NjQ1IDYzLjMwOTIgNTMuODU5VjM4LjkwMTNDNjMuMzA5NyAzOC44NDkgNjMuMzEgMzguNzk2NyA2My4zMSAzOC43NDQ0QzYzLjMxIDM4LjY5MjEgNjMuMzA5NyAzOC42Mzk4IDYzLjMwOTIgMzguNTg3NlYyNi42NTI4QzYzLjMwOTIgMjUuMzc3IDYyLjI3NSAyNC4zNDI4IDYwLjk5OTIgMjQuMzQyOEM1OS43MjM0IDI0LjM0MjggNTguNjg5MiAyNS4zNzcgNTguNjg5MiAyNi42NTI4VjI3LjY4NDRaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBvcGFjaXR5PVxcXCIwLjVcXFwiPjxwYXRoIGQ9XFxcIk00NS42NTY4IDUwLjM0MzFMNTQuMzQzMSA0MS42NTY5QzU0LjUwMDIgNDEuNDk5OCA1NC42NDkzIDQxLjMzNzkgNTQuNzkwNSA0MS4xNzE2SDI1LjE3MTZMMzQuMzQzMSA1MC4zNDMxQzM3LjQ2NzMgNTMuNDY3MyA0Mi41MzI3IDUzLjQ2NzMgNDUuNjU2OCA1MC4zNDMxWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBkPVxcXCJNNi42NzE0NCA1NC4wMjE1TDYuNjk4NDIgNTQuMTQyOUM3LjQ1ODkyIDU3LjU2NTEgMTAuNDk0MyA2MCAxNCA2MEMxNy41MDU3IDYwIDIwLjU0MTEgNTcuNTY1MSAyMS4zMDE2IDU0LjE0MjlMMjEuMzI4NiA1NC4wMjE1QzIxLjc1OTIgNTIuMDgzOCAyMS40MTgyIDUwLjA1NDUgMjAuMzc3OCA0OC4zNjRMMTQgMzhMNy42MjIxOCA0OC4zNjRDNi41ODE4NSA1MC4wNTQ1IDYuMjQwODMgNTIuMDgzOCA2LjY3MTQ0IDU0LjAyMTVaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM5Ljc1IDUuNzc1MzlWMTMuMjc1NEw1NS41ODA2IDI5LjEwNkM1OS4zODgyIDMyLjkxMzYgNTkuMzg4MiAzOS4wODY5IDU1LjU4MDYgNDIuODk0Nkw0Ni44OTQzIDUxLjU4MDlDNDMuMDg2NyA1NS4zODg1IDM2LjkxMzMgNTUuMzg4NSAzMy4xMDU3IDUxLjU4MDhMMTMuNTI1MSAzMi4wMDAzTDM5Ljc1IDUuNzc1MzlaTTM2IDE0LjQ3NTFMMTguNDc0OSAzMi4wMDAzTDM1LjU4MDYgNDkuMTA2QzM4LjAyMTQgNTEuNTQ2NyA0MS45Nzg2IDUxLjU0NjggNDQuNDE5NCA0OS4xMDZMNTMuMTA1NyA0MC40MTk3QzU1LjU0NjUgMzcuOTc4OSA1NS41NDY1IDM0LjAyMTYgNTMuMTA1NyAzMS41ODA4TDM2IDE0LjQ3NTFaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNTUuMjM3NCAxNS4yMzc3QzU1LjkyMDkgMTQuNTU0MyA1NS45MjA5IDEzLjQ0NjIgNTUuMjM3NCAxMi43NjI4QzU0LjU1NCAxMi4wNzk0IDUzLjQ0NiAxMi4wNzk0IDUyLjc2MjYgMTIuNzYyOEwzOS42MzY0IDI1Ljg4OUMzOC44NDY3IDI1LjQ4MDggMzcuOTUwMyAyNS4yNTAzIDM3IDI1LjI1MDNDMzMuODI0NCAyNS4yNTAzIDMxLjI1IDI3LjgyNDYgMzEuMjUgMzEuMDAwM0MzMS4yNSAzNC4xNzU5IDMzLjgyNDQgMzYuNzUwMyAzNyAzNi43NTAzQzQwLjE3NTYgMzYuNzUwMyA0Mi43NSAzNC4xNzU5IDQyLjc1IDMxLjAwMDNDNDIuNzUgMzAuMDUgNDIuNTE5NSAyOS4xNTM2IDQyLjExMTMgMjguMzYzOEw1NS4yMzc0IDE1LjIzNzdaTTM0Ljc1IDMxLjAwMDNDMzQuNzUgMjkuNzU3NiAzNS43NTc0IDI4Ljc1MDMgMzcgMjguNzUwM0MzOC4yNDI2IDI4Ljc1MDMgMzkuMjUgMjkuNzU3NiAzOS4yNSAzMS4wMDAzQzM5LjI1IDMyLjI0MjkgMzguMjQyNiAzMy4yNTAzIDM3IDMzLjI1MDNDMzUuNzU3NCAzMy4yNTAzIDM0Ljc1IDMyLjI0MjkgMzQuNzUgMzEuMDAwM1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYWRzLWVsZXZhdGlvbjogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIC0tYWRzLXJhZGlpOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgLS1hZHMtc3BhY2luZzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIC0tYWRzLXR5cG9ncmFwaHk6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICAtLWFkcy1jb2xvcnM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcblxufVxuXG4uaWNvbiB7XG4gICAgLS1pY29uLXNpemU6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xufVxuXG4uaWNvbi10eXBvZ3JhcGh5OjpiZWZvcmUge1xuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy10eXBvZ3JhcGh5KTtcbn1cbi5pY29uLXNwYWNpbmc6OmJlZm9yZSB7XG4gICAgLS1pY29uLXNyYzogdmFyKC0tYWRzLXNwYWNpbmcpO1xufVxuLmljb24tcmFkaWk6OmJlZm9yZSB7XG4gICAgLS1pY29uLXNyYzogdmFyKC0tYWRzLXJhZGlpKTtcbn1cbi5pY29uLWNvbG9yczo6YmVmb3JlIHtcbiAgICAtLWljb24tc3JjOiB2YXIoLS1hZHMtY29sb3JzKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvaWNvbnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0RBQTB6QjtJQUMxekIsb0RBQTZ2RjtJQUM3dkYsc0RBQThnQztJQUM5Z0MseURBQSsrQztJQUMvK0MscURBQWlrRDs7QUFFcmtEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1hZHMtZWxldmF0aW9uOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNMzAuOTE4NSA0LjY5NTU3QzMxLjU3NzMgNC4yNzIwNSAzMi40MjI3IDQuMjcyMDUgMzMuMDgxNSA0LjY5NTU3TDU3LjM4MyAyMC4zMThDNTguNjA3NiAyMS4xMDUyIDU4LjYwNzYgMjIuODk1NCA1Ny4zODMgMjMuNjgyN0wzMy4wODE1IDM5LjMwNTFDMzIuNDIyNyAzOS43Mjg2IDMxLjU3NzMgMzkuNzI4NiAzMC45MTg1IDM5LjMwNTFMNi42MTY5NyAyMy42ODI3QzUuMzkyMzMgMjIuODk1NCA1LjM5MjMyIDIxLjEwNTIgNi42MTY5NyAyMC4zMThMMzAuOTE4NSA0LjY5NTU3WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBvcGFjaXR5PVxcXCIwLjVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMzIgMjYuNzU1NUwxMS4zOTcgNDAuMDAwM0wzMiA1My4yNDUxTDUyLjYwMjkgNDAuMDAwM0wzMiAyNi43NTU1Wk0zMy4wODE1IDIyLjY5NTZDMzIuNDIyNyAyMi4yNzIgMzEuNTc3MyAyMi4yNzIgMzAuOTE4NSAyMi42OTU2TDYuNjE2OTcgMzguMzE4QzUuMzkyMzIgMzkuMTA1MiA1LjM5MjMzIDQwLjg5NTQgNi42MTY5NyA0MS42ODI3TDMwLjkxODUgNTcuMzA1MUMzMS41NzczIDU3LjcyODYgMzIuNDIyNyA1Ny43Mjg2IDMzLjA4MTUgNTcuMzA1MUw1Ny4zODMgNDEuNjgyN0M1OC42MDc2IDQwLjg5NTQgNTguNjA3NiAzOS4xMDUyIDU3LjM4MyAzOC4zMThMMzMuMDgxNSAyMi42OTU2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz4nKTtcXG4gICAgLS1hZHMtcmFkaWk6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxnIG9wYWNpdHk9XFxcIjAuNVxcXCI+PHBhdGggZD1cXFwiTTU4IDUyQzU4IDI2LjU5NDkgMzcuNDA1MSA2IDEyIDZIMFYxMEgxMkMzNS4xOTYgMTAgNTQgMjguODA0IDU0IDUyVjY0SDU4VjUyWlxcXCIgZmlsbD1cXFwiJTIzRDlEOUQ5XFxcIi8+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMiA2LjI1MDAyQzEyLjk2NjUgNi4yNTAwMiAxMy43NSA3LjAzMzUzIDEzLjc1IDguMDAwMDJMMTMuNzUgMTEuMzI0NEMxMy43NSAxMi4yOTA5IDEyLjk2NjUgMTMuMDc0NCAxMiAxMy4wNzQ0QzExLjAzMzUgMTMuMDc0NCAxMC4yNSAxMi4yOTA5IDEwLjI1IDExLjMyNDRMMTAuMjUgOC4wMDAwMkMxMC4yNSA3LjAzMzUyIDExLjAzMzUgNi4yNTAwMiAxMiA2LjI1MDAyWk0xMiAxNi4yMjMxQzEyLjk2NjUgMTYuMjIzMSAxMy43NSAxNy4wMDY2IDEzLjc1IDE3Ljk3MzFMMTMuNzUgMjQuNjIxOEMxMy43NSAyNS41ODgzIDEyLjk2NjUgMjYuMzcxOCAxMiAyNi4zNzE4QzExLjAzMzUgMjYuMzcxOCAxMC4yNSAyNS41ODgzIDEwLjI1IDI0LjYyMThMMTAuMjUgMTcuOTczMUMxMC4yNSAxNy4wMDY2IDExLjAzMzUgMTYuMjIzMSAxMiAxNi4yMjMxWk0xMiAyOS41MjA1QzEyLjk2NjUgMjkuNTIwNSAxMy43NSAzMC4zMDQgMTMuNzUgMzEuMjcwNUwxMy43NSAzNy45MTkyQzEzLjc1IDM4Ljg4NTcgMTIuOTY2NSAzOS42NjkyIDEyIDM5LjY2OTJDMTEuMDMzNSAzOS42NjkyIDEwLjI1IDM4Ljg4NTcgMTAuMjUgMzcuOTE5MkwxMC4yNSAzMS4yNzA1QzEwLjI1IDMwLjMwNCAxMS4wMzM1IDI5LjUyMDUgMTIgMjkuNTIwNVpNMTIgNDIuODE3OUMxMi45NjY1IDQyLjgxNzkgMTMuNzUgNDMuNjAxNCAxMy43NSA0NC41Njc5TDEzLjc1IDQ3Ljg5MjJDMTMuNzUgNDguODU4NyAxMi45NjY1IDQ5LjY0MjIgMTIgNDkuNjQyMkMxMS4wMzM1IDQ5LjY0MjIgMTAuMjUgNDguODU4NyAxMC4yNSA0Ny44OTIyTDEwLjI1IDQ0LjU2NzlDMTAuMjUgNDMuNjAxNCAxMS4wMzM1IDQyLjgxNzkgMTIgNDIuODE3OVpNMTQuMjUgNTIuMDAwMUMxNC4yNSA1MS4wMzM2IDE1LjAzMzUgNTAuMjUwMSAxNiA1MC4yNTAxTDE5LjMzMzMgNTAuMjUwMUMyMC4yOTk4IDUwLjI1MDEgMjEuMDgzMyA1MS4wMzM2IDIxLjA4MzMgNTIuMDAwMUMyMS4wODMzIDUyLjk2NjYgMjAuMjk5OCA1My43NTAxIDE5LjMzMzMgNTMuNzUwMUwxNiA1My43NTAxQzE1LjAzMzUgNTMuNzUwMSAxNC4yNSA1Mi45NjY2IDE0LjI1IDUyLjAwMDFaTTI0LjI1IDUyLjAwMDFDMjQuMjUgNTEuMDMzNiAyNS4wMzM1IDUwLjI1MDEgMjYgNTAuMjUwMUgzMi42NjY3QzMzLjYzMzIgNTAuMjUwMSAzNC40MTY3IDUxLjAzMzYgMzQuNDE2NyA1Mi4wMDAxQzM0LjQxNjcgNTIuOTY2NiAzMy42MzMyIDUzLjc1MDEgMzIuNjY2NyA1My43NTAxSDI2QzI1LjAzMzUgNTMuNzUwMSAyNC4yNSA1Mi45NjY2IDI0LjI1IDUyLjAwMDFaTTM3LjU4MzMgNTIuMDAwMUMzNy41ODMzIDUxLjAzMzYgMzguMzY2OCA1MC4yNTAxIDM5LjMzMzMgNTAuMjUwMUw0NiA1MC4yNTAxQzQ2Ljk2NjUgNTAuMjUwMSA0Ny43NSA1MS4wMzM2IDQ3Ljc1IDUyLjAwMDFDNDcuNzUgNTIuOTY2NiA0Ni45NjY1IDUzLjc1MDEgNDYgNTMuNzUwMUgzOS4zMzMzQzM4LjM2NjggNTMuNzUwMSAzNy41ODMzIDUyLjk2NjYgMzcuNTgzMyA1Mi4wMDAxWk01MC45MTY3IDUyLjAwMDFDNTAuOTE2NyA1MS4wMzM2IDUxLjcwMDIgNTAuMjUwMSA1Mi42NjY3IDUwLjI1MDFINTZDNTYuOTY2NSA1MC4yNTAxIDU3Ljc1IDUxLjAzMzYgNTcuNzUgNTIuMDAwMUM1Ny43NSA1Mi45NjY2IDU2Ljk2NjUgNTMuNzUwMSA1NiA1My43NTAxSDUyLjY2NjdDNTEuNzAwMiA1My43NTAxIDUwLjkxNjcgNTIuOTY2NiA1MC45MTY3IDUyLjAwMDFaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEwIDhDMTAgNi44OTU0MyAxMC44OTU0IDYgMTIgNkMxOC4wNDA4IDYgMjQuMDIyNSA3LjE4OTgzIDI5LjYwMzQgOS41MDE1NEMzNS4xODQ0IDExLjgxMzMgNDAuMjU1NCAxNS4yMDE2IDQ0LjUyNjkgMTkuNDczMUM0OC43OTg0IDIzLjc0NDYgNTIuMTg2NyAyOC44MTU2IDU0LjQ5ODUgMzQuMzk2NkM1Ni44MTAyIDM5Ljk3NzUgNTggNDUuOTU5MiA1OCA1MkM1OCA1My4xMDQ2IDU3LjEwNDYgNTQgNTYgNTRDNTQuODk1NCA1NCA1NCA1My4xMDQ2IDU0IDUyQzU0IDQ2LjQ4NDUgNTIuOTEzNiA0MS4wMjMgNTAuODAyOSAzNS45MjczQzQ4LjY5MjIgMzAuODMxNiA0NS41OTg1IDI2LjIwMTYgNDEuNjk4NSAyMi4zMDE1QzM3Ljc5ODQgMTguNDAxNSAzMy4xNjg0IDE1LjMwNzggMjguMDcyNyAxMy4xOTcxQzIyLjk3NyAxMS4wODY0IDE3LjUxNTUgMTAgMTIgMTBDMTAuODk1NCAxMCAxMCA5LjEwNDU3IDEwIDhaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTEgNTBDOS4zNDMxNSA1MCA4IDUxLjM0MzEgOCA1M0M4IDU0LjY1NjkgOS4zNDMxNSA1NiAxMSA1NkMxMi42NTY5IDU2IDE0IDU0LjY1NjkgMTQgNTNDMTQgNTEuMzQzMSAxMi42NTY5IDUwIDExIDUwWk00IDUzQzQgNDkuMTM0IDcuMTM0MDEgNDYgMTEgNDZDMTQuODY2IDQ2IDE4IDQ5LjEzNCAxOCA1M0MxOCA1Ni44NjYgMTQuODY2IDYwIDExIDYwQzcuMTM0MDEgNjAgNCA1Ni44NjYgNCA1M1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxuICAgIC0tYWRzLXNwYWNpbmc6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk01NiA4QzUyLjY4NjMgOCA1MCAxMC42ODYzIDUwIDE0VjUwQzUwIDUzLjMxMzcgNTIuNjg2MyA1NiA1NiA1Nkg2NFY1Mkg1NkM1NC44OTU0IDUyIDU0IDUxLjEwNDYgNTQgNTBWMTRDNTQgMTIuODk1NCA1NC44OTU0IDEyIDU2IDEySDY0VjhINTZaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGQ9XFxcIk0xNCAxNEMxNCAxMC42ODYzIDExLjMxMzcgOCA4IDhIMFYxMkg4QzkuMTA0NTcgMTIgMTAgMTIuODk1NCAxMCAxNFY1MEMxMCA1MS4xMDQ2IDkuMTA0NTcgNTIgOCA1MkgwVjU2SDhDMTEuMzEzNyA1NiAxNCA1My4zMTM3IDE0IDUwVjE0WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBvcGFjaXR5PVxcXCIwLjVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMjcuMjM3NCAyNC43NjI2QzI3LjkyMDggMjUuNDQ2IDI3LjkyMDggMjYuNTU0IDI3LjIzNzQgMjcuMjM3NEwyNC4yMjQ5IDMwLjI1SDM5Ljc3NTFMMzYuNzYyNiAyNy4yMzc0QzM2LjA3OTEgMjYuNTU0IDM2LjA3OTEgMjUuNDQ2IDM2Ljc2MjYgMjQuNzYyNkMzNy40NDYgMjQuMDc5MSAzOC41NTQgMjQuMDc5MSAzOS4yMzc0IDI0Ljc2MjZMNDYuNDc0OSAzMkwzOS4yMzc0IDM5LjIzNzRDMzguNTU0IDM5LjkyMDkgMzcuNDQ2IDM5LjkyMDkgMzYuNzYyNiAzOS4yMzc0QzM2LjA3OTEgMzguNTU0IDM2LjA3OTEgMzcuNDQ2IDM2Ljc2MjYgMzYuNzYyNkwzOS43NzUxIDMzLjc1SDI0LjIyNDlMMjcuMjM3NCAzNi43NjI2QzI3LjkyMDggMzcuNDQ2IDI3LjkyMDggMzguNTU0IDI3LjIzNzQgMzkuMjM3NEMyNi41NTQgMzkuOTIwOSAyNS40NDYgMzkuOTIwOSAyNC43NjI2IDM5LjIzNzRMMTcuNTI1MSAzMkwyNC43NjI2IDI0Ljc2MjZDMjUuNDQ2IDI0LjA3OTEgMjYuNTU0IDI0LjA3OTEgMjcuMjM3NCAyNC43NjI2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz4nKTtcXG4gICAgLS1hZHMtdHlwb2dyYXBoeTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNi4zODg4IDkuNDk1MTJMMzIuMTU0OSA1MS41Mzc4QzMyLjYwMjggNTIuNzMyNCAzMS45OTc2IDU0LjA2MzkgMzAuODAzIDU0LjUxMTlDMjkuNjA4NSA1NC45NTk4IDI4LjI3NyA1NC4zNTQ2IDI3LjgyOSA1My4xNkwyMy44NTY3IDQyLjU2NzNIOC45MjA5Mkw0Ljk0ODY0IDUzLjE2QzQuNTAwNjkgNTQuMzU0NiAzLjE2OTE4IDU0Ljk1OTggMS45NzQ2MyA1NC41MTE5QzAuNzgwMDgxIDU0LjA2MzkgMC4xNzQ4NDggNTIuNzMyNCAwLjYyMjgwMyA1MS41Mzc4TDE2LjM4ODggOS40OTUxMlpNMTAuNjUzNCAzNy45NDczSDIyLjEyNDJMMTYuMzg4OCAyMi42NTI5TDEwLjY1MzQgMzcuOTQ3M1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggb3BhY2l0eT1cXFwiMC41XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUwLjQxOTggMjguOTYyOEM0Ni4xMzI0IDI4Ljk2MjggNDIuMTQ5NiAzMy4wNDI4IDQyLjE0OTYgMzguNzQ0NEM0Mi4xNDk2IDQ0LjQ0NjEgNDYuMTMyNCA0OC41MjYxIDUwLjQxOTggNDguNTI2MUM1NC42NzI4IDQ4LjUyNjEgNTguNjI2IDQ0LjUxMTMgNTguNjg5MiAzOC44ODE1VjM4LjYwNzRDNTguNjI2IDMyLjk3NzUgNTQuNjcyOCAyOC45NjI4IDUwLjQxOTggMjguOTYyOFpNNTguNjg5MiAyNy42ODQ0QzU2LjQ4ODggMjUuNjE2MyA1My42MzQ0IDI0LjM0MjggNTAuNDE5OCAyNC4zNDI4QzQzLjAyMDYgMjQuMzQyOCAzNy41Mjk2IDMxLjA5IDM3LjUyOTYgMzguNzQ0NEMzNy41Mjk2IDQ2LjM5ODggNDMuMDIwNiA1My4xNDYxIDUwLjQxOTggNTMuMTQ2MUM1My42MzQ0IDUzLjE0NjEgNTYuNDg4OCA1MS44NzI2IDU4LjY4OTIgNDkuODA0NFY1My44NTlDNTguNjg5MiA1Ny4yNzA1IDU1LjMzMzQgNjAuNjE3NyA1MC40MTkgNjAuNjE3N0M0Ny4yNTM5IDYwLjYxNzcgNDQuNjIwOSA1OS4xNjg1IDQzLjI0MDEgNTcuMjA0M0M0Mi41MDY0IDU2LjE2MDYgNDEuMDY1NSA1NS45MDkzIDQwLjAyMTggNTYuNjQzQzM4Ljk3ODEgNTcuMzc2NyAzOC43MjY4IDU4LjgxNzUgMzkuNDYwNSA1OS44NjEyQzQxLjc4MjUgNjMuMTY0MiA0NS44ODY4IDY1LjIzNzcgNTAuNDE5IDY1LjIzNzdDNTcuMTkxMiA2NS4yMzc3IDYzLjMwOTIgNjAuNDY0NSA2My4zMDkyIDUzLjg1OVYzOC45MDEzQzYzLjMwOTcgMzguODQ5IDYzLjMxIDM4Ljc5NjcgNjMuMzEgMzguNzQ0NEM2My4zMSAzOC42OTIxIDYzLjMwOTcgMzguNjM5OCA2My4zMDkyIDM4LjU4NzZWMjYuNjUyOEM2My4zMDkyIDI1LjM3NyA2Mi4yNzUgMjQuMzQyOCA2MC45OTkyIDI0LjM0MjhDNTkuNzIzNCAyNC4zNDI4IDU4LjY4OTIgMjUuMzc3IDU4LjY4OTIgMjYuNjUyOFYyNy42ODQ0WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz4nKTtcXG4gICAgLS1hZHMtY29sb3JzOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBvcGFjaXR5PVxcXCIwLjVcXFwiPjxwYXRoIGQ9XFxcIk00NS42NTY4IDUwLjM0MzFMNTQuMzQzMSA0MS42NTY5QzU0LjUwMDIgNDEuNDk5OCA1NC42NDkzIDQxLjMzNzkgNTQuNzkwNSA0MS4xNzE2SDI1LjE3MTZMMzQuMzQzMSA1MC4zNDMxQzM3LjQ2NzMgNTMuNDY3MyA0Mi41MzI3IDUzLjQ2NzMgNDUuNjU2OCA1MC4zNDMxWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBkPVxcXCJNNi42NzE0NCA1NC4wMjE1TDYuNjk4NDIgNTQuMTQyOUM3LjQ1ODkyIDU3LjU2NTEgMTAuNDk0MyA2MCAxNCA2MEMxNy41MDU3IDYwIDIwLjU0MTEgNTcuNTY1MSAyMS4zMDE2IDU0LjE0MjlMMjEuMzI4NiA1NC4wMjE1QzIxLjc1OTIgNTIuMDgzOCAyMS40MTgyIDUwLjA1NDUgMjAuMzc3OCA0OC4zNjRMMTQgMzhMNy42MjIxOCA0OC4zNjRDNi41ODE4NSA1MC4wNTQ1IDYuMjQwODMgNTIuMDgzOCA2LjY3MTQ0IDU0LjAyMTVaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTM5Ljc1IDUuNzc1MzlWMTMuMjc1NEw1NS41ODA2IDI5LjEwNkM1OS4zODgyIDMyLjkxMzYgNTkuMzg4MiAzOS4wODY5IDU1LjU4MDYgNDIuODk0Nkw0Ni44OTQzIDUxLjU4MDlDNDMuMDg2NyA1NS4zODg1IDM2LjkxMzMgNTUuMzg4NSAzMy4xMDU3IDUxLjU4MDhMMTMuNTI1MSAzMi4wMDAzTDM5Ljc1IDUuNzc1MzlaTTM2IDE0LjQ3NTFMMTguNDc0OSAzMi4wMDAzTDM1LjU4MDYgNDkuMTA2QzM4LjAyMTQgNTEuNTQ2NyA0MS45Nzg2IDUxLjU0NjggNDQuNDE5NCA0OS4xMDZMNTMuMTA1NyA0MC40MTk3QzU1LjU0NjUgMzcuOTc4OSA1NS41NDY1IDM0LjAyMTYgNTMuMTA1NyAzMS41ODA4TDM2IDE0LjQ3NTFaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNTUuMjM3NCAxNS4yMzc3QzU1LjkyMDkgMTQuNTU0MyA1NS45MjA5IDEzLjQ0NjIgNTUuMjM3NCAxMi43NjI4QzU0LjU1NCAxMi4wNzk0IDUzLjQ0NiAxMi4wNzk0IDUyLjc2MjYgMTIuNzYyOEwzOS42MzY0IDI1Ljg4OUMzOC44NDY3IDI1LjQ4MDggMzcuOTUwMyAyNS4yNTAzIDM3IDI1LjI1MDNDMzMuODI0NCAyNS4yNTAzIDMxLjI1IDI3LjgyNDYgMzEuMjUgMzEuMDAwM0MzMS4yNSAzNC4xNzU5IDMzLjgyNDQgMzYuNzUwMyAzNyAzNi43NTAzQzQwLjE3NTYgMzYuNzUwMyA0Mi43NSAzNC4xNzU5IDQyLjc1IDMxLjAwMDNDNDIuNzUgMzAuMDUgNDIuNTE5NSAyOS4xNTM2IDQyLjExMTMgMjguMzYzOEw1NS4yMzc0IDE1LjIzNzdaTTM0Ljc1IDMxLjAwMDNDMzQuNzUgMjkuNzU3NiAzNS43NTc0IDI4Ljc1MDMgMzcgMjguNzUwM0MzOC4yNDI2IDI4Ljc1MDMgMzkuMjUgMjkuNzU3NiAzOS4yNSAzMS4wMDAzQzM5LjI1IDMyLjI0MjkgMzguMjQyNiAzMy4yNTAzIDM3IDMzLjI1MDNDMzUuNzU3NCAzMy4yNTAzIDM0Ljc1IDMyLjI0MjkgMzQuNzUgMzEuMDAwM1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxuXFxufVxcblxcbi5pY29uIHtcXG4gICAgLS1pY29uLXNpemU6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbn1cXG5cXG4uaWNvbi10eXBvZ3JhcGh5OjpiZWZvcmUge1xcbiAgICAtLWljb24tc3JjOiB2YXIoLS1hZHMtdHlwb2dyYXBoeSk7XFxufVxcbi5pY29uLXNwYWNpbmc6OmJlZm9yZSB7XFxuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy1zcGFjaW5nKTtcXG59XFxuLmljb24tcmFkaWk6OmJlZm9yZSB7XFxuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy1yYWRpaSk7XFxufVxcbi5pY29uLWNvbG9yczo6YmVmb3JlIHtcXG4gICAgLS1pY29uLXNyYzogdmFyKC0tYWRzLWNvbG9ycyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYWNjZW50LXJlZC0xMDA6IGhzbGEoMy44NCw4OC42NSUsNzIuMzUlLDAuMTI1KTtcbiAgICAtLWFjY2VudC1yZWQtMjAwOiBoc2xhKDMuODQsODguNjUlLDcyLjM1JSwwLjMzKTtcbiAgICAtLWFjY2VudC1yZWQtMzAwOiBoc2woNCw4Ni41NCUsNTkuMjIlKTtcbiAgICAtLWFjY2VudC1yZWQtNDAwOiBoc2woNC4wOSwxMDAlLDQ2LjA4JSk7XG4gICAgLS1hY2NlbnQtcmVkLTUwMDogaHNsKDQuMTksOTkuMDglLDQyLjU1JSk7XG4gICAgLS1hY2NlbnQtcmVkLTYwMDogaHNsKDMuNDMsOTQuNTklLDg1LjQ5JSk7XG4gICAgLS1hY2NlbnQtYW1iZXItMTAwOiBoc2xhKDI0LjQ0LDc2LjI3JSw2NS4yOSUsMC4xMjUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTIwMDogaHNsYSgyNC40NCw3Ni4yNyUsNjUuMjklLDAuMzMpO1xuICAgIC0tYWNjZW50LWFtYmVyLTMwMDogaHNsKDI0LjU4LDY4LjAzJSw1Mi4xNiUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTQwMDogaHNsKDI0Ljg1LDEwMCUsMzguODIlKTtcbiAgICAtLWFjY2VudC1hbWJlci01MDA6IGhzbCgyNSw5OC45JSwzNS42OSUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTYwMDogaHNsKDIzLjg4LDk0LjUlLDc4LjYzJSk7XG4gICAgLS1hY2NlbnQtYnJvd24tMTAwOiBoc2xhKDMxLjg5LDcxLjg2JSw2MC45OCUsMC4xMjUpO1xuICAgIC0tYWNjZW50LWJyb3duLTIwMDogaHNsYSgzMS44OSw3MS44NiUsNjAuOTglLDAuMzMpO1xuICAgIC0tYWNjZW50LWJyb3duLTMwMDogaHNsKDMyLjYzLDY1LjU3JSw0Ny44NCUpO1xuICAgIC0tYWNjZW50LWJyb3duLTQwMDogaHNsKDMyLjg4LDEwMCUsMzQuNzElKTtcbiAgICAtLWFjY2VudC1icm93bi01MDA6IGhzbCgzMy4xNyw5OC43NyUsMzEuOTYlKTtcbiAgICAtLWFjY2VudC1icm93bi02MDA6IGhzbCgzMS40Myw5NS40NSUsNzQuMTIlKTtcbiAgICAtLWFjY2VudC1ncmVlbi0xMDA6IGhzbGEoMTI2LjAzLDk2LjE0JSw0MC41OSUsMC4xMjUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTIwMDogaHNsYSgxMjYuMDMsOTYuMTQlLDQwLjU5JSwwLjMzKTtcbiAgICAtLWFjY2VudC1ncmVlbi0zMDA6IGhzbCgxMjcuODYsOTcuNjclLDMzLjczJSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tNDAwOiBoc2woMTMwLjA3LDEwMCUsMjYuODYlKTtcbiAgICAtLWFjY2VudC1ncmVlbi01MDA6IGhzbCgxMzEuNTIsOTguNDMlLDI0LjklKTtcbiAgICAtLWFjY2VudC1ncmVlbi02MDA6IGhzbCgxMjQuOTYsOTUuMDQlLDQ3LjQ1JSk7XG4gICAgLS1hY2NlbnQtdGVhbC0xMDA6IGhzbGEoMTc4LjEzLDk2Ljk3JSwzOC44MiUsMC4xMjUpO1xuICAgIC0tYWNjZW50LXRlYWwtMjAwOiBoc2xhKDE3OC4xMyw5Ni45NyUsMzguODIlLDAuMzMpO1xuICAgIC0tYWNjZW50LXRlYWwtMzAwOiBoc2woMTgwLjc0LDk3LjYlLDMyLjc1JSk7XG4gICAgLS1hY2NlbnQtdGVhbC00MDA6IGhzbCgxODMuODYsMTAwJSwyNy40NSUpO1xuICAgIC0tYWNjZW50LXRlYWwtNTAwOiBoc2woMTg1LjkxLDk4LjUxJSwyNi4yNyUpO1xuICAgIC0tYWNjZW50LXRlYWwtNjAwOiBoc2woMTc2LjQ5LDk1LjY5JSw0NS40OSUpO1xuICAgIC0tYWNjZW50LWJsdWUtMTAwOiBoc2xhKDIxNi4wOSw5OC41MiUsNzMuNTMlLDAuMTI1KTtcbiAgICAtLWFjY2VudC1ibHVlLTIwMDogaHNsYSgyMTYuMDksOTguNTIlLDczLjUzJSwwLjMzKTtcbiAgICAtLWFjY2VudC1ibHVlLTMwMDogaHNsKDIxOC4zMSw5OC44OCUsNjQuOSUpO1xuICAgIC0tYWNjZW50LWJsdWUtNDAwOiBoc2woMjIwLDEwMCUsNTYuNDclKTtcbiAgICAtLWFjY2VudC1ibHVlLTUwMDogaHNsKDIyMy4wMSw5OC4yNiUsNTQuOSUpO1xuICAgIC0tYWNjZW50LWJsdWUtNjAwOiBoc2woMjEwLjY4LDk1LjY1JSw4MS45NiUpO1xuICAgIC0tYWNjZW50LWluZGlnby0xMDA6IGhzbGEoMjM1LjU4LDk3Ljk0JSw4MC45OCUsMC4xMjUpO1xuICAgIC0tYWNjZW50LWluZGlnby0yMDA6IGhzbGEoMjM1LjU4LDk3Ljk0JSw4MC45OCUsMC4zMyk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTMwMDogaHNsKDIzOC41Nyw5OC40NCUsNzQuOSUpO1xuICAgIC0tYWNjZW50LWluZGlnby00MDA6IGhzbCgyNDAsMTAwJSw2OC44MiUpO1xuICAgIC0tYWNjZW50LWluZGlnby01MDA6IGhzbCgyNDMuNzcsOTcuNzclLDY0LjklKTtcbiAgICAtLWFjY2VudC1pbmRpZ28tNjAwOiBoc2woMjMwLjMyLDkzLjk0JSw4Ny4wNiUpO1xuICAgIC0tYWNjZW50LXZpb2xldC0xMDA6IGhzbGEoMjU2LjA4LDk3Ljk4JSw4MC41OSUsMC4xMjUpO1xuICAgIC0tYWNjZW50LXZpb2xldC0yMDA6IGhzbGEoMjU2LjA4LDk3Ljk4JSw4MC41OSUsMC4zMyk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTMwMDogaHNsKDI1OC4zOSwxMDAlLDczLjE0JSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTQwMDogaHNsKDI2MCwxMDAlLDY1LjI5JSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTUwMDogaHNsKDI2My45NCw5Mi4zNCUsNTkuMDIlKTtcbiAgICAtLWFjY2VudC12aW9sZXQtNjAwOiBoc2woMjQ5LjQ3LDk2LjYxJSw4OC40MyUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0xMDA6IGhzbGEoMjc2LjIxLDk4LjMxJSw3Ni44NiUsMC4xMjUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0yMDA6IGhzbGEoMjc2LjIxLDk4LjMxJSw3Ni44NiUsMC4zMyk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTMwMDogaHNsKDI3OC43LDk4LjgzJSw2Ni40NyUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS00MDA6IGhzbCgyODAuMDksMTAwJSw1Ni4yNyUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS01MDA6IGhzbCgyODMuMTEsODEuNzUlLDQ5LjQxJSk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTYwMDogaHNsKDI2OS4wMyw5My45NCUsODcuMDYlKTtcbiAgICAtLWFjY2VudC1waW5rLTEwMDogaHNsYSgzMzUuMDQsODguNjUlLDcyLjM1JSwwLjEyNSk7XG4gICAgLS1hY2NlbnQtcGluay0yMDA6IGhzbGEoMzM1LjA0LDg4LjY1JSw3Mi4zNSUsMC4zMyk7XG4gICAgLS1hY2NlbnQtcGluay0zMDA6IGhzbCgzMzguMjEsODUuNjUlLDU5LjAyJSk7XG4gICAgLS1hY2NlbnQtcGluay00MDA6IGhzbCgzNDAsMTAwJSw0NS44OCUpO1xuICAgIC0tYWNjZW50LXBpbmstNTAwOiBoc2woMzQzLjUzLDk5LjA4JSw0Mi41NSUpO1xuICAgIC0tYWNjZW50LXBpbmstNjAwOiBoc2woMzI2LjU3LDk0LjU5JSw4NS40OSUpO1xuICAgIC0tdGV4dC1iYXNlLTQwMDogaHNsYSgwLDAlLDUuODglLDAuNDUpO1xuICAgIC0tdGV4dC1iYXNlLTUwMDogaHNsYSgwLDAlLDUuODglLDAuNjUpO1xuICAgIC0tdGV4dC1iYXNlLTYwMDogaHNsKDAsMCUsNS44OCUpO1xuICAgIC0tdGV4dC1iYXNlLWFjdGlvbjogdmFyKC0tcHJpbWFyeS01MDApO1xuICAgIC0tdGV4dC1iYXNlLWluZm86IHZhcigtLWluZm8tNTAwKTtcbiAgICAtLXRleHQtYmFzZS1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTUwMCk7XG4gICAgLS10ZXh0LWJhc2Utd2FybmluZzogdmFyKC0td2FybmluZy01MDApO1xuICAgIC0tdGV4dC1iYXNlLWRhbmdlcjogdmFyKC0tZGFuZ2VyLTUwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTQwMDogaHNsYSgwLDAlLDEwMCUsMC40NSk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTUwMDogaHNsYSgwLDAlLDEwMCUsMC43KTtcbiAgICAtLXRleHQtY29udHJhc3QtNjAwOiBoc2woMCwwJSwxMDAlKTtcbiAgICAtLXRleHQtY29udHJhc3QtYWN0aW9uOiB2YXIoLS1wcmltYXJ5LTYwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LWluZm86IHZhcigtLWluZm8tNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3Qtc3VjY2VzczogdmFyKC0tc3VjY2Vzcy02MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC13YXJuaW5nOiB2YXIoLS13YXJuaW5nLTYwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LWRhbmdlcjogdmFyKC0tZGFuZ2VyLTYwMCk7XG4gICAgLS1hbHQtYmFzZS0xMDA6IGhzbGEoMTgwLDEwMCUsMTMuOTIlLDAuMDQpO1xuICAgIC0tYWx0LWJhc2UtMjAwOiBoc2xhKDE4MCwxMDAlLDEzLjkyJSwwLjA4KTtcbiAgICAtLWFsdC1iYXNlLTMwMDogaHNsYSgxODAsMTAwJSwxMy45MiUsMC4xNik7XG4gICAgLS1hbHQtYmFzZS00MDA6IGhzbGEoMTgwLDEwMCUsMTMuOTIlLDAuMjQpO1xuICAgIC0tYWx0LWJhc2UtNTAwOiBoc2xhKDE4MCwxMDAlLDEzLjkyJSwwLjMyKTtcbiAgICAtLWFsdC1iYXNlLTYwMDogaHNsYSgxODAsMTAwJSwxMy45MiUsMC40NCk7XG4gICAgLS1hbHQtY29udHJhc3QtMTAwOiBoc2xhKDAsMCUsMTAwJSwwLjA0KTtcbiAgICAtLWFsdC1jb250cmFzdC0yMDA6IGhzbGEoMCwwJSwxMDAlLDAuMDgpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTMwMDogaHNsYSgwLDAlLDEwMCUsMC4xMik7XG4gICAgLS1hbHQtY29udHJhc3QtNDAwOiBoc2xhKDAsMCUsMTAwJSwwLjE2KTtcbiAgICAtLWFsdC1jb250cmFzdC01MDA6IGhzbGEoMCwwJSwxMDAlLDAuMjQpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTYwMDogaHNsYSgwLDAlLDEwMCUsMC4zMik7XG4gICAgLS11dGlsaXR5LXdoaXRlOiBoc2woMCwwJSwxMDAlKTtcbiAgICAtLXV0aWxpdHktYmxhY2s6IGhzbCgwLDAlLDMuOTIlKTtcbiAgICAtLXV0aWxpdHktdHJhbnNwYXJlbnQ6IGhzbGEoMCwwJSwxMDAlLDApO1xuICAgIC0tdXRpbGl0eS1zaGFkZS0xMDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4wNCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTIwMDogaHNsYSgxODAsMTAwJSw4LjA0JSwwLjA4KTtcbiAgICAtLXV0aWxpdHktc2hhZGUtMzAwOiBoc2xhKDE4MCwxMDAlLDguMDQlLDAuMTYpO1xuICAgIC0tdXRpbGl0eS1zaGFkZS00MDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4yNCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTUwMDogaHNsYSgxODAsMTAwJSw4LjA0JSwwLjMyKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtNjAwOiBoc2xhKDE4MCwxMDAlLDguMDQlLDAuNDQpO1xuICAgIC0tdXRpbGl0eS10aW50LTEwMDogaHNsYSgwLDAlLDEwMCUsMC41KTtcbiAgICAtLXV0aWxpdHktdGludC0yMDA6IGhzbGEoMCwwJSwxMDAlLDAuNik7XG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDAsMCUsMTAwJSwwLjcpO1xuICAgIC0tdXRpbGl0eS10aW50LTQwMDogaHNsYSgwLDAlLDEwMCUsMC44KTtcbiAgICAtLXV0aWxpdHktdGludC01MDA6IGhzbGEoMCwwJSwxMDAlLDAuOSk7XG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2woMCwwJSwxMDAlKTtcbiAgICAtLXByaW1hcnktMTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0xMDApO1xuICAgIC0tcHJpbWFyeS0yMDA6IHZhcigtLWFjY2VudC1ibHVlLTIwMCk7XG4gICAgLS1wcmltYXJ5LTMwMDogdmFyKC0tYWNjZW50LWJsdWUtMzAwKTtcbiAgICAtLXByaW1hcnktNDAwOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xuICAgIC0tcHJpbWFyeS01MDA6IHZhcigtLWFjY2VudC1ibHVlLTUwMCk7XG4gICAgLS1wcmltYXJ5LTYwMDogdmFyKC0tYWNjZW50LWJsdWUtNjAwKTtcbiAgICAtLWluZm8tMTAwOiB2YXIoLS1hY2NlbnQtdGVhbC0xMDApO1xuICAgIC0taW5mby0yMDA6IHZhcigtLWFjY2VudC10ZWFsLTIwMCk7XG4gICAgLS1pbmZvLTMwMDogdmFyKC0tYWNjZW50LXRlYWwtMzAwKTtcbiAgICAtLWluZm8tNDAwOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xuICAgIC0taW5mby01MDA6IHZhcigtLWFjY2VudC10ZWFsLTUwMCk7XG4gICAgLS1pbmZvLTYwMDogdmFyKC0tYWNjZW50LXRlYWwtNjAwKTtcbiAgICAtLXN1Y2Nlc3MtMTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMTAwKTtcbiAgICAtLXN1Y2Nlc3MtMjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMjAwKTtcbiAgICAtLXN1Y2Nlc3MtMzAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMzAwKTtcbiAgICAtLXN1Y2Nlc3MtNDAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcbiAgICAtLXN1Y2Nlc3MtNTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNTAwKTtcbiAgICAtLXN1Y2Nlc3MtNjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNjAwKTtcbiAgICAtLXdhcm5pbmctMTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMTAwKTtcbiAgICAtLXdhcm5pbmctMjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMjAwKTtcbiAgICAtLXdhcm5pbmctMzAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMzAwKTtcbiAgICAtLXdhcm5pbmctNDAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNDAwKTtcbiAgICAtLXdhcm5pbmctNTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNTAwKTtcbiAgICAtLXdhcm5pbmctNjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNjAwKTtcbiAgICAtLWRhbmdlci0xMDA6IHZhcigtLWFjY2VudC1yZWQtMTAwKTtcbiAgICAtLWRhbmdlci0yMDA6IHZhcigtLWFjY2VudC1yZWQtMjAwKTtcbiAgICAtLWRhbmdlci0zMDA6IHZhcigtLWFjY2VudC1yZWQtMzAwKTtcbiAgICAtLWRhbmdlci00MDA6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcbiAgICAtLWRhbmdlci01MDA6IHZhcigtLWFjY2VudC1yZWQtNTAwKTtcbiAgICAtLWRhbmdlci02MDA6IHZhcigtLWFjY2VudC1yZWQtNjAwKTtcbiAgICAtLWZpbGwtYmFzZS0xMDA6IGhzbCgwLDAlLDEwMCUpO1xuICAgIC0tZmlsbC1iYXNlLTIwMDogaHNsKDAsMCUsOTguMDQlKTtcbiAgICAtLWZpbGwtYmFzZS0zMDA6IGhzbCgwLDAlLDk2LjA4JSk7XG4gICAgLS1maWxsLWJhc2UtNDAwOiBoc2woMCwwJSw5NC4xMiUpO1xuICAgIC0tZmlsbC1iYXNlLTUwMDogaHNsKDE4MCwyLjQ0JSw5MS45NiUpO1xuICAgIC0tZmlsbC1iYXNlLTYwMDogaHNsKDE4MCwxLjY0JSw4OC4wNCUpO1xuICAgIC0tZmlsbC1jb250cmFzdC0xMDA6IGhzbCgxODAsMC44MSUsMjQuMTIlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtMjAwOiBoc2woMjQwLDAuODglLDIyLjE2JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTMwMDogaHNsKDAsMCUsMjAlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNDAwOiBoc2woMCwwJSwxOC4wNCUpO1xuICAgIC0tZmlsbC1jb250cmFzdC01MDA6IGhzbCgxODAsMS4yMyUsMTUuODglKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNjAwOiBoc2woMTgwLDEuNDElLDEzLjkyJSk7XG4gICAgLS1zdHJva2UtYmFzZS0xMDA6IGhzbCgwLDAlLDkyLjk0JSk7XG4gICAgLS1zdHJva2UtYmFzZS0yMDA6IGhzbCgxODAsMS42NCUsODguMDQlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTMwMDogaHNsKDE4MCwxLjMlLDg0LjklKTtcbiAgICAtLXN0cm9rZS1iYXNlLTQwMDogaHNsKDAsMCUsODAlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTUwMDogaHNsKDE4MCwwLjY1JSw3MCUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMTgwLDAuNDMlLDUzLjkyJSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtMTAwOiBoc2woMTgwLDAuNyUsMjguMDQlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0yMDA6IGhzbCgxODAsMC42NSUsMzAlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsMC41OSUsMzMuMTQlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC00MDA6IGhzbCgxODAsMC41NSUsMzUuODglKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC01MDA6IGhzbCgxODAsMC41JSwzOS4wMiUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwwLjQ0JSw0NC45JSk7XG59XG5cbi5maWdtYS1kYXJrIHtcbiAgICAtLWFjY2VudC1yZWQtMTAwOiBoc2xhKDQuMzIsNzkuODYlLDcyLjc1JSwwLjIpO1xuICAgIC0tYWNjZW50LXJlZC0yMDA6IGhzbGEoNC4zMiw3OS44NiUsNzIuNzUlLDAuNDUpO1xuICAgIC0tYWNjZW50LXJlZC0zMDA6IGhzbCgzLjczLDgwLjklLDYwLjk4JSk7XG4gICAgLS1hY2NlbnQtcmVkLTQwMDogaHNsKDMuOTgsODQuNzQlLDQ4LjgyJSk7XG4gICAgLS1hY2NlbnQtcmVkLTUwMDogaHNsKDMuOTMsNzkuMjIlLDg0LjklKTtcbiAgICAtLWFjY2VudC1yZWQtNjAwOiBoc2woMy45Myw3OS4yMiUsODQuOSUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTEwMDogaHNsYSgyNC4zMSw2Ny40NCUsNjYuMjclLDAuMik7XG4gICAgLS1hY2NlbnQtYW1iZXItMjAwOiBoc2xhKDI0LjMxLDY3LjQ0JSw2Ni4yNyUsMC40NSk7XG4gICAgLS1hY2NlbnQtYW1iZXItMzAwOiBoc2woMjQuODMsNjAuNjclLDUzLjE0JSk7XG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjUuMDMsODUuMzclLDQwLjIlKTtcbiAgICAtLWFjY2VudC1hbWJlci01MDA6IGhzbCgyMy43Miw4MS4xMyUsNzkuMjIlKTtcbiAgICAtLWFjY2VudC1hbWJlci02MDA6IGhzbCgyMy43Miw4MS4xMyUsNzkuMjIlKTtcbiAgICAtLWFjY2VudC1icm93bi0xMDA6IGhzbGEoMzIuNSw2Mi41JSw2Mi4zNSUsMC4yKTtcbiAgICAtLWFjY2VudC1icm93bi0yMDA6IGhzbGEoMzIuNSw2Mi41JSw2Mi4zNSUsMC40NSk7XG4gICAgLS1hY2NlbnQtYnJvd24tMzAwOiBoc2woMzIuMzcsNTQuOTQlLDQ5LjYxJSk7XG4gICAgLS1hY2NlbnQtYnJvd24tNDAwOiBoc2woMzMuMDQsODQuOTUlLDM2LjQ3JSk7XG4gICAgLS1hY2NlbnQtYnJvd24tNTAwOiBoc2woMzEuNDksODAuOCUsNzUuNDklKTtcbiAgICAtLWFjY2VudC1icm93bi02MDA6IGhzbCgzMS40OSw4MC44JSw3NS40OSUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTEwMDogaHNsYSgxMjYuMzgsNjUuNTclLDQ3Ljg0JSwwLjIpO1xuICAgIC0tYWNjZW50LWdyZWVuLTIwMDogaHNsYSgxMjYuMzgsNjUuNTclLDQ3Ljg0JSwwLjQ1KTtcbiAgICAtLWFjY2VudC1ncmVlbi0zMDA6IGhzbCgxMjcuNjEsNzIuNDUlLDM4LjQzJSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tNDAwOiBoc2woMTMwLDg1LjE0JSwyOS4wMiUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTUwMDogaHNsKDEyNC43Nyw4MC43MyUsNTcuMjUlKTtcbiAgICAtLWFjY2VudC1ncmVlbi02MDA6IGhzbCgxMjQuNzcsODAuNzMlLDU3LjI1JSk7XG4gICAgLS1hY2NlbnQtdGVhbC0xMDA6IGhzbGEoMTc4LjI5LDgxLjQlLDQyLjE2JSwwLjIpO1xuICAgIC0tYWNjZW50LXRlYWwtMjAwOiBoc2xhKDE3OC4yOSw4MS40JSw0Mi4xNiUsMC40NSk7XG4gICAgLS1hY2NlbnQtdGVhbC0zMDA6IGhzbCgxODEuMjEsODIuMzIlLDM1LjQ5JSk7XG4gICAgLS1hY2NlbnQtdGVhbC00MDA6IGhzbCgxODQuMjIsODUuMzMlLDI5LjQxJSk7XG4gICAgLS1hY2NlbnQtdGVhbC01MDA6IGhzbCgxNzYuNzMsODAuMTYlLDQ5LjQxJSk7XG4gICAgLS1hY2NlbnQtdGVhbC02MDA6IGhzbCgxNzYuNzMsODAuMTYlLDQ5LjQxJSk7XG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjE2LjExLDgyLjQ4JSw3My4xNCUsMC4yKTtcbiAgICAtLWFjY2VudC1ibHVlLTIwMDogaHNsYSgyMTYuMTEsODIuNDglLDczLjE0JSwwLjQ1KTtcbiAgICAtLWFjY2VudC1ibHVlLTMwMDogaHNsKDIxOC44Miw4NC41MyUsNjQuNTElKTtcbiAgICAtLWFjY2VudC1ibHVlLTQwMDogaHNsKDIyMC4yMSw4NC44OSUsNTUuODglKTtcbiAgICAtLWFjY2VudC1ibHVlLTUwMDogaHNsKDIxMS4yLDgwLjY1JSw4MS43NiUpO1xuICAgIC0tYWNjZW50LWJsdWUtNjAwOiBoc2woMjExLjIsODAuNjUlLDgxLjc2JSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzYuNDMsODIuMzUlLDgwJSwwLjIpO1xuICAgIC0tYWNjZW50LWluZGlnby0yMDA6IGhzbGEoMjM2LjQzLDgyLjM1JSw4MCUsMC40NSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTMwMDogaHNsKDIzOC40Miw4My44MiUsNzMuMzMlKTtcbiAgICAtLWFjY2VudC1pbmRpZ28tNDAwOiBoc2woMjQwLDg0LjYyJSw2Ni44NiUpO1xuICAgIC0tYWNjZW50LWluZGlnby01MDA6IGhzbCgyMzEuMjcsNzkuNzElLDg2LjQ3JSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTYwMDogaHNsKDIzMS4yNyw3OS43MSUsODYuNDclKTtcbiAgICAtLWFjY2VudC12aW9sZXQtMTAwOiBoc2xhKDI1NS44Niw4Mi44NiUsNzkuNDElLDAuMik7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTIwMDogaHNsYSgyNTUuODYsODIuODYlLDc5LjQxJSwwLjQ1KTtcbiAgICAtLWFjY2VudC12aW9sZXQtMzAwOiBoc2woMjU4LjIsODQuNzIlLDcxLjc2JSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTQwMDogaHNsKDI1OS44Nyw4NC44NiUsNjMuNzMlKTtcbiAgICAtLWFjY2VudC12aW9sZXQtNTAwOiBoc2woMjQ5LjIzLDgxLjI1JSw4Ny40NSUpO1xuICAgIC0tYWNjZW50LXZpb2xldC02MDA6IGhzbCgyNDkuMjMsODEuMjUlLDg3LjQ1JSk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTEwMDogaHNsYSgyNzUuNzYsODMuMTklLDc2LjY3JSwwLjIpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0yMDA6IGhzbGEoMjc1Ljc2LDgzLjE5JSw3Ni42NyUsMC40NSk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTMwMDogaHNsKDI3OC42LDg0LjYyJSw2Ni44NiUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS00MDA6IGhzbCgyODAuMTEsODUuMzklLDU3LjA2JSk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTUwMDogaHNsKDI2OC4zNiw3OS43MSUsODYuNDclKTtcbiAgICAtLWFjY2VudC1wdXJwbGUtNjAwOiBoc2woMjY4LjM2LDc5LjcxJSw4Ni40NyUpO1xuICAgIC0tYWNjZW50LXBpbmstMTAwOiBoc2xhKDMzNS4xNCw3OS44NiUsNzIuNzUlLDAuMik7XG4gICAgLS1hY2NlbnQtcGluay0yMDA6IGhzbGEoMzM1LjE0LDc5Ljg2JSw3Mi43NSUsMC40NSk7XG4gICAgLS1hY2NlbnQtcGluay0zMDA6IGhzbCgzMzguMzksODAuOSUsNjAuOTglKTtcbiAgICAtLWFjY2VudC1waW5rLTQwMDogaHNsKDM0MC4wOSw4NC43NCUsNDguODIlKTtcbiAgICAtLWFjY2VudC1waW5rLTUwMDogaHNsKDMyNi41Niw3OS4yMiUsODQuOSUpO1xuICAgIC0tYWNjZW50LXBpbmstNjAwOiBoc2woMzI2LjU2LDc5LjIyJSw4NC45JSk7XG4gICAgLS10ZXh0LWJhc2UtNDAwOiBoc2xhKDAsMCUsMTAwJSwwLjQ1KTtcbiAgICAtLXRleHQtYmFzZS01MDA6IGhzbGEoMCwwJSwxMDAlLDAuNyk7XG4gICAgLS10ZXh0LWJhc2UtNjAwOiBoc2woMCwwJSwxMDAlKTtcbiAgICAtLXRleHQtYmFzZS1hY3Rpb246IHZhcigtLXByaW1hcnktNTAwKTtcbiAgICAtLXRleHQtYmFzZS1pbmZvOiB2YXIoLS1pbmZvLTUwMCk7XG4gICAgLS10ZXh0LWJhc2Utc3VjY2VzczogdmFyKC0tc3VjY2Vzcy01MDApO1xuICAgIC0tdGV4dC1iYXNlLXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNTAwKTtcbiAgICAtLXRleHQtYmFzZS1kYW5nZXI6IHZhcigtLWRhbmdlci01MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC00MDA6IGhzbGEoMCwwJSwxMDAlLDAuNDUpO1xuICAgIC0tdGV4dC1jb250cmFzdC01MDA6IGhzbGEoMCwwJSwxMDAlLDAuNyk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTYwMDogaHNsKDAsMCUsMTAwJSk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LWFjdGlvbjogdmFyKC0tcHJpbWFyeS02MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC1pbmZvOiB2YXIoLS1pbmZvLTYwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LXN1Y2Nlc3M6IHZhcigtLXN1Y2Nlc3MtNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3Qtd2FybmluZzogdmFyKC0td2FybmluZy02MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC1kYW5nZXI6IHZhcigtLWRhbmdlci02MDApO1xuICAgIC0tYWx0LWJhc2UtMTAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4wOCk7XG4gICAgLS1hbHQtYmFzZS0yMDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjEyKTtcbiAgICAtLWFsdC1iYXNlLTMwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTYpO1xuICAgIC0tYWx0LWJhc2UtNDAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4yNCk7XG4gICAgLS1hbHQtYmFzZS01MDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjMyKTtcbiAgICAtLWFsdC1iYXNlLTYwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuNDQpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTEwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMDgpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTIwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTIpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTMwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTYpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTQwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMjQpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTUwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMzIpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTYwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuNDQpO1xuICAgIC0tdXRpbGl0eS13aGl0ZTogaHNsKDAsMCUsMTAwJSk7XG4gICAgLS11dGlsaXR5LWJsYWNrOiBoc2woMCwwJSwzLjkyJSk7XG4gICAgLS11dGlsaXR5LXRyYW5zcGFyZW50OiBoc2xhKDAsMCUsMCUsMCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTEwMDogaHNsYSgwLDAlLDAlLDAuMSk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTIwMDogaHNsYSgwLDAlLDAlLDAuMik7XG4gICAgLS11dGlsaXR5LXNoYWRlLTMwMDogaHNsYSgwLDAlLDAlLDAuMyk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTQwMDogaHNsYSgwLDAlLDAlLDAuNCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTUwMDogaHNsYSgwLDAlLDAlLDAuNSk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTYwMDogaHNsYSgwLDAlLDAlLDAuNik7XG4gICAgLS11dGlsaXR5LXRpbnQtMTAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4wOCk7XG4gICAgLS11dGlsaXR5LXRpbnQtMjAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4xMik7XG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4xNik7XG4gICAgLS11dGlsaXR5LXRpbnQtNDAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4yNCk7XG4gICAgLS11dGlsaXR5LXRpbnQtNTAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4zMik7XG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC40NCk7XG4gICAgLS1wcmltYXJ5LTEwMDogdmFyKC0tYWNjZW50LWJsdWUtMTAwKTtcbiAgICAtLXByaW1hcnktMjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0yMDApO1xuICAgIC0tcHJpbWFyeS0zMDA6IHZhcigtLWFjY2VudC1ibHVlLTMwMCk7XG4gICAgLS1wcmltYXJ5LTQwMDogdmFyKC0tYWNjZW50LWJsdWUtNDAwKTtcbiAgICAtLXByaW1hcnktNTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS01MDApO1xuICAgIC0tcHJpbWFyeS02MDA6IHZhcigtLWFjY2VudC1ibHVlLTYwMCk7XG4gICAgLS1pbmZvLTEwMDogdmFyKC0tYWNjZW50LXRlYWwtMTAwKTtcbiAgICAtLWluZm8tMjAwOiB2YXIoLS1hY2NlbnQtdGVhbC0yMDApO1xuICAgIC0taW5mby0zMDA6IHZhcigtLWFjY2VudC10ZWFsLTMwMCk7XG4gICAgLS1pbmZvLTQwMDogdmFyKC0tYWNjZW50LXRlYWwtNDAwKTtcbiAgICAtLWluZm8tNTAwOiB2YXIoLS1hY2NlbnQtdGVhbC01MDApO1xuICAgIC0taW5mby02MDA6IHZhcigtLWFjY2VudC10ZWFsLTYwMCk7XG4gICAgLS1zdWNjZXNzLTEwMDogdmFyKC0tYWNjZW50LWdyZWVuLTEwMCk7XG4gICAgLS1zdWNjZXNzLTIwMDogdmFyKC0tYWNjZW50LWdyZWVuLTIwMCk7XG4gICAgLS1zdWNjZXNzLTMwMDogdmFyKC0tYWNjZW50LWdyZWVuLTMwMCk7XG4gICAgLS1zdWNjZXNzLTQwMDogdmFyKC0tYWNjZW50LWdyZWVuLTQwMCk7XG4gICAgLS1zdWNjZXNzLTUwMDogdmFyKC0tYWNjZW50LWdyZWVuLTUwMCk7XG4gICAgLS1zdWNjZXNzLTYwMDogdmFyKC0tYWNjZW50LWdyZWVuLTYwMCk7XG4gICAgLS13YXJuaW5nLTEwMDogdmFyKC0tYWNjZW50LWFtYmVyLTEwMCk7XG4gICAgLS13YXJuaW5nLTIwMDogdmFyKC0tYWNjZW50LWFtYmVyLTIwMCk7XG4gICAgLS13YXJuaW5nLTMwMDogdmFyKC0tYWNjZW50LWFtYmVyLTMwMCk7XG4gICAgLS13YXJuaW5nLTQwMDogdmFyKC0tYWNjZW50LWFtYmVyLTQwMCk7XG4gICAgLS13YXJuaW5nLTUwMDogdmFyKC0tYWNjZW50LWFtYmVyLTUwMCk7XG4gICAgLS13YXJuaW5nLTYwMDogdmFyKC0tYWNjZW50LWFtYmVyLTYwMCk7XG4gICAgLS1kYW5nZXItMTAwOiB2YXIoLS1hY2NlbnQtcmVkLTEwMCk7XG4gICAgLS1kYW5nZXItMjAwOiB2YXIoLS1hY2NlbnQtcmVkLTIwMCk7XG4gICAgLS1kYW5nZXItMzAwOiB2YXIoLS1hY2NlbnQtcmVkLTMwMCk7XG4gICAgLS1kYW5nZXItNDAwOiB2YXIoLS1hY2NlbnQtcmVkLTQwMCk7XG4gICAgLS1kYW5nZXItNTAwOiB2YXIoLS1hY2NlbnQtcmVkLTUwMCk7XG4gICAgLS1kYW5nZXItNjAwOiB2YXIoLS1hY2NlbnQtcmVkLTYwMCk7XG4gICAgLS1maWxsLWJhc2UtMTAwOiBoc2woMTgwLDEuNDElLDEzLjkyJSk7XG4gICAgLS1maWxsLWJhc2UtMjAwOiBoc2woMTgwLDEuNjQlLDExLjk2JSk7XG4gICAgLS1maWxsLWJhc2UtMzAwOiBoc2woMTgwLDEuOTYlLDEwJSk7XG4gICAgLS1maWxsLWJhc2UtNDAwOiBoc2woMTgwLDIuNDQlLDguMDQlKTtcbiAgICAtLWZpbGwtYmFzZS01MDA6IGhzbCgwLDAlLDUuODglKTtcbiAgICAtLWZpbGwtYmFzZS02MDA6IGhzbCgwLDAlLDMuOTIlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtMTAwOiBoc2woMTgwLDAuODElLDI0LjEyJSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTIwMDogaHNsKDI0MCwwLjg4JSwyMi4xNiUpO1xuICAgIC0tZmlsbC1jb250cmFzdC0zMDA6IGhzbCgwLDAlLDIwJSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTQwMDogaHNsKDAsMCUsMTguMDQlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNTAwOiBoc2woMTgwLDEuMjMlLDE1Ljg4JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwxLjQxJSwxMy45MiUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtMTAwOiBoc2woMjQwLDAuODglLDIyLjE2JSk7XG4gICAgLS1zdHJva2UtYmFzZS0yMDA6IGhzbCgxODAsMC43OSUsMjQuOSUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtMzAwOiBoc2woMTgwLDAuNjglLDI4LjgyJSk7XG4gICAgLS1zdHJva2UtYmFzZS00MDA6IGhzbCgxODAsMC41OCUsMzMuOTIlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTUwMDogaHNsKDIxMCwwLjk4JSw0MCUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMjEwLDAuODMlLDQ3LjA2JSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtMTAwOiBoc2woMTgwLDAuNyUsMjguMDQlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0yMDA6IGhzbCgxODAsMC42NSUsMzAlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsMC41OSUsMzMuMTQlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC00MDA6IGhzbCgxODAsMC41NSUsMzUuODglKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC01MDA6IGhzbCgxODAsMC41JSwzOS4wMiUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwwLjQ0JSw0NC45JSk7XG59XG5cbltkYXRhLXJhZGlpPWNvbXBhY3RdLFxuLnJhZGlpLWNvbXBhY3Qge1xuICAgIC0tcmFkaWktbm9uZTogMHB4O1xuICAgIC0tcmFkaWktc206IDNweDtcbiAgICAtLXJhZGlpLWJhc2U6IDRweDtcbiAgICAtLXJhZGlpLW1kOiA2cHg7XG4gICAgLS1yYWRpaS1sZzogOXB4O1xuICAgIC0tcmFkaWkteGw6IDEzcHg7XG4gICAgLS1yYWRpaS14bDI6IDIwcHg7XG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XG59XG5cbltkYXRhLXJhZGlpPWJhc2VdLFxuLnJhZGlpLWJhc2Uge1xuICAgIC0tcmFkaWktbm9uZTogMHB4O1xuICAgIC0tcmFkaWktc206IDQuNXB4O1xuICAgIC0tcmFkaWktYmFzZTogNnB4O1xuICAgIC0tcmFkaWktbWQ6IDlweDtcbiAgICAtLXJhZGlpLWxnOiAxMnB4O1xuICAgIC0tcmFkaWkteGw6IDE2cHg7XG4gICAgLS1yYWRpaS14bDI6IDIycHg7XG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XG59XG5cbltkYXRhLXJhZGlpPWxhcmdlXSxcbi5yYWRpaS1sYXJnZSB7XG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XG4gICAgLS1yYWRpaS1zbTogNnB4O1xuICAgIC0tcmFkaWktYmFzZTogOHB4O1xuICAgIC0tcmFkaWktbWQ6IDEycHg7XG4gICAgLS1yYWRpaS1sZzogMTZweDtcbiAgICAtLXJhZGlpLXhsOiAyNHB4O1xuICAgIC0tcmFkaWkteGwyOiA0MHB4O1xuICAgIC0tcmFkaWktcm91bmQ6IDk5OXB4O1xufVxuXG5bZGF0YS1zcGFjaW5nPWNvbXBhY3RdLFxuLnNwYWNpbmctY29tcGFjdCB7XG4gICAgLS1zcGFjaW5nLXhzNDogMnB4O1xuICAgIC0tc3BhY2luZy14czM6IDRweDtcbiAgICAtLXNwYWNpbmcteHMyOiA2cHg7XG4gICAgLS1zcGFjaW5nLXhzOiA4cHg7XG4gICAgLS1zcGFjaW5nLXNtOiAxMnB4O1xuICAgIC0tc3BhY2luZy1iYXNlOiAxNnB4O1xuICAgIC0tc3BhY2luZy1tZDogMjBweDtcbiAgICAtLXNwYWNpbmctbGc6IDI0cHg7XG4gICAgLS1zcGFjaW5nLXhsOiAyOHB4O1xuICAgIC0tc3BhY2luZy14bDI6IDMycHg7XG4gICAgLS1zcGFjaW5nLXhsMzogNDBweDtcbiAgICAtLXNwYWNpbmcteGw0OiA0OHB4O1xuICAgIC0tc3BhY2luZy14bDU6IDYwcHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzNDogMXB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czM6IDJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMyOiA0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzOiA2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiA4cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWJhc2U6IDEycHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAxNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci1sZzogMjBweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGw6IDI0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMjhweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwzOiAzNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDQ6IDQ0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNTZweDtcbn1cblxuW2RhdGEtc3BhY2luZz1iYXNlXSxcbi5zcGFjaW5nLWJhc2Uge1xuICAgIC0tc3BhY2luZy14czQ6IDRweDtcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XG4gICAgLS1zcGFjaW5nLXhzMjogOHB4O1xuICAgIC0tc3BhY2luZy14czogMTJweDtcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XG4gICAgLS1zcGFjaW5nLWJhc2U6IDIwcHg7XG4gICAgLS1zcGFjaW5nLW1kOiAyNHB4O1xuICAgIC0tc3BhY2luZy1sZzogMjhweDtcbiAgICAtLXNwYWNpbmcteGw6IDMycHg7XG4gICAgLS1zcGFjaW5nLXhsMjogNDBweDtcbiAgICAtLXNwYWNpbmcteGwzOiA0OHB4O1xuICAgIC0tc3BhY2luZy14bDQ6IDYwcHg7XG4gICAgLS1zcGFjaW5nLXhsNTogNzJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMzogNHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czI6IDZweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDhweDtcbiAgICAtLXNwYWNpbmctbWlub3Itc206IDEycHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWJhc2U6IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAyMHB4O1xuICAgIC0tc3BhY2luZy1taW5vci1sZzogMjRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGw6IDI4cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMzZweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwzOiA0NHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDQ6IDU2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNjhweDtcbn1cblxuW2RhdGEtc3BhY2luZz1sYXJnZV0sXG4uc3BhY2luZy1sYXJnZSB7XG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xuICAgIC0tc3BhY2luZy14czM6IDhweDtcbiAgICAtLXNwYWNpbmcteHMyOiAxMnB4O1xuICAgIC0tc3BhY2luZy14czogMTZweDtcbiAgICAtLXNwYWNpbmctc206IDIwcHg7XG4gICAgLS1zcGFjaW5nLWJhc2U6IDI0cHg7XG4gICAgLS1zcGFjaW5nLW1kOiAyOHB4O1xuICAgIC0tc3BhY2luZy1sZzogMzZweDtcbiAgICAtLXNwYWNpbmcteGw6IDQ0cHg7XG4gICAgLS1zcGFjaW5nLXhsMjogNTJweDtcbiAgICAtLXNwYWNpbmcteGwzOiA2NHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czQ6IDJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMzOiA0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogOHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3Itc206IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWJhc2U6IDIwcHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAyNHB4O1xuICAgIC0tc3BhY2luZy1taW5vci1sZzogMzJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGw6IDQwcHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogNDhweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwzOiA2MHB4O1xufVxuXG5bZGF0YS1zcGFjaW5nPXRvdWNoXSxcbi5zcGFjaW5nLXRvdWNoIHtcbiAgICAtLXNwYWNpbmcteHM0OiA0cHg7XG4gICAgLS1zcGFjaW5nLXhzMzogNnB4O1xuICAgIC0tc3BhY2luZy14czI6IDhweDtcbiAgICAtLXNwYWNpbmcteHM6IDEycHg7XG4gICAgLS1zcGFjaW5nLXNtOiAxNnB4O1xuICAgIC0tc3BhY2luZy1iYXNlOiAxNnB4O1xuICAgIC0tc3BhY2luZy1tZDogMTZweDtcbiAgICAtLXNwYWNpbmctbGc6IDIwcHg7XG4gICAgLS1zcGFjaW5nLXhsOiAyNHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czQ6IDJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMzOiA0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czogOHB4O1xuICAgIC0tc3BhY2luZy1taW5vci1zbTogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3ItbWQ6IDEycHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAxNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDogMjBweDtcbn1cblxuW2RhdGEtdHlwb2dyYXBoeT1jb21wYWN0XSxcbi50eXBvZ3JhcGh5LWNvbXBhY3Qge1xuICAgIC0tZm9udC1zaXplLXhzMjogMTBweDtcbiAgICAtLWZvbnQtc2l6ZS14czogMTFweDtcbiAgICAtLWZvbnQtc2l6ZS1zbTogMTJweDtcbiAgICAtLWZvbnQtc2l6ZS1iYXNlOiAxM3B4O1xuICAgIC0tZm9udC1zaXplLW1kOiAxNnB4O1xuICAgIC0tZm9udC1zaXplLWxnOiAxOXB4O1xuICAgIC0tZm9udC1zaXplLXhsOiAyMnB4O1xuICAgIC0tZm9udC1zaXplLXhsMjogMjdweDtcbiAgICAtLWZvbnQtc2l6ZS14bDM6IDMycHg7XG4gICAgLS1mb250LXNpemUteGw0OiAzOXB4O1xuICAgIC0tZm9udC1zaXplLXhsNTogNDdweDtcbiAgICAtLWZvbnQtc2l6ZS14bDY6IDU2cHg7XG4gICAgLS1mb250LXNpemUteGw3OiA2N3B4O1xuICAgIC0tbGluZS1oZWlnaHQteHMyOiAxMHB4O1xuICAgIC0tbGluZS1oZWlnaHQteHM6IDEycHg7XG4gICAgLS1saW5lLWhlaWdodC1zbTogMTRweDtcbiAgICAtLWxpbmUtaGVpZ2h0LWJhc2U6IDE2cHg7XG4gICAgLS1saW5lLWhlaWdodC1tZDogMjBweDtcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAyNHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw6IDI4cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDI6IDMycHg7XG4gICAgLS1saW5lLWhlaWdodC14bDM6IDQwcHg7XG4gICAgLS1saW5lLWhlaWdodC14bDQ6IDQ0cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDU6IDUycHg7XG4gICAgLS1saW5lLWhlaWdodC14bDY6IDYwcHg7XG4gICAgLS1saW5lLWhlaWdodC14bDc6IDc4cHg7XG4gICAgLS1sZXR0ZXItc3BhY2luZy0wOiAwJXB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctbGFiZWw6IDhweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTJweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWRpc3BsYXk6IDE2cHg7XG59XG5cbltkYXRhLXR5cG9ncmFwaHk9YmFzZV0sXG4udHlwb2dyYXBoeS1iYXNlIHtcbiAgICAtLWZvbnQtc2l6ZS14czI6IDEwcHg7XG4gICAgLS1mb250LXNpemUteHM6IDExcHg7XG4gICAgLS1mb250LXNpemUtc206IDEzcHg7XG4gICAgLS1mb250LXNpemUtYmFzZTogMTVweDtcbiAgICAtLWZvbnQtc2l6ZS1tZDogMThweDtcbiAgICAtLWZvbnQtc2l6ZS1sZzogMjJweDtcbiAgICAtLWZvbnQtc2l6ZS14bDogMjZweDtcbiAgICAtLWZvbnQtc2l6ZS14bDI6IDMxcHg7XG4gICAgLS1mb250LXNpemUteGwzOiAzN3B4O1xuICAgIC0tZm9udC1zaXplLXhsNDogNDVweDtcbiAgICAtLWZvbnQtc2l6ZS14bDU6IDU0cHg7XG4gICAgLS1mb250LXNpemUteGw2OiA2NHB4O1xuICAgIC0tZm9udC1zaXplLXhsNzogNzdweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhzMjogMTJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhzOiAxNHB4O1xuICAgIC0tbGluZS1oZWlnaHQtc206IDE2cHg7XG4gICAgLS1saW5lLWhlaWdodC1iYXNlOiAyMHB4O1xuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDI0cHg7XG4gICAgLS1saW5lLWhlaWdodC1sZzogMjhweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsOiAzMnB4O1xuICAgIC0tbGluZS1oZWlnaHQteGwyOiAzNnB4O1xuICAgIC0tbGluZS1oZWlnaHQteGwzOiA0NHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw0OiA0OHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw1OiA2MHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw2OiA3MnB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw3OiA4NnB4O1xuICAgIC0tbGV0dGVyLXNwYWNpbmctMDogMCVweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWxhYmVsOiAxMnB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctcGFyYWdyYXBoOiAxNnB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctZGlzcGxheTogMjBweDtcbn1cblxuW2RhdGEtdHlwb2dyYXBoeT1sYXJnZV0sXG4udHlwb2dyYXBoeS1sYXJnZSB7XG4gICAgLS1mb250LXNpemUteHMyOiAxMXB4O1xuICAgIC0tZm9udC1zaXplLXhzOiAxMnB4O1xuICAgIC0tZm9udC1zaXplLXNtOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLWJhc2U6IDE3cHg7XG4gICAgLS1mb250LXNpemUtbWQ6IDIwcHg7XG4gICAgLS1mb250LXNpemUtbGc6IDI0cHg7XG4gICAgLS1mb250LXNpemUteGw6IDI5cHg7XG4gICAgLS1mb250LXNpemUteGwyOiAzNXB4O1xuICAgIC0tZm9udC1zaXplLXhsMzogNDJweDtcbiAgICAtLWZvbnQtc2l6ZS14bDQ6IDUxcHg7XG4gICAgLS1mb250LXNpemUteGw1OiA2MXB4O1xuICAgIC0tZm9udC1zaXplLXhsNjogNzNweDtcbiAgICAtLWZvbnQtc2l6ZS14bDc6IDg4cHg7XG4gICAgLS1saW5lLWhlaWdodC14czI6IDEycHg7XG4gICAgLS1saW5lLWhlaWdodC14czogMTZweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXNtOiAyMHB4O1xuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMjRweDtcbiAgICAtLWxpbmUtaGVpZ2h0LW1kOiAyOHB4O1xuICAgIC0tbGluZS1oZWlnaHQtbGc6IDMycHg7XG4gICAgLS1saW5lLWhlaWdodC14bDogMzRweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMjogNDBweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMzogNTJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNDogNTZweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNTogNjhweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNjogODBweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNzogOTZweDtcbiAgICAtLWxldHRlci1zcGFjaW5nLTA6IDAlcHg7XG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1sYWJlbDogMTJweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTZweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWRpc3BsYXk6IDIwcHg7XG59XG5cbltkYXRhLWljb25TaXplPWJhc2VdLFxuLmljb25TaXplLWJhc2Uge1xuICAgIC0taWNvbi1zaXplLXNtOiAxMnB4O1xuICAgIC0taWNvbi1zaXplLWJhc2U6IDE2cHg7XG4gICAgLS1pY29uLXNpemUtbWQ6IDI0cHg7XG4gICAgLS1pY29uLXNpemUtbGc6IDMycHg7XG4gICAgLS1pY29uLXNpemUteGw6IDQ4cHg7XG4gICAgLS1pY29uLXNpemUteGwyOiA2NHB4O1xuICAgIC0taWNvbi1zaXplLXhsMzogOTZweDtcbiAgICAtLWljb24tc2l6ZS14bDQ6IDEyOHB4O1xuICAgIC0taWNvbi1zaXplLXhsNTogMjU2cHg7XG59XG5cbltkYXRhLWljb25TaXplPXRvdWNoXSxcbi5pY29uU2l6ZS10b3VjaCB7XG4gICAgLS1pY29uLXNpemUtc206IDE2cHg7XG4gICAgLS1pY29uLXNpemUtYmFzZTogMjRweDtcbiAgICAtLWljb24tc2l6ZS1tZDogMzJweDtcbiAgICAtLWljb24tc2l6ZS1sZzogNDhweDtcbiAgICAtLWljb24tc2l6ZS14bDogNjRweDtcbiAgICAtLWljb24tc2l6ZS14bDI6IDk2cHg7XG4gICAgLS1pY29uLXNpemUteGwzOiAxMjhweDtcbiAgICAtLWljb24tc2l6ZS14bDQ6IDI1NnB4O1xuICAgIC0taWNvbi1zaXplLXhsNTogNTEycHg7XG59XG5cbjpyb290IHtcbiAgICAtLW9wYWNpdHktMDogMDtcbiAgICAtLW9wYWNpdHktNTogMC41O1xuICAgIC0tb3BhY2l0eS0xMDogMC4xO1xuICAgIC0tb3BhY2l0eS0xNTogMC4xNTtcbiAgICAtLW9wYWNpdHktMjA6IDAuMjtcbiAgICAtLW9wYWNpdHktMjU6IDAuMjU7XG4gICAgLS1vcGFjaXR5LTMwOiAwLjM7XG4gICAgLS1vcGFjaXR5LTM1OiAwLjM1O1xuICAgIC0tb3BhY2l0eS00MDogMC40O1xuICAgIC0tb3BhY2l0eS00NTogMC40NTtcbiAgICAtLW9wYWNpdHktNTA6IDAuNTtcbiAgICAtLW9wYWNpdHktNTU6IDAuNTU7XG4gICAgLS1vcGFjaXR5LTYwOiAwLjY7XG4gICAgLS1vcGFjaXR5LTY1OiAwLjY1O1xuICAgIC0tb3BhY2l0eS03MDogMC43O1xuICAgIC0tb3BhY2l0eS03NTogMC43NTtcbiAgICAtLW9wYWNpdHktODA6IDAuODtcbiAgICAtLW9wYWNpdHktODU6IDAuODU7XG4gICAgLS1vcGFjaXR5LTkwOiAwLjk7XG4gICAgLS1vcGFjaXR5LTk1OiAwLjk1O1xuICAgIC0tb3BhY2l0eS0xMDA6IDE7XG4gICAgLS1zaGFkb3ctMDogMHB4IDAuNzVweCAwLjVweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gICAgLS1zaGFkb3ctMTogMHB4IDFweCAycHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDJweCA0cHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXNoYWRvdy0yOiAwcHggMnB4IDRweCAtMnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggNHB4IDZweCAtMnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tc2hhZG93LTM6IDBweCA0cHggNnB4IC00cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAxMHB4IDE1cHggLTNweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXNoYWRvdy00OiAwcHggMTJweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXNoYWRvdy01OiAwcHggMjNweCAyOHB4IC03cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAxNnB4IDEwcHggLTdweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggNDhweCAtMTBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvc291cmNlLXZhcmlhYmxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnREFBZ0Q7SUFDaEQsK0NBQStDO0lBQy9DLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxvREFBb0Q7SUFDcEQsbURBQW1EO0lBQ25ELDZDQUE2QztJQUM3QywyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLDZDQUE2QztJQUM3QyxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxxREFBcUQ7SUFDckQsb0RBQW9EO0lBQ3BELDZDQUE2QztJQUM3Qyx5Q0FBeUM7SUFDekMsNkNBQTZDO0lBQzdDLDhDQUE4QztJQUM5QyxxREFBcUQ7SUFDckQsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUM1Qyx5Q0FBeUM7SUFDekMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5QyxxREFBcUQ7SUFDckQsb0RBQW9EO0lBQ3BELDZDQUE2QztJQUM3Qyw0Q0FBNEM7SUFDNUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5QyxtREFBbUQ7SUFDbkQsa0RBQWtEO0lBQ2xELDRDQUE0QztJQUM1Qyx1Q0FBdUM7SUFD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QUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBSWhCLHdEQUF3RDtJQUN4RCw4RkFBOEY7SUFDOUYsOEZBQThGO0lBQzlGLGdHQUFnRztJQUNoRyxrR0FBa0c7SUFDbEcsK0lBQStJO0FBUm5KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1hY2NlbnQtcmVkLTEwMDogaHNsYSgzLjg0LDg4LjY1JSw3Mi4zNSUsMC4xMjUpO1xcbiAgICAtLWFjY2VudC1yZWQtMjAwOiBoc2xhKDMuODQsODguNjUlLDcyLjM1JSwwLjMzKTtcXG4gICAgLS1hY2NlbnQtcmVkLTMwMDogaHNsKDQsODYuNTQlLDU5LjIyJSk7XFxuICAgIC0tYWNjZW50LXJlZC00MDA6IGhzbCg0LjA5LDEwMCUsNDYuMDglKTtcXG4gICAgLS1hY2NlbnQtcmVkLTUwMDogaHNsKDQuMTksOTkuMDglLDQyLjU1JSk7XFxuICAgIC0tYWNjZW50LXJlZC02MDA6IGhzbCgzLjQzLDk0LjU5JSw4NS40OSUpO1xcbiAgICAtLWFjY2VudC1hbWJlci0xMDA6IGhzbGEoMjQuNDQsNzYuMjclLDY1LjI5JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTIwMDogaHNsYSgyNC40NCw3Ni4yNyUsNjUuMjklLDAuMzMpO1xcbiAgICAtLWFjY2VudC1hbWJlci0zMDA6IGhzbCgyNC41OCw2OC4wMyUsNTIuMTYlKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjQuODUsMTAwJSwzOC44MiUpO1xcbiAgICAtLWFjY2VudC1hbWJlci01MDA6IGhzbCgyNSw5OC45JSwzNS42OSUpO1xcbiAgICAtLWFjY2VudC1hbWJlci02MDA6IGhzbCgyMy44OCw5NC41JSw3OC42MyUpO1xcbiAgICAtLWFjY2VudC1icm93bi0xMDA6IGhzbGEoMzEuODksNzEuODYlLDYwLjk4JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTIwMDogaHNsYSgzMS44OSw3MS44NiUsNjAuOTglLDAuMzMpO1xcbiAgICAtLWFjY2VudC1icm93bi0zMDA6IGhzbCgzMi42Myw2NS41NyUsNDcuODQlKTtcXG4gICAgLS1hY2NlbnQtYnJvd24tNDAwOiBoc2woMzIuODgsMTAwJSwzNC43MSUpO1xcbiAgICAtLWFjY2VudC1icm93bi01MDA6IGhzbCgzMy4xNyw5OC43NyUsMzEuOTYlKTtcXG4gICAgLS1hY2NlbnQtYnJvd24tNjAwOiBoc2woMzEuNDMsOTUuNDUlLDc0LjEyJSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTEwMDogaHNsYSgxMjYuMDMsOTYuMTQlLDQwLjU5JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTIwMDogaHNsYSgxMjYuMDMsOTYuMTQlLDQwLjU5JSwwLjMzKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tMzAwOiBoc2woMTI3Ljg2LDk3LjY3JSwzMy43MyUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi00MDA6IGhzbCgxMzAuMDcsMTAwJSwyNi44NiUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi01MDA6IGhzbCgxMzEuNTIsOTguNDMlLDI0LjklKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tNjAwOiBoc2woMTI0Ljk2LDk1LjA0JSw0Ny40NSUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTEwMDogaHNsYSgxNzguMTMsOTYuOTclLDM4LjgyJSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LXRlYWwtMjAwOiBoc2xhKDE3OC4xMyw5Ni45NyUsMzguODIlLDAuMzMpO1xcbiAgICAtLWFjY2VudC10ZWFsLTMwMDogaHNsKDE4MC43NCw5Ny42JSwzMi43NSUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTQwMDogaHNsKDE4My44NiwxMDAlLDI3LjQ1JSk7XFxuICAgIC0tYWNjZW50LXRlYWwtNTAwOiBoc2woMTg1LjkxLDk4LjUxJSwyNi4yNyUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTYwMDogaHNsKDE3Ni40OSw5NS42OSUsNDUuNDklKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjE2LjA5LDk4LjUyJSw3My41MyUsMC4xMjUpO1xcbiAgICAtLWFjY2VudC1ibHVlLTIwMDogaHNsYSgyMTYuMDksOTguNTIlLDczLjUzJSwwLjMzKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0zMDA6IGhzbCgyMTguMzEsOTguODglLDY0LjklKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS00MDA6IGhzbCgyMjAsMTAwJSw1Ni40NyUpO1xcbiAgICAtLWFjY2VudC1ibHVlLTUwMDogaHNsKDIyMy4wMSw5OC4yNiUsNTQuOSUpO1xcbiAgICAtLWFjY2VudC1ibHVlLTYwMDogaHNsKDIxMC42OCw5NS42NSUsODEuOTYlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzUuNTgsOTcuOTQlLDgwLjk4JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LWluZGlnby0yMDA6IGhzbGEoMjM1LjU4LDk3Ljk0JSw4MC45OCUsMC4zMyk7XFxuICAgIC0tYWNjZW50LWluZGlnby0zMDA6IGhzbCgyMzguNTcsOTguNDQlLDc0LjklKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTQwMDogaHNsKDI0MCwxMDAlLDY4LjgyJSk7XFxuICAgIC0tYWNjZW50LWluZGlnby01MDA6IGhzbCgyNDMuNzcsOTcuNzclLDY0LjklKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTYwMDogaHNsKDIzMC4zMiw5My45NCUsODcuMDYlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTEwMDogaHNsYSgyNTYuMDgsOTcuOTglLDgwLjU5JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LXZpb2xldC0yMDA6IGhzbGEoMjU2LjA4LDk3Ljk4JSw4MC41OSUsMC4zMyk7XFxuICAgIC0tYWNjZW50LXZpb2xldC0zMDA6IGhzbCgyNTguMzksMTAwJSw3My4xNCUpO1xcbiAgICAtLWFjY2VudC12aW9sZXQtNDAwOiBoc2woMjYwLDEwMCUsNjUuMjklKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTUwMDogaHNsKDI2My45NCw5Mi4zNCUsNTkuMDIlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTYwMDogaHNsKDI0OS40Nyw5Ni42MSUsODguNDMlKTtcXG4gICAgLS1hY2NlbnQtcHVycGxlLTEwMDogaHNsYSgyNzYuMjEsOTguMzElLDc2Ljg2JSwwLjEyNSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS0yMDA6IGhzbGEoMjc2LjIxLDk4LjMxJSw3Ni44NiUsMC4zMyk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS0zMDA6IGhzbCgyNzguNyw5OC44MyUsNjYuNDclKTtcXG4gICAgLS1hY2NlbnQtcHVycGxlLTQwMDogaHNsKDI4MC4wOSwxMDAlLDU2LjI3JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS01MDA6IGhzbCgyODMuMTEsODEuNzUlLDQ5LjQxJSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS02MDA6IGhzbCgyNjkuMDMsOTMuOTQlLDg3LjA2JSk7XFxuICAgIC0tYWNjZW50LXBpbmstMTAwOiBoc2xhKDMzNS4wNCw4OC42NSUsNzIuMzUlLDAuMTI1KTtcXG4gICAgLS1hY2NlbnQtcGluay0yMDA6IGhzbGEoMzM1LjA0LDg4LjY1JSw3Mi4zNSUsMC4zMyk7XFxuICAgIC0tYWNjZW50LXBpbmstMzAwOiBoc2woMzM4LjIxLDg1LjY1JSw1OS4wMiUpO1xcbiAgICAtLWFjY2VudC1waW5rLTQwMDogaHNsKDM0MCwxMDAlLDQ1Ljg4JSk7XFxuICAgIC0tYWNjZW50LXBpbmstNTAwOiBoc2woMzQzLjUzLDk5LjA4JSw0Mi41NSUpO1xcbiAgICAtLWFjY2VudC1waW5rLTYwMDogaHNsKDMyNi41Nyw5NC41OSUsODUuNDklKTtcXG4gICAgLS10ZXh0LWJhc2UtNDAwOiBoc2xhKDAsMCUsNS44OCUsMC40NSk7XFxuICAgIC0tdGV4dC1iYXNlLTUwMDogaHNsYSgwLDAlLDUuODglLDAuNjUpO1xcbiAgICAtLXRleHQtYmFzZS02MDA6IGhzbCgwLDAlLDUuODglKTtcXG4gICAgLS10ZXh0LWJhc2UtYWN0aW9uOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgIC0tdGV4dC1iYXNlLWluZm86IHZhcigtLWluZm8tNTAwKTtcXG4gICAgLS10ZXh0LWJhc2Utc3VjY2VzczogdmFyKC0tc3VjY2Vzcy01MDApO1xcbiAgICAtLXRleHQtYmFzZS13YXJuaW5nOiB2YXIoLS13YXJuaW5nLTUwMCk7XFxuICAgIC0tdGV4dC1iYXNlLWRhbmdlcjogdmFyKC0tZGFuZ2VyLTUwMCk7XFxuICAgIC0tdGV4dC1jb250cmFzdC00MDA6IGhzbGEoMCwwJSwxMDAlLDAuNDUpO1xcbiAgICAtLXRleHQtY29udHJhc3QtNTAwOiBoc2xhKDAsMCUsMTAwJSwwLjcpO1xcbiAgICAtLXRleHQtY29udHJhc3QtNjAwOiBoc2woMCwwJSwxMDAlKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LWFjdGlvbjogdmFyKC0tcHJpbWFyeS02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3QtaW5mbzogdmFyKC0taW5mby02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3Qtc3VjY2VzczogdmFyKC0tc3VjY2Vzcy02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3Qtd2FybmluZzogdmFyKC0td2FybmluZy02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3QtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNjAwKTtcXG4gICAgLS1hbHQtYmFzZS0xMDA6IGhzbGEoMTgwLDEwMCUsMTMuOTIlLDAuMDQpO1xcbiAgICAtLWFsdC1iYXNlLTIwMDogaHNsYSgxODAsMTAwJSwxMy45MiUsMC4wOCk7XFxuICAgIC0tYWx0LWJhc2UtMzAwOiBoc2xhKDE4MCwxMDAlLDEzLjkyJSwwLjE2KTtcXG4gICAgLS1hbHQtYmFzZS00MDA6IGhzbGEoMTgwLDEwMCUsMTMuOTIlLDAuMjQpO1xcbiAgICAtLWFsdC1iYXNlLTUwMDogaHNsYSgxODAsMTAwJSwxMy45MiUsMC4zMik7XFxuICAgIC0tYWx0LWJhc2UtNjAwOiBoc2xhKDE4MCwxMDAlLDEzLjkyJSwwLjQ0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMTAwOiBoc2xhKDAsMCUsMTAwJSwwLjA0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMjAwOiBoc2xhKDAsMCUsMTAwJSwwLjA4KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMzAwOiBoc2xhKDAsMCUsMTAwJSwwLjEyKTtcXG4gICAgLS1hbHQtY29udHJhc3QtNDAwOiBoc2xhKDAsMCUsMTAwJSwwLjE2KTtcXG4gICAgLS1hbHQtY29udHJhc3QtNTAwOiBoc2xhKDAsMCUsMTAwJSwwLjI0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtNjAwOiBoc2xhKDAsMCUsMTAwJSwwLjMyKTtcXG4gICAgLS11dGlsaXR5LXdoaXRlOiBoc2woMCwwJSwxMDAlKTtcXG4gICAgLS11dGlsaXR5LWJsYWNrOiBoc2woMCwwJSwzLjkyJSk7XFxuICAgIC0tdXRpbGl0eS10cmFuc3BhcmVudDogaHNsYSgwLDAlLDEwMCUsMCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS0xMDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4wNCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS0yMDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4wOCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS0zMDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4xNik7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS00MDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4yNCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS01MDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC4zMik7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS02MDA6IGhzbGEoMTgwLDEwMCUsOC4wNCUsMC40NCk7XFxuICAgIC0tdXRpbGl0eS10aW50LTEwMDogaHNsYSgwLDAlLDEwMCUsMC41KTtcXG4gICAgLS11dGlsaXR5LXRpbnQtMjAwOiBoc2xhKDAsMCUsMTAwJSwwLjYpO1xcbiAgICAtLXV0aWxpdHktdGludC0zMDA6IGhzbGEoMCwwJSwxMDAlLDAuNyk7XFxuICAgIC0tdXRpbGl0eS10aW50LTQwMDogaHNsYSgwLDAlLDEwMCUsMC44KTtcXG4gICAgLS11dGlsaXR5LXRpbnQtNTAwOiBoc2xhKDAsMCUsMTAwJSwwLjkpO1xcbiAgICAtLXV0aWxpdHktdGludC02MDA6IGhzbCgwLDAlLDEwMCUpO1xcbiAgICAtLXByaW1hcnktMTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0xMDApO1xcbiAgICAtLXByaW1hcnktMjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0yMDApO1xcbiAgICAtLXByaW1hcnktMzAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0zMDApO1xcbiAgICAtLXByaW1hcnktNDAwOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xcbiAgICAtLXByaW1hcnktNTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS01MDApO1xcbiAgICAtLXByaW1hcnktNjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS02MDApO1xcbiAgICAtLWluZm8tMTAwOiB2YXIoLS1hY2NlbnQtdGVhbC0xMDApO1xcbiAgICAtLWluZm8tMjAwOiB2YXIoLS1hY2NlbnQtdGVhbC0yMDApO1xcbiAgICAtLWluZm8tMzAwOiB2YXIoLS1hY2NlbnQtdGVhbC0zMDApO1xcbiAgICAtLWluZm8tNDAwOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xcbiAgICAtLWluZm8tNTAwOiB2YXIoLS1hY2NlbnQtdGVhbC01MDApO1xcbiAgICAtLWluZm8tNjAwOiB2YXIoLS1hY2NlbnQtdGVhbC02MDApO1xcbiAgICAtLXN1Y2Nlc3MtMTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMTAwKTtcXG4gICAgLS1zdWNjZXNzLTIwMDogdmFyKC0tYWNjZW50LWdyZWVuLTIwMCk7XFxuICAgIC0tc3VjY2Vzcy0zMDA6IHZhcigtLWFjY2VudC1ncmVlbi0zMDApO1xcbiAgICAtLXN1Y2Nlc3MtNDAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcXG4gICAgLS1zdWNjZXNzLTUwMDogdmFyKC0tYWNjZW50LWdyZWVuLTUwMCk7XFxuICAgIC0tc3VjY2Vzcy02MDA6IHZhcigtLWFjY2VudC1ncmVlbi02MDApO1xcbiAgICAtLXdhcm5pbmctMTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMTAwKTtcXG4gICAgLS13YXJuaW5nLTIwMDogdmFyKC0tYWNjZW50LWFtYmVyLTIwMCk7XFxuICAgIC0td2FybmluZy0zMDA6IHZhcigtLWFjY2VudC1hbWJlci0zMDApO1xcbiAgICAtLXdhcm5pbmctNDAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNDAwKTtcXG4gICAgLS13YXJuaW5nLTUwMDogdmFyKC0tYWNjZW50LWFtYmVyLTUwMCk7XFxuICAgIC0td2FybmluZy02MDA6IHZhcigtLWFjY2VudC1hbWJlci02MDApO1xcbiAgICAtLWRhbmdlci0xMDA6IHZhcigtLWFjY2VudC1yZWQtMTAwKTtcXG4gICAgLS1kYW5nZXItMjAwOiB2YXIoLS1hY2NlbnQtcmVkLTIwMCk7XFxuICAgIC0tZGFuZ2VyLTMwMDogdmFyKC0tYWNjZW50LXJlZC0zMDApO1xcbiAgICAtLWRhbmdlci00MDA6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcXG4gICAgLS1kYW5nZXItNTAwOiB2YXIoLS1hY2NlbnQtcmVkLTUwMCk7XFxuICAgIC0tZGFuZ2VyLTYwMDogdmFyKC0tYWNjZW50LXJlZC02MDApO1xcbiAgICAtLWZpbGwtYmFzZS0xMDA6IGhzbCgwLDAlLDEwMCUpO1xcbiAgICAtLWZpbGwtYmFzZS0yMDA6IGhzbCgwLDAlLDk4LjA0JSk7XFxuICAgIC0tZmlsbC1iYXNlLTMwMDogaHNsKDAsMCUsOTYuMDglKTtcXG4gICAgLS1maWxsLWJhc2UtNDAwOiBoc2woMCwwJSw5NC4xMiUpO1xcbiAgICAtLWZpbGwtYmFzZS01MDA6IGhzbCgxODAsMi40NCUsOTEuOTYlKTtcXG4gICAgLS1maWxsLWJhc2UtNjAwOiBoc2woMTgwLDEuNjQlLDg4LjA0JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC0xMDA6IGhzbCgxODAsMC44MSUsMjQuMTIlKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTIwMDogaHNsKDI0MCwwLjg4JSwyMi4xNiUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtMzAwOiBoc2woMCwwJSwyMCUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtNDAwOiBoc2woMCwwJSwxOC4wNCUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtNTAwOiBoc2woMTgwLDEuMjMlLDE1Ljg4JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC02MDA6IGhzbCgxODAsMS40MSUsMTMuOTIlKTtcXG4gICAgLS1zdHJva2UtYmFzZS0xMDA6IGhzbCgwLDAlLDkyLjk0JSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtMjAwOiBoc2woMTgwLDEuNjQlLDg4LjA0JSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtMzAwOiBoc2woMTgwLDEuMyUsODQuOSUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTQwMDogaHNsKDAsMCUsODAlKTtcXG4gICAgLS1zdHJva2UtYmFzZS01MDA6IGhzbCgxODAsMC42NSUsNzAlKTtcXG4gICAgLS1zdHJva2UtYmFzZS02MDA6IGhzbCgxODAsMC40MyUsNTMuOTIlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtMTAwOiBoc2woMTgwLDAuNyUsMjguMDQlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtMjAwOiBoc2woMTgwLDAuNjUlLDMwJSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTMwMDogaHNsKDE4MCwwLjU5JSwzMy4xNCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC00MDA6IGhzbCgxODAsMC41NSUsMzUuODglKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtNTAwOiBoc2woMTgwLDAuNSUsMzkuMDIlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtNjAwOiBoc2woMTgwLDAuNDQlLDQ0LjklKTtcXG59XFxuXFxuLmZpZ21hLWRhcmsge1xcbiAgICAtLWFjY2VudC1yZWQtMTAwOiBoc2xhKDQuMzIsNzkuODYlLDcyLjc1JSwwLjIpO1xcbiAgICAtLWFjY2VudC1yZWQtMjAwOiBoc2xhKDQuMzIsNzkuODYlLDcyLjc1JSwwLjQ1KTtcXG4gICAgLS1hY2NlbnQtcmVkLTMwMDogaHNsKDMuNzMsODAuOSUsNjAuOTglKTtcXG4gICAgLS1hY2NlbnQtcmVkLTQwMDogaHNsKDMuOTgsODQuNzQlLDQ4LjgyJSk7XFxuICAgIC0tYWNjZW50LXJlZC01MDA6IGhzbCgzLjkzLDc5LjIyJSw4NC45JSk7XFxuICAgIC0tYWNjZW50LXJlZC02MDA6IGhzbCgzLjkzLDc5LjIyJSw4NC45JSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTEwMDogaHNsYSgyNC4zMSw2Ny40NCUsNjYuMjclLDAuMik7XFxuICAgIC0tYWNjZW50LWFtYmVyLTIwMDogaHNsYSgyNC4zMSw2Ny40NCUsNjYuMjclLDAuNDUpO1xcbiAgICAtLWFjY2VudC1hbWJlci0zMDA6IGhzbCgyNC44Myw2MC42NyUsNTMuMTQlKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjUuMDMsODUuMzclLDQwLjIlKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItNTAwOiBoc2woMjMuNzIsODEuMTMlLDc5LjIyJSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTYwMDogaHNsKDIzLjcyLDgxLjEzJSw3OS4yMiUpO1xcbiAgICAtLWFjY2VudC1icm93bi0xMDA6IGhzbGEoMzIuNSw2Mi41JSw2Mi4zNSUsMC4yKTtcXG4gICAgLS1hY2NlbnQtYnJvd24tMjAwOiBoc2xhKDMyLjUsNjIuNSUsNjIuMzUlLDAuNDUpO1xcbiAgICAtLWFjY2VudC1icm93bi0zMDA6IGhzbCgzMi4zNyw1NC45NCUsNDkuNjElKTtcXG4gICAgLS1hY2NlbnQtYnJvd24tNDAwOiBoc2woMzMuMDQsODQuOTUlLDM2LjQ3JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTUwMDogaHNsKDMxLjQ5LDgwLjglLDc1LjQ5JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTYwMDogaHNsKDMxLjQ5LDgwLjglLDc1LjQ5JSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTEwMDogaHNsYSgxMjYuMzgsNjUuNTclLDQ3Ljg0JSwwLjIpO1xcbiAgICAtLWFjY2VudC1ncmVlbi0yMDA6IGhzbGEoMTI2LjM4LDY1LjU3JSw0Ny44NCUsMC40NSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTMwMDogaHNsKDEyNy42MSw3Mi40NSUsMzguNDMlKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tNDAwOiBoc2woMTMwLDg1LjE0JSwyOS4wMiUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi01MDA6IGhzbCgxMjQuNzcsODAuNzMlLDU3LjI1JSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTYwMDogaHNsKDEyNC43Nyw4MC43MyUsNTcuMjUlKTtcXG4gICAgLS1hY2NlbnQtdGVhbC0xMDA6IGhzbGEoMTc4LjI5LDgxLjQlLDQyLjE2JSwwLjIpO1xcbiAgICAtLWFjY2VudC10ZWFsLTIwMDogaHNsYSgxNzguMjksODEuNCUsNDIuMTYlLDAuNDUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTMwMDogaHNsKDE4MS4yMSw4Mi4zMiUsMzUuNDklKTtcXG4gICAgLS1hY2NlbnQtdGVhbC00MDA6IGhzbCgxODQuMjIsODUuMzMlLDI5LjQxJSk7XFxuICAgIC0tYWNjZW50LXRlYWwtNTAwOiBoc2woMTc2LjczLDgwLjE2JSw0OS40MSUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTYwMDogaHNsKDE3Ni43Myw4MC4xNiUsNDkuNDElKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjE2LjExLDgyLjQ4JSw3My4xNCUsMC4yKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0yMDA6IGhzbGEoMjE2LjExLDgyLjQ4JSw3My4xNCUsMC40NSk7XFxuICAgIC0tYWNjZW50LWJsdWUtMzAwOiBoc2woMjE4LjgyLDg0LjUzJSw2NC41MSUpO1xcbiAgICAtLWFjY2VudC1ibHVlLTQwMDogaHNsKDIyMC4yMSw4NC44OSUsNTUuODglKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS01MDA6IGhzbCgyMTEuMiw4MC42NSUsODEuNzYlKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS02MDA6IGhzbCgyMTEuMiw4MC42NSUsODEuNzYlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzYuNDMsODIuMzUlLDgwJSwwLjIpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tMjAwOiBoc2xhKDIzNi40Myw4Mi4zNSUsODAlLDAuNDUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tMzAwOiBoc2woMjM4LjQyLDgzLjgyJSw3My4zMyUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tNDAwOiBoc2woMjQwLDg0LjYyJSw2Ni44NiUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tNTAwOiBoc2woMjMxLjI3LDc5LjcxJSw4Ni40NyUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tNjAwOiBoc2woMjMxLjI3LDc5LjcxJSw4Ni40NyUpO1xcbiAgICAtLWFjY2VudC12aW9sZXQtMTAwOiBoc2xhKDI1NS44Niw4Mi44NiUsNzkuNDElLDAuMik7XFxuICAgIC0tYWNjZW50LXZpb2xldC0yMDA6IGhzbGEoMjU1Ljg2LDgyLjg2JSw3OS40MSUsMC40NSk7XFxuICAgIC0tYWNjZW50LXZpb2xldC0zMDA6IGhzbCgyNTguMiw4NC43MiUsNzEuNzYlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTQwMDogaHNsKDI1OS44Nyw4NC44NiUsNjMuNzMlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTUwMDogaHNsKDI0OS4yMyw4MS4yNSUsODcuNDUlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTYwMDogaHNsKDI0OS4yMyw4MS4yNSUsODcuNDUlKTtcXG4gICAgLS1hY2NlbnQtcHVycGxlLTEwMDogaHNsYSgyNzUuNzYsODMuMTklLDc2LjY3JSwwLjIpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtMjAwOiBoc2xhKDI3NS43Niw4My4xOSUsNzYuNjclLDAuNDUpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtMzAwOiBoc2woMjc4LjYsODQuNjIlLDY2Ljg2JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS00MDA6IGhzbCgyODAuMTEsODUuMzklLDU3LjA2JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS01MDA6IGhzbCgyNjguMzYsNzkuNzElLDg2LjQ3JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS02MDA6IGhzbCgyNjguMzYsNzkuNzElLDg2LjQ3JSk7XFxuICAgIC0tYWNjZW50LXBpbmstMTAwOiBoc2xhKDMzNS4xNCw3OS44NiUsNzIuNzUlLDAuMik7XFxuICAgIC0tYWNjZW50LXBpbmstMjAwOiBoc2xhKDMzNS4xNCw3OS44NiUsNzIuNzUlLDAuNDUpO1xcbiAgICAtLWFjY2VudC1waW5rLTMwMDogaHNsKDMzOC4zOSw4MC45JSw2MC45OCUpO1xcbiAgICAtLWFjY2VudC1waW5rLTQwMDogaHNsKDM0MC4wOSw4NC43NCUsNDguODIlKTtcXG4gICAgLS1hY2NlbnQtcGluay01MDA6IGhzbCgzMjYuNTYsNzkuMjIlLDg0LjklKTtcXG4gICAgLS1hY2NlbnQtcGluay02MDA6IGhzbCgzMjYuNTYsNzkuMjIlLDg0LjklKTtcXG4gICAgLS10ZXh0LWJhc2UtNDAwOiBoc2xhKDAsMCUsMTAwJSwwLjQ1KTtcXG4gICAgLS10ZXh0LWJhc2UtNTAwOiBoc2xhKDAsMCUsMTAwJSwwLjcpO1xcbiAgICAtLXRleHQtYmFzZS02MDA6IGhzbCgwLDAlLDEwMCUpO1xcbiAgICAtLXRleHQtYmFzZS1hY3Rpb246IHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgLS10ZXh0LWJhc2UtaW5mbzogdmFyKC0taW5mby01MDApO1xcbiAgICAtLXRleHQtYmFzZS1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTUwMCk7XFxuICAgIC0tdGV4dC1iYXNlLXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNTAwKTtcXG4gICAgLS10ZXh0LWJhc2UtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNTAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LTQwMDogaHNsYSgwLDAlLDEwMCUsMC40NSk7XFxuICAgIC0tdGV4dC1jb250cmFzdC01MDA6IGhzbGEoMCwwJSwxMDAlLDAuNyk7XFxuICAgIC0tdGV4dC1jb250cmFzdC02MDA6IGhzbCgwLDAlLDEwMCUpO1xcbiAgICAtLXRleHQtY29udHJhc3QtYWN0aW9uOiB2YXIoLS1wcmltYXJ5LTYwMCk7XFxuICAgIC0tdGV4dC1jb250cmFzdC1pbmZvOiB2YXIoLS1pbmZvLTYwMCk7XFxuICAgIC0tdGV4dC1jb250cmFzdC1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTYwMCk7XFxuICAgIC0tdGV4dC1jb250cmFzdC13YXJuaW5nOiB2YXIoLS13YXJuaW5nLTYwMCk7XFxuICAgIC0tdGV4dC1jb250cmFzdC1kYW5nZXI6IHZhcigtLWRhbmdlci02MDApO1xcbiAgICAtLWFsdC1iYXNlLTEwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMDgpO1xcbiAgICAtLWFsdC1iYXNlLTIwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTIpO1xcbiAgICAtLWFsdC1iYXNlLTMwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTYpO1xcbiAgICAtLWFsdC1iYXNlLTQwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMjQpO1xcbiAgICAtLWFsdC1iYXNlLTUwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMzIpO1xcbiAgICAtLWFsdC1iYXNlLTYwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuNDQpO1xcbiAgICAtLWFsdC1jb250cmFzdC0xMDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjA4KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMjAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4xMik7XFxuICAgIC0tYWx0LWNvbnRyYXN0LTMwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMTYpO1xcbiAgICAtLWFsdC1jb250cmFzdC00MDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjI0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtNTAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4zMik7XFxuICAgIC0tYWx0LWNvbnRyYXN0LTYwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuNDQpO1xcbiAgICAtLXV0aWxpdHktd2hpdGU6IGhzbCgwLDAlLDEwMCUpO1xcbiAgICAtLXV0aWxpdHktYmxhY2s6IGhzbCgwLDAlLDMuOTIlKTtcXG4gICAgLS11dGlsaXR5LXRyYW5zcGFyZW50OiBoc2xhKDAsMCUsMCUsMCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS0xMDA6IGhzbGEoMCwwJSwwJSwwLjEpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtMjAwOiBoc2xhKDAsMCUsMCUsMC4yKTtcXG4gICAgLS11dGlsaXR5LXNoYWRlLTMwMDogaHNsYSgwLDAlLDAlLDAuMyk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS00MDA6IGhzbGEoMCwwJSwwJSwwLjQpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtNTAwOiBoc2xhKDAsMCUsMCUsMC41KTtcXG4gICAgLS11dGlsaXR5LXNoYWRlLTYwMDogaHNsYSgwLDAlLDAlLDAuNik7XFxuICAgIC0tdXRpbGl0eS10aW50LTEwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMDgpO1xcbiAgICAtLXV0aWxpdHktdGludC0yMDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjEyKTtcXG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC4xNik7XFxuICAgIC0tdXRpbGl0eS10aW50LTQwMDogaHNsYSgxODAsMS43OSUsNzguMDQlLDAuMjQpO1xcbiAgICAtLXV0aWxpdHktdGludC01MDA6IGhzbGEoMTgwLDEuNzklLDc4LjA0JSwwLjMyKTtcXG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2xhKDE4MCwxLjc5JSw3OC4wNCUsMC40NCk7XFxuICAgIC0tcHJpbWFyeS0xMDA6IHZhcigtLWFjY2VudC1ibHVlLTEwMCk7XFxuICAgIC0tcHJpbWFyeS0yMDA6IHZhcigtLWFjY2VudC1ibHVlLTIwMCk7XFxuICAgIC0tcHJpbWFyeS0zMDA6IHZhcigtLWFjY2VudC1ibHVlLTMwMCk7XFxuICAgIC0tcHJpbWFyeS00MDA6IHZhcigtLWFjY2VudC1ibHVlLTQwMCk7XFxuICAgIC0tcHJpbWFyeS01MDA6IHZhcigtLWFjY2VudC1ibHVlLTUwMCk7XFxuICAgIC0tcHJpbWFyeS02MDA6IHZhcigtLWFjY2VudC1ibHVlLTYwMCk7XFxuICAgIC0taW5mby0xMDA6IHZhcigtLWFjY2VudC10ZWFsLTEwMCk7XFxuICAgIC0taW5mby0yMDA6IHZhcigtLWFjY2VudC10ZWFsLTIwMCk7XFxuICAgIC0taW5mby0zMDA6IHZhcigtLWFjY2VudC10ZWFsLTMwMCk7XFxuICAgIC0taW5mby00MDA6IHZhcigtLWFjY2VudC10ZWFsLTQwMCk7XFxuICAgIC0taW5mby01MDA6IHZhcigtLWFjY2VudC10ZWFsLTUwMCk7XFxuICAgIC0taW5mby02MDA6IHZhcigtLWFjY2VudC10ZWFsLTYwMCk7XFxuICAgIC0tc3VjY2Vzcy0xMDA6IHZhcigtLWFjY2VudC1ncmVlbi0xMDApO1xcbiAgICAtLXN1Y2Nlc3MtMjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMjAwKTtcXG4gICAgLS1zdWNjZXNzLTMwMDogdmFyKC0tYWNjZW50LWdyZWVuLTMwMCk7XFxuICAgIC0tc3VjY2Vzcy00MDA6IHZhcigtLWFjY2VudC1ncmVlbi00MDApO1xcbiAgICAtLXN1Y2Nlc3MtNTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNTAwKTtcXG4gICAgLS1zdWNjZXNzLTYwMDogdmFyKC0tYWNjZW50LWdyZWVuLTYwMCk7XFxuICAgIC0td2FybmluZy0xMDA6IHZhcigtLWFjY2VudC1hbWJlci0xMDApO1xcbiAgICAtLXdhcm5pbmctMjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMjAwKTtcXG4gICAgLS13YXJuaW5nLTMwMDogdmFyKC0tYWNjZW50LWFtYmVyLTMwMCk7XFxuICAgIC0td2FybmluZy00MDA6IHZhcigtLWFjY2VudC1hbWJlci00MDApO1xcbiAgICAtLXdhcm5pbmctNTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNTAwKTtcXG4gICAgLS13YXJuaW5nLTYwMDogdmFyKC0tYWNjZW50LWFtYmVyLTYwMCk7XFxuICAgIC0tZGFuZ2VyLTEwMDogdmFyKC0tYWNjZW50LXJlZC0xMDApO1xcbiAgICAtLWRhbmdlci0yMDA6IHZhcigtLWFjY2VudC1yZWQtMjAwKTtcXG4gICAgLS1kYW5nZXItMzAwOiB2YXIoLS1hY2NlbnQtcmVkLTMwMCk7XFxuICAgIC0tZGFuZ2VyLTQwMDogdmFyKC0tYWNjZW50LXJlZC00MDApO1xcbiAgICAtLWRhbmdlci01MDA6IHZhcigtLWFjY2VudC1yZWQtNTAwKTtcXG4gICAgLS1kYW5nZXItNjAwOiB2YXIoLS1hY2NlbnQtcmVkLTYwMCk7XFxuICAgIC0tZmlsbC1iYXNlLTEwMDogaHNsKDE4MCwxLjQxJSwxMy45MiUpO1xcbiAgICAtLWZpbGwtYmFzZS0yMDA6IGhzbCgxODAsMS42NCUsMTEuOTYlKTtcXG4gICAgLS1maWxsLWJhc2UtMzAwOiBoc2woMTgwLDEuOTYlLDEwJSk7XFxuICAgIC0tZmlsbC1iYXNlLTQwMDogaHNsKDE4MCwyLjQ0JSw4LjA0JSk7XFxuICAgIC0tZmlsbC1iYXNlLTUwMDogaHNsKDAsMCUsNS44OCUpO1xcbiAgICAtLWZpbGwtYmFzZS02MDA6IGhzbCgwLDAlLDMuOTIlKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTEwMDogaHNsKDE4MCwwLjgxJSwyNC4xMiUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtMjAwOiBoc2woMjQwLDAuODglLDIyLjE2JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC0zMDA6IGhzbCgwLDAlLDIwJSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC00MDA6IGhzbCgwLDAlLDE4LjA0JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC01MDA6IGhzbCgxODAsMS4yMyUsMTUuODglKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwxLjQxJSwxMy45MiUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTEwMDogaHNsKDI0MCwwLjg4JSwyMi4xNiUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTIwMDogaHNsKDE4MCwwLjc5JSwyNC45JSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtMzAwOiBoc2woMTgwLDAuNjglLDI4LjgyJSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtNDAwOiBoc2woMTgwLDAuNTglLDMzLjkyJSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtNTAwOiBoc2woMjEwLDAuOTglLDQwJSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMjEwLDAuODMlLDQ3LjA2JSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTEwMDogaHNsKDE4MCwwLjclLDI4LjA0JSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTIwMDogaHNsKDE4MCwwLjY1JSwzMCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsMC41OSUsMzMuMTQlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtNDAwOiBoc2woMTgwLDAuNTUlLDM1Ljg4JSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTUwMDogaHNsKDE4MCwwLjUlLDM5LjAyJSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwwLjQ0JSw0NC45JSk7XFxufVxcblxcbltkYXRhLXJhZGlpPWNvbXBhY3RdLFxcbi5yYWRpaS1jb21wYWN0IHtcXG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XFxuICAgIC0tcmFkaWktc206IDNweDtcXG4gICAgLS1yYWRpaS1iYXNlOiA0cHg7XFxuICAgIC0tcmFkaWktbWQ6IDZweDtcXG4gICAgLS1yYWRpaS1sZzogOXB4O1xcbiAgICAtLXJhZGlpLXhsOiAxM3B4O1xcbiAgICAtLXJhZGlpLXhsMjogMjBweDtcXG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XFxufVxcblxcbltkYXRhLXJhZGlpPWJhc2VdLFxcbi5yYWRpaS1iYXNlIHtcXG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XFxuICAgIC0tcmFkaWktc206IDQuNXB4O1xcbiAgICAtLXJhZGlpLWJhc2U6IDZweDtcXG4gICAgLS1yYWRpaS1tZDogOXB4O1xcbiAgICAtLXJhZGlpLWxnOiAxMnB4O1xcbiAgICAtLXJhZGlpLXhsOiAxNnB4O1xcbiAgICAtLXJhZGlpLXhsMjogMjJweDtcXG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XFxufVxcblxcbltkYXRhLXJhZGlpPWxhcmdlXSxcXG4ucmFkaWktbGFyZ2Uge1xcbiAgICAtLXJhZGlpLW5vbmU6IDBweDtcXG4gICAgLS1yYWRpaS1zbTogNnB4O1xcbiAgICAtLXJhZGlpLWJhc2U6IDhweDtcXG4gICAgLS1yYWRpaS1tZDogMTJweDtcXG4gICAgLS1yYWRpaS1sZzogMTZweDtcXG4gICAgLS1yYWRpaS14bDogMjRweDtcXG4gICAgLS1yYWRpaS14bDI6IDQwcHg7XFxuICAgIC0tcmFkaWktcm91bmQ6IDk5OXB4O1xcbn1cXG5cXG5bZGF0YS1zcGFjaW5nPWNvbXBhY3RdLFxcbi5zcGFjaW5nLWNvbXBhY3Qge1xcbiAgICAtLXNwYWNpbmcteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmcteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctYmFzZTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1kOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbGc6IDI0cHg7XFxuICAgIC0tc3BhY2luZy14bDogMjhweDtcXG4gICAgLS1zcGFjaW5nLXhsMjogMzJweDtcXG4gICAgLS1zcGFjaW5nLXhsMzogNDBweDtcXG4gICAgLS1zcGFjaW5nLXhsNDogNDhweDtcXG4gICAgLS1zcGFjaW5nLXhsNTogNjBweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzNDogMXB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHMzOiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czI6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzOiA2cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1zbTogOHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDIwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMjhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMzogMzZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNTZweDtcXG59XFxuXFxuW2RhdGEtc3BhY2luZz1iYXNlXSxcXG4uc3BhY2luZy1iYXNlIHtcXG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XFxuICAgIC0tc3BhY2luZy14czI6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDI0cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMjhweDtcXG4gICAgLS1zcGFjaW5nLXhsOiAzMnB4O1xcbiAgICAtLXNwYWNpbmcteGwyOiA0MHB4O1xcbiAgICAtLXNwYWNpbmcteGwzOiA0OHB4O1xcbiAgICAtLXNwYWNpbmcteGw0OiA2MHB4O1xcbiAgICAtLXNwYWNpbmcteGw1OiA3MnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDI0cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMzZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMzogNDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNjhweDtcXG59XFxuXFxuW2RhdGEtc3BhY2luZz1sYXJnZV0sXFxuLnNwYWNpbmctbGFyZ2Uge1xcbiAgICAtLXNwYWNpbmcteHM0OiA0cHg7XFxuICAgIC0tc3BhY2luZy14czM6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzMjogMTJweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctc206IDIwcHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAyNHB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDI4cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMzZweDtcXG4gICAgLS1zcGFjaW5nLXhsOiA0NHB4O1xcbiAgICAtLXNwYWNpbmcteGwyOiA1MnB4O1xcbiAgICAtLXNwYWNpbmcteGwzOiA2NHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogOHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDEycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1zbTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLWJhc2U6IDIwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1tZDogMjRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAzMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteGw6IDQwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDI6IDQ4cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDM6IDYwcHg7XFxufVxcblxcbltkYXRhLXNwYWNpbmc9dG91Y2hdLFxcbi5zcGFjaW5nLXRvdWNoIHtcXG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XFxuICAgIC0tc3BhY2luZy14czI6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDE2cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMjBweDtcXG4gICAgLS1zcGFjaW5nLXhsOiAyNHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDE2cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjBweDtcXG59XFxuXFxuW2RhdGEtdHlwb2dyYXBoeT1jb21wYWN0XSxcXG4udHlwb2dyYXBoeS1jb21wYWN0IHtcXG4gICAgLS1mb250LXNpemUteHMyOiAxMHB4O1xcbiAgICAtLWZvbnQtc2l6ZS14czogMTFweDtcXG4gICAgLS1mb250LXNpemUtc206IDEycHg7XFxuICAgIC0tZm9udC1zaXplLWJhc2U6IDEzcHg7XFxuICAgIC0tZm9udC1zaXplLW1kOiAxNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1sZzogMTlweDtcXG4gICAgLS1mb250LXNpemUteGw6IDIycHg7XFxuICAgIC0tZm9udC1zaXplLXhsMjogMjdweDtcXG4gICAgLS1mb250LXNpemUteGwzOiAzMnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDQ6IDM5cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNTogNDdweDtcXG4gICAgLS1mb250LXNpemUteGw2OiA1NnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDc6IDY3cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteHMyOiAxMHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhzOiAxMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXNtOiAxNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWJhc2U6IDE2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDIwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbGc6IDI0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw6IDI4cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGwyOiAzMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMzogNDBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDQ6IDQ0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw1OiA1MnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNjogNjBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDc6IDc4cHg7XFxuICAgIC0tbGV0dGVyLXNwYWNpbmctMDogMCVweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1sYWJlbDogOHB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTJweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1kaXNwbGF5OiAxNnB4O1xcbn1cXG5cXG5bZGF0YS10eXBvZ3JhcGh5PWJhc2VdLFxcbi50eXBvZ3JhcGh5LWJhc2Uge1xcbiAgICAtLWZvbnQtc2l6ZS14czI6IDEwcHg7XFxuICAgIC0tZm9udC1zaXplLXhzOiAxMXB4O1xcbiAgICAtLWZvbnQtc2l6ZS1zbTogMTNweDtcXG4gICAgLS1mb250LXNpemUtYmFzZTogMTVweDtcXG4gICAgLS1mb250LXNpemUtbWQ6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLWxnOiAyMnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDogMjZweDtcXG4gICAgLS1mb250LXNpemUteGwyOiAzMXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDM6IDM3cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNDogNDVweDtcXG4gICAgLS1mb250LXNpemUteGw1OiA1NHB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDY6IDY0cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNzogNzdweDtcXG4gICAgLS1saW5lLWhlaWdodC14czI6IDEycHg7XFxuICAgIC0tbGluZS1oZWlnaHQteHM6IDE0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtc206IDE2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMjBweDtcXG4gICAgLS1saW5lLWhlaWdodC1tZDogMjRweDtcXG4gICAgLS1saW5lLWhlaWdodC1sZzogMjhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDogMzJweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDI6IDM2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGwzOiA0NHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNDogNDhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDU6IDYwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw2OiA3MnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNzogODZweDtcXG4gICAgLS1sZXR0ZXItc3BhY2luZy0wOiAwJXB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWxhYmVsOiAxMnB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTZweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1kaXNwbGF5OiAyMHB4O1xcbn1cXG5cXG5bZGF0YS10eXBvZ3JhcGh5PWxhcmdlXSxcXG4udHlwb2dyYXBoeS1sYXJnZSB7XFxuICAgIC0tZm9udC1zaXplLXhzMjogMTFweDtcXG4gICAgLS1mb250LXNpemUteHM6IDEycHg7XFxuICAgIC0tZm9udC1zaXplLXNtOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1iYXNlOiAxN3B4O1xcbiAgICAtLWZvbnQtc2l6ZS1tZDogMjBweDtcXG4gICAgLS1mb250LXNpemUtbGc6IDI0cHg7XFxuICAgIC0tZm9udC1zaXplLXhsOiAyOXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDI6IDM1cHg7XFxuICAgIC0tZm9udC1zaXplLXhsMzogNDJweDtcXG4gICAgLS1mb250LXNpemUteGw0OiA1MXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDU6IDYxcHg7XFxuICAgIC0tZm9udC1zaXplLXhsNjogNzNweDtcXG4gICAgLS1mb250LXNpemUteGw3OiA4OHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhzMjogMTJweDtcXG4gICAgLS1saW5lLWhlaWdodC14czogMTZweDtcXG4gICAgLS1saW5lLWhlaWdodC1zbTogMjBweDtcXG4gICAgLS1saW5lLWhlaWdodC1iYXNlOiAyNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LW1kOiAyOHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAzMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsOiAzNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMjogNDBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDM6IDUycHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw0OiA1NnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNTogNjhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDY6IDgwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw3OiA5NnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nLTA6IDAlcHg7XFxuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctbGFiZWw6IDEycHg7XFxuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctcGFyYWdyYXBoOiAxNnB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWRpc3BsYXk6IDIwcHg7XFxufVxcblxcbltkYXRhLWljb25TaXplPWJhc2VdLFxcbi5pY29uU2l6ZS1iYXNlIHtcXG4gICAgLS1pY29uLXNpemUtc206IDEycHg7XFxuICAgIC0taWNvbi1zaXplLWJhc2U6IDE2cHg7XFxuICAgIC0taWNvbi1zaXplLW1kOiAyNHB4O1xcbiAgICAtLWljb24tc2l6ZS1sZzogMzJweDtcXG4gICAgLS1pY29uLXNpemUteGw6IDQ4cHg7XFxuICAgIC0taWNvbi1zaXplLXhsMjogNjRweDtcXG4gICAgLS1pY29uLXNpemUteGwzOiA5NnB4O1xcbiAgICAtLWljb24tc2l6ZS14bDQ6IDEyOHB4O1xcbiAgICAtLWljb24tc2l6ZS14bDU6IDI1NnB4O1xcbn1cXG5cXG5bZGF0YS1pY29uU2l6ZT10b3VjaF0sXFxuLmljb25TaXplLXRvdWNoIHtcXG4gICAgLS1pY29uLXNpemUtc206IDE2cHg7XFxuICAgIC0taWNvbi1zaXplLWJhc2U6IDI0cHg7XFxuICAgIC0taWNvbi1zaXplLW1kOiAzMnB4O1xcbiAgICAtLWljb24tc2l6ZS1sZzogNDhweDtcXG4gICAgLS1pY29uLXNpemUteGw6IDY0cHg7XFxuICAgIC0taWNvbi1zaXplLXhsMjogOTZweDtcXG4gICAgLS1pY29uLXNpemUteGwzOiAxMjhweDtcXG4gICAgLS1pY29uLXNpemUteGw0OiAyNTZweDtcXG4gICAgLS1pY29uLXNpemUteGw1OiA1MTJweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW9wYWNpdHktMDogMDtcXG4gICAgLS1vcGFjaXR5LTU6IDAuNTtcXG4gICAgLS1vcGFjaXR5LTEwOiAwLjE7XFxuICAgIC0tb3BhY2l0eS0xNTogMC4xNTtcXG4gICAgLS1vcGFjaXR5LTIwOiAwLjI7XFxuICAgIC0tb3BhY2l0eS0yNTogMC4yNTtcXG4gICAgLS1vcGFjaXR5LTMwOiAwLjM7XFxuICAgIC0tb3BhY2l0eS0zNTogMC4zNTtcXG4gICAgLS1vcGFjaXR5LTQwOiAwLjQ7XFxuICAgIC0tb3BhY2l0eS00NTogMC40NTtcXG4gICAgLS1vcGFjaXR5LTUwOiAwLjU7XFxuICAgIC0tb3BhY2l0eS01NTogMC41NTtcXG4gICAgLS1vcGFjaXR5LTYwOiAwLjY7XFxuICAgIC0tb3BhY2l0eS02NTogMC42NTtcXG4gICAgLS1vcGFjaXR5LTcwOiAwLjc7XFxuICAgIC0tb3BhY2l0eS03NTogMC43NTtcXG4gICAgLS1vcGFjaXR5LTgwOiAwLjg7XFxuICAgIC0tb3BhY2l0eS04NTogMC44NTtcXG4gICAgLS1vcGFjaXR5LTkwOiAwLjk7XFxuICAgIC0tb3BhY2l0eS05NTogMC45NTtcXG4gICAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNoYWRvdy0wOiAwcHggMC43NXB4IDAuNXB4IDBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMTogMHB4IDFweCAycHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDJweCA0cHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMjogMHB4IDJweCA0cHggLTJweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDRweCA2cHggLTJweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMzogMHB4IDRweCA2cHggLTRweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDEwcHggMTVweCAtM3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAtLXNoYWRvdy00OiAwcHggMTJweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctNTogMHB4IDIzcHggMjhweCAtN3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMTZweCAxMHB4IC03cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyNHB4IDQ4cHggLTEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTExLjM1NCA4LjM1NGEuNS41IDAgMCAxLS43MDggMEw4LjUgNi4yMDdWMTFhLjUuNSAwIDAgMS0xIDBWNi4yMDdMNS4zNTQgOC4zNTRhLjUuNSAwIDAgMS0uNzA4LS43MDhsMy0zYS41LjUgMCAwIDEgLjcwOCAwbDMgM2EuNS41IDAgMCAxIDAgLjcwOCUyNy8lM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3IGQ9JTI3TTE1LjI5NCA4QTcuMyA3LjMgMCAxIDEgLjY5NSA4YTcuMyA3LjMgMCAwIDEgMTQuNiAwbS0xIDBBNi4zIDYuMyAwIDEgMSAxLjY5NSA4YTYuMyA2LjMgMCAwIDEgMTIuNiAwJTI3IGNsaXAtcnVsZT0lMjdldmVub2RkJTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNMy4zOTYgNS4zOTZhLjUuNSAwIDAgMSAuNzA4IDBMOCA5LjI5M2wzLjg5Ni0zLjg5N2EuNS41IDAgMCAxIC43MDguNzA4bC00LjI1IDQuMjVhLjUuNSAwIDAgMS0uNzA4IDBsLTQuMjUtNC4yNWEuNS41IDAgMCAxIDAtLjcwOCUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3IGQ9JTI3TTggMWEuNS41IDAgMCAxIC41LjV2OC43OTNsMi4xNDYtMi4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4IDEyLjIwNyA0LjY0NiA4Ljg1NGEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgMTAuMjkzVjEuNUEuNS41IDAgMCAxIDggMW0tNi41IDlhLjUuNSAwIDAgMSAuNS41VjEzYTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMXYtMi41YS41LjUgMCAwIDEgMSAwVjEzYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0yLjVhLjUuNSAwIDAgMSAuNS0uNSUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTcuMTQ2Ljg1NGEuNS41IDAgMSAxIC43MDgtLjcwOEwxMC4yMDcgMi41IDcuODU0IDQuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4TDguMjkzIDNIOGE1IDUgMCAwIDAtMi45MzkgOS4wNDUuNS41IDAgMSAxLS41ODguODFBNiA2IDAgMCAxIDggMmguMjkzTDcuMTQ2Ljg1NE04IDEzYTUgNSAwIDAgMCAyLjkzOS05LjA0NS41LjUgMCAwIDEgLjU4OC0uODFBNiA2IDAgMCAxIDggMTRoLS4yOTNsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw1Ljc5MyAxMy41bDIuMzUzLTIuMzU0YS41LjUgMCAwIDEgLjcwOC43MDhMNy43MDcgMTN6JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNMTAuMTQ3LjE0NmEuNS41IDAgMCAxIC43MDcgMEwxNC4yMDcgMy41bC0zLjM1MyAzLjM1NGEuNS41IDAgMSAxLS43MDctLjcwOEwxMi4yOTMgNEg1LjVBMi41IDIuNSAwIDAgMCAzIDYuNXYxYS41LjUgMCAxIDEtMSAwdi0xQTMuNSAzLjUgMCAwIDEgNS41IDNoNi43OTNMMTAuMTQ3Ljg1NGEuNS41IDAgMCAxIDAtLjcwOE0xMyA5LjV2LTFhLjUuNSAwIDAgMSAxIDB2MWEzLjUgMy41IDAgMCAxLTMuNSAzLjVIMy43MDdsMi4xNDcgMi4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEwxLjc5MyAxMi41bDMuMzUzLTMuMzU0YS41LjUgMCAxIDEgLjcwOC43MDhMMy43MDcgMTJIMTAuNUEyLjUgMi41IDAgMCAwIDEzIDkuNSUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTguNSAyLjkxNHY4Ljc5M2EuNS41IDAgMCAxLTEgMFYyLjkxNEw1LjM1NCA1LjA2MWEuNS41IDAgMSAxLS43MDgtLjcwN0w4IDFsMy4zNTQgMy4zNTRhLjUuNSAwIDAgMS0uNzA4LjcwN0w4LjUgMi45MTQlMjcvJTNlJTNjcGF0aCBmaWxsPSUyNyUyMzBFMTAxMSUyNyBkPSUyN00yIDEwLjVhLjUuNSAwIDAgMC0xIDB2My4yNWMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgxMS41Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVYxMC41YS41LjUgMCAwIDAtMSAwdjMuMjVhLjI1LjI1IDAgMCAxLS4yNS4yNUgyLjI1YS4yNS4yNSAwIDAgMS0uMjUtLjI1eiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTEyLjg1NCAzLjg1NGEuNS41IDAgMCAwLS43MDgtLjcwOEw4IDcuMjkzIDMuODU0IDMuMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhMNy4yOTMgOGwtNC4xNDcgNC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDguNzA3bDQuMTQ2IDQuMTQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDguNzA3IDhsNC4xNDctNC4xNDZaJTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNNS4zOTYgMTIuNjA0YS41LjUgMCAwIDEgMC0uNzA4TDkuMjkzIDggNS4zOTYgNC4xMDRhLjUuNSAwIDEgMSAuNzA4LS43MDhsNC4yNSA0LjI1YS41LjUgMCAwIDEgMCAuNzA4bC00LjI1IDQuMjVhLjUuNSAwIDAgMS0uNzA4IDAlMjcgY2xpcC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEzLjA2OTQgMy44MzUzOUMxMy40MzY0IDQuMTQ5ODkgMTMuNDc4OCA0LjcwMjI3IDEzLjE2NDMgNS4wNjkxOEw2LjU0OTQyIDEyLjc4NjZMMi44ODEyOCA5LjExODQ2QzIuNTM5NTcgOC43NzY3NSAyLjUzOTU3IDguMjIyNzMgMi44ODEyOCA3Ljg4MTAyQzMuMjIyOTkgNy41MzkzMSAzLjc3NzAxIDcuNTM5MzEgNC4xMTg3MiA3Ljg4MTAyTDYuNDUwNTggMTAuMjEyOUwxMS44MzU3IDMuOTMwM0MxMi4xNTAxIDMuNTYzMzkgMTIuNzAyNSAzLjUyMDkgMTMuMDY5NCAzLjgzNTM5WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XG4gIH1cbn1cbi5pY29uIHtcbiAgLS1iZy1pbWFnZTogbm9uZTtcbiAgLS1pY29uLXNpemU6IHZhcigtLWljb24tc2l6ZS1iYXNlKTtcbiAgbWluLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGluaXRpYWw7XG59XG4uaWNvbjo6YmVmb3JlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcbiAgLXdlYmtpdC1tYXNrOiB2YXIoLS1pY29uLXNyYyk7XG4gIG1hc2s6IHZhcigtLWljb24tc3JjKTtcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZy1pbWFnZSk7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogdmFyKC0tYmctYmxlbmQtbW9kZSk7XG59XG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY29sbGFwc2Uge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuLm1iLW1pbm9yLWxnIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1taW5vci1sZyk7XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmNvbnRlbnRzIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmxleC0xIHtcbiAgZmxleDogMSAxIDAlO1xufVxuLmJvcmRlci1jb2xsYXBzZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucmVzaXplIHtcbiAgcmVzaXplOiBib3RoO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5nYXAtMCB7XG4gIGdhcDogMHB4O1xufVxuLmdhcC0wXFxcXC41IHtcbiAgZ2FwOiAwLjEyNXJlbTtcbn1cbi5nYXAtMSB7XG4gIGdhcDogMC4yNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC1taW5vci1iYXNlIHtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xufVxuLmdhcC1taW5vci14cyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14cyk7XG59XG4uZ2FwLW1pbm9yLXhzMyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14czMpO1xufVxuLmdhcC1taW5vci14czQge1xuICBnYXA6IHZhcigtLXNwYWNpbmctbWlub3IteHM0KTtcbn1cbi5nYXAtc20ge1xuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xufVxuLmdhcC14cyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XG59XG4uZ2FwLXhzMiB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14czIpO1xufVxuLm92ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LWVsbGlwc2lzIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGV4dC1lbGxpcHNpcyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLndoaXRlc3BhY2Utbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50ZXh0LXdyYXAge1xuICB0ZXh0LXdyYXA6IHdyYXA7XG59XG4udGV4dC1ub3dyYXAge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC1iYXNlIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbn1cbi50ZXh0LWxnIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbGcpO1xufVxuLnRleHQtbWQge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1tZCk7XG59XG4udGV4dC1zbSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LXNtKTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4uc2hhZG93LTUge1xuICAtLXR3LXNoYWRvdzogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG59XG4ub3V0bGluZSB7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xufVxuLmZpbHRlciB7XG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcbn1cbi50cmFuc2l0aW9uIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcbn1cbi5ib3JkZXIge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xufVxuLmJnLWFsdC1iYXNlLTEwMCB7XG4gIC0tYmctY29sb3I6IHZhcigtLWFsdC1iYXNlLTEwMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cbi5iZy1maWxsLWJhc2UtMzAwIHtcbiAgLS1iZy1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTMwMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbn1cbi5jb2xvci1wcmltYXJ5LTMwMCB7XG4gIC0tdGV4dC1jb2xvcjogdmFyKC0tcHJpbWFyeS0zMDApO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4uY29sb3ItdGV4dC1iYXNlLTUwMCB7XG4gIC0tdGV4dC1jb2xvcjogdmFyKC0tdGV4dC1iYXNlLTUwMCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cbi5zaGFkb3ctNSB7XG4gIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTIwMCk7XG4gIC0tc2hhZG93LW9wYWNpdHk6IDEwMCU7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNoYWRvdy1jb2xvciksIHRyYW5zcGFyZW50IGNhbGMoMTAwJSAtIHZhcigtLXNoYWRvdy1vcGFjaXR5KSkpO1xuICAtLWJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuLmljb24tYXJyb3ctdXAtY2lyY2xlIHtcbiAgLS1pY29uLXNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuLmljb24tY2hldnJvbi1kb3duIHtcbiAgLS1pY29uLXNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuLmljb24tZG93bmxvYWQge1xuICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG4uaWNvbi1yZWZyZXNoLWNjdyB7XG4gIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cbi5pY29uLXJlcGVhdCB7XG4gIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cbi5pY29uLXVwbG9hZCB7XG4gIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX199KTtcbn1cbi5pY29uLXgge1xuICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19ffSk7XG59XG4ucC1zbSB7XG4gIC0tcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xufVxuLnAteHMge1xuICAtLXBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbn1cbi5weC1iYXNlIHtcbiAgLS1wYWRkaW5nLXg6IHZhcigtLXNwYWNpbmctYmFzZSk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy14KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy14KTtcbn1cbi5weC1sZyB7XG4gIC0tcGFkZGluZy14OiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLXgpO1xufVxuLnB4LXNtIHtcbiAgLS1wYWRkaW5nLXg6IHZhcigtLXNwYWNpbmctc20pO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcteCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcteCk7XG59XG4ucHktNCB7XG4gIC0tcGFkZGluZy15OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy15KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmcteSk7XG59XG4ucHktbWlub3ItYmFzZSB7XG4gIC0tcGFkZGluZy15OiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy15KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmcteSk7XG59XG4ucHktc20ge1xuICAtLXBhZGRpbmcteTogdmFyKC0tc3BhY2luZy1zbSk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1wYWRkaW5nLXkpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFkZGluZy15KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tc3BhY2luZzogMC41cmVtIDFyZW07XG4gICAgLS1zbGlkZXItdGh1bWItc2l6ZTogY2FsYyh2YXIoLS1saW5lLWhlaWdodC1tZCkgKyB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSk7XG4gICAgLS1zbGlkZXItdHJhY2stc2l6ZTogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA0KTtcbiAgICAtLXNsaWRlci1tYXJnaW46IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcbiAgICAtLXNjcm9sbGJhci13aWR0aDogOHB4O1xuICAgIC0tZm9ybS1nYXA6IHZhcigtLXNwYWNpbmctc20pO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTMwMCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xuICAgIG1hcmdpbjogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcbn1cblxuYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLyogRm9yZWdyb3VuZCAqL1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdHJva2UtYmFzZS02MDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC8qIEJhY2tncm91bmQgKi9cbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0xMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLW1kKSB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbWlub3ItYmFzZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnJhbmQtY2FyZCB7XG4gICAgLS1iZy1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdC02MDApO1xufVxuXG4uYnJhbmQtY2FyZCAuc2xpZGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbi5icmFuZC1jYXJkLmRpc2FibGVkIC5zbGlkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbi5oZWlnaHQtZXhwYW5kZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlaWdodC1leHBhbmRlci5jb2xsYXBzZWQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcbiAgICB9XG5cbi5oZWlnaHQtZXhwYW5kZXI+KiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4uY2FyZC1zdGlja3kge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4uY2FyZC1zdGlja3k6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogY2FsYygtMSAqIHZhcigtLWZvcm0tZ2FwKSk7XG4gICAgICAgIGJvdHRvbTogMzMlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1maWxsLWJhc2UtMzAwKSA3MCUsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuXG4uY2FyZC1zdGlja3kgLmNhcmQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4uc2VudGluYWwge1xuICAgIGhlaWdodDogdmFyKC0tc3BhY2luZy14czIpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmlzLXBpbm5lZCAuY2FyZCB7XG4gIC0tdHctc2hhZG93OiAwcHggOHB4IDEwcHggLTZweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggOHB4IDEwcHggLTZweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgLS1zaGFkb3ctY29sb3I6IHZhcigtLXV0aWxpdHktc2hhZGUtMjAwKTtcbiAgLS1ib3gtc2hhZG93LWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2hhZG93LWNvbG9yKSwgdHJhbnNwYXJlbnQgY2FsYygxMDAlIC0gdmFyKC0tc2hhZG93LW9wYWNpdHkpKSk7XG4gIC0tYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTMwMCk7XG4gIC0tc2hhZG93LW9wYWNpdHk6IDEwMCU7XG59XG5cbi5pcy1waW5uZWQgLmNhcmQgLmhlaWdodC1leHBhbmRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctbWlub3ItYmFzZSkgKiAtMSk7XG4gICAgfVxuXG4vKiAmIC5pbnN0cnVjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSAqL1xuXG4uaXMtcGlubmVkIC5jYXJkIC5yYWRpby1zZWdtZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCk7XG4gICAgICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0yMDApO1xuICAgIH1cblxuLmlzLXBpbm5lZCAuY2FyZCAucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkKy5jb250YWluZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMClcbiAgICB9XG5cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMDtcbn1cblxuZm9ybSAuY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiB2YXIoLS1mb3JtLWdhcCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1mb3JtLWdhcCkgLSB2YXIoLS1zY3JvbGxiYXItd2lkdGgpKTtcbiAgICBnYXA6IHZhcigtLWZvcm0tZ2FwKTtcbn1cblxuYnV0dG9uIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3IteHMpIHZhcigtLXNwYWNpbmctc20pO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcbn1cblxuYnV0dG9uIC5zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbmJ1dHRvbi5sb2FkaW5nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuYnV0dG9uLmxvYWRpbmcgLnNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpLzIpO1xuICAgIH1cblxuYnV0dG9uLmxvYWRpbmcgLnRleHQtbGFiZWwge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgIH1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCk7XG59XG5cbmJ1dHRvbi5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTYwMCk7XG59XG5cbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYWx0LWNvbnRyYXN0LTIwMCksIHZhcigtLWFsdC1jb250cmFzdC0yMDApKTtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci14cykgdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZS1iYXNlLTQwMCk7XG59XG5cbi5jdXN0b20tc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXN0b20tc2VsZWN0IHNlbGVjdCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1zZWxlY3QgLmljb24tY2hldnJvbi1kb3duIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IHZhcigtLXNwYWNpbmcteHMpO1xuICAgIHRvcDogdmFyKC0tc3BhY2luZy1taW5vci14cyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS1hY3Rpb24pO1xufVxuXG5pbnB1dDpob3ZlcixcbnNlbGVjdDpob3ZlcixcbnRleHRhcmVhOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICAgIC0td2lkdGg6IGNhbGModmFyKC0tbGluZS1oZWlnaHQtYmFzZSkvNCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiB2YXIoLS13aWR0aCkgc29saWQgdmFyKC0tcHJpbWFyeS00MDApO1xufVxuXG4ucmFkaW8tc2VnbWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0yMDApO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbHQtYmFzZS0yMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xufVxuXG4ucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5yYWRpby1zZWdtZW50IC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmcteHMyKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBtaW4td2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLnJhZGlvLXNlZ21lbnQgLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMTAwKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkKy5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXV0aWxpdHktdGludC02MDApO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS11dGlsaXR5LXNoYWRlLTEwMCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLTIpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5yYWRpby1zZWdtZW50IGlucHV0W3R5cGU9cmFkaW9dOmZvY3VzLXZpc2libGUrLmNvbnRhaW5lciB7XG4gICAgb3V0bGluZTogMnB4IGF1dG8gdmFyKC0tcHJpbWFyeS01MDApO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG59XG5cblxuLnJhZGlvZ3JvdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBnYXA6IDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG59XG5cbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1ub25lKTtcbn1cblxuLnJhZGlvZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtLXR3LXNoYWRvdzogMHB4IDFweCAwLjVweCAwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDFweCAwLjVweCAwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xuICAgIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTIwMCk7XG4gICAgLS1zaGFkb3ctb3BhY2l0eTogMTAwJTtcbiAgICAtLWJveC1zaGFkb3ctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zaGFkb3ctY29sb3IpLCB0cmFuc3BhcmVudCBjYWxjKDEwMCUgLSB2YXIoLS1zaGFkb3ctb3BhY2l0eSkpKTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAxcHggMC41cHggMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcbiAgICAvKiBvdXRsaW5lOiBub25lOyAqL1xufVxuXG50ZXh0YXJlYSB7XG4gICAgZmxleDogMTtcbiAgICAvKiB3aGl0ZS1zcGFjZTogcHJlOyAqL1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbWQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG5bZGF0YS1uYW1lPSdyZWQnXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXJlZC00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdhbWJlciddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtYW1iZXItNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0nYnJvd24nXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWJyb3duLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2dyZWVuJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbi00MDApO1xufVxuXG5bZGF0YS1uYW1lPSd0ZWFsJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC10ZWFsLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2N5YW4nXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWN5YW4tNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0nYmx1ZSddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdpbmRpZ28nXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWluZGlnby00MDApO1xufVxuXG5bZGF0YS1uYW1lPSd2aW9sZXQnXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXZpb2xldC00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdwdXJwbGUnXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXB1cnBsZS00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdwaW5rJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1waW5rLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2luZm8nXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0taW5mby00MDApO1xufVxuXG5bZGF0YS1uYW1lPSd3YXJuaW5nJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXdhcm5pbmctNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0nc3VjY2VzcyddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1zdWNjZXNzLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2RhbmdlciddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1kYW5nZXItNDAwKTtcbn1cblxuXG5bZGF0YS1zbGlkZXJdLFxuI2x1bWluYW5jZVNsaWRlciB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xufVxuXG4jbHVtaW5hbmNlU2xpZGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLXJvdW5kKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0zMDApO1xuICAgIG1hcmdpbjogdmFyKC0tc3BhY2luZy1taW5vci1zbSkgMDtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gMiArIDJweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAyICsgMnB4KTtcbn1cblxuI2x1bWluYW5jZVNsaWRlciAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zbGlkZXJzIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbGlkZXJzIC50ZXh0LWxhYmVsIHtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uc2xpZGVycyAuc2xpZGVyIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMzAwKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZsZXg6IDM7XG4gICAgbWFyZ2luOiAwIHZhcigtLXNsaWRlci1tYXJnaW4pO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLXJvdW5kKTtcbn1cblxuLnNsaWRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlLWJhc2UtMzAwKTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktY29ubmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xufVxuXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWhhbmRsZSB7XG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDUpIHNvbGlkIHdoaXRlO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuXG5cbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcbiAgICB3aWR0aDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xuXG4gICAgdG9wOiBjYWxjKCh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSkpIC8gLTIpO1xuICAgIHJpZ2h0OiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIC0yKTtcblxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IC0xcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMHB4IDBweCAxcHggcmdiYSgwLCAzNSwgNDEsIDAuMSk7XG5cbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRodW1iLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbn1cblxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS10b29sdGlwIHtcbiAgICBib3R0b206IGluaXRpYWw7XG4gICAgdG9wOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAtIHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDEwKTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14czIpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14czIpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsLWJhc2UtMTAwKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIC0tdHctc2hhZG93OiAwcHggOHB4IDEwcHggLTZweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gICAgLS1zaGFkb3ctY29sb3I6IHZhcigtLXV0aWxpdHktc2hhZGUtMjAwKTtcbiAgICAtLXNoYWRvdy1vcGFjaXR5OiAxMDAlO1xuICAgIC0tYm94LXNoYWRvdy1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNoYWRvdy1jb2xvciksIHRyYW5zcGFyZW50IGNhbGMoMTAwJSAtIHZhcigtLXNoYWRvdy1vcGFjaXR5KSkpO1xuICAgIC0tYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGU6aG92ZXIge1xuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA0KSBzb2xpZCB3aGl0ZTtcbn1cblxuLnNsaWRlcnMgLnNsaWRlcjpob3ZlciAubm9VaS10b29sdGlwIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWhhbmRsZTo6YmVmb3JlLFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5bZGF0YS1zZW1hbnRpY3NdIC5zbGlkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4jZXhwb3J0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMTAwLWNvbXBvbmVudCk7XG59XG5cbi8qKioqKioqKioqIFJhbmdlIElucHV0IFN0eWxlcyAqKioqKioqKioqL1xuLypSYW5nZSBSZXNldCovXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qIFJlbW92ZXMgZGVmYXVsdCBmb2N1cyAqL1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4vKioqKiogQ2hyb21lLCBTYWZhcmksIE9wZXJhIGFuZCBFZGdlIENocm9taXVtIHN0eWxlcyAqKioqKi9cbi8qIHNsaWRlciB0cmFjayAqL1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Ryb2tlLWJhc2UtMzAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XG59XG5cbi8qIHNsaWRlciB0aHVtYiAqL1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcblxuICAgIC8qY3VzdG9tIHN0eWxlcyovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xufVxuXG5pbnB1dFt0eXBlPVwicmFuZ2VcIl06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDUzYTVmO1xuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjMDUzYTVmO1xuXG4gICAgb3V0bGluZS1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRodW1iLWNvbG9yKSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgICBvdXRsaW5lLW9mZnNldDogMC4xMjVyZW07XG59XG5cbmhyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTEwMCk7XG59XG5cbmFbZGF0YS1leHBhbmRlcl0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzMik7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX199KTtcbn1cblxuYVtkYXRhLWV4cGFuZGVyXTo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuYVtkYXRhLWV4cGFuZGVkPXRydWVdOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmZvbnQtcHJldmlldy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTMwMCk7XG59XG5cbi5mb250LXByZXZpZXctYm94IC5iYXNlIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbn1cblxuLmZvbnQtcHJldmlldy1ib3ggLm1kIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XG59XG5cbi5mb250LXByZXZpZXctYm94IC5sZyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xufVxuXG4uY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaGVja2JveDpob3ZlciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZmxleDogMCAwIGF1dG87XG5cbn1cblxuLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fX30pO1xufVxuXG5cbi5hY3Rpb24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uYWN0aW9uLWxpc3QgbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3IteHMzKSAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdHJva2UtYmFzZS0xMDApO1xufVxuXG4uYWN0aW9uLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uYWN0aW9uLWxpc3QgbGkgYSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG4gICAgbWFyZ2luOiAwIGNhbGModmFyKC0tc3BhY2luZy1zbSkgKiAtMSk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1zbSkgdmFyKC0tc3BhY2luZy1zbSk7XG59XG5cbi5hY3Rpb24tbGlzdCBsaSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS1hY3Rpb24pO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IHZhcigtLXByaW1hcnktNTAwKSBhdXRvIDJweDtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4jYnJhbmRBY2NlbnQge1xuICAgIC0tdGh1bWItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1wcmltYXJ5LTMwMCksIHdoaXRlIDEwJSk7XG59XG5cbiNicmFuZEFjY2VudCAuc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTMwMCk7XG4gICAgfVxuXG4jYnJhbmRBY2NlbnQgLm5vVWktY29ubmVjdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QtNDAwKTtcbiAgICB9XG5cbiNicmFuZEFjY2VudCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTMwMCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTYwMClcbiAgICB9XG5cbi5zcGlubmVyIHtcbiAgICB3aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICBhbmltYXRpb246IHNwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zcGlubmVyOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGluc2V0OiAtMnB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKVxuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybilcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQWMsQ0FBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQsMEJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxXQUFjLEVBQWQsTUFBYztFQUFkLCtIQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztB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O0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxnQ0FBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQSw4QkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsa0dBQW1CO0VBQW5CLHdHQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7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SUFDSjs7QUFHSjtJQUNJLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxtQ0FBbUM7SUFDbkMsbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSTtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNpbmc6IDAuNXJlbSAxcmVtO1xcbiAgICAtLXNsaWRlci10aHVtYi1zaXplOiBjYWxjKHZhcigtLWxpbmUtaGVpZ2h0LW1kKSArIHZhcigtLXNwYWNpbmctbWlub3IteHMpKTtcXG4gICAgLS1zbGlkZXItdHJhY2stc2l6ZTogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA0KTtcXG4gICAgLS1zbGlkZXItbWFyZ2luOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIC0tc2Nyb2xsYmFyLXdpZHRoOiA4cHg7XFxuICAgIC0tZm9ybS1nYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbn1cXG5cXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxiYXItd2lkdGgpO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgLyogRm9yZWdyb3VuZCAqL1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN0cm9rZS1iYXNlLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC8qIEJhY2tncm91bmQgKi9cXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWxnKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1tZCkgdmFyKC0tc3BhY2luZy1tZCk7XFxuICAgIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci1iYXNlKTtcXG5cXG4gICAgQGFwcGx5IGZsZXggZmxleC1jb2w7XFxufVxcblxcbi5icmFuZC1jYXJkIHtcXG4gICAgLS1iZy1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTYwMCk7XFxuXFxuICAgICYgLnNsaWRlciB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICYuZGlzYWJsZWQgLnNsaWRlciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLmhlaWdodC1leHBhbmRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICYuY29sbGFwc2VkIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcXG4gICAgfVxcblxcbiAgICAmPioge1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG4uY2FyZC1zdGlja3kge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDEwO1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgaW5zZXQ6IGNhbGMoLTEgKiB2YXIoLS1mb3JtLWdhcCkpO1xcbiAgICAgICAgYm90dG9tOiAzMyU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1maWxsLWJhc2UtMzAwKSA3MCUsIHRyYW5zcGFyZW50KTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcbn1cXG5cXG4uc2VudGluYWwge1xcbiAgICBoZWlnaHQ6IHZhcigtLXNwYWNpbmcteHMyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmlzLXBpbm5lZCAuY2FyZCB7XFxuICAgIEBhcHBseSBzaGFkb3ctNSBzaGFkb3ctdXRpbGl0eS1zaGFkZS0zMDA7XFxuXFxuICAgICYgLmhlaWdodC1leHBhbmRlciB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNpbmctbWlub3ItYmFzZSkgKiAtMSk7XFxuICAgIH1cXG5cXG4gICAgLyogJiAuaW5zdHJ1Y3Rpb24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfSAqL1xcblxcbiAgICAmIC5yYWRpby1zZWdtZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0yMDApO1xcbiAgICAgICAgb3V0bGluZS1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCk7XFxuICAgIH1cXG5cXG4gICAgJiAucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkKy5jb250YWluZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApXFxuICAgIH1cXG59XFxuXFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5mb3JtIC5jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1mb3JtLWdhcCk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tZm9ybS1nYXApIC0gdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKSk7XFxuICAgIGdhcDogdmFyKC0tZm9ybS1nYXApO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci14cykgdmFyKC0tc3BhY2luZy1zbSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcXG5cXG4gICAgJiAuc3Bpbm5lciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYubG9hZGluZyB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgJi5sb2FkaW5nIC5zcGlubmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSB2YXIoLS1saW5lLWhlaWdodC1iYXNlKS8yKTtcXG4gICAgfVxcblxcbiAgICAgJi5sb2FkaW5nIC50ZXh0LWxhYmVsIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgIH1cXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xMDApO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdC02MDApO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1hbHQtY29udHJhc3QtMjAwKSwgdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCkpO1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0xMDApO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZS1iYXNlLTQwMCk7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY3VzdG9tLXNlbGVjdCBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmN1c3RvbS1zZWxlY3QgLmljb24tY2hldnJvbi1kb3duIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogdmFyKC0tc3BhY2luZy14cyk7XFxuICAgIHRvcDogdmFyKC0tc3BhY2luZy1taW5vci14cyk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLWFjdGlvbik7XFxufVxcblxcbmlucHV0OmhvdmVyLFxcbnNlbGVjdDpob3ZlcixcXG50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgICAtLXdpZHRoOiBjYWxjKHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpLzQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiB2YXIoLS13aWR0aCkgc29saWQgdmFyKC0tcHJpbWFyeS00MDApO1xcbn1cXG5cXG4ucmFkaW8tc2VnbWVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0yMDApO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYWx0LWJhc2UtMjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxufVxcblxcbi5yYWRpby1zZWdtZW50IGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ucmFkaW8tc2VnbWVudCAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXNwYWNpbmcteHMyKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci14cykgdmFyKC0tc3BhY2luZy1zbSk7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBtaW4td2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ucmFkaW8tc2VnbWVudCAuY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMTAwKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCsuY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXRpbGl0eS10aW50LTYwMCk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS11dGlsaXR5LXNoYWRlLTEwMCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi0yKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb106Zm9jdXMtdmlzaWJsZSsuY29udGFpbmVyIHtcXG4gICAgb3V0bGluZTogMnB4IGF1dG8gdmFyKC0tcHJpbWFyeS01MDApO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG5cXG4ucmFkaW9ncm91cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGdhcDogMXB4O1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyByb3VuZGVkO1xcbn1cXG5cXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcXG4gICAgYm9yZGVyOiAwIG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogMS41cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcXG4gICAgb3BhY2l0eTogMC41O1xcblxcbiAgICBAYXBwbHkgcm91bmRlZC1ub25lO1xcbn1cXG5cXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgQGFwcGx5IHNoYWRvdy0xO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbiAgICAvKiBvdXRsaW5lOiBub25lOyAqL1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIC8qIHdoaXRlLXNwYWNlOiBwcmU7ICovXFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1tZCk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdyZWQnXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nYW1iZXInXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1hbWJlci00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdicm93biddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWJyb3duLTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J2dyZWVuJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0ndGVhbCddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXRlYWwtNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nY3lhbiddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWN5YW4tNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nYmx1ZSddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWJsdWUtNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0naW5kaWdvJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtaW5kaWdvLTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J3Zpb2xldCddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXZpb2xldC00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdwdXJwbGUnXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1wdXJwbGUtNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0ncGluayddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXBpbmstNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0naW5mbyddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0taW5mby00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSd3YXJuaW5nJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS13YXJuaW5nLTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J3N1Y2Nlc3MnXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXN1Y2Nlc3MtNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nZGFuZ2VyJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1kYW5nZXItNDAwKTtcXG59XFxuXFxuXFxuW2RhdGEtc2xpZGVyXSxcXG4jbHVtaW5hbmNlU2xpZGVyIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcbn1cXG5cXG4jbHVtaW5hbmNlU2xpZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktcm91bmQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0zMDApO1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNpbmctbWlub3Itc20pIDA7XFxuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAyICsgMnB4KTtcXG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAyICsgMnB4KTtcXG59XFxuXFxuI2x1bWluYW5jZVNsaWRlciAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLnNsaWRlcnMgbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2xpZGVycyAudGV4dC1sYWJlbCB7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIge1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxuXFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0zMDApO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBmbGV4OiAzO1xcbiAgICBtYXJnaW46IDAgdmFyKC0tc2xpZGVyLW1hcmdpbik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLXJvdW5kKTtcXG59XFxuXFxuLnNsaWRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtc20pO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktY29ubmVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGUge1xcbiAgICBib3JkZXI6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gNSkgc29saWQgd2hpdGU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG5cXG5cXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuXFxuICAgIHRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcXG4gICAgcmlnaHQ6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gLTIpO1xcblxcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAtMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjEpO1xcblxcbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aHVtYi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS10b29sdGlwIHtcXG4gICAgYm90dG9tOiBpbml0aWFsO1xcbiAgICB0b3A6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gMTApO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14czIpO1xcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMyKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsLWJhc2UtMTAwKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBAYXBwbHkgc2hhZG93LTU7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktaGFuZGxlOmhvdmVyIHtcXG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDQpIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyOmhvdmVyIC5ub1VpLXRvb2x0aXAge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWhhbmRsZTo6YmVmb3JlLFxcbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktaGFuZGxlOjphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbltkYXRhLXNlbWFudGljc10gLnNsaWRlcnMgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNleHBvcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMTAwLWNvbXBvbmVudCk7XFxufVxcblxcbi8qKioqKioqKioqIFJhbmdlIElucHV0IFN0eWxlcyAqKioqKioqKioqL1xcbi8qUmFuZ2UgUmVzZXQqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE1cmVtO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlcyBkZWZhdWx0IGZvY3VzICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qKioqKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgYW5kIEVkZ2UgQ2hyb21pdW0gc3R5bGVzICoqKioqL1xcbi8qIHNsaWRlciB0cmFjayAqL1xcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Ryb2tlLWJhc2UtMzAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10cmFjay1zaXplKTtcXG59XFxuXFxuLyogc2xpZGVyIHRodW1iICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKCh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSkpIC8gLTIpO1xcblxcbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aHVtYi1jb2xvcik7XFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICB3aWR0aDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA1M2E1ZjtcXG4gICAgb3V0bGluZTogM3B4IHNvbGlkICMwNTNhNWY7XFxuXFxuICAgIG91dGxpbmUtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10aHVtYi1jb2xvciksIHRyYW5zcGFyZW50IDIwJSk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAwLjEyNXJlbTtcXG59XFxuXFxuaHIge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTEwMCk7XFxufVxcblxcbmFbZGF0YS1leHBhbmRlcl0ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzMik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXG5cXG4gICAgQGFwcGx5IGljb24tY2hldnJvbi1yaWdodDtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcbn1cXG5cXG5hW2RhdGEtZXhwYW5kZWQ9dHJ1ZV06OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMzAwKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3ggLmJhc2Uge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcXG59XFxuXFxuLmZvbnQtcHJldmlldy1ib3ggLm1kIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCAubGcge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jaGVja2JveDpob3ZlciBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG5cXG59XFxuXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMy4wNjk0IDMuODM1MzlDMTMuNDM2NCA0LjE0OTg5IDEzLjQ3ODggNC43MDIyNyAxMy4xNjQzIDUuMDY5MThMNi41NDk0MiAxMi43ODY2TDIuODgxMjggOS4xMTg0NkMyLjUzOTU3IDguNzc2NzUgMi41Mzk1NyA4LjIyMjczIDIuODgxMjggNy44ODEwMkMzLjIyMjk5IDcuNTM5MzEgMy43NzcwMSA3LjUzOTMxIDQuMTE4NzIgNy44ODEwMkw2LjQ1MDU4IDEwLjIxMjlMMTEuODM1NyAzLjkzMDNDMTIuMTUwMSAzLjU2MzM5IDEyLjcwMjUgMy41MjA5IDEzLjA2OTQgMy44MzUzOVpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxufVxcblxcblxcbi5hY3Rpb24tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci14czMpIDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdHJva2UtYmFzZS0xMDApO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGk6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGEge1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgbWFyZ2luOiAwIGNhbGModmFyKC0tc3BhY2luZy1zbSkgKiAtMSk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXNtKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLmFjdGlvbi1saXN0IGxpIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG46Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IHZhcigtLXByaW1hcnktNTAwKSBhdXRvIDJweDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuXFxuI2JyYW5kQWNjZW50IHtcXG4gICAgLS10aHVtYi1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXByaW1hcnktMzAwKSwgd2hpdGUgMTAlKTtcXG5cXG4gICAgJiAuc2xpZGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0zMDApO1xcbiAgICB9XFxuXFxuICAgICYgLm5vVWktY29ubmVjdCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTQwMCk7XFxuICAgIH1cXG5cXG4gICAgJiBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0yMDApO1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hbHQtY29udHJhc3QtMzAwKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTYwMClcXG4gICAgfVxcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgYW5pbWF0aW9uOiBzcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uc3Bpbm5lcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaW5zZXQ6IC0ycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgb3BhY2l0eTogMC4yO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybilcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKVxcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb25zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ljb25zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc291cmNlLXZhcmlhYmxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb3VyY2UtdmFyaWFibGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBtb2RhbElEID0gZWwuZGF0YXNldC5tb2RhbDtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSUQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KTtcbiAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInZhcmlhYmxlVXRpbHNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgXCIuL3N0eWxlcy9zb3VyY2UtdmFyaWFibGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvaWNvbnMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kaWFsb2cuY3NzXCI7XG5pbXBvcnQgXCIuL2hlbHBlcnMvbW9kYWxcIjtcbmxldCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1wb3J0VmFyaWFibGVzQnV0dG9uJyk7XG5sZXQgc3dhcFZhcmlhYmxlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2FwVmFyaWFibGVzQnV0dG9uJyk7XG5sZXQgcmVsb2FkU3RvcmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsb2FkU3RvcmUnKTtcbmxldCBmaWxlTmFtZTtcbmNvbnN0IHN0YXRlID0ge307XG4vLyBpbXBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgIGNvbnN0IGZpbGVOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0TW9kYWwgaW5wdXRbbmFtZT1maWxlTmFtZV0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4vLyAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ0NPTExFQ1RfVkFSUycsIGZpbGVOYW1lOiBmaWxlTmFtZUlucHV0LnZhbHVlIH1cbi8vICAgICB9LCBcIipcIik7XG4vLyB9KTtcbnJlbG9hZFN0b3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdWQVJTX1VJX0xPQURFRCcgfVxuICAgIH0sIFwiKlwiKTtcbn0pO1xuc3dhcFZhcmlhYmxlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcmFkaW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJlc2V0c0xpc3QgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpO1xuICAgIGNvbnN0IGtleSA9IChyYWRpb0J1dHRvbiA9PT0gbnVsbCB8fCByYWRpb0J1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmFkaW9CdXR0b24udmFsdWUpIHx8IG51bGw7XG4gICAgY29uc3Qgb3ZlcnJpZGVUZXh0U3R5bGVzQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPW92ZXJyaWRlVGV4dFN0eWxlc10nKTtcbiAgICBjb25zdCBvdmVycmlkZVRleHRTdHlsZXMgPSBvdmVycmlkZVRleHRTdHlsZXNDaGVja2JveC5jaGVja2VkO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXBNb2RhbCcpO1xuICAgIGNvbnN0IHN3YXBQcm9ncmVzc01zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2FwUHJvZ3Jlc3MnKTtcbiAgICBzd2FwUHJvZ3Jlc3NNc2cuaW5uZXJIVE1MID0gJ1dvcmtpbmcuLi4nO1xuICAgIGtleSAmJiBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdTV0FQX1ZBUklBQkxFUycsIGZpbGVOYW1lOiBrZXksIG92ZXJyaWRlVGV4dFN0eWxlcyB9XG4gICAgfSwgXCIqXCIpO1xufSk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7IGRhdGE6IHsgcGx1Z2luTWVzc2FnZSB9ICkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGUpO1xuLy8gfSlcbndpbmRvdy5vbm1lc3NhZ2UgPSAoX2EpID0+IF9fYXdhaXRlcih2b2lkIDAsIFtfYV0sIHZvaWQgMCwgZnVuY3Rpb24qICh7IGRhdGE6IHsgcGx1Z2luTWVzc2FnZSB9IH0pIHtcbiAgICBpZiAocGx1Z2luTWVzc2FnZS5ldmVudCA9PSAnU1lOQ19WQVJTJykge1xuICAgICAgICByZW5kZXJMaXN0KHBsdWdpbk1lc3NhZ2UuZGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpYWxvZycpLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbk1lc3NhZ2UuZXZlbnQgPT0gJ1NXQVBfVkFSSUFCTEVTX0RPTkUnKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXBNb2RhbCcpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgICBpZiAocGx1Z2luTWVzc2FnZS5ldmVudCA9PSAnU1dBUF9WQVJfUFJPR1JFU1MnKSB7XG4gICAgICAgIGNvbnN0IHN3YXBQcm9ncmVzc01zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2FwUHJvZ3Jlc3MnKTtcbiAgICAgICAgc3dhcFByb2dyZXNzTXNnLmlubmVySFRNTCA9IHBsdWdpbk1lc3NhZ2UubWVzc2FnZSArICcuLi4nO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gcmVuZGVyTGlzdChzdG9yZWREYXRhKSB7XG4gICAgY29uc3QgbWFya3VwID0gW107XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHN0b3JlZERhdGEpO1xuICAgIGVudHJpZXMuZm9yRWFjaCgoW2ZpbGVLZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICBtYXJrdXAucHVzaChgXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0aGVtZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0aGVtZVwiIHZhbHVlPVwiJHtmaWxlS2V5fVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtMSBmbGV4IGZsZXgtY29sIHB4LWJhc2UgcHktbWlub3ItYmFzZSBnYXAtbWlub3IteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc21cIiB0aXRsZT1cIiR7ZmlsZUtleX1cIj4ke2ZpbGVLZXl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+YCk7XG4gICAgfSk7XG4gICAgaWYgKCFtYXJrdXAubGVuZ3RoKSB7XG4gICAgfVxuICAgIGNvbnN0IGxpc3Rib3hFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldHNMaXN0Jyk7XG4gICAgbGlzdGJveEVsZW1lbnQuaW5uZXJIVE1MID0gbWFya3VwLmpvaW4oJycpO1xufVxucGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdWQVJTX1VJX0xPQURFRCcgfVxufSwgXCIqXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9