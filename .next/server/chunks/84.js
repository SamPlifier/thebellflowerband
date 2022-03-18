"use strict";
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 4084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const CtaStyle = `
    color: #fff;
    padding: 20px;
    text-align: center;
    position: relative;
    background-image: linear-gradient(45deg, #d81e5b 10%, var(--main-orange));
    z-index: 1;
    font-weight: 400;
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
const Cta = (props)=>{
    let icon = '';
    if (props.icon !== undefined) {
        icon = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "cta-icon",
            src: props.icon,
            height: "18px"
        });
    }
    if (props.type === 'link') {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-link-to": props.goTo,
            className: "jsx-b696c7e0df220016" + " " + "cta",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: props.goTo,
                    as: props.as,
                    /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "jsx-b696c7e0df220016",
                        children: [
                            icon,
                            " ",
                            props.text
                        ]
                    })
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "b696c7e0df220016",
                    children: `.cta.jsx-b696c7e0df220016{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-justify-content:center;
justify-content:center}
a.jsx-b696c7e0df220016{${CtaStyle}
                    }
a.jsx-b696c7e0df220016::before{${CtaBeforeStyle}
                    }
a.jsx-b696c7e0df220016:hover::before{${CtaHoverBeforeStyle}
                    }
a.jsx-b696c7e0df220016:hover{cursor:pointer}`
                })
            ]
        }));
    } else {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-420a2de1604bb8a5" + " " + "cta",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    type: "button",
                    className: "jsx-420a2de1604bb8a5",
                    children: [
                        icon,
                        " ",
                        props.text
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "420a2de1604bb8a5",
                    children: `button.jsx-420a2de1604bb8a5{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-justify-content:center;
justify-content:center;
-webkit-align-items:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center;
border:none;
${CtaStyle}
                    }
button.jsx-420a2de1604bb8a5::before{${CtaBeforeStyle}
                    }
button.jsx-420a2de1604bb8a5:hover::before{${CtaHoverBeforeStyle}
                    }
button.jsx-420a2de1604bb8a5:hover{cursor:pointer}`
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cta);


/***/ })

};
;