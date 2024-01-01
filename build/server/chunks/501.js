"use strict";
exports.id = 501;
exports.ids = [501];
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

/***/ 6501:
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
        h3: "h3",
        code: "code",
        pre: "pre",
        ul: "ul",
        li: "li"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: 'slug: "dns-ad-blocker-with-pi-hole-and-docker"\ntitle: "DNS Ad-blocker with Pi-hole and Docker"\ndescription: "All-in-one network solution for blocking ads"\npublishedAt: "2021-12-09"'
            }),
            "\n",
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "What’s Pi-hole?"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://pi-hole.net/",
                        children: "Pi-hole"
                    }),
                    " is an all-in-one network solution for blocking ads. By sitting as a middle-man between your router and devices it can accept all traffic as a gateway that decides what domains are allowed."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dns-ad-blocker-with-pi-hole-and-docker/dashboard.webp",
                width: "1468",
                height: "1261"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "The 4 pillars of Pi-hole"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "\uD83D\uDCE1 Network Wide Protection"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Instead of installing browser extensions or blockers for each individual device, you can let your Pi-hole have complete governance over your network. Therefore all of the devices connected to this network will be protected without the need of installing any additional software!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "\uD83D\uDEAB Block in-app ads"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Sometimes tech companies get smart and put ads in unconventional places, like mobile apps and Smart TVs. In some cases, like a TV, installing a local ad-blocker is not even an opportunity. Yet again, Pi-hole comes to the rescue regardless of hardware or OS."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "⚡️ Improve network latency"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Since Pi-hole can block the HTTP query at a DNS level, filthy javascript trackers won’t even reach your browser. This results in less packets and bandwidth usage. It might not be immediately noticeable, but significant in the long run."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "\uD83E\uDD13 Monitors stats"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For all the “nerds” out there, Pi-hole comes with a full-fledged and battle-tested dashboard. It acts as a hub to monitor network traffic, permitted/blocked domains, clients, etc."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Getting Started"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Pi-hole officially supports a variety of ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.pi-hole.net/main/prerequisites/",
                        children: "linux distributions"
                    }),
                    ", but by leveraging ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://www.docker.com/",
                        children: "docker"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.docker.com/compose/",
                        children: "docker-compose"
                    }),
                    " we are going to automate installation & configuration for any platform."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Note: For a one step automated install and manual configuration you can check out the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/pi-hole/pi-hole/#one-step-automated-install",
                        children: "official guide"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Docker"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Let’s start by creating a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker-compose.yml"
                    }),
                    " file that will take care of the configuration. Luckily the vibrant community from Pi-hole already has us covered with a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/pi-hole/docker-pi-hole/#running-pi-hole-docker",
                        children: "docker image"
                    }),
                    " ready for distribution."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-yml",
                    children: 'version: "3"\n\nservices:\n  pihole:\n    container_name: pihole\n    image: pihole/pihole:latest\n    ports:\n      - "53:53/tcp"\n      - "53:53/udp"\n      - "67:67/udp"\n      - "80:80/tcp"\nenvironment:\n      TZ: "America/Los_Angeles"\n      WEBTHEME: "default-dark"\n      PIHOLE_DNS_: "1.1.1.1;1.0.0.1"\n      FTLCONF_REPLY_ADDR4: "192.168.0.143"\n      WEBPASSWORD: "${WEBPASSWORD}"\n    # Volumes store your data between container upgrades\n    volumes:\n      - "./etc-pihole/:/etc/pihole/"\n      - "./etc-dnsmasq.d/:/etc/dnsmasq.d/"\n    # Recommended but not required (DHCP needs NET_ADMIN)\n    # https://github.com/pi-hole/docker-pi-hole#note-on-capabilities\n    cap_add:\n      - NET_ADMIN\n    restart: unless-stopped\n'
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Most of the things are boilerplate, setting a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "container_name"
                    }),
                    " that acts as display name, getting the docker ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "image"
                    }),
                    ", and opening the right ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ports"
                    }),
                    " for communication between our container and the host. ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "volumes"
                    }),
                    " are used for persisting data across container upgrades."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "environment"
                    }),
                    " is one the most important keys that defines our settings. Let’s go over each one:"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "TZ"
                            }),
                            ": set a ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
                                children: "timezone"
                            }),
                            " to make sure logs are timestamped with your local time."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "WEBTHEME"
                            }),
                            ": set a user interface theme to use, options: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: '"default-dark" | "default-darker" | "default-light"'
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "PIHOLE_DNS_"
                            }),
                            ": set a DNS server that’s going to resolve all network queries. The default is Google, but here I’m manually changing it to Cloudfare."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "FTLCONF_REPLY_ADDR4"
                            }),
                            ": set your host’s LAN IP"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "WEBPASSWORD"
                            }),
                            ": set a password that allows you to access the dashboard. You can set it directly inline, or through an external ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".env"
                            }),
                            " file. For doing the latter, create a file named ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".env"
                            }),
                            " in the same directory and add the following line: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "WEBPASSWORD=helloworld"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The most important properties that are recommended to set are the last two. Everything else is optional, you can read more about it on their ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://github.com/pi-hole/docker-pi-hole/#running-pi-hole-docker",
                        children: "github"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Installation"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Beforehand, you will need to have installed on your machine ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker-compose"
                    }),
                    ". Running is as simple as navigating to the directory of your ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker-compose.yml"
                    }),
                    " and typing ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "docker compose up -d"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Post Install"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Journal_FancyImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                src: "/images/journal/dns-ad-blocker-with-pi-hole-and-docker/login.png",
                height: "1261px",
                width: "1468px"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In order to access the dashboard navigate to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "<FTLCONF_REPLY_ADDR4>/admin"
                    }),
                    ". Now that we’ve got our instance of Pi-hole running, the last step is to forward all traffic to it. Unfortunately, this topic is out of scope for this article. The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.pi-hole.net/main/post-install/",
                        children: "official documentation"
                    }),
                    " extensively covers how to configure your router to have DHCP clients use Pi-hole as their DNS server."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                children: "Voil\xe0!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Assuming that you have done your network setup, now you should have a dedicated ad-blocker for your whole household. In the past month since I’ve set this, Pi-hole has blocked 152 queries. This result means that a bit over 1% of my network traffic is made up of advertisement & trackers and has been all blocked automatically by my Pi-hole instance."
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