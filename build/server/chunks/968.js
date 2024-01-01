"use strict";
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 3968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LinkPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(999);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);





const neutralHighlight = clsx__WEBPACK_IMPORTED_MODULE_4___default()("text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50", "after:bg-gray-700 after:hover:bg-gray-900 dark:after:bg-gray-200 dark:after:hover:bg-gray-50");
const blueHighlight = clsx__WEBPACK_IMPORTED_MODULE_4___default()("text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400", "after:bg-blue-600 after:hover:bg-blue-700 dark:after:bg-blue-300 dark:after:hover:bg-blue-400");
function Shimmer({ w , h , theme  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        className: "rounded-md",
        width: w,
        height: h,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                id: "r",
                width: w,
                height: h,
                fill: theme === "dark" ? "#171717" : "#e2e8f0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                attributeName: "opacity",
                values: "0.5;1;0.5",
                dur: "2s",
                repeatCount: "indefinite"
            })
        ]
    });
}
function LinkPreview({ name , href , alt , preview , style ="blue" , showExternalIndicator =true  }) {
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const imageSrc = preview;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        return ()=>setIsLoading(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Root, {
        delayDuration: 0,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Trigger, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(style === "neutral" ? neutralHighlight : blueHighlight, "relative whitespace-nowrap after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:rounded-full hover:after:w-full", "after:ease after:transition-[width] after:duration-200 hover:after:ease-out"),
                    href: href,
                    target: "_blank",
                    rel: "noreferrer",
                    children: [
                        name,
                        showExternalIndicator && " ↗",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: imageSrc,
                            alt: "",
                            "aria-hidden": true,
                            onLoad: ()=>setIsLoading(false),
                            className: "hidden"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Portal, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_1__.Content, {
                    side: "top",
                    sideOffset: 16,
                    className: "h-40 w-64 animate-slide-in rounded-lg border bg-white p-2 border-divider radix-state-closed:animate-slide-out dark:bg-gray-900",
                    children: [
                        isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Shimmer, {
                            h: 142,
                            w: 238,
                            theme: resolvedTheme
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: imageSrc,
                            alt: alt,
                            onLoad: ()=>setIsLoading(false),
                            className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("h-[142px] w-[238px] rounded-md object-cover", isLoading && "hidden")
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;