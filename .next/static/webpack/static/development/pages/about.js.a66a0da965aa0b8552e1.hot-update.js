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
      className: "jsx-2072099653" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-2072099653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-2072099653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-2072099653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2072099653",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2072099653",
      __self: this
    }, ".individual.jsx-2072099653{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 2rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:70px 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;box-sizing:border-box;}.individual.jsx-2072099653 button.jsx-2072099653,.individual.jsx-2072099653 img.jsx-2072099653,.individual.jsx-2072099653 h2.jsx-2072099653,.individual.jsx-2072099653 p.jsx-2072099653{color:#222;}.individual.jsx-2072099653 button.jsx-2072099653{grid-area:close;font-size:1.6rem;}.individual.jsx-2072099653 button.jsx-2072099653:hover{cursor:pointer;}.individual.jsx-2072099653 img.jsx-2072099653{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-2072099653 h2.jsx-2072099653{grid-area:person;}.individual.jsx-2072099653 p.jsx-2072099653{grid-area:description;margin-top:0;overflow-y:scroll;}button.jsx-2072099653{border:none;background:transparent;}@media only screen and (min-width:30em){.individual.jsx-2072099653{grid-template-rows:70px 5fr 1fr 3fr;}}@media only screen and (orientation:landscape){.individual.jsx-2072099653{grid-template-rows:auto auto;grid-template-columns:50% 50%;-webkit-column-gap:1rem;-webkit-column-gap:1rem;column-gap:1rem;grid-template-areas:\"close person\" \"photos description\";padding:1rem;}.individual.jsx-2072099653 h2.jsx-2072099653{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.individual.jsx-2072099653 p.jsx-2072099653{padding:0 1rem 1rem 0;}.individual.jsx-2072099653 p.jsx-2072099653::first-line{background:red;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0JKLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUtWLEFBSzRCLEFBVVAsQUFRaEIsQUFLUyxBQUdQLFdBeER2QixDQTBCMkIsR0E1Q0csQUF5QjlCLEFBa0RJLENBdERpQixDQU9OLEFBUWYsS0FHaUIsQUFpQ2IsTUEzQ2dCLENBOEJrQixJQXJDdEMsRUFrQnNCLEFBS3RCLENBSUksS0FoRHlCLEdBNkJSLFNBV3JCLE1BbUJnQyxFQTdCUixLQTdCSixRQWlFVyxPQW5DaEIsQ0E3QkgsQ0EwRFksT0F6RFgsRUE2QmIsT0E1Qm9DLHdCQXlENEIsa0RBTXJDLE1BTE4sYUFDakIsWUExRGtELGtEQUNuQyxZQThEZixHQTdEZ0IsZ0JBQ0gsYUFDK0MsNERBQ3hCLG9DQUNULDJCQUNoQixXQUNXLHNCQUMxQiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9CYW5kTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuXG5jb25zdCBCYW5kTWVtYmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGVyc29uID0gcHJvcHMudmlld1BlcnNvbjtcbiAgICBcbiAgICBpZiAodHlwZW9mIHByb3BzLnZpZXdQZXJzb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT4mIzEwMDA1OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMj57YmFuZE1lbWJlcnNbcGVyc29uXS5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5kTWVtYmVyc1twZXJzb25dLnBob3RvfS8+XG4gICAgICAgICAgICAgICAgPHA+e2JhbmRNZW1iZXJzW3BlcnNvbl0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsI2VmNDQ3ZSwjZjY5ZDFhKTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNsb3NlXCIgXCJwaG90b3NcIiBcInBlcnNvblwiIFwiZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDNmciAxZnIgNWZyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24sIC5pbmRpdmlkdWFsIGltZywgLmluZGl2aWR1YWwgaDIsIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwaG90b3M7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGVyc29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDVmciAxZnIgM2ZyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdG9wOiAtLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2UgcGVyc29uXCIgXCJwaG90b3MgZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcDo6Zmlyc3QtbGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmRNZW1iZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.a66a0da965aa0b8552e1.hot-update.js.map