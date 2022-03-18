(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Navigation.js



const Navigation = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        onClick: props.toggleMenu,
        tabIndex: "0",
        className: "jsx-ad12edc1bf20373f",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "Home Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link home",
                        children: "HOME"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/about",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "About Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link about",
                        children: "ABOUT"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/albums",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "Albums Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link albums",
                        children: "ALBUMS"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/calendar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "Calendar Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link calendar",
                        children: "CALENDAR"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/media",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "Media Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link media",
                        children: "MEDIA"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/merchandise",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    title: "Merchandise Page",
                    className: "jsx-ad12edc1bf20373f",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-ad12edc1bf20373f" + " " + "menu-link merch",
                        children: "MERCH"
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ad12edc1bf20373f",
                children: "nav.jsx-ad12edc1bf20373f{height:calc(100vh - 50px);\nwidth:100vw;\nposition:absolute;\nleft:50%;\n-webkit-transform:translateX(-50%);\n-moz-transform:translateX(-50%);\n-ms-transform:translateX(-50%);\ntransform:translateX(-50%);\ntop:50px;\nbackground:#333;\ndisplay:grid;\ngrid-template-areas:\"1\" \"2\" \"3\" \"4\" \"5\" \"6\";\ngrid-template-rows: 1fr.....;\ngrid-template-columns:1fr;\nz-index:10}\n@media only screen and (orientation:landscape) {nav.jsx-ad12edc1bf20373f{grid-template-areas:\"topLeft topRight\" \"middleLeft middleRight\" \"bottomLeft bottomRight\";\ngrid-template-rows:1fr 1fr 1fr;\ngrid-template-columns:1fr 1fr}}\n.home.jsx-ad12edc1bf20373f{grid-area:1}\n.about.jsx-ad12edc1bf20373f{grid-area:2}\n.albums.jsx-ad12edc1bf20373f{grid-area:3}\n.calendar.jsx-ad12edc1bf20373f{grid-area:4}\n.media.jsx-ad12edc1bf20373f{grid-area:5}\n.merch.jsx-ad12edc1bf20373f{grid-area:6}\na.jsx-ad12edc1bf20373f{height:100%;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\ncolor:#fff;\nfont-family:'BenchNine', sans-serif}\na.jsx-ad12edc1bf20373f:hover{background:var(--main-orange);\ncolor:#333}"
            })
        ]
    }));
};
/* harmony default export */ const components_Navigation = (Navigation);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Header.js





const Header = ()=>{
    const { /*#__PURE__*/ 0: menuOpen , 1: setMenuOpen  } = (0,external_react_.useState)(false);
    const formatPageName = (name)=>{
        if (name.includes('[')) {
            let lastSlash = name.lastIndexOf('/');
            let newPageName = name.slice(1, lastSlash);
            return newPageName;
        } else {
            return name.slice('1');
        }
    };
    const pageName = (0,router_namespaceObject.useRouter)().route === '/' ? "home" : formatPageName((0,router_namespaceObject.useRouter)().route);
    let menuStatus = menuOpen ? 'close' : 'open';
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-80c0226889f6143" + " " + "header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: "jsx-80c0226889f6143" + " " + "orange"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                tabIndex: "0",
                "data-status": menuStatus,
                onClick: toggleMenu,
                className: "jsx-80c0226889f6143" + " " + "navMenu",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-80c0226889f6143" + " " + "line--1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-80c0226889f6143" + " " + "line--2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-80c0226889f6143" + " " + "line--3"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-80c0226889f6143" + " " + "siteInfo",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "jsx-80c0226889f6143",
                        children: pageName
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "jsx-80c0226889f6143" + " " + "siteUrl",
                        children: [
                            "bellflower",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "jsx-80c0226889f6143" + " " + "highlight",
                                children: "band"
                            }),
                            ".com"
                        ]
                    })
                ]
            }),
            menuOpen && /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {
                toggleMenu: toggleMenu
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "80c0226889f6143",
                children: ".header.jsx-80c0226889f6143{display:grid;\ngrid-template-rows:50px;\ngrid-template-columns:50px auto;\nbackground:#333;\nz-index:10;\nposition:fixed;\ntop:0;\nleft:50%;\n-webkit-transform:translateX(-50%);\n-moz-transform:translateX(-50%);\n-ms-transform:translateX(-50%);\ntransform:translateX(-50%);\nmax-width:900px}\n.navMenu.jsx-80c0226889f6143{grid-column-start:1;\ngrid-column-end:2;\ngrid-row-start:1;\ngrid-row-end:2;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-transition:all 1s ease;\ntransition:all 1s ease;\nwidth:50px}\n.navMenu.jsx-80c0226889f6143:hover{cursor:pointer}\n.navMenu.jsx-80c0226889f6143:hover, .navMenu.jsx-80c0226889f6143:active, .navMenu.jsx-80c0226889f6143:focus-visible{background:var(--main-orange)}\n.navMenu.jsx-80c0226889f6143:hover .line--1.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:hover .line--2.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:hover .line--3.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:active .line--1.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:active .line--2.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:active .line--3.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:focus-visible .line--1.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:focus-visible .line--2.jsx-80c0226889f6143, .navMenu.jsx-80c0226889f6143:focus-visible .line--3.jsx-80c0226889f6143{background:#fff}\n.line--1.jsx-80c0226889f6143, .line--2.jsx-80c0226889f6143, .line--3.jsx-80c0226889f6143{width:30px;\nheight:2px;\nbackground:var(--main-orange)}\n[data-status=\"open\"].jsx-80c0226889f6143 .line--1.jsx-80c0226889f6143, [data-status=\"open\"].jsx-80c0226889f6143 .line--3.jsx-80c0226889f6143{-webkit-transition:all .5s;\ntransition:all .5s;\ntransition-timing-function:cubic-bezier(.24, .66, .78, .58)}\n[data-status=\"open\"].jsx-80c0226889f6143 .line--2.jsx-80c0226889f6143{-webkit-transition:all .3s;\ntransition:all .3s}\n.line--2.jsx-80c0226889f6143{margin:5px 0}\n[data-status=\"close\"].jsx-80c0226889f6143 .line--1.jsx-80c0226889f6143{-webkit-transition:all .5s;\ntransition:all .5s;\n-webkit-transform:rotate(225deg);\n-moz-transform:rotate(225deg);\n-ms-transform:rotate(225deg);\ntransform:rotate(225deg);\nposition:relative;\ntop:1px}\n[data-status=\"close\"].jsx-80c0226889f6143 .line--2.jsx-80c0226889f6143{-webkit-transition:all 1s;\ntransition:all 1s;\ndisplay:none}\n[data-status=\"close\"].jsx-80c0226889f6143 .line--3.jsx-80c0226889f6143{-webkit-transition:all .5s;\ntransition:all .5s;\n-webkit-transform:rotate(-225deg);\n-moz-transform:rotate(-225deg);\n-ms-transform:rotate(-225deg);\ntransform:rotate(-225deg);\nposition:relative;\nbottom:1px}\n.siteInfo.jsx-80c0226889f6143{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nheight:50px;\npadding-right:10px;\npadding-left:10px}\n.siteUrl.jsx-80c0226889f6143{grid-column-start:2;\ngrid-column-end:3;\ngrid-row-start:1;\ngrid-row-end:2;\nplace-self:center;\ncolor:#fff}\n.siteUrl.jsx-80c0226889f6143 .highlight.jsx-80c0226889f6143{color:var(--main-orange)}\nhr.orange.jsx-80c0226889f6143{position:absolute;\nborder:none;\nbackground:var(--main-orange);\nheight:2px;\nwidth:100vw;\nleft:0;\nbottom:0;\nmargin:0;\nleft:50%;\n-webkit-transform:translateX(-50%);\n-moz-transform:translateX(-50%);\n-ms-transform:translateX(-50%);\ntransform:translateX(-50%)}"
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./components/StyleBase.js
var StyleBase = __webpack_require__(6937);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/EmailForm.js




const CtaStyle = `
    color: #fff;
    padding: 1rem 1.5rem;
    text-align: center;
    position: relative;
    background-image: linear-gradient(45deg, #d81e5b 10%, var(--main-orange));
    z-index: 1;
    font-weight: 400;
    border: none;
`;
const CtaBeforeStyle = `
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(45deg, #9c27b0 50%, #d81e5b);
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
`;
const CtaHoverBeforeStyle = `
    opacity: 1;
`;
const EmailForm2 = ()=>{
    const { /*#__PURE__*/ 0: serverState , 1: setServerState  } = (0,external_react_.useState)({
        sending: false,
        status: null
    });
    const { 0: fieldErrors , 1: setFieldErrors  } = (0,external_react_.useState)({
        email: null,
        message: null
    });
    const { 0: inputs , 1: setInputs  } = (0,external_react_.useState)({
        email: '',
        message: ''
    });
    const validityRules = {
        email: (val)=>!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
        ,
        message: (val)=>!val
    };
    const validate = ()=>{
        let err = {
            emailErr: validityRules.email(inputs.email),
            msgErr: validityRules.message(inputs.message)
        };
        setFieldErrors((prev)=>({
                ...prev,
                email: err.emailErr,
                message: err.msgErr
            })
        );
        let hasErrors = true;
        if (!err.emailErr && !err.msgErr) {
            hasErrors = false;
        }
        return hasErrors;
    };
    const renderErrors = (field)=>{
        if (fieldErrors[field]) {
            if (field === 'email') {
                return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "error",
                    children: "Please enter a valid email."
                }));
            } else {
                return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "error",
                    children: "Please add a message."
                }));
            }
        }
    };
    const handleOnChange = (event)=>{
        event.persist();
        setInputs((prev)=>({
                ...prev,
                [event.target.id]: event.target.value
            })
        );
    };
    const handleServerResponse = (ok, msg)=>{
        setServerState({
            sending: false,
            status: {
                ok,
                msg
            }
        });
        console.log(msg);
        if (ok) {
            setFieldErrors({});
            setInputs({
                email: '',
                message: ''
            });
        }
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if (validate()) {
            return;
        }
        setServerState({
            sending: true
        });
        const form = e.target;
        external_axios_default()({
            method: 'post',
            url: 'https://formspree.io/mbjllqae',
            data: new FormData(form)
        }).then((resp)=>{
            handleServerResponse(true, 'Message sent. Thanks!');
        }).catch((resp)=>{
            console.log(resp.response);
            handleServerResponse(false, resp.response.data.error, form);
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-ef2925012b637164" + " " + "formContainer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "jsx-ef2925012b637164",
                children: "GET IN TOUCH"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleFormSubmit,
                noValidate: true,
                className: "jsx-ef2925012b637164",
                children: [
                    serverState.status && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "jsx-ef2925012b637164" + " " + ((!serverState.status.ok ? "errorMsg" : "") || ""),
                        children: serverState.status.msg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "email",
                        className: "jsx-ef2925012b637164",
                        children: "Email"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: inputs.email,
                        onChange: handleOnChange,
                        id: "email",
                        type: "email",
                        name: "email",
                        noValidate: true,
                        autoComplete: "off",
                        required: true,
                        className: "jsx-ef2925012b637164"
                    }),
                    renderErrors("email"),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        htmlFor: "message",
                        className: "jsx-ef2925012b637164",
                        children: "Message"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        value: inputs.message,
                        onChange: handleOnChange,
                        id: "message",
                        type: "text",
                        name: "message",
                        rows: "2",
                        noValidate: true,
                        required: true,
                        className: "jsx-ef2925012b637164"
                    }),
                    renderErrors('message'),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        disable: serverState.sending.toString(),
                        className: "jsx-ef2925012b637164",
                        children: "SEND"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ef2925012b637164",
                children: `.formContainer.jsx-ef2925012b637164{padding-top:2px}
form.jsx-ef2925012b637164{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-flex-direction:column;
-ms-flex-direction:column;
flex-direction:column;
-webkit-box-pack:start;
-ms-flex-pack:start;
-webkit-justify-content:flex-start;
justify-content:flex-start;
-webkit-align-items:space-between;
-webkit-box-align:space-between;
-ms-flex-align:space-between;
align-items:space-between;
padding-bottom:10px}
form.jsx-ef2925012b637164 label.jsx-ef2925012b637164{text-align:left}
label.jsx-ef2925012b637164, button.jsx-ef2925012b637164{margin-top:10px}
input.jsx-ef2925012b637164, textarea.jsx-ef2925012b637164{margin-top:5px}
form.jsx-ef2925012b637164 textarea.jsx-ef2925012b637164{resize:vertical}
button.jsx-ef2925012b637164{${CtaStyle}
                    margin-top: 20px;
padding:20px}
button.jsx-ef2925012b637164::before{${CtaBeforeStyle}
                }
button.jsx-ef2925012b637164:hover::before{${CtaHoverBeforeStyle}
                }`
            })
        ]
    }));
};
/* harmony default export */ const EmailForm = (EmailForm2);

;// CONCATENATED MODULE: ./components/Footer.js




const Footer = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyleBase/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "jsx-f37e2110926d2a6b" + " " + "footer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: "jsx-f37e2110926d2a6b" + " " + "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(EmailForm, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-f37e2110926d2a6b" + " " + "socialIcons",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                alt: "bellflower youtube",
                                href: "https://www.youtube.com/channel/UCMt7r35vGbqSH_xX2iglYFA?view_as=subscriber",
                                className: "jsx-f37e2110926d2a6b",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: __webpack_require__(6554),
                                    className: "jsx-f37e2110926d2a6b"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                alt: "bellflower facebook",
                                href: "https://www.facebook.com/Bellflowermusic/",
                                className: "jsx-f37e2110926d2a6b",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: __webpack_require__(9604),
                                    className: "jsx-f37e2110926d2a6b"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                alt: "bellflower twitter",
                                href: "https://www.instagram.com/bellflower_band/?hl=en",
                                className: "jsx-f37e2110926d2a6b",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: __webpack_require__(8263),
                                    className: "jsx-f37e2110926d2a6b"
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "f37e2110926d2a6b",
                children: ".socialIcons.jsx-f37e2110926d2a6b{margin:1rem 0;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:space-around;\njustify-content:space-around}\n.socialIcons.jsx-f37e2110926d2a6b img.jsx-f37e2110926d2a6b{height:100%;\nmax-width:50px}\n#map.jsx-f37e2110926d2a6b{height:300px;\nwidth:100%}\n.socialIcons.jsx-f37e2110926d2a6b{-webkit-filter:invert(100%);\nfilter:invert(100%);\nheight:50px;\nmargin-top:2rem}\nhr.white.jsx-f37e2110926d2a6b{position:absolute;\nwidth:100%;\nleft:0;\nmargin:0}"
            })
        ]
    }));
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.js







class BellflowerApp extends app["default"] {
    render() {
        const { Component , pageProps  } = this.props;
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyleBase/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        }, "viewport"),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            type: "icon",
                            href: '/icon.png'
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        }));
    }
}
/* harmony default export */ const _app = (BellflowerApp);


/***/ }),

/***/ 9604:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RmFjZWJvb2sgaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIzLjk5ODEgMTEuOTk5MUMyMy45OTgxIDUuMzcyMTYgMTguNjI2IDAgMTEuOTk5MSAwQzUuMzcyMTYgMCAwIDUuMzcyMTYgMCAxMS45OTkxQzAgMTcuOTg4MiA0LjM4Nzg5IDIyLjk1MjIgMTAuMTI0MiAyMy44NTI0VjE1LjQ2NzZINy4wNzc1OFYxMS45OTkxSDEwLjEyNDJWOS4zNTU1M0MxMC4xMjQyIDYuMzQ4MjYgMTEuOTE1NiA0LjY4NzE0IDE0LjY1NjQgNC42ODcxNEMxNS45NjkyIDQuNjg3MTQgMTcuMzQyNCA0LjkyMTQ5IDE3LjM0MjQgNC45MjE0OVY3Ljg3NDM5SDE1LjgyOTRDMTQuMzM4OCA3Ljg3NDM5IDEzLjg3MzkgOC43OTkzMyAxMy44NzM5IDkuNzQ4MjRWMTEuOTk5MUgxNy4yMDE4TDE2LjY2OTggMTUuNDY3NkgxMy44NzM5VjIzLjg1MjRDMTkuNjEwMyAyMi45NTIyIDIzLjk5ODEgMTcuOTg4MiAyMy45OTgxIDExLjk5OTFaIi8+PC9zdmc+"

/***/ }),

/***/ 8263:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI1Niw0OS40N2M2Ny4yNywwLDc1LjIzLDAuMjYsMTAxLjgsMS40N2MyNC41NiwxLjEyLDM3LjksNS4yMiw0Ni43OCw4LjY3YzExLjc2LDQuNTcsMjAuMTUsMTAuMDMsMjguOTcsMTguODQKCQljOC44Miw4LjgyLDE0LjI4LDE3LjIxLDE4Ljg0LDI4Ljk3YzMuNDUsOC44OCw3LjU1LDIyLjIyLDguNjcsNDYuNzhjMS4yMSwyNi41NiwxLjQ3LDM0LjUzLDEuNDcsMTAxLjhzLTAuMjYsNzUuMjMtMS40NywxMDEuOAoJCWMtMS4xMiwyNC41Ni01LjIyLDM3LjktOC42Nyw0Ni43OGMtNC41NywxMS43Ni0xMC4wMywyMC4xNS0xOC44NCwyOC45N2MtOC44Miw4LjgyLTE3LjIxLDE0LjI4LTI4Ljk3LDE4Ljg0CgkJYy04Ljg4LDMuNDUtMjIuMjIsNy41NS00Ni43OCw4LjY3Yy0yNi41NiwxLjIxLTM0LjUzLDEuNDctMTAxLjgsMS40N3MtNzUuMjQtMC4yNi0xMDEuOC0xLjQ3Yy0yNC41Ni0xLjEyLTM3LjktNS4yMi00Ni43OC04LjY3CgkJYy0xMS43Ni00LjU3LTIwLjE1LTEwLjAzLTI4Ljk3LTE4Ljg0Yy04LjgyLTguODItMTQuMjgtMTcuMjEtMTguODQtMjguOTdjLTMuNDUtOC44OC03LjU1LTIyLjIyLTguNjctNDYuNzgKCQljLTEuMjEtMjYuNTYtMS40Ny0zNC41My0xLjQ3LTEwMS44czAuMjYtNzUuMjMsMS40Ny0xMDEuOGMxLjEyLTI0LjU2LDUuMjItMzcuOSw4LjY3LTQ2Ljc4YzQuNTctMTEuNzYsMTAuMDMtMjAuMTUsMTguODQtMjguOTcKCQljOC44Mi04LjgyLDE3LjIxLTE0LjI4LDI4Ljk3LTE4Ljg0YzguODgtMy40NSwyMi4yMi03LjU1LDQ2Ljc4LTguNjdDMTgwLjc3LDQ5LjczLDE4OC43Myw0OS40NywyNTYsNDkuNDcgTTI1Niw0LjA4CgkJYy02OC40MiwwLTc3LDAuMjktMTAzLjg3LDEuNTJjLTI2LjgxLDEuMjItNDUuMTMsNS40OC02MS4xNSwxMS43MWMtMTYuNTcsNi40NC0zMC42MiwxNS4wNS00NC42MiwyOS4wNgoJCUMzMi4zNiw2MC4zNywyMy43NCw3NC40MiwxNy4zLDkwLjk4Yy02LjIzLDE2LjAyLTEwLjQ5LDM0LjM0LTExLjcxLDYxLjE1QzQuMzcsMTc5LDQuMDgsMTg3LjU4LDQuMDgsMjU2CgkJYzAsNjguNDIsMC4yOSw3NywxLjUyLDEwMy44N2MxLjIyLDI2LjgxLDUuNDgsNDUuMTMsMTEuNzEsNjEuMTVjNi40NCwxNi41NywxNS4wNSwzMC42MiwyOS4wNiw0NC42MgoJCWMxNC4wMSwxNC4wMSwyOC4wNSwyMi42Miw0NC42MiwyOS4wNmMxNi4wMiw2LjIzLDM0LjM0LDEwLjQ5LDYxLjE1LDExLjcxYzI2Ljg3LDEuMjMsMzUuNDUsMS41MiwxMDMuODcsMS41MnM3Ny0wLjI5LDEwMy44Ny0xLjUyCgkJYzI2LjgxLTEuMjIsNDUuMTMtNS40OCw2MS4xNS0xMS43MWMxNi41Ny02LjQ0LDMwLjYyLTE1LjA1LDQ0LjYyLTI5LjA2YzE0LjAxLTE0LjAxLDIyLjYyLTI4LjA1LDI5LjA2LTQ0LjYyCgkJYzYuMjMtMTYuMDIsMTAuNDktMzQuMzQsMTEuNzEtNjEuMTVjMS4yMy0yNi44NywxLjUyLTM1LjQ1LDEuNTItMTAzLjg3cy0wLjI5LTc3LTEuNTItMTAzLjg3Yy0xLjIyLTI2LjgxLTUuNDgtNDUuMTMtMTEuNzEtNjEuMTUKCQljLTYuNDQtMTYuNTctMTUuMDUtMzAuNjItMjkuMDYtNDQuNjJjLTE0LjAxLTE0LjAxLTI4LjA1LTIyLjYyLTQ0LjYyLTI5LjA2Yy0xNi4wMi02LjIzLTM0LjM0LTEwLjQ5LTYxLjE1LTExLjcxCgkJQzMzMyw0LjM3LDMyNC40Miw0LjA4LDI1Niw0LjA4TDI1Niw0LjA4eiIvPgoJPHBhdGggZD0iTTI1NiwxMjYuNjRjLTcxLjQ1LDAtMTI5LjM2LDU3LjkyLTEyOS4zNiwxMjkuMzZTMTg0LjU1LDM4NS4zNiwyNTYsMzg1LjM2UzM4NS4zNiwzMjcuNDUsMzg1LjM2LDI1NgoJCVMzMjcuNDUsMTI2LjY0LDI1NiwxMjYuNjR6IE0yNTYsMzM5Ljk3Yy00Ni4zOCwwLTgzLjk3LTM3LjYtODMuOTctODMuOTdzMzcuNi04My45Nyw4My45Ny04My45N2M0Ni4zOCwwLDgzLjk3LDM3LjYsODMuOTcsODMuOTcKCQlTMzAyLjM4LDMzOS45NywyNTYsMzM5Ljk3eiIvPgoJPGNpcmNsZSBjeD0iMzkwLjQ4IiBjeT0iMTIxLjUyIiByPSIzMC4yMyIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 6554:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+WW91VHViZSBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuNDk1IDYuMjA1YTMuMDA3IDMuMDA3IDAgMCAwLTIuMDg4LTIuMDg4Yy0xLjg3LS41MDEtOS4zOTYtLjUwMS05LjM5Ni0uNTAxcy03LjUwNy0uMDEtOS4zOTYuNTAxQTMuMDA3IDMuMDA3IDAgMCAwIC41MjcgNi4yMDVhMzEuMjQ3IDMxLjI0NyAwIDAgMC0uNTIyIDUuODA1IDMxLjI0NyAzMS4yNDcgMCAwIDAgLjUyMiA1Ljc4MyAzLjAwNyAzLjAwNyAwIDAgMCAyLjA4OCAyLjA4OGMxLjg2OC41MDIgOS4zOTYuNTAyIDkuMzk2LjUwMnM3LjUwNiAwIDkuMzk2LS41MDJhMy4wMDcgMy4wMDcgMCAwIDAgMi4wODgtMi4wODggMzEuMjQ3IDMxLjI0NyAwIDAgMCAuNS01Ljc4MyAzMS4yNDcgMzEuMjQ3IDAgMCAwLS41LTUuODA1ek05LjYwOSAxNS42MDFWOC40MDhsNi4yNjQgMy42MDJ6Ii8+PC9zdmc+"

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,544,937], () => (__webpack_exec__(245)));
module.exports = __webpack_exports__;

})();