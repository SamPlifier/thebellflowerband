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
    className: "jsx-77810789",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (album) {
    return __jsx("div", {
      key: album.name,
      className: "jsx-77810789" + " " + "album",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-77810789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Album: ", album.name), __jsx("p", {
      className: "jsx-77810789",
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
      className: "jsx-77810789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-77810789" + " " + "albumImgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("img", {
      alt: "Front cover of Bellflower album ".concat(album.name),
      src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\/album\\-front\\.png$")("./".concat(album.urlName, "/album-front.png")),
      className: "jsx-77810789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-77810789" + " " + "bannerBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-77810789" + " " + "albumDetailsCover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-77810789",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Click Album For Details")))))), __jsx(_components_AlbumVendors__WEBPACK_IMPORTED_MODULE_4__["default"], {
      vendor: album.vendors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "77810789",
    __self: this
  }, ".albumImgContainer.jsx-77810789{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.albumDetailsCover.jsx-77810789{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#f29a2ff2;width:calc(100% - 2rem);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);bottom:66%;right:30%;overflow:hidden;}.album.jsx-77810789 img.jsx-77810789{width:100%;}.bannerBox.jsx-77810789{position:absolute;height:calc(100vw - 4.1rem);width:calc(100% - 2rem);overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJ3QixBQUc0QixBQU1PLEFBWVAsQUFHTyxXQXBCTCxBQWtCakIsT0FaaUIsQUFlZSw0QkFDSix3QkFDUixlQXRCTyxDQXVCM0IsTUFqQnVCLDRGQUxBLENBTUksNEZBTDNCLE9BTXlCLHFCQUNHLHdCQUNDLHVGQUNkLFdBQ0QsVUFDTSxnQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2FsYnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IGFsYnVtSW5mbyBmcm9tICcuLi9wdWJsaWMvYWxidW1JbmZvLmpzJztcbmltcG9ydCBBbGJ1bVZlbmRvcnMgZnJvbSAnLi4vY29tcG9uZW50cy9BbGJ1bVZlbmRvcnMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmNvbnN0IEFsYnVtcyA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAge2FsYnVtSW5mby5tYXAoKGFsYnVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YWxidW0ubmFtZX0gY2xhc3NOYW1lPVwiYWxidW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BbGJ1bToge2FsYnVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPmNsaWNrIGFsYnVtIGZvciBkZXRhaWxzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWxidW0vW2FsYnVtTmFtZV1cIiBhcz17YC9hbGJ1bS8ke2FsYnVtLnVybE5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtSW1nQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD17YEZyb250IGNvdmVyIG9mIEJlbGxmbG93ZXIgYWxidW0gJHthbGJ1bS5uYW1lfWB9IHNyYz17cmVxdWlyZShgLi4vcHVibGljL2FsYnVtcy8ke2FsYnVtLnVybE5hbWV9L2FsYnVtLWZyb250LnBuZ2ApfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lckJveFwiPjxkaXYgY2xhc3NOYW1lPVwiYWxidW1EZXRhaWxzQ292ZXJcIj48cD5DbGljayBBbGJ1bSBGb3IgRGV0YWlsczwvcD48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsYnVtVmVuZG9ycyB2ZW5kb3I9e2FsYnVtLnZlbmRvcnN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYWxidW1JbWdDb250YWluZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGJ1bURldGFpbHNDb3ZlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI5YTJmZjI7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA2NiU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDMwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyQm94IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3IC0gNC4xcmVtKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtczsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/albums.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.ad7dd39edc4421a400e5.hot-update.js.map