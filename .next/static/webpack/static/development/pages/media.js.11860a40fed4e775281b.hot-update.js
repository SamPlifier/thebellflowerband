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
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "AUDIO"), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Changes On The Way"), __jsx("div", {
    className: "jsx-2482918191" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("audio", {
    src: '/audio/ChangesOnTheWay.mp3',
    controls: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "What Is Love"), __jsx("div", {
    className: "jsx-2482918191" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("audio", {
    src: '/audio/WhatIsLove.mp3',
    controls: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Blowing The Wind"), __jsx("div", {
    className: "jsx-2482918191" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("audio", {
    src: '/audio/BlowingTheWind.mp3',
    controls: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Looking For The One"), __jsx("div", {
    className: "jsx-2482918191" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("audio", {
    src: '/audio/LookingForTheOne.mp3',
    controls: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Changes On The Way"), __jsx("h2", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "VIDEO"), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-2482918191" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2482918191" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ofv5mz3Jvak",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-2482918191" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2482918191" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/M_JR38PYAgs",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-2482918191" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2482918191" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ojt7JEuhWyM",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-2482918191",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "POSTERS"), __jsx("img", {
    onClick: function onClick() {
      posterCycle(posterNum);
    },
    src: __webpack_require__("./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$")("./bellflowerPoster".concat(posterNum, ".jpg")),
    className: "jsx-2482918191" + " " + "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2482918191",
    __self: this
  }, ".container.jsx-2482918191{z-index:2;}iframe.jsx-2482918191{width:calc(100vw - 2.1rem);height:calc(56.25vw - 2.1rem);border:2px solid #f69d1a;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;z-index:2;}.videoContainer.jsx-2482918191{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}@media only screen and (min-width:500px){.videoContainer.jsx-2482918191{width:calc(100vw - 6rem);}}.loading.jsx-2482918191{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}.audio.jsx-2482918191{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#f89e00;}audio.jsx-2482918191{width:100%;}.poster.jsx-2482918191{width:100%;}@media only screen and (min-width:500px){iframe.jsx-2482918191,.loading.jsx-2482918191{width:calc(100vw - 12rem);height:calc(56.25vw - 6rem);}.loading.jsx-2482918191{left:0;top:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RDRCLEFBS3VDLEFBR2lCLEFBZVAsQUFvQlMsQUFJVCxBQWlCUCxBQU1GLEFBR0EsQUFJbUIsQUFJbkIsT0FDRCxHQTVFZCxDQWlFQSxBQUdBLEVBU0ksT0EzRG9CLEFBd0JBLEtBSnBCLENBa0NnQyxDQXJFRixhQWdCakIsQUF3QkEsY0E4QmIsR0FyRXlCLGlCQXVERixRQXRESCxvQkFDQSxZQWNRLEFBd0JKLFFBckNYLGdCQXNDWSxJQXhCSSxpQkF5QkUsWUF4QkQsRUF1Q1gsbUJBQ3ZCLElBdEQ0QixDQWVNLHVCQWRMLHFCQUNNLGlCQXFDTixpQkF2QkQsUUF3QkUsZ0JBdkJELE1Bd0JFLGVBdkJJLG9CQWZiLGtCQUNaLE1BQ0MsT0FDRyxVQUNkLGlCQW1DNkIscUJBdkJBLElBd0JHLHFCQXZCRixPQXdCUixlQXZCUyxHQXdCUixtQkFDUixXQUNELFVBQ2Qsa0RBMUJrQixjQUNJLGtCQUNPLHlCQUNHLDRCQUNoQyIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvbWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWVkaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3Rlck51bSwgc2V0UG9zdGVyTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IHBvc3RlckN5Y2xlID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtID09PSAzKSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0oMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0ocG9zdGVyTnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NZWRpYTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDI+QVVESU88L2gyPlxuICAgICAgICAgICAgICAgIDxwPkNoYW5nZXMgT24gVGhlIFdheTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdWRpbyBzcmM9eycvYXVkaW8vQ2hhbmdlc09uVGhlV2F5Lm1wMyd9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+V2hhdCBJcyBMb3ZlPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17Jy9hdWRpby9XaGF0SXNMb3ZlLm1wMyd9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+Qmxvd2luZyBUaGUgV2luZDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhdWRpbyBzcmM9eycvYXVkaW8vQmxvd2luZ1RoZVdpbmQubXAzJ30gY29udHJvbHM+PC9hdWRpbz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5Mb29raW5nIEZvciBUaGUgT25lPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17Jy9hdWRpby9Mb29raW5nRm9yVGhlT25lLm1wMyd9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+Q2hhbmdlcyBPbiBUaGUgV2F5PC9wPlxuICAgICAgICAgICAgICAgIDxoMj5WSURFTzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U1BBUktjb24gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PZnY1bXozSnZha1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+Q2FycmJvcm8gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTV9KUjM4UFlBZ3NcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldIVVAgUmFkaW88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT2p0N0pFdWhXeU1cIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QT1NURVJTPC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RlclwiIG9uQ2xpY2s9eygpID0+IHtwb3N0ZXJDeWNsZShwb3N0ZXJOdW0pfX0gc3JjPXtyZXF1aXJlKGAuLi9wdWJsaWMvYmVsbGZsb3dlclBvc3RlciR7cG9zdGVyTnVtfS5qcGdgKX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC8qIHByZWZpeGVkIGJ5IGh0dHBzOi8vYXV0b3ByZWZpeGVyLmdpdGh1Yi5pbyAoUG9zdENTUzogdjcuMC4yMywgYXV0b3ByZWZpeGVyOiB2OS43LjMpICovXG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyLjFyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1Ni4yNXZ3IC0gMi4xcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF1ZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmMWYzZjQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y4OWUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLCAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDZyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYTsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=media.js.11860a40fed4e775281b.hot-update.js.map