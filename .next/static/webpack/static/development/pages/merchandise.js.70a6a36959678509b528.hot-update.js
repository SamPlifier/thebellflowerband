webpackHotUpdate("static/development/pages/merchandise.js",{

/***/ "./pages/merchandise.js":
/*!******************************!*\
  !*** ./pages/merchandise.js ***!
  \******************************/
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
/* harmony import */ var _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/merchInfo.js */ "./public/merchInfo.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Merch = function Merch() {
  var merchItems = _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  console.log(merchItems);
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "ITEMS"), __jsx("div", {
    className: "jsx-2666559232" + " " + "merchContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, merchItems.map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2666559232" + " " + "merchItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2666559232" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-2666559232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.name), __jsx("div", {
      className: "jsx-2666559232" + " " + "imgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("img", {
      src: item.imgSrc,
      className: "jsx-2666559232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("p", {
      className: "jsx-2666559232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Price $", item.price), __jsx("p", {
      className: "jsx-2666559232",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Availabile at: ", item.availableAt)));
  })), __jsx("h2", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PURCHASING"), __jsx("p", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "We currently accept ", __jsx("span", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Credit Cards"), ", ", __jsx("span", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Venmo"), ", and ", __jsx("span", {
    className: "jsx-2666559232",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Paypal"), ". Contact us below if you have any questions about stock or payment details.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2666559232",
    __self: this
  }, ".payment-types.jsx-2666559232{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.jsx-2666559232{color:#f69d1a;}.merchContainer.jsx-2666559232{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.merchItem.jsx-2666559232 .imgContainer.jsx-2666559232{height:auto;}.merchItem.jsx-2666559232 .imgContainer.jsx-2666559232 img.jsx-2666559232{width:70%;object-fit:contain;}.description.jsx-2666559232{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZXJjaGFuZGlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBRzhCLEFBS0MsQUFHRCxBQVFELEFBR0YsQUFJTSxVQUhHLEVBSHZCLEVBWEEsRUFrQkEsYUFIQSw2Q0FwQmlDLEFBUVAsOEVBQ0MsNkNBUkosc0RBU3ZCLHVDQVJBIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZXJjaGFuZGlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCBtZXJjaGFuZGlzZSBmcm9tICcuLi9wdWJsaWMvbWVyY2hJbmZvLmpzJztcbmNvbnN0IE1lcmNoID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lcmNoSXRlbXMgPSBtZXJjaGFuZGlzZTtcbiAgICBjb25zb2xlLmxvZyhtZXJjaEl0ZW1zKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgyPklURU1TPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lcmNoQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZXJjaEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWVyY2hJdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdDb250YWluZXJcIj48aW1nIHNyYz17aXRlbS5pbWdTcmN9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSAmIzM2O3tpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFiaWxlIGF0OiB7aXRlbS5hdmFpbGFibGVBdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGgyPlBVUkNIQVNJTkc8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldlIGN1cnJlbnRseSBhY2NlcHQgPHNwYW4+Q3JlZGl0IENhcmRzPC9zcGFuPiwgPHNwYW4+VmVubW88L3NwYW4+LCBhbmQgPHNwYW4+UGF5cGFsPC9zcGFuPi4gQ29udGFjdCB1cyBiZWxvdyBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIGFib3V0IHN0b2NrIG9yIHBheW1lbnQgZGV0YWlscy48L3A+XG5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5wYXltZW50LXR5cGVzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaENvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmNoSXRlbSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0gLmltZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmNoSXRlbSAuaW1nQ29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lcmNoOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Merch);

/***/ })

})
//# sourceMappingURL=merchandise.js.70a6a36959678509b528.hot-update.js.map