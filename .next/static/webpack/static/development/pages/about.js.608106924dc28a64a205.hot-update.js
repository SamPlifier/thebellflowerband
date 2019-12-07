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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ABOUT THE BAND"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "orangeBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "bandPourHouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "aboutBand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT THE INDIVIDUALS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Click on a band member for details."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "individuals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (member, i) {
    return __jsx("div", {
      key: i,
      "data-member": i,
      onClick: function onClick() {
        viewBandMember(i);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "bandMemberCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: member.svg,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, member.musician), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, member.instrument));
  })), __jsx(_components_BandMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewPerson: bandMember,
    close: viewBandMember,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1034689954",
    dynamic: [bandPhoto],
    __self: this
  }, ".aboutBand.__jsx-style-dynamic-selector{text-align:justify;}.aboutUsImg.__jsx-style-dynamic-selector{width:100%;height:calc(45vw - 2rem);object-fit:cover;}.orangeBackground.__jsx-style-dynamic-selector{background:#f69d1a;}.bandPourHouse.__jsx-style-dynamic-selector{height:calc(50vw - 2rem);background:url(".concat(bandPhoto, ");background-size:cover;background-repeat:no-repeat;background-position:center;opacity:0.5;}.bandMemberCard.__jsx-style-dynamic-selector{padding:2rem;margin:2rem 0;box-shadow:0px 2px 0px 0px #f89e00;}.bandMemberCard.__jsx-style-dynamic-selector:hover{cursor:pointer;}.bandMemberCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:#f69d1a;}.individuals.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{object-fit:contain;height:120px;}@media only screen and (min-width:700px){.individuals.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.bandMemberCard.__jsx-style-dynamic-selector{padding:0;margin:2rem;width:calc(50% - 4rem);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QndCLEFBR29DLEFBR1IsQUFLUSxBQUdNLEFBUVosQUFLRSxBQUdELEFBR0ssQUFLRixBQUlILFVBQ0UsQ0FwQ1MsRUFnQlgsQ0FRbEIsQ0FIQSxJQXhCQSxBQVFBLEFBc0JpQixHQVVjLEdBN0JrQixFQVNWLEtBV3ZDLElBM0JxQixTQXFDakIsUUFwQ0osU0FnQkEsUUFUMEIsSUF1Qkgsa0JBdEJTLDRCQUNELFdBc0IzQixnQkFyQlksWUFDaEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcbmltcG9ydCBCYW5kTWVtYmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFuZE1lbWJlcic7XG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBbYmFuZE1lbWJlciwgc2V0QmFuZE1lbWJlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgdmlld0JhbmRNZW1iZXIgPSAoYmFuZE1lbWJlcikgPT4ge1xuICAgICAgICB0eXBlb2YgYmFuZE1lbWJlciA9PT0gJ251bWJlcicgPyBzZXRCYW5kTWVtYmVyKGJhbmRNZW1iZXIpIDogc2V0QmFuZE1lbWJlcihmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGJhbmRQaG90byA9IHJlcXVpcmUoJy4uL3B1YmxpYy9iZWxsZmxvd2VyLWdyb3VwLmpwZycpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgQkFORDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yYW5nZUJhY2tncm91bmRcIj48ZGl2IGNsYXNzTmFtZT1cImJhbmRQb3VySG91c2VcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0QmFuZFwiPkJlbGxmbG93ZXIgcGxheXMgb3JpZ2luYWwgcm9jayBtdXNpYyBpbiBhbmQgYXJvdW5kIENoYXBlbCBIaWxsIGFuZCB0aGUgVHJpYW5nbGUsIE5vcnRoIENhcm9saW5hLCBjZW50ZXJpbmcgb24gdGhlIHNvYXJpbmcgdm9pY2Ugb2YgTmF0YXNoYSBXaWxzb24uIFRoZSBncm91cCBvcmlnaW5hdGVkIHdpdGggdGhlIHNvbmd3cml0aW5nIGNvbGxhYm9yYXRpb24gb2YgTmF0YXNoYSBhbmQgZ3VpdGFyaXN0IEZyYW5rbGluIEJlbGxmbG93ZXIsIHdob3NlIHNvbGlkIHJoeXRobSBhbmQgbWVsb2RpYyBsZWFkIHBsYXlpbmcgYXJlIGEga2V5IGVsZW1lbnQgb2YgdGhlIG11c2ljLiBEcnVtbWVyIEplZmYgTGluZHNleSBhbmQgcGVyY3Vzc2lvbmlzdCBDaW5keSBKb25lcyBwcm92aWRlIG51YW5jZWQgcmh5dGhtaWMgcHJvcHVsc2lvbiwgd2hpbGUgbXVsdGktaW5zdHJ1bWVudGFsaXN0IFNhbSBEYXZpcy1DYXN0cm8gYWRkcyBhIHZhc3Qgc29uaWMgcGFsZXR0ZSB0aGF0IHRha2VzIHRoZSBtdXNpYyB0byBhbm90aGVyIGxldmVsLiBCYXNzaXN0ICZhbXA7IHNvbmd3cml0ZXIgRGF2aWQgQ3Jpc3dlbGwgaG9sZHMgZG93biB0aGUgYm90dG9tIGFuZCBvZmZlcnMgbmV3IG1hdGVyaWFsIGZvciB0aGUgYmFuZCB0byBleHBsb3JlLjwvcD5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgSU5ESVZJRFVBTFM8L2gyPlxuICAgICAgICAgICAgPHA+Q2xpY2sgb24gYSBiYW5kIG1lbWJlciBmb3IgZGV0YWlscy48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxzXCI+XG4gICAgICAgICAgICAgICAge2JhbmRNZW1iZXJzLm1hcCgobWVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gZGF0YS1tZW1iZXI9e2l9IGNsYXNzTmFtZT1cImJhbmRNZW1iZXJDYXJkXCIgb25DbGljaz17KCkgPT4ge3ZpZXdCYW5kTWVtYmVyKGkpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lbWJlci5zdmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnttZW1iZXIubXVzaWNpYW59PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVtYmVyLmluc3RydW1lbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJhbmRNZW1iZXIgdmlld1BlcnNvbj17YmFuZE1lbWJlcn0gY2xvc2U9e3ZpZXdCYW5kTWVtYmVyfT48L0JhbmRNZW1iZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYWJvdXRCYW5kIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFib3V0VXNJbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0NXZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3JhbmdlQmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kUG91ckhvdXNlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2JhbmRQaG90b30pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IDBweCAjZjg5ZTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFuZE1lbWJlckNhcmQgaDIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmluZGl2aWR1YWxzIGltZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KSB7XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWxzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRyZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.608106924dc28a64a205.hot-update.js.map