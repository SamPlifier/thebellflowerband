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
    if (props.type === 'link') {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-link-to": props.goTo,
            className: "jsx-9c8c0af1e616e4c5" + " " + "cta",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: props.goTo,
                    as: props.as,
                    /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "jsx-9c8c0af1e616e4c5",
                        children: props.text
                    })
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "9c8c0af1e616e4c5",
                    children: `.cta.jsx-9c8c0af1e616e4c5{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-justify-content:center;
justify-content:center}
a.jsx-9c8c0af1e616e4c5{${CtaStyle}
                    }
a.jsx-9c8c0af1e616e4c5::before{${CtaBeforeStyle}
                    }
a.jsx-9c8c0af1e616e4c5:hover::before{${CtaHoverBeforeStyle}
                    }
a.jsx-9c8c0af1e616e4c5:hover{cursor:pointer}`
                })
            ]
        }));
    } else {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-3e7c8f8af1ede1b2" + " " + "cta",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    className: "jsx-3e7c8f8af1ede1b2",
                    children: props.text
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "3e7c8f8af1ede1b2",
                    children: `button.jsx-3e7c8f8af1ede1b2{display:-webkit-box;
display:-webkit-flex;
display:-ms-flexbox;
display:flex;
-webkit-justify-content:center;
justify-content:center;
-webkit-align-items:center;
-webkit-box-align:center;
-ms-flex-align:center;
align-items:center;
${CtaStyle}
                    }
button.jsx-3e7c8f8af1ede1b2::before{${CtaBeforeStyle}
                    }
button.jsx-3e7c8f8af1ede1b2:hover::before{${CtaHoverBeforeStyle}
                    }
button.jsx-3e7c8f8af1ede1b2:hover{cursor:pointer}`
                })
            ]
        }));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cta);


/***/ })

};
;