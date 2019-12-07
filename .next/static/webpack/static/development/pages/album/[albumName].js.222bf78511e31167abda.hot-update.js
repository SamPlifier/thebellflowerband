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
    className: "jsx-3085538384",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3085538384" + " " + "album-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "",
    className: "jsx-3085538384",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\.png$")("./".concat(album, "/album-").concat(inView, ".png")),
    className: "jsx-3085538384" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3085538384" + " " + "album-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      updateInView('front');
    },
    className: "jsx-3085538384" + " " + "front ".concat(inView === 'front' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Front Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('back');
    },
    className: "jsx-3085538384" + " " + "back ".concat(inView === 'back' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Back Cover"), __jsx("button", {
    onClick: function onClick() {
      updateInView('left');
    },
    className: "jsx-3085538384" + " " + "left ".concat(inView === 'left' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Inside Left"), __jsx("button", {
    onClick: function onClick() {
      updateInView('right');
    },
    className: "jsx-3085538384" + " " + "right ".concat(inView === 'right' ? 'active' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Inside Right")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3085538384",
    __self: this
  }, ".album-controls.jsx-3085538384{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}.album-controls.jsx-3085538384 button.jsx-3085538384{border:2px solid #fff;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;background:#f69d1a;color:#222;}.active.jsx-3085538384{color:#f69d1a;}.front.jsx-3085538384{grid-area:front;}.back.jsx-3085538384{grid-area:back;}.left.jsx-3085538384{grid-area:left;}.right.jsx-3085538384{grid-area:right;}img.jsx-3085538384{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1ZpZXdBbGJ1bVNpZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCd0IsQUFHOEIsQUFVUyxBQVdSLEFBR0UsQUFHRCxBQUdBLEFBR0MsQUFJTCxXQUNmLEVBcEM2QixDQW9CN0IsQ0FNQSxBQUdBLENBTkEsQUFTQSxNQXZCaUIsYUFDSyxrQkFDTCxNQVZrQiwrQkFDQyxnQ0FDZCxLQVNLLGFBUkYscUJBQ1AsY0FDbEIsbURBT3VCLDZGQUNQLFlBQ08sbUJBQ1IsV0FDZiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9WaWV3QWxidW1TaWRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5cblxuY29uc3QgVmlld0FsYnVtU2lkZXMgPSAocHJvcHMpID0+IHtcbiAgICBsZXQgYWxidW0gPSBwcm9wcy5hbGJ1bTtcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoJ2Zyb250Jyk7XG4gICAgY29uc3QgdXBkYXRlSW5WaWV3ID0gKHZpZXcpID0+IHtcbiAgICAgICAgICAgIHNldEluVmlldyh2aWV3KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodmlldylbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIvPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZShgLi4vcHVibGljL2FsYnVtcy8ke2FsYnVtfS9hbGJ1bS0ke2luVmlld30ucG5nYCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxidW0tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgZnJvbnQgJHtpblZpZXcgPT09ICdmcm9udCcgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHt1cGRhdGVJblZpZXcoJ2Zyb250Jyl9fT5Gcm9udCBDb3ZlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BiYWNrICR7aW5WaWV3ID09PSAnYmFjaycgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHt1cGRhdGVJblZpZXcoJ2JhY2snKX19PkJhY2sgQ292ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbGVmdCAke2luVmlldyA9PT0gJ2xlZnQnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdsZWZ0Jyl9fT5JbnNpZGUgTGVmdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2ByaWdodCAke2luVmlldyA9PT0gJ3JpZ2h0JyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4ge3VwZGF0ZUluVmlldygncmlnaHQnKX19Pkluc2lkZSBSaWdodDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5hbGJ1bS1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZyb250IGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgcmlnaHRcIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFwiM3JlbSAzcmVtXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBcIjUwJSA1MCVcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDJyZW07XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWNvbnRyb2xzIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcm9udCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBmcm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdBbGJ1bVNpZGVzOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewAlbumSides);

/***/ })

})
//# sourceMappingURL=[albumName].js.222bf78511e31167abda.hot-update.js.map