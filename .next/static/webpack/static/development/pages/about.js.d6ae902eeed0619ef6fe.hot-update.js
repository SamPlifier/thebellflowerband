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
      className: "jsx-1190978756" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-1190978756",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-1190978756",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-1190978756",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-1190978756",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1190978756",
      __self: this
    }, ".individual.jsx-1190978756{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 2rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:70px 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;box-sizing:border-box;}.individual.jsx-1190978756 button.jsx-1190978756,.individual.jsx-1190978756 img.jsx-1190978756,.individual.jsx-1190978756 h2.jsx-1190978756,.individual.jsx-1190978756 p.jsx-1190978756{color:#222;}.individual.jsx-1190978756 button.jsx-1190978756{grid-area:close;font-size:1.6rem;}.individual.jsx-1190978756 button.jsx-1190978756:hover{cursor:pointer;}.individual.jsx-1190978756 img.jsx-1190978756{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-1190978756 h2.jsx-1190978756{grid-area:person;}.individual.jsx-1190978756 p.jsx-1190978756{grid-area:description;margin-top:0;overflow-y:scroll;}button.jsx-1190978756{border:none;background:transparent;}@media only screen and (min-width:30em){.individual.jsx-1190978756{grid-template-rows:70px 5fr 1fr 3fr;}}@media only screen and (orientation:landscape){.individual.jsx-1190978756{grid-template-rows:auto auto;grid-template-columns:50% 50%;-webkit-column-gap:1rem;-webkit-column-gap:1rem;column-gap:1rem;grid-template-areas:\"person close\" \"description photos\";padding:1rem;}.individual.jsx-1190978756 h2.jsx-1190978756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.individual.jsx-1190978756 p.jsx-1190978756{padding:0 1rem 1rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0JKLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUtWLEFBSzRCLEFBS1AsQUFRaEIsQUFLUyxXQWhEOUIsQ0EwQjJCLEdBNUNHLEFBeUI5QixDQUpxQixDQU9OLEFBUWYsS0FHaUIsQUE0QmIsTUF0Q2dCLENBeUJrQixJQWhDdEMsRUFrQnNCLEFBS3RCLENBSUksS0FoRHlCLEdBNkJSLFNBV3JCLE1BY2dDLEVBeEJSLEtBN0JKLFFBNERXLE9BOUJoQixDQTdCSCxDQXFEWSxPQXBEWCxFQTZCYixPQTVCb0Msd0JBb0Q0QixrREFNckMsTUFMTixhQUNqQixZQXJEa0Qsa0RBQ25DLFlBeURmLEdBeERnQixnQkFDSCxhQUMrQyw0REFDeEIsb0NBQ1QsMkJBQ2hCLFdBQ1csc0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFuZE1lbWJlcnMgZnJvbSAnLi4vcHVibGljL211c2ljaWFucy5qcyc7XG5cbmNvbnN0IEJhbmRNZW1iZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwZXJzb24gPSBwcm9wcy52aWV3UGVyc29uO1xuICAgIFxuICAgIGlmICh0eXBlb2YgcHJvcHMudmlld1BlcnNvbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xvc2V9PiYjMTAwMDU7PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGgyPntiYW5kTWVtYmVyc1twZXJzb25dLm11c2ljaWFufTwvaDI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhbmRNZW1iZXJzW3BlcnNvbl0ucGhvdG99Lz5cbiAgICAgICAgICAgICAgICA8cD57YmFuZE1lbWJlcnNbcGVyc29uXS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywjZWY0NDdlLCNmNjlkMWEpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2xvc2VcIiBcInBob3Rvc1wiIFwicGVyc29uXCIgXCJkZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggM2ZyIDFmciA1ZnI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiwgLmluZGl2aWR1YWwgaW1nLCAuaW5kaXZpZHVhbCBoMiwgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBpbWcge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBob3RvcztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwZXJzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzBlbSkge1xuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNWZyIDFmciAzZnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtY29sdW1uLWdhcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInBlcnNvbiBjbG9zZVwiIFwiZGVzY3JpcHRpb24gcGhvdG9zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5kTWVtYmVyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.d6ae902eeed0619ef6fe.hot-update.js.map