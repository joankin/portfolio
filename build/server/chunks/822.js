"use strict";
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 4829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DD": () => (/* binding */ circleIconStyle),
/* harmony export */   "Ep": () => (/* binding */ circleStyle),
/* harmony export */   "ZP": () => (/* binding */ BrowserFrame),
/* harmony export */   "aO": () => (/* binding */ tabStyle),
/* harmony export */   "eR": () => (/* binding */ transition),
/* harmony export */   "jt": () => (/* binding */ frameStyle),
/* harmony export */   "wz": () => (/* binding */ wrapperStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const wrapperStyle = "group flex h-full w-full flex-col overflow-hidden rounded-lg border border-divider";
const tabStyle = "mx-auto w-[calc(100%-16px)] whitespace-nowrap rounded-md bg-gray-200 py-1 px-4 text-center text-sm dark:bg-gray-700 xs:w-72 sm:w-80";
const circleStyle = "h-3 w-3 rounded-full bg-gray-200 dark:bg-gray-700 opacity-0 xs:opacity-100 text-black flex";
const circleIconStyle = "m-auto h-2.5 w-2.5";
const frameStyle = "flex bg-gray-50 glass dark:bg-gray-900";
const transition = "transition-all ease-out duration-300";
function BrowserFrame({ children , href , title , containerClassName  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(wrapperStyle, "cursor-ne-resize hover:scale-[1.03]", transition),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative flex h-12 w-full flex-row items-center space-x-2 px-4", "bg-gray-100 text-gray-500 dark:bg-gray-800", "group-hover:text-gray-700 dark:group-hover:text-gray-300"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(circleStyle, "group-hover:bg-systemRed", transition)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(circleStyle, "group-hover:bg-systemYellow", transition)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(circleStyle, "group-hover:bg-systemGreen", transition)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex-grow"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute left-0 !ml-0 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(tabStyle, transition),
                                children: title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("opacity-0 xs:opacity-100", "translate-x-0 group-hover:translate-x-1", transition),
                            children: "→"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(frameStyle, "h-60 p-8 xs:h-80", transition, containerClassName ?? ""),
                    children: children
                })
            ]
        })
    });
}


/***/ })

};
;