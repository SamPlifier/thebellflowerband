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
      className: "jsx-489693346" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-489693346",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-489693346",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-489693346",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-489693346",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "489693346",
      __self: this
    }, ".individual.jsx-489693346{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);top:1rem;left:1rem;background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:1fr 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}.individual.jsx-489693346 button.jsx-489693346,.individual.jsx-489693346 img.jsx-489693346,.individual.jsx-489693346 h2.jsx-489693346,.individual.jsx-489693346 p.jsx-489693346{color:#222;}.individual.jsx-489693346 button.jsx-489693346{grid-area:close;font-size:1.6rem;}.individual.jsx-489693346 img.jsx-489693346{grid-area:photos;width:100%;height:100%;object-fit:cover;object-position:top;opacity:.8;}@media only screen and (min-width:15em){.individual.jsx-489693346 img.jsx-489693346{opacity:.2;}}.individual.jsx-489693346 h2.jsx-489693346{grid-area:person;}.individual.jsx-489693346 p.jsx-489693346{grid-area:description;margin-top:0;}button.jsx-489693346{border:none;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBZUosQUFHSyxBQUlDLEFBU0YsQUFJRSxBQUdLLEFBSVYsV0ExQmhCLEFBZ0JJLENBV3VCLEdBMUNHLENBa0JULENBSU4sQUFhZixLQUdpQixNQWZELEtBSmhCLEVBb0JBLEFBSUEsS0FuQnFCLENBdkJRLGdCQXdCTCxTQXZCWCxTQUNDLEVBdUJDLFFBdEJ1QyxHQXVCdEQsK0NBdEJtQixlQUNDLGdCQUNILGFBQytDLDREQUN6QixtQ0FDUiwyQkFDaEIsV0FDZiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9CYW5kTWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuXG5jb25zdCBCYW5kTWVtYmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgcGVyc29uID0gcHJvcHMudmlld1BlcnNvbjtcbiAgICBcbiAgICBpZiAodHlwZW9mIHByb3BzLnZpZXdQZXJzb24gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT4mIzEwMDA1OzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoMj57YmFuZE1lbWJlcnNbcGVyc29uXS5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5kTWVtYmVyc1twZXJzb25dLnBob3RvfS8+XG4gICAgICAgICAgICAgICAgPHA+e2JhbmRNZW1iZXJzW3BlcnNvbl0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHJlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNlZjQ0N2UsI2Y2OWQxYSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZVwiIFwicGhvdG9zXCIgXCJwZXJzb25cIiBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnIgNWZyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b24sIC5pbmRpdmlkdWFsIGltZywgLmluZGl2aWR1YWwgaDIsIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGhvdG9zO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBwZXJzb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuZE1lbWJlcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.ca65d5c1ab2e7b3845eb.hot-update.js.map