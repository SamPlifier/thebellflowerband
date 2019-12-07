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
    className: "jsx-1577931018" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "data-status": menuStatus,
    onClick: toggleMenu,
    className: "jsx-1577931018" + " " + "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1577931018" + " " + "line--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1577931018" + " " + "line--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1577931018" + " " + "line--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1577931018" + " " + "siteInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1577931018",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, pageName), __jsx("p", {
    className: "jsx-1577931018" + " " + "siteUrl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "bellflower", __jsx("span", {
    className: "jsx-1577931018" + " " + "highlight",
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
    id: "1577931018",
    __self: this
  }, ".header.jsx-1577931018{width:100%;display:grid;grid-template-rows:50px;grid-template-columns:50px auto;background:#333;box-shadow:0px -3px 10px white;z-index:10;position:fixed;top:0;}.navMenu.jsx-1577931018{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line--1.jsx-1577931018,.line--2.jsx-1577931018,.line--3.jsx-1577931018{width:60%;height:2px;background:#f69d1a;}[data-status=\"open\"].jsx-1577931018 .line--1.jsx-1577931018,[data-status=\"open\"].jsx-1577931018 .line--3.jsx-1577931018{-webkit-transition:all .5s;transition:all .5s;-webkit-transition-timing-function:cubic-bezier(.24,.66,.78,.58);transition-timing-function:cubic-bezier(.24,.66,.78,.58);}[data-status=\"open\"].jsx-1577931018 .line--2.jsx-1577931018{-webkit-transition:all .3s;transition:all .3s;}.line--2.jsx-1577931018{margin:5px 0;}[data-status=\"close\"].jsx-1577931018 .line--1.jsx-1577931018{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);position:relative;top:1px;}[data-status=\"close\"].jsx-1577931018 .line--2.jsx-1577931018{-webkit-transition:all 1s;transition:all 1s;display:none;}[data-status=\"close\"].jsx-1577931018 .line--3.jsx-1577931018{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);position:relative;bottom:1px;}.siteInfo.jsx-1577931018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.siteUrl.jsx-1577931018{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;place-self:center;color:#fff;}.siteUrl.jsx-1577931018 .highlight.jsx-1577931018{color:#f69d1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzRCLEFBV1MsQUFVVixBQU1TLEFBSUEsQUFHTixBQUdNLEFBTUQsQUFJQyxBQU1OLEFBTU8sQUFRTixVQTdDSCxDQXJCRSxFQWtDakIsQ0FpQ0EsTUF4RHNCLEFBZ0RBLENBckNDLEdBckJLLGNBV1AsQUFnREEsRUFyQ3JCLElBb0JpQixFQWhCNEMsQUFJN0QsQUFNNkIsQUFVQyxFQTdDTSxPQVdqQixBQWdEQSxFQWpCbkIsYUE5QmlCLEFBZ0RLLElBVFksTUFsRGQsUUE0REwsUUEzRG9CLEdBNERuQyw0QkEzRGUsTUFpQ08sR0FVQSxFQTFDSCxNQVNPLE9Bd0JkLEVBaENGLENBMENLLEtBekNmLEFBZ0NBLE1BVUEsR0F0QkEscUJBMEJ1QixpQ0F0Q0ksNERBdUNSLGVBQ25CLHdCQXZDdUIsNkZBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGZvcm1hdFBhZ2VOYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJ1snKSkge1xuICAgICAgICAgICAgbGV0IGxhc3RTbGFzaCA9IG5hbWUubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgICAgICAgIGxldCBuZXdQYWdlTmFtZSA9IG5hbWUuc2xpY2UoMSxsYXN0U2xhc2gpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1BhZ2VOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUuc2xpY2UoJzEnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYWdlTmFtZSA9IHVzZVJvdXRlcigpLnJvdXRlID09PSAnLycgPyBcImhvbWVcIiA6IGZvcm1hdFBhZ2VOYW1lKHVzZVJvdXRlcigpLnJvdXRlKTtcbiAgICBcbiAgICBsZXQgbWVudVN0YXR1cyA9IG1lbnVPcGVuID8gJ2Nsb3NlJyA6ICdvcGVuJztcbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TWVudVwiIGRhdGEtc3RhdHVzPXttZW51U3RhdHVzfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS0tMVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLS0yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtLTNcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZUluZm9cIj5cbiAgICAgICAgICAgIDxwPntwYWdlTmFtZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaXRlVXJsXCI+YmVsbGZsb3dlcjxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPmJhbmQ8L3NwYW4+LmNvbTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHttZW51T3BlbiAmJiA8TmF2aWdhdGlvbiB0b2dnbGVNZW51PXt0b2dnbGVNZW51fS8+fVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggYXV0bztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAtM3B4IDEwcHggd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZNZW51IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmUtLTEsIC5saW5lLS0yLCAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMSxcbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cIm9wZW5cIl0gLmxpbmUtLTMge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjQsLjY2LC43OCwuNTgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwiY2xvc2VcIl0gLmxpbmUtLTEge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZUluZm8ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGVVcmwge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGVVcmwgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.8b7232b5b3068a63f688.hot-update.js.map