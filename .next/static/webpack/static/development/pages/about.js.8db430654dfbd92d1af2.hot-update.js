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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ABOUT THE BAND"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]) + " " + "orangeBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]) + " " + "bandPourHouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]) + " " + "aboutBand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT THE INDIVIDUALS"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]) + " " + "individuals",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]) + " " + "bandMemberCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: member.svg,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, member.musician), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2761657514", [bandPhoto]]]),
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
    id: "2761657514",
    dynamic: [bandPhoto],
    __self: this
  }, ".aboutBand.__jsx-style-dynamic-selector{text-align:justify;}.aboutUsImg.__jsx-style-dynamic-selector{width:100%;height:calc(45vw - 2rem);object-fit:cover;}.orangeBackground.__jsx-style-dynamic-selector{background:#f69d1a;}.bandPourHouse.__jsx-style-dynamic-selector{height:calc(50vw - 2rem);background:url(".concat(bandPhoto, ");background-size:cover;background-repeat:no-repeat;background-position:center;opacity:0.5;}.bandMemberCard.__jsx-style-dynamic-selector{padding-top:2rem;margin:2rem 0;border:2px solid #f69d1a;}.bandMemberCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:#f69d1a;}@media only screen and (min-width:500px){.individuals.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBR29DLEFBR1IsQUFLUSxBQUdNLEFBUVIsQUFLSCxBQUlHLFdBeEJRLEdBcUI3QixHQUxrQixFQW5CbEIsQUFRQSxNQUdpRCxNQVNwQixLQWhCUixpQkFDckIsR0FnQkEsY0FUMEIsSUFnQkgsa0JBZlMsNEJBQ0QsV0FlM0IsZ0JBZFksWUFDaEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcbmltcG9ydCBCYW5kTWVtYmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFuZE1lbWJlcic7XG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBbYmFuZE1lbWJlciwgc2V0QmFuZE1lbWJlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgdmlld0JhbmRNZW1iZXIgPSAoYmFuZE1lbWJlcikgPT4ge1xuICAgICAgICB0eXBlb2YgYmFuZE1lbWJlciA9PT0gJ251bWJlcicgPyBzZXRCYW5kTWVtYmVyKGJhbmRNZW1iZXIpIDogc2V0QmFuZE1lbWJlcihmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGJhbmRQaG90byA9IHJlcXVpcmUoJy4uL3B1YmxpYy9iZWxsZmxvd2VyLWdyb3VwLmpwZycpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgQkFORDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yYW5nZUJhY2tncm91bmRcIj48ZGl2IGNsYXNzTmFtZT1cImJhbmRQb3VySG91c2VcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0QmFuZFwiPkJlbGxmbG93ZXIgcGxheXMgb3JpZ2luYWwgcm9jayBtdXNpYyBpbiBhbmQgYXJvdW5kIENoYXBlbCBIaWxsIGFuZCB0aGUgVHJpYW5nbGUsIE5vcnRoIENhcm9saW5hLCBjZW50ZXJpbmcgb24gdGhlIHNvYXJpbmcgdm9pY2Ugb2YgTmF0YXNoYSBXaWxzb24uIFRoZSBncm91cCBvcmlnaW5hdGVkIHdpdGggdGhlIHNvbmd3cml0aW5nIGNvbGxhYm9yYXRpb24gb2YgTmF0YXNoYSBhbmQgZ3VpdGFyaXN0IEZyYW5rbGluIEJlbGxmbG93ZXIsIHdob3NlIHNvbGlkIHJoeXRobSBhbmQgbWVsb2RpYyBsZWFkIHBsYXlpbmcgYXJlIGEga2V5IGVsZW1lbnQgb2YgdGhlIG11c2ljLiBEcnVtbWVyIEplZmYgTGluZHNleSBhbmQgcGVyY3Vzc2lvbmlzdCBDaW5keSBKb25lcyBwcm92aWRlIG51YW5jZWQgcmh5dGhtaWMgcHJvcHVsc2lvbiwgd2hpbGUgbXVsdGktaW5zdHJ1bWVudGFsaXN0IFNhbSBEYXZpcy1DYXN0cm8gYWRkcyBhIHZhc3Qgc29uaWMgcGFsZXR0ZSB0aGF0IHRha2VzIHRoZSBtdXNpYyB0byBhbm90aGVyIGxldmVsLiBCYXNzaXN0ICZhbXA7IHNvbmd3cml0ZXIgRGF2aWQgQ3Jpc3dlbGwgaG9sZHMgZG93biB0aGUgYm90dG9tIGFuZCBvZmZlcnMgbmV3IG1hdGVyaWFsIGZvciB0aGUgYmFuZCB0byBleHBsb3JlLjwvcD5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgSU5ESVZJRFVBTFM8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsc1wiPlxuICAgICAgICAgICAgICAgIHtiYW5kTWVtYmVycy5tYXAoKG1lbWJlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGRhdGEtbWVtYmVyPXtpfSBjbGFzc05hbWU9XCJiYW5kTWVtYmVyQ2FyZFwiIG9uQ2xpY2s9eygpID0+IHt2aWV3QmFuZE1lbWJlcihpKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZW1iZXIuc3ZnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWVtYmVyLm11c2ljaWFufTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lbWJlci5pbnN0cnVtZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCYW5kTWVtYmVyIHZpZXdQZXJzb249e2JhbmRNZW1iZXJ9IGNsb3NlPXt2aWV3QmFuZE1lbWJlcn0+PC9CYW5kTWVtYmVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFib3V0QmFuZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hYm91dFVzSW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNDV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9yYW5nZUJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFuZFBvdXJIb3VzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtiYW5kUGhvdG99KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kTWVtYmVyQ2FyZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kTWVtYmVyQ2FyZCBoMiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbHMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.8db430654dfbd92d1af2.hot-update.js.map