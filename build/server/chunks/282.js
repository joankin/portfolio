"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 6282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1151);
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        hr: "hr",
        h2: "h2",
        p: "p",
        em: "em",
        blockquote: "blockquote",
        a: "a",
        code: "code",
        pre: "pre",
        strong: "strong",
        ul: "ul",
        li: "li"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "rfid-hacking-101"\ntitle: "RFID Hacking 101"\ndescription: "Configuring a Proxmark 3 Easy from scratch"\npublishedAt: "2021-07-19"'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDCD6 Intro"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Opening the front entrance of your building? Unlocking a locker? Logging timecards?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this day and age, you are likely to be using an RFID tag. While many people consider them more convenient, I feel that it does open the room for more attacks since an RFID tag can be sniffed at any moment."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Anyway, I've been getting quite annoyed by the inefficiencies of asking my friend to come downstairs and open the door, whenever I'm stopping by his apartment. So, without further adieu I've got my hands on an Proxmark 3 Easy and started \"hacking\"."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    'At the time of writing, and probably for many years to come, Proxmark seemed like the go-to, community praised RFID tool for "hacking". As the name suggests, ',
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Easy"
                    }),
                    ", I've went with the cheaper knockoff that can still sniff, read and clone RFID tags, which perfectly satisfies my needs."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "⚙️ Setup"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                        children: [
                            "The installation steps are specific to macOS. Check ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://github.com/RfidResearchGroup/proxmark3#proxmark3-installation-and-overview",
                                children: "Github Repo"
                            }),
                            " for different operating systems."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Before doing anything remotely exciting, I had go through the tedious process of setting up everything. I've decided to use the proxmark repo from ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "RfidResearchGroup"
                    }),
                    ", since it felt like having a bit better of a Developer Experience (DX)."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "First steps, just download the repo through Homebrew and update an environment variable since I'm using a different platform (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Proxmark 3 Easy"
                    }),
                    " instead of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.em, {
                        children: "Proxmark 3"
                    }),
                    ")."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-shell",
                    children: "# ❗️ outdated ❗️\nbrew install proxmark3\nexport HOMEBREW_PROXMARK3_PLATFORM=PM3OTHER\n"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Seems easy enough, am I right? Fast forward ⏩ a couple of hours in the future, guess what? nothing is working. That's because newer version of the library expect you to set the destination platform through command option when doing the installation, which was completely undocumented at the time being \uD83D\uDE24."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-shell",
                    children: "brew install xquartz\nbrew tap RfidResearchGroup/proxmark3\nbrew install --with-generic proxmark3\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The only logical next step was to open a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/RfidResearchGroup/proxmark3/pull/1327#event-4920426283",
                        children: "PR"
                    }),
                    " and fix the docs myself \uD83D\uDCAB."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Alright, focus! We are almost there! In order for this to work, you will need the same version of firmware on your Proxmark and computer, which means that you are likely going to need to flash your device."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Start by holding the button on your Proxmark, and then plug it in using the port on the shorter side. Two lights should have flickered up, which means you have entered boot-loader mode."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If the 2 lights don't stay up after turning it on, it means that it is using a really old version that requires you to hold the button throughout the whole duration of flashing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once that, you can run the following command. It's really nice since it's an all-in-one script that auto detects your device and flashes both the bootrom and firmware to the latest version."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-shell",
                    children: "pm3-flash-all\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Pro Tip"
                    }),
                    ": If you want to see the USB serial connection for yourself, run ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ls /dev/tty*"
                    }),
                    ". My recently flashed Proxmark 3 Easy showed up as ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "/dev/tty.usbmodemiceman"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At this point, all the boring stuff is finally done!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDC7E Let’s get hacking"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-shell",
                    children: "hf mf chk --dump\nhf mf dump\nhf mf restore --1k --uid 4A6CE843 -k hf-mf-102FAB2A-key-3.bin -f hf-mf-102FAB2A-dump-2.bin\n"
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://github.com/RfidResearchGroup/proxmark3/blob/master/doc/cheatsheet.md",
                            children: "Command Cheat Sheet"
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "\uD83D\uDC4F Special Thanks"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://forum.dangerousthings.com/t/getting-started-with-proxmark3-on-mac/10156",
                            children: "Getting started with Proxmark3 on Mac"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://blog.kchung.co/rfid-hacking-with-the-proxmark-3/",
                            children: "RFID Hacking with The Proxmark 3"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://www.gavinjl.me/proxmark-3-cloning-a-mifare-classic-1k/",
                            children: "Proxmark 3, Cloning a Mifare Classic 1K"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://blog.securityinnovation.com/testing-the-security-of-nfc-and-rfid",
                            children: "Testing the security of NFC and RFID"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://www.drassal.net/wp/index.php/2021/02/19/investigating-blue-125khz-rfid-tags-from-china-bought-off-amazon-with-a-proxmark3/",
                            children: "Investigating Blue 125khz RFID tags"
                        })
                    }),
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

};
;