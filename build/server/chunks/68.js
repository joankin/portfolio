"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 7506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(329);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Description({ title , description , hideBreak =false  }) {
    const transition = "transition-all duration-500";
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setShow(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
        show: show,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                enter: clsx__WEBPACK_IMPORTED_MODULE_2___default()(transition),
                enterFrom: "opacity-0 -translate-y-2",
                enterTo: "opacity-100 translate-y-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: _styles__WEBPACK_IMPORTED_MODULE_4__/* .titleStyle */ .E,
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                enter: clsx__WEBPACK_IMPORTED_MODULE_2___default()(transition, "delay-[300ms]"),
                enterFrom: "opacity-0 -translate-y-2",
                enterTo: "opacity-100 translate-y-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: _styles__WEBPACK_IMPORTED_MODULE_4__/* .descriptionStyle */ .a,
                    children: description
                })
            }),
            !hideBreak && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                enter: clsx__WEBPACK_IMPORTED_MODULE_2___default()(transition, "delay-[600ms]"),
                enterFrom: "scale-x-0",
                enterTo: "scale-x-100",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Description)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(329);


function Description({ title , description , hideBreak =false  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: _styles__WEBPACK_IMPORTED_MODULE_1__/* .titleStyle */ .E,
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: _styles__WEBPACK_IMPORTED_MODULE_1__/* .descriptionStyle */ .a,
                children: description
            }),
            !hideBreak && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
        ]
    });
}


/***/ }),

/***/ 9151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* reexport safe */ _AnimatedDescription__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Z": () => (/* reexport safe */ _Description__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2157);
/* harmony import */ var _AnimatedDescription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AnimatedDescription__WEBPACK_IMPORTED_MODULE_1__]);
_AnimatedDescription__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ titleStyle),
/* harmony export */   "a": () => (/* binding */ descriptionStyle)
/* harmony export */ });
const titleStyle = "text-3xl font-semibold text-gray-900 dark:text-gray-50 tracking-tight text-center mb-3";
const descriptionStyle = "text-base text-gray-600 dark:text-gray-400 text-center mb-10";


/***/ }),

/***/ 5909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransitionPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const suffixTitle = "Elyees Tatua";
function TransitionPage({ children , title , description , type ="website"  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
                title: router.asPath !== "/" ? `${title} - ${suffixTitle}` : title,
                description: description,
                canonical: `https://alexandru.so${router.asPath}`,
                openGraph: {
                    type,
                    locale: "en_IE",
                    url: `https://alexandru.so${router.asPath}`,
                    site_name: "Elyees Tatua"
                },
                twitter: {
                    site: "@pondorasti",
                    cardType: "summary_large_image"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                appear: true,
                show: true,
                as: "div",
                enter: "transition duration-500 ease-in-out",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition duration-500 ease-in-out",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;