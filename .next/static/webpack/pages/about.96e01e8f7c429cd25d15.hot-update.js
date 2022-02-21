webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StyleBase */ \"./components/StyleBase.js\");\n/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/musicians.js */ \"./public/musicians.js\");\n/* harmony import */ var _components_BandMember__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BandMember */ \"./components/BandMember.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/sam.davis-castro/Desktop/bellflower/thebellflowerband/pages/about.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar About = function About() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      bandMember = _useState[0],\n      setBandMember = _useState[1];\n\n  var viewBandMember = function viewBandMember(bandMember) {\n    typeof bandMember === 'number' ? setBandMember(bandMember) : setBandMember(false);\n  };\n\n  var bandPhoto = __webpack_require__(/*! ../public/bellflower-group.jpg */ \"./public/bellflower-group.jpg\");\n\n  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"section\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"h2\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, \"ABOUT THE BAND\"), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]) + \" \" + \"orangeBackground\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]) + \" \" + \"bandPourHouse\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 47\n    }\n  })), __jsx(\"p\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]) + \" \" + \"aboutBand\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore.\"), __jsx(\"h2\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"ABOUT THE INDIVIDUALS\"), __jsx(\"p\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, \"Click on a band member for details like experience, influences, or something random.\"), __jsx(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]) + \" \" + \"individuals\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (member, i) {\n    return __jsx(\"div\", {\n      key: i,\n      \"data-member\": i,\n      onClick: function onClick() {\n        viewBandMember(i);\n      },\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]) + \" \" + \"bandMemberCard\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: member.svg,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 29\n      }\n    }), __jsx(\"h2\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 29\n      }\n    }, member.musician), __jsx(\"p\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"831234537\", [bandPhoto]]]),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 29\n      }\n    }, member.instrument));\n  })), __jsx(_components_BandMember__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    viewPerson: bandMember,\n    close: viewBandMember,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"831234537\",\n    dynamic: [bandPhoto],\n    __self: _this\n  }, \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci90aGViZWxsZmxvd2VyYmFuZC9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3dCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci90aGViZWxsZmxvd2VyYmFuZC9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuaW1wb3J0IEJhbmRNZW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5kTWVtYmVyJztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2JhbmRNZW1iZXIsIHNldEJhbmRNZW1iZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHZpZXdCYW5kTWVtYmVyID0gKGJhbmRNZW1iZXIpID0+IHtcbiAgICAgICAgdHlwZW9mIGJhbmRNZW1iZXIgPT09ICdudW1iZXInID8gc2V0QmFuZE1lbWJlcihiYW5kTWVtYmVyKSA6IHNldEJhbmRNZW1iZXIoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBiYW5kUGhvdG8gPSByZXF1aXJlKCcuLi9wdWJsaWMvYmVsbGZsb3dlci1ncm91cC5qcGcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIEJBTkQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmFuZ2VCYWNrZ3JvdW5kXCI+PGRpdiBjbGFzc05hbWU9XCJiYW5kUG91ckhvdXNlXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dEJhbmRcIj5CZWxsZmxvd2VyIHBsYXlzIG9yaWdpbmFsIHJvY2sgbXVzaWMgaW4gYW5kIGFyb3VuZCBDaGFwZWwgSGlsbCBhbmQgdGhlIFRyaWFuZ2xlLCBOb3J0aCBDYXJvbGluYSwgY2VudGVyaW5nIG9uIHRoZSBzb2FyaW5nIHZvaWNlIG9mIE5hdGFzaGEgV2lsc29uLiBUaGUgZ3JvdXAgb3JpZ2luYXRlZCB3aXRoIHRoZSBzb25nd3JpdGluZyBjb2xsYWJvcmF0aW9uIG9mIE5hdGFzaGEgYW5kIGd1aXRhcmlzdCBGcmFua2xpbiBCZWxsZmxvd2VyLCB3aG9zZSBzb2xpZCByaHl0aG0gYW5kIG1lbG9kaWMgbGVhZCBwbGF5aW5nIGFyZSBhIGtleSBlbGVtZW50IG9mIHRoZSBtdXNpYy4gRHJ1bW1lciBKZWZmIExpbmRzZXkgYW5kIHBlcmN1c3Npb25pc3QgQ2luZHkgSm9uZXMgcHJvdmlkZSBudWFuY2VkIHJoeXRobWljIHByb3B1bHNpb24sIHdoaWxlIG11bHRpLWluc3RydW1lbnRhbGlzdCBTYW0gRGF2aXMtQ2FzdHJvIGFkZHMgYSB2YXN0IHNvbmljIHBhbGV0dGUgdGhhdCB0YWtlcyB0aGUgbXVzaWMgdG8gYW5vdGhlciBsZXZlbC4gQmFzc2lzdCAmYW1wOyBzb25nd3JpdGVyIERhdmlkIENyaXN3ZWxsIGhvbGRzIGRvd24gdGhlIGJvdHRvbSBhbmQgb2ZmZXJzIG5ldyBtYXRlcmlhbCBmb3IgdGhlIGJhbmQgdG8gZXhwbG9yZS48L3A+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIElORElWSURVQUxTPC9oMj5cbiAgICAgICAgICAgIDxwPkNsaWNrIG9uIGEgYmFuZCBtZW1iZXIgZm9yIGRldGFpbHMgbGlrZSBleHBlcmllbmNlLCBpbmZsdWVuY2VzLCBvciBzb21ldGhpbmcgcmFuZG9tLjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbHNcIj5cbiAgICAgICAgICAgICAgICB7YmFuZE1lbWJlcnMubWFwKChtZW1iZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBkYXRhLW1lbWJlcj17aX0gY2xhc3NOYW1lPVwiYmFuZE1lbWJlckNhcmRcIiBvbkNsaWNrPXsoKSA9PiB7dmlld0JhbmRNZW1iZXIoaSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVtYmVyLnN2Z30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21lbWJlci5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZW1iZXIuaW5zdHJ1bWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QmFuZE1lbWJlciB2aWV3UGVyc29uPXtiYW5kTWVtYmVyfSBjbG9zZT17dmlld0JhbmRNZW1iZXJ9PjwvQmFuZE1lbWJlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC8vIC5hYm91dEJhbmQge1xuICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYWJvdXRVc0ltZyB7XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiBjYWxjKDQ1dncgLSAycmVtKTtcbiAgICAgICAgICAgIC8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC5vcmFuZ2VCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmJhbmRQb3VySG91c2Uge1xuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogY2FsYyg1MHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKCR7YmFuZFBob3RvfSk7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggMHB4ICNmODllMDA7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQgaW1nIHtcbiAgICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC5iYW5kTWVtYmVyQ2FyZDpob3ZlciB7XG4gICAgICAgICAgICAvLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmJhbmRNZW1iZXJDYXJkOmhvdmVyIGltZyB7XG4gICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQgaDIge1xuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmluZGl2aWR1YWxzIGltZyB7XG4gICAgICAgICAgICAvLyAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KSB7XG4gICAgICAgICAgICAvLyAgICAgLmluZGl2aWR1YWxzIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRyZW0pO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXX0= */\\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower/thebellflowerband/pages/about.js */\")));\n};\n\n_s(About, \"e0I/M8Bb0bPjnzOPzPudG9CbQm8=\");\n\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\nvar _c;\n\n$RefreshReg$(_c, \"About\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanM/MjZlYyJdLCJuYW1lcyI6WyJBYm91dCIsInVzZVN0YXRlIiwiYmFuZE1lbWJlciIsInNldEJhbmRNZW1iZXIiLCJ2aWV3QmFuZE1lbWJlciIsImJhbmRQaG90byIsInJlcXVpcmUiLCJiYW5kTWVtYmVycyIsIm1hcCIsIm1lbWJlciIsImkiLCJzdmciLCJtdXNpY2lhbiIsImluc3RydW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2hCLGtCQUFvQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLFVBQUQsRUFBZ0I7QUFDbkMsV0FBT0EsVUFBUCxLQUFzQixRQUF0QixHQUFpQ0MsYUFBYSxDQUFDRCxVQUFELENBQTlDLEdBQTZEQyxhQUFhLENBQUMsS0FBRCxDQUExRTtBQUNILEdBRkQ7O0FBR0EsTUFBTUUsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLHFFQUFELENBQXpCOztBQUNBLFNBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSwrRkFnQ3lCRCxTQWhDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUEsK0ZBK0J5QkEsU0EvQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsRUFFQTtBQUFBLCtGQThCeUJBLFNBOUJ6QixhQUFlLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0M7QUFBQSwrRkE4QlRBLFNBOUJTLGFBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWxDLENBRkEsRUFHQTtBQUFBLCtGQTZCeUJBLFNBN0J6QixhQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2bkJBSEEsRUFJQTtBQUFBLCtGQTRCeUJBLFNBNUJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpBLEVBS0E7QUFBQSwrRkEyQnlCQSxTQTNCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RkFMQSxFQU1BO0FBQUEsK0ZBMEJ5QkEsU0ExQnpCLGFBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tFLDREQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxDQUFULEVBQWU7QUFDNUIsV0FDSTtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLHFCQUFhQSxDQUExQjtBQUF3RCxhQUFPLEVBQUUsbUJBQU07QUFBQ04sc0JBQWMsQ0FBQ00sQ0FBRCxDQUFkO0FBQWtCLE9BQTFGO0FBQUEsaUdBdUJhTCxTQXZCYixhQUF1QyxnQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxFQUFFSSxNQUFNLENBQUNFLEdBQWpCO0FBQUEsaUdBc0JTTixTQXRCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBLGlHQXFCU0EsU0FyQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSSxNQUFNLENBQUNHLFFBQVosQ0FGSixFQUdJO0FBQUEsaUdBb0JTUCxTQXBCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlJLE1BQU0sQ0FBQ0ksVUFBWCxDQUhKLENBREo7QUFPSCxHQVJBLENBREwsQ0FOQSxFQWlCQSxNQUFDLDhEQUFEO0FBQVksY0FBVSxFQUFFWCxVQUF4QjtBQUFvQyxTQUFLLEVBQUVFLGNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkE7QUFBQTtBQUFBLGNBZ0N5QkMsU0FoQ3pCO0FBQUE7QUFBQSxndkxBREosQ0FESjtBQTRFSCxDQWxGRDs7R0FBTUwsSzs7S0FBQUEsSztBQW9GU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJhbmRNZW1iZXJzIGZyb20gJy4uL3B1YmxpYy9tdXNpY2lhbnMuanMnO1xuaW1wb3J0IEJhbmRNZW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYW5kTWVtYmVyJztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW2JhbmRNZW1iZXIsIHNldEJhbmRNZW1iZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHZpZXdCYW5kTWVtYmVyID0gKGJhbmRNZW1iZXIpID0+IHtcbiAgICAgICAgdHlwZW9mIGJhbmRNZW1iZXIgPT09ICdudW1iZXInID8gc2V0QmFuZE1lbWJlcihiYW5kTWVtYmVyKSA6IHNldEJhbmRNZW1iZXIoZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBiYW5kUGhvdG8gPSByZXF1aXJlKCcuLi9wdWJsaWMvYmVsbGZsb3dlci1ncm91cC5qcGcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIEJBTkQ8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmFuZ2VCYWNrZ3JvdW5kXCI+PGRpdiBjbGFzc05hbWU9XCJiYW5kUG91ckhvdXNlXCI+PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dEJhbmRcIj5CZWxsZmxvd2VyIHBsYXlzIG9yaWdpbmFsIHJvY2sgbXVzaWMgaW4gYW5kIGFyb3VuZCBDaGFwZWwgSGlsbCBhbmQgdGhlIFRyaWFuZ2xlLCBOb3J0aCBDYXJvbGluYSwgY2VudGVyaW5nIG9uIHRoZSBzb2FyaW5nIHZvaWNlIG9mIE5hdGFzaGEgV2lsc29uLiBUaGUgZ3JvdXAgb3JpZ2luYXRlZCB3aXRoIHRoZSBzb25nd3JpdGluZyBjb2xsYWJvcmF0aW9uIG9mIE5hdGFzaGEgYW5kIGd1aXRhcmlzdCBGcmFua2xpbiBCZWxsZmxvd2VyLCB3aG9zZSBzb2xpZCByaHl0aG0gYW5kIG1lbG9kaWMgbGVhZCBwbGF5aW5nIGFyZSBhIGtleSBlbGVtZW50IG9mIHRoZSBtdXNpYy4gRHJ1bW1lciBKZWZmIExpbmRzZXkgYW5kIHBlcmN1c3Npb25pc3QgQ2luZHkgSm9uZXMgcHJvdmlkZSBudWFuY2VkIHJoeXRobWljIHByb3B1bHNpb24sIHdoaWxlIG11bHRpLWluc3RydW1lbnRhbGlzdCBTYW0gRGF2aXMtQ2FzdHJvIGFkZHMgYSB2YXN0IHNvbmljIHBhbGV0dGUgdGhhdCB0YWtlcyB0aGUgbXVzaWMgdG8gYW5vdGhlciBsZXZlbC4gQmFzc2lzdCAmYW1wOyBzb25nd3JpdGVyIERhdmlkIENyaXN3ZWxsIGhvbGRzIGRvd24gdGhlIGJvdHRvbSBhbmQgb2ZmZXJzIG5ldyBtYXRlcmlhbCBmb3IgdGhlIGJhbmQgdG8gZXhwbG9yZS48L3A+XG4gICAgICAgICAgICA8aDI+QUJPVVQgVEhFIElORElWSURVQUxTPC9oMj5cbiAgICAgICAgICAgIDxwPkNsaWNrIG9uIGEgYmFuZCBtZW1iZXIgZm9yIGRldGFpbHMgbGlrZSBleHBlcmllbmNlLCBpbmZsdWVuY2VzLCBvciBzb21ldGhpbmcgcmFuZG9tLjwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5kaXZpZHVhbHNcIj5cbiAgICAgICAgICAgICAgICB7YmFuZE1lbWJlcnMubWFwKChtZW1iZXIsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBkYXRhLW1lbWJlcj17aX0gY2xhc3NOYW1lPVwiYmFuZE1lbWJlckNhcmRcIiBvbkNsaWNrPXsoKSA9PiB7dmlld0JhbmRNZW1iZXIoaSl9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bWVtYmVyLnN2Z30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e21lbWJlci5tdXNpY2lhbn08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnttZW1iZXIuaW5zdHJ1bWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QmFuZE1lbWJlciB2aWV3UGVyc29uPXtiYW5kTWVtYmVyfSBjbG9zZT17dmlld0JhbmRNZW1iZXJ9PjwvQmFuZE1lbWJlcj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC8vIC5hYm91dEJhbmQge1xuICAgICAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYWJvdXRVc0ltZyB7XG4gICAgICAgICAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiBjYWxjKDQ1dncgLSAycmVtKTtcbiAgICAgICAgICAgIC8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC5vcmFuZ2VCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmJhbmRQb3VySG91c2Uge1xuICAgICAgICAgICAgLy8gICAgIGhlaWdodDogY2FsYyg1MHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdXJsKCR7YmFuZFBob3RvfSk7XG4gICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIC8vICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggMHB4ICNmODllMDA7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQgaW1nIHtcbiAgICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIC5iYW5kTWVtYmVyQ2FyZDpob3ZlciB7XG4gICAgICAgICAgICAvLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmJhbmRNZW1iZXJDYXJkOmhvdmVyIGltZyB7XG4gICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAuYmFuZE1lbWJlckNhcmQgaDIge1xuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gLmluZGl2aWR1YWxzIGltZyB7XG4gICAgICAgICAgICAvLyAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjcwMHB4KSB7XG4gICAgICAgICAgICAvLyAgICAgLmluZGl2aWR1YWxzIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAuYmFuZE1lbWJlckNhcmQge1xuICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDRyZW0pO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ })

})