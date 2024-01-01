"use strict";
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 3182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FancyImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



function FancyImage({ src , alt , width , height , caption , className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(className || "", "overflow-hidden rounded-xl"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: src,
                    alt: alt,
                    width: width,
                    height: height,
                    placeholder: "blur",
                    blurDataURL: src
                })
            }),
            caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 mb-0 text-sm font-light text-gray-600 dark:text-gray-400",
                children: caption
            })
        ]
    });
}


/***/ }),

/***/ 6132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1151);
/* harmony import */ var _components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3182);
/*@jsxRuntime automatic @jsxImportSource react*/ 


function _createMdxContent(props) {
    const _components = Object.assign({
        hr: "hr",
        h2: "h2",
        p: "p",
        em: "em",
        blockquote: "blockquote",
        pre: "pre",
        code: "code"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "gmail-automatic-forwarder"\ntitle: "Gmail Automatic Forwarder"\ndescription: "Leveraging Google Apps Script for automations"\npublishedAt: "2021-06-04"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDCD6 Intro"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There’s nothing worse than having to manage multiple email addresses. Often times, you need to jump from app to app with different UIs. Simply put, it’s annoying and unproductive."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "During the end of 2020, as I was starting college I had 5 Gmails, 1 Yahoo! and 2 custom Zoho domains. There’s always the option of using an universal email client, but I’m a simple man which likes to use only one address. This madness had to come to and end!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/gmail-automatic-forwarder/accounts.jpeg",
                alt: "",
                width: "250",
                height: "444"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "My utopian vision was to forward all my incoming emails to my yahoo account (\uD83D\uDC80 future subject to change) where I could filter, delete and archive all the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "junk"
                    }),
                    ". There’s no better way to describe how I feel about emails nowadays. \uD83D\uDE15"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "This workflow can create some confusion when replying, since the address I would reply from could be different, but it was not an issue for me."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDCAB Google Apps Script to the rescue"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-javascript",
                    children: 'function markArchivedAsRead() {\n  var threads = GmailApp.search("label:unread -label:inbox", 0, 100)\n  GmailApp.markThreadsRead(threads)\n}\n'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDC4F Special Thanks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When I first started researching the problem of Gmail automatic forwarding I remember coming across a decade old blogpost that implemented a very similar script, if not, the same thing as me. As I can no longer find the reference at this moment of time, I’m giving a shoutout to all the people that have started developing in the wild and embracing open source. \uD83D\uDE09"
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

};
;