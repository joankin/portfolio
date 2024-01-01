"use strict";
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 6373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BookGalley)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const books = [
    {
        title: "1984",
        coverUrl: "/images/experiments/book-gallery/1984.webp",
        spineBackgroundColor: "#ae2d32",
        spineForegroundColor: "#ffe9a2"
    },
    {
        title: "The Art Of War",
        coverUrl: "/images/experiments/book-gallery/sun.webp",
        spineBackgroundColor: "#ffffff",
        spineForegroundColor: "#050505"
    },
    {
        title: "Everything Is Fucked ",
        coverUrl: "/images/experiments/book-gallery/mark.webp",
        spineBackgroundColor: "#1f7189",
        spineForegroundColor: "#ffffd5"
    },
    {
        title: "The Subtle Art of Not Giving A Fuck",
        coverUrl: "/images/experiments/book-gallery/manson.webp",
        spineBackgroundColor: "#000004",
        spineForegroundColor: "#fffffd"
    },
    {
        title: "Snow Crash",
        coverUrl: "/images/experiments/book-gallery/snow-crash.webp",
        spineBackgroundColor: "#262a57",
        spineForegroundColor: "#fefcff"
    }, 
];
const animationStyle = "transition-all duration-500 ease will-change-auto";
function BookGalley() {
    const { 0: focusedIndex , 1: setFocusedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(2);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "invisible absolute inset-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                        id: "paper",
                        x: "0%",
                        y: "0%",
                        width: "100%",
                        height: "100%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feTurbulence", {
                                type: "fractalNoise",
                                baseFrequency: "0.9",
                                numOctaves: "8",
                                result: "noise"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feDiffuseLighting", {
                                in: "noise",
                                "lighting-color": "white",
                                surfaceScale: "1",
                                result: "diffLight",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("feDistantLight", {
                                    azimuth: "45",
                                    elevation: "35"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                role: "list",
                className: "flex flex-row justify-center space-x-4",
                children: books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        role: "listitem",
                        onClick: ()=>{
                            if (index === focusedIndex) {
                                setFocusedIndex(-1);
                            } else {
                                setFocusedIndex(index);
                            }
                        },
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex shrink-0 flex-row items-center outline-none", focusedIndex !== index && "hover:-translate-y-4 focus-visible:-translate-y-4", focusedIndex === index ? "basis-60" : "basis-12", animationStyle),
                        style: {
                            perspective: "1000px",
                            WebkitPerspective: "1000px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("z-50 h-full w-[44px] shrink-0 origin-right py-4 brightness-[0.80] contrast-[2.00]", animationStyle),
                                style: {
                                    backgroundColor: book.spineBackgroundColor,
                                    color: book.spineForegroundColor,
                                    transformStyle: "preserve-3d",
                                    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${focusedIndex === index ? "-60deg" : "0deg"}) rotateZ(0deg) skew(0deg, 0deg)`
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        "aria-hidden": true,
                                        className: "pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "text-md m-auto font-medium",
                                        style: {
                                            writingMode: "vertical-lr"
                                        },
                                        children: book.title
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("relative z-10 h-72 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]", animationStyle),
                                style: {
                                    transformStyle: "preserve-3d",
                                    transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${focusedIndex === index ? "30deg" : "90deg"}) rotateZ(0deg) skew(0deg, 0deg)`
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        "aria-hidden": true,
                                        className: "pointer-events-none fixed top-0 right-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        "aria-hidden": true,
                                        className: "pointer-events-none absolute top-0 left-0 z-50 h-full w-full",
                                        style: {
                                            background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: book.coverUrl,
                                        alt: book.title,
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("h-full w-48 bg-cover", animationStyle)
                                    })
                                ]
                            })
                        ]
                    }, book.title))
            })
        ]
    });
}


/***/ })

};
;