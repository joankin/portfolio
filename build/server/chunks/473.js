"use strict";
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LiquidBlob)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Experiments_BrowserFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4829);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const blobStyle = "h-16 w-16 rounded-full bg-black dark:bg-white transition-all";
const animateOnHoverStyle = "running group-hover:running sm:paused";
function LiquidBlob({ animateOnHover  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("flex items-center justify-center space-x-16 [filter:url(#blob)]", _components_Experiments_BrowserFrame__WEBPACK_IMPORTED_MODULE_1__/* .transition */ .eR),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(blobStyle, "animate-blob-right", animateOnHover && animateOnHoverStyle)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(blobStyle, "animate-blob-left", animateOnHover && animateOnHoverStyle)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "invisible absolute inset-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "blob",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feGaussianBlur", {
                                in: "SourceGraphic",
                                stdDeviation: "10",
                                result: "gaussian-blur"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feColorMatrix", {
                                in: "gaussian-blur",
                                mode: "matrix",
                                values: `
                1 0 0 0 0  
                0 1 0 0 0  
                0 0 1 0 0  
                0 0 0 18 -8
              `,
                                result: "alpha-threshold"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feBlend", {
                                in: "SourceGraphic",
                                in2: "alpha-threshold"
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ })

};
;