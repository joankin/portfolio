"use strict";
exports.id = 127;
exports.ids = [127];
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

/***/ 6127:
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
        ul: "ul",
        li: "li",
        code: "code",
        pre: "pre",
        a: "a"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "recreate-apples-breathing-animation-in-swiftui-part-1"\ntitle: "Recreate Apple’s Breathing Animation in SwiftUI - Part 1"\ndescription: "Learn SwiftUI core concepts while recreating Apple\'s famous Breathe UI"\npublishedAt: "2020-05-05"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/1.png",
                width: "1200",
                height: "674"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You may have seen and played around with the breathing app from the Apple watch. This features a series of effects and transitions that result in a stunning experience."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/2.gif",
                width: "300",
                height: "515"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Today, we are going to recreate this using SwiftUI’s basic modifiers in just under 100 lines of code!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We’ll be breaking down the UI into the following:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "FlowerView"
                            }),
                            ": a reusable component that creates the flower and handles all the animation logic"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "iOS ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "ContentView"
                            }),
                            ": a control room for manipulating the states of the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "FlowerView"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Note: Make sure you are using Dark Mode when testing because that is the environment where the animation is going to look most stunning."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Creating FlowerView"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Let’s start off by creating a new SwiftUI Xcode project along with a view called ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    " and add all of the necessary properties:"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "isMinimized"
                            }),
                            ": a boolean value that keeps track of the animation’s state"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "numberOfPetals"
                            }),
                            ": this variable is a Double in order to animate the addition/removal of petals"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "animationDuration"
                        })
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "circleDiameter"
                            }),
                            ": represents the size of each petal"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "absolutePetalAngle"
                            }),
                            ": the circle circumference divided by the number of petals results in the absolute angle each petal will be rotated"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You will also need to update ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView_Previews"
                    }),
                    " and initialize your binding properties with constants for now."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: 'struct FlowerView: View {\n  @Binding var isMinimized: Bool\n  @Binding var numberOfPetals: Double\n\n  /// The duration of any animation performed to the flower.\n  @Binding var animationDuration: Double\n\n  /// The diameter of each petal.\n  let circleDiameter: CGFloat = 80\n\n  /// The color of each petal. It is recommended to also use opacity to create an overlap effect.\n  var color = Color(UIColor.cyan).opacity(0.6)\n\n  /// This represents the absolute amount of rotation needed for each petal\n  private var absolutePetalAngle: Double {\n    return 360 / numberOfPetals\n  }\n\n  var body: some View {\n    Text("Hello, World!")\n  }\n}\n\nstruct FlowerView_Previews: PreviewProvider {\n  static var previews: some View {\n    FlowerView(\n      isMinimized: .constant(false),\n      numberOfPetals: .constant(5),\n      animationDuration: .constant(4.2)\n    )\n  }\n}\n'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Onwards to the body!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/3.png",
                width: "1183",
                height: "798"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The flower is made by adding multiple circles that rotate and intersect around the center point of the flower. We will create this by adding an array of circles with the help of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ForEach"
                    }),
                    " and embed it in a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ZStack"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The magic part is that we are going to use the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".rotationEffect()"
                    }),
                    " modifier and rotate the circle around it’s leading anchor, which is the center of the flower."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The anchor point is the part of the view that should be fixed in place as the center of the rotation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "var body: some View {\n  ZStack() {\n    ForEach(0..<Int(numberOfPetals), id: \\.self) {\n      Circle()\n        .frame(width: self.circleDiameter, height: self.circleDiameter)\n        .foregroundColor(self.color)\n\n        // The color of the petal. It is recommended to also use opacity to create an overlap effect.\n        .foregroundColor(Color(UIColor.cyan).opacity(0.6))\n\n        // Rotate the petal around it's leading anchor to create the flower\n        .rotationEffect(.degrees(self.absolutePetalAngle * Double($0)),\n                        anchor: .leading)\n    }\n  }\n  // Center the view along the center of the Flower\n  .offset(x: isMinimized ? 0 : circleDiameter / 2)\n\n  // create a frame around the flower,\n  // helful for adding padding around the whole flower\n  .frame(width: circleDiameter * 2, height: circleDiameter * 2)\n\n  // smoothly animate any change to the Flower\n  .animation(.easeInOut(duration: animationDuration))\n\n  // This modifiers are optional\n  // The purpose of the code bellow is to align the orientation to perfectly match Apple's implementation\n  .rotationEffect(.degrees(-60))\n  .rotation3DEffect(.degrees(180), axis: (x: 0, y: 1, z: 0))\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/4.png",
                width: "917",
                height: "850"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Now we need to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".offset()"
                    }),
                    " the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ZStack"
                    }),
                    " by the radius of the circle since we want to center the view based on the center of the flower and not the center of our initial circle."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Before we move on, you will also need to add the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".animation()"
                    }),
                    " modifier to make our views animated whenever we change a binding property."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Update ContentView"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now we will work on the screen that lets us manipulate the flower properties and toggle the animation state. For the sake of simplicity and looks we are going to create a list and sections for each of our views:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "FlowerView"
                        })
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Slider for changing ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "numberOfPetals"
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Slider for changing the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "breathingDuration"
                            })
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Button for triggering the animation"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: 'struct ContentView: View {\n  @State private var numberOfPetals: Double = 5\n  @State private var isMinimized = false\n  @State private var animationDuration = 0.5\n\n  /// Duration of the breathing animation\n  @State private var breathDuration = 4.2\n\n  var body: some View {\n    List {\n      // Flower\n      Section {\n        FlowerView(\n          isMinimized: $isMinimized,\n          numberOfPetals: $numberOfPetals,\n          animationDuration: $animationDuration\n        )\n\n        // align the flower nicely\n        .frame(maxWidth: .infinity)\n        .padding(.vertical, 32)\n      }\n\n      // Number of Petals\n      Section(header: Text("Number of Petals: \\(Int(numberOfPetals))")) {\n        Slider(value: $numberOfPetals, in: 2...10) { onEditingChanged in\n          // detect when interaction with the slider is done and engage snapping to the closest petal\n          if !onEditingChanged {\n            self.numberOfPetals = self.numberOfPetals.rounded()\n          }\n        }\n      }\n\n      // Breathing Duration\n      Section(header: Text("Breathing Duration: \\(breathDuration)")) {\n        Slider(value: $breathDuration, in: 0...10, step: 0.1)\n      }\n\n      // Breath Button\n      Section {\n        // ...\n      }\n    }\n\n    // making the list look nice :]\n    .listStyle(GroupedListStyle())\n    .environment(\\.horizontalSizeClass, .regular)\n  }\n}\n'
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The first slider, for manipulating ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "numberOfPetals"
                    }),
                    ", checks the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "onEditingChanged"
                    }),
                    " property and detects when the user finished dragging the slider. This allows us to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".round()"
                    }),
                    " the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "numberOfPetals"
                    }),
                    ", so we never end up with 2.5 petals or something similar."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Regarding the button, my implementation is a bit finicky and consists of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "DispatchQueues"
                    }),
                    ". The reason behind this is to immediately toggle ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "isMinimized"
                    }),
                    " after the flower finishes shrinking, making it expand back up."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Feel free to create your own implementation; omitting the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "DispatchQueue"
                    }),
                    " is perfectly fine."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: '// Breath Button\nSection {\n  Button(action: {\n    self.animationDuration = self.breathDuration\n    self.isMinimized.toggle()\n\n    DispatchQueue.main.asyncAfter(deadline: .now() + self.animationDuration) {\n      self.isMinimized.toggle()\n    }\n  }) {\n    Text("Breath")\n      .frame(maxWidth: .infinity)\n  }\n}\n.buttonStyle(BorderlessButtonStyle())\n.foregroundColor(.white)\n.listRowBackground(Color(UIColor.systemBlue))\n'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/5.webp",
                width: "250",
                height: "498"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Breathing Animation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "What we’ve all been waiting for! This part is a bit more tricky, but don’t worry — SwiftUI makes it a breeze."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/6.gif",
                width: "640",
                height: "422"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We will split up the animation into three parts:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The rotation of the flower view"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The scale of the flower view"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The rotation of each individual petal"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To achieve the first two parts, it’s quite easy. We will use ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".rotationEffect()"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".scaleEffect()"
                    }),
                    " modifiers along with ternary operators to change the values depending on the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "isMinimized"
                    }),
                    " state."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Add this above the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".animation()"
                    }),
                    " modifier from ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "\nstruct FlowerView: View {\n  // ...\n  var body: some View {\n    // ...\n    .rotationEffect(.degrees(isMinimized ? -90 : 0))\n    .scaleEffect(isMinimized ? 0.3 : 1)\n\n    // smoothly animate any change to the Flower\n    .animation(.easeInOut(duration: animationDuration))\n\n    // ...\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/7.gif",
                width: "640",
                height: "432"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To create the effect of all the petals coming to the center, it is as simple as changing the anchor point to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".center"
                    }),
                    " from the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".rotationEffect()"
                    }),
                    " of each petal."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct FlowerView: View {\n  // ...\n  var body: some View {\n    ZStack() {\n      ForEach(0..<Int(numberOfPetals), id: \\.self) {\n        Circle() // Petal\n          // ...\n          // rotate the petal around it's leading anchor to create the flower\n          .rotationEffect(.degrees(self.absolutePetalAngle * Double($0)),\n                          anchor: self.isMinimized ? .center : .leading)\n      }\n    }\n    // ...\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Voil\xe0!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We have written less than 100 lines of code, and we already have something that looks incredibly similar to our target."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/8.gif",
                width: "640",
                height: "433"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "One more thing…"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There is one thing we could do to further improve this animation. If you look closely, whenever we add or remove a petal it instantly appears on the screen. Let’s try to fix this."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To quickly solve this issue, we are going to always have on display one extra petal that is ready to animate its opacity. There is a tiny bit of math involved for calculating the alpha based on the petal’s position, but don’t worry, I already have everything figured out for you."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Let’s make these changes to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "FlowerView"
                    }),
                    ". Make sure to modify the range of the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ForEach"
                    }),
                    " from ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "0<Int(numberOfPetals)"
                    }),
                    " to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "0…Int(numberOfPetals)"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct FlowerView: View {\n  // ...\n  /**\n    Calculates the opacity for the petal that is being added/removed.\n    This is achieved by calculating the amount of travel in **degrees**\n    that the petal needs to travel in order to be completely added\n    to the flower and comparing it with the **nextAngle**.\n    Afterwards converting this to a 0 to 1 scale.\n    */\n  private var opacityPercentage: Double {\n    let numberOfPetals = self.numberOfPetals.rounded(.down)\n    let nextAngle = 360 / (numberOfPetals + 1)\n    let currentAbsoluteAngle = 360 / numberOfPetals\n\n    let totalTravel = currentAbsoluteAngle - nextAngle\n    let currentProgress = absolutePetalAngle - nextAngle\n    let percentage = currentProgress / totalTravel\n\n    return 1 - percentage\n  }\n\n  var body: some View {\n    ZStack() {\n      /**\n        Intentionally showing an extra petal by using 0...Count, instead of 0..<Count\n        This allows for the following actions:\n          - Instantly animate opacity change to the extra petal\n          - Snap to the next or current petal\n        */\n      ForEach(0...Int(numberOfPetals), id: \\.self) {\n        Circle() // Petal\n          //...\n\n          // animate opacity only to the petal being added/removed\n          .opacity($0 == Int(self.numberOfPetals) ? self.opacityPercentage : 1)\n      }\n    }\n    // ...\n  }\n}\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Let’s also add to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ContentView"
                    }),
                    " a dedicated ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "petalDuration"
                    }),
                    " property that is intended only for this subtle animation. To make sure this works properly, you will need to dynamically switch between ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "breathDuration"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "petalDuration"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-swift",
                    children: "struct ContentView: View {\n  // ...\n  @State private var animationDuration = petalDuration\n\n  /// Duration of addition/removal animation for petals\n  static let petalDuration = 0.5\n\n  var body: some View {\n    List {\n      // ...\n      // Breath Button\n      Section {\n        Button(action: {\n          self.animationDuration = self.breathDuration\n          self.isMinimized.toggle()\n\n          DispatchQueue.main.asyncAfter(deadline: .now() + self.animationDuration) {\n            self.isMinimized.toggle()\n          }\n\n          // Add this\n          DispatchQueue.main.asyncAfter(deadline: .now() + 2 * self.animationDuration) {\n            self.animationDuration = ContentView.petalDuration\n          }\n        }) // ...\n      }\n    }\n  }\n}\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/recreate-apples-breathing-animation-in-swiftui-part-1/9.gif",
                width: "640",
                height: "432"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Conclusion"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "I made this project to demonstrate how simple it is to get started with SwiftUI and animations. This crazy amount of power comes from the functional programming paradigm and data bindings that work in perfect harmony to keep your code updated and liquid-smooth!"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you want to go even further with this project, you can check out the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/journal/recreate-apples-breathing-animation-in-swiftui-part-2",
                        children: "second part"
                    }),
                    " of this tutorial, where we explore how to create the bleeding blur effect and talk about view transitions."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you are only interested in the source code, here’s the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/Pondorasti/WatchOSBreathingAnimation",
                        children: "GitHub repo"
                    }),
                    "."
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