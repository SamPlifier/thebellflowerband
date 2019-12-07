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
    className: "jsx-193644046" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "data-status": menuStatus,
    onClick: toggleMenu,
    className: "jsx-193644046" + " " + "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-193644046" + " " + "line--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-193644046" + " " + "line--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-193644046" + " " + "line--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-193644046" + " " + "siteInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-193644046",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, pageName), __jsx("p", {
    className: "jsx-193644046" + " " + "siteUrl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "bellflower", __jsx("span", {
    className: "jsx-193644046" + " " + "highlight",
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
    id: "193644046",
    __self: this
  }, ".header.jsx-193644046{width:100%;display:grid;grid-template-rows:50px;grid-template-columns:50px auto;background:#333;z-index:10;position:fixed;top:0;}.navMenu.jsx-193644046{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line--1.jsx-193644046,.line--2.jsx-193644046,.line--3.jsx-193644046{width:60%;height:2px;background:#f69d1a;}[data-status=\"open\"].jsx-193644046 .line--1.jsx-193644046,[data-status=\"open\"].jsx-193644046 .line--3.jsx-193644046{-webkit-transition:all .5s;transition:all .5s;-webkit-transition-timing-function:cubic-bezier(.24,.66,.78,.58);transition-timing-function:cubic-bezier(.24,.66,.78,.58);}[data-status=\"open\"].jsx-193644046 .line--2.jsx-193644046{-webkit-transition:all .3s;transition:all .3s;}.line--2.jsx-193644046{margin:5px 0;}[data-status=\"close\"].jsx-193644046 .line--1.jsx-193644046{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);position:relative;top:1px;}[data-status=\"close\"].jsx-193644046 .line--2.jsx-193644046{-webkit-transition:all 1s;transition:all 1s;display:none;}[data-status=\"close\"].jsx-193644046 .line--3.jsx-193644046{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);position:relative;bottom:1px;}.siteInfo.jsx-193644046{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.siteUrl.jsx-193644046{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;place-self:center;color:#fff;}.siteUrl.jsx-193644046 .highlight.jsx-193644046{color:#f69d1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzRCLEFBV1MsQUFXVixBQU1TLEFBSUEsQUFHTixBQUdNLEFBTUQsQUFJQyxBQU1OLEFBTU8sQUFRTixVQTdDSCxDQXRCRSxFQW1DakIsQ0FpQ0EsTUF6RHNCLEFBaURBLENBckNDLEdBdEJLLGNBV1AsQUFpREEsRUFyQ3JCLElBb0JpQixFQWhCNEMsQUFJN0QsQUFNNkIsQUFVQyxFQTlDTSxPQVdqQixBQWlEQSxFQWpCbkIsYUEvQmlCLEFBaURLLElBVFksTUFuRGQsUUE2REwsUUEzREEsR0E0RGYsUUEzRG1CLGVBQ1QsTUFDVixLQStCc0IsR0FVQSxRQWxDSSxPQXlCZCxHQVVHLEtBVGYsTUFVQSxHQXRCQSxxQkEwQnVCLGlDQXZDSSw0REF3Q1IsZUFDbkIsd0JBeEN1Qiw2RkFFdkIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0UGFnZU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFNsYXNoID0gbmFtZS5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICAgICAgbGV0IG5ld1BhZ2VOYW1lID0gbmFtZS5zbGljZSgxLGxhc3RTbGFzaCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UGFnZU5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZS5zbGljZSgnMScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VOYW1lID0gdXNlUm91dGVyKCkucm91dGUgPT09ICcvJyA/IFwiaG9tZVwiIDogZm9ybWF0UGFnZU5hbWUodXNlUm91dGVyKCkucm91dGUpO1xuICAgIFxuICAgIGxldCBtZW51U3RhdHVzID0gbWVudU9wZW4gPyAnY2xvc2UnIDogJ29wZW4nO1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNZW51XCIgZGF0YS1zdGF0dXM9e21lbnVTdGF0dXN9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLS0xXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtLTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS0tM1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlSW5mb1wiPlxuICAgICAgICAgICAgPHA+e3BhZ2VOYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpdGVVcmxcIj5iZWxsZmxvd2VyPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+YmFuZDwvc3Bhbj4uY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21lbnVPcGVuICYmIDxOYXZpZ2F0aW9uIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9Lz59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkY2RjZDY7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZNZW51IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluZS0tMSwgLmxpbmUtLTIsIC5saW5lLS0zIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIC5saW5lLS0xLFxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4yNCwuNjYsLjc4LC41OCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmUtLTIge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cImNsb3NlXCJdIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cImNsb3NlXCJdIC5saW5lLS0zIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjVkZWcpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXRlSW5mbyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZVVybCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICAgICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZVVybCAuaGlnaGxpZ2h0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.6ce073a5178fc8f629cd.hot-update.js.map