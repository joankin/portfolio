"use strict";
(() => {
var exports = {};
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Journal/JournalLayout.tsx


function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "prose prose-neutral prose-headings:font-['IBM_Plex_Sans'] prose-headings:font-medium prose-a:no-underline prose-pre:rounded-lg prose-ul:my-5 prose-img:rounded-xl dark:prose-invert",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fixed top-0 -ml-6 h-full border-l-2 border-dotted border-divider"
            }),
            children
        ]
    });
}


/***/ }),

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

/***/ 1577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JournalEntry),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Journal_JournalLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(328);
/* harmony import */ var _components_LinkPreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3968);
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9151);
/* harmony import */ var _lib_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5673);
/* harmony import */ var _components_TransitionPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Description__WEBPACK_IMPORTED_MODULE_7__, _components_TransitionPage__WEBPACK_IMPORTED_MODULE_8__]);
([_components_Description__WEBPACK_IMPORTED_MODULE_7__, _components_TransitionPage__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const entriesList = {
    "dns-ad-blocker-with-pi-hole-and-docker": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(501)]).then(__webpack_require__.bind(__webpack_require__, 6501)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/dns-ad-blocker-with-pi-hole-and-docker.mdx"
            ]
        }
    }),
    "dynamic-programming-for-dummies": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(8)]).then(__webpack_require__.bind(__webpack_require__, 8)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/dynamic-programming-for-dummies.mdx"
            ]
        }
    }),
    "gmail-automatic-forwarder": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(132)]).then(__webpack_require__.bind(__webpack_require__, 6132)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/gmail-automatic-forwarder.mdx"
            ]
        }
    }),
    "rfid-hacking-101": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(151), __webpack_require__.e(282)]).then(__webpack_require__.bind(__webpack_require__, 6282)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/rfid-hacking-101.mdx"
            ]
        }
    }),
    "custom-paging-ui-in-swiftui": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(829)]).then(__webpack_require__.bind(__webpack_require__, 6829)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/custom-paging-ui-in-swiftui.mdx"
            ]
        }
    }),
    "recreate-apples-breathing-animation-in-swiftui-part-2": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(171)]).then(__webpack_require__.bind(__webpack_require__, 4171)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/recreate-apples-breathing-animation-in-swiftui-part-2.mdx"
            ]
        }
    }),
    "recreate-apples-breathing-animation-in-swiftui-part-1": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(399), __webpack_require__.e(151), __webpack_require__.e(675), __webpack_require__.e(127)]).then(__webpack_require__.bind(__webpack_require__, 6127)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/recreate-apples-breathing-animation-in-swiftui-part-1.mdx"
            ]
        }
    }),
    "efficient-memory-management-in-python": next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>Promise.all(/* import() */[__webpack_require__.e(151), __webpack_require__.e(687)]).then(__webpack_require__.bind(__webpack_require__, 6687)), {
        loadableGenerated: {
            modules: [
                "journal/[slug].tsx -> " + "@data/journal/efficient-memory-management-in-python.mdx"
            ]
        }
    })
};
function JournalEntry({ meta , readingTime  }) {
    const Entry = entriesList[meta.slug];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_TransitionPage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: meta.title,
        description: meta.description,
        type: "article",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                    className: "absolute top-0 -left-12 h-screen pr-11 text-left font-['Luxurious_Roman'] text-sm text-gray-400 [writing-mode:vertical-rl] dark:text-gray-600 md:-left-14",
                    children: [
                        (0,_lib_date__WEBPACK_IMPORTED_MODULE_9__/* .formatDate */ .p)((0,_lib_date__WEBPACK_IMPORTED_MODULE_9__/* .normalizeUtc */ .k)(new Date(meta.publishedAt))),
                        " • ",
                        readingTime,
                        " min read"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Description__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                title: meta.title,
                description: meta.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Entry, {
                components: {
                    wrapper: ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_JournalLayout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            ...rest
                        }),
                    a: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkPreview__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            name: props.children,
                            href: props.href || "",
                            alt: ""
                        })
                }
            })
        ]
    });
}
async function getStaticProps({ params  }) {
    const slug = params?.slug;
    const file = gray_matter__WEBPACK_IMPORTED_MODULE_3__.read(`./data/journal/${slug}.mdx`);
    const meta = file.data;
    const roundedReadingTime = Math.round(reading_time__WEBPACK_IMPORTED_MODULE_4___default()(file.content).minutes);
    return {
        props: {
            meta,
            readingTime: roundedReadingTime
        }
    };
}
async function getStaticPaths() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync("./data/journal");
    const paths = await Promise.all(fileNames.map((fileName)=>{
        const meta = gray_matter__WEBPACK_IMPORTED_MODULE_3__.read(`./data/journal/${fileName}`).data;
        return {
            params: {
                slug: meta.slug
            }
        };
    }));
    return {
        paths,
        fallback: false
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 999:
/***/ ((module) => {

module.exports = require("@radix-ui/react-tooltip");

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

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,68,968], () => (__webpack_exec__(1577)));
module.exports = __webpack_exports__;

})();