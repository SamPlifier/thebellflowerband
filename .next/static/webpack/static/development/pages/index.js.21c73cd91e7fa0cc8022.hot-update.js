webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Cta.js":
/*!***************************!*\
  !*** ./components/Cta.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Cta.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var CtaStyle = "\n    color: #fff;\n    background: #d81e5b;\n    padding: 1rem 1.5rem;\n    border: 2px solid #fff;\n    text-align: center;\n    @media screen only and (orientation: portrait) {\n        [data-link-to=\"/albums\"] {\n            align-items: flex-start!important;\n            background: red;\n        }\n    }\n";

var Cta = function Cta(props) {
  if (props.type === 'link') {
    return __jsx("div", {
      "data-link-to": props.goTo,
      className: "jsx-1816275846" + " " + "cta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: props.goTo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1816275846",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, props.text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1816275846",
      __self: this
    }, "a.jsx-1816275846{".concat(CtaStyle, ";}[data-link-to=\"/albums\"].jsx-1816275846{grid-area:album;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}[data-link-to=\"/media\"].jsx-1816275846{grid-area:video;}@media screen only and (orientation:portrait){[data-link-to=\"/albums\"].jsx-1816275846{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;background:red;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0N0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQjRCLEFBSW9CLEFBRXFCLEFBTUEsQUFJVyxnQkFUZCxBQU1qQixhQVRBLDZEQUkyQixtQkFTSixlQUNuQixpRUFUbUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0N0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEN0YVN0eWxlID0gYFxuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICNkODFlNWI7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgQG1lZGlhIHNjcmVlbiBvbmx5IGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgIFtkYXRhLWxpbmstdG89XCIvYWxidW1zXCJdIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0IWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IEN0YSA9IChwcm9wcykgPT4ge1xuICAgIGlmIChwcm9wcy50eXBlID09PSAnbGluaycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCIgZGF0YS1saW5rLXRvPXtwcm9wcy5nb1RvfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5nb1RvfT48YT57cHJvcHMudGV4dH08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke0N0YVN0eWxlfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFtkYXRhLWxpbmstdG89XCIvYWxidW1zXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYWxidW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1saW5rLXRvPVwiL21lZGlhXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdmlkZW87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBvbmx5IGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbZGF0YS1saW5rLXRvPVwiL2FsYnVtc1wiXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj57cHJvcHMudGV4dH08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtDdGFTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdGE7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Cta.js */")));
  } else {
    return __jsx("div", {
      className: "jsx-3580720647" + " " + "cta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("button", {
      type: "button",
      className: "jsx-3580720647",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, props.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3580720647",
      __self: this
    }, "button.jsx-3580720647{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;".concat(CtaStyle, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0N0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDRCLEFBR3NDLDBFQUNVLG1HQUNKLDZGQUV4Qiw2QkFBQyIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9DdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBDdGFTdHlsZSA9IGBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZDgxZTViO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIEBtZWRpYSBzY3JlZW4gb25seSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICBbZGF0YS1saW5rLXRvPVwiL2FsYnVtc1wiXSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBDdGEgPSAocHJvcHMpID0+IHtcbiAgICBpZiAocHJvcHMudHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiIGRhdGEtbGluay10bz17cHJvcHMuZ29Ub30+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvcHMuZ29Ub30+PGE+e3Byb3BzLnRleHR9PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtDdGFTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBbZGF0YS1saW5rLXRvPVwiL2FsYnVtc1wiXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGFsYnVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgW2RhdGEtbGluay10bz1cIi9tZWRpYVwiXSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHZpZGVvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gb25seSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2RhdGEtbGluay10bz1cIi9hbGJ1bXNcIl0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+e3Byb3BzLnRleHR9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICR7Q3RhU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3RhOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Cta.js */")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ })

})
//# sourceMappingURL=index.js.21c73cd91e7fa0cc8022.hot-update.js.map