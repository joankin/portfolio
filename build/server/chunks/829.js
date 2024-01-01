"use strict";
exports.id = 829;
exports.ids = [829];
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

/***/ 6829:
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
        code: "code",
        pre: "pre",
        ol: "ol",
        li: "li"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "custom-paging-ui-in-swiftui"\ntitle: "Custom Paging UI in SwiftUI"\ndescription: "Create animated index views with the new PageTabViewStyle"\npublishedAt: "2020-08-03"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/custom-paging-ui-in-swiftui/1.jpeg",
                alt: "",
                width: "700",
                height: "514"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "SwiftUI 2 introduced a new ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "TabView"
                    }),
                    " style called ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "PageTabViewStyle"
                    }),
                    " that enables developers to easily create horizontal Pagers (aka Paging) with dots at the bottom to show users where they are. This is the equivalent of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "UIPageViewController"
                    }),
                    " from UIKit."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Today, we will cover how to use the new style for ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "TabView"
                    }),
                    " and how to create a custom ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "IndexView"
                    }),
                    " component."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/custom-paging-ui-in-swiftui/2.gif",
                alt: "Collection of animations",
                caption: "Collection of animations",
                width: "800",
                height: "364"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Getting Started"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Using the new API is as simple as setting the new ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "PageTabViewStyle"
                    }),
                    ":"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct ContentView: View {\n\n  // MARK: - Private Properties\n\n  @State private var currentIndex = 0\n  private let colors: [Color] = [.red, .blue, .green, .yellow]\n\n  // MARK: - Body\n\n  var body: some View {\n    TabView(selection: $currentIndex) {\n      ForEach(0..<colors.count, id: \\.self) { index in\n        colors[index]\n          .tag(index)\n      }\n    }\n    .tabViewStyle(PageTabViewStyle(indexDisplayMode: .always))\n  }\n}\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Here, I have an array of colors — with each color being a page — and I am also tagging every ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Color"
                    }),
                    " view with its desired index. The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "TabView"
                    }),
                    " initializer has a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "selection"
                    }),
                    " binding that represents the current page."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/custom-paging-ui-in-swiftui/3.png",
                alt: "Collection of paging animations",
                caption: "Collection of animations",
                width: "700",
                height: "356"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A couple of things to keep in mind:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The paging dots are white and translucent. Therefore, if your background is also white, you won’t see them (tested on iOS/Xcode Beta 3)."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The contents of the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "TabView"
                            }),
                            " cannot be drawn over the safe area insets (Tested on iOS/Xcode Beta 3)."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Creating a Custom IndexView"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Now that we have the basics covered, we can quickly create any custom component to represent the current page and update it accordingly with our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "currentIndex"
                    }),
                    " state property."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We are going to take a stab at making a more dynamic version of the system dots. This index component will present at most three dots and animate the insertion/removal as you swipe through the pages."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/custom-paging-ui-in-swiftui/4.png",
                width: "350",
                height: "174"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct Fancy3DotsIndexView: View {\n\n  // MARK: - Public Properties\n\n  let numberOfPages: Int\n  let currentIndex: Int\n\n\n  // MARK: - Drawing Constants\n\n  private let circleSize: CGFloat = 16\n  private let circleSpacing: CGFloat = 12\n\n  private let primaryColor = Color.white\n  private let secondaryColor = Color.white.opacity(0.6)\n\n  private let smallScale: CGFloat = 0.6\n\n\n  // MARK: - Body\n\n  var body: some View {\n    HStack(spacing: circleSpacing) {\n      ForEach(0..<numberOfPages) { index in // 1\n        if shouldShowIndex(index) {\n          Circle()\n            .fill(currentIndex == index ? primaryColor : secondaryColor) // 2\n            .scaleEffect(currentIndex == index ? 1 : smallScale)\n\n            .frame(width: circleSize, height: circleSize)\n\n            .transition(AnyTransition.opacity.combined(with: .scale)) // 3\n\n            .id(index) // 4\n        }\n      }\n    }\n  }\n\n\n  // MARK: - Private Methods\n\n  func shouldShowIndex(_ index: Int) -> Bool {\n    ((currentIndex - 1)...(currentIndex + 1)).contains(index)\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "That’s quite a bit of code, so let’s go through it step by step:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "ForEach"
                            }),
                            " and ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "shouldShowIndex()"
                            }),
                            " — Display only three dots or less (for the current page and its adjacent pages)."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".fill()"
                            }),
                            " and ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".scale()"
                            }),
                            " — Apply different styling to showcase which ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Circle"
                            }),
                            " is focused."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".transition()"
                            }),
                            " — Animate the insertion and removal of each ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Circle"
                            }),
                            " with opacity and scale."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".id(index)"
                            }),
                            " — Create unique ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Circle"
                            }),
                            " instances for each index."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Final Step"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Now we just need to update ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ContentView"
                    }),
                    " to make use of the new ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Fancy3DotsIndexView"
                    }),
                    ":"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Add an implicit animation for every change that happens to the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "currentIndex"
                            }),
                            " binding."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Overlay the new ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "IndexView"
                            }),
                            " component and plug in the necessary properties."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct ContentView: View {\n\n  // ...\n\n  var body: some View {\n    TabView(selection: $currentIndex.animation()) { // 1\n      ForEach(0..<colors.count, id: \\.self) { index in\n        colors[index]\n          .tag(index)\n      }\n    }\n    .tabViewStyle(PageTabViewStyle(indexDisplayMode: .always))\n    .overlay(Fancy3DotsIndexView(numberOfPages: colors.count, currentIndex: currentIndex)) // 2\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Voil\xe0!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/custom-paging-ui-in-swiftui/5.gif",
                alt: "Final product animation",
                caption: "Final product",
                width: "800",
                height: "206"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Conclusion"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Making animations in SwiftUI was already insanely easy, and now with the new ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "TabView"
                    }),
                    " style, you can create any kind of index view! Stay tuned for my upcoming articles!"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you are feeling brave enough, I encourage you to try to make your own animations!"
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