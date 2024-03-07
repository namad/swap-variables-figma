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
    --accent-red-100: hsla(4.1, 84.17%, 72.75%, 0.125);
    --accent-red-200: hsla(4.1, 84.17%, 72.75%, 0.33);
    --accent-red-300: hsl(3.93, 83.17%, 60.39%);
    --accent-red-400: hsl(4.09, 90.16%, 47.84%);
    --accent-red-500: hsl(4.18, 89.33%, 44.12%);
    --accent-red-600: hsl(3.69, 86.67%, 85.29%);
    --accent-amber-100: hsla(24.59, 70.11%, 65.88%, 0.125);
    --accent-amber-200: hsla(24.59, 70.11%, 65.88%, 0.33);
    --accent-amber-300: hsl(24.71, 63.49%, 52.75%);
    --accent-amber-400: hsl(24.92, 90.15%, 39.8%);
    --accent-amber-500: hsl(25.3, 89.25%, 36.47%);
    --accent-amber-600: hsl(24.13, 85.19%, 78.82%);
    --accent-brown-100: hsla(32.34, 65.98%, 61.96%, 0.125);
    --accent-brown-200: hsla(32.34, 65.98%, 61.96%, 0.33);
    --accent-brown-300: hsl(32.88, 58.87%, 48.63%);
    --accent-brown-400: hsl(33.29, 90.11%, 35.69%);
    --accent-brown-500: hsl(33.42, 89.22%, 32.75%);
    --accent-brown-600: hsl(31.64, 85.94%, 74.9%);
    --accent-green-100: hsla(126.35, 87.1%, 42.55%, 0.125);
    --accent-green-200: hsla(126.35, 87.1%, 42.55%, 0.33);
    --accent-green-300: hsl(127.55, 87.85%, 35.49%);
    --accent-green-400: hsl(130.15, 90.28%, 28.24%);
    --accent-green-500: hsl(131.6, 89.47%, 26.08%);
    --accent-green-600: hsl(124.95, 85.83%, 49.8%);
    --accent-teal-100: hsla(178.34, 86.6%, 40.98%, 0.125);
    --accent-teal-200: hsla(178.34, 86.6%, 40.98%, 0.33);
    --accent-teal-300: hsl(180.78, 88.51%, 34.12%);
    --accent-teal-400: hsl(184.09, 90.41%, 28.63%);
    --accent-teal-500: hsl(186.29, 88.57%, 27.45%);
    --accent-teal-600: hsl(176.57, 86.07%, 47.84%);
    --accent-blue-100: hsla(206.03, 80.95%, 67.06%, 0.125);
    --accent-blue-200: hsla(206.03, 80.95%, 67.06%, 0.33);
    --accent-blue-300: hsl(208.26, 77.48%, 56.47%);
    --accent-blue-400: hsl(210, 89.74%, 45.88%);
    --accent-blue-500: hsl(212.54, 88.55%, 44.51%);
    --accent-blue-600: hsl(201.43, 85.96%, 77.65%);
    --accent-indigo-100: hsla(235.91, 88%, 80.39%, 0.125);
    --accent-indigo-200: hsla(235.91, 88%, 80.39%, 0.33);
    --accent-indigo-300: hsl(238.49, 89.47%, 73.92%);
    --accent-indigo-400: hsl(240, 90.3%, 67.65%);
    --accent-indigo-500: hsl(244.05, 88.11%, 63.73%);
    --accent-indigo-600: hsl(230.69, 85.29%, 86.67%);
    --accent-violet-100: hsla(256, 88.24%, 80%, 0.125);
    --accent-violet-200: hsla(256, 88.24%, 80%, 0.33);
    --accent-violet-300: hsl(258.75, 90.14%, 72.16%);
    --accent-violet-400: hsl(260.12, 90.11%, 64.31%);
    --accent-violet-500: hsl(264.13, 84.83%, 58.63%);
    --accent-violet-600: hsl(250, 87.1%, 87.84%);
    --accent-purple-100: hsla(276, 88.24%, 76.67%, 0.125);
    --accent-purple-200: hsla(276, 88.24%, 76.67%, 0.33);
    --accent-purple-300: hsl(278.54, 89.35%, 66.86%);
    --accent-purple-400: hsl(280, 90%, 56.86%);
    --accent-purple-500: hsl(283.23, 73.23%, 50.2%);
    --accent-purple-600: hsl(268.97, 85.29%, 86.67%);
    --accent-pink-100: hsla(334.87, 84.17%, 72.75%, 0.125);
    --accent-pink-200: hsla(334.87, 84.17%, 72.75%, 0.33);
    --accent-pink-300: hsl(338.44, 82.27%, 60.2%);
    --accent-pink-400: hsl(340, 90.12%, 47.65%);
    --accent-pink-500: hsl(343.88, 88.55%, 44.51%);
    --accent-pink-600: hsl(326.77, 86.67%, 85.29%);
    --text-base-400: hsla(0, 0%, 5.88%, 0.45);
    --text-base-500: hsla(0, 0%, 5.88%, 0.65);
    --text-base-600: hsl(0, 0%, 5.88%);
    --text-base-action: var(--primary-500);
    --text-base-info: var(--info-500);
    --text-base-success: var(--success-500);
    --text-base-warning: var(--warning-500);
    --text-base-danger: var(--danger-500);
    --text-contrast-400: hsla(0, 0%, 100%, 0.45);
    --text-contrast-500: hsla(0, 0%, 100%, 0.7);
    --text-contrast-600: hsl(0, 0%, 100%);
    --text-contrast-action: var(--primary-600);
    --text-contrast-info: var(--info-600);
    --text-contrast-success: var(--success-600);
    --text-contrast-warning: var(--warning-600);
    --text-contrast-danger: var(--danger-600);
    --alt-base-100: hsla(180, 100%, 13.92%, 0.04);
    --alt-base-200: hsla(180, 100%, 13.92%, 0.08);
    --alt-base-300: hsla(180, 100%, 13.92%, 0.16);
    --alt-base-400: hsla(180, 100%, 13.92%, 0.24);
    --alt-base-500: hsla(180, 100%, 13.92%, 0.32);
    --alt-base-600: hsla(180, 100%, 13.92%, 0.44);
    --alt-contrast-100: hsla(0, 0%, 100%, 0.04);
    --alt-contrast-200: hsla(0, 0%, 100%, 0.08);
    --alt-contrast-300: hsla(0, 0%, 100%, 0.12);
    --alt-contrast-400: hsla(0, 0%, 100%, 0.16);
    --alt-contrast-500: hsla(0, 0%, 100%, 0.24);
    --alt-contrast-600: hsla(0, 0%, 100%, 0.32);
    --utility-white: hsl(0, 0%, 100%);
    --utility-black: hsl(0, 0%, 3.92%);
    --utility-transparent: hsla(0, 0%, 100%, 0);
    --utility-shade-100: hsla(180, 100%, 8.04%, 0.04);
    --utility-shade-200: hsla(180, 100%, 8.04%, 0.08);
    --utility-shade-300: hsla(180, 100%, 8.04%, 0.16);
    --utility-shade-400: hsla(180, 100%, 8.04%, 0.24);
    --utility-shade-500: hsla(180, 100%, 8.04%, 0.32);
    --utility-shade-600: hsla(180, 100%, 8.04%, 0.44);
    --utility-tint-100: hsla(0, 0%, 100%, 0.5);
    --utility-tint-200: hsla(0, 0%, 100%, 0.6);
    --utility-tint-300: hsla(0, 0%, 100%, 0.7);
    --utility-tint-400: hsla(0, 0%, 100%, 0.8);
    --utility-tint-500: hsla(0, 0%, 100%, 0.9);
    --utility-tint-600: hsl(0, 0%, 100%);
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
    --fill-base-100: hsl(0, 0%, 100%);
    --fill-base-200: hsl(0, 0%, 98.04%);
    --fill-base-300: hsl(0, 0%, 96.08%);
    --fill-base-400: hsl(0, 0%, 94.12%);
    --fill-base-500: hsl(180, 2.44%, 91.96%);
    --fill-base-600: hsl(180, 1.64%, 88.04%);
    --fill-contrast-100: hsl(180, 0.81%, 24.12%);
    --fill-contrast-200: hsl(240, 0.88%, 22.16%);
    --fill-contrast-300: hsl(0, 0%, 20%);
    --fill-contrast-400: hsl(0, 0%, 18.04%);
    --fill-contrast-500: hsl(180, 1.23%, 15.88%);
    --fill-contrast-600: hsl(180, 1.41%, 13.92%);
    --stroke-base-100: hsl(0, 0%, 92.94%);
    --stroke-base-200: hsl(180, 1.64%, 88.04%);
    --stroke-base-300: hsl(180, 1.3%, 84.9%);
    --stroke-base-400: hsl(0, 0%, 80%);
    --stroke-base-500: hsl(180, 0.65%, 70%);
    --stroke-base-600: hsl(180, 0.43%, 53.92%);
    --stroke-contrast-100: hsl(180, 0.7%, 28.04%);
    --stroke-contrast-200: hsl(180, 0.65%, 30%);
    --stroke-contrast-300: hsl(180, 0.59%, 33.14%);
    --stroke-contrast-400: hsl(180, 0.55%, 35.88%);
    --stroke-contrast-500: hsl(180, 0.5%, 39.02%);
    --stroke-contrast-600: hsl(180, 0.44%, 44.9%);
}

.figma-dark {
    --accent-red-100: hsla(4.08, 75.18%, 73.14%, 0.2);
    --accent-red-200: hsla(4.08, 75.18%, 73.14%, 0.45);
    --accent-red-300: hsl(4.08, 75.38%, 61.76%);
    --accent-red-400: hsl(4.04, 76.28%, 50.39%);
    --accent-red-500: hsl(4.21, 72.15%, 84.51%);
    --accent-red-600: hsl(4.21, 72.15%, 84.51%);
    --accent-amber-100: hsla(24.23, 61.18%, 66.67%, 0.2);
    --accent-amber-200: hsla(24.23, 61.18%, 66.67%, 0.45);
    --accent-amber-300: hsl(24.55, 55.93%, 53.73%);
    --accent-amber-400: hsl(24.75, 76.19%, 41.18%);
    --accent-amber-500: hsl(23.68, 71.7%, 79.22%);
    --accent-amber-600: hsl(23.68, 71.7%, 79.22%);
    --accent-brown-100: hsla(32.22, 57.45%, 63.14%, 0.2);
    --accent-brown-200: hsla(32.22, 57.45%, 63.14%, 0.45);
    --accent-brown-300: hsl(32.6, 49.8%, 50%);
    --accent-brown-400: hsl(32.88, 76.84%, 37.25%);
    --accent-brown-500: hsl(31.69, 72.36%, 75.88%);
    --accent-brown-600: hsl(31.69, 72.36%, 75.88%);
    --accent-green-100: hsla(126.51, 53.53%, 52.75%, 0.2);
    --accent-green-200: hsla(126.51, 53.53%, 52.75%, 0.45);
    --accent-green-300: hsl(128.29, 58.29%, 41.37%);
    --accent-green-400: hsl(130.17, 76.62%, 30.2%);
    --accent-green-500: hsl(124.93, 72.83%, 63.92%);
    --accent-green-600: hsl(124.93, 72.83%, 63.92%);
    --accent-teal-100: hsla(178.74, 58.85%, 47.65%, 0.2);
    --accent-teal-200: hsla(178.74, 58.85%, 47.65%, 0.45);
    --accent-teal-300: hsl(180.92, 65.66%, 38.82%);
    --accent-teal-400: hsl(184, 76.92%, 30.59%);
    --accent-teal-500: hsl(176.6, 72.6%, 57.06%);
    --accent-teal-600: hsl(176.6, 72.6%, 57.06%);
    --accent-blue-100: hsla(206.09, 69.7%, 67.65%, 0.2);
    --accent-blue-200: hsla(206.09, 69.7%, 67.65%, 0.45);
    --accent-blue-300: hsl(208.38, 67.89%, 57.25%);
    --accent-blue-400: hsl(210, 76.47%, 46.67%);
    --accent-blue-500: hsl(201.48, 72.97%, 78.24%);
    --accent-blue-600: hsl(201.48, 72.97%, 78.24%);
    --accent-indigo-100: hsla(235.44, 73.83%, 79.02%, 0.2);
    --accent-indigo-200: hsla(235.44, 73.83%, 79.02%, 0.45);
    --accent-indigo-300: hsl(238.3, 75.71%, 72.55%);
    --accent-indigo-400: hsl(240, 76%, 65.69%);
    --accent-indigo-500: hsl(229.62, 72.22%, 85.88%);
    --accent-indigo-600: hsl(229.62, 72.22%, 85.88%);
    --accent-violet-100: hsla(255.56, 75.7%, 79.02%, 0.2);
    --accent-violet-200: hsla(255.56, 75.7%, 79.02%, 0.45);
    --accent-violet-300: hsl(258.21, 75.68%, 70.98%);
    --accent-violet-400: hsl(259.86, 76.72%, 62.94%);
    --accent-violet-500: hsl(248.75, 72.73%, 87.06%);
    --accent-violet-600: hsl(248.75, 72.73%, 87.06%);
    --accent-purple-100: hsla(275.33, 75%, 76.47%, 0.2);
    --accent-purple-200: hsla(275.33, 75%, 76.47%, 0.45);
    --accent-purple-300: hsl(278.44, 75.29%, 66.67%);
    --accent-purple-400: hsl(279.88, 76.26%, 57.06%);
    --accent-purple-500: hsl(268.24, 71.83%, 86.08%);
    --accent-purple-600: hsl(268.24, 71.83%, 86.08%);
    --accent-pink-100: hsla(335.29, 75%, 73.33%, 0.2);
    --accent-pink-200: hsla(335.29, 75%, 73.33%, 0.45);
    --accent-pink-300: hsl(337.96, 75.38%, 61.76%);
    --accent-pink-400: hsl(340, 76.19%, 50.59%);
    --accent-pink-500: hsl(326.32, 72.15%, 84.51%);
    --accent-pink-600: hsl(326.32, 72.15%, 84.51%);
    --text-base-400: hsla(0, 0%, 100%, 0.45);
    --text-base-500: hsla(0, 0%, 100%, 0.7);
    --text-base-600: hsl(0, 0%, 100%);
    --text-base-action: var(--primary-500);
    --text-base-info: var(--info-500);
    --text-base-success: var(--success-500);
    --text-base-warning: var(--warning-500);
    --text-base-danger: var(--danger-500);
    --text-contrast-400: hsla(0, 0%, 100%, 0.45);
    --text-contrast-500: hsla(0, 0%, 100%, 0.7);
    --text-contrast-600: hsl(0, 0%, 100%);
    --text-contrast-action: var(--primary-600);
    --text-contrast-info: var(--info-600);
    --text-contrast-success: var(--success-600);
    --text-contrast-warning: var(--warning-600);
    --text-contrast-danger: var(--danger-600);
    --alt-base-100: hsla(180, 1.79%, 78.04%, 0.08);
    --alt-base-200: hsla(180, 1.79%, 78.04%, 0.12);
    --alt-base-300: hsla(180, 1.79%, 78.04%, 0.16);
    --alt-base-400: hsla(180, 1.79%, 78.04%, 0.24);
    --alt-base-500: hsla(180, 1.79%, 78.04%, 0.32);
    --alt-base-600: hsla(180, 1.79%, 78.04%, 0.44);
    --alt-contrast-100: hsla(180, 1.79%, 78.04%, 0.08);
    --alt-contrast-200: hsla(180, 1.79%, 78.04%, 0.12);
    --alt-contrast-300: hsla(180, 1.79%, 78.04%, 0.16);
    --alt-contrast-400: hsla(180, 1.79%, 78.04%, 0.24);
    --alt-contrast-500: hsla(180, 1.79%, 78.04%, 0.32);
    --alt-contrast-600: hsla(180, 1.79%, 78.04%, 0.44);
    --utility-white: hsl(0, 0%, 100%);
    --utility-black: hsl(0, 0%, 3.92%);
    --utility-transparent: hsla(0, 0%, 0%, 0);
    --utility-shade-100: hsla(0, 0%, 0%, 0.1);
    --utility-shade-200: hsla(0, 0%, 0%, 0.2);
    --utility-shade-300: hsla(0, 0%, 0%, 0.3);
    --utility-shade-400: hsla(0, 0%, 0%, 0.4);
    --utility-shade-500: hsla(0, 0%, 0%, 0.5);
    --utility-shade-600: hsla(0, 0%, 0%, 0.6);
    --utility-tint-100: hsla(180, 1.79%, 78.04%, 0.08);
    --utility-tint-200: hsla(180, 1.79%, 78.04%, 0.12);
    --utility-tint-300: hsla(180, 1.79%, 78.04%, 0.16);
    --utility-tint-400: hsla(180, 1.79%, 78.04%, 0.24);
    --utility-tint-500: hsla(180, 1.79%, 78.04%, 0.32);
    --utility-tint-600: hsla(180, 1.79%, 78.04%, 0.44);
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
    --fill-base-100: hsl(180, 1.41%, 13.92%);
    --fill-base-200: hsl(180, 1.64%, 11.96%);
    --fill-base-300: hsl(180, 1.96%, 10%);
    --fill-base-400: hsl(180, 2.44%, 8.04%);
    --fill-base-500: hsl(0, 0%, 5.88%);
    --fill-base-600: hsl(0, 0%, 3.92%);
    --fill-contrast-100: hsl(180, 0.81%, 24.12%);
    --fill-contrast-200: hsl(240, 0.88%, 22.16%);
    --fill-contrast-300: hsl(0, 0%, 20%);
    --fill-contrast-400: hsl(0, 0%, 18.04%);
    --fill-contrast-500: hsl(180, 1.23%, 15.88%);
    --fill-contrast-600: hsl(180, 1.41%, 13.92%);
    --stroke-base-100: hsl(240, 0.88%, 22.16%);
    --stroke-base-200: hsl(180, 0.79%, 24.9%);
    --stroke-base-300: hsl(180, 0.68%, 28.82%);
    --stroke-base-400: hsl(180, 0.58%, 33.92%);
    --stroke-base-500: hsl(210, 0.98%, 40%);
    --stroke-base-600: hsl(210, 0.83%, 47.06%);
    --stroke-contrast-100: hsl(180, 0.7%, 28.04%);
    --stroke-contrast-200: hsl(180, 0.65%, 30%);
    --stroke-contrast-300: hsl(180, 0.59%, 33.14%);
    --stroke-contrast-400: hsl(180, 0.55%, 35.88%);
    --stroke-contrast-500: hsl(180, 0.5%, 39.02%);
    --stroke-contrast-600: hsl(180, 0.44%, 44.9%);
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
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/source-variables.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --accent-red-100: hsla(4.1, 84.17%, 72.75%, 0.125);\n    --accent-red-200: hsla(4.1, 84.17%, 72.75%, 0.33);\n    --accent-red-300: hsl(3.93, 83.17%, 60.39%);\n    --accent-red-400: hsl(4.09, 90.16%, 47.84%);\n    --accent-red-500: hsl(4.18, 89.33%, 44.12%);\n    --accent-red-600: hsl(3.69, 86.67%, 85.29%);\n    --accent-amber-100: hsla(24.59, 70.11%, 65.88%, 0.125);\n    --accent-amber-200: hsla(24.59, 70.11%, 65.88%, 0.33);\n    --accent-amber-300: hsl(24.71, 63.49%, 52.75%);\n    --accent-amber-400: hsl(24.92, 90.15%, 39.8%);\n    --accent-amber-500: hsl(25.3, 89.25%, 36.47%);\n    --accent-amber-600: hsl(24.13, 85.19%, 78.82%);\n    --accent-brown-100: hsla(32.34, 65.98%, 61.96%, 0.125);\n    --accent-brown-200: hsla(32.34, 65.98%, 61.96%, 0.33);\n    --accent-brown-300: hsl(32.88, 58.87%, 48.63%);\n    --accent-brown-400: hsl(33.29, 90.11%, 35.69%);\n    --accent-brown-500: hsl(33.42, 89.22%, 32.75%);\n    --accent-brown-600: hsl(31.64, 85.94%, 74.9%);\n    --accent-green-100: hsla(126.35, 87.1%, 42.55%, 0.125);\n    --accent-green-200: hsla(126.35, 87.1%, 42.55%, 0.33);\n    --accent-green-300: hsl(127.55, 87.85%, 35.49%);\n    --accent-green-400: hsl(130.15, 90.28%, 28.24%);\n    --accent-green-500: hsl(131.6, 89.47%, 26.08%);\n    --accent-green-600: hsl(124.95, 85.83%, 49.8%);\n    --accent-teal-100: hsla(178.34, 86.6%, 40.98%, 0.125);\n    --accent-teal-200: hsla(178.34, 86.6%, 40.98%, 0.33);\n    --accent-teal-300: hsl(180.78, 88.51%, 34.12%);\n    --accent-teal-400: hsl(184.09, 90.41%, 28.63%);\n    --accent-teal-500: hsl(186.29, 88.57%, 27.45%);\n    --accent-teal-600: hsl(176.57, 86.07%, 47.84%);\n    --accent-blue-100: hsla(206.03, 80.95%, 67.06%, 0.125);\n    --accent-blue-200: hsla(206.03, 80.95%, 67.06%, 0.33);\n    --accent-blue-300: hsl(208.26, 77.48%, 56.47%);\n    --accent-blue-400: hsl(210, 89.74%, 45.88%);\n    --accent-blue-500: hsl(212.54, 88.55%, 44.51%);\n    --accent-blue-600: hsl(201.43, 85.96%, 77.65%);\n    --accent-indigo-100: hsla(235.91, 88%, 80.39%, 0.125);\n    --accent-indigo-200: hsla(235.91, 88%, 80.39%, 0.33);\n    --accent-indigo-300: hsl(238.49, 89.47%, 73.92%);\n    --accent-indigo-400: hsl(240, 90.3%, 67.65%);\n    --accent-indigo-500: hsl(244.05, 88.11%, 63.73%);\n    --accent-indigo-600: hsl(230.69, 85.29%, 86.67%);\n    --accent-violet-100: hsla(256, 88.24%, 80%, 0.125);\n    --accent-violet-200: hsla(256, 88.24%, 80%, 0.33);\n    --accent-violet-300: hsl(258.75, 90.14%, 72.16%);\n    --accent-violet-400: hsl(260.12, 90.11%, 64.31%);\n    --accent-violet-500: hsl(264.13, 84.83%, 58.63%);\n    --accent-violet-600: hsl(250, 87.1%, 87.84%);\n    --accent-purple-100: hsla(276, 88.24%, 76.67%, 0.125);\n    --accent-purple-200: hsla(276, 88.24%, 76.67%, 0.33);\n    --accent-purple-300: hsl(278.54, 89.35%, 66.86%);\n    --accent-purple-400: hsl(280, 90%, 56.86%);\n    --accent-purple-500: hsl(283.23, 73.23%, 50.2%);\n    --accent-purple-600: hsl(268.97, 85.29%, 86.67%);\n    --accent-pink-100: hsla(334.87, 84.17%, 72.75%, 0.125);\n    --accent-pink-200: hsla(334.87, 84.17%, 72.75%, 0.33);\n    --accent-pink-300: hsl(338.44, 82.27%, 60.2%);\n    --accent-pink-400: hsl(340, 90.12%, 47.65%);\n    --accent-pink-500: hsl(343.88, 88.55%, 44.51%);\n    --accent-pink-600: hsl(326.77, 86.67%, 85.29%);\n    --text-base-400: hsla(0, 0%, 5.88%, 0.45);\n    --text-base-500: hsla(0, 0%, 5.88%, 0.65);\n    --text-base-600: hsl(0, 0%, 5.88%);\n    --text-base-action: var(--primary-500);\n    --text-base-info: var(--info-500);\n    --text-base-success: var(--success-500);\n    --text-base-warning: var(--warning-500);\n    --text-base-danger: var(--danger-500);\n    --text-contrast-400: hsla(0, 0%, 100%, 0.45);\n    --text-contrast-500: hsla(0, 0%, 100%, 0.7);\n    --text-contrast-600: hsl(0, 0%, 100%);\n    --text-contrast-action: var(--primary-600);\n    --text-contrast-info: var(--info-600);\n    --text-contrast-success: var(--success-600);\n    --text-contrast-warning: var(--warning-600);\n    --text-contrast-danger: var(--danger-600);\n    --alt-base-100: hsla(180, 100%, 13.92%, 0.04);\n    --alt-base-200: hsla(180, 100%, 13.92%, 0.08);\n    --alt-base-300: hsla(180, 100%, 13.92%, 0.16);\n    --alt-base-400: hsla(180, 100%, 13.92%, 0.24);\n    --alt-base-500: hsla(180, 100%, 13.92%, 0.32);\n    --alt-base-600: hsla(180, 100%, 13.92%, 0.44);\n    --alt-contrast-100: hsla(0, 0%, 100%, 0.04);\n    --alt-contrast-200: hsla(0, 0%, 100%, 0.08);\n    --alt-contrast-300: hsla(0, 0%, 100%, 0.12);\n    --alt-contrast-400: hsla(0, 0%, 100%, 0.16);\n    --alt-contrast-500: hsla(0, 0%, 100%, 0.24);\n    --alt-contrast-600: hsla(0, 0%, 100%, 0.32);\n    --utility-white: hsl(0, 0%, 100%);\n    --utility-black: hsl(0, 0%, 3.92%);\n    --utility-transparent: hsla(0, 0%, 100%, 0);\n    --utility-shade-100: hsla(180, 100%, 8.04%, 0.04);\n    --utility-shade-200: hsla(180, 100%, 8.04%, 0.08);\n    --utility-shade-300: hsla(180, 100%, 8.04%, 0.16);\n    --utility-shade-400: hsla(180, 100%, 8.04%, 0.24);\n    --utility-shade-500: hsla(180, 100%, 8.04%, 0.32);\n    --utility-shade-600: hsla(180, 100%, 8.04%, 0.44);\n    --utility-tint-100: hsla(0, 0%, 100%, 0.5);\n    --utility-tint-200: hsla(0, 0%, 100%, 0.6);\n    --utility-tint-300: hsla(0, 0%, 100%, 0.7);\n    --utility-tint-400: hsla(0, 0%, 100%, 0.8);\n    --utility-tint-500: hsla(0, 0%, 100%, 0.9);\n    --utility-tint-600: hsl(0, 0%, 100%);\n    --primary-100: var(--accent-blue-100);\n    --primary-200: var(--accent-blue-200);\n    --primary-300: var(--accent-blue-300);\n    --primary-400: var(--accent-blue-400);\n    --primary-500: var(--accent-blue-500);\n    --primary-600: var(--accent-blue-600);\n    --info-100: var(--accent-teal-100);\n    --info-200: var(--accent-teal-200);\n    --info-300: var(--accent-teal-300);\n    --info-400: var(--accent-teal-400);\n    --info-500: var(--accent-teal-500);\n    --info-600: var(--accent-teal-600);\n    --success-100: var(--accent-green-100);\n    --success-200: var(--accent-green-200);\n    --success-300: var(--accent-green-300);\n    --success-400: var(--accent-green-400);\n    --success-500: var(--accent-green-500);\n    --success-600: var(--accent-green-600);\n    --warning-100: var(--accent-amber-100);\n    --warning-200: var(--accent-amber-200);\n    --warning-300: var(--accent-amber-300);\n    --warning-400: var(--accent-amber-400);\n    --warning-500: var(--accent-amber-500);\n    --warning-600: var(--accent-amber-600);\n    --danger-100: var(--accent-red-100);\n    --danger-200: var(--accent-red-200);\n    --danger-300: var(--accent-red-300);\n    --danger-400: var(--accent-red-400);\n    --danger-500: var(--accent-red-500);\n    --danger-600: var(--accent-red-600);\n    --fill-base-100: hsl(0, 0%, 100%);\n    --fill-base-200: hsl(0, 0%, 98.04%);\n    --fill-base-300: hsl(0, 0%, 96.08%);\n    --fill-base-400: hsl(0, 0%, 94.12%);\n    --fill-base-500: hsl(180, 2.44%, 91.96%);\n    --fill-base-600: hsl(180, 1.64%, 88.04%);\n    --fill-contrast-100: hsl(180, 0.81%, 24.12%);\n    --fill-contrast-200: hsl(240, 0.88%, 22.16%);\n    --fill-contrast-300: hsl(0, 0%, 20%);\n    --fill-contrast-400: hsl(0, 0%, 18.04%);\n    --fill-contrast-500: hsl(180, 1.23%, 15.88%);\n    --fill-contrast-600: hsl(180, 1.41%, 13.92%);\n    --stroke-base-100: hsl(0, 0%, 92.94%);\n    --stroke-base-200: hsl(180, 1.64%, 88.04%);\n    --stroke-base-300: hsl(180, 1.3%, 84.9%);\n    --stroke-base-400: hsl(0, 0%, 80%);\n    --stroke-base-500: hsl(180, 0.65%, 70%);\n    --stroke-base-600: hsl(180, 0.43%, 53.92%);\n    --stroke-contrast-100: hsl(180, 0.7%, 28.04%);\n    --stroke-contrast-200: hsl(180, 0.65%, 30%);\n    --stroke-contrast-300: hsl(180, 0.59%, 33.14%);\n    --stroke-contrast-400: hsl(180, 0.55%, 35.88%);\n    --stroke-contrast-500: hsl(180, 0.5%, 39.02%);\n    --stroke-contrast-600: hsl(180, 0.44%, 44.9%);\n}\n\n.figma-dark {\n    --accent-red-100: hsla(4.08, 75.18%, 73.14%, 0.2);\n    --accent-red-200: hsla(4.08, 75.18%, 73.14%, 0.45);\n    --accent-red-300: hsl(4.08, 75.38%, 61.76%);\n    --accent-red-400: hsl(4.04, 76.28%, 50.39%);\n    --accent-red-500: hsl(4.21, 72.15%, 84.51%);\n    --accent-red-600: hsl(4.21, 72.15%, 84.51%);\n    --accent-amber-100: hsla(24.23, 61.18%, 66.67%, 0.2);\n    --accent-amber-200: hsla(24.23, 61.18%, 66.67%, 0.45);\n    --accent-amber-300: hsl(24.55, 55.93%, 53.73%);\n    --accent-amber-400: hsl(24.75, 76.19%, 41.18%);\n    --accent-amber-500: hsl(23.68, 71.7%, 79.22%);\n    --accent-amber-600: hsl(23.68, 71.7%, 79.22%);\n    --accent-brown-100: hsla(32.22, 57.45%, 63.14%, 0.2);\n    --accent-brown-200: hsla(32.22, 57.45%, 63.14%, 0.45);\n    --accent-brown-300: hsl(32.6, 49.8%, 50%);\n    --accent-brown-400: hsl(32.88, 76.84%, 37.25%);\n    --accent-brown-500: hsl(31.69, 72.36%, 75.88%);\n    --accent-brown-600: hsl(31.69, 72.36%, 75.88%);\n    --accent-green-100: hsla(126.51, 53.53%, 52.75%, 0.2);\n    --accent-green-200: hsla(126.51, 53.53%, 52.75%, 0.45);\n    --accent-green-300: hsl(128.29, 58.29%, 41.37%);\n    --accent-green-400: hsl(130.17, 76.62%, 30.2%);\n    --accent-green-500: hsl(124.93, 72.83%, 63.92%);\n    --accent-green-600: hsl(124.93, 72.83%, 63.92%);\n    --accent-teal-100: hsla(178.74, 58.85%, 47.65%, 0.2);\n    --accent-teal-200: hsla(178.74, 58.85%, 47.65%, 0.45);\n    --accent-teal-300: hsl(180.92, 65.66%, 38.82%);\n    --accent-teal-400: hsl(184, 76.92%, 30.59%);\n    --accent-teal-500: hsl(176.6, 72.6%, 57.06%);\n    --accent-teal-600: hsl(176.6, 72.6%, 57.06%);\n    --accent-blue-100: hsla(206.09, 69.7%, 67.65%, 0.2);\n    --accent-blue-200: hsla(206.09, 69.7%, 67.65%, 0.45);\n    --accent-blue-300: hsl(208.38, 67.89%, 57.25%);\n    --accent-blue-400: hsl(210, 76.47%, 46.67%);\n    --accent-blue-500: hsl(201.48, 72.97%, 78.24%);\n    --accent-blue-600: hsl(201.48, 72.97%, 78.24%);\n    --accent-indigo-100: hsla(235.44, 73.83%, 79.02%, 0.2);\n    --accent-indigo-200: hsla(235.44, 73.83%, 79.02%, 0.45);\n    --accent-indigo-300: hsl(238.3, 75.71%, 72.55%);\n    --accent-indigo-400: hsl(240, 76%, 65.69%);\n    --accent-indigo-500: hsl(229.62, 72.22%, 85.88%);\n    --accent-indigo-600: hsl(229.62, 72.22%, 85.88%);\n    --accent-violet-100: hsla(255.56, 75.7%, 79.02%, 0.2);\n    --accent-violet-200: hsla(255.56, 75.7%, 79.02%, 0.45);\n    --accent-violet-300: hsl(258.21, 75.68%, 70.98%);\n    --accent-violet-400: hsl(259.86, 76.72%, 62.94%);\n    --accent-violet-500: hsl(248.75, 72.73%, 87.06%);\n    --accent-violet-600: hsl(248.75, 72.73%, 87.06%);\n    --accent-purple-100: hsla(275.33, 75%, 76.47%, 0.2);\n    --accent-purple-200: hsla(275.33, 75%, 76.47%, 0.45);\n    --accent-purple-300: hsl(278.44, 75.29%, 66.67%);\n    --accent-purple-400: hsl(279.88, 76.26%, 57.06%);\n    --accent-purple-500: hsl(268.24, 71.83%, 86.08%);\n    --accent-purple-600: hsl(268.24, 71.83%, 86.08%);\n    --accent-pink-100: hsla(335.29, 75%, 73.33%, 0.2);\n    --accent-pink-200: hsla(335.29, 75%, 73.33%, 0.45);\n    --accent-pink-300: hsl(337.96, 75.38%, 61.76%);\n    --accent-pink-400: hsl(340, 76.19%, 50.59%);\n    --accent-pink-500: hsl(326.32, 72.15%, 84.51%);\n    --accent-pink-600: hsl(326.32, 72.15%, 84.51%);\n    --text-base-400: hsla(0, 0%, 100%, 0.45);\n    --text-base-500: hsla(0, 0%, 100%, 0.7);\n    --text-base-600: hsl(0, 0%, 100%);\n    --text-base-action: var(--primary-500);\n    --text-base-info: var(--info-500);\n    --text-base-success: var(--success-500);\n    --text-base-warning: var(--warning-500);\n    --text-base-danger: var(--danger-500);\n    --text-contrast-400: hsla(0, 0%, 100%, 0.45);\n    --text-contrast-500: hsla(0, 0%, 100%, 0.7);\n    --text-contrast-600: hsl(0, 0%, 100%);\n    --text-contrast-action: var(--primary-600);\n    --text-contrast-info: var(--info-600);\n    --text-contrast-success: var(--success-600);\n    --text-contrast-warning: var(--warning-600);\n    --text-contrast-danger: var(--danger-600);\n    --alt-base-100: hsla(180, 1.79%, 78.04%, 0.08);\n    --alt-base-200: hsla(180, 1.79%, 78.04%, 0.12);\n    --alt-base-300: hsla(180, 1.79%, 78.04%, 0.16);\n    --alt-base-400: hsla(180, 1.79%, 78.04%, 0.24);\n    --alt-base-500: hsla(180, 1.79%, 78.04%, 0.32);\n    --alt-base-600: hsla(180, 1.79%, 78.04%, 0.44);\n    --alt-contrast-100: hsla(180, 1.79%, 78.04%, 0.08);\n    --alt-contrast-200: hsla(180, 1.79%, 78.04%, 0.12);\n    --alt-contrast-300: hsla(180, 1.79%, 78.04%, 0.16);\n    --alt-contrast-400: hsla(180, 1.79%, 78.04%, 0.24);\n    --alt-contrast-500: hsla(180, 1.79%, 78.04%, 0.32);\n    --alt-contrast-600: hsla(180, 1.79%, 78.04%, 0.44);\n    --utility-white: hsl(0, 0%, 100%);\n    --utility-black: hsl(0, 0%, 3.92%);\n    --utility-transparent: hsla(0, 0%, 0%, 0);\n    --utility-shade-100: hsla(0, 0%, 0%, 0.1);\n    --utility-shade-200: hsla(0, 0%, 0%, 0.2);\n    --utility-shade-300: hsla(0, 0%, 0%, 0.3);\n    --utility-shade-400: hsla(0, 0%, 0%, 0.4);\n    --utility-shade-500: hsla(0, 0%, 0%, 0.5);\n    --utility-shade-600: hsla(0, 0%, 0%, 0.6);\n    --utility-tint-100: hsla(180, 1.79%, 78.04%, 0.08);\n    --utility-tint-200: hsla(180, 1.79%, 78.04%, 0.12);\n    --utility-tint-300: hsla(180, 1.79%, 78.04%, 0.16);\n    --utility-tint-400: hsla(180, 1.79%, 78.04%, 0.24);\n    --utility-tint-500: hsla(180, 1.79%, 78.04%, 0.32);\n    --utility-tint-600: hsla(180, 1.79%, 78.04%, 0.44);\n    --primary-100: var(--accent-blue-100);\n    --primary-200: var(--accent-blue-200);\n    --primary-300: var(--accent-blue-300);\n    --primary-400: var(--accent-blue-400);\n    --primary-500: var(--accent-blue-500);\n    --primary-600: var(--accent-blue-600);\n    --info-100: var(--accent-teal-100);\n    --info-200: var(--accent-teal-200);\n    --info-300: var(--accent-teal-300);\n    --info-400: var(--accent-teal-400);\n    --info-500: var(--accent-teal-500);\n    --info-600: var(--accent-teal-600);\n    --success-100: var(--accent-green-100);\n    --success-200: var(--accent-green-200);\n    --success-300: var(--accent-green-300);\n    --success-400: var(--accent-green-400);\n    --success-500: var(--accent-green-500);\n    --success-600: var(--accent-green-600);\n    --warning-100: var(--accent-amber-100);\n    --warning-200: var(--accent-amber-200);\n    --warning-300: var(--accent-amber-300);\n    --warning-400: var(--accent-amber-400);\n    --warning-500: var(--accent-amber-500);\n    --warning-600: var(--accent-amber-600);\n    --danger-100: var(--accent-red-100);\n    --danger-200: var(--accent-red-200);\n    --danger-300: var(--accent-red-300);\n    --danger-400: var(--accent-red-400);\n    --danger-500: var(--accent-red-500);\n    --danger-600: var(--accent-red-600);\n    --fill-base-100: hsl(180, 1.41%, 13.92%);\n    --fill-base-200: hsl(180, 1.64%, 11.96%);\n    --fill-base-300: hsl(180, 1.96%, 10%);\n    --fill-base-400: hsl(180, 2.44%, 8.04%);\n    --fill-base-500: hsl(0, 0%, 5.88%);\n    --fill-base-600: hsl(0, 0%, 3.92%);\n    --fill-contrast-100: hsl(180, 0.81%, 24.12%);\n    --fill-contrast-200: hsl(240, 0.88%, 22.16%);\n    --fill-contrast-300: hsl(0, 0%, 20%);\n    --fill-contrast-400: hsl(0, 0%, 18.04%);\n    --fill-contrast-500: hsl(180, 1.23%, 15.88%);\n    --fill-contrast-600: hsl(180, 1.41%, 13.92%);\n    --stroke-base-100: hsl(240, 0.88%, 22.16%);\n    --stroke-base-200: hsl(180, 0.79%, 24.9%);\n    --stroke-base-300: hsl(180, 0.68%, 28.82%);\n    --stroke-base-400: hsl(180, 0.58%, 33.92%);\n    --stroke-base-500: hsl(210, 0.98%, 40%);\n    --stroke-base-600: hsl(210, 0.83%, 47.06%);\n    --stroke-contrast-100: hsl(180, 0.7%, 28.04%);\n    --stroke-contrast-200: hsl(180, 0.65%, 30%);\n    --stroke-contrast-300: hsl(180, 0.59%, 33.14%);\n    --stroke-contrast-400: hsl(180, 0.55%, 35.88%);\n    --stroke-contrast-500: hsl(180, 0.5%, 39.02%);\n    --stroke-contrast-600: hsl(180, 0.44%, 44.9%);\n}\n\n[data-radii=compact],\n.radii-compact {\n    --radii-none: 0px;\n    --radii-sm: 3px;\n    --radii-base: 4px;\n    --radii-md: 6px;\n    --radii-lg: 9px;\n    --radii-xl: 13px;\n    --radii-xl2: 20px;\n    --radii-round: 999px;\n}\n\n[data-radii=base],\n.radii-base {\n    --radii-none: 0px;\n    --radii-sm: 4.5px;\n    --radii-base: 6px;\n    --radii-md: 9px;\n    --radii-lg: 12px;\n    --radii-xl: 16px;\n    --radii-xl2: 22px;\n    --radii-round: 999px;\n}\n\n[data-radii=large],\n.radii-large {\n    --radii-none: 0px;\n    --radii-sm: 6px;\n    --radii-base: 8px;\n    --radii-md: 12px;\n    --radii-lg: 16px;\n    --radii-xl: 24px;\n    --radii-xl2: 40px;\n    --radii-round: 999px;\n}\n\n[data-spacing=compact],\n.spacing-compact {\n    --spacing-xs4: 2px;\n    --spacing-xs3: 4px;\n    --spacing-xs2: 6px;\n    --spacing-xs: 8px;\n    --spacing-sm: 12px;\n    --spacing-base: 16px;\n    --spacing-md: 20px;\n    --spacing-lg: 24px;\n    --spacing-xl: 28px;\n    --spacing-xl2: 32px;\n    --spacing-xl3: 40px;\n    --spacing-xl4: 48px;\n    --spacing-xl5: 60px;\n    --spacing-minor-xs4: 1px;\n    --spacing-minor-xs3: 2px;\n    --spacing-minor-xs2: 4px;\n    --spacing-minor-xs: 6px;\n    --spacing-minor-sm: 8px;\n    --spacing-minor-base: 12px;\n    --spacing-minor-md: 16px;\n    --spacing-minor-lg: 20px;\n    --spacing-minor-xl: 24px;\n    --spacing-minor-xl2: 28px;\n    --spacing-minor-xl3: 36px;\n    --spacing-minor-xl4: 44px;\n    --spacing-minor-xl5: 56px;\n}\n\n[data-spacing=base],\n.spacing-base {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 6px;\n    --spacing-xs2: 8px;\n    --spacing-xs: 12px;\n    --spacing-sm: 16px;\n    --spacing-base: 20px;\n    --spacing-md: 24px;\n    --spacing-lg: 28px;\n    --spacing-xl: 32px;\n    --spacing-xl2: 40px;\n    --spacing-xl3: 48px;\n    --spacing-xl4: 60px;\n    --spacing-xl5: 72px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 6px;\n    --spacing-minor-xs: 8px;\n    --spacing-minor-sm: 12px;\n    --spacing-minor-base: 16px;\n    --spacing-minor-md: 20px;\n    --spacing-minor-lg: 24px;\n    --spacing-minor-xl: 28px;\n    --spacing-minor-xl2: 36px;\n    --spacing-minor-xl3: 44px;\n    --spacing-minor-xl4: 56px;\n    --spacing-minor-xl5: 68px;\n}\n\n[data-spacing=large],\n.spacing-large {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 8px;\n    --spacing-xs2: 12px;\n    --spacing-xs: 16px;\n    --spacing-sm: 20px;\n    --spacing-base: 24px;\n    --spacing-md: 28px;\n    --spacing-lg: 36px;\n    --spacing-xl: 44px;\n    --spacing-xl2: 52px;\n    --spacing-xl3: 64px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 8px;\n    --spacing-minor-xs: 12px;\n    --spacing-minor-sm: 16px;\n    --spacing-minor-base: 20px;\n    --spacing-minor-md: 24px;\n    --spacing-minor-lg: 32px;\n    --spacing-minor-xl: 40px;\n    --spacing-minor-xl2: 48px;\n    --spacing-minor-xl3: 60px;\n}\n\n[data-spacing=touch],\n.spacing-touch {\n    --spacing-xs4: 4px;\n    --spacing-xs3: 6px;\n    --spacing-xs2: 8px;\n    --spacing-xs: 12px;\n    --spacing-sm: 16px;\n    --spacing-base: 16px;\n    --spacing-md: 16px;\n    --spacing-lg: 20px;\n    --spacing-xl: 24px;\n    --spacing-minor-xs4: 2px;\n    --spacing-minor-xs3: 4px;\n    --spacing-minor-xs2: 6px;\n    --spacing-minor-xs: 8px;\n    --spacing-minor-sm: 12px;\n    --spacing-minor-base: 12px;\n    --spacing-minor-md: 12px;\n    --spacing-minor-lg: 16px;\n    --spacing-minor-xl: 20px;\n}\n\n[data-typography=compact],\n.typography-compact {\n    --font-size-xs2: 10px;\n    --font-size-xs: 11px;\n    --font-size-sm: 12px;\n    --font-size-base: 13px;\n    --font-size-md: 16px;\n    --font-size-lg: 19px;\n    --font-size-xl: 22px;\n    --font-size-xl2: 27px;\n    --font-size-xl3: 32px;\n    --font-size-xl4: 39px;\n    --font-size-xl5: 47px;\n    --font-size-xl6: 56px;\n    --font-size-xl7: 67px;\n    --line-height-xs2: 10px;\n    --line-height-xs: 12px;\n    --line-height-sm: 14px;\n    --line-height-base: 16px;\n    --line-height-md: 20px;\n    --line-height-lg: 24px;\n    --line-height-xl: 28px;\n    --line-height-xl2: 32px;\n    --line-height-xl3: 40px;\n    --line-height-xl4: 44px;\n    --line-height-xl5: 52px;\n    --line-height-xl6: 60px;\n    --line-height-xl7: 78px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 8px;\n    --paragraph-spacing-paragraph: 12px;\n    --paragraph-spacing-display: 16px;\n}\n\n[data-typography=base],\n.typography-base {\n    --font-size-xs2: 10px;\n    --font-size-xs: 11px;\n    --font-size-sm: 13px;\n    --font-size-base: 15px;\n    --font-size-md: 18px;\n    --font-size-lg: 22px;\n    --font-size-xl: 26px;\n    --font-size-xl2: 31px;\n    --font-size-xl3: 37px;\n    --font-size-xl4: 45px;\n    --font-size-xl5: 54px;\n    --font-size-xl6: 64px;\n    --font-size-xl7: 77px;\n    --line-height-xs2: 12px;\n    --line-height-xs: 14px;\n    --line-height-sm: 16px;\n    --line-height-base: 20px;\n    --line-height-md: 24px;\n    --line-height-lg: 28px;\n    --line-height-xl: 32px;\n    --line-height-xl2: 36px;\n    --line-height-xl3: 44px;\n    --line-height-xl4: 48px;\n    --line-height-xl5: 60px;\n    --line-height-xl6: 72px;\n    --line-height-xl7: 86px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 12px;\n    --paragraph-spacing-paragraph: 16px;\n    --paragraph-spacing-display: 20px;\n}\n\n[data-typography=large],\n.typography-large {\n    --font-size-xs2: 11px;\n    --font-size-xs: 12px;\n    --font-size-sm: 14px;\n    --font-size-base: 17px;\n    --font-size-md: 20px;\n    --font-size-lg: 24px;\n    --font-size-xl: 29px;\n    --font-size-xl2: 35px;\n    --font-size-xl3: 42px;\n    --font-size-xl4: 51px;\n    --font-size-xl5: 61px;\n    --font-size-xl6: 73px;\n    --font-size-xl7: 88px;\n    --line-height-xs2: 12px;\n    --line-height-xs: 16px;\n    --line-height-sm: 20px;\n    --line-height-base: 24px;\n    --line-height-md: 28px;\n    --line-height-lg: 32px;\n    --line-height-xl: 34px;\n    --line-height-xl2: 40px;\n    --line-height-xl3: 52px;\n    --line-height-xl4: 56px;\n    --line-height-xl5: 68px;\n    --line-height-xl6: 80px;\n    --line-height-xl7: 96px;\n    --letter-spacing-0: 0%px;\n    --paragraph-spacing-label: 12px;\n    --paragraph-spacing-paragraph: 16px;\n    --paragraph-spacing-display: 20px;\n}\n\n[data-iconSize=base],\n.iconSize-base {\n    --icon-size-sm: 12px;\n    --icon-size-base: 16px;\n    --icon-size-md: 24px;\n    --icon-size-lg: 32px;\n    --icon-size-xl: 48px;\n    --icon-size-xl2: 64px;\n    --icon-size-xl3: 96px;\n    --icon-size-xl4: 128px;\n    --icon-size-xl5: 256px;\n}\n\n[data-iconSize=touch],\n.iconSize-touch {\n    --icon-size-sm: 16px;\n    --icon-size-base: 24px;\n    --icon-size-md: 32px;\n    --icon-size-lg: 48px;\n    --icon-size-xl: 64px;\n    --icon-size-xl2: 96px;\n    --icon-size-xl3: 128px;\n    --icon-size-xl4: 256px;\n    --icon-size-xl5: 512px;\n}\n\n:root {\n    --opacity-0: 0;\n    --opacity-5: 0.5;\n    --opacity-10: 0.1;\n    --opacity-15: 0.15;\n    --opacity-20: 0.2;\n    --opacity-25: 0.25;\n    --opacity-30: 0.3;\n    --opacity-35: 0.35;\n    --opacity-40: 0.4;\n    --opacity-45: 0.45;\n    --opacity-50: 0.5;\n    --opacity-55: 0.55;\n    --opacity-60: 0.6;\n    --opacity-65: 0.65;\n    --opacity-70: 0.7;\n    --opacity-75: 0.75;\n    --opacity-80: 0.8;\n    --opacity-85: 0.85;\n    --opacity-90: 0.9;\n    --opacity-95: 0.95;\n    --opacity-100: 1;\n}\n\n:root {\n    --shadow-0: 0px 0.75px 0.5px 0px var(--box-shadow-color);\n    --shadow-1: 0px 1px 2px -1px var(--box-shadow-color), 0px 2px 4px -1px var(--box-shadow-color);\n    --shadow-2: 0px 2px 4px -2px var(--box-shadow-color), 0px 4px 6px -2px var(--box-shadow-color);\n    --shadow-3: 0px 4px 6px -4px var(--box-shadow-color), 0px 10px 15px -3px var(--box-shadow-color);\n    --shadow-4: 0px 12px 10px -6px var(--box-shadow-color), 0px 20px 25px -5px var(--box-shadow-color);\n    --shadow-5: 0px 23px 28px -7px var(--box-shadow-color), 0px 16px 10px -7px var(--box-shadow-color), 0px 24px 48px -10px var(--box-shadow-color);\n}"],"sourceRoot":""}]);
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
    font-size: var(--font-size-base);
    line-height: var(--line-height-base);
    color: var(--text-base-600);
    margin: 0;
    overflow: hidden;
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
}`, "",{"version":3,"sources":["webpack://./src/ui/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n    --spacing: 0.5rem 1rem;\n    --slider-thumb-size: calc(var(--line-height-md) + var(--spacing-minor-xs));\n    --slider-track-size: calc(var(--slider-thumb-size) / 4);\n    --slider-margin: var(--slider-thumb-size);\n    --scrollbar-width: 8px;\n    --form-gap: var(--spacing-sm);\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    background-color: var(--fill-base-300);\n    font-size: var(--font-size-base);\n    line-height: var(--line-height-base);\n    color: var(--text-base-600);\n    margin: 0;\n    overflow: hidden;\n}\n\nhtml,\nbody {\n    height: 100%;\n}\n\na {\n    color: var(--primary-500);\n}\n\na:hover {\n    text-decoration: underline;\n}\n\n::-webkit-scrollbar {\n    width: var(--scrollbar-width);\n    height: var(--scrollbar-width);\n}\n\n::-webkit-scrollbar-thumb {\n    /* Foreground */\n    background: red;\n    background: var(--stroke-base-600);\n    border-radius: 999px;\n    border: 2px solid transparent;\n    background-clip: padding-box;\n}\n\n::-webkit-scrollbar-track {\n    /* Background */\n    background: transparent;\n}\n\n.card {\n    background-color: var(--fill-base-100);\n    border-radius: var(--radii-lg);\n    padding: var(--spacing-minor-md) var(--spacing-md);\n    gap: var(--spacing-minor-base);\n\n    @apply flex flex-col;\n}\n\n.brand-card {\n    --bg-color: var(--primary-400);\n    background-color: var(--bg-color);\n    color: var(--text-contrast-600);\n\n    & .slider {\n        transition: opacity 200ms ease-in-out;\n    }\n\n    &.disabled .slider {\n        opacity: 0;\n        pointer-events: none;\n    }\n}\n\n.height-expander {\n    display: grid;\n    grid-template-rows: 1fr;\n    transition: all 200ms ease-out;\n    align-items: end;\n    overflow: hidden;\n\n    &.collapsed {\n        opacity: 0;\n        grid-template-rows: 0fr;\n    }\n\n    &>* {\n        overflow: hidden;\n    }\n}\n\n.card-sticky {\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n    &::before {\n        content: \"\";\n        display: block;\n        pointer-events: none;\n        position: absolute;\n        inset: calc(-1 * var(--form-gap));\n        bottom: 33%;\n        background-image: linear-gradient(180deg, var(--fill-base-300) 70%, transparent);\n        z-index: -1;\n    }\n\n    .card {\n        position: relative;\n    }\n}\n\n.sentinal {\n    height: var(--spacing-xs2);\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: transparent;\n}\n\n.is-pinned .card {\n    @apply shadow-5 shadow-utility-shade-300;\n\n    & .height-expander {\n        opacity: 0;\n        grid-template-rows: 0fr;\n        margin-bottom: calc(var(--spacing-minor-base) * -1);\n    }\n\n    /* & .instruction {\n        display: none;\n    } */\n\n    & .radio-segment {\n        background-color: var(--alt-contrast-200);\n        outline-color: var(--alt-contrast-200);\n    }\n\n    & .radio-segment input[type=radio]:checked+.container {\n        color: var(--text-base-600)\n    }\n}\n\n\nform {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    overflow: hidden;\n    margin: 0;\n}\n\nform .container {\n    flex: 1;\n    overflow: auto;\n    overflow-x: hidden;\n    padding: var(--form-gap);\n    padding-right: calc(var(--form-gap) - var(--scrollbar-width));\n    gap: var(--form-gap);\n}\n\nbutton {\n    appearance: none;\n    border-radius: var(--radii-base);\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    color: var(--text-base-action);\n\n    & .spinner {\n        display: none;\n    }\n\n    &.loading {\n        position: relative;\n    }\n\n    &.loading .spinner {\n        display: block;\n        position: absolute;\n        left: calc(50% - var(--line-height-base)/2);\n    }\n\n     &.loading .text-label {\n        visibility: hidden;\n     }\n}\n\nbutton:hover {\n    background-color: var(--primary-100);\n}\n\nbutton.primary {\n    background-color: var(--primary-400);\n    border: none;\n    color: var(--text-contrast-600);\n}\n\nbutton.primary:hover {\n    background-image: linear-gradient(var(--alt-contrast-200), var(--alt-contrast-200));\n}\n\ninput,\nselect,\ntextarea {\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    border-radius: var(--radii-base);\n    background-color: var(--fill-base-100);\n    color: var(--text-base-600);\n    border: 1px solid var(--stroke-base-400);\n}\n\n.custom-select {\n    position: relative;\n}\n\n.custom-select select {\n    appearance: none;\n    width: 100%;\n}\n\n.custom-select .icon-chevron-down {\n    position: absolute;\n    right: var(--spacing-xs);\n    top: var(--spacing-minor-xs);\n    pointer-events: none;\n    color: var(--text-base-action);\n}\n\ninput:hover,\nselect:hover,\ntextarea:hover {\n    border-color: var(--primary-500);\n}\n\ninput[type=radio] {\n    appearance: none;\n    padding: 0;\n    border-radius: 50%;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    margin: 0;\n    vertical-align: middle;\n}\n\ninput[type=radio]:checked {\n    --width: calc(var(--line-height-base)/4);\n    background-color: white;\n    border: var(--width) solid var(--primary-400);\n}\n\n.radio-segment {\n    display: flex;\n    flex-flow: row;\n    background-color: var(--alt-base-200);\n    outline: 1px solid var(--alt-base-200);\n    border-radius: var(--radii-base);\n}\n\n.radio-segment input[type=radio] {\n    opacity: 0;\n    position: absolute;\n}\n\n.radio-segment .container {\n    display: flex;\n    flex-flow: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-xs2);\n    padding: var(--spacing-minor-xs) var(--spacing-sm);\n    min-height: var(--line-height-base);\n    min-width: var(--line-height-base);\n    border-radius: var(--radii-base);\n    opacity: 0.8;\n}\n\n.radio-segment .container:hover {\n    background-color: var(--alt-base-100);\n    opacity: 1;\n}\n\n.radio-segment input[type=radio]:checked+.container {\n    background-color: var(--utility-tint-600);\n    outline: 1px solid var(--utility-shade-100);\n    box-shadow: var(--elevation-2);\n    opacity: 1;\n}\n\n.radio-segment input[type=radio]:focus-visible+.container {\n    outline: 2px auto var(--primary-500);\n    outline-offset: 2px;\n}\n\n\n.radiogroup {\n    background-color: var(--fill-base-300);\n    padding: 2px;\n    gap: 1px;\n    @apply flex flex-row rounded;\n}\n\n.radiogroup input[type=radio] {\n    background-color: var(--primary-400);\n    border: 0 none;\n    appearance: none;\n    padding: 0;\n    width: 1.5rem;\n    height: 1.5rem;\n    margin: 0;\n    vertical-align: middle;\n    transition: 0.2s all linear;\n    opacity: 0.5;\n\n    @apply rounded-none;\n}\n\n.radiogroup input[type=radio]:checked {\n    opacity: 1;\n    @apply shadow-1;\n}\n\ninput:focus,\ntextarea:focus {\n    border-color: var(--primary-500);\n    /* outline: none; */\n}\n\ntextarea {\n    flex: 1;\n    /* white-space: pre; */\n}\n\nfieldset {\n    border-style: solid;\n    border-color: var(--stroke-base-300);\n    border-radius: var(--radii-md);\n    border-width: 1px;\n}\n\n[data-name='red'] {\n    --thumb-color: var(--accent-red-400);\n}\n\n[data-name='amber'] {\n    --thumb-color: var(--accent-amber-400);\n}\n\n[data-name='brown'] {\n    --thumb-color: var(--accent-brown-400);\n}\n\n[data-name='green'] {\n    --thumb-color: var(--accent-green-400);\n}\n\n[data-name='teal'] {\n    --thumb-color: var(--accent-teal-400);\n}\n\n[data-name='cyan'] {\n    --thumb-color: var(--accent-cyan-400);\n}\n\n[data-name='blue'] {\n    --thumb-color: var(--accent-blue-400);\n}\n\n[data-name='indigo'] {\n    --thumb-color: var(--accent-indigo-400);\n}\n\n[data-name='violet'] {\n    --thumb-color: var(--accent-violet-400);\n}\n\n[data-name='purple'] {\n    --thumb-color: var(--accent-purple-400);\n}\n\n[data-name='pink'] {\n    --thumb-color: var(--accent-pink-400);\n}\n\n[data-name='info'] {\n    --thumb-color: var(--info-400);\n}\n\n[data-name='warning'] {\n    --thumb-color: var(--warning-400);\n}\n\n[data-name='success'] {\n    --thumb-color: var(--success-400);\n}\n\n[data-name='danger'] {\n    --thumb-color: var(--danger-400);\n}\n\n\n[data-slider],\n#luminanceSlider {\n    --thumb-color: var(--primary-400);\n}\n\n#luminanceSlider {\n    flex: 1;\n    border-radius: var(--radii-round);\n    background-color: var(--alt-base-300);\n    margin: var(--spacing-minor-sm) 0;\n    padding-left: calc(var(--slider-thumb-size) / 2 + 2px);\n    padding-right: calc(var(--slider-thumb-size) / 2 + 2px);\n}\n\n#luminanceSlider .slider {\n    background-color: transparent;\n    margin: 0;\n}\n\n.sliders label {\n    display: flex;\n    align-items: center;\n}\n\n.sliders .text-label {\n    width: 20%;\n}\n\n.sliders .slider {\n    border: 0 none;\n    box-sizing: content-box;\n    background-clip: padding-box;\n\n    height: var(--slider-track-size);\n    background-color: var(--alt-base-300);\n    box-shadow: none;\n    flex: 3;\n    margin: 0 var(--slider-margin);\n    border-radius: var(--radii-round);\n}\n\n.sliders input[type=text] {\n    width: 5rem;\n    border: 1px solid var(--stroke-base-300);\n    background: transparent;\n    text-align: center;\n    border-radius: var(--radii-base);\n    font-size: var(--font-size-sm);\n    line-height: var(--line-height-sm);\n    padding-left: 0;\n    padding-right: 0;\n}\n\n.sliders .slider .noUi-connect {\n    background-color: var(--thumb-color);\n}\n\n.sliders .slider .noUi-handle {\n    border: calc(var(--slider-thumb-size) / 5) solid white;\n    cursor: default;\n    box-shadow: none;\n\n\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n\n    top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n    right: calc(var(--slider-thumb-size) / -2);\n\n    box-shadow: 0px 1px 2px -1px rgba(0, 35, 41, 0.04), 0px 1px 3px 0px rgba(0, 35, 41, 0.04), 0px 0px 0px 1px rgba(0, 35, 41, 0.1);\n\n    /*custom styles*/\n    background: var(--thumb-color);\n    border-radius: 50%;\n\n}\n\n.sliders .slider .noUi-tooltip {\n    bottom: initial;\n    top: calc(var(--slider-thumb-size) - var(--slider-thumb-size) / 10);\n    font-size: var(--font-size-xs2);\n    line-height: var(--line-height-xs2);\n    visibility: hidden;\n    background: var(--fill-base-100);\n    border-color: var(--stroke-base-300);\n    color: var(--text-base-600);\n    border-radius: var(--radii-base);\n    @apply shadow-5;\n}\n\n.sliders .slider .noUi-handle:hover {\n    border: calc(var(--slider-thumb-size) / 4) solid white;\n}\n\n.sliders .slider:hover .noUi-tooltip {\n    visibility: visible;\n}\n\n.sliders .slider .noUi-handle::before,\n.sliders .slider .noUi-handle::after {\n    display: none;\n}\n\n[data-semantics] .sliders input[type=text] {\n    font-size: 0.9rem;\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-minor-base);\n    height: 100%;\n}\n\n\n#export {\n    background-color: var(--fill-base-100-component);\n}\n\n/********** Range Input Styles **********/\n/*Range Reset*/\ninput[type=\"range\"] {\n    --thumb-color: var(--primary-400);\n    -webkit-appearance: none;\n    appearance: none;\n    background: transparent;\n    cursor: pointer;\n    width: 15rem;\n    border: 0 none;\n    padding: 0;\n}\n\n/* Removes default focus */\ninput[type=\"range\"]:focus {\n    outline: none;\n}\n\n/***** Chrome, Safari, Opera and Edge Chromium styles *****/\n/* slider track */\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n    background-color: var(--stroke-base-300);\n    border-radius: 0.5rem;\n    height: var(--slider-track-size);\n}\n\n/* slider thumb */\ninput[type=\"range\"]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    /* Override default look */\n    appearance: none;\n    margin-top: calc((var(--slider-thumb-size) - var(--slider-track-size)) / -2);\n\n    /*custom styles*/\n    background-color: var(--thumb-color);\n    height: var(--slider-thumb-size);\n    width: var(--slider-thumb-size);\n    border-radius: var(--slider-thumb-size);\n}\n\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n    border: 1px solid #053a5f;\n    outline: 3px solid #053a5f;\n\n    outline-color: color-mix(in srgb, var(--thumb-color), transparent 20%);\n    outline-offset: 0.125rem;\n}\n\nhr {\n    border-color: var(--stroke-base-100);\n}\n\na[data-expander] {\n    display: inline-flex;\n    flex-flow: row-reverse;\n    gap: var(--spacing-xs2);\n    transition: transform 150ms ease-in-out;\n\n    @apply icon-chevron-right;\n\n    &::before {\n        transition: transform 200ms ease-in-out;\n    }\n}\n\na[data-expanded=true]::before {\n    transform: rotate(90deg);\n}\n\n.font-preview-box {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 3rem;\n    background-color: var(--fill-base-300);\n}\n\n.font-preview-box .base {\n    font-size: var(--font-size-base);\n}\n\n.font-preview-box .md {\n    font-size: var(--font-size-md);\n}\n\n.font-preview-box .lg {\n    font-size: var(--font-size-lg);\n}\n\n.checkbox {\n    display: flex;\n}\n\n.checkbox:hover input[type=checkbox] {\n    border-color: var(--primary-500);\n}\n\n.checkbox input[type=\"checkbox\"] {\n    appearance: none;\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    padding: 0;\n    border-radius: 4px;\n    flex: 0 0 auto;\n\n}\n\n.checkbox input[type=\"checkbox\"]:checked {\n    border-color: var(--primary-400);\n    background-color: var(--primary-400);\n    position: relative;\n    background-size: cover;\n    background-image: url('data:image/svg+xml,<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.0694 3.83539C13.4364 4.14989 13.4788 4.70227 13.1643 5.06918L6.54942 12.7866L2.88128 9.11846C2.53957 8.77675 2.53957 8.22273 2.88128 7.88102C3.22299 7.53931 3.77701 7.53931 4.11872 7.88102L6.45058 10.2129L11.8357 3.9303C12.1501 3.56339 12.7025 3.5209 13.0694 3.83539Z\" fill=\"white\"/></svg>');\n}\n\n\n.action-list {\n    display: flex;\n    flex-direction: column;\n    width: auto;\n}\n\n.action-list li {\n    display: block;\n    padding: var(--spacing-minor-xs3) 0;\n    border-bottom: 1px solid var(--stroke-base-100);\n}\n\n.action-list li:last-child {\n    border-width: 0;\n}\n\n.action-list li a {\n    border-radius: var(--radii-base);\n    margin: 0 calc(var(--spacing-sm) * -1);\n    color: var(--text-base-600);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: var(--spacing-minor-sm) var(--spacing-sm);\n}\n\n.action-list li a:hover {\n    background-color: var(--primary-100);\n    color: var(--text-base-action);\n    text-decoration: none;\n}\n\n:focus-visible {\n    outline: var(--primary-500) auto 2px;\n    outline-offset: 2px;\n}\n\n#brandAccent {\n    --thumb-color: color-mix(in srgb, var(--primary-300), white 10%);\n\n    & .slider {\n        background-color: var(--alt-contrast-300);\n    }\n\n    & .noUi-connect {\n        background-color: var(--text-contrast-400);\n    }\n\n    & input[type=text] {\n        background-color: var(--alt-contrast-200);\n        border-color: var(--alt-contrast-300);\n        color: var(--text-contrast-600)\n    }\n}\n\n.spinner {\n    width: var(--line-height-base);\n    height: var(--line-height-base);\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 10px;\n    position: relative;\n    text-indent: -9999em;\n    border-top: 2px solid transparent;\n    border-right: 2px solid transparent;\n    border-bottom: 2px solid transparent;\n    border-left: 2px solid currentColor;\n    border-radius: 100%;\n\n    transform: translateZ(0);\n    animation: spin 1.2s linear infinite;\n}\n\n.spinner::after {\n    content: '';\n    display: block;\n    position: absolute;\n    inset: -2px;\n    border: 2px solid currentColor;\n    opacity: 0.2;\n    border-radius: 100%;\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0turn)\n    }\n\n    100% {\n        transform: rotate(1turn)\n    }\n}"],"sourceRoot":""}]);
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
    const modal = document.getElementById('swapModal');
    const swapProgressMsg = document.getElementById('swapProgress');
    swapProgressMsg.innerHTML = 'Working...';
    key && modal.showModal();
    parent.postMessage({
        pluginMessage: { type: 'SWAP_VARIABLES', fileName: key }
    }, "*");
});
// window.addEventListener('message', ({ data: { pluginMessage } ) => {
//     console.log(e);
// })
window.onmessage = ({ data: { pluginMessage } }) => __awaiter(void 0, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGVVdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLFlBQVksYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFHQUFxRyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsWUFBWSxNQUFNLE9BQU8scUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxXQUFXLE1BQU0sWUFBWSxNQUFNLE1BQU0scUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLEtBQUssTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsV0FBVyxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFlBQVksT0FBTyxZQUFZLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZ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QTtBQUNBLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTCxDQUFDO0FBQ0QseUNBQXlDLFFBQVEsZ0JBQWdCO0FBQ2pFO0FBQ0EsSUFBSTtBQUNKLHNCQUFzQixRQUFRLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFFBQVE7QUFDbEU7QUFDQTtBQUNBLHNEQUFzRCxRQUFRLElBQUksUUFBUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9kaWFsb2cuY3NzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9zcmMvdWkvc3R5bGVzL2ljb25zLmNzcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9zb3VyY2UtdmFyaWFibGVzLmNzcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9kaWFsb2cuY3NzPzlhYjciLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91aS9zdHlsZXMvaWNvbnMuY3NzP2NkMTYiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL3NyYy91aS9zdHlsZXMvc291cmNlLXZhcmlhYmxlcy5jc3M/MDQwZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3N0eWxlcy9zdHlsZXMuY3NzP2IzNzAiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL2hlbHBlcnMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpZ21hLWRzLWJ1aWxkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtZHMtYnVpbGRlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9maWdtYS1kcy1idWlsZGVyLy4vc3JjL3VpL3ZhcmlhYmxlLXV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWxsLWJhc2UtMzAwKSwgdmFyKC0tdXRpbGl0eS10cmFuc3BhcmVudCkgMjAlKTtcbn1cblxuZGlhbG9nW29wZW5dIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpYWxvZyAubW9kYWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbGcpO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbHQtYmFzZS00MDApO1xuICAgIG1heC1oZWlnaHQ6IDk1dmg7XG4gICAgYW5pbWF0aW9uOiBvcGVuLW1vZGFsIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgIC0tdHctc2hhZG93OiAwcHggMTZweCAxMHB4IC03cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyNHB4IDI4cHggLThweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggNDhweCAtMTBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggMTZweCAxMHB4IC03cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggMjhweCAtOHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDBweCAyNHB4IDQ4cHggLTEwcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xuICAgIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTIwMCk7XG4gICAgLS1zaGFkb3ctb3BhY2l0eTogMTAwJTtcbiAgICAtLWJveC1zaGFkb3ctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zaGFkb3ctY29sb3IpLCB0cmFuc3BhcmVudCBjYWxjKDEwMCUgLSB2YXIoLS1zaGFkb3ctb3BhY2l0eSkpKTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCAxNnB4IDEwcHggLTdweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDI0cHggMjhweCAtOHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjRweCA0OHB4IC0xMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG5kaWFsb2cgLmhlYWRlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1tZCkgdmFyKC0tc3BhY2luZy1tZCkgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaWFsb2cgLmJvZHkge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3ItbGcpIHZhcigtLXNwYWNpbmctbGcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiB2YXIoLS1zcGFjaW5nLWJhc2UpO1xuICAgIGZsZXg6IDE7XG59XG5cbmRpYWxvZyAuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbGcpIHZhcigtLXNwYWNpbmctbWlub3ItbGcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG5idXR0b24uY2xvc2Uge1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcbn1cblxuYnV0dG9uLmNsb3NlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucHJlc2V0cy1saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWxnKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14czQpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgLS1wYWRkaW5nLXg6IHZhcigtLXNwYWNpbmctbGcpO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy14KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLXgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tc3BhY2luZy1sZykgLSB2YXIoLS1zY3JvbGxiYXItd2lkdGgpKTtcbn1cblxuLnRoZW1lLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbWQpO1xuICAgIC0tYmctY29sb3I6IHZhcigtLWFsdC1iYXNlLTEwMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xufVxuXG4udGhlbWUtaXRlbSBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50aGVtZS1pdGVtOmhvdmVyIHtcbiAgICBvdXRsaW5lOjFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTMwMCk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG5cbi50aGVtZS1pdGVtOmhhcyhpbnB1dDpjaGVja2VkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3V0bGluZToycHggc29saWQgdmFyKC0tcHJpbWFyeS0zMDApO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG4udGhlbWUtaXRlbTpmb2N1cy13aXRoaW4sXG4udGhlbWUtaXRlbTpoYXMoaW5wdXQ6Zm9jdXMpLFxuLnRoZW1lLWl0ZW06aGFzKGlucHV0OmZvY3VzLXZpc2libGUpIHtcbiAgICBvdXRsaW5lOjFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTUwMCk7XG4gICAgb3V0bGluZS13aWR0aDogMnB4O1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xufVxuXG5kaWFsb2cgLmJvZHkgKyAucHJlc2V0cy1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnRoZW1lLWl0ZW0gLmNvbC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14czMpO1xuICAgIC0tcGFkZGluZy14OiB2YXIoLS1zcGFjaW5nLWJhc2UpO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy14KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLXgpO1xufVxuLnRoZW1lLWl0ZW0gLmNvbC1pbmZvIC5pbmZvLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy14czIpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XG59XG5cbi50aGVtZS1pdGVtIC5jb2wtc3dhdGNoZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICAtLXBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpO1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xufVxuXG4uc3dhdGNoZXMge1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbHQtYmFzZS0xMDApO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xufVxuXG4uc3dhdGNoZXMgLnN3YXRjaCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIGZsZXg6IDE7XG59XG5cblxuQGtleWZyYW1lcyBvcGVuLW1vZGFsIHtcbiAgICBmcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTsgICAgXG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAgICBcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCwwRkFBMEY7QUFDOUY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsZ0pBQWU7SUFBZixxSkFBZTtJQUFmLHVHQUFlO0lBQWYsd0NBQWU7SUFBZixzQkFBZTtJQUFmLDJHQUFlO0lBQWYsaUpBQWU7SUFBZiw2QkFBZTtBQUNuQjs7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxhQUErQjtJQUEvQixzQkFBK0I7SUFBL0IsNEJBQStCO0lBQy9CLE9BQU87QUFDWDs7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxhQUFnQztJQUFoQyxtQkFBZ0M7SUFBaEMseUJBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBR0k7SUFBQSxzQ0FBNEY7SUFBNUYsYUFBNEY7SUFBNUYsWUFBNEY7SUFBNUYsc0JBQTRGO0lBQTVGLDZCQUE0RjtJQUE1RixjQUE0RjtJQUE1RixtQkFBNEY7SUFBNUYsOEJBQTRGO0lBQTVGLDhCQUE0RjtJQUE1RiwrQkFBNEY7SUFDNUY7QUFENEY7O0FBSzVGO0lBQUEsa0JBQXdEO0lBQXhELGFBQXdEO0lBQXhELG1CQUF3RDtJQUF4RCw4QkFBd0Q7SUFBeEQsK0JBQXdEO0lBQXhEO0FBQXdEOztBQUc1RDtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHSTtJQUFBLGFBQStEO0lBQS9ELFlBQStEO0lBQS9ELHNCQUErRDtJQUEvRCx1QkFBK0Q7SUFBL0QsNkJBQStEO0lBQS9ELGdDQUErRDtJQUEvRCw4QkFBK0Q7SUFBL0Q7QUFBK0Q7QUFHL0Q7SUFBQSxhQUErRTtJQUEvRSxtQkFBK0U7SUFBL0UsaUJBQStFO0lBQS9FLG1CQUErRTtJQUEvRSx1QkFBK0U7SUFBL0UsbUJBQStFO0lBQS9FLDhCQUErRTtJQUEvRTtBQUErRTs7QUFJL0U7SUFBQSxhQUFzQztJQUF0QyxZQUFzQztJQUF0QyxzQkFBc0M7SUFBdEMsc0JBQXNDO0lBQXRDLDRCQUFzQztJQUF0QztBQUFzQzs7QUFHMUM7SUFDSSxzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLGFBQWtEO0lBQWxELG1CQUFrRDtJQUFsRCxRQUFrRDtJQUFsRCxnQkFBa0Q7SUFBbEQsZ0NBQWtEO0FBQ3REOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixPQUFPO0FBQ1g7OztBQUdBO0lBQ0k7UUFDSSw2QkFBNkI7UUFDN0IsVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHdCQUF3QjtJQUM1QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1maWxsLWJhc2UtMzAwKSwgdmFyKC0tdXRpbGl0eS10cmFuc3BhcmVudCkgMjAlKTtcXG59XFxuXFxuZGlhbG9nW29wZW5dIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaWFsb2cgLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0xMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1sZyk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbHQtYmFzZS00MDApO1xcbiAgICBtYXgtaGVpZ2h0OiA5NXZoO1xcbiAgICBhbmltYXRpb246IG9wZW4tbW9kYWwgMjUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIEBhcHBseSBzaGFkb3ctNjtcXG59XFxuXFxuZGlhbG9nIC5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLW1kKSB2YXIoLS1zcGFjaW5nLW1kKSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpYWxvZyAuYm9keSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3ItbGcpIHZhcigtLXNwYWNpbmctbGcpO1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBnYXAteS1iYXNlO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaWFsb2cgLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1sZykgdmFyKC0tc3BhY2luZy1taW5vci1sZyk7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kO1xcbn1cXG5cXG5idXR0b24uY2xvc2Uge1xcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LW1kKTtcXG59XFxuXFxuYnV0dG9uLmNsb3NlOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnByZXNldHMtbGlzdCB7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtY29sIGZsZXgtMSBnYXAtbWlub3IteHM0IHB4LWxnIG1iLW1pbm9yLWxnIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteS12aXNpYmxlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXNwYWNpbmctbGcpIC0gdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKSk7XFxufVxcblxcbi50aGVtZS1pdGVtIHtcXG4gICAgQGFwcGx5IHJvdW5kZWQtbWQgYmctYWx0LWJhc2UtMTAwIGZsZXggZmxleC1yb3cgcmVsYXRpdmU7XFxufVxcblxcbi50aGVtZS1pdGVtIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udGhlbWUtaXRlbTpob3ZlciB7XFxuICAgIG91dGxpbmU6MXB4IHNvbGlkIHZhcigtLXByaW1hcnktMzAwKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxufVxcblxcbi50aGVtZS1pdGVtOmhhcyhpbnB1dDpjaGVja2VkKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTMwMCk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbn1cXG5cXG4udGhlbWUtaXRlbTpmb2N1cy13aXRoaW4sXFxuLnRoZW1lLWl0ZW06aGFzKGlucHV0OmZvY3VzKSxcXG4udGhlbWUtaXRlbTpoYXMoaW5wdXQ6Zm9jdXMtdmlzaWJsZSkge1xcbiAgICBvdXRsaW5lOjFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgIG91dGxpbmUtd2lkdGg6IDJweDtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxufVxcblxcbmRpYWxvZyAuYm9keSArIC5wcmVzZXRzLWxpc3Qge1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLnRoZW1lLWl0ZW0gLmNvbC1pbmZvIHtcXG4gICAgQGFwcGx5IGZsZXggZmxleC1jb2wgZmxleC0xIGp1c3RpZnktY2VudGVyIHB4LWJhc2UgZ2FwLW1pbm9yLXhzM1xcbn1cXG4udGhlbWUtaXRlbSAuY29sLWluZm8gLmluZm8taXRlbSB7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IGdhcC14czIgdGV4dC1zbSBmbGV4LW5vd3JhcCB3aGl0ZXNwYWNlLW5vd3JhcCBpdGVtcy1jZW50ZXI7XFxufVxcblxcbi50aGVtZS1pdGVtIC5jb2wtc3dhdGNoZXMge1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbCBnYXAteHMgcC14cyBmbGV4LTFcXG59XFxuXFxuLnN3YXRjaGVzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWFsdC1iYXNlLTEwMCk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xcbiAgICBAYXBwbHkgZmxleCBmbGV4LXJvdyBnYXAtMCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbjtcXG59XFxuXFxuLnN3YXRjaGVzIC5zd2F0Y2gge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIG9wZW4tbW9kYWwge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjUlKTsgICAgXFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgICAgXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMwLjkxODUgNC42OTU1N0MzMS41NzczIDQuMjcyMDUgMzIuNDIyNyA0LjI3MjA1IDMzLjA4MTUgNC42OTU1N0w1Ny4zODMgMjAuMzE4QzU4LjYwNzYgMjEuMTA1MiA1OC42MDc2IDIyLjg5NTQgNTcuMzgzIDIzLjY4MjdMMzMuMDgxNSAzOS4zMDUxQzMyLjQyMjcgMzkuNzI4NiAzMS41NzczIDM5LjcyODYgMzAuOTE4NSAzOS4zMDUxTDYuNjE2OTcgMjMuNjgyN0M1LjM5MjMzIDIyLjg5NTQgNS4zOTIzMiAyMS4xMDUyIDYuNjE2OTcgMjAuMzE4TDMwLjkxODUgNC42OTU1N1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggb3BhY2l0eT1cXFwiMC41XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTMyIDI2Ljc1NTVMMTEuMzk3IDQwLjAwMDNMMzIgNTMuMjQ1MUw1Mi42MDI5IDQwLjAwMDNMMzIgMjYuNzU1NVpNMzMuMDgxNSAyMi42OTU2QzMyLjQyMjcgMjIuMjcyIDMxLjU3NzMgMjIuMjcyIDMwLjkxODUgMjIuNjk1Nkw2LjYxNjk3IDM4LjMxOEM1LjM5MjMyIDM5LjEwNTIgNS4zOTIzMyA0MC44OTU0IDYuNjE2OTcgNDEuNjgyN0wzMC45MTg1IDU3LjMwNTFDMzEuNTc3MyA1Ny43Mjg2IDMyLjQyMjcgNTcuNzI4NiAzMy4wODE1IDU3LjMwNTFMNTcuMzgzIDQxLjY4MjdDNTguNjA3NiA0MC44OTU0IDU4LjYwNzYgMzkuMTA1MiA1Ny4zODMgMzguMzE4TDMzLjA4MTUgMjIuNjk1NlpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxnIG9wYWNpdHk9XFxcIjAuNVxcXCI+PHBhdGggZD1cXFwiTTU4IDUyQzU4IDI2LjU5NDkgMzcuNDA1MSA2IDEyIDZIMFYxMEgxMkMzNS4xOTYgMTAgNTQgMjguODA0IDU0IDUyVjY0SDU4VjUyWlxcXCIgZmlsbD1cXFwiJTIzRDlEOUQ5XFxcIi8+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMiA2LjI1MDAyQzEyLjk2NjUgNi4yNTAwMiAxMy43NSA3LjAzMzUzIDEzLjc1IDguMDAwMDJMMTMuNzUgMTEuMzI0NEMxMy43NSAxMi4yOTA5IDEyLjk2NjUgMTMuMDc0NCAxMiAxMy4wNzQ0QzExLjAzMzUgMTMuMDc0NCAxMC4yNSAxMi4yOTA5IDEwLjI1IDExLjMyNDRMMTAuMjUgOC4wMDAwMkMxMC4yNSA3LjAzMzUyIDExLjAzMzUgNi4yNTAwMiAxMiA2LjI1MDAyWk0xMiAxNi4yMjMxQzEyLjk2NjUgMTYuMjIzMSAxMy43NSAxNy4wMDY2IDEzLjc1IDE3Ljk3MzFMMTMuNzUgMjQuNjIxOEMxMy43NSAyNS41ODgzIDEyLjk2NjUgMjYuMzcxOCAxMiAyNi4zNzE4QzExLjAzMzUgMjYuMzcxOCAxMC4yNSAyNS41ODgzIDEwLjI1IDI0LjYyMThMMTAuMjUgMTcuOTczMUMxMC4yNSAxNy4wMDY2IDExLjAzMzUgMTYuMjIzMSAxMiAxNi4yMjMxWk0xMiAyOS41MjA1QzEyLjk2NjUgMjkuNTIwNSAxMy43NSAzMC4zMDQgMTMuNzUgMzEuMjcwNUwxMy43NSAzNy45MTkyQzEzLjc1IDM4Ljg4NTcgMTIuOTY2NSAzOS42NjkyIDEyIDM5LjY2OTJDMTEuMDMzNSAzOS42NjkyIDEwLjI1IDM4Ljg4NTcgMTAuMjUgMzcuOTE5MkwxMC4yNSAzMS4yNzA1QzEwLjI1IDMwLjMwNCAxMS4wMzM1IDI5LjUyMDUgMTIgMjkuNTIwNVpNMTIgNDIuODE3OUMxMi45NjY1IDQyLjgxNzkgMTMuNzUgNDMuNjAxNCAxMy43NSA0NC41Njc5TDEzLjc1IDQ3Ljg5MjJDMTMuNzUgNDguODU4NyAxMi45NjY1IDQ5LjY0MjIgMTIgNDkuNjQyMkMxMS4wMzM1IDQ5LjY0MjIgMTAuMjUgNDguODU4NyAxMC4yNSA0Ny44OTIyTDEwLjI1IDQ0LjU2NzlDMTAuMjUgNDMuNjAxNCAxMS4wMzM1IDQyLjgxNzkgMTIgNDIuODE3OVpNMTQuMjUgNTIuMDAwMUMxNC4yNSA1MS4wMzM2IDE1LjAzMzUgNTAuMjUwMSAxNiA1MC4yNTAxTDE5LjMzMzMgNTAuMjUwMUMyMC4yOTk4IDUwLjI1MDEgMjEuMDgzMyA1MS4wMzM2IDIxLjA4MzMgNTIuMDAwMUMyMS4wODMzIDUyLjk2NjYgMjAuMjk5OCA1My43NTAxIDE5LjMzMzMgNTMuNzUwMUwxNiA1My43NTAxQzE1LjAzMzUgNTMuNzUwMSAxNC4yNSA1Mi45NjY2IDE0LjI1IDUyLjAwMDFaTTI0LjI1IDUyLjAwMDFDMjQuMjUgNTEuMDMzNiAyNS4wMzM1IDUwLjI1MDEgMjYgNTAuMjUwMUgzMi42NjY3QzMzLjYzMzIgNTAuMjUwMSAzNC40MTY3IDUxLjAzMzYgMzQuNDE2NyA1Mi4wMDAxQzM0LjQxNjcgNTIuOTY2NiAzMy42MzMyIDUzLjc1MDEgMzIuNjY2NyA1My43NTAxSDI2QzI1LjAzMzUgNTMuNzUwMSAyNC4yNSA1Mi45NjY2IDI0LjI1IDUyLjAwMDFaTTM3LjU4MzMgNTIuMDAwMUMzNy41ODMzIDUxLjAzMzYgMzguMzY2OCA1MC4yNTAxIDM5LjMzMzMgNTAuMjUwMUw0NiA1MC4yNTAxQzQ2Ljk2NjUgNTAuMjUwMSA0Ny43NSA1MS4wMzM2IDQ3Ljc1IDUyLjAwMDFDNDcuNzUgNTIuOTY2NiA0Ni45NjY1IDUzLjc1MDEgNDYgNTMuNzUwMUgzOS4zMzMzQzM4LjM2NjggNTMuNzUwMSAzNy41ODMzIDUyLjk2NjYgMzcuNTgzMyA1Mi4wMDAxWk01MC45MTY3IDUyLjAwMDFDNTAuOTE2NyA1MS4wMzM2IDUxLjcwMDIgNTAuMjUwMSA1Mi42NjY3IDUwLjI1MDFINTZDNTYuOTY2NSA1MC4yNTAxIDU3Ljc1IDUxLjAzMzYgNTcuNzUgNTIuMDAwMUM1Ny43NSA1Mi45NjY2IDU2Ljk2NjUgNTMuNzUwMSA1NiA1My43NTAxSDUyLjY2NjdDNTEuNzAwMiA1My43NTAxIDUwLjkxNjcgNTIuOTY2NiA1MC45MTY3IDUyLjAwMDFaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEwIDhDMTAgNi44OTU0MyAxMC44OTU0IDYgMTIgNkMxOC4wNDA4IDYgMjQuMDIyNSA3LjE4OTgzIDI5LjYwMzQgOS41MDE1NEMzNS4xODQ0IDExLjgxMzMgNDAuMjU1NCAxNS4yMDE2IDQ0LjUyNjkgMTkuNDczMUM0OC43OTg0IDIzLjc0NDYgNTIuMTg2NyAyOC44MTU2IDU0LjQ5ODUgMzQuMzk2NkM1Ni44MTAyIDM5Ljk3NzUgNTggNDUuOTU5MiA1OCA1MkM1OCA1My4xMDQ2IDU3LjEwNDYgNTQgNTYgNTRDNTQuODk1NCA1NCA1NCA1My4xMDQ2IDU0IDUyQzU0IDQ2LjQ4NDUgNTIuOTEzNiA0MS4wMjMgNTAuODAyOSAzNS45MjczQzQ4LjY5MjIgMzAuODMxNiA0NS41OTg1IDI2LjIwMTYgNDEuNjk4NSAyMi4zMDE1QzM3Ljc5ODQgMTguNDAxNSAzMy4xNjg0IDE1LjMwNzggMjguMDcyNyAxMy4xOTcxQzIyLjk3NyAxMS4wODY0IDE3LjUxNTUgMTAgMTIgMTBDMTAuODk1NCAxMCAxMCA5LjEwNDU3IDEwIDhaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTEgNTBDOS4zNDMxNSA1MCA4IDUxLjM0MzEgOCA1M0M4IDU0LjY1NjkgOS4zNDMxNSA1NiAxMSA1NkMxMi42NTY5IDU2IDE0IDU0LjY1NjkgMTQgNTNDMTQgNTEuMzQzMSAxMi42NTY5IDUwIDExIDUwWk00IDUzQzQgNDkuMTM0IDcuMTM0MDEgNDYgMTEgNDZDMTQuODY2IDQ2IDE4IDQ5LjEzNCAxOCA1M0MxOCA1Ni44NjYgMTQuODY2IDYwIDExIDYwQzcuMTM0MDEgNjAgNCA1Ni44NjYgNCA1M1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgdmlld0JveD1cXFwiMCAwIDY0IDY0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk01NiA4QzUyLjY4NjMgOCA1MCAxMC42ODYzIDUwIDE0VjUwQzUwIDUzLjMxMzcgNTIuNjg2MyA1NiA1NiA1Nkg2NFY1Mkg1NkM1NC44OTU0IDUyIDU0IDUxLjEwNDYgNTQgNTBWMTRDNTQgMTIuODk1NCA1NC44OTU0IDEyIDU2IDEySDY0VjhINTZaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIGQ9XFxcIk0xNCAxNEMxNCAxMC42ODYzIDExLjMxMzcgOCA4IDhIMFYxMkg4QzkuMTA0NTcgMTIgMTAgMTIuODk1NCAxMCAxNFY1MEMxMCA1MS4xMDQ2IDkuMTA0NTcgNTIgOCA1MkgwVjU2SDhDMTEuMzEzNyA1NiAxNCA1My4zMTM3IDE0IDUwVjE0WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBvcGFjaXR5PVxcXCIwLjVcXFwiIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMjcuMjM3NCAyNC43NjI2QzI3LjkyMDggMjUuNDQ2IDI3LjkyMDggMjYuNTU0IDI3LjIzNzQgMjcuMjM3NEwyNC4yMjQ5IDMwLjI1SDM5Ljc3NTFMMzYuNzYyNiAyNy4yMzc0QzM2LjA3OTEgMjYuNTU0IDM2LjA3OTEgMjUuNDQ2IDM2Ljc2MjYgMjQuNzYyNkMzNy40NDYgMjQuMDc5MSAzOC41NTQgMjQuMDc5MSAzOS4yMzc0IDI0Ljc2MjZMNDYuNDc0OSAzMkwzOS4yMzc0IDM5LjIzNzRDMzguNTU0IDM5LjkyMDkgMzcuNDQ2IDM5LjkyMDkgMzYuNzYyNiAzOS4yMzc0QzM2LjA3OTEgMzguNTU0IDM2LjA3OTEgMzcuNDQ2IDM2Ljc2MjYgMzYuNzYyNkwzOS43NzUxIDMzLjc1SDI0LjIyNDlMMjcuMjM3NCAzNi43NjI2QzI3LjkyMDggMzcuNDQ2IDI3LjkyMDggMzguNTU0IDI3LjIzNzQgMzkuMjM3NEMyNi41NTQgMzkuOTIwOSAyNS40NDYgMzkuOTIwOSAyNC43NjI2IDM5LjIzNzRMMTcuNTI1MSAzMkwyNC43NjI2IDI0Ljc2MjZDMjUuNDQ2IDI0LjA3OTEgMjYuNTU0IDI0LjA3OTEgMjcuMjM3NCAyNC43NjI2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xNi4zODg4IDkuNDk1MTJMMzIuMTU0OSA1MS41Mzc4QzMyLjYwMjggNTIuNzMyNCAzMS45OTc2IDU0LjA2MzkgMzAuODAzIDU0LjUxMTlDMjkuNjA4NSA1NC45NTk4IDI4LjI3NyA1NC4zNTQ2IDI3LjgyOSA1My4xNkwyMy44NTY3IDQyLjU2NzNIOC45MjA5Mkw0Ljk0ODY0IDUzLjE2QzQuNTAwNjkgNTQuMzU0NiAzLjE2OTE4IDU0Ljk1OTggMS45NzQ2MyA1NC41MTE5QzAuNzgwMDgxIDU0LjA2MzkgMC4xNzQ4NDggNTIuNzMyNCAwLjYyMjgwMyA1MS41Mzc4TDE2LjM4ODggOS40OTUxMlpNMTAuNjUzNCAzNy45NDczSDIyLjEyNDJMMTYuMzg4OCAyMi42NTI5TDEwLjY1MzQgMzcuOTQ3M1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggb3BhY2l0eT1cXFwiMC41XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUwLjQxOTggMjguOTYyOEM0Ni4xMzI0IDI4Ljk2MjggNDIuMTQ5NiAzMy4wNDI4IDQyLjE0OTYgMzguNzQ0NEM0Mi4xNDk2IDQ0LjQ0NjEgNDYuMTMyNCA0OC41MjYxIDUwLjQxOTggNDguNTI2MUM1NC42NzI4IDQ4LjUyNjEgNTguNjI2IDQ0LjUxMTMgNTguNjg5MiAzOC44ODE1VjM4LjYwNzRDNTguNjI2IDMyLjk3NzUgNTQuNjcyOCAyOC45NjI4IDUwLjQxOTggMjguOTYyOFpNNTguNjg5MiAyNy42ODQ0QzU2LjQ4ODggMjUuNjE2MyA1My42MzQ0IDI0LjM0MjggNTAuNDE5OCAyNC4zNDI4QzQzLjAyMDYgMjQuMzQyOCAzNy41Mjk2IDMxLjA5IDM3LjUyOTYgMzguNzQ0NEMzNy41Mjk2IDQ2LjM5ODggNDMuMDIwNiA1My4xNDYxIDUwLjQxOTggNTMuMTQ2MUM1My42MzQ0IDUzLjE0NjEgNTYuNDg4OCA1MS44NzI2IDU4LjY4OTIgNDkuODA0NFY1My44NTlDNTguNjg5MiA1Ny4yNzA1IDU1LjMzMzQgNjAuNjE3NyA1MC40MTkgNjAuNjE3N0M0Ny4yNTM5IDYwLjYxNzcgNDQuNjIwOSA1OS4xNjg1IDQzLjI0MDEgNTcuMjA0M0M0Mi41MDY0IDU2LjE2MDYgNDEuMDY1NSA1NS45MDkzIDQwLjAyMTggNTYuNjQzQzM4Ljk3ODEgNTcuMzc2NyAzOC43MjY4IDU4LjgxNzUgMzkuNDYwNSA1OS44NjEyQzQxLjc4MjUgNjMuMTY0MiA0NS44ODY4IDY1LjIzNzcgNTAuNDE5IDY1LjIzNzdDNTcuMTkxMiA2NS4yMzc3IDYzLjMwOTIgNjAuNDY0NSA2My4zMDkyIDUzLjg1OVYzOC45MDEzQzYzLjMwOTcgMzguODQ5IDYzLjMxIDM4Ljc5NjcgNjMuMzEgMzguNzQ0NEM2My4zMSAzOC42OTIxIDYzLjMwOTcgMzguNjM5OCA2My4zMDkyIDM4LjU4NzZWMjYuNjUyOEM2My4zMDkyIDI1LjM3NyA2Mi4yNzUgMjQuMzQyOCA2MC45OTkyIDI0LjM0MjhDNTkuNzIzNCAyNC4zNDI4IDU4LjY4OTIgMjUuMzc3IDU4LjY4OTIgMjYuNjUyOFYyNy42ODQ0WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGcgb3BhY2l0eT1cXFwiMC41XFxcIj48cGF0aCBkPVxcXCJNNDUuNjU2OCA1MC4zNDMxTDU0LjM0MzEgNDEuNjU2OUM1NC41MDAyIDQxLjQ5OTggNTQuNjQ5MyA0MS4zMzc5IDU0Ljc5MDUgNDEuMTcxNkgyNS4xNzE2TDM0LjM0MzEgNTAuMzQzMUMzNy40NjczIDUzLjQ2NzMgNDIuNTMyNyA1My40NjczIDQ1LjY1NjggNTAuMzQzMVpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggZD1cXFwiTTYuNjcxNDQgNTQuMDIxNUw2LjY5ODQyIDU0LjE0MjlDNy40NTg5MiA1Ny41NjUxIDEwLjQ5NDMgNjAgMTQgNjBDMTcuNTA1NyA2MCAyMC41NDExIDU3LjU2NTEgMjEuMzAxNiA1NC4xNDI5TDIxLjMyODYgNTQuMDIxNUMyMS43NTkyIDUyLjA4MzggMjEuNDE4MiA1MC4wNTQ1IDIwLjM3NzggNDguMzY0TDE0IDM4TDcuNjIyMTggNDguMzY0QzYuNTgxODUgNTAuMDU0NSA2LjI0MDgzIDUyLjA4MzggNi42NzE0NCA1NC4wMjE1WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L2c+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zOS43NSA1Ljc3NTM5VjEzLjI3NTRMNTUuNTgwNiAyOS4xMDZDNTkuMzg4MiAzMi45MTM2IDU5LjM4ODIgMzkuMDg2OSA1NS41ODA2IDQyLjg5NDZMNDYuODk0MyA1MS41ODA5QzQzLjA4NjcgNTUuMzg4NSAzNi45MTMzIDU1LjM4ODUgMzMuMTA1NyA1MS41ODA4TDEzLjUyNTEgMzIuMDAwM0wzOS43NSA1Ljc3NTM5Wk0zNiAxNC40NzUxTDE4LjQ3NDkgMzIuMDAwM0wzNS41ODA2IDQ5LjEwNkMzOC4wMjE0IDUxLjU0NjcgNDEuOTc4NiA1MS41NDY4IDQ0LjQxOTQgNDkuMTA2TDUzLjEwNTcgNDAuNDE5N0M1NS41NDY1IDM3Ljk3ODkgNTUuNTQ2NSAzNC4wMjE2IDUzLjEwNTcgMzEuNTgwOEwzNiAxNC40NzUxWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTU1LjIzNzQgMTUuMjM3N0M1NS45MjA5IDE0LjU1NDMgNTUuOTIwOSAxMy40NDYyIDU1LjIzNzQgMTIuNzYyOEM1NC41NTQgMTIuMDc5NCA1My40NDYgMTIuMDc5NCA1Mi43NjI2IDEyLjc2MjhMMzkuNjM2NCAyNS44ODlDMzguODQ2NyAyNS40ODA4IDM3Ljk1MDMgMjUuMjUwMyAzNyAyNS4yNTAzQzMzLjgyNDQgMjUuMjUwMyAzMS4yNSAyNy44MjQ2IDMxLjI1IDMxLjAwMDNDMzEuMjUgMzQuMTc1OSAzMy44MjQ0IDM2Ljc1MDMgMzcgMzYuNzUwM0M0MC4xNzU2IDM2Ljc1MDMgNDIuNzUgMzQuMTc1OSA0Mi43NSAzMS4wMDAzQzQyLjc1IDMwLjA1IDQyLjUxOTUgMjkuMTUzNiA0Mi4xMTEzIDI4LjM2MzhMNTUuMjM3NCAxNS4yMzc3Wk0zNC43NSAzMS4wMDAzQzM0Ljc1IDI5Ljc1NzYgMzUuNzU3NCAyOC43NTAzIDM3IDI4Ljc1MDNDMzguMjQyNiAyOC43NTAzIDM5LjI1IDI5Ljc1NzYgMzkuMjUgMzEuMDAwM0MzOS4yNSAzMi4yNDI5IDM4LjI0MjYgMzMuMjUwMyAzNyAzMy4yNTAzQzM1Ljc1NzQgMzMuMjUwMyAzNC43NSAzMi4yNDI5IDM0Ljc1IDMxLjAwMDNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvc3ZnPlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWFkcy1lbGV2YXRpb246IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICAtLWFkcy1yYWRpaTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIC0tYWRzLXNwYWNpbmc6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICAtLWFkcy10eXBvZ3JhcGh5OiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gICAgLS1hZHMtY29sb3JzOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG5cbn1cblxuLmljb24ge1xuICAgIC0taWNvbi1zaXplOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbn1cblxuLmljb24tdHlwb2dyYXBoeTo6YmVmb3JlIHtcbiAgICAtLWljb24tc3JjOiB2YXIoLS1hZHMtdHlwb2dyYXBoeSk7XG59XG4uaWNvbi1zcGFjaW5nOjpiZWZvcmUge1xuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy1zcGFjaW5nKTtcbn1cbi5pY29uLXJhZGlpOjpiZWZvcmUge1xuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy1yYWRpaSk7XG59XG4uaWNvbi1jb2xvcnM6OmJlZm9yZSB7XG4gICAgLS1pY29uLXNyYzogdmFyKC0tYWRzLWNvbG9ycyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL2ljb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdEQUEwekI7SUFDMXpCLG9EQUE2dkY7SUFDN3ZGLHNEQUE4Z0M7SUFDOWdDLHlEQUErK0M7SUFDLytDLHFEQUFpa0Q7O0FBRXJrRDs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYWRzLWVsZXZhdGlvbjogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTMwLjkxODUgNC42OTU1N0MzMS41NzczIDQuMjcyMDUgMzIuNDIyNyA0LjI3MjA1IDMzLjA4MTUgNC42OTU1N0w1Ny4zODMgMjAuMzE4QzU4LjYwNzYgMjEuMTA1MiA1OC42MDc2IDIyLjg5NTQgNTcuMzgzIDIzLjY4MjdMMzMuMDgxNSAzOS4zMDUxQzMyLjQyMjcgMzkuNzI4NiAzMS41NzczIDM5LjcyODYgMzAuOTE4NSAzOS4zMDUxTDYuNjE2OTcgMjMuNjgyN0M1LjM5MjMzIDIyLjg5NTQgNS4zOTIzMiAyMS4xMDUyIDYuNjE2OTcgMjAuMzE4TDMwLjkxODUgNC42OTU1N1pcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggb3BhY2l0eT1cXFwiMC41XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTMyIDI2Ljc1NTVMMTEuMzk3IDQwLjAwMDNMMzIgNTMuMjQ1MUw1Mi42MDI5IDQwLjAwMDNMMzIgMjYuNzU1NVpNMzMuMDgxNSAyMi42OTU2QzMyLjQyMjcgMjIuMjcyIDMxLjU3NzMgMjIuMjcyIDMwLjkxODUgMjIuNjk1Nkw2LjYxNjk3IDM4LjMxOEM1LjM5MjMyIDM5LjEwNTIgNS4zOTIzMyA0MC44OTU0IDYuNjE2OTcgNDEuNjgyN0wzMC45MTg1IDU3LjMwNTFDMzEuNTc3MyA1Ny43Mjg2IDMyLjQyMjcgNTcuNzI4NiAzMy4wODE1IDU3LjMwNTFMNTcuMzgzIDQxLjY4MjdDNTguNjA3NiA0MC44OTU0IDU4LjYwNzYgMzkuMTA1MiA1Ny4zODMgMzguMzE4TDMzLjA4MTUgMjIuNjk1NlpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxuICAgIC0tYWRzLXJhZGlpOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48ZyBvcGFjaXR5PVxcXCIwLjVcXFwiPjxwYXRoIGQ9XFxcIk01OCA1MkM1OCAyNi41OTQ5IDM3LjQwNTEgNiAxMiA2SDBWMTBIMTJDMzUuMTk2IDEwIDU0IDI4LjgwNCA1NCA1MlY2NEg1OFY1MlpcXFwiIGZpbGw9XFxcIiUyM0Q5RDlEOVxcXCIvPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTIgNi4yNTAwMkMxMi45NjY1IDYuMjUwMDIgMTMuNzUgNy4wMzM1MyAxMy43NSA4LjAwMDAyTDEzLjc1IDExLjMyNDRDMTMuNzUgMTIuMjkwOSAxMi45NjY1IDEzLjA3NDQgMTIgMTMuMDc0NEMxMS4wMzM1IDEzLjA3NDQgMTAuMjUgMTIuMjkwOSAxMC4yNSAxMS4zMjQ0TDEwLjI1IDguMDAwMDJDMTAuMjUgNy4wMzM1MiAxMS4wMzM1IDYuMjUwMDIgMTIgNi4yNTAwMlpNMTIgMTYuMjIzMUMxMi45NjY1IDE2LjIyMzEgMTMuNzUgMTcuMDA2NiAxMy43NSAxNy45NzMxTDEzLjc1IDI0LjYyMThDMTMuNzUgMjUuNTg4MyAxMi45NjY1IDI2LjM3MTggMTIgMjYuMzcxOEMxMS4wMzM1IDI2LjM3MTggMTAuMjUgMjUuNTg4MyAxMC4yNSAyNC42MjE4TDEwLjI1IDE3Ljk3MzFDMTAuMjUgMTcuMDA2NiAxMS4wMzM1IDE2LjIyMzEgMTIgMTYuMjIzMVpNMTIgMjkuNTIwNUMxMi45NjY1IDI5LjUyMDUgMTMuNzUgMzAuMzA0IDEzLjc1IDMxLjI3MDVMMTMuNzUgMzcuOTE5MkMxMy43NSAzOC44ODU3IDEyLjk2NjUgMzkuNjY5MiAxMiAzOS42NjkyQzExLjAzMzUgMzkuNjY5MiAxMC4yNSAzOC44ODU3IDEwLjI1IDM3LjkxOTJMMTAuMjUgMzEuMjcwNUMxMC4yNSAzMC4zMDQgMTEuMDMzNSAyOS41MjA1IDEyIDI5LjUyMDVaTTEyIDQyLjgxNzlDMTIuOTY2NSA0Mi44MTc5IDEzLjc1IDQzLjYwMTQgMTMuNzUgNDQuNTY3OUwxMy43NSA0Ny44OTIyQzEzLjc1IDQ4Ljg1ODcgMTIuOTY2NSA0OS42NDIyIDEyIDQ5LjY0MjJDMTEuMDMzNSA0OS42NDIyIDEwLjI1IDQ4Ljg1ODcgMTAuMjUgNDcuODkyMkwxMC4yNSA0NC41Njc5QzEwLjI1IDQzLjYwMTQgMTEuMDMzNSA0Mi44MTc5IDEyIDQyLjgxNzlaTTE0LjI1IDUyLjAwMDFDMTQuMjUgNTEuMDMzNiAxNS4wMzM1IDUwLjI1MDEgMTYgNTAuMjUwMUwxOS4zMzMzIDUwLjI1MDFDMjAuMjk5OCA1MC4yNTAxIDIxLjA4MzMgNTEuMDMzNiAyMS4wODMzIDUyLjAwMDFDMjEuMDgzMyA1Mi45NjY2IDIwLjI5OTggNTMuNzUwMSAxOS4zMzMzIDUzLjc1MDFMMTYgNTMuNzUwMUMxNS4wMzM1IDUzLjc1MDEgMTQuMjUgNTIuOTY2NiAxNC4yNSA1Mi4wMDAxWk0yNC4yNSA1Mi4wMDAxQzI0LjI1IDUxLjAzMzYgMjUuMDMzNSA1MC4yNTAxIDI2IDUwLjI1MDFIMzIuNjY2N0MzMy42MzMyIDUwLjI1MDEgMzQuNDE2NyA1MS4wMzM2IDM0LjQxNjcgNTIuMDAwMUMzNC40MTY3IDUyLjk2NjYgMzMuNjMzMiA1My43NTAxIDMyLjY2NjcgNTMuNzUwMUgyNkMyNS4wMzM1IDUzLjc1MDEgMjQuMjUgNTIuOTY2NiAyNC4yNSA1Mi4wMDAxWk0zNy41ODMzIDUyLjAwMDFDMzcuNTgzMyA1MS4wMzM2IDM4LjM2NjggNTAuMjUwMSAzOS4zMzMzIDUwLjI1MDFMNDYgNTAuMjUwMUM0Ni45NjY1IDUwLjI1MDEgNDcuNzUgNTEuMDMzNiA0Ny43NSA1Mi4wMDAxQzQ3Ljc1IDUyLjk2NjYgNDYuOTY2NSA1My43NTAxIDQ2IDUzLjc1MDFIMzkuMzMzM0MzOC4zNjY4IDUzLjc1MDEgMzcuNTgzMyA1Mi45NjY2IDM3LjU4MzMgNTIuMDAwMVpNNTAuOTE2NyA1Mi4wMDAxQzUwLjkxNjcgNTEuMDMzNiA1MS43MDAyIDUwLjI1MDEgNTIuNjY2NyA1MC4yNTAxSDU2QzU2Ljk2NjUgNTAuMjUwMSA1Ny43NSA1MS4wMzM2IDU3Ljc1IDUyLjAwMDFDNTcuNzUgNTIuOTY2NiA1Ni45NjY1IDUzLjc1MDEgNTYgNTMuNzUwMUg1Mi42NjY3QzUxLjcwMDIgNTMuNzUwMSA1MC45MTY3IDUyLjk2NjYgNTAuOTE2NyA1Mi4wMDAxWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L2c+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMCA4QzEwIDYuODk1NDMgMTAuODk1NCA2IDEyIDZDMTguMDQwOCA2IDI0LjAyMjUgNy4xODk4MyAyOS42MDM0IDkuNTAxNTRDMzUuMTg0NCAxMS44MTMzIDQwLjI1NTQgMTUuMjAxNiA0NC41MjY5IDE5LjQ3MzFDNDguNzk4NCAyMy43NDQ2IDUyLjE4NjcgMjguODE1NiA1NC40OTg1IDM0LjM5NjZDNTYuODEwMiAzOS45Nzc1IDU4IDQ1Ljk1OTIgNTggNTJDNTggNTMuMTA0NiA1Ny4xMDQ2IDU0IDU2IDU0QzU0Ljg5NTQgNTQgNTQgNTMuMTA0NiA1NCA1MkM1NCA0Ni40ODQ1IDUyLjkxMzYgNDEuMDIzIDUwLjgwMjkgMzUuOTI3M0M0OC42OTIyIDMwLjgzMTYgNDUuNTk4NSAyNi4yMDE2IDQxLjY5ODUgMjIuMzAxNUMzNy43OTg0IDE4LjQwMTUgMzMuMTY4NCAxNS4zMDc4IDI4LjA3MjcgMTMuMTk3MUMyMi45NzcgMTEuMDg2NCAxNy41MTU1IDEwIDEyIDEwQzEwLjg5NTQgMTAgMTAgOS4xMDQ1NyAxMCA4WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExIDUwQzkuMzQzMTUgNTAgOCA1MS4zNDMxIDggNTNDOCA1NC42NTY5IDkuMzQzMTUgNTYgMTEgNTZDMTIuNjU2OSA1NiAxNCA1NC42NTY5IDE0IDUzQzE0IDUxLjM0MzEgMTIuNjU2OSA1MCAxMSA1MFpNNCA1M0M0IDQ5LjEzNCA3LjEzNDAxIDQ2IDExIDQ2QzE0Ljg2NiA0NiAxOCA0OS4xMzQgMTggNTNDMTggNTYuODY2IDE0Ljg2NiA2MCAxMSA2MEM3LjEzNDAxIDYwIDQgNTYuODY2IDQgNTNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvc3ZnPicpO1xcbiAgICAtLWFkcy1zcGFjaW5nOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCA2NCA2NFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNTYgOEM1Mi42ODYzIDggNTAgMTAuNjg2MyA1MCAxNFY1MEM1MCA1My4zMTM3IDUyLjY4NjMgNTYgNTYgNTZINjRWNTJINTZDNTQuODk1NCA1MiA1NCA1MS4xMDQ2IDU0IDUwVjE0QzU0IDEyLjg5NTQgNTQuODk1NCAxMiA1NiAxMkg2NFY4SDU2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBkPVxcXCJNMTQgMTRDMTQgMTAuNjg2MyAxMS4zMTM3IDggOCA4SDBWMTJIOEM5LjEwNDU3IDEyIDEwIDEyLjg5NTQgMTAgMTRWNTBDMTAgNTEuMTA0NiA5LjEwNDU3IDUyIDggNTJIMFY1Nkg4QzExLjMxMzcgNTYgMTQgNTMuMzEzNyAxNCA1MFYxNFpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggb3BhY2l0eT1cXFwiMC41XFxcIiBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTI3LjIzNzQgMjQuNzYyNkMyNy45MjA4IDI1LjQ0NiAyNy45MjA4IDI2LjU1NCAyNy4yMzc0IDI3LjIzNzRMMjQuMjI0OSAzMC4yNUgzOS43NzUxTDM2Ljc2MjYgMjcuMjM3NEMzNi4wNzkxIDI2LjU1NCAzNi4wNzkxIDI1LjQ0NiAzNi43NjI2IDI0Ljc2MjZDMzcuNDQ2IDI0LjA3OTEgMzguNTU0IDI0LjA3OTEgMzkuMjM3NCAyNC43NjI2TDQ2LjQ3NDkgMzJMMzkuMjM3NCAzOS4yMzc0QzM4LjU1NCAzOS45MjA5IDM3LjQ0NiAzOS45MjA5IDM2Ljc2MjYgMzkuMjM3NEMzNi4wNzkxIDM4LjU1NCAzNi4wNzkxIDM3LjQ0NiAzNi43NjI2IDM2Ljc2MjZMMzkuNzc1MSAzMy43NUgyNC4yMjQ5TDI3LjIzNzQgMzYuNzYyNkMyNy45MjA4IDM3LjQ0NiAyNy45MjA4IDM4LjU1NCAyNy4yMzc0IDM5LjIzNzRDMjYuNTU0IDM5LjkyMDkgMjUuNDQ2IDM5LjkyMDkgMjQuNzYyNiAzOS4yMzc0TDE3LjUyNTEgMzJMMjQuNzYyNiAyNC43NjI2QzI1LjQ0NiAyNC4wNzkxIDI2LjU1NCAyNC4wNzkxIDI3LjIzNzQgMjQuNzYyNlpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxuICAgIC0tYWRzLXR5cG9ncmFwaHk6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgdmlld0JveD1cXFwiMCAwIDY0IDY2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMTYuMzg4OCA5LjQ5NTEyTDMyLjE1NDkgNTEuNTM3OEMzMi42MDI4IDUyLjczMjQgMzEuOTk3NiA1NC4wNjM5IDMwLjgwMyA1NC41MTE5QzI5LjYwODUgNTQuOTU5OCAyOC4yNzcgNTQuMzU0NiAyNy44MjkgNTMuMTZMMjMuODU2NyA0Mi41NjczSDguOTIwOTJMNC45NDg2NCA1My4xNkM0LjUwMDY5IDU0LjM1NDYgMy4xNjkxOCA1NC45NTk4IDEuOTc0NjMgNTQuNTExOUMwLjc4MDA4MSA1NC4wNjM5IDAuMTc0ODQ4IDUyLjczMjQgMC42MjI4MDMgNTEuNTM3OEwxNi4zODg4IDkuNDk1MTJaTTEwLjY1MzQgMzcuOTQ3M0gyMi4xMjQyTDE2LjM4ODggMjIuNjUyOUwxMC42NTM0IDM3Ljk0NzNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjxwYXRoIG9wYWNpdHk9XFxcIjAuNVxcXCIgZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk01MC40MTk4IDI4Ljk2MjhDNDYuMTMyNCAyOC45NjI4IDQyLjE0OTYgMzMuMDQyOCA0Mi4xNDk2IDM4Ljc0NDRDNDIuMTQ5NiA0NC40NDYxIDQ2LjEzMjQgNDguNTI2MSA1MC40MTk4IDQ4LjUyNjFDNTQuNjcyOCA0OC41MjYxIDU4LjYyNiA0NC41MTEzIDU4LjY4OTIgMzguODgxNVYzOC42MDc0QzU4LjYyNiAzMi45Nzc1IDU0LjY3MjggMjguOTYyOCA1MC40MTk4IDI4Ljk2MjhaTTU4LjY4OTIgMjcuNjg0NEM1Ni40ODg4IDI1LjYxNjMgNTMuNjM0NCAyNC4zNDI4IDUwLjQxOTggMjQuMzQyOEM0My4wMjA2IDI0LjM0MjggMzcuNTI5NiAzMS4wOSAzNy41Mjk2IDM4Ljc0NDRDMzcuNTI5NiA0Ni4zOTg4IDQzLjAyMDYgNTMuMTQ2MSA1MC40MTk4IDUzLjE0NjFDNTMuNjM0NCA1My4xNDYxIDU2LjQ4ODggNTEuODcyNiA1OC42ODkyIDQ5LjgwNDRWNTMuODU5QzU4LjY4OTIgNTcuMjcwNSA1NS4zMzM0IDYwLjYxNzcgNTAuNDE5IDYwLjYxNzdDNDcuMjUzOSA2MC42MTc3IDQ0LjYyMDkgNTkuMTY4NSA0My4yNDAxIDU3LjIwNDNDNDIuNTA2NCA1Ni4xNjA2IDQxLjA2NTUgNTUuOTA5MyA0MC4wMjE4IDU2LjY0M0MzOC45NzgxIDU3LjM3NjcgMzguNzI2OCA1OC44MTc1IDM5LjQ2MDUgNTkuODYxMkM0MS43ODI1IDYzLjE2NDIgNDUuODg2OCA2NS4yMzc3IDUwLjQxOSA2NS4yMzc3QzU3LjE5MTIgNjUuMjM3NyA2My4zMDkyIDYwLjQ2NDUgNjMuMzA5MiA1My44NTlWMzguOTAxM0M2My4zMDk3IDM4Ljg0OSA2My4zMSAzOC43OTY3IDYzLjMxIDM4Ljc0NDRDNjMuMzEgMzguNjkyMSA2My4zMDk3IDM4LjYzOTggNjMuMzA5MiAzOC41ODc2VjI2LjY1MjhDNjMuMzA5MiAyNS4zNzcgNjIuMjc1IDI0LjM0MjggNjAuOTk5MiAyNC4zNDI4QzU5LjcyMzQgMjQuMzQyOCA1OC42ODkyIDI1LjM3NyA1OC42ODkyIDI2LjY1MjhWMjcuNjg0NFpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PC9zdmc+Jyk7XFxuICAgIC0tYWRzLWNvbG9yczogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNjQgNjRcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PGcgb3BhY2l0eT1cXFwiMC41XFxcIj48cGF0aCBkPVxcXCJNNDUuNjU2OCA1MC4zNDMxTDU0LjM0MzEgNDEuNjU2OUM1NC41MDAyIDQxLjQ5OTggNTQuNjQ5MyA0MS4zMzc5IDU0Ljc5MDUgNDEuMTcxNkgyNS4xNzE2TDM0LjM0MzEgNTAuMzQzMUMzNy40NjczIDUzLjQ2NzMgNDIuNTMyNyA1My40NjczIDQ1LjY1NjggNTAuMzQzMVpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIi8+PHBhdGggZD1cXFwiTTYuNjcxNDQgNTQuMDIxNUw2LjY5ODQyIDU0LjE0MjlDNy40NTg5MiA1Ny41NjUxIDEwLjQ5NDMgNjAgMTQgNjBDMTcuNTA1NyA2MCAyMC41NDExIDU3LjU2NTEgMjEuMzAxNiA1NC4xNDI5TDIxLjMyODYgNTQuMDIxNUMyMS43NTkyIDUyLjA4MzggMjEuNDE4MiA1MC4wNTQ1IDIwLjM3NzggNDguMzY0TDE0IDM4TDcuNjIyMTggNDguMzY0QzYuNTgxODUgNTAuMDU0NSA2LjI0MDgzIDUyLjA4MzggNi42NzE0NCA1NC4wMjE1WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L2c+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0zOS43NSA1Ljc3NTM5VjEzLjI3NTRMNTUuNTgwNiAyOS4xMDZDNTkuMzg4MiAzMi45MTM2IDU5LjM4ODIgMzkuMDg2OSA1NS41ODA2IDQyLjg5NDZMNDYuODk0MyA1MS41ODA5QzQzLjA4NjcgNTUuMzg4NSAzNi45MTMzIDU1LjM4ODUgMzMuMTA1NyA1MS41ODA4TDEzLjUyNTEgMzIuMDAwM0wzOS43NSA1Ljc3NTM5Wk0zNiAxNC40NzUxTDE4LjQ3NDkgMzIuMDAwM0wzNS41ODA2IDQ5LjEwNkMzOC4wMjE0IDUxLjU0NjcgNDEuOTc4NiA1MS41NDY4IDQ0LjQxOTQgNDkuMTA2TDUzLjEwNTcgNDAuNDE5N0M1NS41NDY1IDM3Ljk3ODkgNTUuNTQ2NSAzNC4wMjE2IDUzLjEwNTcgMzEuNTgwOEwzNiAxNC40NzUxWlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTU1LjIzNzQgMTUuMjM3N0M1NS45MjA5IDE0LjU1NDMgNTUuOTIwOSAxMy40NDYyIDU1LjIzNzQgMTIuNzYyOEM1NC41NTQgMTIuMDc5NCA1My40NDYgMTIuMDc5NCA1Mi43NjI2IDEyLjc2MjhMMzkuNjM2NCAyNS44ODlDMzguODQ2NyAyNS40ODA4IDM3Ljk1MDMgMjUuMjUwMyAzNyAyNS4yNTAzQzMzLjgyNDQgMjUuMjUwMyAzMS4yNSAyNy44MjQ2IDMxLjI1IDMxLjAwMDNDMzEuMjUgMzQuMTc1OSAzMy44MjQ0IDM2Ljc1MDMgMzcgMzYuNzUwM0M0MC4xNzU2IDM2Ljc1MDMgNDIuNzUgMzQuMTc1OSA0Mi43NSAzMS4wMDAzQzQyLjc1IDMwLjA1IDQyLjUxOTUgMjkuMTUzNiA0Mi4xMTEzIDI4LjM2MzhMNTUuMjM3NCAxNS4yMzc3Wk0zNC43NSAzMS4wMDAzQzM0Ljc1IDI5Ljc1NzYgMzUuNzU3NCAyOC43NTAzIDM3IDI4Ljc1MDNDMzguMjQyNiAyOC43NTAzIDM5LjI1IDI5Ljc1NzYgMzkuMjUgMzEuMDAwM0MzOS4yNSAzMi4yNDI5IDM4LjI0MjYgMzMuMjUwMyAzNyAzMy4yNTAzQzM1Ljc1NzQgMzMuMjUwMyAzNC43NSAzMi4yNDI5IDM0Ljc1IDMxLjAwMDNaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIvPjwvc3ZnPicpO1xcblxcbn1cXG5cXG4uaWNvbiB7XFxuICAgIC0taWNvbi1zaXplOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG59XFxuXFxuLmljb24tdHlwb2dyYXBoeTo6YmVmb3JlIHtcXG4gICAgLS1pY29uLXNyYzogdmFyKC0tYWRzLXR5cG9ncmFwaHkpO1xcbn1cXG4uaWNvbi1zcGFjaW5nOjpiZWZvcmUge1xcbiAgICAtLWljb24tc3JjOiB2YXIoLS1hZHMtc3BhY2luZyk7XFxufVxcbi5pY29uLXJhZGlpOjpiZWZvcmUge1xcbiAgICAtLWljb24tc3JjOiB2YXIoLS1hZHMtcmFkaWkpO1xcbn1cXG4uaWNvbi1jb2xvcnM6OmJlZm9yZSB7XFxuICAgIC0taWNvbi1zcmM6IHZhcigtLWFkcy1jb2xvcnMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWFjY2VudC1yZWQtMTAwOiBoc2xhKDQuMSwgODQuMTclLCA3Mi43NSUsIDAuMTI1KTtcbiAgICAtLWFjY2VudC1yZWQtMjAwOiBoc2xhKDQuMSwgODQuMTclLCA3Mi43NSUsIDAuMzMpO1xuICAgIC0tYWNjZW50LXJlZC0zMDA6IGhzbCgzLjkzLCA4My4xNyUsIDYwLjM5JSk7XG4gICAgLS1hY2NlbnQtcmVkLTQwMDogaHNsKDQuMDksIDkwLjE2JSwgNDcuODQlKTtcbiAgICAtLWFjY2VudC1yZWQtNTAwOiBoc2woNC4xOCwgODkuMzMlLCA0NC4xMiUpO1xuICAgIC0tYWNjZW50LXJlZC02MDA6IGhzbCgzLjY5LCA4Ni42NyUsIDg1LjI5JSk7XG4gICAgLS1hY2NlbnQtYW1iZXItMTAwOiBoc2xhKDI0LjU5LCA3MC4xMSUsIDY1Ljg4JSwgMC4xMjUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTIwMDogaHNsYSgyNC41OSwgNzAuMTElLCA2NS44OCUsIDAuMzMpO1xuICAgIC0tYWNjZW50LWFtYmVyLTMwMDogaHNsKDI0LjcxLCA2My40OSUsIDUyLjc1JSk7XG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjQuOTIsIDkwLjE1JSwgMzkuOCUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTUwMDogaHNsKDI1LjMsIDg5LjI1JSwgMzYuNDclKTtcbiAgICAtLWFjY2VudC1hbWJlci02MDA6IGhzbCgyNC4xMywgODUuMTklLCA3OC44MiUpO1xuICAgIC0tYWNjZW50LWJyb3duLTEwMDogaHNsYSgzMi4zNCwgNjUuOTglLCA2MS45NiUsIDAuMTI1KTtcbiAgICAtLWFjY2VudC1icm93bi0yMDA6IGhzbGEoMzIuMzQsIDY1Ljk4JSwgNjEuOTYlLCAwLjMzKTtcbiAgICAtLWFjY2VudC1icm93bi0zMDA6IGhzbCgzMi44OCwgNTguODclLCA0OC42MyUpO1xuICAgIC0tYWNjZW50LWJyb3duLTQwMDogaHNsKDMzLjI5LCA5MC4xMSUsIDM1LjY5JSk7XG4gICAgLS1hY2NlbnQtYnJvd24tNTAwOiBoc2woMzMuNDIsIDg5LjIyJSwgMzIuNzUlKTtcbiAgICAtLWFjY2VudC1icm93bi02MDA6IGhzbCgzMS42NCwgODUuOTQlLCA3NC45JSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tMTAwOiBoc2xhKDEyNi4zNSwgODcuMSUsIDQyLjU1JSwgMC4xMjUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTIwMDogaHNsYSgxMjYuMzUsIDg3LjElLCA0Mi41NSUsIDAuMzMpO1xuICAgIC0tYWNjZW50LWdyZWVuLTMwMDogaHNsKDEyNy41NSwgODcuODUlLCAzNS40OSUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTQwMDogaHNsKDEzMC4xNSwgOTAuMjglLCAyOC4yNCUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTUwMDogaHNsKDEzMS42LCA4OS40NyUsIDI2LjA4JSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tNjAwOiBoc2woMTI0Ljk1LCA4NS44MyUsIDQ5LjglKTtcbiAgICAtLWFjY2VudC10ZWFsLTEwMDogaHNsYSgxNzguMzQsIDg2LjYlLCA0MC45OCUsIDAuMTI1KTtcbiAgICAtLWFjY2VudC10ZWFsLTIwMDogaHNsYSgxNzguMzQsIDg2LjYlLCA0MC45OCUsIDAuMzMpO1xuICAgIC0tYWNjZW50LXRlYWwtMzAwOiBoc2woMTgwLjc4LCA4OC41MSUsIDM0LjEyJSk7XG4gICAgLS1hY2NlbnQtdGVhbC00MDA6IGhzbCgxODQuMDksIDkwLjQxJSwgMjguNjMlKTtcbiAgICAtLWFjY2VudC10ZWFsLTUwMDogaHNsKDE4Ni4yOSwgODguNTclLCAyNy40NSUpO1xuICAgIC0tYWNjZW50LXRlYWwtNjAwOiBoc2woMTc2LjU3LCA4Ni4wNyUsIDQ3Ljg0JSk7XG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjA2LjAzLCA4MC45NSUsIDY3LjA2JSwgMC4xMjUpO1xuICAgIC0tYWNjZW50LWJsdWUtMjAwOiBoc2xhKDIwNi4wMywgODAuOTUlLCA2Ny4wNiUsIDAuMzMpO1xuICAgIC0tYWNjZW50LWJsdWUtMzAwOiBoc2woMjA4LjI2LCA3Ny40OCUsIDU2LjQ3JSk7XG4gICAgLS1hY2NlbnQtYmx1ZS00MDA6IGhzbCgyMTAsIDg5Ljc0JSwgNDUuODglKTtcbiAgICAtLWFjY2VudC1ibHVlLTUwMDogaHNsKDIxMi41NCwgODguNTUlLCA0NC41MSUpO1xuICAgIC0tYWNjZW50LWJsdWUtNjAwOiBoc2woMjAxLjQzLCA4NS45NiUsIDc3LjY1JSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzUuOTEsIDg4JSwgODAuMzklLCAwLjEyNSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTIwMDogaHNsYSgyMzUuOTEsIDg4JSwgODAuMzklLCAwLjMzKTtcbiAgICAtLWFjY2VudC1pbmRpZ28tMzAwOiBoc2woMjM4LjQ5LCA4OS40NyUsIDczLjkyJSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTQwMDogaHNsKDI0MCwgOTAuMyUsIDY3LjY1JSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTUwMDogaHNsKDI0NC4wNSwgODguMTElLCA2My43MyUpO1xuICAgIC0tYWNjZW50LWluZGlnby02MDA6IGhzbCgyMzAuNjksIDg1LjI5JSwgODYuNjclKTtcbiAgICAtLWFjY2VudC12aW9sZXQtMTAwOiBoc2xhKDI1NiwgODguMjQlLCA4MCUsIDAuMTI1KTtcbiAgICAtLWFjY2VudC12aW9sZXQtMjAwOiBoc2xhKDI1NiwgODguMjQlLCA4MCUsIDAuMzMpO1xuICAgIC0tYWNjZW50LXZpb2xldC0zMDA6IGhzbCgyNTguNzUsIDkwLjE0JSwgNzIuMTYlKTtcbiAgICAtLWFjY2VudC12aW9sZXQtNDAwOiBoc2woMjYwLjEyLCA5MC4xMSUsIDY0LjMxJSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTUwMDogaHNsKDI2NC4xMywgODQuODMlLCA1OC42MyUpO1xuICAgIC0tYWNjZW50LXZpb2xldC02MDA6IGhzbCgyNTAsIDg3LjElLCA4Ny44NCUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0xMDA6IGhzbGEoMjc2LCA4OC4yNCUsIDc2LjY3JSwgMC4xMjUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0yMDA6IGhzbGEoMjc2LCA4OC4yNCUsIDc2LjY3JSwgMC4zMyk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTMwMDogaHNsKDI3OC41NCwgODkuMzUlLCA2Ni44NiUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS00MDA6IGhzbCgyODAsIDkwJSwgNTYuODYlKTtcbiAgICAtLWFjY2VudC1wdXJwbGUtNTAwOiBoc2woMjgzLjIzLCA3My4yMyUsIDUwLjIlKTtcbiAgICAtLWFjY2VudC1wdXJwbGUtNjAwOiBoc2woMjY4Ljk3LCA4NS4yOSUsIDg2LjY3JSk7XG4gICAgLS1hY2NlbnQtcGluay0xMDA6IGhzbGEoMzM0Ljg3LCA4NC4xNyUsIDcyLjc1JSwgMC4xMjUpO1xuICAgIC0tYWNjZW50LXBpbmstMjAwOiBoc2xhKDMzNC44NywgODQuMTclLCA3Mi43NSUsIDAuMzMpO1xuICAgIC0tYWNjZW50LXBpbmstMzAwOiBoc2woMzM4LjQ0LCA4Mi4yNyUsIDYwLjIlKTtcbiAgICAtLWFjY2VudC1waW5rLTQwMDogaHNsKDM0MCwgOTAuMTIlLCA0Ny42NSUpO1xuICAgIC0tYWNjZW50LXBpbmstNTAwOiBoc2woMzQzLjg4LCA4OC41NSUsIDQ0LjUxJSk7XG4gICAgLS1hY2NlbnQtcGluay02MDA6IGhzbCgzMjYuNzcsIDg2LjY3JSwgODUuMjklKTtcbiAgICAtLXRleHQtYmFzZS00MDA6IGhzbGEoMCwgMCUsIDUuODglLCAwLjQ1KTtcbiAgICAtLXRleHQtYmFzZS01MDA6IGhzbGEoMCwgMCUsIDUuODglLCAwLjY1KTtcbiAgICAtLXRleHQtYmFzZS02MDA6IGhzbCgwLCAwJSwgNS44OCUpO1xuICAgIC0tdGV4dC1iYXNlLWFjdGlvbjogdmFyKC0tcHJpbWFyeS01MDApO1xuICAgIC0tdGV4dC1iYXNlLWluZm86IHZhcigtLWluZm8tNTAwKTtcbiAgICAtLXRleHQtYmFzZS1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTUwMCk7XG4gICAgLS10ZXh0LWJhc2Utd2FybmluZzogdmFyKC0td2FybmluZy01MDApO1xuICAgIC0tdGV4dC1iYXNlLWRhbmdlcjogdmFyKC0tZGFuZ2VyLTUwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTQwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC40NSk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcbiAgICAtLXRleHQtY29udHJhc3QtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIC0tdGV4dC1jb250cmFzdC1hY3Rpb246IHZhcigtLXByaW1hcnktNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3QtaW5mbzogdmFyKC0taW5mby02MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTYwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3QtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNjAwKTtcbiAgICAtLWFsdC1iYXNlLTEwMDogaHNsYSgxODAsIDEwMCUsIDEzLjkyJSwgMC4wNCk7XG4gICAgLS1hbHQtYmFzZS0yMDA6IGhzbGEoMTgwLCAxMDAlLCAxMy45MiUsIDAuMDgpO1xuICAgIC0tYWx0LWJhc2UtMzAwOiBoc2xhKDE4MCwgMTAwJSwgMTMuOTIlLCAwLjE2KTtcbiAgICAtLWFsdC1iYXNlLTQwMDogaHNsYSgxODAsIDEwMCUsIDEzLjkyJSwgMC4yNCk7XG4gICAgLS1hbHQtYmFzZS01MDA6IGhzbGEoMTgwLCAxMDAlLCAxMy45MiUsIDAuMzIpO1xuICAgIC0tYWx0LWJhc2UtNjAwOiBoc2xhKDE4MCwgMTAwJSwgMTMuOTIlLCAwLjQ0KTtcbiAgICAtLWFsdC1jb250cmFzdC0xMDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMDQpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTIwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC4wOCk7XG4gICAgLS1hbHQtY29udHJhc3QtMzAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEyKTtcbiAgICAtLWFsdC1jb250cmFzdC00MDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMTYpO1xuICAgIC0tYWx0LWNvbnRyYXN0LTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC4yNCk7XG4gICAgLS1hbHQtY29udHJhc3QtNjAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjMyKTtcbiAgICAtLXV0aWxpdHktd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgLS11dGlsaXR5LWJsYWNrOiBoc2woMCwgMCUsIDMuOTIlKTtcbiAgICAtLXV0aWxpdHktdHJhbnNwYXJlbnQ6IGhzbGEoMCwgMCUsIDEwMCUsIDApO1xuICAgIC0tdXRpbGl0eS1zaGFkZS0xMDA6IGhzbGEoMTgwLCAxMDAlLCA4LjA0JSwgMC4wNCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTIwMDogaHNsYSgxODAsIDEwMCUsIDguMDQlLCAwLjA4KTtcbiAgICAtLXV0aWxpdHktc2hhZGUtMzAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMTYpO1xuICAgIC0tdXRpbGl0eS1zaGFkZS00MDA6IGhzbGEoMTgwLCAxMDAlLCA4LjA0JSwgMC4yNCk7XG4gICAgLS11dGlsaXR5LXNoYWRlLTUwMDogaHNsYSgxODAsIDEwMCUsIDguMDQlLCAwLjMyKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtNjAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuNDQpO1xuICAgIC0tdXRpbGl0eS10aW50LTEwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcbiAgICAtLXV0aWxpdHktdGludC0yMDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNik7XG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjcpO1xuICAgIC0tdXRpbGl0eS10aW50LTQwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC44KTtcbiAgICAtLXV0aWxpdHktdGludC01MDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuOSk7XG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIC0tcHJpbWFyeS0xMDA6IHZhcigtLWFjY2VudC1ibHVlLTEwMCk7XG4gICAgLS1wcmltYXJ5LTIwMDogdmFyKC0tYWNjZW50LWJsdWUtMjAwKTtcbiAgICAtLXByaW1hcnktMzAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0zMDApO1xuICAgIC0tcHJpbWFyeS00MDA6IHZhcigtLWFjY2VudC1ibHVlLTQwMCk7XG4gICAgLS1wcmltYXJ5LTUwMDogdmFyKC0tYWNjZW50LWJsdWUtNTAwKTtcbiAgICAtLXByaW1hcnktNjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS02MDApO1xuICAgIC0taW5mby0xMDA6IHZhcigtLWFjY2VudC10ZWFsLTEwMCk7XG4gICAgLS1pbmZvLTIwMDogdmFyKC0tYWNjZW50LXRlYWwtMjAwKTtcbiAgICAtLWluZm8tMzAwOiB2YXIoLS1hY2NlbnQtdGVhbC0zMDApO1xuICAgIC0taW5mby00MDA6IHZhcigtLWFjY2VudC10ZWFsLTQwMCk7XG4gICAgLS1pbmZvLTUwMDogdmFyKC0tYWNjZW50LXRlYWwtNTAwKTtcbiAgICAtLWluZm8tNjAwOiB2YXIoLS1hY2NlbnQtdGVhbC02MDApO1xuICAgIC0tc3VjY2Vzcy0xMDA6IHZhcigtLWFjY2VudC1ncmVlbi0xMDApO1xuICAgIC0tc3VjY2Vzcy0yMDA6IHZhcigtLWFjY2VudC1ncmVlbi0yMDApO1xuICAgIC0tc3VjY2Vzcy0zMDA6IHZhcigtLWFjY2VudC1ncmVlbi0zMDApO1xuICAgIC0tc3VjY2Vzcy00MDA6IHZhcigtLWFjY2VudC1ncmVlbi00MDApO1xuICAgIC0tc3VjY2Vzcy01MDA6IHZhcigtLWFjY2VudC1ncmVlbi01MDApO1xuICAgIC0tc3VjY2Vzcy02MDA6IHZhcigtLWFjY2VudC1ncmVlbi02MDApO1xuICAgIC0td2FybmluZy0xMDA6IHZhcigtLWFjY2VudC1hbWJlci0xMDApO1xuICAgIC0td2FybmluZy0yMDA6IHZhcigtLWFjY2VudC1hbWJlci0yMDApO1xuICAgIC0td2FybmluZy0zMDA6IHZhcigtLWFjY2VudC1hbWJlci0zMDApO1xuICAgIC0td2FybmluZy00MDA6IHZhcigtLWFjY2VudC1hbWJlci00MDApO1xuICAgIC0td2FybmluZy01MDA6IHZhcigtLWFjY2VudC1hbWJlci01MDApO1xuICAgIC0td2FybmluZy02MDA6IHZhcigtLWFjY2VudC1hbWJlci02MDApO1xuICAgIC0tZGFuZ2VyLTEwMDogdmFyKC0tYWNjZW50LXJlZC0xMDApO1xuICAgIC0tZGFuZ2VyLTIwMDogdmFyKC0tYWNjZW50LXJlZC0yMDApO1xuICAgIC0tZGFuZ2VyLTMwMDogdmFyKC0tYWNjZW50LXJlZC0zMDApO1xuICAgIC0tZGFuZ2VyLTQwMDogdmFyKC0tYWNjZW50LXJlZC00MDApO1xuICAgIC0tZGFuZ2VyLTUwMDogdmFyKC0tYWNjZW50LXJlZC01MDApO1xuICAgIC0tZGFuZ2VyLTYwMDogdmFyKC0tYWNjZW50LXJlZC02MDApO1xuICAgIC0tZmlsbC1iYXNlLTEwMDogaHNsKDAsIDAlLCAxMDAlKTtcbiAgICAtLWZpbGwtYmFzZS0yMDA6IGhzbCgwLCAwJSwgOTguMDQlKTtcbiAgICAtLWZpbGwtYmFzZS0zMDA6IGhzbCgwLCAwJSwgOTYuMDglKTtcbiAgICAtLWZpbGwtYmFzZS00MDA6IGhzbCgwLCAwJSwgOTQuMTIlKTtcbiAgICAtLWZpbGwtYmFzZS01MDA6IGhzbCgxODAsIDIuNDQlLCA5MS45NiUpO1xuICAgIC0tZmlsbC1iYXNlLTYwMDogaHNsKDE4MCwgMS42NCUsIDg4LjA0JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTEwMDogaHNsKDE4MCwgMC44MSUsIDI0LjEyJSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTIwMDogaHNsKDI0MCwgMC44OCUsIDIyLjE2JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTMwMDogaHNsKDAsIDAlLCAyMCUpO1xuICAgIC0tZmlsbC1jb250cmFzdC00MDA6IGhzbCgwLCAwJSwgMTguMDQlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNTAwOiBoc2woMTgwLCAxLjIzJSwgMTUuODglKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNjAwOiBoc2woMTgwLCAxLjQxJSwgMTMuOTIlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTEwMDogaHNsKDAsIDAlLCA5Mi45NCUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtMjAwOiBoc2woMTgwLCAxLjY0JSwgODguMDQlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTMwMDogaHNsKDE4MCwgMS4zJSwgODQuOSUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtNDAwOiBoc2woMCwgMCUsIDgwJSk7XG4gICAgLS1zdHJva2UtYmFzZS01MDA6IGhzbCgxODAsIDAuNjUlLCA3MCUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMTgwLCAwLjQzJSwgNTMuOTIlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0xMDA6IGhzbCgxODAsIDAuNyUsIDI4LjA0JSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtMjAwOiBoc2woMTgwLCAwLjY1JSwgMzAlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsIDAuNTklLCAzMy4xNCUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTQwMDogaHNsKDE4MCwgMC41NSUsIDM1Ljg4JSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtNTAwOiBoc2woMTgwLCAwLjUlLCAzOS4wMiUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwgMC40NCUsIDQ0LjklKTtcbn1cblxuLmZpZ21hLWRhcmsge1xuICAgIC0tYWNjZW50LXJlZC0xMDA6IGhzbGEoNC4wOCwgNzUuMTglLCA3My4xNCUsIDAuMik7XG4gICAgLS1hY2NlbnQtcmVkLTIwMDogaHNsYSg0LjA4LCA3NS4xOCUsIDczLjE0JSwgMC40NSk7XG4gICAgLS1hY2NlbnQtcmVkLTMwMDogaHNsKDQuMDgsIDc1LjM4JSwgNjEuNzYlKTtcbiAgICAtLWFjY2VudC1yZWQtNDAwOiBoc2woNC4wNCwgNzYuMjglLCA1MC4zOSUpO1xuICAgIC0tYWNjZW50LXJlZC01MDA6IGhzbCg0LjIxLCA3Mi4xNSUsIDg0LjUxJSk7XG4gICAgLS1hY2NlbnQtcmVkLTYwMDogaHNsKDQuMjEsIDcyLjE1JSwgODQuNTElKTtcbiAgICAtLWFjY2VudC1hbWJlci0xMDA6IGhzbGEoMjQuMjMsIDYxLjE4JSwgNjYuNjclLCAwLjIpO1xuICAgIC0tYWNjZW50LWFtYmVyLTIwMDogaHNsYSgyNC4yMywgNjEuMTglLCA2Ni42NyUsIDAuNDUpO1xuICAgIC0tYWNjZW50LWFtYmVyLTMwMDogaHNsKDI0LjU1LCA1NS45MyUsIDUzLjczJSk7XG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjQuNzUsIDc2LjE5JSwgNDEuMTglKTtcbiAgICAtLWFjY2VudC1hbWJlci01MDA6IGhzbCgyMy42OCwgNzEuNyUsIDc5LjIyJSk7XG4gICAgLS1hY2NlbnQtYW1iZXItNjAwOiBoc2woMjMuNjgsIDcxLjclLCA3OS4yMiUpO1xuICAgIC0tYWNjZW50LWJyb3duLTEwMDogaHNsYSgzMi4yMiwgNTcuNDUlLCA2My4xNCUsIDAuMik7XG4gICAgLS1hY2NlbnQtYnJvd24tMjAwOiBoc2xhKDMyLjIyLCA1Ny40NSUsIDYzLjE0JSwgMC40NSk7XG4gICAgLS1hY2NlbnQtYnJvd24tMzAwOiBoc2woMzIuNiwgNDkuOCUsIDUwJSk7XG4gICAgLS1hY2NlbnQtYnJvd24tNDAwOiBoc2woMzIuODgsIDc2Ljg0JSwgMzcuMjUlKTtcbiAgICAtLWFjY2VudC1icm93bi01MDA6IGhzbCgzMS42OSwgNzIuMzYlLCA3NS44OCUpO1xuICAgIC0tYWNjZW50LWJyb3duLTYwMDogaHNsKDMxLjY5LCA3Mi4zNiUsIDc1Ljg4JSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tMTAwOiBoc2xhKDEyNi41MSwgNTMuNTMlLCA1Mi43NSUsIDAuMik7XG4gICAgLS1hY2NlbnQtZ3JlZW4tMjAwOiBoc2xhKDEyNi41MSwgNTMuNTMlLCA1Mi43NSUsIDAuNDUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTMwMDogaHNsKDEyOC4yOSwgNTguMjklLCA0MS4zNyUpO1xuICAgIC0tYWNjZW50LWdyZWVuLTQwMDogaHNsKDEzMC4xNywgNzYuNjIlLCAzMC4yJSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tNTAwOiBoc2woMTI0LjkzLCA3Mi44MyUsIDYzLjkyJSk7XG4gICAgLS1hY2NlbnQtZ3JlZW4tNjAwOiBoc2woMTI0LjkzLCA3Mi44MyUsIDYzLjkyJSk7XG4gICAgLS1hY2NlbnQtdGVhbC0xMDA6IGhzbGEoMTc4Ljc0LCA1OC44NSUsIDQ3LjY1JSwgMC4yKTtcbiAgICAtLWFjY2VudC10ZWFsLTIwMDogaHNsYSgxNzguNzQsIDU4Ljg1JSwgNDcuNjUlLCAwLjQ1KTtcbiAgICAtLWFjY2VudC10ZWFsLTMwMDogaHNsKDE4MC45MiwgNjUuNjYlLCAzOC44MiUpO1xuICAgIC0tYWNjZW50LXRlYWwtNDAwOiBoc2woMTg0LCA3Ni45MiUsIDMwLjU5JSk7XG4gICAgLS1hY2NlbnQtdGVhbC01MDA6IGhzbCgxNzYuNiwgNzIuNiUsIDU3LjA2JSk7XG4gICAgLS1hY2NlbnQtdGVhbC02MDA6IGhzbCgxNzYuNiwgNzIuNiUsIDU3LjA2JSk7XG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjA2LjA5LCA2OS43JSwgNjcuNjUlLCAwLjIpO1xuICAgIC0tYWNjZW50LWJsdWUtMjAwOiBoc2xhKDIwNi4wOSwgNjkuNyUsIDY3LjY1JSwgMC40NSk7XG4gICAgLS1hY2NlbnQtYmx1ZS0zMDA6IGhzbCgyMDguMzgsIDY3Ljg5JSwgNTcuMjUlKTtcbiAgICAtLWFjY2VudC1ibHVlLTQwMDogaHNsKDIxMCwgNzYuNDclLCA0Ni42NyUpO1xuICAgIC0tYWNjZW50LWJsdWUtNTAwOiBoc2woMjAxLjQ4LCA3Mi45NyUsIDc4LjI0JSk7XG4gICAgLS1hY2NlbnQtYmx1ZS02MDA6IGhzbCgyMDEuNDgsIDcyLjk3JSwgNzguMjQlKTtcbiAgICAtLWFjY2VudC1pbmRpZ28tMTAwOiBoc2xhKDIzNS40NCwgNzMuODMlLCA3OS4wMiUsIDAuMik7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTIwMDogaHNsYSgyMzUuNDQsIDczLjgzJSwgNzkuMDIlLCAwLjQ1KTtcbiAgICAtLWFjY2VudC1pbmRpZ28tMzAwOiBoc2woMjM4LjMsIDc1LjcxJSwgNzIuNTUlKTtcbiAgICAtLWFjY2VudC1pbmRpZ28tNDAwOiBoc2woMjQwLCA3NiUsIDY1LjY5JSk7XG4gICAgLS1hY2NlbnQtaW5kaWdvLTUwMDogaHNsKDIyOS42MiwgNzIuMjIlLCA4NS44OCUpO1xuICAgIC0tYWNjZW50LWluZGlnby02MDA6IGhzbCgyMjkuNjIsIDcyLjIyJSwgODUuODglKTtcbiAgICAtLWFjY2VudC12aW9sZXQtMTAwOiBoc2xhKDI1NS41NiwgNzUuNyUsIDc5LjAyJSwgMC4yKTtcbiAgICAtLWFjY2VudC12aW9sZXQtMjAwOiBoc2xhKDI1NS41NiwgNzUuNyUsIDc5LjAyJSwgMC40NSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTMwMDogaHNsKDI1OC4yMSwgNzUuNjglLCA3MC45OCUpO1xuICAgIC0tYWNjZW50LXZpb2xldC00MDA6IGhzbCgyNTkuODYsIDc2LjcyJSwgNjIuOTQlKTtcbiAgICAtLWFjY2VudC12aW9sZXQtNTAwOiBoc2woMjQ4Ljc1LCA3Mi43MyUsIDg3LjA2JSk7XG4gICAgLS1hY2NlbnQtdmlvbGV0LTYwMDogaHNsKDI0OC43NSwgNzIuNzMlLCA4Ny4wNiUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0xMDA6IGhzbGEoMjc1LjMzLCA3NSUsIDc2LjQ3JSwgMC4yKTtcbiAgICAtLWFjY2VudC1wdXJwbGUtMjAwOiBoc2xhKDI3NS4zMywgNzUlLCA3Ni40NyUsIDAuNDUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS0zMDA6IGhzbCgyNzguNDQsIDc1LjI5JSwgNjYuNjclKTtcbiAgICAtLWFjY2VudC1wdXJwbGUtNDAwOiBoc2woMjc5Ljg4LCA3Ni4yNiUsIDU3LjA2JSk7XG4gICAgLS1hY2NlbnQtcHVycGxlLTUwMDogaHNsKDI2OC4yNCwgNzEuODMlLCA4Ni4wOCUpO1xuICAgIC0tYWNjZW50LXB1cnBsZS02MDA6IGhzbCgyNjguMjQsIDcxLjgzJSwgODYuMDglKTtcbiAgICAtLWFjY2VudC1waW5rLTEwMDogaHNsYSgzMzUuMjksIDc1JSwgNzMuMzMlLCAwLjIpO1xuICAgIC0tYWNjZW50LXBpbmstMjAwOiBoc2xhKDMzNS4yOSwgNzUlLCA3My4zMyUsIDAuNDUpO1xuICAgIC0tYWNjZW50LXBpbmstMzAwOiBoc2woMzM3Ljk2LCA3NS4zOCUsIDYxLjc2JSk7XG4gICAgLS1hY2NlbnQtcGluay00MDA6IGhzbCgzNDAsIDc2LjE5JSwgNTAuNTklKTtcbiAgICAtLWFjY2VudC1waW5rLTUwMDogaHNsKDMyNi4zMiwgNzIuMTUlLCA4NC41MSUpO1xuICAgIC0tYWNjZW50LXBpbmstNjAwOiBoc2woMzI2LjMyLCA3Mi4xNSUsIDg0LjUxJSk7XG4gICAgLS10ZXh0LWJhc2UtNDAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjQ1KTtcbiAgICAtLXRleHQtYmFzZS01MDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNyk7XG4gICAgLS10ZXh0LWJhc2UtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIC0tdGV4dC1iYXNlLWFjdGlvbjogdmFyKC0tcHJpbWFyeS01MDApO1xuICAgIC0tdGV4dC1iYXNlLWluZm86IHZhcigtLWluZm8tNTAwKTtcbiAgICAtLXRleHQtYmFzZS1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTUwMCk7XG4gICAgLS10ZXh0LWJhc2Utd2FybmluZzogdmFyKC0td2FybmluZy01MDApO1xuICAgIC0tdGV4dC1iYXNlLWRhbmdlcjogdmFyKC0tZGFuZ2VyLTUwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTQwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC40NSk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcbiAgICAtLXRleHQtY29udHJhc3QtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xuICAgIC0tdGV4dC1jb250cmFzdC1hY3Rpb246IHZhcigtLXByaW1hcnktNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3QtaW5mbzogdmFyKC0taW5mby02MDApO1xuICAgIC0tdGV4dC1jb250cmFzdC1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTYwMCk7XG4gICAgLS10ZXh0LWNvbnRyYXN0LXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNjAwKTtcbiAgICAtLXRleHQtY29udHJhc3QtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNjAwKTtcbiAgICAtLWFsdC1iYXNlLTEwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMDgpO1xuICAgIC0tYWx0LWJhc2UtMjAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4xMik7XG4gICAgLS1hbHQtYmFzZS0zMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjE2KTtcbiAgICAtLWFsdC1iYXNlLTQwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMjQpO1xuICAgIC0tYWx0LWJhc2UtNTAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4zMik7XG4gICAgLS1hbHQtYmFzZS02MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjQ0KTtcbiAgICAtLWFsdC1jb250cmFzdC0xMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjA4KTtcbiAgICAtLWFsdC1jb250cmFzdC0yMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjEyKTtcbiAgICAtLWFsdC1jb250cmFzdC0zMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjE2KTtcbiAgICAtLWFsdC1jb250cmFzdC00MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjI0KTtcbiAgICAtLWFsdC1jb250cmFzdC01MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjMyKTtcbiAgICAtLWFsdC1jb250cmFzdC02MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjQ0KTtcbiAgICAtLXV0aWxpdHktd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XG4gICAgLS11dGlsaXR5LWJsYWNrOiBoc2woMCwgMCUsIDMuOTIlKTtcbiAgICAtLXV0aWxpdHktdHJhbnNwYXJlbnQ6IGhzbGEoMCwgMCUsIDAlLCAwKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtMTAwOiBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtMjAwOiBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtMzAwOiBoc2xhKDAsIDAlLCAwJSwgMC4zKTtcbiAgICAtLXV0aWxpdHktc2hhZGUtNDAwOiBoc2xhKDAsIDAlLCAwJSwgMC40KTtcbiAgICAtLXV0aWxpdHktc2hhZGUtNTAwOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcbiAgICAtLXV0aWxpdHktc2hhZGUtNjAwOiBoc2xhKDAsIDAlLCAwJSwgMC42KTtcbiAgICAtLXV0aWxpdHktdGludC0xMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjA4KTtcbiAgICAtLXV0aWxpdHktdGludC0yMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjEyKTtcbiAgICAtLXV0aWxpdHktdGludC0zMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjE2KTtcbiAgICAtLXV0aWxpdHktdGludC00MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjI0KTtcbiAgICAtLXV0aWxpdHktdGludC01MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjMyKTtcbiAgICAtLXV0aWxpdHktdGludC02MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjQ0KTtcbiAgICAtLXByaW1hcnktMTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0xMDApO1xuICAgIC0tcHJpbWFyeS0yMDA6IHZhcigtLWFjY2VudC1ibHVlLTIwMCk7XG4gICAgLS1wcmltYXJ5LTMwMDogdmFyKC0tYWNjZW50LWJsdWUtMzAwKTtcbiAgICAtLXByaW1hcnktNDAwOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xuICAgIC0tcHJpbWFyeS01MDA6IHZhcigtLWFjY2VudC1ibHVlLTUwMCk7XG4gICAgLS1wcmltYXJ5LTYwMDogdmFyKC0tYWNjZW50LWJsdWUtNjAwKTtcbiAgICAtLWluZm8tMTAwOiB2YXIoLS1hY2NlbnQtdGVhbC0xMDApO1xuICAgIC0taW5mby0yMDA6IHZhcigtLWFjY2VudC10ZWFsLTIwMCk7XG4gICAgLS1pbmZvLTMwMDogdmFyKC0tYWNjZW50LXRlYWwtMzAwKTtcbiAgICAtLWluZm8tNDAwOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xuICAgIC0taW5mby01MDA6IHZhcigtLWFjY2VudC10ZWFsLTUwMCk7XG4gICAgLS1pbmZvLTYwMDogdmFyKC0tYWNjZW50LXRlYWwtNjAwKTtcbiAgICAtLXN1Y2Nlc3MtMTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMTAwKTtcbiAgICAtLXN1Y2Nlc3MtMjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMjAwKTtcbiAgICAtLXN1Y2Nlc3MtMzAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMzAwKTtcbiAgICAtLXN1Y2Nlc3MtNDAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcbiAgICAtLXN1Y2Nlc3MtNTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNTAwKTtcbiAgICAtLXN1Y2Nlc3MtNjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNjAwKTtcbiAgICAtLXdhcm5pbmctMTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMTAwKTtcbiAgICAtLXdhcm5pbmctMjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMjAwKTtcbiAgICAtLXdhcm5pbmctMzAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMzAwKTtcbiAgICAtLXdhcm5pbmctNDAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNDAwKTtcbiAgICAtLXdhcm5pbmctNTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNTAwKTtcbiAgICAtLXdhcm5pbmctNjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNjAwKTtcbiAgICAtLWRhbmdlci0xMDA6IHZhcigtLWFjY2VudC1yZWQtMTAwKTtcbiAgICAtLWRhbmdlci0yMDA6IHZhcigtLWFjY2VudC1yZWQtMjAwKTtcbiAgICAtLWRhbmdlci0zMDA6IHZhcigtLWFjY2VudC1yZWQtMzAwKTtcbiAgICAtLWRhbmdlci00MDA6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcbiAgICAtLWRhbmdlci01MDA6IHZhcigtLWFjY2VudC1yZWQtNTAwKTtcbiAgICAtLWRhbmdlci02MDA6IHZhcigtLWFjY2VudC1yZWQtNjAwKTtcbiAgICAtLWZpbGwtYmFzZS0xMDA6IGhzbCgxODAsIDEuNDElLCAxMy45MiUpO1xuICAgIC0tZmlsbC1iYXNlLTIwMDogaHNsKDE4MCwgMS42NCUsIDExLjk2JSk7XG4gICAgLS1maWxsLWJhc2UtMzAwOiBoc2woMTgwLCAxLjk2JSwgMTAlKTtcbiAgICAtLWZpbGwtYmFzZS00MDA6IGhzbCgxODAsIDIuNDQlLCA4LjA0JSk7XG4gICAgLS1maWxsLWJhc2UtNTAwOiBoc2woMCwgMCUsIDUuODglKTtcbiAgICAtLWZpbGwtYmFzZS02MDA6IGhzbCgwLCAwJSwgMy45MiUpO1xuICAgIC0tZmlsbC1jb250cmFzdC0xMDA6IGhzbCgxODAsIDAuODElLCAyNC4xMiUpO1xuICAgIC0tZmlsbC1jb250cmFzdC0yMDA6IGhzbCgyNDAsIDAuODglLCAyMi4xNiUpO1xuICAgIC0tZmlsbC1jb250cmFzdC0zMDA6IGhzbCgwLCAwJSwgMjAlKTtcbiAgICAtLWZpbGwtY29udHJhc3QtNDAwOiBoc2woMCwgMCUsIDE4LjA0JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTUwMDogaHNsKDE4MCwgMS4yMyUsIDE1Ljg4JSk7XG4gICAgLS1maWxsLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwgMS40MSUsIDEzLjkyJSk7XG4gICAgLS1zdHJva2UtYmFzZS0xMDA6IGhzbCgyNDAsIDAuODglLCAyMi4xNiUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtMjAwOiBoc2woMTgwLCAwLjc5JSwgMjQuOSUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtMzAwOiBoc2woMTgwLCAwLjY4JSwgMjguODIlKTtcbiAgICAtLXN0cm9rZS1iYXNlLTQwMDogaHNsKDE4MCwgMC41OCUsIDMzLjkyJSk7XG4gICAgLS1zdHJva2UtYmFzZS01MDA6IGhzbCgyMTAsIDAuOTglLCA0MCUpO1xuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMjEwLCAwLjgzJSwgNDcuMDYlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0xMDA6IGhzbCgxODAsIDAuNyUsIDI4LjA0JSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtMjAwOiBoc2woMTgwLCAwLjY1JSwgMzAlKTtcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsIDAuNTklLCAzMy4xNCUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTQwMDogaHNsKDE4MCwgMC41NSUsIDM1Ljg4JSk7XG4gICAgLS1zdHJva2UtY29udHJhc3QtNTAwOiBoc2woMTgwLCAwLjUlLCAzOS4wMiUpO1xuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwgMC40NCUsIDQ0LjklKTtcbn1cblxuW2RhdGEtcmFkaWk9Y29tcGFjdF0sXG4ucmFkaWktY29tcGFjdCB7XG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XG4gICAgLS1yYWRpaS1zbTogM3B4O1xuICAgIC0tcmFkaWktYmFzZTogNHB4O1xuICAgIC0tcmFkaWktbWQ6IDZweDtcbiAgICAtLXJhZGlpLWxnOiA5cHg7XG4gICAgLS1yYWRpaS14bDogMTNweDtcbiAgICAtLXJhZGlpLXhsMjogMjBweDtcbiAgICAtLXJhZGlpLXJvdW5kOiA5OTlweDtcbn1cblxuW2RhdGEtcmFkaWk9YmFzZV0sXG4ucmFkaWktYmFzZSB7XG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XG4gICAgLS1yYWRpaS1zbTogNC41cHg7XG4gICAgLS1yYWRpaS1iYXNlOiA2cHg7XG4gICAgLS1yYWRpaS1tZDogOXB4O1xuICAgIC0tcmFkaWktbGc6IDEycHg7XG4gICAgLS1yYWRpaS14bDogMTZweDtcbiAgICAtLXJhZGlpLXhsMjogMjJweDtcbiAgICAtLXJhZGlpLXJvdW5kOiA5OTlweDtcbn1cblxuW2RhdGEtcmFkaWk9bGFyZ2VdLFxuLnJhZGlpLWxhcmdlIHtcbiAgICAtLXJhZGlpLW5vbmU6IDBweDtcbiAgICAtLXJhZGlpLXNtOiA2cHg7XG4gICAgLS1yYWRpaS1iYXNlOiA4cHg7XG4gICAgLS1yYWRpaS1tZDogMTJweDtcbiAgICAtLXJhZGlpLWxnOiAxNnB4O1xuICAgIC0tcmFkaWkteGw6IDI0cHg7XG4gICAgLS1yYWRpaS14bDI6IDQwcHg7XG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XG59XG5cbltkYXRhLXNwYWNpbmc9Y29tcGFjdF0sXG4uc3BhY2luZy1jb21wYWN0IHtcbiAgICAtLXNwYWNpbmcteHM0OiAycHg7XG4gICAgLS1zcGFjaW5nLXhzMzogNHB4O1xuICAgIC0tc3BhY2luZy14czI6IDZweDtcbiAgICAtLXNwYWNpbmcteHM6IDhweDtcbiAgICAtLXNwYWNpbmctc206IDEycHg7XG4gICAgLS1zcGFjaW5nLWJhc2U6IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1kOiAyMHB4O1xuICAgIC0tc3BhY2luZy1sZzogMjRweDtcbiAgICAtLXNwYWNpbmcteGw6IDI4cHg7XG4gICAgLS1zcGFjaW5nLXhsMjogMzJweDtcbiAgICAtLXNwYWNpbmcteGwzOiA0MHB4O1xuICAgIC0tc3BhY2luZy14bDQ6IDQ4cHg7XG4gICAgLS1zcGFjaW5nLXhsNTogNjBweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAxcHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMzogMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czI6IDRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDZweDtcbiAgICAtLXNwYWNpbmctbWlub3Itc206IDhweDtcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3ItbWQ6IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAyMHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDogMjRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwyOiAyOHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDM6IDM2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNDRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGw1OiA1NnB4O1xufVxuXG5bZGF0YS1zcGFjaW5nPWJhc2VdLFxuLnNwYWNpbmctYmFzZSB7XG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xuICAgIC0tc3BhY2luZy14czM6IDZweDtcbiAgICAtLXNwYWNpbmcteHMyOiA4cHg7XG4gICAgLS1zcGFjaW5nLXhzOiAxMnB4O1xuICAgIC0tc3BhY2luZy1zbTogMTZweDtcbiAgICAtLXNwYWNpbmctYmFzZTogMjBweDtcbiAgICAtLXNwYWNpbmctbWQ6IDI0cHg7XG4gICAgLS1zcGFjaW5nLWxnOiAyOHB4O1xuICAgIC0tc3BhY2luZy14bDogMzJweDtcbiAgICAtLXNwYWNpbmcteGwyOiA0MHB4O1xuICAgIC0tc3BhY2luZy14bDM6IDQ4cHg7XG4gICAgLS1zcGFjaW5nLXhsNDogNjBweDtcbiAgICAtLXNwYWNpbmcteGw1OiA3MnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czQ6IDJweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMzOiA0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czogOHB4O1xuICAgIC0tc3BhY2luZy1taW5vci1zbTogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTZweDtcbiAgICAtLXNwYWNpbmctbWlub3ItbWQ6IDIwcHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAyNHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDogMjhweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwyOiAzNnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDM6IDQ0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNTZweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGw1OiA2OHB4O1xufVxuXG5bZGF0YS1zcGFjaW5nPWxhcmdlXSxcbi5zcGFjaW5nLWxhcmdlIHtcbiAgICAtLXNwYWNpbmcteHM0OiA0cHg7XG4gICAgLS1zcGFjaW5nLXhzMzogOHB4O1xuICAgIC0tc3BhY2luZy14czI6IDEycHg7XG4gICAgLS1zcGFjaW5nLXhzOiAxNnB4O1xuICAgIC0tc3BhY2luZy1zbTogMjBweDtcbiAgICAtLXNwYWNpbmctYmFzZTogMjRweDtcbiAgICAtLXNwYWNpbmctbWQ6IDI4cHg7XG4gICAgLS1zcGFjaW5nLWxnOiAzNnB4O1xuICAgIC0tc3BhY2luZy14bDogNDRweDtcbiAgICAtLXNwYWNpbmcteGwyOiA1MnB4O1xuICAgIC0tc3BhY2luZy14bDM6IDY0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzNDogMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMyOiA4cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzOiAxMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci1zbTogMTZweDtcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMjBweDtcbiAgICAtLXNwYWNpbmctbWlub3ItbWQ6IDI0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAzMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDogNDBweDtcbiAgICAtLXNwYWNpbmctbWlub3IteGwyOiA0OHB4O1xuICAgIC0tc3BhY2luZy1taW5vci14bDM6IDYwcHg7XG59XG5cbltkYXRhLXNwYWNpbmc9dG91Y2hdLFxuLnNwYWNpbmctdG91Y2gge1xuICAgIC0tc3BhY2luZy14czQ6IDRweDtcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XG4gICAgLS1zcGFjaW5nLXhzMjogOHB4O1xuICAgIC0tc3BhY2luZy14czogMTJweDtcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XG4gICAgLS1zcGFjaW5nLWJhc2U6IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1kOiAxNnB4O1xuICAgIC0tc3BhY2luZy1sZzogMjBweDtcbiAgICAtLXNwYWNpbmcteGw6IDI0cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzNDogMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcbiAgICAtLXNwYWNpbmctbWlub3IteHMyOiA2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzOiA4cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiAxMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci1iYXNlOiAxMnB4O1xuICAgIC0tc3BhY2luZy1taW5vci1tZDogMTJweDtcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDE2cHg7XG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsOiAyMHB4O1xufVxuXG5bZGF0YS10eXBvZ3JhcGh5PWNvbXBhY3RdLFxuLnR5cG9ncmFwaHktY29tcGFjdCB7XG4gICAgLS1mb250LXNpemUteHMyOiAxMHB4O1xuICAgIC0tZm9udC1zaXplLXhzOiAxMXB4O1xuICAgIC0tZm9udC1zaXplLXNtOiAxMnB4O1xuICAgIC0tZm9udC1zaXplLWJhc2U6IDEzcHg7XG4gICAgLS1mb250LXNpemUtbWQ6IDE2cHg7XG4gICAgLS1mb250LXNpemUtbGc6IDE5cHg7XG4gICAgLS1mb250LXNpemUteGw6IDIycHg7XG4gICAgLS1mb250LXNpemUteGwyOiAyN3B4O1xuICAgIC0tZm9udC1zaXplLXhsMzogMzJweDtcbiAgICAtLWZvbnQtc2l6ZS14bDQ6IDM5cHg7XG4gICAgLS1mb250LXNpemUteGw1OiA0N3B4O1xuICAgIC0tZm9udC1zaXplLXhsNjogNTZweDtcbiAgICAtLWZvbnQtc2l6ZS14bDc6IDY3cHg7XG4gICAgLS1saW5lLWhlaWdodC14czI6IDEwcHg7XG4gICAgLS1saW5lLWhlaWdodC14czogMTJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXNtOiAxNHB4O1xuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMTZweDtcbiAgICAtLWxpbmUtaGVpZ2h0LW1kOiAyMHB4O1xuICAgIC0tbGluZS1oZWlnaHQtbGc6IDI0cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDogMjhweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMjogMzJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMzogNDBweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNDogNDRweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNTogNTJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNjogNjBweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNzogNzhweDtcbiAgICAtLWxldHRlci1zcGFjaW5nLTA6IDAlcHg7XG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1sYWJlbDogOHB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctcGFyYWdyYXBoOiAxMnB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctZGlzcGxheTogMTZweDtcbn1cblxuW2RhdGEtdHlwb2dyYXBoeT1iYXNlXSxcbi50eXBvZ3JhcGh5LWJhc2Uge1xuICAgIC0tZm9udC1zaXplLXhzMjogMTBweDtcbiAgICAtLWZvbnQtc2l6ZS14czogMTFweDtcbiAgICAtLWZvbnQtc2l6ZS1zbTogMTNweDtcbiAgICAtLWZvbnQtc2l6ZS1iYXNlOiAxNXB4O1xuICAgIC0tZm9udC1zaXplLW1kOiAxOHB4O1xuICAgIC0tZm9udC1zaXplLWxnOiAyMnB4O1xuICAgIC0tZm9udC1zaXplLXhsOiAyNnB4O1xuICAgIC0tZm9udC1zaXplLXhsMjogMzFweDtcbiAgICAtLWZvbnQtc2l6ZS14bDM6IDM3cHg7XG4gICAgLS1mb250LXNpemUteGw0OiA0NXB4O1xuICAgIC0tZm9udC1zaXplLXhsNTogNTRweDtcbiAgICAtLWZvbnQtc2l6ZS14bDY6IDY0cHg7XG4gICAgLS1mb250LXNpemUteGw3OiA3N3B4O1xuICAgIC0tbGluZS1oZWlnaHQteHMyOiAxMnB4O1xuICAgIC0tbGluZS1oZWlnaHQteHM6IDE0cHg7XG4gICAgLS1saW5lLWhlaWdodC1zbTogMTZweDtcbiAgICAtLWxpbmUtaGVpZ2h0LWJhc2U6IDIwcHg7XG4gICAgLS1saW5lLWhlaWdodC1tZDogMjRweDtcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAyOHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw6IDMycHg7XG4gICAgLS1saW5lLWhlaWdodC14bDI6IDM2cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDM6IDQ0cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDQ6IDQ4cHg7XG4gICAgLS1saW5lLWhlaWdodC14bDU6IDYwcHg7XG4gICAgLS1saW5lLWhlaWdodC14bDY6IDcycHg7XG4gICAgLS1saW5lLWhlaWdodC14bDc6IDg2cHg7XG4gICAgLS1sZXR0ZXItc3BhY2luZy0wOiAwJXB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctbGFiZWw6IDEycHg7XG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1wYXJhZ3JhcGg6IDE2cHg7XG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1kaXNwbGF5OiAyMHB4O1xufVxuXG5bZGF0YS10eXBvZ3JhcGh5PWxhcmdlXSxcbi50eXBvZ3JhcGh5LWxhcmdlIHtcbiAgICAtLWZvbnQtc2l6ZS14czI6IDExcHg7XG4gICAgLS1mb250LXNpemUteHM6IDEycHg7XG4gICAgLS1mb250LXNpemUtc206IDE0cHg7XG4gICAgLS1mb250LXNpemUtYmFzZTogMTdweDtcbiAgICAtLWZvbnQtc2l6ZS1tZDogMjBweDtcbiAgICAtLWZvbnQtc2l6ZS1sZzogMjRweDtcbiAgICAtLWZvbnQtc2l6ZS14bDogMjlweDtcbiAgICAtLWZvbnQtc2l6ZS14bDI6IDM1cHg7XG4gICAgLS1mb250LXNpemUteGwzOiA0MnB4O1xuICAgIC0tZm9udC1zaXplLXhsNDogNTFweDtcbiAgICAtLWZvbnQtc2l6ZS14bDU6IDYxcHg7XG4gICAgLS1mb250LXNpemUteGw2OiA3M3B4O1xuICAgIC0tZm9udC1zaXplLXhsNzogODhweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhzMjogMTJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhzOiAxNnB4O1xuICAgIC0tbGluZS1oZWlnaHQtc206IDIwcHg7XG4gICAgLS1saW5lLWhlaWdodC1iYXNlOiAyNHB4O1xuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDI4cHg7XG4gICAgLS1saW5lLWhlaWdodC1sZzogMzJweDtcbiAgICAtLWxpbmUtaGVpZ2h0LXhsOiAzNHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGwyOiA0MHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGwzOiA1MnB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw0OiA1NnB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw1OiA2OHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw2OiA4MHB4O1xuICAgIC0tbGluZS1oZWlnaHQteGw3OiA5NnB4O1xuICAgIC0tbGV0dGVyLXNwYWNpbmctMDogMCVweDtcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWxhYmVsOiAxMnB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctcGFyYWdyYXBoOiAxNnB4O1xuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctZGlzcGxheTogMjBweDtcbn1cblxuW2RhdGEtaWNvblNpemU9YmFzZV0sXG4uaWNvblNpemUtYmFzZSB7XG4gICAgLS1pY29uLXNpemUtc206IDEycHg7XG4gICAgLS1pY29uLXNpemUtYmFzZTogMTZweDtcbiAgICAtLWljb24tc2l6ZS1tZDogMjRweDtcbiAgICAtLWljb24tc2l6ZS1sZzogMzJweDtcbiAgICAtLWljb24tc2l6ZS14bDogNDhweDtcbiAgICAtLWljb24tc2l6ZS14bDI6IDY0cHg7XG4gICAgLS1pY29uLXNpemUteGwzOiA5NnB4O1xuICAgIC0taWNvbi1zaXplLXhsNDogMTI4cHg7XG4gICAgLS1pY29uLXNpemUteGw1OiAyNTZweDtcbn1cblxuW2RhdGEtaWNvblNpemU9dG91Y2hdLFxuLmljb25TaXplLXRvdWNoIHtcbiAgICAtLWljb24tc2l6ZS1zbTogMTZweDtcbiAgICAtLWljb24tc2l6ZS1iYXNlOiAyNHB4O1xuICAgIC0taWNvbi1zaXplLW1kOiAzMnB4O1xuICAgIC0taWNvbi1zaXplLWxnOiA0OHB4O1xuICAgIC0taWNvbi1zaXplLXhsOiA2NHB4O1xuICAgIC0taWNvbi1zaXplLXhsMjogOTZweDtcbiAgICAtLWljb24tc2l6ZS14bDM6IDEyOHB4O1xuICAgIC0taWNvbi1zaXplLXhsNDogMjU2cHg7XG4gICAgLS1pY29uLXNpemUteGw1OiA1MTJweDtcbn1cblxuOnJvb3Qge1xuICAgIC0tb3BhY2l0eS0wOiAwO1xuICAgIC0tb3BhY2l0eS01OiAwLjU7XG4gICAgLS1vcGFjaXR5LTEwOiAwLjE7XG4gICAgLS1vcGFjaXR5LTE1OiAwLjE1O1xuICAgIC0tb3BhY2l0eS0yMDogMC4yO1xuICAgIC0tb3BhY2l0eS0yNTogMC4yNTtcbiAgICAtLW9wYWNpdHktMzA6IDAuMztcbiAgICAtLW9wYWNpdHktMzU6IDAuMzU7XG4gICAgLS1vcGFjaXR5LTQwOiAwLjQ7XG4gICAgLS1vcGFjaXR5LTQ1OiAwLjQ1O1xuICAgIC0tb3BhY2l0eS01MDogMC41O1xuICAgIC0tb3BhY2l0eS01NTogMC41NTtcbiAgICAtLW9wYWNpdHktNjA6IDAuNjtcbiAgICAtLW9wYWNpdHktNjU6IDAuNjU7XG4gICAgLS1vcGFjaXR5LTcwOiAwLjc7XG4gICAgLS1vcGFjaXR5LTc1OiAwLjc1O1xuICAgIC0tb3BhY2l0eS04MDogMC44O1xuICAgIC0tb3BhY2l0eS04NTogMC44NTtcbiAgICAtLW9wYWNpdHktOTA6IDAuOTtcbiAgICAtLW9wYWNpdHktOTU6IDAuOTU7XG4gICAgLS1vcGFjaXR5LTEwMDogMTtcbiAgICAtLXNoYWRvdy0wOiAwcHggMC43NXB4IDAuNXB4IDBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXNoYWRvdy0xOiAwcHggMXB4IDJweCAtMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMnB4IDRweCAtMXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tc2hhZG93LTI6IDBweCAycHggNHB4IC0ycHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCA0cHggNnB4IC0ycHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gICAgLS1zaGFkb3ctMzogMHB4IDRweCA2cHggLTRweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDEwcHggMTVweCAtM3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tc2hhZG93LTQ6IDBweCAxMnB4IDEwcHggLTZweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tc2hhZG93LTU6IDBweCAyM3B4IDI4cHggLTdweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDE2cHggMTBweCAtN3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjRweCA0OHB4IC0xMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9zb3VyY2UtdmFyaWFibGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtEQUFrRDtJQUNsRCxpREFBaUQ7SUFDakQsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsOENBQThDO0lBQzlDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsNkNBQTZDO0lBQzdDLHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsZ0RBQWdEO0lBQ2hELDRDQUE0QztJQUM1QyxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGtEQUFrRDtJQUNsRCxpREFBaUQ7SUFDakQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsNENBQTRDO0lBQzVDLHFEQUFxRDtJQUNyRCxvREFBb0Q7SUFDcEQsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQywrQ0FBK0M7SUFDL0MsZ0RBQWdEO0lBQ2hELHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUN0QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3QywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUMzQyxpREFBaUQ7SUFDakQsaURBQWlEO0lBQ2pELGlEQUFpRDtJQUNqRCxpREFBaUQ7SUFDakQsaURBQWlEO0lBQ2pELGlEQUFpRDtJQUNqRCwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLG9DQUFvQztJQUNwQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4Qyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsNkNBQTZDO0lBQzdDLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsMkNBQTJDO0lBQzNDLDJDQUEyQztJQUMzQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFDckQsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw2Q0FBNkM7SUFDN0MsNkNBQTZDO0lBQzdDLG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFDckQseUNBQXlDO0lBQ3pDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsK0NBQStDO0lBQy9DLDhDQUE4QztJQUM5QywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFDckQsOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHNEQUFzRDtJQUN0RCx1REFBdUQ7SUFDdkQsK0NBQStDO0lBQy9DLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELHFEQUFxRDtJQUNyRCxzREFBc0Q7SUFDdEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELG1EQUFtRDtJQUNuRCxvREFBb0Q7SUFDcEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxnREFBZ0Q7SUFDaEQsZ0RBQWdEO0lBQ2hELGlEQUFpRDtJQUNqRCxrREFBa0Q7SUFDbEQsOENBQThDO0lBQzlDLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLHdDQUF3QztJQUN4Qyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxxQ0FBcUM7SUFDckMsNENBQTRDO0lBQzVDLDJDQUEyQztJQUMzQyxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLHFDQUFxQztJQUNyQywyQ0FBMkM7SUFDM0MsMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsOENBQThDO0lBQzlDLDhDQUE4QztJQUM5QyxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxrREFBa0Q7SUFDbEQsa0RBQWtEO0lBQ2xELGtEQUFrRDtJQUNsRCxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyw0Q0FBNEM7SUFDNUMsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QywwQ0FBMEM7SUFDMUMseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyw2Q0FBNkM7SUFDN0MsMkNBQTJDO0lBQzNDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsNkNBQTZDO0lBQzdDLDZDQUE2QztBQUNqRDs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsaUNBQWlDO0FBQ3JDOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFJaEIsd0RBQXdEO0lBQ3hELDhGQUE4RjtJQUM5Riw4RkFBOEY7SUFDOUYsZ0dBQWdHO0lBQ2hHLGtHQUFrRztJQUNsRywrSUFBK0k7QUFSbkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWFjY2VudC1yZWQtMTAwOiBoc2xhKDQuMSwgODQuMTclLCA3Mi43NSUsIDAuMTI1KTtcXG4gICAgLS1hY2NlbnQtcmVkLTIwMDogaHNsYSg0LjEsIDg0LjE3JSwgNzIuNzUlLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtcmVkLTMwMDogaHNsKDMuOTMsIDgzLjE3JSwgNjAuMzklKTtcXG4gICAgLS1hY2NlbnQtcmVkLTQwMDogaHNsKDQuMDksIDkwLjE2JSwgNDcuODQlKTtcXG4gICAgLS1hY2NlbnQtcmVkLTUwMDogaHNsKDQuMTgsIDg5LjMzJSwgNDQuMTIlKTtcXG4gICAgLS1hY2NlbnQtcmVkLTYwMDogaHNsKDMuNjksIDg2LjY3JSwgODUuMjklKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItMTAwOiBoc2xhKDI0LjU5LCA3MC4xMSUsIDY1Ljg4JSwgMC4xMjUpO1xcbiAgICAtLWFjY2VudC1hbWJlci0yMDA6IGhzbGEoMjQuNTksIDcwLjExJSwgNjUuODglLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItMzAwOiBoc2woMjQuNzEsIDYzLjQ5JSwgNTIuNzUlKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItNDAwOiBoc2woMjQuOTIsIDkwLjE1JSwgMzkuOCUpO1xcbiAgICAtLWFjY2VudC1hbWJlci01MDA6IGhzbCgyNS4zLCA4OS4yNSUsIDM2LjQ3JSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTYwMDogaHNsKDI0LjEzLCA4NS4xOSUsIDc4LjgyJSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTEwMDogaHNsYSgzMi4zNCwgNjUuOTglLCA2MS45NiUsIDAuMTI1KTtcXG4gICAgLS1hY2NlbnQtYnJvd24tMjAwOiBoc2xhKDMyLjM0LCA2NS45OCUsIDYxLjk2JSwgMC4zMyk7XFxuICAgIC0tYWNjZW50LWJyb3duLTMwMDogaHNsKDMyLjg4LCA1OC44NyUsIDQ4LjYzJSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTQwMDogaHNsKDMzLjI5LCA5MC4xMSUsIDM1LjY5JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTUwMDogaHNsKDMzLjQyLCA4OS4yMiUsIDMyLjc1JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTYwMDogaHNsKDMxLjY0LCA4NS45NCUsIDc0LjklKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tMTAwOiBoc2xhKDEyNi4zNSwgODcuMSUsIDQyLjU1JSwgMC4xMjUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi0yMDA6IGhzbGEoMTI2LjM1LCA4Ny4xJSwgNDIuNTUlLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tMzAwOiBoc2woMTI3LjU1LCA4Ny44NSUsIDM1LjQ5JSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTQwMDogaHNsKDEzMC4xNSwgOTAuMjglLCAyOC4yNCUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi01MDA6IGhzbCgxMzEuNiwgODkuNDclLCAyNi4wOCUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi02MDA6IGhzbCgxMjQuOTUsIDg1LjgzJSwgNDkuOCUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTEwMDogaHNsYSgxNzguMzQsIDg2LjYlLCA0MC45OCUsIDAuMTI1KTtcXG4gICAgLS1hY2NlbnQtdGVhbC0yMDA6IGhzbGEoMTc4LjM0LCA4Ni42JSwgNDAuOTglLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtdGVhbC0zMDA6IGhzbCgxODAuNzgsIDg4LjUxJSwgMzQuMTIlKTtcXG4gICAgLS1hY2NlbnQtdGVhbC00MDA6IGhzbCgxODQuMDksIDkwLjQxJSwgMjguNjMlKTtcXG4gICAgLS1hY2NlbnQtdGVhbC01MDA6IGhzbCgxODYuMjksIDg4LjU3JSwgMjcuNDUlKTtcXG4gICAgLS1hY2NlbnQtdGVhbC02MDA6IGhzbCgxNzYuNTcsIDg2LjA3JSwgNDcuODQlKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0xMDA6IGhzbGEoMjA2LjAzLCA4MC45NSUsIDY3LjA2JSwgMC4xMjUpO1xcbiAgICAtLWFjY2VudC1ibHVlLTIwMDogaHNsYSgyMDYuMDMsIDgwLjk1JSwgNjcuMDYlLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0zMDA6IGhzbCgyMDguMjYsIDc3LjQ4JSwgNTYuNDclKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS00MDA6IGhzbCgyMTAsIDg5Ljc0JSwgNDUuODglKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS01MDA6IGhzbCgyMTIuNTQsIDg4LjU1JSwgNDQuNTElKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS02MDA6IGhzbCgyMDEuNDMsIDg1Ljk2JSwgNzcuNjUlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzUuOTEsIDg4JSwgODAuMzklLCAwLjEyNSk7XFxuICAgIC0tYWNjZW50LWluZGlnby0yMDA6IGhzbGEoMjM1LjkxLCA4OCUsIDgwLjM5JSwgMC4zMyk7XFxuICAgIC0tYWNjZW50LWluZGlnby0zMDA6IGhzbCgyMzguNDksIDg5LjQ3JSwgNzMuOTIlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTQwMDogaHNsKDI0MCwgOTAuMyUsIDY3LjY1JSk7XFxuICAgIC0tYWNjZW50LWluZGlnby01MDA6IGhzbCgyNDQuMDUsIDg4LjExJSwgNjMuNzMlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTYwMDogaHNsKDIzMC42OSwgODUuMjklLCA4Ni42NyUpO1xcbiAgICAtLWFjY2VudC12aW9sZXQtMTAwOiBoc2xhKDI1NiwgODguMjQlLCA4MCUsIDAuMTI1KTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTIwMDogaHNsYSgyNTYsIDg4LjI0JSwgODAlLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTMwMDogaHNsKDI1OC43NSwgOTAuMTQlLCA3Mi4xNiUpO1xcbiAgICAtLWFjY2VudC12aW9sZXQtNDAwOiBoc2woMjYwLjEyLCA5MC4xMSUsIDY0LjMxJSk7XFxuICAgIC0tYWNjZW50LXZpb2xldC01MDA6IGhzbCgyNjQuMTMsIDg0LjgzJSwgNTguNjMlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTYwMDogaHNsKDI1MCwgODcuMSUsIDg3Ljg0JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS0xMDA6IGhzbGEoMjc2LCA4OC4yNCUsIDc2LjY3JSwgMC4xMjUpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtMjAwOiBoc2xhKDI3NiwgODguMjQlLCA3Ni42NyUsIDAuMzMpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtMzAwOiBoc2woMjc4LjU0LCA4OS4zNSUsIDY2Ljg2JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS00MDA6IGhzbCgyODAsIDkwJSwgNTYuODYlKTtcXG4gICAgLS1hY2NlbnQtcHVycGxlLTUwMDogaHNsKDI4My4yMywgNzMuMjMlLCA1MC4yJSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS02MDA6IGhzbCgyNjguOTcsIDg1LjI5JSwgODYuNjclKTtcXG4gICAgLS1hY2NlbnQtcGluay0xMDA6IGhzbGEoMzM0Ljg3LCA4NC4xNyUsIDcyLjc1JSwgMC4xMjUpO1xcbiAgICAtLWFjY2VudC1waW5rLTIwMDogaHNsYSgzMzQuODcsIDg0LjE3JSwgNzIuNzUlLCAwLjMzKTtcXG4gICAgLS1hY2NlbnQtcGluay0zMDA6IGhzbCgzMzguNDQsIDgyLjI3JSwgNjAuMiUpO1xcbiAgICAtLWFjY2VudC1waW5rLTQwMDogaHNsKDM0MCwgOTAuMTIlLCA0Ny42NSUpO1xcbiAgICAtLWFjY2VudC1waW5rLTUwMDogaHNsKDM0My44OCwgODguNTUlLCA0NC41MSUpO1xcbiAgICAtLWFjY2VudC1waW5rLTYwMDogaHNsKDMyNi43NywgODYuNjclLCA4NS4yOSUpO1xcbiAgICAtLXRleHQtYmFzZS00MDA6IGhzbGEoMCwgMCUsIDUuODglLCAwLjQ1KTtcXG4gICAgLS10ZXh0LWJhc2UtNTAwOiBoc2xhKDAsIDAlLCA1Ljg4JSwgMC42NSk7XFxuICAgIC0tdGV4dC1iYXNlLTYwMDogaHNsKDAsIDAlLCA1Ljg4JSk7XFxuICAgIC0tdGV4dC1iYXNlLWFjdGlvbjogdmFyKC0tcHJpbWFyeS01MDApO1xcbiAgICAtLXRleHQtYmFzZS1pbmZvOiB2YXIoLS1pbmZvLTUwMCk7XFxuICAgIC0tdGV4dC1iYXNlLXN1Y2Nlc3M6IHZhcigtLXN1Y2Nlc3MtNTAwKTtcXG4gICAgLS10ZXh0LWJhc2Utd2FybmluZzogdmFyKC0td2FybmluZy01MDApO1xcbiAgICAtLXRleHQtYmFzZS1kYW5nZXI6IHZhcigtLWRhbmdlci01MDApO1xcbiAgICAtLXRleHQtY29udHJhc3QtNDAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjQ1KTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LTYwMDogaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LWFjdGlvbjogdmFyKC0tcHJpbWFyeS02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3QtaW5mbzogdmFyKC0taW5mby02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3Qtc3VjY2VzczogdmFyKC0tc3VjY2Vzcy02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3Qtd2FybmluZzogdmFyKC0td2FybmluZy02MDApO1xcbiAgICAtLXRleHQtY29udHJhc3QtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNjAwKTtcXG4gICAgLS1hbHQtYmFzZS0xMDA6IGhzbGEoMTgwLCAxMDAlLCAxMy45MiUsIDAuMDQpO1xcbiAgICAtLWFsdC1iYXNlLTIwMDogaHNsYSgxODAsIDEwMCUsIDEzLjkyJSwgMC4wOCk7XFxuICAgIC0tYWx0LWJhc2UtMzAwOiBoc2xhKDE4MCwgMTAwJSwgMTMuOTIlLCAwLjE2KTtcXG4gICAgLS1hbHQtYmFzZS00MDA6IGhzbGEoMTgwLCAxMDAlLCAxMy45MiUsIDAuMjQpO1xcbiAgICAtLWFsdC1iYXNlLTUwMDogaHNsYSgxODAsIDEwMCUsIDEzLjkyJSwgMC4zMik7XFxuICAgIC0tYWx0LWJhc2UtNjAwOiBoc2xhKDE4MCwgMTAwJSwgMTMuOTIlLCAwLjQ0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMTAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjA0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMjAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjA4KTtcXG4gICAgLS1hbHQtY29udHJhc3QtMzAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjEyKTtcXG4gICAgLS1hbHQtY29udHJhc3QtNDAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjE2KTtcXG4gICAgLS1hbHQtY29udHJhc3QtNTAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjI0KTtcXG4gICAgLS1hbHQtY29udHJhc3QtNjAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjMyKTtcXG4gICAgLS11dGlsaXR5LXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLXV0aWxpdHktYmxhY2s6IGhzbCgwLCAwJSwgMy45MiUpO1xcbiAgICAtLXV0aWxpdHktdHJhbnNwYXJlbnQ6IGhzbGEoMCwgMCUsIDEwMCUsIDApO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtMTAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMDQpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtMjAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMDgpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtMzAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMTYpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtNDAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMjQpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtNTAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuMzIpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtNjAwOiBoc2xhKDE4MCwgMTAwJSwgOC4wNCUsIDAuNDQpO1xcbiAgICAtLXV0aWxpdHktdGludC0xMDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxuICAgIC0tdXRpbGl0eS10aW50LTIwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC42KTtcXG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjcpO1xcbiAgICAtLXV0aWxpdHktdGludC00MDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuOCk7XFxuICAgIC0tdXRpbGl0eS10aW50LTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC45KTtcXG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLXByaW1hcnktMTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0xMDApO1xcbiAgICAtLXByaW1hcnktMjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0yMDApO1xcbiAgICAtLXByaW1hcnktMzAwOiB2YXIoLS1hY2NlbnQtYmx1ZS0zMDApO1xcbiAgICAtLXByaW1hcnktNDAwOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xcbiAgICAtLXByaW1hcnktNTAwOiB2YXIoLS1hY2NlbnQtYmx1ZS01MDApO1xcbiAgICAtLXByaW1hcnktNjAwOiB2YXIoLS1hY2NlbnQtYmx1ZS02MDApO1xcbiAgICAtLWluZm8tMTAwOiB2YXIoLS1hY2NlbnQtdGVhbC0xMDApO1xcbiAgICAtLWluZm8tMjAwOiB2YXIoLS1hY2NlbnQtdGVhbC0yMDApO1xcbiAgICAtLWluZm8tMzAwOiB2YXIoLS1hY2NlbnQtdGVhbC0zMDApO1xcbiAgICAtLWluZm8tNDAwOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xcbiAgICAtLWluZm8tNTAwOiB2YXIoLS1hY2NlbnQtdGVhbC01MDApO1xcbiAgICAtLWluZm8tNjAwOiB2YXIoLS1hY2NlbnQtdGVhbC02MDApO1xcbiAgICAtLXN1Y2Nlc3MtMTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMTAwKTtcXG4gICAgLS1zdWNjZXNzLTIwMDogdmFyKC0tYWNjZW50LWdyZWVuLTIwMCk7XFxuICAgIC0tc3VjY2Vzcy0zMDA6IHZhcigtLWFjY2VudC1ncmVlbi0zMDApO1xcbiAgICAtLXN1Y2Nlc3MtNDAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcXG4gICAgLS1zdWNjZXNzLTUwMDogdmFyKC0tYWNjZW50LWdyZWVuLTUwMCk7XFxuICAgIC0tc3VjY2Vzcy02MDA6IHZhcigtLWFjY2VudC1ncmVlbi02MDApO1xcbiAgICAtLXdhcm5pbmctMTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMTAwKTtcXG4gICAgLS13YXJuaW5nLTIwMDogdmFyKC0tYWNjZW50LWFtYmVyLTIwMCk7XFxuICAgIC0td2FybmluZy0zMDA6IHZhcigtLWFjY2VudC1hbWJlci0zMDApO1xcbiAgICAtLXdhcm5pbmctNDAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNDAwKTtcXG4gICAgLS13YXJuaW5nLTUwMDogdmFyKC0tYWNjZW50LWFtYmVyLTUwMCk7XFxuICAgIC0td2FybmluZy02MDA6IHZhcigtLWFjY2VudC1hbWJlci02MDApO1xcbiAgICAtLWRhbmdlci0xMDA6IHZhcigtLWFjY2VudC1yZWQtMTAwKTtcXG4gICAgLS1kYW5nZXItMjAwOiB2YXIoLS1hY2NlbnQtcmVkLTIwMCk7XFxuICAgIC0tZGFuZ2VyLTMwMDogdmFyKC0tYWNjZW50LXJlZC0zMDApO1xcbiAgICAtLWRhbmdlci00MDA6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcXG4gICAgLS1kYW5nZXItNTAwOiB2YXIoLS1hY2NlbnQtcmVkLTUwMCk7XFxuICAgIC0tZGFuZ2VyLTYwMDogdmFyKC0tYWNjZW50LXJlZC02MDApO1xcbiAgICAtLWZpbGwtYmFzZS0xMDA6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIC0tZmlsbC1iYXNlLTIwMDogaHNsKDAsIDAlLCA5OC4wNCUpO1xcbiAgICAtLWZpbGwtYmFzZS0zMDA6IGhzbCgwLCAwJSwgOTYuMDglKTtcXG4gICAgLS1maWxsLWJhc2UtNDAwOiBoc2woMCwgMCUsIDk0LjEyJSk7XFxuICAgIC0tZmlsbC1iYXNlLTUwMDogaHNsKDE4MCwgMi40NCUsIDkxLjk2JSk7XFxuICAgIC0tZmlsbC1iYXNlLTYwMDogaHNsKDE4MCwgMS42NCUsIDg4LjA0JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC0xMDA6IGhzbCgxODAsIDAuODElLCAyNC4xMiUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtMjAwOiBoc2woMjQwLCAwLjg4JSwgMjIuMTYlKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTMwMDogaHNsKDAsIDAlLCAyMCUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtNDAwOiBoc2woMCwgMCUsIDE4LjA0JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC01MDA6IGhzbCgxODAsIDEuMjMlLCAxNS44OCUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtNjAwOiBoc2woMTgwLCAxLjQxJSwgMTMuOTIlKTtcXG4gICAgLS1zdHJva2UtYmFzZS0xMDA6IGhzbCgwLCAwJSwgOTIuOTQlKTtcXG4gICAgLS1zdHJva2UtYmFzZS0yMDA6IGhzbCgxODAsIDEuNjQlLCA4OC4wNCUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTMwMDogaHNsKDE4MCwgMS4zJSwgODQuOSUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTQwMDogaHNsKDAsIDAlLCA4MCUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTUwMDogaHNsKDE4MCwgMC42NSUsIDcwJSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtNjAwOiBoc2woMTgwLCAwLjQzJSwgNTMuOTIlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtMTAwOiBoc2woMTgwLCAwLjclLCAyOC4wNCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC0yMDA6IGhzbCgxODAsIDAuNjUlLCAzMCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC0zMDA6IGhzbCgxODAsIDAuNTklLCAzMy4xNCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC00MDA6IGhzbCgxODAsIDAuNTUlLCAzNS44OCUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC01MDA6IGhzbCgxODAsIDAuNSUsIDM5LjAyJSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTYwMDogaHNsKDE4MCwgMC40NCUsIDQ0LjklKTtcXG59XFxuXFxuLmZpZ21hLWRhcmsge1xcbiAgICAtLWFjY2VudC1yZWQtMTAwOiBoc2xhKDQuMDgsIDc1LjE4JSwgNzMuMTQlLCAwLjIpO1xcbiAgICAtLWFjY2VudC1yZWQtMjAwOiBoc2xhKDQuMDgsIDc1LjE4JSwgNzMuMTQlLCAwLjQ1KTtcXG4gICAgLS1hY2NlbnQtcmVkLTMwMDogaHNsKDQuMDgsIDc1LjM4JSwgNjEuNzYlKTtcXG4gICAgLS1hY2NlbnQtcmVkLTQwMDogaHNsKDQuMDQsIDc2LjI4JSwgNTAuMzklKTtcXG4gICAgLS1hY2NlbnQtcmVkLTUwMDogaHNsKDQuMjEsIDcyLjE1JSwgODQuNTElKTtcXG4gICAgLS1hY2NlbnQtcmVkLTYwMDogaHNsKDQuMjEsIDcyLjE1JSwgODQuNTElKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItMTAwOiBoc2xhKDI0LjIzLCA2MS4xOCUsIDY2LjY3JSwgMC4yKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItMjAwOiBoc2xhKDI0LjIzLCA2MS4xOCUsIDY2LjY3JSwgMC40NSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTMwMDogaHNsKDI0LjU1LCA1NS45MyUsIDUzLjczJSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTQwMDogaHNsKDI0Ljc1LCA3Ni4xOSUsIDQxLjE4JSk7XFxuICAgIC0tYWNjZW50LWFtYmVyLTUwMDogaHNsKDIzLjY4LCA3MS43JSwgNzkuMjIlKTtcXG4gICAgLS1hY2NlbnQtYW1iZXItNjAwOiBoc2woMjMuNjgsIDcxLjclLCA3OS4yMiUpO1xcbiAgICAtLWFjY2VudC1icm93bi0xMDA6IGhzbGEoMzIuMjIsIDU3LjQ1JSwgNjMuMTQlLCAwLjIpO1xcbiAgICAtLWFjY2VudC1icm93bi0yMDA6IGhzbGEoMzIuMjIsIDU3LjQ1JSwgNjMuMTQlLCAwLjQ1KTtcXG4gICAgLS1hY2NlbnQtYnJvd24tMzAwOiBoc2woMzIuNiwgNDkuOCUsIDUwJSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTQwMDogaHNsKDMyLjg4LCA3Ni44NCUsIDM3LjI1JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTUwMDogaHNsKDMxLjY5LCA3Mi4zNiUsIDc1Ljg4JSk7XFxuICAgIC0tYWNjZW50LWJyb3duLTYwMDogaHNsKDMxLjY5LCA3Mi4zNiUsIDc1Ljg4JSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTEwMDogaHNsYSgxMjYuNTEsIDUzLjUzJSwgNTIuNzUlLCAwLjIpO1xcbiAgICAtLWFjY2VudC1ncmVlbi0yMDA6IGhzbGEoMTI2LjUxLCA1My41MyUsIDUyLjc1JSwgMC40NSk7XFxuICAgIC0tYWNjZW50LWdyZWVuLTMwMDogaHNsKDEyOC4yOSwgNTguMjklLCA0MS4zNyUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi00MDA6IGhzbCgxMzAuMTcsIDc2LjYyJSwgMzAuMiUpO1xcbiAgICAtLWFjY2VudC1ncmVlbi01MDA6IGhzbCgxMjQuOTMsIDcyLjgzJSwgNjMuOTIlKTtcXG4gICAgLS1hY2NlbnQtZ3JlZW4tNjAwOiBoc2woMTI0LjkzLCA3Mi44MyUsIDYzLjkyJSk7XFxuICAgIC0tYWNjZW50LXRlYWwtMTAwOiBoc2xhKDE3OC43NCwgNTguODUlLCA0Ny42NSUsIDAuMik7XFxuICAgIC0tYWNjZW50LXRlYWwtMjAwOiBoc2xhKDE3OC43NCwgNTguODUlLCA0Ny42NSUsIDAuNDUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTMwMDogaHNsKDE4MC45MiwgNjUuNjYlLCAzOC44MiUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTQwMDogaHNsKDE4NCwgNzYuOTIlLCAzMC41OSUpO1xcbiAgICAtLWFjY2VudC10ZWFsLTUwMDogaHNsKDE3Ni42LCA3Mi42JSwgNTcuMDYlKTtcXG4gICAgLS1hY2NlbnQtdGVhbC02MDA6IGhzbCgxNzYuNiwgNzIuNiUsIDU3LjA2JSk7XFxuICAgIC0tYWNjZW50LWJsdWUtMTAwOiBoc2xhKDIwNi4wOSwgNjkuNyUsIDY3LjY1JSwgMC4yKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0yMDA6IGhzbGEoMjA2LjA5LCA2OS43JSwgNjcuNjUlLCAwLjQ1KTtcXG4gICAgLS1hY2NlbnQtYmx1ZS0zMDA6IGhzbCgyMDguMzgsIDY3Ljg5JSwgNTcuMjUlKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS00MDA6IGhzbCgyMTAsIDc2LjQ3JSwgNDYuNjclKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS01MDA6IGhzbCgyMDEuNDgsIDcyLjk3JSwgNzguMjQlKTtcXG4gICAgLS1hY2NlbnQtYmx1ZS02MDA6IGhzbCgyMDEuNDgsIDcyLjk3JSwgNzguMjQlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTEwMDogaHNsYSgyMzUuNDQsIDczLjgzJSwgNzkuMDIlLCAwLjIpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tMjAwOiBoc2xhKDIzNS40NCwgNzMuODMlLCA3OS4wMiUsIDAuNDUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tMzAwOiBoc2woMjM4LjMsIDc1LjcxJSwgNzIuNTUlKTtcXG4gICAgLS1hY2NlbnQtaW5kaWdvLTQwMDogaHNsKDI0MCwgNzYlLCA2NS42OSUpO1xcbiAgICAtLWFjY2VudC1pbmRpZ28tNTAwOiBoc2woMjI5LjYyLCA3Mi4yMiUsIDg1Ljg4JSk7XFxuICAgIC0tYWNjZW50LWluZGlnby02MDA6IGhzbCgyMjkuNjIsIDcyLjIyJSwgODUuODglKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTEwMDogaHNsYSgyNTUuNTYsIDc1LjclLCA3OS4wMiUsIDAuMik7XFxuICAgIC0tYWNjZW50LXZpb2xldC0yMDA6IGhzbGEoMjU1LjU2LCA3NS43JSwgNzkuMDIlLCAwLjQ1KTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTMwMDogaHNsKDI1OC4yMSwgNzUuNjglLCA3MC45OCUpO1xcbiAgICAtLWFjY2VudC12aW9sZXQtNDAwOiBoc2woMjU5Ljg2LCA3Ni43MiUsIDYyLjk0JSk7XFxuICAgIC0tYWNjZW50LXZpb2xldC01MDA6IGhzbCgyNDguNzUsIDcyLjczJSwgODcuMDYlKTtcXG4gICAgLS1hY2NlbnQtdmlvbGV0LTYwMDogaHNsKDI0OC43NSwgNzIuNzMlLCA4Ny4wNiUpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtMTAwOiBoc2xhKDI3NS4zMywgNzUlLCA3Ni40NyUsIDAuMik7XFxuICAgIC0tYWNjZW50LXB1cnBsZS0yMDA6IGhzbGEoMjc1LjMzLCA3NSUsIDc2LjQ3JSwgMC40NSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS0zMDA6IGhzbCgyNzguNDQsIDc1LjI5JSwgNjYuNjclKTtcXG4gICAgLS1hY2NlbnQtcHVycGxlLTQwMDogaHNsKDI3OS44OCwgNzYuMjYlLCA1Ny4wNiUpO1xcbiAgICAtLWFjY2VudC1wdXJwbGUtNTAwOiBoc2woMjY4LjI0LCA3MS44MyUsIDg2LjA4JSk7XFxuICAgIC0tYWNjZW50LXB1cnBsZS02MDA6IGhzbCgyNjguMjQsIDcxLjgzJSwgODYuMDglKTtcXG4gICAgLS1hY2NlbnQtcGluay0xMDA6IGhzbGEoMzM1LjI5LCA3NSUsIDczLjMzJSwgMC4yKTtcXG4gICAgLS1hY2NlbnQtcGluay0yMDA6IGhzbGEoMzM1LjI5LCA3NSUsIDczLjMzJSwgMC40NSk7XFxuICAgIC0tYWNjZW50LXBpbmstMzAwOiBoc2woMzM3Ljk2LCA3NS4zOCUsIDYxLjc2JSk7XFxuICAgIC0tYWNjZW50LXBpbmstNDAwOiBoc2woMzQwLCA3Ni4xOSUsIDUwLjU5JSk7XFxuICAgIC0tYWNjZW50LXBpbmstNTAwOiBoc2woMzI2LjMyLCA3Mi4xNSUsIDg0LjUxJSk7XFxuICAgIC0tYWNjZW50LXBpbmstNjAwOiBoc2woMzI2LjMyLCA3Mi4xNSUsIDg0LjUxJSk7XFxuICAgIC0tdGV4dC1iYXNlLTQwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC40NSk7XFxuICAgIC0tdGV4dC1iYXNlLTUwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcXG4gICAgLS10ZXh0LWJhc2UtNjAwOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgICAtLXRleHQtYmFzZS1hY3Rpb246IHZhcigtLXByaW1hcnktNTAwKTtcXG4gICAgLS10ZXh0LWJhc2UtaW5mbzogdmFyKC0taW5mby01MDApO1xcbiAgICAtLXRleHQtYmFzZS1zdWNjZXNzOiB2YXIoLS1zdWNjZXNzLTUwMCk7XFxuICAgIC0tdGV4dC1iYXNlLXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNTAwKTtcXG4gICAgLS10ZXh0LWJhc2UtZGFuZ2VyOiB2YXIoLS1kYW5nZXItNTAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LTQwMDogaHNsYSgwLCAwJSwgMTAwJSwgMC40NSk7XFxuICAgIC0tdGV4dC1jb250cmFzdC01MDA6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNyk7XFxuICAgIC0tdGV4dC1jb250cmFzdC02MDA6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAgIC0tdGV4dC1jb250cmFzdC1hY3Rpb246IHZhcigtLXByaW1hcnktNjAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LWluZm86IHZhcigtLWluZm8tNjAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LXN1Y2Nlc3M6IHZhcigtLXN1Y2Nlc3MtNjAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LXdhcm5pbmc6IHZhcigtLXdhcm5pbmctNjAwKTtcXG4gICAgLS10ZXh0LWNvbnRyYXN0LWRhbmdlcjogdmFyKC0tZGFuZ2VyLTYwMCk7XFxuICAgIC0tYWx0LWJhc2UtMTAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4wOCk7XFxuICAgIC0tYWx0LWJhc2UtMjAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4xMik7XFxuICAgIC0tYWx0LWJhc2UtMzAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4xNik7XFxuICAgIC0tYWx0LWJhc2UtNDAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4yNCk7XFxuICAgIC0tYWx0LWJhc2UtNTAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4zMik7XFxuICAgIC0tYWx0LWJhc2UtNjAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC40NCk7XFxuICAgIC0tYWx0LWNvbnRyYXN0LTEwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMDgpO1xcbiAgICAtLWFsdC1jb250cmFzdC0yMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjEyKTtcXG4gICAgLS1hbHQtY29udHJhc3QtMzAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4xNik7XFxuICAgIC0tYWx0LWNvbnRyYXN0LTQwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMjQpO1xcbiAgICAtLWFsdC1jb250cmFzdC01MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjMyKTtcXG4gICAgLS1hbHQtY29udHJhc3QtNjAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC40NCk7XFxuICAgIC0tdXRpbGl0eS13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXG4gICAgLS11dGlsaXR5LWJsYWNrOiBoc2woMCwgMCUsIDMuOTIlKTtcXG4gICAgLS11dGlsaXR5LXRyYW5zcGFyZW50OiBoc2xhKDAsIDAlLCAwJSwgMCk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS0xMDA6IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtMjAwOiBoc2xhKDAsIDAlLCAwJSwgMC4yKTtcXG4gICAgLS11dGlsaXR5LXNoYWRlLTMwMDogaHNsYSgwLCAwJSwgMCUsIDAuMyk7XFxuICAgIC0tdXRpbGl0eS1zaGFkZS00MDA6IGhzbGEoMCwgMCUsIDAlLCAwLjQpO1xcbiAgICAtLXV0aWxpdHktc2hhZGUtNTAwOiBoc2xhKDAsIDAlLCAwJSwgMC41KTtcXG4gICAgLS11dGlsaXR5LXNoYWRlLTYwMDogaHNsYSgwLCAwJSwgMCUsIDAuNik7XFxuICAgIC0tdXRpbGl0eS10aW50LTEwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMDgpO1xcbiAgICAtLXV0aWxpdHktdGludC0yMDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjEyKTtcXG4gICAgLS11dGlsaXR5LXRpbnQtMzAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC4xNik7XFxuICAgIC0tdXRpbGl0eS10aW50LTQwMDogaHNsYSgxODAsIDEuNzklLCA3OC4wNCUsIDAuMjQpO1xcbiAgICAtLXV0aWxpdHktdGludC01MDA6IGhzbGEoMTgwLCAxLjc5JSwgNzguMDQlLCAwLjMyKTtcXG4gICAgLS11dGlsaXR5LXRpbnQtNjAwOiBoc2xhKDE4MCwgMS43OSUsIDc4LjA0JSwgMC40NCk7XFxuICAgIC0tcHJpbWFyeS0xMDA6IHZhcigtLWFjY2VudC1ibHVlLTEwMCk7XFxuICAgIC0tcHJpbWFyeS0yMDA6IHZhcigtLWFjY2VudC1ibHVlLTIwMCk7XFxuICAgIC0tcHJpbWFyeS0zMDA6IHZhcigtLWFjY2VudC1ibHVlLTMwMCk7XFxuICAgIC0tcHJpbWFyeS00MDA6IHZhcigtLWFjY2VudC1ibHVlLTQwMCk7XFxuICAgIC0tcHJpbWFyeS01MDA6IHZhcigtLWFjY2VudC1ibHVlLTUwMCk7XFxuICAgIC0tcHJpbWFyeS02MDA6IHZhcigtLWFjY2VudC1ibHVlLTYwMCk7XFxuICAgIC0taW5mby0xMDA6IHZhcigtLWFjY2VudC10ZWFsLTEwMCk7XFxuICAgIC0taW5mby0yMDA6IHZhcigtLWFjY2VudC10ZWFsLTIwMCk7XFxuICAgIC0taW5mby0zMDA6IHZhcigtLWFjY2VudC10ZWFsLTMwMCk7XFxuICAgIC0taW5mby00MDA6IHZhcigtLWFjY2VudC10ZWFsLTQwMCk7XFxuICAgIC0taW5mby01MDA6IHZhcigtLWFjY2VudC10ZWFsLTUwMCk7XFxuICAgIC0taW5mby02MDA6IHZhcigtLWFjY2VudC10ZWFsLTYwMCk7XFxuICAgIC0tc3VjY2Vzcy0xMDA6IHZhcigtLWFjY2VudC1ncmVlbi0xMDApO1xcbiAgICAtLXN1Y2Nlc3MtMjAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tMjAwKTtcXG4gICAgLS1zdWNjZXNzLTMwMDogdmFyKC0tYWNjZW50LWdyZWVuLTMwMCk7XFxuICAgIC0tc3VjY2Vzcy00MDA6IHZhcigtLWFjY2VudC1ncmVlbi00MDApO1xcbiAgICAtLXN1Y2Nlc3MtNTAwOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNTAwKTtcXG4gICAgLS1zdWNjZXNzLTYwMDogdmFyKC0tYWNjZW50LWdyZWVuLTYwMCk7XFxuICAgIC0td2FybmluZy0xMDA6IHZhcigtLWFjY2VudC1hbWJlci0xMDApO1xcbiAgICAtLXdhcm5pbmctMjAwOiB2YXIoLS1hY2NlbnQtYW1iZXItMjAwKTtcXG4gICAgLS13YXJuaW5nLTMwMDogdmFyKC0tYWNjZW50LWFtYmVyLTMwMCk7XFxuICAgIC0td2FybmluZy00MDA6IHZhcigtLWFjY2VudC1hbWJlci00MDApO1xcbiAgICAtLXdhcm5pbmctNTAwOiB2YXIoLS1hY2NlbnQtYW1iZXItNTAwKTtcXG4gICAgLS13YXJuaW5nLTYwMDogdmFyKC0tYWNjZW50LWFtYmVyLTYwMCk7XFxuICAgIC0tZGFuZ2VyLTEwMDogdmFyKC0tYWNjZW50LXJlZC0xMDApO1xcbiAgICAtLWRhbmdlci0yMDA6IHZhcigtLWFjY2VudC1yZWQtMjAwKTtcXG4gICAgLS1kYW5nZXItMzAwOiB2YXIoLS1hY2NlbnQtcmVkLTMwMCk7XFxuICAgIC0tZGFuZ2VyLTQwMDogdmFyKC0tYWNjZW50LXJlZC00MDApO1xcbiAgICAtLWRhbmdlci01MDA6IHZhcigtLWFjY2VudC1yZWQtNTAwKTtcXG4gICAgLS1kYW5nZXItNjAwOiB2YXIoLS1hY2NlbnQtcmVkLTYwMCk7XFxuICAgIC0tZmlsbC1iYXNlLTEwMDogaHNsKDE4MCwgMS40MSUsIDEzLjkyJSk7XFxuICAgIC0tZmlsbC1iYXNlLTIwMDogaHNsKDE4MCwgMS42NCUsIDExLjk2JSk7XFxuICAgIC0tZmlsbC1iYXNlLTMwMDogaHNsKDE4MCwgMS45NiUsIDEwJSk7XFxuICAgIC0tZmlsbC1iYXNlLTQwMDogaHNsKDE4MCwgMi40NCUsIDguMDQlKTtcXG4gICAgLS1maWxsLWJhc2UtNTAwOiBoc2woMCwgMCUsIDUuODglKTtcXG4gICAgLS1maWxsLWJhc2UtNjAwOiBoc2woMCwgMCUsIDMuOTIlKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTEwMDogaHNsKDE4MCwgMC44MSUsIDI0LjEyJSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC0yMDA6IGhzbCgyNDAsIDAuODglLCAyMi4xNiUpO1xcbiAgICAtLWZpbGwtY29udHJhc3QtMzAwOiBoc2woMCwgMCUsIDIwJSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC00MDA6IGhzbCgwLCAwJSwgMTguMDQlKTtcXG4gICAgLS1maWxsLWNvbnRyYXN0LTUwMDogaHNsKDE4MCwgMS4yMyUsIDE1Ljg4JSk7XFxuICAgIC0tZmlsbC1jb250cmFzdC02MDA6IGhzbCgxODAsIDEuNDElLCAxMy45MiUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTEwMDogaHNsKDI0MCwgMC44OCUsIDIyLjE2JSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtMjAwOiBoc2woMTgwLCAwLjc5JSwgMjQuOSUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTMwMDogaHNsKDE4MCwgMC42OCUsIDI4LjgyJSk7XFxuICAgIC0tc3Ryb2tlLWJhc2UtNDAwOiBoc2woMTgwLCAwLjU4JSwgMzMuOTIlKTtcXG4gICAgLS1zdHJva2UtYmFzZS01MDA6IGhzbCgyMTAsIDAuOTglLCA0MCUpO1xcbiAgICAtLXN0cm9rZS1iYXNlLTYwMDogaHNsKDIxMCwgMC44MyUsIDQ3LjA2JSk7XFxuICAgIC0tc3Ryb2tlLWNvbnRyYXN0LTEwMDogaHNsKDE4MCwgMC43JSwgMjguMDQlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtMjAwOiBoc2woMTgwLCAwLjY1JSwgMzAlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtMzAwOiBoc2woMTgwLCAwLjU5JSwgMzMuMTQlKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtNDAwOiBoc2woMTgwLCAwLjU1JSwgMzUuODglKTtcXG4gICAgLS1zdHJva2UtY29udHJhc3QtNTAwOiBoc2woMTgwLCAwLjUlLCAzOS4wMiUpO1xcbiAgICAtLXN0cm9rZS1jb250cmFzdC02MDA6IGhzbCgxODAsIDAuNDQlLCA0NC45JSk7XFxufVxcblxcbltkYXRhLXJhZGlpPWNvbXBhY3RdLFxcbi5yYWRpaS1jb21wYWN0IHtcXG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XFxuICAgIC0tcmFkaWktc206IDNweDtcXG4gICAgLS1yYWRpaS1iYXNlOiA0cHg7XFxuICAgIC0tcmFkaWktbWQ6IDZweDtcXG4gICAgLS1yYWRpaS1sZzogOXB4O1xcbiAgICAtLXJhZGlpLXhsOiAxM3B4O1xcbiAgICAtLXJhZGlpLXhsMjogMjBweDtcXG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XFxufVxcblxcbltkYXRhLXJhZGlpPWJhc2VdLFxcbi5yYWRpaS1iYXNlIHtcXG4gICAgLS1yYWRpaS1ub25lOiAwcHg7XFxuICAgIC0tcmFkaWktc206IDQuNXB4O1xcbiAgICAtLXJhZGlpLWJhc2U6IDZweDtcXG4gICAgLS1yYWRpaS1tZDogOXB4O1xcbiAgICAtLXJhZGlpLWxnOiAxMnB4O1xcbiAgICAtLXJhZGlpLXhsOiAxNnB4O1xcbiAgICAtLXJhZGlpLXhsMjogMjJweDtcXG4gICAgLS1yYWRpaS1yb3VuZDogOTk5cHg7XFxufVxcblxcbltkYXRhLXJhZGlpPWxhcmdlXSxcXG4ucmFkaWktbGFyZ2Uge1xcbiAgICAtLXJhZGlpLW5vbmU6IDBweDtcXG4gICAgLS1yYWRpaS1zbTogNnB4O1xcbiAgICAtLXJhZGlpLWJhc2U6IDhweDtcXG4gICAgLS1yYWRpaS1tZDogMTJweDtcXG4gICAgLS1yYWRpaS1sZzogMTZweDtcXG4gICAgLS1yYWRpaS14bDogMjRweDtcXG4gICAgLS1yYWRpaS14bDI6IDQwcHg7XFxuICAgIC0tcmFkaWktcm91bmQ6IDk5OXB4O1xcbn1cXG5cXG5bZGF0YS1zcGFjaW5nPWNvbXBhY3RdLFxcbi5zcGFjaW5nLWNvbXBhY3Qge1xcbiAgICAtLXNwYWNpbmcteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmcteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctYmFzZTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1kOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbGc6IDI0cHg7XFxuICAgIC0tc3BhY2luZy14bDogMjhweDtcXG4gICAgLS1zcGFjaW5nLXhsMjogMzJweDtcXG4gICAgLS1zcGFjaW5nLXhsMzogNDBweDtcXG4gICAgLS1zcGFjaW5nLXhsNDogNDhweDtcXG4gICAgLS1zcGFjaW5nLXhsNTogNjBweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzNDogMXB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHMzOiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czI6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzOiA2cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1zbTogOHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDIwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMjhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMzogMzZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNTZweDtcXG59XFxuXFxuW2RhdGEtc3BhY2luZz1iYXNlXSxcXG4uc3BhY2luZy1iYXNlIHtcXG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XFxuICAgIC0tc3BhY2luZy14czI6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDI0cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMjhweDtcXG4gICAgLS1zcGFjaW5nLXhsOiAzMnB4O1xcbiAgICAtLXNwYWNpbmcteGwyOiA0MHB4O1xcbiAgICAtLXNwYWNpbmcteGwzOiA0OHB4O1xcbiAgICAtLXNwYWNpbmcteGw0OiA2MHB4O1xcbiAgICAtLXNwYWNpbmcteGw1OiA3MnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAyMHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDI0cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMjogMzZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsMzogNDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNDogNTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhsNTogNjhweDtcXG59XFxuXFxuW2RhdGEtc3BhY2luZz1sYXJnZV0sXFxuLnNwYWNpbmctbGFyZ2Uge1xcbiAgICAtLXNwYWNpbmcteHM0OiA0cHg7XFxuICAgIC0tc3BhY2luZy14czM6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzMjogMTJweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctc206IDIwcHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAyNHB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDI4cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMzZweDtcXG4gICAgLS1zcGFjaW5nLXhsOiA0NHB4O1xcbiAgICAtLXNwYWNpbmcteGwyOiA1MnB4O1xcbiAgICAtLXNwYWNpbmcteGwzOiA2NHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogOHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDEycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1zbTogMTZweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLWJhc2U6IDIwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci1tZDogMjRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLWxnOiAzMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteGw6IDQwcHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDI6IDQ4cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDM6IDYwcHg7XFxufVxcblxcbltkYXRhLXNwYWNpbmc9dG91Y2hdLFxcbi5zcGFjaW5nLXRvdWNoIHtcXG4gICAgLS1zcGFjaW5nLXhzNDogNHB4O1xcbiAgICAtLXNwYWNpbmcteHMzOiA2cHg7XFxuICAgIC0tc3BhY2luZy14czI6IDhweDtcXG4gICAgLS1zcGFjaW5nLXhzOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctc206IDE2cHg7XFxuICAgIC0tc3BhY2luZy1iYXNlOiAxNnB4O1xcbiAgICAtLXNwYWNpbmctbWQ6IDE2cHg7XFxuICAgIC0tc3BhY2luZy1sZzogMjBweDtcXG4gICAgLS1zcGFjaW5nLXhsOiAyNHB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM0OiAycHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14czM6IDRweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXhzMjogNnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3IteHM6IDhweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLXNtOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItYmFzZTogMTJweDtcXG4gICAgLS1zcGFjaW5nLW1pbm9yLW1kOiAxMnB4O1xcbiAgICAtLXNwYWNpbmctbWlub3ItbGc6IDE2cHg7XFxuICAgIC0tc3BhY2luZy1taW5vci14bDogMjBweDtcXG59XFxuXFxuW2RhdGEtdHlwb2dyYXBoeT1jb21wYWN0XSxcXG4udHlwb2dyYXBoeS1jb21wYWN0IHtcXG4gICAgLS1mb250LXNpemUteHMyOiAxMHB4O1xcbiAgICAtLWZvbnQtc2l6ZS14czogMTFweDtcXG4gICAgLS1mb250LXNpemUtc206IDEycHg7XFxuICAgIC0tZm9udC1zaXplLWJhc2U6IDEzcHg7XFxuICAgIC0tZm9udC1zaXplLW1kOiAxNnB4O1xcbiAgICAtLWZvbnQtc2l6ZS1sZzogMTlweDtcXG4gICAgLS1mb250LXNpemUteGw6IDIycHg7XFxuICAgIC0tZm9udC1zaXplLXhsMjogMjdweDtcXG4gICAgLS1mb250LXNpemUteGwzOiAzMnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDQ6IDM5cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNTogNDdweDtcXG4gICAgLS1mb250LXNpemUteGw2OiA1NnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDc6IDY3cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteHMyOiAxMHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhzOiAxMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXNtOiAxNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWJhc2U6IDE2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbWQ6IDIwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQtbGc6IDI0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw6IDI4cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGwyOiAzMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMzogNDBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDQ6IDQ0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw1OiA1MnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNjogNjBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDc6IDc4cHg7XFxuICAgIC0tbGV0dGVyLXNwYWNpbmctMDogMCVweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1sYWJlbDogOHB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTJweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1kaXNwbGF5OiAxNnB4O1xcbn1cXG5cXG5bZGF0YS10eXBvZ3JhcGh5PWJhc2VdLFxcbi50eXBvZ3JhcGh5LWJhc2Uge1xcbiAgICAtLWZvbnQtc2l6ZS14czI6IDEwcHg7XFxuICAgIC0tZm9udC1zaXplLXhzOiAxMXB4O1xcbiAgICAtLWZvbnQtc2l6ZS1zbTogMTNweDtcXG4gICAgLS1mb250LXNpemUtYmFzZTogMTVweDtcXG4gICAgLS1mb250LXNpemUtbWQ6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLWxnOiAyMnB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDogMjZweDtcXG4gICAgLS1mb250LXNpemUteGwyOiAzMXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDM6IDM3cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNDogNDVweDtcXG4gICAgLS1mb250LXNpemUteGw1OiA1NHB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDY6IDY0cHg7XFxuICAgIC0tZm9udC1zaXplLXhsNzogNzdweDtcXG4gICAgLS1saW5lLWhlaWdodC14czI6IDEycHg7XFxuICAgIC0tbGluZS1oZWlnaHQteHM6IDE0cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtc206IDE2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQtYmFzZTogMjBweDtcXG4gICAgLS1saW5lLWhlaWdodC1tZDogMjRweDtcXG4gICAgLS1saW5lLWhlaWdodC1sZzogMjhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDogMzJweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDI6IDM2cHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGwzOiA0NHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNDogNDhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDU6IDYwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw2OiA3MnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNzogODZweDtcXG4gICAgLS1sZXR0ZXItc3BhY2luZy0wOiAwJXB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWxhYmVsOiAxMnB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLXBhcmFncmFwaDogMTZweDtcXG4gICAgLS1wYXJhZ3JhcGgtc3BhY2luZy1kaXNwbGF5OiAyMHB4O1xcbn1cXG5cXG5bZGF0YS10eXBvZ3JhcGh5PWxhcmdlXSxcXG4udHlwb2dyYXBoeS1sYXJnZSB7XFxuICAgIC0tZm9udC1zaXplLXhzMjogMTFweDtcXG4gICAgLS1mb250LXNpemUteHM6IDEycHg7XFxuICAgIC0tZm9udC1zaXplLXNtOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1iYXNlOiAxN3B4O1xcbiAgICAtLWZvbnQtc2l6ZS1tZDogMjBweDtcXG4gICAgLS1mb250LXNpemUtbGc6IDI0cHg7XFxuICAgIC0tZm9udC1zaXplLXhsOiAyOXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDI6IDM1cHg7XFxuICAgIC0tZm9udC1zaXplLXhsMzogNDJweDtcXG4gICAgLS1mb250LXNpemUteGw0OiA1MXB4O1xcbiAgICAtLWZvbnQtc2l6ZS14bDU6IDYxcHg7XFxuICAgIC0tZm9udC1zaXplLXhsNjogNzNweDtcXG4gICAgLS1mb250LXNpemUteGw3OiA4OHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhzMjogMTJweDtcXG4gICAgLS1saW5lLWhlaWdodC14czogMTZweDtcXG4gICAgLS1saW5lLWhlaWdodC1zbTogMjBweDtcXG4gICAgLS1saW5lLWhlaWdodC1iYXNlOiAyNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LW1kOiAyOHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LWxnOiAzMnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsOiAzNHB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsMjogNDBweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDM6IDUycHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw0OiA1NnB4O1xcbiAgICAtLWxpbmUtaGVpZ2h0LXhsNTogNjhweDtcXG4gICAgLS1saW5lLWhlaWdodC14bDY6IDgwcHg7XFxuICAgIC0tbGluZS1oZWlnaHQteGw3OiA5NnB4O1xcbiAgICAtLWxldHRlci1zcGFjaW5nLTA6IDAlcHg7XFxuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctbGFiZWw6IDEycHg7XFxuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmctcGFyYWdyYXBoOiAxNnB4O1xcbiAgICAtLXBhcmFncmFwaC1zcGFjaW5nLWRpc3BsYXk6IDIwcHg7XFxufVxcblxcbltkYXRhLWljb25TaXplPWJhc2VdLFxcbi5pY29uU2l6ZS1iYXNlIHtcXG4gICAgLS1pY29uLXNpemUtc206IDEycHg7XFxuICAgIC0taWNvbi1zaXplLWJhc2U6IDE2cHg7XFxuICAgIC0taWNvbi1zaXplLW1kOiAyNHB4O1xcbiAgICAtLWljb24tc2l6ZS1sZzogMzJweDtcXG4gICAgLS1pY29uLXNpemUteGw6IDQ4cHg7XFxuICAgIC0taWNvbi1zaXplLXhsMjogNjRweDtcXG4gICAgLS1pY29uLXNpemUteGwzOiA5NnB4O1xcbiAgICAtLWljb24tc2l6ZS14bDQ6IDEyOHB4O1xcbiAgICAtLWljb24tc2l6ZS14bDU6IDI1NnB4O1xcbn1cXG5cXG5bZGF0YS1pY29uU2l6ZT10b3VjaF0sXFxuLmljb25TaXplLXRvdWNoIHtcXG4gICAgLS1pY29uLXNpemUtc206IDE2cHg7XFxuICAgIC0taWNvbi1zaXplLWJhc2U6IDI0cHg7XFxuICAgIC0taWNvbi1zaXplLW1kOiAzMnB4O1xcbiAgICAtLWljb24tc2l6ZS1sZzogNDhweDtcXG4gICAgLS1pY29uLXNpemUteGw6IDY0cHg7XFxuICAgIC0taWNvbi1zaXplLXhsMjogOTZweDtcXG4gICAgLS1pY29uLXNpemUteGwzOiAxMjhweDtcXG4gICAgLS1pY29uLXNpemUteGw0OiAyNTZweDtcXG4gICAgLS1pY29uLXNpemUteGw1OiA1MTJweDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW9wYWNpdHktMDogMDtcXG4gICAgLS1vcGFjaXR5LTU6IDAuNTtcXG4gICAgLS1vcGFjaXR5LTEwOiAwLjE7XFxuICAgIC0tb3BhY2l0eS0xNTogMC4xNTtcXG4gICAgLS1vcGFjaXR5LTIwOiAwLjI7XFxuICAgIC0tb3BhY2l0eS0yNTogMC4yNTtcXG4gICAgLS1vcGFjaXR5LTMwOiAwLjM7XFxuICAgIC0tb3BhY2l0eS0zNTogMC4zNTtcXG4gICAgLS1vcGFjaXR5LTQwOiAwLjQ7XFxuICAgIC0tb3BhY2l0eS00NTogMC40NTtcXG4gICAgLS1vcGFjaXR5LTUwOiAwLjU7XFxuICAgIC0tb3BhY2l0eS01NTogMC41NTtcXG4gICAgLS1vcGFjaXR5LTYwOiAwLjY7XFxuICAgIC0tb3BhY2l0eS02NTogMC42NTtcXG4gICAgLS1vcGFjaXR5LTcwOiAwLjc7XFxuICAgIC0tb3BhY2l0eS03NTogMC43NTtcXG4gICAgLS1vcGFjaXR5LTgwOiAwLjg7XFxuICAgIC0tb3BhY2l0eS04NTogMC44NTtcXG4gICAgLS1vcGFjaXR5LTkwOiAwLjk7XFxuICAgIC0tb3BhY2l0eS05NTogMC45NTtcXG4gICAgLS1vcGFjaXR5LTEwMDogMTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNoYWRvdy0wOiAwcHggMC43NXB4IDAuNXB4IDBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMTogMHB4IDFweCAycHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDJweCA0cHggLTFweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMjogMHB4IDJweCA0cHggLTJweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDRweCA2cHggLTJweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctMzogMHB4IDRweCA2cHggLTRweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDEwcHggMTVweCAtM3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xcbiAgICAtLXNoYWRvdy00OiAwcHggMTJweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcXG4gICAgLS1zaGFkb3ctNTogMHB4IDIzcHggMjhweCAtN3B4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMTZweCAxMHB4IC03cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyNHB4IDQ4cHggLTEwcHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTExLjM1NCA4LjM1NGEuNS41IDAgMCAxLS43MDggMEw4LjUgNi4yMDdWMTFhLjUuNSAwIDAgMS0xIDBWNi4yMDdMNS4zNTQgOC4zNTRhLjUuNSAwIDAgMS0uNzA4LS43MDhsMy0zYS41LjUgMCAwIDEgLjcwOCAwbDMgM2EuNS41IDAgMCAxIDAgLjcwOCUyNy8lM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3IGQ9JTI3TTE1LjI5NCA4QTcuMyA3LjMgMCAxIDEgLjY5NSA4YTcuMyA3LjMgMCAwIDEgMTQuNiAwbS0xIDBBNi4zIDYuMyAwIDEgMSAxLjY5NSA4YTYuMyA2LjMgMCAwIDEgMTIuNiAwJTI3IGNsaXAtcnVsZT0lMjdldmVub2RkJTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNMy4zOTYgNS4zOTZhLjUuNSAwIDAgMSAuNzA4IDBMOCA5LjI5M2wzLjg5Ni0zLjg5N2EuNS41IDAgMCAxIC43MDguNzA4bC00LjI1IDQuMjVhLjUuNSAwIDAgMS0uNzA4IDBsLTQuMjUtNC4yNWEuNS41IDAgMCAxIDAtLjcwOCUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGZpbGwtcnVsZT0lMjdldmVub2RkJTI3IGQ9JTI3TTggMWEuNS41IDAgMCAxIC41LjV2OC43OTNsMi4xNDYtMi4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw4IDEyLjIwNyA0LjY0NiA4Ljg1NGEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgMTAuMjkzVjEuNUEuNS41IDAgMCAxIDggMW0tNi41IDlhLjUuNSAwIDAgMSAuNS41VjEzYTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMXYtMi41YS41LjUgMCAwIDEgMSAwVjEzYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0yLjVhLjUuNSAwIDAgMSAuNS0uNSUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTcuMTQ2Ljg1NGEuNS41IDAgMSAxIC43MDgtLjcwOEwxMC4yMDcgMi41IDcuODU0IDQuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4TDguMjkzIDNIOGE1IDUgMCAwIDAtMi45MzkgOS4wNDUuNS41IDAgMSAxLS41ODguODFBNiA2IDAgMCAxIDggMmguMjkzTDcuMTQ2Ljg1NE04IDEzYTUgNSAwIDAgMCAyLjkzOS05LjA0NS41LjUgMCAwIDEgLjU4OC0uODFBNiA2IDAgMCAxIDggMTRoLS4yOTNsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw1Ljc5MyAxMy41bDIuMzUzLTIuMzU0YS41LjUgMCAwIDEgLjcwOC43MDhMNy43MDcgMTN6JTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNMTAuMTQ3LjE0NmEuNS41IDAgMCAxIC43MDcgMEwxNC4yMDcgMy41bC0zLjM1MyAzLjM1NGEuNS41IDAgMSAxLS43MDctLjcwOEwxMi4yOTMgNEg1LjVBMi41IDIuNSAwIDAgMCAzIDYuNXYxYS41LjUgMCAxIDEtMSAwdi0xQTMuNSAzLjUgMCAwIDEgNS41IDNoNi43OTNMMTAuMTQ3Ljg1NGEuNS41IDAgMCAxIDAtLjcwOE0xMyA5LjV2LTFhLjUuNSAwIDAgMSAxIDB2MWEzLjUgMy41IDAgMCAxLTMuNSAzLjVIMy43MDdsMi4xNDcgMi4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEwxLjc5MyAxMi41bDMuMzUzLTMuMzU0YS41LjUgMCAxIDEgLjcwOC43MDhMMy43MDcgMTJIMTAuNUEyLjUgMi41IDAgMCAwIDEzIDkuNSUyNyBjbGlwLXJ1bGU9JTI3ZXZlbm9kZCUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTguNSAyLjkxNHY4Ljc5M2EuNS41IDAgMCAxLTEgMFYyLjkxNEw1LjM1NCA1LjA2MWEuNS41IDAgMSAxLS43MDgtLjcwN0w4IDFsMy4zNTQgMy4zNTRhLjUuNSAwIDAgMS0uNzA4LjcwN0w4LjUgMi45MTQlMjcvJTNlJTNjcGF0aCBmaWxsPSUyNyUyMzBFMTAxMSUyNyBkPSUyN00yIDEwLjVhLjUuNSAwIDAgMC0xIDB2My4yNWMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWgxMS41Yy42OSAwIDEuMjUtLjU2IDEuMjUtMS4yNVYxMC41YS41LjUgMCAwIDAtMSAwdjMuMjVhLjI1LjI1IDAgMCAxLS4yNS4yNUgyLjI1YS4yNS4yNSAwIDAgMS0uMjUtLjI1eiUyNy8lM2UlM2Mvc3ZnJTNlXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyBmaWxsPSUyN25vbmUlMjcgdmlld0JveD0lMjcwIDAgMTYgMTYlMjclM2UlM2NwYXRoIGZpbGw9JTI3JTIzMEUxMDExJTI3IGQ9JTI3TTEyLjg1NCAzLjg1NGEuNS41IDAgMCAwLS43MDgtLjcwOEw4IDcuMjkzIDMuODU0IDMuMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhMNy4yOTMgOGwtNC4xNDcgNC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDguNzA3bDQuMTQ2IDQuMTQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDguNzA3IDhsNC4xNDctNC4xNDZaJTI3LyUzZSUzYy9zdmclM2VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IGZpbGw9JTI3bm9uZSUyNyB2aWV3Qm94PSUyNzAgMCAxNiAxNiUyNyUzZSUzY3BhdGggZmlsbD0lMjclMjMwRTEwMTElMjcgZmlsbC1ydWxlPSUyN2V2ZW5vZGQlMjcgZD0lMjdNNS4zOTYgMTIuNjA0YS41LjUgMCAwIDEgMC0uNzA4TDkuMjkzIDggNS4zOTYgNC4xMDRhLjUuNSAwIDEgMSAuNzA4LS43MDhsNC4yNSA0LjI1YS41LjUgMCAwIDEgMCAuNzA4bC00LjI1IDQuMjVhLjUuNSAwIDAgMS0uNzA4IDAlMjcgY2xpcC1ydWxlPSUyN2V2ZW5vZGQlMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEzLjA2OTQgMy44MzUzOUMxMy40MzY0IDQuMTQ5ODkgMTMuNDc4OCA0LjcwMjI3IDEzLjE2NDMgNS4wNjkxOEw2LjU0OTQyIDEyLjc4NjZMMi44ODEyOCA5LjExODQ2QzIuNTM5NTcgOC43NzY3NSAyLjUzOTU3IDguMjIyNzMgMi44ODEyOCA3Ljg4MTAyQzMuMjIyOTkgNy41MzkzMSAzLjc3NzAxIDcuNTM5MzEgNC4xMTg3MiA3Ljg4MTAyTDYuNDUwNTggMTAuMjEyOUwxMS44MzU3IDMuOTMwM0MxMi4xNTAxIDMuNTYzMzkgMTIuNzAyNSAzLjUyMDkgMTMuMDY5NCAzLjgzNTM5WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz5cIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cbn1cblxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgLS10dy1jb250ZW50OiAnJztcbn1cblxuLypcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG41LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG42LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjcuIERpc2FibGUgdGFwIGhpZ2hsaWdodHMgb24gaU9TXG4qL1xuXG5odG1sLFxuOmhvc3Qge1xuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG4vKlxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cbiovXG5cbmJ1dHRvbixcbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKlxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cbiovXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcbiAgLS10dy1ibHVyOiAgO1xuICAtLXR3LWJyaWdodG5lc3M6ICA7XG4gIC0tdHctY29udHJhc3Q6ICA7XG4gIC0tdHctZ3JheXNjYWxlOiAgO1xuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctaW52ZXJ0OiAgO1xuICAtLXR3LXNhdHVyYXRlOiAgO1xuICAtLXR3LXNlcGlhOiAgO1xuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XG4gIH1cbn1cbi5pY29uIHtcbiAgLS1iZy1pbWFnZTogbm9uZTtcbiAgLS1pY29uLXNpemU6IHZhcigtLWljb24tc2l6ZS1iYXNlKTtcbiAgbWluLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGluaXRpYWw7XG59XG4uaWNvbjo6YmVmb3JlIHtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB3aWR0aDogdmFyKC0taWNvbi1zaXplKTtcbiAgLXdlYmtpdC1tYXNrOiB2YXIoLS1pY29uLXNyYyk7XG4gIG1hc2s6IHZhcigtLWljb24tc3JjKTtcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtYXNrLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtbWFzay1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iZy1pbWFnZSk7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogdmFyKC0tYmctYmxlbmQtbW9kZSk7XG59XG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY29sbGFwc2Uge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdGlja3kge1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuLm1iLW1pbm9yLWxnIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1taW5vci1sZyk7XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuLmNvbnRlbnRzIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oLWZ1bGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZmxleC0xIHtcbiAgZmxleDogMSAxIDAlO1xufVxuLmJvcmRlci1jb2xsYXBzZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucmVzaXplIHtcbiAgcmVzaXplOiBib3RoO1xufVxuLmZsZXgtcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXgtbm93cmFwIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5nYXAtMCB7XG4gIGdhcDogMHB4O1xufVxuLmdhcC0wXFxcXC41IHtcbiAgZ2FwOiAwLjEyNXJlbTtcbn1cbi5nYXAtMiB7XG4gIGdhcDogMC41cmVtO1xufVxuLmdhcC1taW5vci1iYXNlIHtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xufVxuLmdhcC1taW5vci14cyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14cyk7XG59XG4uZ2FwLW1pbm9yLXhzMyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci14czMpO1xufVxuLmdhcC1taW5vci14czQge1xuICBnYXA6IHZhcigtLXNwYWNpbmctbWlub3IteHM0KTtcbn1cbi5nYXAtc20ge1xuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xufVxuLmdhcC14cyB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XG59XG4uZ2FwLXhzMiB7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14czIpO1xufVxuLm92ZXJmbG93LWF1dG8ge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJmbG93LWVsbGlwc2lzIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGV4dC1lbGxpcHNpcyB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLndoaXRlc3BhY2Utbm93cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50ZXh0LXdyYXAge1xuICB0ZXh0LXdyYXA6IHdyYXA7XG59XG4udGV4dC1ub3dyYXAge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWxnKTtcbn1cbi50ZXh0LW1kIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtbWQpO1xufVxuLnRleHQtc20ge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xufVxuLnNoYWRvdy01IHtcbiAgLS10dy1zaGFkb3c6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuLm91dGxpbmUge1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cbi5maWx0ZXIge1xuICBmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XG59XG4udHJhbnNpdGlvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XG59XG4uYm9yZGVyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn1cbi5iZy1hbHQtYmFzZS0xMDAge1xuICAtLWJnLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0xMDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG4uYmctZmlsbC1iYXNlLTMwMCB7XG4gIC0tYmctY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG59XG4uY29sb3ItcHJpbWFyeS0zMDAge1xuICAtLXRleHQtY29sb3I6IHZhcigtLXByaW1hcnktMzAwKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuLmNvbG9yLXRleHQtYmFzZS01MDAge1xuICAtLXRleHQtY29sb3I6IHZhcigtLXRleHQtYmFzZS01MDApO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG4uc2hhZG93LTUge1xuICAtLXNoYWRvdy1jb2xvcjogdmFyKC0tdXRpbGl0eS1zaGFkZS0yMDApO1xuICAtLXNoYWRvdy1vcGFjaXR5OiAxMDAlO1xuICAtLWJveC1zaGFkb3ctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zaGFkb3ctY29sb3IpLCB0cmFuc3BhcmVudCBjYWxjKDEwMCUgLSB2YXIoLS1zaGFkb3ctb3BhY2l0eSkpKTtcbiAgLS1ib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTZweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cbi5pY29uLWFycm93LXVwLWNpcmNsZSB7XG4gIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbi5pY29uLWNoZXZyb24tZG93biB7XG4gIC0taWNvbi1zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cbi5pY29uLWRvd25sb2FkIHtcbiAgLS1pY29uLXNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuLmljb24tcmVmcmVzaC1jY3cge1xuICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG4uaWNvbi1yZXBlYXQge1xuICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG59XG4uaWNvbi11cGxvYWQge1xuICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG4uaWNvbi14IHtcbiAgLS1pY29uLXNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xufVxuLnAtc20ge1xuICAtLXBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pO1xuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcbn1cbi5wLXhzIHtcbiAgLS1wYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG59XG4ucHgtYmFzZSB7XG4gIC0tcGFkZGluZy14OiB2YXIoLS1zcGFjaW5nLWJhc2UpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZGRpbmcteCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZGRpbmcteCk7XG59XG4ucHgtbGcge1xuICAtLXBhZGRpbmcteDogdmFyKC0tc3BhY2luZy1sZyk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFkZGluZy14KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFkZGluZy14KTtcbn1cbi5weC1zbSB7XG4gIC0tcGFkZGluZy14OiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWRkaW5nLXgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWRkaW5nLXgpO1xufVxuLnB5LW1pbm9yLWJhc2Uge1xuICAtLXBhZGRpbmcteTogdmFyKC0tc3BhY2luZy1taW5vci1iYXNlKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZGRpbmcteSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWRkaW5nLXkpO1xufVxuLnB5LXNtIHtcbiAgLS1wYWRkaW5nLXk6IHZhcigtLXNwYWNpbmctc20pO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFkZGluZy15KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZGRpbmcteSk7XG59XG5cbjpyb290IHtcbiAgICAtLXNwYWNpbmc6IDAuNXJlbSAxcmVtO1xuICAgIC0tc2xpZGVyLXRodW1iLXNpemU6IGNhbGModmFyKC0tbGluZS1oZWlnaHQtbWQpICsgdmFyKC0tc3BhY2luZy1taW5vci14cykpO1xuICAgIC0tc2xpZGVyLXRyYWNrLXNpemU6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gNCk7XG4gICAgLS1zbGlkZXItbWFyZ2luOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XG4gICAgLS1zY3JvbGxiYXItd2lkdGg6IDhweDtcbiAgICAtLWZvcm0tZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbn1cblxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMCk7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmEge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XG59XG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIC8qIEZvcmVncm91bmQgKi9cbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3Ryb2tlLWJhc2UtNjAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAvKiBCYWNrZ3JvdW5kICovXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMTAwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1sZyk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci1tZCkgdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJyYW5kLWNhcmQge1xuICAgIC0tYmctY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QtNjAwKTtcbn1cblxuLmJyYW5kLWNhcmQgLnNsaWRlciB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4uYnJhbmQtY2FyZC5kaXNhYmxlZCAuc2xpZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4uaGVpZ2h0LWV4cGFuZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZWlnaHQtZXhwYW5kZXIuY29sbGFwc2VkIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnI7XG4gICAgfVxuXG4uaGVpZ2h0LWV4cGFuZGVyPioge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuLmNhcmQtc3RpY2t5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmNhcmQtc3RpY2t5OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IGNhbGMoLTEgKiB2YXIoLS1mb3JtLWdhcCkpO1xuICAgICAgICBib3R0b206IDMzJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tZmlsbC1iYXNlLTMwMCkgNzAlLCB0cmFuc3BhcmVudCk7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuLmNhcmQtc3RpY2t5IC5jYXJkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuLnNlbnRpbmFsIHtcbiAgICBoZWlnaHQ6IHZhcigtLXNwYWNpbmcteHMyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5pcy1waW5uZWQgLmNhcmQge1xuICAtLXR3LXNoYWRvdzogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMHB4IDIwcHggMjVweCAtNXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XG4gIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTIwMCk7XG4gIC0tYm94LXNoYWRvdy1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXNoYWRvdy1jb2xvciksIHRyYW5zcGFyZW50IGNhbGMoMTAwJSAtIHZhcigtLXNoYWRvdy1vcGFjaXR5KSkpO1xuICAtLWJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xuICAtLXNoYWRvdy1jb2xvcjogdmFyKC0tdXRpbGl0eS1zaGFkZS0zMDApO1xuICAtLXNoYWRvdy1vcGFjaXR5OiAxMDAlO1xufVxuXG4uaXMtcGlubmVkIC5jYXJkIC5oZWlnaHQtZXhwYW5kZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpICogLTEpO1xuICAgIH1cblxuLyogJiAuaW5zdHJ1Y3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gKi9cblxuLmlzLXBpbm5lZCAuY2FyZCAucmFkaW8tc2VnbWVudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0yMDApO1xuICAgICAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1hbHQtY29udHJhc3QtMjAwKTtcbiAgICB9XG5cbi5pcy1waW5uZWQgLmNhcmQgLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCsuY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApXG4gICAgfVxuXG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDA7XG59XG5cbmZvcm0gLmNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZzogdmFyKC0tZm9ybS1nYXApO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tZm9ybS1nYXApIC0gdmFyKC0tc2Nyb2xsYmFyLXdpZHRoKSk7XG4gICAgZ2FwOiB2YXIoLS1mb3JtLWdhcCk7XG59XG5cbmJ1dHRvbiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLWFjdGlvbik7XG59XG5cbmJ1dHRvbiAuc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG5idXR0b24ubG9hZGluZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbmJ1dHRvbi5sb2FkaW5nIC5zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLSB2YXIoLS1saW5lLWhlaWdodC1iYXNlKS8yKTtcbiAgICB9XG5cbmJ1dHRvbi5sb2FkaW5nIC50ZXh0LWxhYmVsIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICB9XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xMDApO1xufVxuXG5idXR0b24ucHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdC02MDApO1xufVxuXG5idXR0b24ucHJpbWFyeTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWFsdC1jb250cmFzdC0yMDApLCB2YXIoLS1hbHQtY29udHJhc3QtMjAwKSk7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3IteHMpIHZhcigtLXNwYWNpbmctc20pO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0xMDApO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdHJva2UtYmFzZS00MDApO1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLXNlbGVjdCBzZWxlY3Qge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tc2VsZWN0IC5pY29uLWNoZXZyb24tZG93biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICB0b3A6IHZhcigtLXNwYWNpbmctbWlub3IteHMpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcbn1cblxuaW5wdXQ6aG92ZXIsXG5zZWxlY3Q6aG92ZXIsXG50ZXh0YXJlYTpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIG1hcmdpbjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcbiAgICAtLXdpZHRoOiBjYWxjKHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpLzQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogdmFyKC0td2lkdGgpIHNvbGlkIHZhcigtLXByaW1hcnktNDAwKTtcbn1cblxuLnJhZGlvLXNlZ21lbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMjAwKTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tYWx0LWJhc2UtMjAwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcbn1cblxuLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmFkaW8tc2VnbWVudCAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzMik7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1taW5vci14cykgdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgbWluLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5yYWRpby1zZWdtZW50IC5jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYXNlLTEwMCk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCsuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11dGlsaXR5LXRpbnQtNjAwKTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdXRpbGl0eS1zaGFkZS0xMDApO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWVsZXZhdGlvbi0yKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpmb2N1cy12aXNpYmxlKy5jb250YWluZXIge1xuICAgIG91dGxpbmU6IDJweCBhdXRvIHZhcigtLXByaW1hcnktNTAwKTtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG5cbi5yYWRpb2dyb3VwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMzAwKTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZ2FwOiAxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xufVxuXG4ucmFkaW9ncm91cCBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbm9uZSk7XG59XG5cbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLS10dy1zaGFkb3c6IDBweCAxcHggMC41cHggMHB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDBweCAxcHggMC41cHggMHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcbiAgICAtLXNoYWRvdy1jb2xvcjogdmFyKC0tdXRpbGl0eS1zaGFkZS0yMDApO1xuICAgIC0tc2hhZG93LW9wYWNpdHk6IDEwMCU7XG4gICAgLS1ib3gtc2hhZG93LWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc2hhZG93LWNvbG9yKSwgdHJhbnNwYXJlbnQgY2FsYygxMDAlIC0gdmFyKC0tc2hhZG93LW9wYWNpdHkpKSk7XG4gICAgLS1ib3gtc2hhZG93OiAwcHggMXB4IDAuNXB4IDBweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XG4gICAgLyogb3V0bGluZTogbm9uZTsgKi9cbn1cblxudGV4dGFyZWEge1xuICAgIGZsZXg6IDE7XG4gICAgLyogd2hpdGUtc3BhY2U6IHByZTsgKi9cbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuW2RhdGEtbmFtZT0ncmVkJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1yZWQtNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0nYW1iZXInXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWFtYmVyLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2Jyb3duJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1icm93bi00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdncmVlbiddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtZ3JlZW4tNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0ndGVhbCddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdjeWFuJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1jeWFuLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J2JsdWUnXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWJsdWUtNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0naW5kaWdvJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1pbmRpZ28tNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0ndmlvbGV0J10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC12aW9sZXQtNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0ncHVycGxlJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1wdXJwbGUtNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0ncGluayddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtcGluay00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdpbmZvJ10ge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWluZm8tNDAwKTtcbn1cblxuW2RhdGEtbmFtZT0nd2FybmluZyddIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS13YXJuaW5nLTQwMCk7XG59XG5cbltkYXRhLW5hbWU9J3N1Y2Nlc3MnXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tc3VjY2Vzcy00MDApO1xufVxuXG5bZGF0YS1uYW1lPSdkYW5nZXInXSB7XG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tZGFuZ2VyLTQwMCk7XG59XG5cblxuW2RhdGEtc2xpZGVyXSxcbiNsdW1pbmFuY2VTbGlkZXIge1xuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbn1cblxuI2x1bWluYW5jZVNsaWRlciB7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1yb3VuZCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJhc2UtMzAwKTtcbiAgICBtYXJnaW46IHZhcigtLXNwYWNpbmctbWlub3Itc20pIDA7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDIgKyAycHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gMiArIDJweCk7XG59XG5cbiNsdW1pbmFuY2VTbGlkZXIgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2xpZGVycyBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2xpZGVycyAudGV4dC1sYWJlbCB7XG4gICAgd2lkdGg6IDIwJTtcbn1cblxuLnNsaWRlcnMgLnNsaWRlciB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcblxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYXNlLTMwMCk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmbGV4OiAzO1xuICAgIG1hcmdpbjogMCB2YXIoLS1zbGlkZXItbWFyZ2luKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1yb3VuZCk7XG59XG5cbi5zbGlkZXJzIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtc20pO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWNvbm5lY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcbn1cblxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGUge1xuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA1KSBzb2xpZCB3aGl0ZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XG4gICAgd2lkdGg6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcblxuICAgIHRvcDogY2FsYygodmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC0gdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpKSAvIC0yKTtcbiAgICByaWdodDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAtMik7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAtMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMzUsIDQxLCAwLjA0KSwgMHB4IDBweCAwcHggMXB4IHJnYmEoMCwgMzUsIDQxLCAwLjEpO1xuXG4gICAgLypjdXN0b20gc3R5bGVzKi9cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aHVtYi1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG59XG5cbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktdG9vbHRpcCB7XG4gICAgYm90dG9tOiBpbml0aWFsO1xuICAgIHRvcDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAxMCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMyKTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQteHMyKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcbiAgICAtLXR3LXNoYWRvdzogMHB4IDhweCAxMHB4IC02cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvciksIDBweCAyMHB4IDI1cHggLTVweCB2YXIoLS1ib3gtc2hhZG93LWNvbG9yKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwcHggOHB4IDEwcHggLTZweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xuICAgIC0tc2hhZG93LWNvbG9yOiB2YXIoLS11dGlsaXR5LXNoYWRlLTIwMCk7XG4gICAgLS1zaGFkb3ctb3BhY2l0eTogMTAwJTtcbiAgICAtLWJveC1zaGFkb3ctY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1zaGFkb3ctY29sb3IpLCB0cmFuc3BhcmVudCBjYWxjKDEwMCUgLSB2YXIoLS1zaGFkb3ctb3BhY2l0eSkpKTtcbiAgICAtLWJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNnB4IHZhcigtLWJveC1zaGFkb3ctY29sb3IpLCAwcHggMjBweCAyNXB4IC01cHggdmFyKC0tYm94LXNoYWRvdy1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktaGFuZGxlOmhvdmVyIHtcbiAgICBib3JkZXI6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gNCkgc29saWQgd2hpdGU7XG59XG5cbi5zbGlkZXJzIC5zbGlkZXI6aG92ZXIgLm5vVWktdG9vbHRpcCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGU6OmJlZm9yZSxcbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktaGFuZGxlOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuW2RhdGEtc2VtYW50aWNzXSAuc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1taW5vci1iYXNlKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuI2V4cG9ydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMC1jb21wb25lbnQpO1xufVxuXG4vKioqKioqKioqKiBSYW5nZSBJbnB1dCBTdHlsZXMgKioqKioqKioqKi9cbi8qUmFuZ2UgUmVzZXQqL1xuaW5wdXRbdHlwZT1cInJhbmdlXCJdIHtcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKiBSZW1vdmVzIGRlZmF1bHQgZm9jdXMgKi9cbmlucHV0W3R5cGU9XCJyYW5nZVwiXTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLyoqKioqIENocm9tZSwgU2FmYXJpLCBPcGVyYSBhbmQgRWRnZSBDaHJvbWl1bSBzdHlsZXMgKioqKiovXG4vKiBzbGlkZXIgdHJhY2sgKi9cbmlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpO1xufVxuXG4vKiBzbGlkZXIgdGh1bWIgKi9cbmlucHV0W3R5cGU9XCJyYW5nZVwiXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAvKiBPdmVycmlkZSBkZWZhdWx0IGxvb2sgKi9cbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IGNhbGMoKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAtIHZhcigtLXNsaWRlci10cmFjay1zaXplKSkgLyAtMik7XG5cbiAgICAvKmN1c3RvbSBzdHlsZXMqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcbiAgICB3aWR0aDogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcbn1cblxuaW5wdXRbdHlwZT1cInJhbmdlXCJdOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA1M2E1ZjtcbiAgICBvdXRsaW5lOiAzcHggc29saWQgIzA1M2E1ZjtcblxuICAgIG91dGxpbmUtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS10aHVtYi1jb2xvciksIHRyYW5zcGFyZW50IDIwJSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xufVxuXG5ociB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0xMDApO1xufVxuXG5hW2RhdGEtZXhwYW5kZXJdIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy14czIpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcbiAgICAtLWljb24tc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG59XG5cbmFbZGF0YS1leHBhbmRlcl06OmJlZm9yZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbmFbZGF0YS1leHBhbmRlZD10cnVlXTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5mb250LXByZXZpZXctYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xufVxuXG4uZm9udC1wcmV2aWV3LWJveCAuYmFzZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG59XG5cbi5mb250LXByZXZpZXctYm94IC5tZCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xufVxuXG4uZm9udC1wcmV2aWV3LWJveCAubGcge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbn1cblxuLmNoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hlY2tib3g6aG92ZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xufVxuXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuXG59XG5cbi5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX199KTtcbn1cblxuXG4uYWN0aW9uLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogYXV0bztcbn1cblxuLmFjdGlvbi1saXN0IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzMykgMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlLWJhc2UtMTAwKTtcbn1cblxuLmFjdGlvbi1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci13aWR0aDogMDtcbn1cblxuLmFjdGlvbi1saXN0IGxpIGEge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xuICAgIG1hcmdpbjogMCBjYWxjKHZhcigtLXNwYWNpbmctc20pICogLTEpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3Itc20pIHZhcigtLXNwYWNpbmctc20pO1xufVxuXG4uYWN0aW9uLWxpc3QgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xMDApO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiB2YXIoLS1wcmltYXJ5LTUwMCkgYXV0byAycHg7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuI2JyYW5kQWNjZW50IHtcbiAgICAtLXRodW1iLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS0zMDApLCB3aGl0ZSAxMCUpO1xufVxuXG4jYnJhbmRBY2NlbnQgLnNsaWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0zMDApO1xuICAgIH1cblxuI2JyYW5kQWNjZW50IC5ub1VpLWNvbm5lY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTQwMCk7XG4gICAgfVxuXG4jYnJhbmRBY2NlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0yMDApO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0zMDApO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb250cmFzdC02MDApXG4gICAgfVxuXG4uc3Bpbm5lciB7XG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgYW5pbWF0aW9uOiBzcGluIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uc3Bpbm5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogLTJweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybilcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pXG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLDBCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7O0NBQWM7O0FBQWQ7O0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCwrSEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztF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QUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDhCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxrR0FBbUI7RUFBbkIsd0dBQW1CO0VBQW5CO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLHdKQUFtQjtFQUFuQix3REFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLCtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdDQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGdD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bkIsd0JBQXdCO0lBQ3hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbjpyb290IHtcXG4gICAgLS1zcGFjaW5nOiAwLjVyZW0gMXJlbTtcXG4gICAgLS1zbGlkZXItdGh1bWItc2l6ZTogY2FsYyh2YXIoLS1saW5lLWhlaWdodC1tZCkgKyB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSk7XFxuICAgIC0tc2xpZGVyLXRyYWNrLXNpemU6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gNCk7XFxuICAgIC0tc2xpZGVyLW1hcmdpbjogdmFyKC0tc2xpZGVyLXRodW1iLXNpemUpO1xcbiAgICAtLXNjcm9sbGJhci13aWR0aDogOHB4O1xcbiAgICAtLWZvcm0tZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMzAwKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1iYXNlKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiB2YXIoLS1zY3JvbGxiYXItd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNjcm9sbGJhci13aWR0aCk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAvKiBGb3JlZ3JvdW5kICovXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3Ryb2tlLWJhc2UtNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLyogQmFja2dyb3VuZCAqL1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWxsLWJhc2UtMTAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktbGcpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLW1kKSB2YXIoLS1zcGFjaW5nLW1kKTtcXG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1pbm9yLWJhc2UpO1xcblxcbiAgICBAYXBwbHkgZmxleCBmbGV4LWNvbDtcXG59XFxuXFxuLmJyYW5kLWNhcmQge1xcbiAgICAtLWJnLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QtNjAwKTtcXG5cXG4gICAgJiAuc2xpZGVyIHtcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgJi5kaXNhYmxlZCAuc2xpZGVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4uaGVpZ2h0LWV4cGFuZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgJi5jb2xsYXBzZWQge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyO1xcbiAgICB9XFxuXFxuICAgICY+KiB7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbi5jYXJkLXN0aWNreSB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTA7XFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBpbnNldDogY2FsYygtMSAqIHZhcigtLWZvcm0tZ2FwKSk7XFxuICAgICAgICBib3R0b206IDMzJTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWZpbGwtYmFzZS0zMDApIDcwJSwgdHJhbnNwYXJlbnQpO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxufVxcblxcbi5zZW50aW5hbCB7XFxuICAgIGhlaWdodDogdmFyKC0tc3BhY2luZy14czIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaXMtcGlubmVkIC5jYXJkIHtcXG4gICAgQGFwcGx5IHNoYWRvdy01IHNoYWRvdy11dGlsaXR5LXNoYWRlLTMwMDtcXG5cXG4gICAgJiAuaGVpZ2h0LWV4cGFuZGVyIHtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tc3BhY2luZy1taW5vci1iYXNlKSAqIC0xKTtcXG4gICAgfVxcblxcbiAgICAvKiAmIC5pbnN0cnVjdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9ICovXFxuXFxuICAgICYgLnJhZGlvLXNlZ21lbnQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCk7XFxuICAgICAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1hbHQtY29udHJhc3QtMjAwKTtcXG4gICAgfVxcblxcbiAgICAmIC5yYWRpby1zZWdtZW50IGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQrLmNvbnRhaW5lciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1iYXNlLTYwMClcXG4gICAgfVxcbn1cXG5cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmZvcm0gLmNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IHZhcigtLWZvcm0tZ2FwKTtcXG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1mb3JtLWdhcCkgLSB2YXIoLS1zY3JvbGxiYXItd2lkdGgpKTtcXG4gICAgZ2FwOiB2YXIoLS1mb3JtLWdhcCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS1hY3Rpb24pO1xcblxcbiAgICAmIC5zcGlubmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgJi5sb2FkaW5nIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAmLmxvYWRpbmcgLnNwaW5uZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpLzIpO1xcbiAgICB9XFxuXFxuICAgICAmLmxvYWRpbmcgLnRleHQtbGFiZWwge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgfVxcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEwMCk7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbnRyYXN0LTYwMCk7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWFsdC1jb250cmFzdC0yMDApLCB2YXIoLS1hbHQtY29udHJhc3QtMjAwKSk7XFxufVxcblxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3IteHMpIHZhcigtLXNwYWNpbmctc20pO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTEwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3Ryb2tlLWJhc2UtNDAwKTtcXG59XFxuXFxuLmN1c3RvbS1zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jdXN0b20tc2VsZWN0IHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY3VzdG9tLXNlbGVjdCAuaWNvbi1jaGV2cm9uLWRvd24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiB2YXIoLS1zcGFjaW5nLXhzKTtcXG4gICAgdG9wOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtYWN0aW9uKTtcXG59XFxuXFxuaW5wdXQ6aG92ZXIsXFxuc2VsZWN0OmhvdmVyLFxcbnRleHRhcmVhOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxufVxcblxcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIGhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XFxuICAgIC0td2lkdGg6IGNhbGModmFyKC0tbGluZS1oZWlnaHQtYmFzZSkvNCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHZhcigtLXdpZHRoKSBzb2xpZCB2YXIoLS1wcmltYXJ5LTQwMCk7XFxufVxcblxcbi5yYWRpby1zZWdtZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3c7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYXNlLTIwMCk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1hbHQtYmFzZS0yMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1iYXNlKTtcXG59XFxuXFxuLnJhZGlvLXNlZ21lbnQgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5yYWRpby1zZWdtZW50IC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3BhY2luZy14czIpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tbGluZS1oZWlnaHQtYmFzZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5yYWRpby1zZWdtZW50IC5jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmFzZS0xMDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkKy5jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11dGlsaXR5LXRpbnQtNjAwKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXV0aWxpdHktc2hhZGUtMTAwKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tZWxldmF0aW9uLTIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmFkaW8tc2VnbWVudCBpbnB1dFt0eXBlPXJhZGlvXTpmb2N1cy12aXNpYmxlKy5jb250YWluZXIge1xcbiAgICBvdXRsaW5lOiAycHggYXV0byB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcblxcbi5yYWRpb2dyb3VwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlsbC1iYXNlLTMwMCk7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZ2FwOiAxcHg7XFxuICAgIEBhcHBseSBmbGV4IGZsZXgtcm93IHJvdW5kZWQ7XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcbiAgICBib3JkZXI6IDAgbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuXFxuICAgIEBhcHBseSByb3VuZGVkLW5vbmU7XFxufVxcblxcbi5yYWRpb2dyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBAYXBwbHkgc2hhZG93LTE7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxuICAgIC8qIG91dGxpbmU6IG5vbmU7ICovXFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZmxleDogMTtcXG4gICAgLyogd2hpdGUtc3BhY2U6IHByZTsgKi9cXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLW1kKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbltkYXRhLW5hbWU9J3JlZCddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXJlZC00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdhbWJlciddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LWFtYmVyLTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J2Jyb3duJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtYnJvd24tNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nZ3JlZW4nXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1ncmVlbi00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSd0ZWFsJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVhbC00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdjeWFuJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtY3lhbi00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdibHVlJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtYmx1ZS00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdpbmRpZ28nXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWFjY2VudC1pbmRpZ28tNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0ndmlvbGV0J10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtdmlvbGV0LTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J3B1cnBsZSddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tYWNjZW50LXB1cnBsZS00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdwaW5rJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1hY2NlbnQtcGluay00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdpbmZvJ10ge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1pbmZvLTQwMCk7XFxufVxcblxcbltkYXRhLW5hbWU9J3dhcm5pbmcnXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXdhcm5pbmctNDAwKTtcXG59XFxuXFxuW2RhdGEtbmFtZT0nc3VjY2VzcyddIHtcXG4gICAgLS10aHVtYi1jb2xvcjogdmFyKC0tc3VjY2Vzcy00MDApO1xcbn1cXG5cXG5bZGF0YS1uYW1lPSdkYW5nZXInXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLWRhbmdlci00MDApO1xcbn1cXG5cXG5cXG5bZGF0YS1zbGlkZXJdLFxcbiNsdW1pbmFuY2VTbGlkZXIge1xcbiAgICAtLXRodW1iLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxufVxcblxcbiNsdW1pbmFuY2VTbGlkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpaS1yb3VuZCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYXNlLTMwMCk7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2luZy1taW5vci1zbSkgMDtcXG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDIgKyAycHgpO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAvIDIgKyAycHgpO1xcbn1cXG5cXG4jbHVtaW5hbmNlU2xpZGVyIC5zbGlkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uc2xpZGVycyBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zbGlkZXJzIC50ZXh0LWxhYmVsIHtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciB7XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iYXNlLTMwMCk7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGZsZXg6IDM7XFxuICAgIG1hcmdpbjogMCB2YXIoLS1zbGlkZXItbWFyZ2luKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktcm91bmQpO1xcbn1cXG5cXG4uc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDVyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC1zbSk7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1jb25uZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGh1bWItY29sb3IpO1xcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLWhhbmRsZSB7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyA1KSBzb2xpZCB3aGl0ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcblxcblxcbiAgICBoZWlnaHQ6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG4gICAgd2lkdGg6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG5cXG4gICAgdG9wOiBjYWxjKCh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdHJhY2stc2l6ZSkpIC8gLTIpO1xcbiAgICByaWdodDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAtMik7XFxuXFxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IC0xcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAzNSwgNDEsIDAuMDQpLCAwcHggMHB4IDBweCAxcHggcmdiYSgwLCAzNSwgNDEsIDAuMSk7XFxuXFxuICAgIC8qY3VzdG9tIHN0eWxlcyovXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRodW1iLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcblxcbn1cXG5cXG4uc2xpZGVycyAuc2xpZGVyIC5ub1VpLXRvb2x0aXAge1xcbiAgICBib3R0b206IGluaXRpYWw7XFxuICAgIHRvcDogY2FsYyh2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLSB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSkgLyAxMCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzMik7XFxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1saW5lLWhlaWdodC14czIpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtYmFzZS0xMDApO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN0cm9rZS1iYXNlLTMwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJhc2UtNjAwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaWktYmFzZSk7XFxuICAgIEBhcHBseSBzaGFkb3ctNTtcXG59XFxuXFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGU6aG92ZXIge1xcbiAgICBib3JkZXI6IGNhbGModmFyKC0tc2xpZGVyLXRodW1iLXNpemUpIC8gNCkgc29saWQgd2hpdGU7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXI6aG92ZXIgLm5vVWktdG9vbHRpcCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zbGlkZXJzIC5zbGlkZXIgLm5vVWktaGFuZGxlOjpiZWZvcmUsXFxuLnNsaWRlcnMgLnNsaWRlciAubm9VaS1oYW5kbGU6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuW2RhdGEtc2VtYW50aWNzXSAuc2xpZGVycyBpbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbWlub3ItYmFzZSk7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2V4cG9ydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0xMDAtY29tcG9uZW50KTtcXG59XFxuXFxuLyoqKioqKioqKiogUmFuZ2UgSW5wdXQgU3R5bGVzICoqKioqKioqKiovXFxuLypSYW5nZSBSZXNldCovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxuICAgIC0tdGh1bWItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTVyZW07XFxuICAgIGJvcmRlcjogMCBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmVzIGRlZmF1bHQgZm9jdXMgKi9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyoqKioqIENocm9tZSwgU2FmYXJpLCBPcGVyYSBhbmQgRWRnZSBDaHJvbWl1bSBzdHlsZXMgKioqKiovXFxuLyogc2xpZGVyIHRyYWNrICovXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdHJva2UtYmFzZS0zMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIGhlaWdodDogdmFyKC0tc2xpZGVyLXRyYWNrLXNpemUpO1xcbn1cXG5cXG4vKiBzbGlkZXIgdGh1bWIgKi9cXG5pbnB1dFt0eXBlPVxcXCJyYW5nZVxcXCJdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoKHZhcigtLXNsaWRlci10aHVtYi1zaXplKSAtIHZhcigtLXNsaWRlci10cmFjay1zaXplKSkgLyAtMik7XFxuXFxuICAgIC8qY3VzdG9tIHN0eWxlcyovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRodW1iLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1zbGlkZXItdGh1bWItc2l6ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXNsaWRlci10aHVtYi1zaXplKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDUzYTVmO1xcbiAgICBvdXRsaW5lOiAzcHggc29saWQgIzA1M2E1ZjtcXG5cXG4gICAgb3V0bGluZS1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXRodW1iLWNvbG9yKSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xcbn1cXG5cXG5ociB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc3Ryb2tlLWJhc2UtMTAwKTtcXG59XFxuXFxuYVtkYXRhLWV4cGFuZGVyXSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xcbiAgICBnYXA6IHZhcigtLXNwYWNpbmcteHMyKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcblxcbiAgICBAYXBwbHkgaWNvbi1jaGV2cm9uLXJpZ2h0O1xcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxufVxcblxcbmFbZGF0YS1leHBhbmRlZD10cnVlXTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpbGwtYmFzZS0zMDApO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCAuYmFzZSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xcbn1cXG5cXG4uZm9udC1wcmV2aWV3LWJveCAubWQge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tZCk7XFxufVxcblxcbi5mb250LXByZXZpZXctYm94IC5sZyB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNoZWNrYm94OmhvdmVyIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxufVxcblxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcblxcbn1cXG5cXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTEzLjA2OTQgMy44MzUzOUMxMy40MzY0IDQuMTQ5ODkgMTMuNDc4OCA0LjcwMjI3IDEzLjE2NDMgNS4wNjkxOEw2LjU0OTQyIDEyLjc4NjZMMi44ODEyOCA5LjExODQ2QzIuNTM5NTcgOC43NzY3NSAyLjUzOTU3IDguMjIyNzMgMi44ODEyOCA3Ljg4MTAyQzMuMjIyOTkgNy41MzkzMSAzLjc3NzAxIDcuNTM5MzEgNC4xMTg3MiA3Ljg4MTAyTDYuNDUwNTggMTAuMjEyOUwxMS44MzU3IDMuOTMwM0MxMi4xNTAxIDMuNTYzMzkgMTIuNzAyNSAzLjUyMDkgMTMuMDY5NCAzLjgzNTM5WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiLz48L3N2Zz4nKTtcXG59XFxuXFxuXFxuLmFjdGlvbi1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1pbm9yLXhzMykgMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN0cm9rZS1iYXNlLTEwMCk7XFxufVxcblxcbi5hY3Rpb24tbGlzdCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkgYSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGlpLWJhc2UpO1xcbiAgICBtYXJnaW46IDAgY2FsYyh2YXIoLS1zcGFjaW5nLXNtKSAqIC0xKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS02MDApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWlub3Itc20pIHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4uYWN0aW9uLWxpc3QgbGkgYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMTAwKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtYmFzZS1hY3Rpb24pO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbjpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogdmFyKC0tcHJpbWFyeS01MDApIGF1dG8gMnB4O1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4jYnJhbmRBY2NlbnQge1xcbiAgICAtLXRodW1iLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tcHJpbWFyeS0zMDApLCB3aGl0ZSAxMCUpO1xcblxcbiAgICAmIC5zbGlkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTMwMCk7XFxuICAgIH1cXG5cXG4gICAgJiAubm9VaS1jb25uZWN0IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QtNDAwKTtcXG4gICAgfVxcblxcbiAgICAmIGlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWNvbnRyYXN0LTIwMCk7XFxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWFsdC1jb250cmFzdC0zMDApO1xcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29udHJhc3QtNjAwKVxcbiAgICB9XFxufVxcblxcbi5zcGlubmVyIHtcXG4gICAgd2lkdGg6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICBhbmltYXRpb246IHNwaW4gMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5zcGlubmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBpbnNldDogLTJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBvcGFjaXR5OiAwLjI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKVxcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pXFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaWNvbnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zb3VyY2UtdmFyaWFibGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvdXJjZS12YXJpYWJsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsSUQgPSBlbC5kYXRhc2V0Lm1vZGFsO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxJRCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuICAgIG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidmFyaWFibGVVdGlsc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBcIi4vc3R5bGVzL3NvdXJjZS12YXJpYWJsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9pY29ucy5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2RpYWxvZy5jc3NcIjtcbmltcG9ydCBcIi4vaGVscGVycy9tb2RhbFwiO1xubGV0IGltcG9ydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbXBvcnRWYXJpYWJsZXNCdXR0b24nKTtcbmxldCBzd2FwVmFyaWFibGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXBWYXJpYWJsZXNCdXR0b24nKTtcbmxldCByZWxvYWRTdG9yZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxvYWRTdG9yZScpO1xubGV0IGZpbGVOYW1lO1xuY29uc3Qgc3RhdGUgPSB7fTtcbi8vIGltcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgY29uc3QgZmlsZU5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRNb2RhbCBpbnB1dFtuYW1lPWZpbGVOYW1lXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbi8vICAgICAgICAgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnQ09MTEVDVF9WQVJTJywgZmlsZU5hbWU6IGZpbGVOYW1lSW5wdXQudmFsdWUgfVxuLy8gICAgIH0sIFwiKlwiKTtcbi8vIH0pO1xucmVsb2FkU3RvcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ1ZBUlNfVUlfTE9BREVEJyB9XG4gICAgfSwgXCIqXCIpO1xufSk7XG5zd2FwVmFyaWFibGVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCByYWRpb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmVzZXRzTGlzdCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJyk7XG4gICAgY29uc3Qga2V5ID0gKHJhZGlvQnV0dG9uID09PSBudWxsIHx8IHJhZGlvQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiByYWRpb0J1dHRvbi52YWx1ZSkgfHwgbnVsbDtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2FwTW9kYWwnKTtcbiAgICBjb25zdCBzd2FwUHJvZ3Jlc3NNc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dhcFByb2dyZXNzJyk7XG4gICAgc3dhcFByb2dyZXNzTXNnLmlubmVySFRNTCA9ICdXb3JraW5nLi4uJztcbiAgICBrZXkgJiYgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnU1dBUF9WQVJJQUJMRVMnLCBmaWxlTmFtZToga2V5IH1cbiAgICB9LCBcIipcIik7XG59KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKHsgZGF0YTogeyBwbHVnaW5NZXNzYWdlIH0gKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coZSk7XG4vLyB9KVxud2luZG93Lm9ubWVzc2FnZSA9ICh7IGRhdGE6IHsgcGx1Z2luTWVzc2FnZSB9IH0pID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChwbHVnaW5NZXNzYWdlLmV2ZW50ID09ICdTWU5DX1ZBUlMnKSB7XG4gICAgICAgIHJlbmRlckxpc3QocGx1Z2luTWVzc2FnZS5kYXRhKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGlhbG9nJykuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocGx1Z2luTWVzc2FnZS5ldmVudCA9PSAnU1dBUF9WQVJJQUJMRVNfRE9ORScpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dhcE1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICAgIGlmIChwbHVnaW5NZXNzYWdlLmV2ZW50ID09ICdTV0FQX1ZBUl9QUk9HUkVTUycpIHtcbiAgICAgICAgY29uc3Qgc3dhcFByb2dyZXNzTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3YXBQcm9ncmVzcycpO1xuICAgICAgICBzd2FwUHJvZ3Jlc3NNc2cuaW5uZXJIVE1MID0gcGx1Z2luTWVzc2FnZS5tZXNzYWdlICsgJy4uLic7XG4gICAgfVxufSk7XG5mdW5jdGlvbiByZW5kZXJMaXN0KHN0b3JlZERhdGEpIHtcbiAgICBjb25zdCBtYXJrdXAgPSBbXTtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoc3RvcmVkRGF0YSk7XG4gICAgZW50cmllcy5mb3JFYWNoKChbZmlsZUtleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIG1hcmt1cC5wdXNoKGBcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRoZW1lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInRoZW1lXCIgdmFsdWU9XCIke2ZpbGVLZXl9XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2wgcHgtYmFzZSBweS1taW5vci1iYXNlIGdhcC1taW5vci14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsZXggZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiIHRpdGxlPVwiJHtmaWxlS2V5fVwiPiR7ZmlsZUtleX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5gKTtcbiAgICB9KTtcbiAgICBpZiAoIW1hcmt1cC5sZW5ndGgpIHtcbiAgICB9XG4gICAgY29uc3QgbGlzdGJveEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0c0xpc3QnKTtcbiAgICBsaXN0Ym94RWxlbWVudC5pbm5lckhUTUwgPSBtYXJrdXAuam9pbignJyk7XG59XG5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgIHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ1ZBUlNfVUlfTE9BREVEJyB9XG59LCBcIipcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=