webpackHotUpdate("static/development/pages/album/[albumName].js",{

/***/ "./components/ViewAlbumSides.js":
/*!**************************************!*\
  !*** ./components/ViewAlbumSides.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var ViewAlbumSides = function ViewAlbumSides(props) {
  var album = props.album;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('front'),
      inView = _useState[0],
      setInView = _useState[1];

  var updateInView = function updateInView(view) {
    setInView(view);
    document.getElementsByClassName(view)[0].classList.add('active');
  };

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-629709251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-629709251" + " " + "album-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "",
    className: "jsx-629709251",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\.png$")("./".concat(album, "/album-").concat(inView, ".png")),
    className: "jsx-629709251" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-629709251" + " " + "album-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      updateInView('front');
    },
    className: "jsx-629709251" + " " + "front ".concat(inView === 'front' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Front Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('back');
    },
    className: "jsx-629709251" + " " + "back ".concat(inView === 'back' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Back Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('left');
    },
    className: "jsx-629709251" + " " + "left ".concat(inView === 'left' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Inside Left"), __jsx("button", {
    onClick: function onClick() {
      updateInView('right');
    },
    className: "jsx-629709251" + " " + "right ".concat(inView === 'right' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Inside Right")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "629709251",
    __self: this
  }, ".album-controls.jsx-629709251{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}.album-controls.jsx-629709251 button.jsx-629709251{border:2px solid #fff;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;color:#222;}.active.jsx-629709251{color:#f69d1a;}.front.jsx-629709251{grid-area:front;}.back.jsx-629709251{grid-area:back;}.left.jsx-629709251{grid-area:left;}.right.jsx-629709251{grid-area:right;}img.jsx-629709251{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1ZpZXdBbGJ1bVNpZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCd0IsQUFHOEIsQUFVUyxBQVVSLEFBR0UsQUFHRCxBQUdBLEFBR0MsQUFJTCxXQUNmLEVBbkM2QixDQW1CN0IsQ0FNQSxBQUdBLENBTkEsQUFTQSxNQXRCaUIsYUFDSyxrQkFDTCxNQVZrQiwrQkFDQyxnQ0FDZCxLQVNLLGFBUkYscUJBQ1AsY0FDbEIsbURBT3VCLDZGQUNBLG1CQUNSLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvVmlld0FsYnVtU2lkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuXG5cbmNvbnN0IFZpZXdBbGJ1bVNpZGVzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFsYnVtID0gcHJvcHMuYWxidW07XG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKCdmcm9udCcpO1xuICAgIGNvbnN0IHVwZGF0ZUluVmlldyA9ICh2aWV3KSA9PiB7XG4gICAgICAgICAgICBzZXRJblZpZXcodmlldyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHZpZXcpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoYC4uL3B1YmxpYy9hbGJ1bXMvJHthbGJ1bX0vYWxidW0tJHtpblZpZXd9LnBuZ2ApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGZyb250ICR7aW5WaWV3ID09PSAnZnJvbnQnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdmcm9udCcpfX0+RnJvbnQgQ292ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYmFjayAke2luVmlldyA9PT0gJ2JhY2snID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdiYWNrJyl9fT5CYWNrIENvdmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGxlZnQgJHtpblZpZXcgPT09ICdsZWZ0JyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4ge3VwZGF0ZUluVmlldygnbGVmdCcpfX0+SW5zaWRlIExlZnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcmlnaHQgJHtpblZpZXcgPT09ICdyaWdodCcgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHt1cGRhdGVJblZpZXcoJ3JpZ2h0Jyl9fT5JbnNpZGUgUmlnaHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuYWxidW0tY29udHJvbHMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmcm9udCBiYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0IHJpZ2h0XCI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBcIjNyZW0gM3JlbVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogXCI1MCUgNTAlXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAycmVtO1xuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGJ1bS1jb250cm9scyBidXR0b24ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcm9udCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBmcm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdBbGJ1bVNpZGVzOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewAlbumSides);

/***/ })

})
//# sourceMappingURL=[albumName].js.1ff288849fc607a9c8f6.hot-update.js.map