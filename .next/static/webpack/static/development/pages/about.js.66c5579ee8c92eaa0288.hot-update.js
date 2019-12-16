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
      className: "jsx-3242729256" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-3242729256",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-3242729256",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-3242729256",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-3242729256",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3242729256",
      __self: this
    }, ".individual.jsx-3242729256{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:1fr 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}@media only screen and (min-width:30em){.individual.jsx-3242729256{grid-template-rows:1fr 5fr 1fr 3fr;}}.individual.jsx-3242729256 button.jsx-3242729256,.individual.jsx-3242729256 img.jsx-3242729256,.individual.jsx-3242729256 h2.jsx-3242729256,.individual.jsx-3242729256 p.jsx-3242729256{color:#222;}.individual.jsx-3242729256 button.jsx-3242729256{grid-area:close;font-size:1.6rem;}.individual.jsx-3242729256 button.jsx-3242729256:hover{cursor:pointer;}.individual.jsx-3242729256 img.jsx-3242729256{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-3242729256 h2.jsx-3242729256{grid-area:person;}.individual.jsx-3242729256 p.jsx-3242729256{grid-area:description;margin-top:0;}button.jsx-3242729256{border:none;background:transparent;}@media only screen and (orientation:landscape){.individual.jsx-3242729256{grid-template-rows:1fr 3fr 2fr;grid-template-columns:40% 60%;-webkit-column-gap:1rem;column-gap:1rem;grid-template-areas:\"close close\" \"photos description\" \"person description\";}.individual.jsx-3242729256 h2.jsx-3242729256{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.individual.jsx-3242729256 p.jsx-3242729256{padding-right:1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0J3QixBQUk1QixBQUdLLEFBSUQsQUFHRSxBQVFBLEFBR0ssQUFJVixBQUt1QixBQU1sQixBQUtNLFdBeEMzQixDQXlCMkIsR0EvQ0csQUE2QjlCLENBSnFCLENBT04sQUFRZixFQXVCSSxHQXBCYSxNQVZHLEdBbUJrQixFQTFCdEMsRUFSSSxBQTBCSixBQUlBLE1BL0M2QixHQWlDUixpQkFDRyxBQWtCQSxLQW5ESixRQXdEVyxPQXRCaEIsQ0FqQ0gsUUFDQyxFQWlDYixPQWhDb0MsRUFpRGdELHdFQUt6RCxJQUp2QiwyQkFqRGtELGtEQUNuQyxZQXFEZixHQXBEZ0IsZ0JBQ0gsYUFDK0MsNERBQ3pCLG1DQUNSLDJCQUNoQixXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFuZE1lbWJlcnMgZnJvbSAnLi4vcHVibGljL211c2ljaWFucy5qcyc7XG5cbmNvbnN0IEJhbmRNZW1iZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwZXJzb24gPSBwcm9wcy52aWV3UGVyc29uO1xuICAgIFxuICAgIGlmICh0eXBlb2YgcHJvcHMudmlld1BlcnNvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xvc2V9PiYjMTAwMDU7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgyPntiYW5kTWVtYmVyc1twZXJzb25dLm11c2ljaWFufTwvaDI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhbmRNZW1iZXJzW3BlcnNvbl0ucGhvdG99Lz5cbiAgICAgICAgICAgICAgICA8cD57YmFuZE1lbWJlcnNbcGVyc29uXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZWY0NDdlLCNmNjlkMWEpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2VcIiBcInBob3Rvc1wiIFwicGVyc29uXCIgXCJkZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyIDVmcjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnIgM2ZyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiwgLmluZGl2aWR1YWwgaW1nLCAuaW5kaXZpZHVhbCBoMiwgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBpbWcge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBob3RvcztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwZXJzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA2MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZSBjbG9zZVwiIFwicGhvdG9zIGRlc2NyaXB0aW9uXCIgXCJwZXJzb24gZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuZE1lbWJlcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.66c5579ee8c92eaa0288.hot-update.js.map