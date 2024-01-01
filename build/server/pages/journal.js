"use strict";
(() => {
var exports = {};
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 5673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ normalizeUtc),
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
function normalizeUtc(date) {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
}
function formatDate(date, showYear = true) {
    const getOrdinalNum = (n)=>n + (n > 0 ? [
            "th",
            "st",
            "nd",
            "rd"
        ][n > 3 && n < 21 || n % 10 > 3 ? 0 : n % 10] : "");
    const day = getOrdinalNum(date.getDate());
    const month = date.toLocaleDateString("en-us", {
        month: "long"
    });
    const year = date.toLocaleDateString("en-us", {
        year: "numeric"
    });
    let result = `${month} ${day}`;
    if (showYear) {
        result += ` ${year}`;
    }
    return result;
}


/***/ }),

/***/ 2975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Journal),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9151);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5673);
/* harmony import */ var _components_TransitionPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Description__WEBPACK_IMPORTED_MODULE_5__, _components_TransitionPage__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Description__WEBPACK_IMPORTED_MODULE_5__, _components_TransitionPage__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const title = "Journal";
const description = "Collection of random thoughts";
const cardStyle = "flex flex-col px-4 py-6 relative hover:highlight sm:hover:!bg-transparent rounded-xl transition-colors duration-300";
const asideStyle = "absolute [writing-mode:vertical-rl] h-full top-0 -left-12 md:-left-14 pr-11 text-center text-sm text-gray-400 dark:text-gray-600 font-['Luxurious_Roman']";
// Inspiration: https://emilkowal.ski/ui/tabs
function Journal({ metas  }) {
    const { 0: highlightedTab , 1: setHighlightedTab  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isHoveredFromNull , 1: setIsHoveredFromNull  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: transform , 1: setTransform  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("translate(0, 0");
    const parentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const highlightRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    function handleMouseOver(event) {
        const node = event.target;
        const parent = parentRef.current;
        setIsHoveredFromNull(!highlightedTab);
        setHighlightedTab(node);
        const tabBoundingBox = node.getBoundingClientRect();
        const parentBoundingBox = parent.getBoundingClientRect();
        const highlightOffset = tabBoundingBox.top - parentBoundingBox.top;
        // exit early if event triggered by children
        if (node.className === cardStyle || node.className === asideStyle) {
            setTransform(`translate(0, ${highlightOffset}px)`);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_TransitionPage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: title,
        description: description,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Description__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                title: title,
                description: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ml-12 md:ml-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed top-0 -ml-4 h-full border-l-2 border-dotted border-divider md:-ml-6"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: parentRef,
                        className: "relative",
                        onMouseLeave: ()=>setHighlightedTab(null),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: highlightRef,
                                className: clsx__WEBPACK_IMPORTED_MODULE_6___default()("absolute hidden h-[104px] w-full sm:block", "duration-200", isHoveredFromNull ? "transition-none" : "transition-transform "),
                                style: {
                                    transform
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()("h-full w-full rounded-xl highlight", highlightedTab ? "opacity-100" : "opacity-0", "transition-opacity duration-300")
                                })
                            }),
                            metas.map((meta)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/journal/${meta.slug}`,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: cardStyle,
                                        onMouseOver: handleMouseOver,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                                                className: asideStyle,
                                                onMouseOver: handleMouseOver,
                                                children: (0,_lib_date__WEBPACK_IMPORTED_MODULE_8__/* .formatDate */ .p)((0,_lib_date__WEBPACK_IMPORTED_MODULE_8__/* .normalizeUtc */ .k)(new Date(meta.publishedAt)), false)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-xl font-semibold",
                                                children: meta.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "mt-2 text-sm text-gray-500 dark:text-gray-500",
                                                children: meta.description
                                            })
                                        ]
                                    })
                                }, meta.slug))
                        ]
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync("./data/journal");
    const metas = (await Promise.all(fileNames.map((fileName)=>gray_matter__WEBPACK_IMPORTED_MODULE_4__.read(`./data/journal/${fileName}`).data))).sort((a, b)=>new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    return {
        props: {
            metas
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [399,676,664,68], () => (__webpack_exec__(2975)));
module.exports = __webpack_exports__;

})();