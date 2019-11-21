webpackHotUpdate("static/development/pages/albums.js",{

/***/ "./pages/albums.js":
/*!*************************!*\
  !*** ./pages/albums.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/albums.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Albums = function Albums() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('left'),
      inView = _useState[0],
      setInView = _useState[1];

  var updateInView = function updateInView(e, view) {
    setInView(view);
    console.log(document.getElementsByClassName('active'));
    e.currentTarget.className += " active";
  };

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "First Album ", __jsx("br", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), "Changes On The Way"), __jsx("p", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Changes On The Way is our all original, independent indy rock album. To write, rehearse, record"), __jsx("div", {
    className: "jsx-3188817607" + " " + "album-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick(e) {
      updateInView(e, 'front');
    },
    className: "jsx-3188817607" + " " + "front",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Front", __jsx("br", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "Cover"), __jsx("button", {
    onClick: function onClick(e) {
      updateInView(e, 'back');
    },
    className: "jsx-3188817607" + " " + "back",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Back", __jsx("br", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Cover"), __jsx("button", {
    onClick: function onClick(e) {
      updateInView(e, 'left');
    },
    className: "jsx-3188817607" + " " + "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Inside", __jsx("br", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), "Left"), __jsx("button", {
    onClick: function onClick(e) {
      updateInView(e, 'right');
    },
    className: "jsx-3188817607" + " " + "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Inside", __jsx("br", {
    className: "jsx-3188817607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), "Right")), __jsx("div", {
    className: "jsx-3188817607" + " " + "album-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__("./public sync recursive ^\\.\\/album\\-.*\\.png$")("./album-".concat(inView, ".png")),
    className: "jsx-3188817607" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3188817607",
    __self: this
  }, ".album-controls.jsx-3188817607{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;margin:2rem 0;}.active.jsx-3188817607{color:orange;}.front.jsx-3188817607{grid-area:front;}.back.jsx-3188817607{grid-area:back;}.left.jsx-3188817607{grid-area:left;}.right.jsx-3188817607{grid-area:right;}img.jsx-3188817607{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJ3QixBQUc4QixBQVNBLEFBR0csQUFHRCxBQUdBLEFBR0MsQUFNTCxXQUNmLEVBMUI2QixBQVE3QixFQU1BLEFBR0EsQ0FOQSxBQVNBLDJDQW5CbUMsK0JBQ0MsZ0NBQ2Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2FsYnVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuXG5jb25zdCBBbGJ1bXMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKCdsZWZ0Jyk7XG4gICAgY29uc3QgdXBkYXRlSW5WaWV3ID0gKGUsdmlldykgPT4ge1xuICAgICAgICAgICAgc2V0SW5WaWV3KHZpZXcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IGAgYWN0aXZlYDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMT5GaXJzdCBBbGJ1bSA8YnIgLz5DaGFuZ2VzIE9uIFRoZSBXYXk8L2gxPlxuICAgICAgICAgICAgICAgIDxwPkNoYW5nZXMgT24gVGhlIFdheSBpcyBvdXIgYWxsIG9yaWdpbmFsLCBpbmRlcGVuZGVudCBpbmR5IHJvY2sgYWxidW0uIFRvIHdyaXRlLCByZWhlYXJzZSwgcmVjb3JkPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bmcm9udGB9IG9uQ2xpY2s9eyhlKSA9PiB7dXBkYXRlSW5WaWV3KGUsICdmcm9udCcpfX0+RnJvbnQ8YnIvPkNvdmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmFja1wiIG9uQ2xpY2s9eyhlKSA9PiB7dXBkYXRlSW5WaWV3KGUsICdiYWNrJyl9fT5CYWNrPGJyLz5Db3ZlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxlZnRcIiBvbkNsaWNrPXsoZSkgPT4ge3VwZGF0ZUluVmlldyhlLCAnbGVmdCcpfX0+SW5zaWRlPGJyLz5MZWZ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmlnaHRcIiBvbkNsaWNrPXsoZSkgPT4ge3VwZGF0ZUluVmlldyhlLCAncmlnaHQnKX19Pkluc2lkZTxici8+UmlnaHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoYC4uL3B1YmxpYy9hbGJ1bS0ke2luVmlld30ucG5nYCl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYWxidW0tY29udHJvbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmcm9udCBiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IHJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBcIjNyZW0gM3JlbVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogXCI1MCUgNTAlXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcm9udCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBmcm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWNvbnRhaW5lciB7XG4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtczsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/albums.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ })

})
//# sourceMappingURL=albums.js.2285ae30f0f6d78d0675.hot-update.js.map