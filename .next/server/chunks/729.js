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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);



const AlbumVendors = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                /*#__PURE__*/ children: "AVAILABLE ON"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-1015d9eef99bc250" + " " + "vendors",
                children: [
                    props.vendor.map((vendor)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: vendor.vendorLink,
                            className: "jsx-1015d9eef99bc250" + " " + "vendor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-1015d9eef99bc250" + " " + "vendor-logo-container",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    src: `/${vendor.vendorLogo}`,
                                    layout: "fill",
                                    objectFit: "contain",
                                    alt: vendor.vendorAlt
                                })
                            })
                        }, vendor.vendorName));
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "1015d9eef99bc250",
                        children: ".vendors.jsx-1015d9eef99bc250{width:100%;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\nflex-wrap:wrap;\nmargin-bottom:20px;\n-webkit-justify-content:center;\njustify-content:center}\n.vendor.jsx-1015d9eef99bc250{text-align:center}\n.vendors.jsx-1015d9eef99bc250 a.jsx-1015d9eef99bc250{color:var(--main-orange);\npadding:1rem;\nwidth:auto}\n.vendor-logo-container.jsx-1015d9eef99bc250{height:40px;\nwidth:auto;\ndisplay:block;\nposition:relative}\n@media (min-width:768px) {.vendors.jsx-1015d9eef99bc250{-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row}\n.vendors.jsx-1015d9eef99bc250 a.jsx-1015d9eef99bc250{width:33%}}"
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
                "vendorName": "Spotify",
                "vendorLink": "https://open.spotify.com/album/2zkANR6h5pAAOLuVQ6ZEke?si=xq8BrUexRdaMnwZ58PK9tg&nd=1",
                'vendorLogo': 'vendor-logos/Spotify_Logo_RGB_White.png',
                'vendorAlt': 'Spotify Logo'
            },
            {
                "vendorName": "YouTube Music",
                "vendorLink": "https://music.youtube.com/playlist?list=OLAK5uy_nhDq-i8j2SfHbbzNaP1OXR5sWQRPe2jmI",
                'vendorLogo': 'vendor-logos/yt_music_full_mono_cmyk_white.png',
                'vendorAlt': 'YouTube Music Logo'
            },
            {
                "vendorName": "Apple Music",
                "vendorLink": "https://music.apple.com/us/album/changes-on-the-way/1480122305",
                'vendorLogo': 'vendor-logos/US-UK_Apple_Music_Listen_on_Lockup_all-wht_100617.svg',
                'vendorAlt': 'Apple Music Logo'
            },
            {
                "vendorName": "Amazon Prime",
                "vendorLink": "https://www.amazon.com/Changes-Way-Bellflower/dp/B07XV7Z79X",
                'vendorLogo': 'vendor-logos/available_at_amazon_US_EN_logo_horizontal_RGB_WHITE.png',
                'vendorAlt': 'Amazon Prime Logo'
            }
        ]
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (albums);


/***/ })

};
;