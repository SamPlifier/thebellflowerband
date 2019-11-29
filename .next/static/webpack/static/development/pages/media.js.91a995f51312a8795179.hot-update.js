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
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "VIDEO"), __jsx("p", {
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-3988965020" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3988965020" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Loading"), __jsx("div", {
    className: "jsx-3988965020" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("iframe", {
    scrolling: true,
    src: "https://www.youtube.com/embed/Ofv5mz3Jvak",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))), __jsx("p", {
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-3988965020" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3988965020" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/M_JR38PYAgs",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-3988965020" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3988965020" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ojt7JEuhWyM",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-3988965020",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "POSTERS"), __jsx("img", {
    onClick: function onClick() {
      posterCycle(posterNum);
    },
    src: __webpack_require__("./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$")("./bellflowerPoster".concat(posterNum, ".jpg")),
    className: "jsx-3988965020" + " " + "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3988965020",
    __self: this
  }, ".container.jsx-3988965020{z-index:2;}iframe.jsx-3988965020{width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);border:2px solid #f69d1a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;z-index:2;}.videoContainer.jsx-3988965020{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}.loading.jsx-3988965020{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}audio.jsx-3988965020{width:100%;border-radius:30px;border:2px solid #f69d1a;}.poster.jsx-3988965020{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzRCLEFBR21DLEFBR1csQUFXUixBQVVBLEFBV0YsQUFLQSxVQXZDZixDQW1DdUIsQUFLdkIsY0FyQzRCLEtBaUNDLHVCQWhDSixFQWlDekIsbUJBdkIwQixBQVVDLElBbkJkLDBFQUNVLEFBU0kscUJBVUosOEVBbEJMLEFBU0ssZUFVTSxHQWhCbkIsVUFDVixZQWdCZ0MsNEJBQ1Ysa0JBQ0MsT0FaTCxZQWFILEVBWk8sU0FhUixTQVplLENBYTdCLHdCQVpnQyw0QkFDaEMiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL21lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWVkaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3Rlck51bSwgc2V0UG9zdGVyTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IHBvc3RlckN5Y2xlID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtID09PSAzKSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0oMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0ocG9zdGVyTnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5WSURFTzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U1BBUktjb24gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+PGlmcmFtZSBzY3JvbGxpbmcgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT2Z2NW16M0p2YWtcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPkxvYWRpbmc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj48aWZyYW1lIHNjcm9sbGluZyBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PZnY1bXozSnZha1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxwPkNhcnJib3JvIE11c2ljIEZlc3RpdmFsPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL01fSlIzOFBZQWdzXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD5XSFVQIFJhZGlvPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+TG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL09qdDdKRXVoV3lNXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UE9TVEVSUzwvaDI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwb3N0ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9zdGVyQ3ljbGUocG9zdGVyTnVtKX19IHNyYz17cmVxdWlyZShgLi4vcHVibGljL2JlbGxmbG93ZXJQb3N0ZXIke3Bvc3Rlck51bX0uanBnYCl9IC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC52aWRlb0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1Ni4yNXZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ })

})
//# sourceMappingURL=media.js.91a995f51312a8795179.hot-update.js.map