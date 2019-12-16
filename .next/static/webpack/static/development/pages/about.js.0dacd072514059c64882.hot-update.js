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
      className: "jsx-4181151901" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-4181151901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-4181151901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-4181151901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-4181151901",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4181151901",
      __self: this
    }, ".individual.jsx-4181151901{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:1fr 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}@media only screen and (min-width:30em){.individual.jsx-4181151901{grid-template-rows:1fr 5fr 1fr 3fr;}}@media only screen and (orientation:landscape){.individual.jsx-4181151901{grid-template-rows:1fr 1fr 1fr;grid-template-columns:50% 50%;grid-template-areas:\"close close\" \"photos person\" \"description description\";background:green;}}.individual.jsx-4181151901 button.jsx-4181151901,.individual.jsx-4181151901 img.jsx-4181151901,.individual.jsx-4181151901 h2.jsx-4181151901,.individual.jsx-4181151901 p.jsx-4181151901{color:#222;}.individual.jsx-4181151901 button.jsx-4181151901{grid-area:close;font-size:1.6rem;}.individual.jsx-4181151901 button.jsx-4181151901:hover{cursor:pointer;}.individual.jsx-4181151901 img.jsx-4181151901{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-4181151901 h2.jsx-4181151901{grid-area:person;}.individual.jsx-4181151901 p.jsx-4181151901{grid-area:description;margin-top:0;}button.jsx-4181151901{border:none;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0J3QixBQUtKLEFBT3hCLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUlWLFdBeEJoQixDQXlCMkIsR0F2REcsQUFxQzlCLENBSnFCLENBT04sQUFRZixLQUdpQixNQVZHLEdBbEJrQixFQVd0QyxFQWhCSSxBQWtDSixBQUlBLE1BdkQ2QixHQXlDUixpQkFsQitELEFBbUI1RCxLQXpDSixlQTBDTCxDQXpDSCxRQUNDLEVBeUNiLE9BeENvQyxzQ0FvQlgsaUJBQ3JCLGtEQXBCa0Qsa0RBQ25DLGVBQ0MsZ0JBQ0gsYUFDK0MsNERBQ3pCLG1DQUNSLDJCQUNoQixXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFuZE1lbWJlcnMgZnJvbSAnLi4vcHVibGljL211c2ljaWFucy5qcyc7XG5cbmNvbnN0IEJhbmRNZW1iZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwZXJzb24gPSBwcm9wcy52aWV3UGVyc29uO1xuICAgIFxuICAgIGlmICh0eXBlb2YgcHJvcHMudmlld1BlcnNvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xvc2V9PiYjMTAwMDU7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgyPntiYW5kTWVtYmVyc1twZXJzb25dLm11c2ljaWFufTwvaDI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhbmRNZW1iZXJzW3BlcnNvbl0ucGhvdG99Lz5cbiAgICAgICAgICAgICAgICA8cD57YmFuZE1lbWJlcnNbcGVyc29uXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZWY0NDdlLCNmNjlkMWEpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2VcIiBcInBob3Rvc1wiIFwicGVyc29uXCIgXCJkZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyIDVmcjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnIgM2ZyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2UgY2xvc2VcIiBcInBob3RvcyBwZXJzb25cIiBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24sIC5pbmRpdmlkdWFsIGltZywgLmluZGl2aWR1YWwgaDIsIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwaG90b3M7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGVyc29uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmRNZW1iZXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.0dacd072514059c64882.hot-update.js.map