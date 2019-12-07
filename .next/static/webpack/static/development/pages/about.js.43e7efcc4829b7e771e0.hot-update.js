webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/musicians.js */ "./public/musicians.js");
/* harmony import */ var _components_BandMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BandMember */ "./components/BandMember.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      bandMember = _useState[0],
      setBandMember = _useState[1];

  var viewBandMember = function viewBandMember(bandMember) {
    typeof bandMember === 'number' ? setBandMember(bandMember) : setBandMember(false);
  };

  var bandPhoto = __webpack_require__(/*! ../public/bellflower-group.jpg */ "./public/bellflower-group.jpg");

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ABOUT THE BAND"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]) + " " + "orangeBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]) + " " + "bandPourHouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]) + " " + "aboutBand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT THE INDIVIDUALS"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]) + " " + "individuals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (member, i) {
    return __jsx("div", {
      key: i,
      "data-member": i,
      onClick: function onClick() {
        viewBandMember(i);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]) + " " + "bandMemberCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: member.svg,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, member.musician), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1539399278", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, member.instrument));
  })), __jsx(_components_BandMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewPerson: bandMember,
    close: viewBandMember,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1539399278",
    dynamic: [bandPhoto],
    __self: this
  }, ".aboutBand.__jsx-style-dynamic-selector{text-align:justify;}.aboutUsImg.__jsx-style-dynamic-selector{width:100%;height:calc(45vw - 2rem);object-fit:cover;}.orangeBackground.__jsx-style-dynamic-selector{background:#f69d1a;}.bandPourHouse.__jsx-style-dynamic-selector{height:calc(50vw - 2rem);background:url(".concat(bandPhoto, ");background-size:cover;background-repeat:no-repeat;background-position:center;opacity:0.5;}.bandMemberCard.__jsx-style-dynamic-selector{padding-top:2rem;margin:2rem 0;border:2px solid #f69d1a;}.bandMemberCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:#f69d1a;}@media only screen and (min-width:500px){.individuals.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.bandMemberCard.__jsx-style-dynamic-selector{padding:2rem;margin:2rem;width:calc(50% - 8rem);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBR29DLEFBR1IsQUFLUSxBQUdNLEFBUVIsQUFLSCxBQUlHLEFBSUEsV0E1QlEsRUE2QlQsQ0FScEIsR0FMa0IsRUFuQmxCLEFBUUEsTUFHaUQsQUFzQmxCLE1BYkYsS0FoQlIsWUE4QmpCLEtBN0JKLEdBZ0JBLGNBVDBCLElBZ0JILGtCQWZTLDRCQUNELFdBZTNCLGdCQWRZLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYmFuZE1lbWJlcnMgZnJvbSAnLi4vcHVibGljL211c2ljaWFucy5qcyc7XG5pbXBvcnQgQmFuZE1lbWJlciBmcm9tICcuLi9jb21wb25lbnRzL0JhbmRNZW1iZXInO1xuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2JhbmRNZW1iZXIsIHNldEJhbmRNZW1iZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHZpZXdCYW5kTWVtYmVyID0gKGJhbmRNZW1iZXIpID0+IHtcbiAgICAgICAgdHlwZW9mIGJhbmRNZW1iZXIgPT09ICdudW1iZXInID8gc2V0QmFuZE1lbWJlcihiYW5kTWVtYmVyKSA6IHNldEJhbmRNZW1iZXIoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBiYW5kUGhvdG8gPSByZXF1aXJlKCcuLi9wdWJsaWMvYmVsbGZsb3dlci1ncm91cC5qcGcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIEJBTkQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmFuZ2VCYWNrZ3JvdW5kXCI+PGRpdiBjbGFzc05hbWU9XCJiYW5kUG91ckhvdXNlXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dEJhbmRcIj5CZWxsZmxvd2VyIHBsYXlzIG9yaWdpbmFsIHJvY2sgbXVzaWMgaW4gYW5kIGFyb3VuZCBDaGFwZWwgSGlsbCBhbmQgdGhlIFRyaWFuZ2xlLCBOb3J0aCBDYXJvbGluYSwgY2VudGVyaW5nIG9uIHRoZSBzb2FyaW5nIHZvaWNlIG9mIE5hdGFzaGEgV2lsc29uLiBUaGUgZ3JvdXAgb3JpZ2luYXRlZCB3aXRoIHRoZSBzb25nd3JpdGluZyBjb2xsYWJvcmF0aW9uIG9mIE5hdGFzaGEgYW5kIGd1aXRhcmlzdCBGcmFua2xpbiBCZWxsZmxvd2VyLCB3aG9zZSBzb2xpZCByaHl0aG0gYW5kIG1lbG9kaWMgbGVhZCBwbGF5aW5nIGFyZSBhIGtleSBlbGVtZW50IG9mIHRoZSBtdXNpYy4gRHJ1bW1lciBKZWZmIExpbmRzZXkgYW5kIHBlcmN1c3Npb25pc3QgQ2luZHkgSm9uZXMgcHJvdmlkZSBudWFuY2VkIHJoeXRobWljIHByb3B1bHNpb24sIHdoaWxlIG11bHRpLWluc3RydW1lbnRhbGlzdCBTYW0gRGF2aXMtQ2FzdHJvIGFkZHMgYSB2YXN0IHNvbmljIHBhbGV0dGUgdGhhdCB0YWtlcyB0aGUgbXVzaWMgdG8gYW5vdGhlciBsZXZlbC4gQmFzc2lzdCAmYW1wOyBzb25nd3JpdGVyIERhdmlkIENyaXN3ZWxsIGhvbGRzIGRvd24gdGhlIGJvdHRvbSBhbmQgb2ZmZXJzIG5ldyBtYXRlcmlhbCBmb3IgdGhlIGJhbmQgdG8gZXhwbG9yZS48L3A+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIElORElWSURVQUxTPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbHNcIj5cbiAgICAgICAgICAgICAgICB7YmFuZE1lbWJlcnMubWFwKChtZW1iZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBkYXRhLW1lbWJlcj17aX0gY2xhc3NOYW1lPVwiYmFuZE1lbWJlckNhcmRcIiBvbkNsaWNrPXsoKSA9PiB7dmlld0JhbmRNZW1iZXIoaSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVtYmVyLnN2Z30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21lbWJlci5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZW1iZXIuaW5zdHJ1bWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QmFuZE1lbWJlciB2aWV3UGVyc29uPXtiYW5kTWVtYmVyfSBjbG9zZT17dmlld0JhbmRNZW1iZXJ9PjwvQmFuZE1lbWJlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hYm91dEJhbmQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWJvdXRVc0ltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDQ1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vcmFuZ2VCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRQb3VySG91c2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1MHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7YmFuZFBob3RvfSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFuZE1lbWJlckNhcmQgaDIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDhyZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.43e7efcc4829b7e771e0.hot-update.js.map