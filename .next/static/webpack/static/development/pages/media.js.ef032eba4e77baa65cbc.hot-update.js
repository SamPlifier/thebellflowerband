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
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
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

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "VIDEO"), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
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
      lineNumber: 20
    },
    __self: this
  }))), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-987564105" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-987564105" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
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
      lineNumber: 30
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-987564105",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
      lineNumber: 33
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "987564105",
    __self: this
  }, ".container.jsx-987564105{z-index:2;}iframe.jsx-987564105{width:calc(100vw - 2.1rem);height:calc(56.25vw - 2.1rem);border:2px solid #f69d1a;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;z-index:2;}.videoContainer.jsx-987564105{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}@media only screen and (min-width:500px){.videoContainer.jsx-987564105{width:calc(100vw - 6rem);}}.loading.jsx-987564105{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}audio.jsx-987564105{width:100%;border-radius:30px;border:2px solid #f69d1a;}.poster.jsx-987564105{width:100%;}@media only screen and (min-width:500px){iframe.jsx-987564105,.loading.jsx-987564105{width:calc(100vw - 12rem);height:calc(56.25vw - 6rem);}.loading.jsx-987564105{left:0;top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCLEFBS3VDLEFBR2lCLEFBZVAsQUFvQlMsQUFJVCxBQWlCVCxBQUtBLEFBSW1CLEFBSW5CLE9BQ0QsR0F4RWQsQ0EyRHVCLEFBS3ZCLEVBU0ksT0F2RG9CLEFBd0JBLEtBSnBCLENBOEJnQyxDQWpFRixHQXlETCxVQXpDWixBQXdCQSxjQTBCYixDQVJKLEVBekQ2Qix5QkFDTCxvQkFDQSxZQWNRLEFBd0JKLFFBckNYLGdCQXNDWSxJQXhCSSxpQkF5QkUsWUF4QkQseUJBZE4sQ0FlTSx1QkFkTCxxQkFDTSxpQkFxQ04saUJBdkJELFFBd0JFLGdCQXZCRCxNQXdCRSxlQXZCSSxvQkFmYixrQkFDWixNQUNDLE9BQ0csVUFDZCxpQkFtQzZCLHFCQXZCQSxJQXdCRyxxQkF2QkYsT0F3QlIsZUF2QlMsR0F3QlIsbUJBQ1IsV0FDRCxVQUNkLGtEQTFCa0IsY0FDSSxrQkFDTyx5QkFDRyw0QkFDaEMiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL21lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWVkaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3Rlck51bSwgc2V0UG9zdGVyTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IHBvc3RlckN5Y2xlID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtID09PSAzKSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0oMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0ocG9zdGVyTnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5WSURFTzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U1BBUktjb24gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PZnY1bXozSnZha1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+Q2FycmJvcm8gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTV9KUjM4UFlBZ3NcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldIVVAgUmFkaW88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT2p0N0pFdWhXeU1cIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QT1NURVJTPC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RlclwiIG9uQ2xpY2s9eygpID0+IHtwb3N0ZXJDeWNsZShwb3N0ZXJOdW0pfX0gc3JjPXtyZXF1aXJlKGAuLi9wdWJsaWMvYmVsbGZsb3dlclBvc3RlciR7cG9zdGVyTnVtfS5qcGdgKX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC8qIHByZWZpeGVkIGJ5IGh0dHBzOi8vYXV0b3ByZWZpeGVyLmdpdGh1Yi5pbyAoUG9zdENTUzogdjcuMC4yMywgYXV0b3ByZWZpeGVyOiB2OS43LjMpICovXG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyLjFyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1Ni4yNXZ3IC0gMi4xcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXVkaW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLCAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDZyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYTsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=media.js.ef032eba4e77baa65cbc.hot-update.js.map