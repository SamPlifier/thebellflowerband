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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ABOUT THE BAND"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]) + " " + "orangeBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]) + " " + "bandPourHouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]) + " " + "aboutBand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT THE INDIVIDUALS"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]) + " " + "individuals",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]) + " " + "bandMemberCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("img", {
      src: member.svg,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, member.musician), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["330189733", [bandPhoto]]]),
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
    id: "330189733",
    dynamic: [bandPhoto],
    __self: this
  }, ".aboutBand.__jsx-style-dynamic-selector{text-align:justify;}.aboutUsImg.__jsx-style-dynamic-selector{width:100%;height:calc(45vw - 2rem);object-fit:cover;}.orangeBackground.__jsx-style-dynamic-selector{background:#f69d1a;}.bandPourHouse.__jsx-style-dynamic-selector{height:calc(50vw - 2rem);background:url(".concat(bandPhoto, ");background-size:cover;background-repeat:no-repeat;background-position:center;opacity:0.5;}.bandMemberCard.__jsx-style-dynamic-selector{padding-top:2rem;margin:2rem 0;border:2px solid #f69d1a;}.bandMemberCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:#f69d1a;}@media only screen and (min-width:500px){.individuals.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.bandMemberCard.__jsx-style-dynamic-selector{margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QndCLEFBR29DLEFBR1IsQUFLUSxBQUdNLEFBUVIsQUFLSCxBQUlHLEFBSUosU0FDYixFQTdCeUIsR0FxQjdCLEdBTGtCLEVBbkJsQixBQVFBLE1BR2lELE1BU3BCLEtBaEJSLGlCQUNyQixHQWdCQSxjQVQwQixJQWdCSCxrQkFmUyw0QkFDRCxXQWUzQixnQkFkWSxZQUNoQiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuaW1wb3J0IEJhbmRNZW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5kTWVtYmVyJztcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtiYW5kTWVtYmVyLCBzZXRCYW5kTWVtYmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB2aWV3QmFuZE1lbWJlciA9IChiYW5kTWVtYmVyKSA9PiB7XG4gICAgICAgIHR5cGVvZiBiYW5kTWVtYmVyID09PSAnbnVtYmVyJyA/IHNldEJhbmRNZW1iZXIoYmFuZE1lbWJlcikgOiBzZXRCYW5kTWVtYmVyKGZhbHNlKTtcbiAgICB9XG4gICAgY29uc3QgYmFuZFBob3RvID0gcmVxdWlyZSgnLi4vcHVibGljL2JlbGxmbG93ZXItZ3JvdXAuanBnJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGgyPkFCT1VUIFRIRSBCQU5EPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JhbmdlQmFja2dyb3VuZFwiPjxkaXYgY2xhc3NOYW1lPVwiYmFuZFBvdXJIb3VzZVwiPjwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXRCYW5kXCI+QmVsbGZsb3dlciBwbGF5cyBvcmlnaW5hbCByb2NrIG11c2ljIGluIGFuZCBhcm91bmQgQ2hhcGVsIEhpbGwgYW5kIHRoZSBUcmlhbmdsZSwgTm9ydGggQ2Fyb2xpbmEsIGNlbnRlcmluZyBvbiB0aGUgc29hcmluZyB2b2ljZSBvZiBOYXRhc2hhIFdpbHNvbi4gVGhlIGdyb3VwIG9yaWdpbmF0ZWQgd2l0aCB0aGUgc29uZ3dyaXRpbmcgY29sbGFib3JhdGlvbiBvZiBOYXRhc2hhIGFuZCBndWl0YXJpc3QgRnJhbmtsaW4gQmVsbGZsb3dlciwgd2hvc2Ugc29saWQgcmh5dGhtIGFuZCBtZWxvZGljIGxlYWQgcGxheWluZyBhcmUgYSBrZXkgZWxlbWVudCBvZiB0aGUgbXVzaWMuIERydW1tZXIgSmVmZiBMaW5kc2V5IGFuZCBwZXJjdXNzaW9uaXN0IENpbmR5IEpvbmVzIHByb3ZpZGUgbnVhbmNlZCByaHl0aG1pYyBwcm9wdWxzaW9uLCB3aGlsZSBtdWx0aS1pbnN0cnVtZW50YWxpc3QgU2FtIERhdmlzLUNhc3RybyBhZGRzIGEgdmFzdCBzb25pYyBwYWxldHRlIHRoYXQgdGFrZXMgdGhlIG11c2ljIHRvIGFub3RoZXIgbGV2ZWwuIEJhc3Npc3QgJmFtcDsgc29uZ3dyaXRlciBEYXZpZCBDcmlzd2VsbCBob2xkcyBkb3duIHRoZSBib3R0b20gYW5kIG9mZmVycyBuZXcgbWF0ZXJpYWwgZm9yIHRoZSBiYW5kIHRvIGV4cGxvcmUuPC9wPlxuICAgICAgICAgICAgPGgyPkFCT1VUIFRIRSBJTkRJVklEVUFMUzwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGl2aWR1YWxzXCI+XG4gICAgICAgICAgICAgICAge2JhbmRNZW1iZXJzLm1hcCgobWVtYmVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gZGF0YS1tZW1iZXI9e2l9IGNsYXNzTmFtZT1cImJhbmRNZW1iZXJDYXJkXCIgb25DbGljaz17KCkgPT4ge3ZpZXdCYW5kTWVtYmVyKGkpfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e21lbWJlci5zdmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnttZW1iZXIubXVzaWNpYW59PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bWVtYmVyLmluc3RydW1lbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJhbmRNZW1iZXIgdmlld1BlcnNvbj17YmFuZE1lbWJlcn0gY2xvc2U9e3ZpZXdCYW5kTWVtYmVyfT48L0JhbmRNZW1iZXI+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYWJvdXRCYW5kIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFib3V0VXNJbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0NXZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3JhbmdlQmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kUG91ckhvdXNlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke2JhbmRQaG90b30pO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIGgyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.50c88c60dc4853071d58.hot-update.js.map