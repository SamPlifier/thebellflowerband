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
    className: "jsx-3517186761" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "data-status": menuStatus,
    onClick: toggleMenu,
    className: "jsx-3517186761" + " " + "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3517186761" + " " + "line--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3517186761" + " " + "line--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3517186761" + " " + "line--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3517186761" + " " + "siteInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3517186761",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, pageName), __jsx("p", {
    className: "jsx-3517186761" + " " + "siteUrl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "bellflower", __jsx("span", {
    className: "jsx-3517186761" + " " + "highlight",
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
    id: "3517186761",
    __self: this
  }, ".header.jsx-3517186761{width:100%;display:grid;grid-template-rows:50px;grid-template-columns:50px auto;background:#333;z-index:10;position:fixed;top:0;}.navMenu.jsx-3517186761{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line--1.jsx-3517186761,.line--2.jsx-3517186761,.line--3.jsx-3517186761{width:60%;height:2px;background:#f69d1a;}[data-status=\"open\"].jsx-3517186761 .line--1.jsx-3517186761,[data-status=\"open\"].jsx-3517186761 .line--3.jsx-3517186761{-webkit-transition:all .5s;transition:all .5s;-webkit-transition-timing-function:cubic-bezier(.24,.66,.78,.58);transition-timing-function:cubic-bezier(.24,.66,.78,.58);}[data-status=\"open\"].jsx-3517186761 .line--2.jsx-3517186761{-webkit-transition:all .3s;transition:all .3s;}.line--2.jsx-3517186761{margin:5px 0;}[data-status=\"close\"].jsx-3517186761 .line--1.jsx-3517186761{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);position:relative;top:1px;}[data-status=\"close\"].jsx-3517186761 .line--2.jsx-3517186761{-webkit-transition:all 1s;transition:all 1s;display:none;}[data-status=\"close\"].jsx-3517186761 .line--3.jsx-3517186761{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);position:relative;bottom:1px;}.siteInfo.jsx-3517186761{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.siteUrl.jsx-3517186761{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;place-self:center;color:#fff;}.siteUrl.jsx-3517186761 .highlight.jsx-3517186761{color:#f69d1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzRCLEFBVVMsQUFVVixBQU1TLEFBSUEsQUFHTixBQUdNLEFBTUQsQUFJQyxBQU1OLEFBTU8sQUFRTixVQTdDSCxDQXBCRSxFQWlDakIsQ0FpQ0EsTUF4RHNCLEFBZ0RBLENBckNDLEdBcEJLLGNBVVAsQUFnREEsRUFyQ3JCLElBb0JpQixFQWhCNEMsQUFJN0QsQUFNNkIsQUFVQyxFQTVDTSxPQVVqQixBQWdEQSxFQWpCbkIsYUE5QmlCLEFBZ0RLLElBVFksTUFqRGQsUUEyREwsUUExREEsR0EyRGYsUUExRG1CLGVBQ1QsTUFDVixLQThCc0IsR0FVQSxRQWpDSSxPQXdCZCxHQVVHLEtBVGYsTUFVQSxHQXRCQSxxQkEwQnVCLGlDQXRDSSw0REF1Q1IsZUFDbkIsd0JBdkN1Qiw2RkFDdkIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0UGFnZU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFNsYXNoID0gbmFtZS5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICAgICAgbGV0IG5ld1BhZ2VOYW1lID0gbmFtZS5zbGljZSgxLGxhc3RTbGFzaCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UGFnZU5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZS5zbGljZSgnMScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VOYW1lID0gdXNlUm91dGVyKCkucm91dGUgPT09ICcvJyA/IFwiaG9tZVwiIDogZm9ybWF0UGFnZU5hbWUodXNlUm91dGVyKCkucm91dGUpO1xuICAgIFxuICAgIGxldCBtZW51U3RhdHVzID0gbWVudU9wZW4gPyAnY2xvc2UnIDogJ29wZW4nO1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNZW51XCIgZGF0YS1zdGF0dXM9e21lbnVTdGF0dXN9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLS0xXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtLTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS0tM1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlSW5mb1wiPlxuICAgICAgICAgICAgPHA+e3BhZ2VOYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpdGVVcmxcIj5iZWxsZmxvd2VyPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+YmFuZDwvc3Bhbj4uY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21lbnVPcGVuICYmIDxOYXZpZ2F0aW9uIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9Lz59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZNZW51IHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmUtLTEsIC5saW5lLS0yLCAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMSxcbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cIm9wZW5cIl0gLmxpbmUtLTMge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjQsLjY2LC43OCwuNTgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwib3BlblwiXSAubGluZS0tMiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5lLS0yIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwiY2xvc2VcIl0gLmxpbmUtLTEge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMiB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJjbG9zZVwiXSAubGluZS0tMyB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l0ZUluZm8ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGVVcmwge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGVVcmwgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.068dd994783f6fe57407.hot-update.js.map