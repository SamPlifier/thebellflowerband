"use strict";
exports.id = 729;
exports.ids = [729];
exports.modules = {

/***/ 2765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const AlbumVendors = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                /*#__PURE__*/ children: "AVAILABLE ON"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-cc09b08ec29e6c49" + " " + "vendors",
                children: [
                    props.vendor.map((vendor)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: vendor.vendorLink,
                            className: "jsx-cc09b08ec29e6c49" + " " + "vendor",
                            children: vendor.vendorName
                        }, vendor.vendorName));
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "cc09b08ec29e6c49",
                        children: ".vendors.jsx-cc09b08ec29e6c49{width:100%;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\nmargin-bottom:2rem}\n.vendor.jsx-cc09b08ec29e6c49{text-align:center}\n.vendors.jsx-cc09b08ec29e6c49 a.jsx-cc09b08ec29e6c49{color:var(--main-orange);\nfont-family:'BenchNine', sans-serif;\nfont-size:4rem;\ntext-decoration:underline;\ntext-decoration-thickness:2px;\ntext-decoration-color:#fff;\ntext-underline-offset:2px}\n@media (min-width:768px) {.vendors.jsx-cc09b08ec29e6c49{-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.vendors.jsx-cc09b08ec29e6c49 a.jsx-cc09b08ec29e6c49:nth-child(2){margin:0 2rem}}"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumVendors);


/***/ }),

/***/ 4273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const albums = [
    {
        "item": "Bellflower album",
        "name": "Changes On The Way",
        "urlName": "changes-on-the-way",
        "imageFolder": "/albums/changes-on-the-way",
        "releaseDate": "September 30, 2019",
        "writers": [
            "Franklin Bellflower",
            "Natasha Wilson",
            "David Criswell"
        ],
        "price": "$10",
        "songs": [
            "Changes on the Way",
            "Feeling You",
            "Blowing the Wind",
            "Looking for the One",
            "Candy Crunch",
            "Kind of Like Jolene",
            "Bradford Pear",
            "Fire to the Feast",
            "What Is Love",
            "To the End"
        ],
        "vendors": [
            {
                "vendorName": "iTunes",
                "vendorLink": "https://music.apple.com/us/album/changes-on-the-way/1480122305"
            },
            {
                "vendorName": "Google Play",
                "vendorLink": "https://play.google.com/store/music/album/Bellflower_Changes_on_the_Way?id=Bix7j567nfnaili7n6utbonfe34"
            },
            {
                "vendorName": "Amazon Prime",
                "vendorLink": "https://www.amazon.com/Changes-Way-Bellflower/dp/B07XLXV6W8"
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (albums);


/***/ })

};
;