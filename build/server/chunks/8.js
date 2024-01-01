"use strict";
exports.id = 8;
exports.ids = [8];
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

/***/ 8:
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
        blockquote: "blockquote",
        strong: "strong",
        pre: "pre",
        code: "code",
        ol: "ol",
        li: "li",
        ul: "ul",
        a: "a"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "dynamic-programming-for-dummies"\ntitle: "Dynamic Programming for Dummies"\ndescription: "Careful brute force"\npublishedAt: "2021-10-08"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Intro"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "What is dynamic programming?"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "it refers to simplifying a complicated problem by breaking it down into simpler sub-problems in a recursive manner"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This might sound rather vague and a bit intimidating. My definition?"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "careful brute force"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In class we are used to learning about all sorts of algorithms like binary search where memorization of the algorithm can be favored in exchange of understanding the underlying concept. Often times, I hear my friends growl whenever we bump into a DP/recursion problem while doing interview prep. I hope that with this article I can shed some light behind dynamic programming and teach you how you can intuitively deconstruct a problem and solve it!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Fibonacci Sequence"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There’s no better way to explain DP than using the Fibonacci Sequence. To give you a quick refresher, the sequence is constructed such that each number is the sum of the two preceding ones."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dynamic-programming-for-dummies/1.png",
                height: "272px",
                width: "640px",
                className: "img-invert"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Recursive Implementation"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "The first step to DP is to figure out sub-problems."
                    }),
                    " We are going to take a top-down approach where we break the initial problem into smaller and smaller subproblems that become effectively easier to solve. In the case of Fibonacci, we will start with the number we want to find and trickle our way downwards to the base case, which is the first two elements of the sequence, 1 & 1."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "I’ve took the liberty and implemented the aforementioned solution in python."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-python",
                    children: "def fib(n):\n  if n <= 2:\n    return 1\n  else:\n    return fib(n - 1) + fib(n - 2)\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It looks fairly straightforward, right?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before we move any further, we need to take a step back and analyze the time complexity or as it is called in this case, the recurrence. This can be rather tricky to calculate, therefore approximating the result is perfectly fine."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dynamic-programming-for-dummies/2.png",
                height: "413px",
                width: "640px",
                className: "img-invert"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Hmm \uD83E\uDD14, looks like the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "fib"
                    }),
                    " function has ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "exponential time"
                    }),
                    ". Let me explain! The problem is that we end up calculating a bunch of the same values multiple times."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dynamic-programming-for-dummies/3.png",
                height: "447px",
                width: "640px",
                className: "img-invert"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Memoized Recursive Implementation"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The beauty of DP is that it can shrink down the exponential time complexity of a brute force algorithm to polynomial (≈ linear) time. ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "The second step of DP is to memoize and reuse those subproblems."
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Going back to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "fib"
                    }),
                    " implementation this is fairly easy to implement by using a dictionary that will keep track of solutions that have been already solved."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-python",
                    children: "memo = {}\ndef fib(n):\n  if n in memo:\n    return memo[n]\n  if n <= 2:\n    f = 1\n  else:\n    f = fib(n - 1) + fib(n - 2)\n  memo[n] = f\n  return f\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Now, calculating the time complexity comes down to multiplying the number of subproblems by the amount of time per subproblem (no need to count memoized solutions). This quick optimization reduced the complexity from exponential time to linear time, ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "O(n)"
                    }),
                    ". We have ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "n"
                    }),
                    " subproblems (n fibonacci numbers that we need to calculate and for each one of them it takes ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "O(1)"
                    }),
                    " to compute."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "time complexity = subproblems * (time complexity / subproblem)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dynamic-programming-for-dummies/4.png",
                height: "495px",
                width: "640px",
                className: "img-invert"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Iterative Implementation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Some people prefer to take an iterative approach instead of recursion. Everyone has their own style of solving problems and writing code, so I also wanted to briefly mention the iterative solution for DP. In this case, you would want to take a bottom-up approach and create a DP table that will memoize the previous solutions."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In this implementation of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "fib"
                    }),
                    " I’m only memoizing the last 2 numbers of the sequence since that is all we need."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-python",
                    children: "def fib(n):\n  a, b = 1, 1\n\n  for i in range(n):\n    a, b = b, a + b\n\n  return a\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Conclusion"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To sum up DP in 5 “easy steps” here’s the battle tested approach that will work for any problem:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "define and split into subproblems"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "guess part of the solution (this will only become more clear with time)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "relate subproblems"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "recurse and memoization (reuse subproblems)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "solve original problem"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "I hope that from now on you will approach DP problems with joy and excitement!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Citations"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This article wouldn’t have been possible without the following materials:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://en.wikipedia.org/wiki/Dynamic_programming",
                            children: "Wikipedia — Dynamic Programming"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://www.youtube.com/watch?v=OQ5jsbhAv_M",
                            children: "Dynamic Programming I: Fibonacci, Shortest Paths"
                        })
                    }),
                    "\n"
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