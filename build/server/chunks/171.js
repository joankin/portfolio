"use strict";
exports.id = 171;
exports.ids = [171];
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

/***/ 4171:
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
        a: "a",
        ol: "ol",
        li: "li",
        code: "code",
        pre: "pre",
        ul: "ul"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "recreate-apples-breathing-animation-in-swiftui-part-2"\ntitle: "Recreate Apple’s Breathing Animation in SwiftUI - Part 2"\ndescription: "Explore how to create the blur effect that happens when you start breathing"\npublishedAt: "2020-05-06"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/1.png",
                alt: "Blur-fade effect",
                caption: "Blur-fade effect",
                width: "1031",
                height: "669"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you are interested in how we created the flower and breathing animation, you can check out the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/journal/recreate-apples-breathing-animation-in-swiftui-part-1",
                        children: "first part"
                    }),
                    " of this tutorial."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To achieve this stunning effect, we are going to split the problem into two parts. We will need to do the following two things:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a mask around the flower view"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a blur-fade effect"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you are a bit confused about what we are doing and why, just hold on for a second. It will start to make a lot of sense near the end."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Create a Mask Around the Flower View"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You would think that this is relatively easy — just add a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".background()"
                    }),
                    " modifier to the flower view and call it a day, but…"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/2.png",
                alt: "Mask using background modifier",
                caption: "Mask using background modifier",
                width: "1087",
                height: "671"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As you can see, this doesn’t quite solve the problem. Because the flower view is composed of multiple circles, the simplest way to create a background for the flower view would be with a whole other flower view that is in sync with the animation."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Let’s implement this by embedding our original ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    " in a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ZStack"
                    }),
                    " and add the secondary ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    " that acts as a background. Make these changes to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ContentView"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct ContentView: View {\n  // ...\n  var body: some View {\n    List {\n      // Flower\n      Section {\n        ZStack {\n          // This FlowerView creates a mask around the Main FlowerView\n          FlowerView(\n            isMinimized: $isMinimized,\n            numberOfPetals: $numberOfPetals,\n            animationDuration: $animationDuration,\n            color: Color(UIColor.black)\n          )\n\n          // Main FlowerView\n          FlowerView(\n            isMinimized: $isMinimized,\n            numberOfPetals: $numberOfPetals,\n            animationDuration: $animationDuration\n          )\n        }\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // ...\n    }\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/3.gif",
                alt: "Side by side example of animated flowers",
                caption: "Side by side example",
                width: "640",
                height: "396"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Blur-Fade Effect"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If we look closely, the blur-fade animation has three key points:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Blur effect"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Opacity change from 1 to 0"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Lagging behind compared to the original shrinking animation"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/4.gif",
                alt: "BlurFade Effect",
                caption: "BlurFade Effect",
                width: "640",
                height: "419"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "It should come as no surprise to you that we are going to achieve this by adding another ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    " to the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ZStack"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This time we are going to hide and show our third ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    " based on the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "isMinimized"
                    }),
                    " property and create a custom transition modifier that should create the blur-fade effect when shrinking."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Create a new Swift file or add this after ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ContentView"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "extension AnyTransition {\n  static var blurFade: AnyTransition {\n    get {\n      AnyTransition.modifier(\n        active: BlurFadeModifier(isActive: true),\n        identity: BlurFadeModifier(isActive: false)\n      )\n    }\n  }\n}\n\nstruct BlurFadeModifier: ViewModifier {\n  let isActive: Bool\n\n  func body(content: Content) -> some View {\n    content\n      .scaleEffect(isActive ? 1.5 : 1) // lagging behind effect\n      .blur(radius: isActive ? 8 : 0)\n      .opacity(isActive ? 0 : 0.7)\n  }\n}\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Almost done! Now let’s add the final ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    ". We will also create a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "fadeDuration"
                    }),
                    " property that is based on the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "breathingAnimation"
                    }),
                    " duration."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Note that we are using an asymmetric transition because we don’t want the blur-fade effect both ways."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct ContentView: View {\n  // ...\n  /// Duration of the BlurFade transition based on the **breathingAnimation**\n  private var fadeDuration: Double {\n    return breathDuration * 0.6\n  }\n\n  var body: some View {\n    List {\n      Section {\n        // Flower\n        ZStack {\n          if !isMinimized { // second lil' hack\n            FlowerView(\n              isMinimized: $isMinimized,\n              numberOfPetals: $numberOfPetals,\n              animationDuration: $animationDuration\n            ).transition(\n              AnyTransition.asymmetric(\n                insertion: AnyTransition.opacity.animation(Animation.default.delay(animationDuration)),\n                removal: AnyTransition.blurFade.animation(Animation.easeIn(duration: fadeDuration))\n              )\n              /**\n                General Observation - use real devices for best results\n                Asymmetric Transitions are sometimes buggy, this includes:\n                  - animationDuration is not always updated prior to a change\n                  - the removal transition is used for an insertion\n              */\n            )\n          }\n\n          // ...\n        }\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // ...\n    }\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-2/5.gif",
                alt: "Final product showcase",
                caption: "Final product",
                width: "1280",
                height: "720"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Conclusion"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As you can see, by using simple built-in shapes and animations, we managed to compose a pretty complex animation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you are feeling brave enough, now I encourage you to try and make your own animations! PS: Make sure you tweet about it and let me know."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Here’s the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/Pondorasti/WatchOSBreathingAnimation",
                        children: "GitHub repo"
                    }),
                    " with the complete project."
                ]
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