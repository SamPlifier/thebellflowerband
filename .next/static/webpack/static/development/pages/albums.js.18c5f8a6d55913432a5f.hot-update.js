webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./pages/albums.js":
/*!*************************!*\
  !*** ./pages/albums.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/albumInfo.js */ "./public/albumInfo.js");
/* harmony import */ var _components_AlbumVendors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AlbumVendors */ "./components/AlbumVendors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/albums.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Albums = function Albums() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-896163243",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (album) {
    return __jsx("div", {
      key: album.name,
      className: "jsx-896163243" + " " + "album",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-896163243",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Album: ", album.name), __jsx("p", {
      className: "jsx-896163243" + " " + "deets",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "click album for details"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/album/[albumName]",
      as: "/album/".concat(album.urlName),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-896163243",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-896163243" + " " + "albumImgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      alt: "Front cover of Bellflower album ".concat(album.name),
      src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\/album\\-front\\.png$")("./".concat(album.urlName, "/album-front.png")),
      className: "jsx-896163243",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-896163243" + " " + "bannerBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-896163243" + " " + "albumDetailsCover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-896163243",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "NEW ALBUM")))))), __jsx(_components_AlbumVendors__WEBPACK_IMPORTED_MODULE_4__["default"], {
      vendor: album.vendors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "896163243",
    __self: this
  }, ".albumImgContainer.jsx-896163243{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.albumDetailsCover.jsx-896163243{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#f29a2ff2;width:calc(100% - 2rem);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);bottom:66%;right:30%;overflow:hidden;}.album.jsx-896163243 img.jsx-896163243{width:100%;}.bannerBox.jsx-896163243{position:absolute;height:calc(100vw - 4.1rem);width:calc(100% - 2rem);overflow:hidden;}.deets.jsx-896163243{color:#f29a2f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3QixBQUc0QixBQU1PLEFBWVAsQUFHTyxBQU1KLFdBMUJELEFBa0JqQixHQVNBLElBckJpQixBQWVlLDRCQUNKLHdCQUNSLGVBdEJPLENBdUIzQixNQWpCdUIsNEZBTEEsQ0FNSSw0RkFMM0IsT0FNeUIscUJBQ0csd0JBQ0MsdUZBQ2QsV0FDRCxVQUNNLGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvYWxidW1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgYWxidW1JbmZvIGZyb20gJy4uL3B1YmxpYy9hbGJ1bUluZm8uanMnO1xuaW1wb3J0IEFsYnVtVmVuZG9ycyBmcm9tICcuLi9jb21wb25lbnRzL0FsYnVtVmVuZG9ycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgQWxidW1zID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7YWxidW1JbmZvLm1hcCgoYWxidW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbGJ1bS5uYW1lfSBjbGFzc05hbWU9XCJhbGJ1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFsYnVtOiB7YWxidW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVldHNcIj5jbGljayBhbGJ1bSBmb3IgZGV0YWlsczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FsYnVtL1thbGJ1bU5hbWVdXCIgYXM9e2AvYWxidW0vJHthbGJ1bS51cmxOYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bUltZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2BGcm9udCBjb3ZlciBvZiBCZWxsZmxvd2VyIGFsYnVtICR7YWxidW0ubmFtZX1gfSBzcmM9e3JlcXVpcmUoYC4uL3B1YmxpYy9hbGJ1bXMvJHthbGJ1bS51cmxOYW1lfS9hbGJ1bS1mcm9udC5wbmdgKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJCb3hcIj48ZGl2IGNsYXNzTmFtZT1cImFsYnVtRGV0YWlsc0NvdmVyXCI+PHA+TkVXIEFMQlVNPC9wPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxidW1WZW5kb3JzIHZlbmRvcj17YWxidW0udmVuZG9yc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hbGJ1bUltZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtRGV0YWlsc0NvdmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjlhMmZmMjtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICAgICAgICBib3R0b206IDY2JTtcbiAgICAgICAgICAgICAgICByaWdodDogMzAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxidW0gaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5uZXJCb3gge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLSA0LjFyZW0pO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlZXRzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YyOWEyZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtczsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/albums.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.18c5f8a6d55913432a5f.hot-update.js.map