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
    className: "jsx-1859857326" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "data-status": menuStatus,
    onClick: toggleMenu,
    className: "jsx-1859857326" + " " + "navMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1859857326" + " " + "line--1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1859857326" + " " + "line--2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1859857326" + " " + "line--3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1859857326" + " " + "siteInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1859857326",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, pageName), __jsx("p", {
    className: "jsx-1859857326" + " " + "siteUrl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "bellflower", __jsx("span", {
    className: "jsx-1859857326" + " " + "highlight",
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
    id: "1859857326",
    __self: this
  }, ".header.jsx-1859857326{width:100%;display:grid;grid-template-rows:50px;grid-template-columns:50px auto;background:#333;z-index:10;position:fixed;top:0;}.navMenu.jsx-1859857326{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.line--1.jsx-1859857326,.line--2.jsx-1859857326,.line--3.jsx-1859857326{width:60%;height:2px;background:#f69d1a;}[data-status=\"open\"].jsx-1859857326 .line--1.jsx-1859857326,[data-status=\"open\"].jsx-1859857326 .line--3.jsx-1859857326{-webkit-transition:all .5s;transition:all .5s;-webkit-transition-timing-function:cubic-bezier(.24,.66,.78,.58);transition-timing-function:cubic-bezier(.24,.66,.78,.58);}[data-status=\"open\"].jsx-1859857326 .line--2.jsx-1859857326{-webkit-transition:all .3s;transition:all .3s;}.line--2.jsx-1859857326{margin:5px 0;}[data-status=\"close\"].jsx-1859857326 .line--1.jsx-1859857326{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg);position:relative;top:1px;}[data-status=\"close\"].jsx-1859857326 .line--2.jsx-1859857326{-webkit-transition:all 1s;transition:all 1s;display:none;}[data-status=\"close\"].jsx-1859857326 .line--3.jsx-1859857326{-webkit-transition:all .5s;transition:all .5s;-webkit-transform:rotate(-225deg);-ms-transform:rotate(-225deg);transform:rotate(-225deg);position:relative;bottom:1px;}.siteInfo.jsx-1859857326{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 1rem;}.siteUrl.jsx-1859857326{grid-column-start:2;grid-column-end:3;grid-row-start:1;grid-row-end:2;place-self:center;color:#fff;}.siteUrl.jsx-1859857326 .highlight.jsx-1859857326{color:#f69d1a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzRCLEFBV1MsQUFXVixBQU1TLEFBSUEsQUFHTixBQUdNLEFBTUQsQUFJQyxBQU1OLEFBTU8sQUFRTixVQTdDSCxDQXRCRSxFQW1DakIsQ0FpQ0EsTUF6RHNCLEFBaURBLENBckNDLEdBdEJLLGNBV1AsQUFpREEsRUFyQ3JCLElBb0JpQixFQWhCNEMsQUFJN0QsQUFNNkIsQUFVQyxFQTlDTSxPQVdqQixBQWlEQSxFQWpCbkIsYUEvQmlCLEFBaURLLElBVFksTUFuRGQsUUE2REwsUUEzREEsR0E0RGYsUUEzRG1CLGVBQ1QsTUFDVixLQStCc0IsR0FVQSxRQWxDSSxPQXlCZCxHQVVHLEtBVGYsTUFVQSxHQXRCQSxxQkEwQnVCLGlDQXZDSSw0REF3Q1IsZUFDbkIsd0JBeEN1Qiw2RkFFdkIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZm9ybWF0UGFnZU5hbWUgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBsZXQgbGFzdFNsYXNoID0gbmFtZS5sYXN0SW5kZXhPZignLycpO1xuICAgICAgICAgICAgbGV0IG5ld1BhZ2VOYW1lID0gbmFtZS5zbGljZSgxLGxhc3RTbGFzaCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UGFnZU5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZS5zbGljZSgnMScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VOYW1lID0gdXNlUm91dGVyKCkucm91dGUgPT09ICcvJyA/IFwiaG9tZVwiIDogZm9ybWF0UGFnZU5hbWUodXNlUm91dGVyKCkucm91dGUpO1xuICAgIFxuICAgIGxldCBtZW51U3RhdHVzID0gbWVudU9wZW4gPyAnY2xvc2UnIDogJ29wZW4nO1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZNZW51XCIgZGF0YS1zdGF0dXM9e21lbnVTdGF0dXN9IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLS0xXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtLTJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS0tM1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlSW5mb1wiPlxuICAgICAgICAgICAgPHA+e3BhZ2VOYW1lfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpdGVVcmxcIj5iZWxsZmxvd2VyPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+YmFuZDwvc3Bhbj4uY29tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge21lbnVPcGVuICYmIDxOYXZpZ2F0aW9uIHRvZ2dsZU1lbnU9e3RvZ2dsZU1lbnV9Lz59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCBhdXRvO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG5cbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdk1lbnUge1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1lbmQ6IDI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5lLS0xLCAubGluZS0tMiwgLmxpbmUtLTMge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cIm9wZW5cIl0gLmxpbmUtLTEsXG4gICAgICAgICAgICBbZGF0YS1zdGF0dXM9XCJvcGVuXCJdIC5saW5lLS0zIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI0LC42NiwuNzgsLjU4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cIm9wZW5cIl0gLmxpbmUtLTIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluZS0tMiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFtkYXRhLXN0YXR1cz1cImNsb3NlXCJdIC5saW5lLS0xIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwiY2xvc2VcIl0gLmxpbmUtLTIge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgW2RhdGEtc3RhdHVzPVwiY2xvc2VcIl0gLmxpbmUtLTMge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyNWRlZyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpdGVJbmZvIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXRlVXJsIHtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZW5kOiAyO1xuICAgICAgICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zaXRlVXJsIC5oaWdobGlnaHQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.1519f11d09d5d2d61adf.hot-update.js.map