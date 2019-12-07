webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuOpen = _useState[0],
      setMenuOpen = _useState[1];

  var formatPageName = function formatPageName(name) {
    if (name.includes('[')) {
      var lastSlash = name.lastIndexOf('/');
      var newPageName = name.slice(1, lastSlash);
      return newPageName;
    } else {
      return name.slice('1');
    }
  };

  var pageName = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().route === '/' ? "home" : formatPageName(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().route);
  var menuStatus = menuOpen ? 'close' : 'open';

  var toggleMenu = function toggleMenu() {
    setMenuOpen(!menuOpen);
  };

  return __jsx("div", {
    className: "jsx-2788736185" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "data-status": menuStatus,
    onClick: toggleMenu,
    className: "jsx-2788736185" + " " + "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2788736185" + " " + "line--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2788736185" + " " + "line--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2788736185" + " " + "line--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2788736185" + " " + "siteInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2788736185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, pageName), __jsx("p", {
    className: "jsx-2788736185" + " " + "siteUrl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "bellflower", __jsx("span", {
    className: "jsx-2788736185" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "band"), ".com")), menuOpen && __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toggleMenu: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2788736185",
    __self: this
  }, ".header.jsx-2788736185{width:100%;display:grid;grid-template-rows:50px;grid-template-columns:50px auto;background:#333;box-shadow:0px -3px 10px white;z-index:10;position:fixed;top:0;}.navMenu.jsx-2788736185{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line--1.jsx-2788736185,.line--2.jsx-2788736185,.line--3.jsx-2788736185{width:60%;height:2px;background:#f69d1a;}[data-status=\"open\"].jsx-2788736185 .line--1.jsx-2788736185,[data-status=\"open\"].jsx-2788736185 .line--3.jsx-2788736185{-webkit-transition:all .5s;transition:all .5s;-webkit-transition-timing-function:cubic-bezier(.24,.66,.78,.58);transition-timing-function:cubic-bezier(.24,.66,.78,.58);}[data-status=\"open\"].jsx-2788736185 .line--2.jsx-2788736185{-webkit-transition:all .3s;transition:all .3s;}.line--2.jsx-2788736185{margin:5px 0;}[data-status=\"close\"].jsx-2788736185 .line--1.jsx-2788736185{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);position:relative;top:1px;}[data-status=\"close\"].jsx-2788736185 .line--2.jsx-2788736185{-webkit-transition:all 1s;transition:all 1s;display:none;}[data-status=\"close\"].jsx-2788736185 .line--3.jsx-2788736185{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);position:relative;bottom:1px;}.siteInfo.jsx-2788736185{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.siteUrl.jsx-2788736185{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;place-self:center;color:#fff;}.siteUrl.jsx-2788736185 .highlight.jsx-2788736185{color:#f69d1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzRCLEFBV1MsQUFXVixBQU1TLEFBSUEsQUFHTixBQUdNLEFBTUQsQUFJQyxBQU1OLEFBTU8sQUFRTixVQTdDSCxDQXRCRSxFQW1DakIsQ0FpQ0EsTUF6RHNCLEFBaURBLENBckNDLEdBdEJLLGNBV1AsQUFpREEsRUFyQ3JCLElBb0JpQixFQWhCNEMsQUFJN0QsQUFNNkIsQUFVQyxFQTlDTSxPQVdqQixBQWlEQSxFQWpCbkIsYUEvQmlCLEFBaURLLElBVFksTUFuRGQsUUE2REwsUUE1RG9CLEdBNkRuQyw0QkE1RGUsTUFrQ08sR0FVQSxFQTNDSCxNQVNPLE9BeUJkLEVBakNGLENBMkNLLEtBMUNmLEFBaUNBLE1BVUEsR0F0QkEscUJBMEJ1QixpQ0F2Q0ksNERBd0NSLGVBQ25CLHdCQXhDdUIsNkZBRXZCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGZvcm1hdFBhZ2VOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJ1snKSkge1xuICAgICAgICAgICAgbGV0IGxhc3RTbGFzaCA9IG5hbWUubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgICAgICAgIGxldCBuZXdQYWdlTmFtZSA9IG5hbWUuc2xpY2UoMSxsYXN0U2xhc2gpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1BhZ2VOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUuc2xpY2UoJzEnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYWdlTmFtZSA9IHVzZVJvdXRlcigpLnJvdXRlID09PSAnLycgPyBcImhvbWVcIiA6IGZvcm1hdFBhZ2VOYW1lKHVzZVJvdXRlcigpLnJvdXRlKTtcbiAgICBcbiAgICBsZXQgbWVudVN0YXR1cyA9IG1lbnVPcGVuID8gJ2Nsb3NlJyA6ICdvcGVuJztcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TWVudVwiIGRhdGEtc3RhdHVzPXttZW51U3RhdHVzfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS0tMVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLS0yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtLTNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZUluZm9cIj5cbiAgICAgICAgICAgIDxwPntwYWdlTmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaXRlVXJsXCI+YmVsbGZsb3dlcjxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPmJhbmQ8L3NwYW4+LmNvbTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttZW51T3BlbiAmJiA8TmF2aWdhdGlvbiB0b2dnbGVNZW51PXt0b2dnbGVNZW51fS8+fVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZNZW51IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluZS0tMSwgLmxpbmUtLTIsIC5saW5lLS0zIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIC5saW5lLS0xLFxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNCwuNjYsLjc4LC41OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmUtLTIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cImNsb3NlXCJdIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cImNsb3NlXCJdIC5saW5lLS0zIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXRlSW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZVVybCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZVVybCAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.ff950d0ac8e6d0370eb1.hot-update.js.map