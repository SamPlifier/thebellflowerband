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
    className: "jsx-1452216075",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1452216075" + " " + "album-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "",
    className: "jsx-1452216075",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\.png$")("./".concat(album, "/album-").concat(inView, ".png")),
    className: "jsx-1452216075" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1452216075" + " " + "album-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      updateInView('front');
    },
    className: "jsx-1452216075" + " " + "front ".concat(inView === 'front' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Front Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('back');
    },
    className: "jsx-1452216075" + " " + "back ".concat(inView === 'back' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Back Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('left');
    },
    className: "jsx-1452216075" + " " + "left ".concat(inView === 'left' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Inside Left"), __jsx("button", {
    onClick: function onClick() {
      updateInView('right');
    },
    className: "jsx-1452216075" + " " + "right ".concat(inView === 'right' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Inside Right")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1452216075",
    __self: this
  }, ".album-controls.jsx-1452216075{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}.album-controls.jsx-1452216075 button.jsx-1452216075{border:2px solid #fff;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;color:#222;}.album-controls.jsx-1452216075 button.active.jsx-1452216075{color:#fff;}.front.jsx-1452216075{grid-area:front;}.back.jsx-1452216075{grid-area:back;}.left.jsx-1452216075{grid-area:left;}.right.jsx-1452216075{grid-area:right;}img.jsx-1452216075{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1ZpZXdBbGJ1bVNpZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCd0IsQUFHOEIsQUFVUyxBQVVYLEFBR0ssQUFHRCxBQUdBLEFBR0MsQUFJTCxXQWZmLEFBZ0JBLEVBbkM2QixFQXlCN0IsQUFHQSxDQU5BLEFBU0EsTUF0QmlCLGFBQ0ssa0JBQ0wsTUFWa0IsK0JBQ0MsZ0NBQ2QsS0FTSyxhQVJGLHFCQUNQLGNBQ2xCLG1EQU91Qiw2RkFDQSxtQkFDUixXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1ZpZXdBbGJ1bVNpZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcblxuXG5jb25zdCBWaWV3QWxidW1TaWRlcyA9IChwcm9wcykgPT4ge1xuICAgIGxldCBhbGJ1bSA9IHByb3BzLmFsYnVtO1xuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZSgnZnJvbnQnKTtcbiAgICBjb25zdCB1cGRhdGVJblZpZXcgPSAodmlldykgPT4ge1xuICAgICAgICAgICAgc2V0SW5WaWV3KHZpZXcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh2aWV3KVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIi8+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKGAuLi9wdWJsaWMvYWxidW1zLyR7YWxidW19L2FsYnVtLSR7aW5WaWV3fS5wbmdgKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Bmcm9udCAke2luVmlldyA9PT0gJ2Zyb250JyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4ge3VwZGF0ZUluVmlldygnZnJvbnQnKX19PkZyb250IENvdmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJhY2sgJHtpblZpZXcgPT09ICdiYWNrJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4ge3VwZGF0ZUluVmlldygnYmFjaycpfX0+QmFjayBDb3ZlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BsZWZ0ICR7aW5WaWV3ID09PSAnbGVmdCcgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHt1cGRhdGVJblZpZXcoJ2xlZnQnKX19Pkluc2lkZSBMZWZ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHJpZ2h0ICR7aW5WaWV3ID09PSAncmlnaHQnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdyaWdodCcpfX0+SW5zaWRlIFJpZ2h0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFsYnVtLWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZnJvbnQgYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCByaWdodFwiO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogXCIzcmVtIDNyZW1cIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFwiNTAlIDUwJVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxidW0tY29udHJvbHMgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWNvbnRyb2xzIGJ1dHRvbi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZyb250IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGZyb250O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2sge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogYmFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0FsYnVtU2lkZXM7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewAlbumSides);

/***/ })

})
//# sourceMappingURL=[albumName].js.79062dd2d2e3c8bf2b47.hot-update.js.map