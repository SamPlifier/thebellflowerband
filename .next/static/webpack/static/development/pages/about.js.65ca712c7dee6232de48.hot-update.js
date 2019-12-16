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
      className: "jsx-58294156" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-58294156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-58294156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-58294156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-58294156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "58294156",
      __self: this
    }, ".individual.jsx-58294156{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:1fr 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}@media only screen and (min-width:30em){.individual.jsx-58294156{grid-template-rows:1fr 5fr 1fr 3fr;}}@media only screen and (orientation:landscape){.individual.jsx-58294156{grid-template-rows:1fr 1fr 1fr;grid-template-columns:50% 50%;background:green;}}.individual.jsx-58294156 button.jsx-58294156,.individual.jsx-58294156 img.jsx-58294156,.individual.jsx-58294156 h2.jsx-58294156,.individual.jsx-58294156 p.jsx-58294156{color:#222;}.individual.jsx-58294156 button.jsx-58294156{grid-area:close;font-size:1.6rem;}.individual.jsx-58294156 button.jsx-58294156:hover{cursor:pointer;}.individual.jsx-58294156 img.jsx-58294156{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-58294156 h2.jsx-58294156{grid-area:person;}.individual.jsx-58294156 p.jsx-58294156{grid-area:description;margin-top:0;}button.jsx-58294156{border:none;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0J3QixBQUtKLEFBTXhCLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUlWLFdBeEJoQixDQXlCMkIsR0F0REcsQUFvQzlCLENBSnFCLENBT04sQUFRZixLQUdpQixNQVZHLEdBakJrQixFQVV0QyxFQWZJLEFBaUNKLEFBSUEsTUF0RDZCLEdBd0NSLGlCQWpCSSxBQWtCRCxLQXhDSixZQXVCaEIsR0FrQlcsQ0F4Q0gsUUFDQyxFQXdDYixPQXZDb0MseUdBQ2tCLGtEQUNuQyxlQUNDLGdCQUNILGFBQytDLDREQUN6QixtQ0FDUiwyQkFDaEIsV0FDZiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9CYW5kTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuXG5jb25zdCBCYW5kTWVtYmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGVyc29uID0gcHJvcHMudmlld1BlcnNvbjtcbiAgICBcbiAgICBpZiAodHlwZW9mIHByb3BzLnZpZXdQZXJzb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT4mIzEwMDA1OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMj57YmFuZE1lbWJlcnNbcGVyc29uXS5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5kTWVtYmVyc1twZXJzb25dLnBob3RvfS8+XG4gICAgICAgICAgICAgICAgPHA+e2JhbmRNZW1iZXJzW3BlcnNvbl0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2VmNDQ3ZSwjZjY5ZDFhKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNsb3NlXCIgXCJwaG90b3NcIiBcInBlcnNvblwiIFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmciA1ZnI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzBlbSkge1xuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyIDNmcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24sIC5pbmRpdmlkdWFsIGltZywgLmluZGl2aWR1YWwgaDIsIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwaG90b3M7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGVyc29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmRNZW1iZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.65ca712c7dee6232de48.hot-update.js.map