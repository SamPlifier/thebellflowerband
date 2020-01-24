webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/BandMember.js":
/*!**********************************!*\
  !*** ./components/BandMember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/musicians.js */ "./public/musicians.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var BandMember = function BandMember(props) {
  var person = props.viewPerson;

  if (typeof props.viewPerson === 'number') {
    return __jsx("div", {
      className: "jsx-1847747401" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-1847747401",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-1847747401",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-1847747401",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1847747401",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1847747401",
      __self: this
    }, ".individual.jsx-1847747401{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 2rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:auto auto auto auto;grid-template-columns:100%;z-index:11;box-sizing:border-box;}.individual.jsx-1847747401 button.jsx-1847747401,.individual.jsx-1847747401 img.jsx-1847747401,.individual.jsx-1847747401 h2.jsx-1847747401,.individual.jsx-1847747401 p.jsx-1847747401{color:#222;}.individual.jsx-1847747401 button.jsx-1847747401{grid-area:close;font-size:1.6rem;}.individual.jsx-1847747401 button.jsx-1847747401:hover{cursor:pointer;}.individual.jsx-1847747401 img.jsx-1847747401{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-1847747401 h2.jsx-1847747401{grid-area:person;}.individual.jsx-1847747401 p.jsx-1847747401{grid-area:description;margin-top:0;overflow-y:scroll;}button.jsx-1847747401{border:none;background:transparent;}@media only screen and (min-width:30em){.individual.jsx-1847747401{grid-template-rows:70px 5fr 1fr 3fr;}.individual.jsx-1847747401 p.jsx-1847747401{position:relative;top:-.5rem;}}@media only screen and (orientation:landscape){.individual.jsx-1847747401{grid-template-rows:70px auto;grid-template-columns:50% 50%;-webkit-column-gap:1rem;-webkit-column-gap:1rem;column-gap:1rem;grid-template-areas:\"close person\" \"photos description\";padding:1rem;}.individual.jsx-1847747401 h2.jsx-1847747401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.individual.jsx-1847747401 p.jsx-1847747401{padding:0 1rem 1rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBbUJKLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUtWLEFBSzRCLEFBR2xCLEFBTVcsQUFRaEIsQUFLUyxXQXBEOUIsQ0EwQjJCLEdBN0NHLEFBMEI5QixDQUpxQixDQU9OLEFBUWYsQ0FnQm1CLElBYkYsQUFnQ2IsTUExQ2dCLENBd0JoQixBQUtrQyxJQXBDdEMsRUFrQnNCLEFBS3RCLENBSUksS0FqRHlCLEdBOEJSLFNBV3JCLE1Ba0JnQyxFQTVCUixLQTlCSixRQWlFVyxPQWxDaEIsQ0E5QkgsQ0EwRFksT0F6RFgsRUE4QmIsT0E3Qm9DLHdCQXlENEIsa0RBTXJDLE1BTE4sYUFDakIsWUExRGtELGtEQUNuQyxZQThEZixHQTdEZ0IsZ0JBQ0gsYUFDK0MsNERBRXJCLHVDQUNaLDJCQUNoQixXQUNXLHNCQUMxQiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9CYW5kTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuXG5jb25zdCBCYW5kTWVtYmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGVyc29uID0gcHJvcHMudmlld1BlcnNvbjtcbiAgICBcbiAgICBpZiAodHlwZW9mIHByb3BzLnZpZXdQZXJzb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT4mIzEwMDA1OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMj57YmFuZE1lbWJlcnNbcGVyc29uXS5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5kTWVtYmVyc1twZXJzb25dLnBob3RvfS8+XG4gICAgICAgICAgICAgICAgPHA+e2JhbmRNZW1iZXJzW3BlcnNvbl0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2VmNDQ3ZSwjZjY5ZDFhKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNsb3NlXCIgXCJwaG90b3NcIiBcInBlcnNvblwiIFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDNmciAxZnIgNWZyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiwgLmluZGl2aWR1YWwgaW1nLCAuaW5kaXZpZHVhbCBoMiwgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBpbWcge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBob3RvcztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwZXJzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzBlbSkge1xuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNWZyIDFmciAzZnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0uNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2UgcGVyc29uXCIgXCJwaG90b3MgZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmRNZW1iZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.c26fd146bb699b2cdb9d.hot-update.js.map