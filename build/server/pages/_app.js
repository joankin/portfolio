"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LinkPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3968);


function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "pb-px body",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-16 text-center text-xs font-light text-gray-600 dark:text-gray-400 sm:text-sm",
                children: [
                    "Crafted with love by",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-normal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LinkPreview__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            name: "Elyees T.",
                            href: "https://twitter.com/ElyeesT",
                            preview: "/images/twitter-preview.png",
                            alt: "Elyees Tatua Twitter",
                            style: "neutral",
                            showExternalIndicator: false
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavigationBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: external "react-toggle-dark-mode"
const external_react_toggle_dark_mode_namespaceObject = require("react-toggle-dark-mode");
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/NavigationBar.tsx








// Source: https://github.com/vercel/next.js/issues/4515#issuecomment-810635574
const DynamicDarkModeSwitch = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/NavigationBar.tsx -> " + "react-toggle-dark-mode"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_toggle_dark_mode_namespaceObject.DarkModeSwitch, {
            checked: false,
            onChange: ()=>undefined
        })
});
const linkStyle = "text-sm font-medium text-black dark:text-white opacity-70 hover:opacity-100";
const iconStyle = "h-5 w-5";
const transitionStyle = "duration-300";
function NavigationBar() {
    const { 1: setMounted  } = (0,external_react_.useState)(false);
    const { resolvedTheme , setTheme  } = (0,external_next_themes_.useTheme)();
    const { 0: showBlur , 1: setShowBlur  } = (0,external_react_.useState)(false);
    // When mounted on client, show theme switcher
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    function handleDarkModeSwitch() {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else if (resolvedTheme === "light") {
            setTheme("dark");
        }
    }
    // Sticky Scroll Listener
    (0,external_react_.useEffect)(()=>{
        function handleScroll() {
            const position = window.scrollY;
            setShowBlur(position > 40);
        }
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: external_clsx_default()("sticky top-0 z-30 mb-10 bg-gray-50 dark:bg-gray-900", "transition-[background-color]", showBlur ? "bg-opacity-20 backdrop-blur dark:bg-opacity-20" : "bg-opacity-0 backdrop-blur-none dark:bg-opacity-0", transitionStyle),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "body",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "flex items-center justify-between space-x-3 py-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: linkStyle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.HomeIcon, {
                                        className: iconStyle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-grow"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/experiments",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: linkStyle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Experiments"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.BeakerIcon, {
                                        className: iconStyle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/journal",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: linkStyle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Journal"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.PencilIcon, {
                                        className: iconStyle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/projects",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: linkStyle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Projects"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.GiftIcon, {
                                        className: iconStyle
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "divider-y h-5"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: external_clsx_default()(linkStyle, "cursor-ne-resize"),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://twitter.com/ElyeesT/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Twitter account"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: iconStyle,
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fill: "none",
                                            d: "M0 0h24v24H0z"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: external_clsx_default()(linkStyle, "cursor-ne-resize"),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://github.com/kooya3/",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "GitHub account"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: iconStyle,
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "divider-y h-5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(DynamicDarkModeSwitch, {
                            className: linkStyle,
                            checked: resolvedTheme === "dark",
                            onChange: handleDarkModeSwitch,
                            size: 20
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: external_clsx_default()("divider-x transition-opacity", transitionStyle, showBlur ? "opacity-100" : "opacity-0")
                })
            ]
        })
    });
}


/***/ }),

/***/ 8155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ PaletteProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@palette.dev/browser"
const browser_namespaceObject = require("@palette.dev/browser");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./lib/palette.tsx



(0,browser_namespaceObject.init)({
    key: "clawueapo0003mg0863s1eak9",
    plugins: [
        (0,browser_namespaceObject.events)(),
        (0,browser_namespaceObject.network)(),
        (0,browser_namespaceObject.measure)(),
        (0,browser_namespaceObject.profiler)()
    ]
});
// Profile page load
//   * Sample every 10ms
//   * Start the profiler immediately
//   * Measure page load
if (false) {}
// A utility for debouncing frequent events, making them easier to profile
let timeoutId;
const debounce = (start, stop)=>{
    return ()=>{
        if (typeof timeoutId === "number") {
            clearTimeout(timeoutId);
        } else {
            start();
        }
        timeoutId = setTimeout(()=>{
            stop();
            timeoutId = undefined;
        }, 1000);
    };
};
const PaletteProvider = ({ children  })=>{
    const debounceProfiler = (0,external_react_.useRef)(debounce(()=>{
        browser_namespaceObject.profiler.start({
            sampleInterval: 10,
            maxBufferSize: 100000
        });
    }, ()=>{
        browser_namespaceObject.profiler.stop();
    }));
    // Profile page interactions
    //   * Collect samples every 10ms
    //   * Start the profiler on click, keypress, pointermove, and wheel events
    //   * Stop the profiler after 1s of inactivity
    (0,external_react_.useEffect)(()=>{
        addEventListener("click", debounceProfiler.current);
        addEventListener("keypress", debounceProfiler.current);
        addEventListener("pointermove", debounceProfiler.current);
        addEventListener("wheel", debounceProfiler.current);
        return ()=>{
            removeEventListener("click", debounceProfiler.current);
            removeEventListener("keypress", debounceProfiler.current);
            removeEventListener("pointermove", debounceProfiler.current);
            removeEventListener("wheel", debounceProfiler.current);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9316);
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fathom_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inspx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3506);
/* harmony import */ var inspx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inspx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2658);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2980);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(999);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var _lib_palette__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8155);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_10__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














function MyApp({ Component , pageProps  }) {
    // Fathom Analytics
    // Source: https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fathom_client__WEBPACK_IMPORTED_MODULE_3__.load("LTCIFPOU", {
            url: "https://rook.alexandru.so/script.js",
            includedDomains: [
                "alexandru.so"
            ]
        });
        function onRouteChangeComplete() {
            fathom_client__WEBPACK_IMPORTED_MODULE_3__.trackPageview();
        }
        // Record a pageview when route changes
        router.events.on("routeChangeComplete", onRouteChangeComplete);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChangeComplete);
        };
    }, []);
    const hideGradient = router.route.includes("journal");
    const showFooter = router.route !== "/";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_palette__WEBPACK_IMPORTED_MODULE_11__/* .PaletteProvider */ .X, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
            attribute: "class",
            storageKey: "app-theme",
            defaultTheme: "system",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((inspx__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mx-auto max-w-screen-lg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("rounded-full bg-gradient-to-r", "dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60", "from-blue-300 via-cyan-300 to-green-300 opacity-70", "-z-50 aspect-square w-full max-w-screen-lg blur-3xl filter", "bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]", hideGradient ? "absolute" : "fixed")
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        className: "body",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipProvider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: showFooter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipProvider, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_10__.Analytics, {})
                ]
            })
        })
    });
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

/***/ 9316:
/***/ ((module) => {

module.exports = require("fathom-client");

/***/ }),

/***/ 3506:
/***/ ((module) => {

module.exports = require("inspx");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [399,676,664,152,968], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();