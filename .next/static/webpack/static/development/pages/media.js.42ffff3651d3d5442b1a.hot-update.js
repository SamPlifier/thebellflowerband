webpackHotUpdate("static/development/pages/media.js",{

/***/ "./pages/media.js":
/*!************************!*\
  !*** ./pages/media.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Media = function Media() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      posterNum = _useState[0],
      setPosterNum = _useState[1];

  var posterCycle = function posterCycle(num) {
    if (num === 3) {
      setPosterNum(1);
    } else {
      setPosterNum(posterNum + 1);
    }
  };

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Media")), __jsx("section", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "VIDEO"), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ofv5mz3Jvak",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/M_JR38PYAgs",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ojt7JEuhWyM",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "POSTERS"), __jsx("img", {
    onClick: function onClick() {
      posterCycle(posterNum);
    },
    src: __webpack_require__("./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$")("./bellflowerPoster".concat(posterNum, ".jpg")),
    className: "jsx-987564105" + " " + "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "987564105",
    __self: this
  }, ".container.jsx-987564105{z-index:2;}iframe.jsx-987564105{width:calc(100vw - 2.1rem);height:calc(56.25vw - 2.1rem);border:2px solid #f69d1a;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;z-index:2;}.videoContainer.jsx-987564105{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}@media only screen and (min-width:500px){.videoContainer.jsx-987564105{width:calc(100vw - 6rem);}}.loading.jsx-987564105{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}audio.jsx-987564105{width:100%;border-radius:30px;border:2px solid #f69d1a;}.poster.jsx-987564105{width:100%;}@media only screen and (min-width:500px){iframe.jsx-987564105,.loading.jsx-987564105{width:calc(100vw - 12rem);height:calc(56.25vw - 6rem);}.loading.jsx-987564105{left:0;top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QzRCLEFBS3VDLEFBR2lCLEFBZVAsQUFvQlMsQUFJVCxBQWlCVCxBQUtBLEFBSW1CLEFBSW5CLE9BQ0QsR0F4RWQsQ0EyRHVCLEFBS3ZCLEVBU0ksT0F2RG9CLEFBd0JBLEtBSnBCLENBOEJnQyxDQWpFRixHQXlETCxVQXpDWixBQXdCQSxjQTBCYixDQVJKLEVBekQ2Qix5QkFDTCxvQkFDQSxZQWNRLEFBd0JKLFFBckNYLGdCQXNDWSxJQXhCSSxpQkF5QkUsWUF4QkQseUJBZE4sQ0FlTSx1QkFkTCxxQkFDTSxpQkFxQ04saUJBdkJELFFBd0JFLGdCQXZCRCxNQXdCRSxlQXZCSSxvQkFmYixrQkFDWixNQUNDLE9BQ0csVUFDZCxpQkFtQzZCLHFCQXZCQSxJQXdCRyxxQkF2QkYsT0F3QlIsZUF2QlMsR0F3QlIsbUJBQ1IsV0FDRCxVQUNkLGtEQTFCa0IsY0FDSSxrQkFDTyx5QkFDRyw0QkFDaEMiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL21lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1lZGlhID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwb3N0ZXJOdW0sIHNldFBvc3Rlck51bV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBwb3N0ZXJDeWNsZSA9IChudW0pID0+IHtcbiAgICAgICAgaWYgKG51bSA9PT0gMykge1xuICAgICAgICAgICAgc2V0UG9zdGVyTnVtKDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0UG9zdGVyTnVtKHBvc3Rlck51bSArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NZWRpYTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPGF1ZGlvIGNvbnRyb2xzIHNyYz17J2h0dHBzOi8vdDQuYmNiaXRzLmNvbS9zdHJlYW0vOWNiNTE3MmZhODc0ZjcyNWNhOTFiMmQ0YzlmYWRiZGUvbXAzLTEyOC8yMTIwMDk0NDA0P3A9MCZ0cz0xNTc5OTE3OTg1JnQ9NzEyMjY0ZGVmZTcyNTZiZWQ3MjE4ZTBkZGZlNmEwODUxNDUxM2ZjNiZ0b2tlbj0xNTc5OTE3OTg1X2M0ODUyYWZjZGU0NDVmMjZlZjNmMWEwMWNkOWEyNjI4MWFhOWU3MTInfT48L2F1ZGlvPiAqL31cbiAgICAgICAgICAgICAgICA8aDI+VklERU88L2gyPlxuICAgICAgICAgICAgICAgIDxwPlNQQVJLY29uIE11c2ljIEZlc3RpdmFsPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT2Z2NW16M0p2YWtcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPkNhcnJib3JvIE11c2ljIEZlc3RpdmFsPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL01fSlIzOFBZQWdzXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5XSFVQIFJhZGlvPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL09qdDdKRXVoV3lNXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UE9TVEVSUzwvaDI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9zdGVyQ3ljbGUocG9zdGVyTnVtKX19IHNyYz17cmVxdWlyZShgLi4vcHVibGljL2JlbGxmbG93ZXJQb3N0ZXIke3Bvc3Rlck51bX0uanBnYCl9IC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAvKiBwcmVmaXhlZCBieSBodHRwczovL2F1dG9wcmVmaXhlci5naXRodWIuaW8gKFBvc3RDU1M6IHY3LjAuMjMsIGF1dG9wcmVmaXhlcjogdjkuNy4zKSAqL1xuXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMi4xcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDIuMXJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1Ni4yNXZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAucG9zdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZSwgLmxvYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDEycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSA2cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWE7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=media.js.42ffff3651d3d5442b1a.hot-update.js.map