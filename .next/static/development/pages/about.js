(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/about.js"],{

/***/ "./components/BandMember.js":
/*!**********************************!*\
  !*** ./components/BandMember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/musicians.js */ "./public/musicians.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var BandMember = function BandMember(props) {
  var person = props.viewPerson;

  if (typeof props.viewPerson === 'number') {
    return __jsx("div", {
      className: "jsx-2844708610" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-2844708610",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-2844708610",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-2844708610",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2844708610",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2844708610",
      __self: this
    }, ".individual.jsx-2844708610{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:70px 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}.individual.jsx-2844708610 button.jsx-2844708610,.individual.jsx-2844708610 img.jsx-2844708610,.individual.jsx-2844708610 h2.jsx-2844708610,.individual.jsx-2844708610 p.jsx-2844708610{color:#222;}.individual.jsx-2844708610 button.jsx-2844708610{grid-area:close;font-size:1.6rem;}.individual.jsx-2844708610 button.jsx-2844708610:hover{cursor:pointer;}.individual.jsx-2844708610 img.jsx-2844708610{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-2844708610 h2.jsx-2844708610{grid-area:person;}.individual.jsx-2844708610 p.jsx-2844708610{grid-area:description;margin-top:0;overflow-y:scroll;}button.jsx-2844708610{border:none;background:transparent;}@media only screen and (min-width:30em){.individual.jsx-2844708610{grid-template-rows:70px 5fr 1fr 3fr;}.individual.jsx-2844708610 p.jsx-2844708610{position:relative;top:-.5rem;}}@media only screen and (orientation:landscape){.individual.jsx-2844708610{grid-template-rows:70px 2fr 2fr;grid-template-columns:50% 50%;-webkit-column-gap:1rem;column-gap:1rem;grid-template-areas:\"close close\" \"photos description\" \"person description\";}.individual.jsx-2844708610 h2.jsx-2844708610{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.individual.jsx-2844708610 p.jsx-2844708610{padding:0 1rem 1rem 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBaUJKLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUtWLEFBSzRCLEFBR2xCLEFBTWMsQUFNbkIsQUFLUyxXQWxEOUIsQ0EwQjJCLEdBM0NHLEFBd0I5QixDQUpxQixDQU9OLEFBUWYsQ0FnQm1CLElBYkYsQUE4QmIsTUF4Q2dCLENBd0JoQixHQUtrQyxDQXBDdEMsRUFrQnNCLEFBS3RCLENBSUksS0EvQ3lCLEdBNEJSLFNBV3JCLFFBVndCLENBNEJBLElBeERKLFFBNkRXLE9BaENoQixDQTVCSCxRQUNDLEVBNEJiLE9BM0JvQyxHQXNEZ0QsdUVBS3pELEtBSnZCLDBCQXREa0Qsa0RBQ25DLFlBMERmLEdBekRnQixnQkFDSCxhQUMrQyw0REFDeEIsb0NBQ1QsMkJBQ2hCLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvQmFuZE1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcblxuY29uc3QgQmFuZE1lbWJlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBlcnNvbiA9IHByb3BzLnZpZXdQZXJzb247XG4gICAgXG4gICAgaWYgKHR5cGVvZiBwcm9wcy52aWV3UGVyc29uID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbG9zZX0+JiMxMDAwNTs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDI+e2JhbmRNZW1iZXJzW3BlcnNvbl0ubXVzaWNpYW59PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFuZE1lbWJlcnNbcGVyc29uXS5waG90b30vPlxuICAgICAgICAgICAgICAgIDxwPntiYW5kTWVtYmVyc1twZXJzb25dLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNlZjQ0N2UsI2Y2OWQxYSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZVwiIFwicGhvdG9zXCIgXCJwZXJzb25cIiBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAzZnIgMWZyIDVmcjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uLCAuaW5kaXZpZHVhbCBpbWcsIC5pbmRpdmlkdWFsIGgyLCAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGhvdG9zO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBlcnNvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA1ZnIgMWZyIDNmcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLS41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDJmciAyZnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZSBjbG9zZVwiIFwicGhvdG9zIGRlc2NyaXB0aW9uXCIgXCJwZXJzb24gZGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuZE1lbWJlcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ }),

/***/ "./components/StyleBase.js":
/*!*********************************!*\
  !*** ./components/StyleBase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var StyleBase = function StyleBase(props) {
  return __jsx("div", {
    className: "jsx-2195012102" + " " + "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2195012102",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');html,body{margin:0;padding:0;text-align:center;background:#333;}body{margin-top:50px;}h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#fff;}input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#222;}ul,ol{list-style-type:none;margin:0;padding:0;line-height:2rem;}a{-webkit-text-decoration:none;text-decoration:none;}section{padding:1rem;box-sizing:border-box;}@media only screen and (min-width:500px){section{padding:1rem 6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1N0eWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFFb0gsQUFFdEYsQUFNTyxBQUdvQixBQVNBLEFBTUEsQUFNZixBQU1BLEFBSVIsQUFNUyxBQU0zQixTQW5EZSxJQXdDWSxHQWxDMUIsRUF3Q0ksQ0E3Q2tCLEVBNkJULFNBQ0MsS0F0Qk0sQUFTQyxBQU1BLEFBaUJyQixFQXZDb0IsR0E4QkMsVUFJckIsQ0ExQmUsQ0FTTSxBQU1BLENBdEJyQixJQThCQSxLQXRCcUIsT0FTTixBQU1BLFVBZE8sQ0FTdEIsQUFNRSxpQkFkRiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9TdHlsZUJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdHlsZUJhc2UgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0XCI+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NlcmlmK1RDOjMwMHxCZW5jaE5pbmU6MzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbmNoTmluZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEsIHAsIGxpLCBidXR0b24sIHVsLCBvbCwgZGl2LCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLCBvbCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDZyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVCYXNlOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleBase);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fsam.davis-castro%2FDesktop%2Fbellflower-site-nextjs%2Fpages%2Fabout.js!./":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fsam.davis-castro%2FDesktop%2Fbellflower-site-nextjs%2Fpages%2Fabout.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
      if(true) {
        module.hot.accept(/*! ./pages/about.js */ "./pages/about.js", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
          next.router.update("/about", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ea92a4d9664833a26066 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ea92a4d9664833a26066 */ "dll-reference dll_ea92a4d9664833a26066"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
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
/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/musicians.js */ "./public/musicians.js");
/* harmony import */ var _components_BandMember__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BandMember */ "./components/BandMember.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var About = function About() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      bandMember = _useState[0],
      setBandMember = _useState[1];

  var viewBandMember = function viewBandMember(bandMember) {
    typeof bandMember === 'number' ? setBandMember(bandMember) : setBandMember(false);
  };

  var bandPhoto = __webpack_require__(/*! ../public/bellflower-group.jpg */ "./public/bellflower-group.jpg");

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ABOUT THE BAND"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "orangeBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "bandPourHouse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "aboutBand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bellflower plays original rock music in and around Chapel Hill and the Triangle, North Carolina, centering on the soaring voice of Natasha Wilson. The group originated with the songwriting collaboration of Natasha and guitarist Franklin Bellflower, whose solid rhythm and melodic lead playing are a key element of the music. Drummer Jeff Lindsey and percussionist Cindy Jones provide nuanced rhythmic propulsion, while multi-instrumentalist Sam Davis-Castro adds a vast sonic palette that takes the music to another level. Bassist & songwriter David Criswell holds down the bottom and offers new material for the band to explore."), __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "ABOUT THE INDIVIDUALS"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Click on a band member for details like experience, influences, or something random."), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "individuals",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (member, i) {
    return __jsx("div", {
      key: i,
      "data-member": i,
      onClick: function onClick() {
        viewBandMember(i);
      },
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]) + " " + "bandMemberCard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: member.svg,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, member.musician), __jsx("p", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1034689954", [bandPhoto]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, member.instrument));
  })), __jsx(_components_BandMember__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewPerson: bandMember,
    close: viewBandMember,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1034689954",
    dynamic: [bandPhoto],
    __self: this
  }, ".aboutBand.__jsx-style-dynamic-selector{text-align:justify;}.aboutUsImg.__jsx-style-dynamic-selector{width:100%;height:calc(45vw - 2rem);object-fit:cover;}.orangeBackground.__jsx-style-dynamic-selector{background:#f69d1a;}.bandPourHouse.__jsx-style-dynamic-selector{height:calc(50vw - 2rem);background:url(".concat(bandPhoto, ");background-size:cover;background-repeat:no-repeat;background-position:center;opacity:0.5;}.bandMemberCard.__jsx-style-dynamic-selector{padding:2rem;margin:2rem 0;box-shadow:0px 2px 0px 0px #f89e00;}.bandMemberCard.__jsx-style-dynamic-selector:hover{cursor:pointer;}.bandMemberCard.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:#f69d1a;}.individuals.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{object-fit:contain;height:120px;}@media only screen and (min-width:700px){.individuals.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.bandMemberCard.__jsx-style-dynamic-selector{padding:0;margin:2rem;width:calc(50% - 4rem);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QndCLEFBR29DLEFBR1IsQUFLUSxBQUdNLEFBUVosQUFLRSxBQUdELEFBR0ssQUFLRixBQUlILFVBQ0UsQ0FwQ1MsRUFnQlgsQ0FRbEIsQ0FIQSxJQXhCQSxBQVFBLEFBc0JpQixHQVVjLEdBN0JrQixFQVNWLEtBV3ZDLElBM0JxQixTQXFDakIsUUFwQ0osU0FnQkEsUUFUMEIsSUF1Qkgsa0JBdEJTLDRCQUNELFdBc0IzQixnQkFyQlksWUFDaEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcbmltcG9ydCBCYW5kTWVtYmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFuZE1lbWJlcic7XG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBbYmFuZE1lbWJlciwgc2V0QmFuZE1lbWJlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgdmlld0JhbmRNZW1iZXIgPSAoYmFuZE1lbWJlcikgPT4ge1xuICAgICAgICB0eXBlb2YgYmFuZE1lbWJlciA9PT0gJ251bWJlcicgPyBzZXRCYW5kTWVtYmVyKGJhbmRNZW1iZXIpIDogc2V0QmFuZE1lbWJlcihmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGJhbmRQaG90byA9IHJlcXVpcmUoJy4uL3B1YmxpYy9iZWxsZmxvd2VyLWdyb3VwLmpwZycpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgQkFORDwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yYW5nZUJhY2tncm91bmRcIj48ZGl2IGNsYXNzTmFtZT1cImJhbmRQb3VySG91c2VcIj48L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0QmFuZFwiPkJlbGxmbG93ZXIgcGxheXMgb3JpZ2luYWwgcm9jayBtdXNpYyBpbiBhbmQgYXJvdW5kIENoYXBlbCBIaWxsIGFuZCB0aGUgVHJpYW5nbGUsIE5vcnRoIENhcm9saW5hLCBjZW50ZXJpbmcgb24gdGhlIHNvYXJpbmcgdm9pY2Ugb2YgTmF0YXNoYSBXaWxzb24uIFRoZSBncm91cCBvcmlnaW5hdGVkIHdpdGggdGhlIHNvbmd3cml0aW5nIGNvbGxhYm9yYXRpb24gb2YgTmF0YXNoYSBhbmQgZ3VpdGFyaXN0IEZyYW5rbGluIEJlbGxmbG93ZXIsIHdob3NlIHNvbGlkIHJoeXRobSBhbmQgbWVsb2RpYyBsZWFkIHBsYXlpbmcgYXJlIGEga2V5IGVsZW1lbnQgb2YgdGhlIG11c2ljLiBEcnVtbWVyIEplZmYgTGluZHNleSBhbmQgcGVyY3Vzc2lvbmlzdCBDaW5keSBKb25lcyBwcm92aWRlIG51YW5jZWQgcmh5dGhtaWMgcHJvcHVsc2lvbiwgd2hpbGUgbXVsdGktaW5zdHJ1bWVudGFsaXN0IFNhbSBEYXZpcy1DYXN0cm8gYWRkcyBhIHZhc3Qgc29uaWMgcGFsZXR0ZSB0aGF0IHRha2VzIHRoZSBtdXNpYyB0byBhbm90aGVyIGxldmVsLiBCYXNzaXN0ICZhbXA7IHNvbmd3cml0ZXIgRGF2aWQgQ3Jpc3dlbGwgaG9sZHMgZG93biB0aGUgYm90dG9tIGFuZCBvZmZlcnMgbmV3IG1hdGVyaWFsIGZvciB0aGUgYmFuZCB0byBleHBsb3JlLjwvcD5cbiAgICAgICAgICAgIDxoMj5BQk9VVCBUSEUgSU5ESVZJRFVBTFM8L2gyPlxuICAgICAgICAgICAgPHA+Q2xpY2sgb24gYSBiYW5kIG1lbWJlciBmb3IgZGV0YWlscyBsaWtlIGV4cGVyaWVuY2UsIGluZmx1ZW5jZXMsIG9yIHNvbWV0aGluZyByYW5kb20uPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsc1wiPlxuICAgICAgICAgICAgICAgIHtiYW5kTWVtYmVycy5tYXAoKG1lbWJlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGRhdGEtbWVtYmVyPXtpfSBjbGFzc05hbWU9XCJiYW5kTWVtYmVyQ2FyZFwiIG9uQ2xpY2s9eygpID0+IHt2aWV3QmFuZE1lbWJlcihpKX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXttZW1iZXIuc3ZnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57bWVtYmVyLm11c2ljaWFufTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21lbWJlci5pbnN0cnVtZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCYW5kTWVtYmVyIHZpZXdQZXJzb249e2JhbmRNZW1iZXJ9IGNsb3NlPXt2aWV3QmFuZE1lbWJlcn0+PC9CYW5kTWVtYmVyPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFib3V0QmFuZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hYm91dFVzSW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNDV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9yYW5nZUJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFuZFBvdXJIb3VzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDUwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtiYW5kUGhvdG99KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kTWVtYmVyQ2FyZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAwcHggI2Y4OWUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYW5kTWVtYmVyQ2FyZDpob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIGgyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbmRpdmlkdWFscyBpbWcge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCkge1xuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFscyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJhbmRNZW1iZXJDYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cmVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/about.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./public/bellflower-group.jpg":
/*!*************************************!*\
  !*** ./public/bellflower-group.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bellflower-group-5205cff98b702701895f4cbc9cf0bfbb.jpg";

/***/ }),

/***/ "./public/members/cindy.png":
/*!**********************************!*\
  !*** ./public/members/cindy.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cindy-91e9dcab6fdc300dbcf825e0bc7f6312.png";

/***/ }),

/***/ "./public/members/david.png":
/*!**********************************!*\
  !*** ./public/members/david.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/david-6909bcf717f68ee28d953ef6ded043a3.png";

/***/ }),

/***/ "./public/members/franklin1.png":
/*!**************************************!*\
  !*** ./public/members/franklin1.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/franklin1-8e8405fc9c62de0a62a074a7e65dc7f3.png";

/***/ }),

/***/ "./public/members/jeff.png":
/*!*********************************!*\
  !*** ./public/members/jeff.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jeff-e57fdb11734a832f25fafe5a343cb8c2.png";

/***/ }),

/***/ "./public/members/natasha.png":
/*!************************************!*\
  !*** ./public/members/natasha.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/natasha-c5733a23da50a9b077d2b1ad45c143b1.png";

/***/ }),

/***/ "./public/members/sam1.png":
/*!*********************************!*\
  !*** ./public/members/sam1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sam1-75474c9682250ade7a0d9f914284292e.png";

/***/ }),

/***/ "./public/musicians.js":
/*!*****************************!*\
  !*** ./public/musicians.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cindyPhoto = __webpack_require__(/*! ../public/members/cindy.png */ "./public/members/cindy.png");

var samPhoto = __webpack_require__(/*! ../public/members/sam1.png */ "./public/members/sam1.png");

var natashaPhoto = __webpack_require__(/*! ../public/members/natasha.png */ "./public/members/natasha.png");

var jeffPhoto = __webpack_require__(/*! ../public/members/jeff.png */ "./public/members/jeff.png");

var davidPhoto = __webpack_require__(/*! ../public/members/david.png */ "./public/members/david.png");

var franklinPhoto = __webpack_require__(/*! ../public/members/franklin1.png */ "./public/members/franklin1.png");

var instruments = [{
  musician: 'Franklin Bellflower',
  instrument: 'GUITAR',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTU0LjY2N3B4IiBoZWlnaHQ9IjIwMHB4IiB2%0D%0AaWV3Qm94PSIwIDAgMTU0LjY2NyAyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1NC42%0D%0ANjcgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xLjcsMTguMjkyYzAuMDExLDAuMDgsMC4wMjcsMC4xNjMsMC4w%0D%0AMzgsMC4yNDVjMC4wNDYtMC4yMDcsMC4wODQtMC40MTUsMC4xMjUtMC42MjINCgkJCQljMC4wOTIt%0D%0AMC4wNjksMC4xNzktMC4xMzksMC4yNzItMC4yMDhjMC42NzUtMC4xODMsMS4zNTQtMC4zNjMsMi4w%0D%0AMzUtMC41NDdjMC4xNzctMC4wMDMsMC4zNTQtMC4wMDUsMC41MzEtMC4wMDgNCgkJCQljLTAuMDQ2%0D%0ALDAuMjA3LTAuMDg3LDAuNDEyLTAuMTI4LDAuNjIyYy0wLjA5LDAuMDctMC4xNzksMC4xMzktMC4y%0D%0ANzEsMC4yMDhjLTAuNjgxLDAuMTgxLTEuMzU4LDAuMzY1LTIuMDM2LDAuNTQ3DQoJCQkJYy0wLjA5%0D%0AOC0wLjAxMi0wLjE5Ni0wLjAyMy0wLjI5My0wLjAzNGMxLjIxNiwwLjcxMyw0LjkxOS0xLjAxMSwz%0D%0ALjE5NC0yLjAyOGMtMS41NjItMC45MTktNS42NzUsMC4zMy00LjE2MywyLjU0Ng0KCQkJCWMxLjE3%0D%0ANSwxLjcyMiw1LjkxNy0wLjExOSw0LjQzNS0yLjM0MkM0LjYzOCwxNS40NywwLjcyNiwxNi44Mjks%0D%0AMS43LDE4LjI5MnoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxs%0D%0APSIjRkZGRkZGIiBkPSJNNy44MjksMjQuMDk5YzAuMDExLDAuMDg1LDAuMDI0LDAuMTcxLDAuMDM4%0D%0ALDAuMjYxYzAuMDQ2LTAuMTk0LDAuMDkzLTAuMzkzLDAuMTM5LTAuNTg4DQoJCQkJYzAuMDg3LTAu%0D%0AMDYxLDAuMTgtMC4xMjIsMC4yNjctMC4xODZjMC42ODEtMC4xODEsMS4zNjEtMC4zNjMsMi4wMzgt%0D%0AMC41NDdjMC4xNzEtMC4wMjIsMC4zNDgtMC4wNDUsMC41Mi0wLjA2Nw0KCQkJCWMtMC4wNDMsMC4x%0D%0AOTYtMC4wODcsMC4zOTQtMC4xMzYsMC41ODhjLTAuMDkzLDAuMDY0LTAuMTc3LDAuMTI4LTAuMjcy%0D%0ALDAuMTkzYy0wLjY4LDAuMTgxLTEuMzU1LDAuMzY0LTIuMDM1LDAuNTQ1DQoJCQkJYy0wLjA5NS0w%0D%0ALjAwMi0wLjE5LTAuMDA4LTAuMjg5LTAuMDExYzEuMTQ4LDAuNjc2LDQuODczLTAuOTg2LDMuMjEt%0D%0AMS45NjVjLTEuNTU2LTAuOTE0LTUuNTYxLDAuMjk4LTQuMTg1LDIuNTENCgkJCQljMC42NTMsMS4w%0D%0ANTYsMi45MDUsMC4zOSwzLjY2Mi0wLjAzYzAuOTQxLTAuNTI0LDEuNDM3LTEuMzQsMC43ODktMi4y%0D%0AOTFDMTAuNzk3LDIxLjM3OSw2Ljg4NSwyMi43MjQsNy44MjksMjQuMDk5eiIvPg0KCQk8L2c+DQoJ%0D%0APC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMy44NTgsMjku%0D%0AODg0YzAuMDUxLDAuMDgxLDAuMTA2LDAuMTY0LDAuMTU4LDAuMjQ2Yy0wLjA2OC0wLjI0OS0wLjEz%0D%0AMy0wLjUtMC4xOTktMC43NDcNCgkJCQljMCwwLjA0MSwwLjAwNSwwLjA4LDAuMDA1LDAuMTJjMC4z%0D%0ANDgtMC4zMjMsMC42OTEtMC42NDYsMS4wMzQtMC45N2MtMC4wNzYsMC4wNDItMC4xNTUsMC4wODct%0D%0AMC4yMjksMC4xMjcNCgkJCQljMC41MjctMC4wOTEsMS4wNjEtMC4xOCwxLjU5MS0wLjI3NmMwLjIw%0D%0ANSwwLjA5MywwLjQxMSwwLjE4NSwwLjYxOCwwLjI3NmMtMC4wMywwLjI2My0wLjA1NywwLjUyNC0w%0D%0ALjA4NywwLjc4NA0KCQkJCWMwLjA0My0wLjA4MiwwLjA4Mi0wLjE2MiwwLjEyOC0wLjI0MmMtMC4z%0D%0ANDYsMC4zMjMtMC42OTEsMC42NDYtMS4wMzQsMC45NjljMC4wNzMtMC4wNDUsMC4xNTUtMC4wODks%0D%0AMC4yMzQtMC4xMzENCgkJCQljLTAuNTI1LDAuMDkyLTEuMDYyLDAuMTg0LTEuNTk0LDAuMjc2Yy0w%0D%0ALjExMi0wLjA1LTAuMjIxLTAuMTAxLTAuMzMtMC4xNTFjMC45LDAuNTI0LDIuMDY4LDAuMzksMi45%0D%0ALTAuMjM2DQoJCQkJYzAuNjM0LTAuNDc5LDEuMDk5LTEuNTk3LDAuMjA0LTIuMTE3Yy0xLjAyMS0w%0D%0ALjU5Ny0yLjE0Ny0wLjY1OC0zLjIwOC0wLjA2MmMtMS4xMjYsMC42MzMtMS42MjcsMS43NDEtMC44%0D%0AOTIsMi44NjgNCgkJCQljMS4zNiwyLjA5OCw1Ljk5Ni0wLjA1MSw0LjM5Ni0yLjUyNUMxNi41NDMs%0D%0AMjYuNTM2LDEyLjcwMiwyOC4wOTIsMTMuODU4LDI5Ljg4NHoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8%0D%0AZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzMuNzYsMTcuMjA2Yy0xLjMy%0D%0AOC0xLjk3My01LjE2MS0wLjYwOC00LjgwNywxLjc4YzAuMTg4LDEuMjc2LDIuMTM1LDEuMzQ2LDMu%0D%0AMDQ0LDEuMTAyDQoJCQkJYzEuMjI0LTAuMzI4LDIuMTIyLTEuMjY0LDEuOTI2LTIuNTU1Yy0wLjI2%0D%0AMS0xLjc2OS00LjMwOS0wLjc2OS00LjAzNSwxLjA4NGMwLjAxNCwwLjA5OCwwLjAzLDAuMTk1LDAu%0D%0AMDQ2LDAuMjkzDQoJCQkJYzAuMDMzLTAuMjQ1LDAuMDY1LTAuNDg3LDAuMDk4LTAuNzMyYzAuMDk4%0D%0ALTAuMDg0LDAuMTk2LTAuMTY3LDAuMjk0LTAuMjQ5YzAuNTA2LTAuMTg0LDEuMDEyLTAuMzY1LDEu%0D%0ANTE5LTAuNTQ4DQoJCQkJYy0wLjA5LDAuMDA4LTAuMTc0LDAuMDE3LTAuMjY3LDAuMDI0YzAuNDU3%0D%0ALDAuMDkzLDAuOTE1LDAuMTg0LDEuMzY2LDAuMjc5YzAtMC4wMjEsMC0wLjA0OCwwLTAuMDY5DQoJ%0D%0ACQkJYy0wLjAzMywwLjI0NS0wLjA2NSwwLjQ5LTAuMDk4LDAuNzM1Yy0wLjA5OCwwLjA4Mi0wLjE5%0D%0ANiwwLjE2Mi0wLjI5MSwwLjI0NGMtMC41MDksMC4xODMtMS4wMTUsMC4zNjQtMS41MjEsMC41NDgN%0D%0ACgkJCQljMC4wOTItMC4wMDksMC4xOC0wLjAxNywwLjI3Mi0wLjAyNWMtMC40NTctMC4wOTMtMC45%0D%0AMDgtMC4xODUtMS4zNjYtMC4yNzljMC4wMzgsMC4wMzcsMC4wNzYsMC4wNzMsMC4xMTQsMC4xMTIN%0D%0ACgkJCQlDMzEuMDIzLDIwLjM4MiwzNC44OSwxOC44ODIsMzMuNzYsMTcuMjA2eiIvPg0KCQk8L2c+%0D%0ADQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zMC42ODgs%0D%0AOS4zODdjLTEuMjczLTEuNzQ3LTUuMTQtMC41MTMtNC44NDMsMS43MzZjMC4xNjEsMS4yMjMsMi4x%0D%0AOTgsMS4xMjIsMi45OTMsMC45MDkNCgkJCQljMS4xNTYtMC4zMSwyLjE1Mi0xLjEwMywyLjAwMi0y%0D%0ALjM2OGMtMC4xNzctMS40OTYtNC4yMzYtMC41NjEtNC4wMzQsMS4wODRjLTAuMDI1LDAuMDc4LTAu%0D%0AMDQ2LDAuMTU1LTAuMDcxLDAuMjM0DQoJCQkJYzAuMjU2LTAuMzA1LDAuNTA2LTAuNjExLDAuNzUz%0D%0ALTAuOTE0Yy0wLjA2OCwwLjA1Ni0wLjE0NywwLjEwOC0wLjIyLDAuMTYyYzAuNTEyLTAuMTc2LDEu%0D%0AMDE1LTAuMzUzLDEuNTIzLTAuNTI3DQoJCQkJYy0wLjA4NiwwLjAwNi0wLjE3NCwwLjAxNC0wLjI2%0D%0ANCwwLjAyMmMwLjQ0OSwwLjA2MiwwLjg5NSwwLjEyNSwxLjM0MSwwLjE4OWMtMC4wMzMsMC4xMTct%0D%0AMC4wNjUsMC4yMzMtMC4wOTgsMC4zNTQNCgkJCQljLTAuNjMxLDAuMjcxLTEuMjYsMC41NDItMS44%0D%0AODksMC44MTNjMC4wODctMC4wMDUsMC4xNzctMC4wMTQsMC4yNzItMC4wMjFjLTAuNDQ5LTAuMDYy%0D%0ALTAuODk1LTAuMTI1LTEuMzM4LTAuMTg3DQoJCQkJYzAuMDQ5LDAuMDUzLDAuMDkyLDAuMTA0LDAu%0D%0AMTQ3LDAuMTU1QzI3LjgzNCwxMi4yMzIsMzEuNzMsMTAuODIzLDMwLjY4OCw5LjM4N3oiLz4NCgkJ%0D%0APC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjcu%0D%0ANjIzLDEuNjA2Yy0xLjQxNy0yLjA2NS01LjE5Ny0wLjcwMi00Ljc5NywxLjgxNmMwLjIwNywxLjMw%0D%0ANywyLjEwMSwxLjUwNCwzLjA3NywxLjI0Mw0KCQkJCWMxLjI5LTAuMzQ1LDIuMDg5LTEuMzg1LDEu%0D%0AODk2LTIuNjk1Yy0wLjI5MS0xLjk0MS00LjMzMy0wLjkxOS00LjAzNywxLjA4NGMwLjAxNCwwLjA5%0D%0AOCwwLjAzLDAuMTk1LDAuMDQ2LDAuMjkyDQoJCQkJYzAuMDMtMC4yNjYsMC4wNTctMC41MzUsMC4w%0D%0ANzktMC44MDJjMC4wOTMtMC4wOTgsMC4xODgtMC4xOTUsMC4yODEtMC4yOWMwLjUxMS0wLjE4Nywx%0D%0ALjAxMi0wLjM3NSwxLjUxOC0wLjU2Mg0KCQkJCWMwLjM3OCwwLjEyLDAuNzU2LDAuMjM5LDEuMTMy%0D%0ALDAuMzU5Yy0wLjAyOCwwLjI2Ny0wLjA1NSwwLjUzMi0wLjA3NywwLjgwM2MtMC4wOTUsMC4wOTct%0D%0AMC4xODgsMC4xOTQtMC4yODMsMC4yOTINCgkJCQljLTAuNTA2LDAuMTg3LTEuMDEyLDAuMzc1LTEu%0D%0ANTEzLDAuNTYyYy0wLjMzNy0wLjA5Ny0wLjY2OS0wLjE5NC0xLjAwNy0wLjI4OUMyNS4wMTksNC45%0D%0AODgsMjguODUsMy4zOTIsMjcuNjIzLDEuNjA2eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8%0D%0AcGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTM1LjIxNCwxOTEuNTczYy00LjIwNywyLjY4My04Ljg5%0D%0ANSw0Ljg4MS0xMy43NDgsNi4yMmMtNC44NjUsMS4zNTktOS45NTksMS44OTYtMTQuOTY3LDEuNDU4%0D%0ADQoJCQljLTEwLjAzNy0wLjc4NC0xOS41NzYtNS43NDYtMjUuODQtMTMuNDA3YzYuNjI3LDcuMzY1%0D%0ALDE2LjIyNSwxMS43MDksMjUuOTI0LDEyLjAxNGM0Ljg1LDAuMTkxLDkuNjk5LTAuNTUzLDE0LjI3%0D%0AOC0yLjA2Ng0KCQkJYzQuNTk5LTEuNTIzLDguODU0LTMuNzU0LDEyLjgzNy02LjU2MUwxMzUuMjE0%0D%0ALDE5MS41NzN6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDQu%0D%0AMTIxLDEyMS41NDJjLTEuOTgxLTMuMTQ2LTIuOTUyLTcuMDIxLTIuODM4LTEwLjY4M2MwLjA5NS0z%0D%0ALjY5NiwxLjEwMi03LjI2NCwyLjYzNi0xMC41MDYNCgkJCWMzLjExMy02LjUwNSw4LjI2OC0xMS43%0D%0ANTYsMTQuMTk3LTE1LjUwMWMtNS42NzMsNC4xMjEtMTAuMzcyLDkuNjU1LTEyLjkxNiwxNi4wNTlj%0D%0ALTEuMjY1LDMuMTg3LTEuOTY0LDYuNTkyLTEuODI4LDkuOTMzDQoJCQljMC4xNDQsMy4zNTQsMS4x%0D%0ANjIsNi41MjQsMy4xMTIsOS4yMjFMNDQuMTIxLDEyMS41NDJ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8%0D%0AZz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00My43NjIsMTIwLjk4NGMzLjY3OCw1LjYx%0D%0AMSw4Ljg4LDguMTE1LDE0LjgzMywxMC43OThjOC4xNzgsMy42ODUsMTEuMDA4LDEwLjE2NSwxMC4y%0D%0ANjIsMTguODc2DQoJCQkJYy0wLjQ1Miw1LjMyOC0xLjQ0NywxMC4zMDItMC43MDIsMTUuNjcyYzEu%0D%0AMTUzLDguMzE0LDYuOTYsMTUuNDIyLDEyLjQwMSwyMS40MThjMS4yMDgsMS4zMzMsMy4xNzItMC42%0D%0AMzcsMS45NjktMS45NzENCgkJCQljLTYuMTMyLTYuNzYyLTExLjU5LTE0LjE3Ni0xMS45NzctMjMu%0D%0ANTk2Yy0wLjIyMy01LjQyMiwxLjM3Mi0xMC43NDYsMS4yNTQtMTYuMTgyYy0wLjM1OS0xNi43Njgt%0D%0AMTguMTY3LTE1LjAzNy0yNS42NC0yNi40MzYNCgkJCQlDNDUuMTgyLDExOC4wODQsNDIuNzcxLDEx%0D%0AOS40NzcsNDMuNzYyLDEyMC45ODRMNDMuNzYyLDEyMC45ODR6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJ%0D%0APGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMzIuNzkxLDE4OS44NDZjNC4xMDMtMi42%0D%0ANDMsNy43NTgtNS43NDgsMTAuODk0LTkuNDQ5YzMuMTE4LTMuNjc2LDUuNjI2LTcuODk2LDcuMjcx%0D%0ALTEyLjQ2MQ0KCQkJYzMuMzUyLTkuMTA1LDIuOTItMTkuNjMzLTEuNDIyLTI4LjUyOGM0Ljc1OCw4%0D%0ALjY3NCw1Ljc3NCwxOS4zNzcsMi43MzgsMjguOTY4Yy0xLjQ3NSw0LjgwNy0zLjg4Nyw5LjMyOS02%0D%0ALjk2MywxMy4zMjgNCgkJCWMtMy4wNjEsMy45OTktNi44NTQsNy41MTYtMTAuOTE1LDEwLjQxNUwx%0D%0AMzIuNzkxLDE4OS44NDZ6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBk%0D%0APSJNMTAxLjMzMiw4My4wNjdjLTMuMzU2LTUuNS05Ljg4MS04LjQ1OC0xNi40ODctOC42ODdjLTYu%0D%0ANjQ5LTAuMzAxLTEzLjM4MywxLjc2OS0xOS4xMzIsNS4zNjMNCgkJCWM1LjQ5Ni0zLjk3MywxMi4x%0D%0ANjMtNi41ODUsMTkuMTQ4LTYuNzUzYzMuNDc4LTAuMDc5LDcuMDMxLDAuNDU4LDEwLjMyMywxLjg1%0D%0ANGMzLjI3NSwxLjM2MSw2LjMxMiwzLjY5LDguNDEzLDYuNTk1TDEwMS4zMzIsODMuMDY3DQoJCQl6%0D%0AIi8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDAu%0D%0AOTAyLDgyLjQzMmM0Ljk0NCw3LjI2NywyLjkzMiwxNS4yODgsNS4wMDEsMjMuMzA3YzEuMzc3LDUu%0D%0AMzI3LDYuMzIzLDkuMTgsMTEuMjQ4LDExLjA0Nw0KCQkJCWM0Ljk3NCwxLjg5MSwxMC4zMDYsMi41%0D%0AOTMsMTUuMTcxLDQuNzk0YzguMTM1LDMuNjc5LDEyLjgyNCwxMi4wMDksMTYuNTM2LDE5LjY3NmMw%0D%0ALjc3NiwxLjYyMSwzLjE4MywwLjIwNywyLjQwNS0xLjQwMg0KCQkJCWMtNi4wMjQtMTIuNDY1LTEz%0D%0ALjMzMi0yMC4zMTgtMjYuNzgtMjMuNzQyYy04LjQ4MS0yLjE1OS0xNS42NzItNS44NDQtMTYuNjkt%0D%0AMTUuNTYyYy0wLjc1Mi03LjE2NC0wLjIzOS0xMy4yOTktNC40NzktMTkuNTI1DQoJCQkJQzEwMi4z%0D%0AMDcsNzkuNTUxLDk5Ljg5Myw4MC45NDQsMTAwLjkwMiw4Mi40MzJMMTAwLjkwMiw4Mi40MzJ6Ii8+%0D%0ADQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0i%0D%0AMjEuMzA1LDI2LjI4NSA1OS44NjYsODUuOTM3IDE4Ljk5MiwyNy44NDIgCQkiLz4NCgk8L2c+DQoJ%0D%0APGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjguODc2LDIxLjE4IDY3LjQz%0D%0AMiw4MC44MyAyNi41NjcsMjIuNzM4IAkJIi8+DQoJPC9nPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxs%0D%0APSIjRkZGRkZGIiBwb2ludHM9IjIxLjc5Miw0LjAxMSA0Ljk4LDEzLjY3OCAyMC4yMzMsMS43MDEg%0D%0ACQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNy4w%0D%0AMjksMTEuNTg1IDIwLjYxMSwyNy43NTYgNS4wMTksMTMuNTE2IAkJIi8+DQoJPC9nPg0KCTxnPg0K%0D%0ACQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjIxLjI5MSwzLjU0OSAyOC4zMTksMjIu%0D%0AODUzIDE4Ljc0NSw0LjY3NyAJCSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K",
  description: 'Writer of songs. Maker of melodies. Guitarist and gear freak. Influenced by nearly every genre in one way or another. Co-founder of Bellflower. (Also composes, writes lyrics, and backup vocals.)',
  photo: franklinPhoto
}, {
  musician: 'Natasha Wilson',
  instrument: 'LEAD VOCALS',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTM3cHgiIGhlaWdodD0iMjAwcHgiIHZpZXdC%0D%0Ab3g9IjAgMCAxMzcgMjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMzcgMjAwIiB4bWw6%0D%0Ac3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRkZG%0D%0ARiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTk5LjI3OCwx%0D%0AMDguOTA1DQoJCWMtNC4yMDctNi4xNjUtOC40MTctMTIuMzI3LTEyLjY4My0xOC40NTRsLTYuMzY2%0D%0ALTkuMjExbC02LjI5LTkuMjYxYy00LjE2Mi02LjE5Ni04LjI4NS0xMi40MTctMTIuMzQ4LTE4LjY3%0D%0AOA0KCQljLTQuMDgxLTYuMjQ3LTcuODAyLTEyLjU4Ni0xMS45MzgtMTguNzg4bDAsMGMtMS41OTks%0D%0ANC41NTktNC41MzMsOC42NDEtOC4zODMsMTEuNTdjLTMuODM5LDIuOTMzLTguNTQ4LDQuNzQtMTMu%0D%0AMzk3LDUuMDQ1bDAsMA0KCQljNi40NDQsNy40MzEsMTMuMTcsMTQuMzcyLDE5LjU4MywyMS44NDVj%0D%0ANi40MzUsNy40NTgsMTIuODUzLDE0LjkzLDE5LjIwMywyMi40NjFjNi4zNzYsNy41MDYsMTIuNjky%0D%0ALDE1LjA2NCwxOC45MzMsMjIuNjg3DQoJCWMxLjQ5NCwxLjkyMiwzLjMxLDMuNjEzLDUuNDc2LDQu%0D%0ANjljMC41NCwwLjI1OCwxLjEwNywwLjQ3MSwxLjY4MiwwLjU0NmMwLjI4NiwwLjAzNCwwLjU3NSww%0D%0ALjAzLDAuODQyLTAuMDM4DQoJCWMwLjI4NS0wLjA4OSwwLjU5NC0wLjE3LDAuODcxLTAuMjcxYzEu%0D%0AMTQ1LTAuMzk0LDIuMjQ3LTAuOTQyLDMuMjQ4LTEuNjM0YzEuMDA4LTAuNjg2LDEuOTExLTEuNTIx%0D%0ALDIuNjg3LTIuNDcNCgkJYzAuMzkxLTAuNDcsMC43NDEtMC45NzYsMS4wNjYtMS40ODNjMC4zMDYt%0D%0AMC41MTIsMC4zNTYtMS4xMzksMC4zMzktMS43MzljLTAuMDU2LTEuMjE4LTAuMzk2LTIuNDEzLTAu%0D%0AODM0LTMuNTUzDQoJCUMxMDAuNTI0LDExMS4wMjQsOTkuOTU2LDEwOS45MjgsOTkuMjc4LDEwOC45%0D%0AMDV6Ii8+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEzNS40%0D%0ANTQsMTk4LjcyNmMtMTIuNTg1LTAuNzk1LTI1LjUzOC0xLjg3OC0zNS4wMzItMTEuMDZjLTkuMDIt%0D%0AOC43MTktNS4yNzctMjAuMjg5LTEuMjgtMzAuMDU5DQoJCQljNC4yNS0xMC4zOTUsMTUuNjUtMjku%0D%0AODY3LDAuNzA5LTM2LjQ4OWMtMC42NzQtMC4zLTMuMzI3LDAuNzY1LTIuMzcxLDEuMTg3YzE4LjAx%0D%0ANyw3Ljk4Ny00LjUyNCwzOC4xNTgtNS44MTIsNTEuMTY3DQoJCQljLTIuMTU0LDIxLjg4NSwyNi45%0D%0ANTksMjUuNTgyLDQxLjkyMSwyNi41MjdDMTM0LjI3LDIwMC4wNCwxMzYuOTQ2LDE5OC44MTgsMTM1%0D%0ALjQ1NCwxOTguNzI2TDEzNS40NTQsMTk4LjcyNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8cGF0%0D%0AaCBmaWxsPSIjRkZGRkZGIiBkPSJNMC43NTIsMjQuNjFjMC4wMDcsMy4xNjQsMC42NTIsNi4zMjcs%0D%0AMS45NDYsOS4yYzEuMjg3LDIuODczLDMuMTQyLDUuNDY5LDUuNDA5LDcuNjAyDQoJCWM0LjUyOSw0%0D%0ALjI3NiwxMC42MDcsNi43NiwxNi44MDEsNi44MDljNi4xNjksMC4xMzcsMTIuNDkzLTIuMTk2LDE2%0D%0ALjk1LTYuNjZjNC41My00LjM3NSw3LjAzNS0xMC43MTEsNi44NzEtMTYuOTUNCgkJYy0wLjExNS02%0D%0ALjI1Mi0yLjc3Ni0xMi4zMjMtNy4xODYtMTYuNjM2Yy00LjM4NS00LjM0My0xMC40OTktNi44MDct%0D%0AMTYuNjI1LTYuODIzQzE4Ljc0NSwxLjEyOCwxMi42NjEsMy41NTksOC4xMjQsNy44MjUNCgkJYy0y%0D%0ALjI3MiwyLjEyNC00LjEyNyw0LjcxOS01LjQxNCw3LjU5QzEuNDI0LDE4LjI5MSwwLjc5NywyMS40%0D%0ANTEsMC43NTIsMjQuNjF6IE0wLjYwMiwyNC42MTFDMC41MzQsMTguMjQ4LDIuOTgsMTEuODUxLDcu%0D%0ANDI1LDcuMTI3DQoJCWMyLjIwNy0yLjM3NSw0Ljk0My00LjI2Miw3LjkzNS01LjU2OGMyLjk4OS0x%0D%0ALjMyLDYuMjkyLTEuOTMzLDkuNTM4LTEuOTU0YzMuMjg4LTAuMDAyLDYuNTY0LDAuNjAzLDkuNTg0%0D%0ALDEuODkyDQoJCWMzLjAxNywxLjI3Niw1Ljc3LDMuMTU0LDguMDU5LDUuNDhjNC42MTcsNC42MzMs%0D%0ANy4xOTIsMTEuMTc0LDcuMDA5LDE3LjYzM2MtMC4wNDcsMy4yMjktMC43NzQsNi40MTgtMi4wMDcs%0D%0AOS4zNzUNCgkJYy0xLjI1MSwyLjk1NS0zLjA4Niw1LjY0My01LjMxNyw3Ljk0MmMtMi4yNTYsMi4y%0D%0ANzUtNC45MzMsNC4xNDgtNy44ODMsNS40NmMtMi45NTMsMS4zMDMtNi4xODIsMi4wMjMtOS40MzUs%0D%0AMi4wNzYNCgkJYy0zLjI0NiwwLjAwNy02LjUzMS0wLjU1OC05LjUyMy0xLjg2MmMtMi45OS0xLjI4%0D%0AOC01LjczNy0zLjE1Mi03Ljk0My01LjUyNUMyLjk2MywzNy4zNzMsMC41OTIsMzAuOTYxLDAuNjAy%0D%0ALDI0LjYxMXoiLz4NCjwvZz4NCjwvc3ZnPg0K",
  description: "Natasha has loved music since she was a child, growing up on country and rock music. Her father passed on his love of singing by taking her out to local bars for karaoke until the fear of the stage was a distant memory. She took every opportunity to make music by joining multiple choirs, playing handbells and trombone, and singing showtunes in broadway reviews. Now she writes lyrics and music for Bellflower when she isn't singing lead vocals.",
  photo: natashaPhoto
}, {
  musician: 'David Criswell',
  instrument: 'BASS',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTUwLjY4OHB4IiBoZWlnaHQ9IjIwMHB4IiB2%0D%0AaWV3Qm94PSIwIDAgMTUwLjY4OCAyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE1MC42%0D%0AODggMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLjkxMywxOS4zNTZjMC4xOSwwLjE1OSwwLjIxOCwwLjM0LDAu%0D%0AMDgzLDAuNTQ0YzAuMzA2LTAuMjYsMC42MTItMC41MjEsMC45MjMtMC43ODINCgkJCQljLTAuMDgz%0D%0ALDAuMDQ3LTAuMTYzLDAuMDk1LTAuMjQ2LDAuMTQzYzAuOTQyLTAuMjA0LDEuODc0LTAuNDA5LDIu%0D%0AODE2LTAuNjE2Yy0wLjA5My0wLjAwMi0wLjE5LTAuMDA1LTAuMjgzLTAuMDA3DQoJCQkJYzAuMjMy%0D%0ALDAuMDY5LDAuNDU5LDAuMTQsMC42ODgsMC4yMDhjLTAuMzEyLTAuMDg0LTAuMzgtMC4yNTYtMC4y%0D%0AMTktMC41MDhjLTAuMzA2LDAuMjU5LTAuNjExLDAuNTIxLTAuOTE4LDAuNzgyDQoJCQkJYzAuMDc5%0D%0ALTAuMDQ4LDAuMTU4LTAuMDkzLDAuMjQxLTAuMTM4Yy0wLjk0MSwwLjIwNC0xLjg3NCwwLjQwOS0y%0D%0ALjgxNSwwLjYxNmMwLjA5NywwLjAwMiwwLjE4OSwwLjAwNSwwLjI4OCwwLjAwNw0KCQkJCWMtMC4y%0D%0AMjktMC4wNjktMC40NTktMC4xNC0wLjY4OC0wLjIwOGMwLjA4OCwwLjA1MiwwLjE4MSwwLjEwNCww%0D%0ALjI3MywwLjE1N2MwLjg0OSwwLjQ5MiwyLjExOSwwLjE0NywyLjk3OS0wLjE3NA0KCQkJCWMwLjIw%0D%0ANC0wLjA3OCwyLjEyNS0wLjk5MywxLjMyNy0xLjQ1M2MtMS4wODUtMC42Mi0yLjQwOC0wLjQyMS0z%0D%0ALjU0LDAuMDA5Yy0wLjg1NCwwLjMyMy0yLjMzOCwxLjA5My0xLjY0MiwyLjE5DQoJCQkJYzEuMDI5%0D%0ALDEuNjI3LDYuNTEzLTAuMSw1LjMyNC0yQzQuNzIyLDE2Ljg3NywwLjQ0LDE4LjU5MywwLjkxMywx%0D%0AOS4zNTZ6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0ZG%0D%0ARkZGRiIgZD0iTTI2LjM5LDE3Ljg0OGMwLjAwNCwwLjA1MiwwLjAwNCwwLjEwNCwwLjAwNCwwLjE2%0D%0AYzAuMDMyLTAuMzA1LDAuMDYxLTAuNjA3LDAuMDkzLTAuOTExDQoJCQkJYy0wLjA0NiwwLjA5LTAu%0D%0AMDg4LDAuMTc5LTAuMTM0LDAuMjY4YzAuMzktMC4zNzMsMC43NzgtMC43NDIsMS4xNjktMS4xMjFj%0D%0ALTAuMDg4LDAuMDQ4LTAuMTcyLDAuMDk1LTAuMjU1LDAuMTQxDQoJCQkJYzAuNDAzLTAuMTEsMC44%0D%0AMTItMC4yMTksMS4yMi0wLjMyOGMtMC4xMDMtMC4wMDItMC4yMDQtMC4wMDUtMC4zMDItMC4wMDdj%0D%0AMC41MjMsMC4xMjgsMS4wNDQsMC4yNTYsMS41NzIsMC4zODUNCgkJCQljMC4wMiwwLjAwMiwwLjAz%0D%0ANywwLjAwNCwwLjA1MiwwLjAwN2MtMC4wMjgsMC4zMDItMC4wNjIsMC42MDUtMC4wOTQsMC45MDlj%0D%0AMC4wNDctMC4wODgsMC4wODktMC4xNzUsMC4xMzUtMC4yNjMNCgkJCQljLTAuMzkxLDAuMzczLTAu%0D%0ANzc5LDAuNzQ2LTEuMTY5LDEuMTIyYzAuMDgzLTAuMDUxLDAuMTcxLTAuMDk4LDAuMjU1LTAuMTQ3%0D%0AYy0wLjYwNywwLjEwMi0xLjIxLDAuMjA3LTEuODEzLDAuMzA5DQoJCQkJYzAuMTAzLDAuMDAyLDAu%0D%0AMTk5LDAuMDA3LDAuMzAxLDAuMDEyYy0wLjMyNC0wLjEyMS0wLjY0OC0wLjI0NS0wLjk3OS0wLjM2%0D%0ANWMwLjA5MywwLjA1MiwwLjE4NiwwLjEwNiwwLjI3OCwwLjE2MQ0KCQkJCWMxLjA0MywwLjU5NCwy%0D%0ALjM0MiwwLjQ4MiwzLjI5OC0wLjI1NGMwLjcxOS0wLjU1MywxLjI0OC0xLjg3MiwwLjIyNy0yLjQ2%0D%0AMWMtMS4xNjktMC42NjctMi40MjYtMC43NzItMy42MzItMC4wODYNCgkJCQljLTEuMjg1LDAuNzMy%0D%0ALTEuODA5LDEuOTk4LTAuOTk3LDMuMjgzYzEuNTQsMi40MzIsNi44LTAuMDQ4LDQuOTYzLTIuODY3%0D%0AQzI5LjQsMTMuOTgxLDI1LjA0NCwxNS43ODMsMjYuMzksMTcuODQ4eiIvPg0KCQk8L2c+DQoJPC9n%0D%0APg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNC40MTIsMjcuNDA1%0D%0AYy0wLjU4NC0wLjkzLTEuNjYxLTAuNzEtMi42MjEtMC41NjljLTAuNzE5LDAuMTA2LTMuMjE0LDAu%0D%0ANzE5LTMuMDYyLDEuODgxDQoJCQkJYzAuMTY3LDEuMjczLDEuNzAzLDEuMDY3LDIuNjQ0LDAuODkx%0D%0AQzEyLjQ3MywyOS40MDUsMTQuNjA3LDI4Ljg3NywxNC40MTIsMjcuNDA1Yy0wLjExMS0wLjgzNi00%0D%0ALjc0MSwwLjEtNC41OTIsMS4yMw0KCQkJCWMtMC4wMjMsMC4xMjQtMC4wNDYsMC4yNDctMC4wNzQs%0D%0AMC4zNzFjMS4wMjUtMC4zNTksMi4wNDUtMC43MTgsMy4wNzUtMS4wNzljLTAuMDk3LDAuMDA3LTAu%0D%0AMTk1LDAuMDE0LTAuMjg4LDAuMDIzDQoJCQkJYzAuMzg1LDAuMDM4LDAuNzcxLDAuMDc0LDEuMTU1%0D%0ALDAuMTEyYy0wLjM0My0wLjEwOC0wLjQzMy0wLjMxNi0wLjI2LTAuNjI1Yy0wLjg0MSwwLjMzMy0x%0D%0ALjY3NiwwLjY2Ni0yLjUxNSwwLjk5Nw0KCQkJCWMwLjA3NC0wLjAxMSwwLjE0OC0wLjAyMSwwLjIy%0D%0ANC0wLjAzMmMtMC40ODIsMC4wMjEtMC45NzEsMC4wNDItMS40NTIsMC4wNjNjMC4wNDYsMC4wNTUs%0D%0AMC4wOTMsMC4xMTIsMC4xMzksMC4xNjgNCgkJCQlDMTAuNTExLDI5LjcyOCwxNC43MzcsMjcuOTI4%0D%0ALDE0LjQxMiwyNy40MDV6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGgg%0D%0AZmlsbD0iI0ZGRkZGRiIgZD0iTTI1LjY3NSw0LjQ3MmMtMS4yMTEtMS43NTEtNS43NTctMC4zOTUt%0D%0ANS40MTgsMS44NjljMC4xOSwxLjI5NCwyLjQ5MSwwLjk5MSwzLjI4NSwwLjc3OQ0KCQkJCWMxLjE1%0D%0ALTAuMzA3LDIuNDg2LTEuMDQ2LDIuMjkyLTIuMzkyYy0wLjIwNC0xLjQwMy00LjgxNC0wLjM1OC00%0D%0ALjU4OCwxLjIzYy0wLjAxOSwwLjA5MS0wLjAzMywwLjE4MS0wLjA1MSwwLjI2OA0KCQkJCWMwLjE1%0D%0AOC0wLjIwNCwwLjMxMS0wLjQxMSwwLjQ2OS0wLjYxN2MtMC4wNzQsMC4wNTctMC4xNDcsMC4xMTMt%0D%0AMC4yMTgsMC4xN2MwLjcxOS0wLjI5LDEuNDM4LTAuNTc3LDIuMTU3LTAuODY2DQoJCQkJYy0wLjA5%0D%0ANCwwLjAwOS0wLjE4NywwLjAxOS0wLjI3OCwwLjAyOGMwLjUwMSwwLjAzNiwwLjk5OCwwLjA3NCwx%0D%0ALjQ5OSwwLjExYzAuMDIzLTAuMDcyLDAuMDQ2LTAuMTQ1LDAuMDY1LTAuMjE3DQoJCQkJYy0wLjE1%0D%0AMywwLjIwOC0wLjMxMiwwLjQxMi0wLjQ2NSwwLjYxOGMwLjA3NC0wLjA2MSwwLjE0NS0wLjExNyww%0D%0ALjIyNC0wLjE3NmMtMC45MTQsMC4zMDEtMS44MjMsMC42MDUtMi43MzcsMC45MDcNCgkJCQljLTAu%0D%0AMTYyLDAuMDExLTAuMzM4LDAuMDItMC41MSwwLjAyOUMyMi4yMDUsNy4zNzYsMjYuNjU0LDUuODks%0D%0AMjUuNjc1LDQuNDcyeiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZG%0D%0ARkZGIiBkPSJNMTMyLjYwNSwxOTEuNDY3Yy00LjAzMSwyLjU4NC04LjUxNCw0LjY5Ni0xMy4xNjEs%0D%0ANS45OTVjLTQuNjU3LDEuMzEzLTkuNTQyLDEuODM1LTE0LjM0OCwxLjQzNQ0KCQkJYy05LjYyNS0w%0D%0ALjczMy0xOC43OTctNS40NTctMjQuODM3LTEyLjc5N2M2LjM1Miw3LjA4MiwxNS41NzMsMTEuMjk1%0D%0ALDI0LjkxMSwxMS42MWM0LjY2NywwLjE5Miw5LjM0NC0wLjUxMywxMy43NTQtMS45NTUNCgkJCWM0%0D%0ALjQzOS0xLjQ1Miw4LjU0Ni0zLjU5NSwxMi4zOTItNi4yODRMMTMyLjYwNSwxOTEuNDY3eiIvPg0K%0D%0ACTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ1LjI2LDEyNC4yMDFjLTEu%0D%0AOTAxLTMuMDA0LTIuODM0LTYuNjg0LTIuNzM2LTEwLjE5MWMwLjA3OS0zLjUzNSwxLjAzLTYuOTUz%0D%0ALDIuNDk2LTEwLjA2Ng0KCQkJYzIuOTU1LTYuMjQzLDcuODg2LTExLjMwNCwxMy41NzItMTQuOTJj%0D%0ALTUuNDY0LDMuOTM2LTEwLjAwNiw5LjIzNi0xMi40ODcsMTUuMzk0Yy0xLjIyOSwzLjA2NS0xLjkx%0D%0ANiw2LjM0Ny0xLjgsOS41NzcNCgkJCWMwLjEyLDMuMjQyLDEuMDk1LDYuMzMyLDIuOTY5LDguOTQ1%0D%0ATDQ1LjI2LDEyNC4yMDF6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNG%0D%0ARkZGRkYiIGQ9Ik00NC45MTMsMTIzLjY3YzMuNjIzLDUuNTgzLDguOTAyLDcuODg5LDE0Ljc0Nywx%0D%0AMC41NzZjNy43MjQsMy41NTIsMTAuMTM2LDEwLjE1Niw5LjM4LDE4LjI3MQ0KCQkJCWMtMC40OTIs%0D%0ANS4yNjUtMS40NDIsMTAuMTgzLTAuNTM4LDE1LjQ3OWMxLjMyMiw3LjY4OCw2LjY3NSwxNC4yMzYs%0D%0AMTEuNzYsMTkuODIyYzEuMDM0LDEuMTM2LDIuNzE0LTAuNTQ5LDEuNjc5LTEuNjgNCgkJCQljLTUu%0D%0AOTE5LTYuNS0xMS4yMDctMTMuNzAzLTExLjU2MS0yMi43ODNjLTAuMjA0LTUuMzAxLDEuMzc0LTEw%0D%0ALjQ5NCwxLjIwMi0xNS44MDljLTAuNTItMTUuODM3LTE3LjU1OC0xNC4xOTMtMjQuNjE4LTI1LjA3%0D%0ANA0KCQkJCUM0Ni4xMzIsMTIxLjE4OSw0NC4wNzMsMTIyLjM4LDQ0LjkxMywxMjMuNjdMNDQuOTEz%0D%0ALDEyMy42N3oiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIg%0D%0AZD0iTTEzMC40NTIsMTkwLjA0OWMzLjkzOC0yLjU1Myw3LjQ2NC01LjU2MiwxMC40NjYtOS4xMzRj%0D%0AMi45OTItMy41NDgsNS4zOTktNy42MTYsNi45NjktMTIuMDIxDQoJCQljMy4yMDQtOC43NzQsMi43%0D%0ANTUtMTguOS0xLjQzNS0yNy40NDVjNC41NDEsOC4zNTMsNS40ODcsMTguNjI1LDIuNTYyLDI3Ljgx%0D%0AOGMtMS40MzUsNC42MDYtMy43NDQsOC45MzgtNi43MDMsMTIuNzYyDQoJCQljLTIuOTQ2LDMuODIy%0D%0ALTYuNTgzLDcuMTg2LTEwLjQ4OCw5Ljk1NUwxMzAuNDUyLDE5MC4wNDl6Ii8+DQoJPC9nPg0KCTxn%0D%0APg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTAwLjI0NSw4Ny4yMTFjLTEuNjY2LTIuNjQy%0D%0ALTQuMDI3LTQuNjkyLTYuODI5LTYuMDk4Yy0yLjc5Ny0xLjQwMy01Ljk2MS0yLjEwNC05LjE0Ny0y%0D%0ALjIzOA0KCQkJYy02LjQxMS0wLjI2NS0xMi44ODcsMS43NTYtMTguMzk3LDUuMjI2YzUuMjkzLTMu%0D%0ANzkyLDExLjcxMy02LjI3OSwxOC40MTItNi40MTNjMy4zMjEtMC4wNjEsNi43MzEsMC40NjQsOS44%0D%0ANzYsMS44MDkNCgkJCWMzLjEyMiwxLjMxMyw2LjAwNywzLjU0LDguMDAyLDYuMzIzTDEwMC4yNDUs%0D%0AODcuMjExeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBk%0D%0APSJNOTkuODQxLDg2LjYxN2M0LjQ5LDYuNDk5LDMuMTM3LDEzLjY2MSw0LjQzOSwyMC45ODZjMS4w%0D%0AMDIsNS42MjEsNS42MjIsOS43ODcsMTAuNzM0LDExLjgxOA0KCQkJCWM0Ljg0OCwxLjkyNiwxMC4w%0D%0AOCwyLjU2NCwxNC44NDksNC43MDRjNy44OTYsMy41NDksMTIuNDc5LDExLjU3OCwxNi4wNjMsMTku%0D%0AMDNjMC42NjMsMS4zODEsMi43MTUsMC4xNzUsMi4wNTItMS4xOTkNCgkJCQljLTUuNzg1LTEyLjAx%0D%0ANC0xMi44MjItMTkuNDg5LTI1Ljc2Ni0yMi43ODFjLTcuOTctMi4wMjktMTQuOTIzLTUuNDg2LTE1%0D%0ALjk5OS0xNC41OTZjLTAuODMtNi45ODgtMC4xMTUtMTMuMDcyLTQuMzIyLTE5LjE2Ng0KCQkJCUMx%0D%0AMDEuMDI4LDg0LjE2OCw5OC45NjQsODUuMzU1LDk5Ljg0MSw4Ni42MTdMOTkuODQxLDg2LjYxN3oi%0D%0ALz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRz%0D%0APSIxOC4xODQsMjYuNTYyIDU5LjU2Niw5MC4wNDEgMTYuMjE3LDI3Ljg5IAkJIi8+DQoJPC9nPg0K%0D%0ACTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjI2LjA4OCwyMS4yMjcgNjcu%0D%0AMjUzLDg0LjM3NiAyNC4xMjEsMjIuNTU1IAkJIi8+DQoJPC9nPg0KCTxnPg0KCQk8cG9seWdvbiBm%0D%0AaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE4Ljc1LDIuOTQyIDEuMzQ0LDEzLjIzNSAxNy40MjMsMC45%0D%0ANzMgCQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0i%0D%0AMy4yODQsMTEuMjUgMTcuNjgzLDI3Ljk0OSAxLjU3MiwxMi44OTMgCQkiLz4NCgk8L2c+DQoJPGc+%0D%0ADQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTguMTQ2LDIuNzY3IDI1Ljc0LDIy%0D%0ALjgzMyAxNS45NzYsMy43MyAJCSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K",
  description: 'A bassist, guitarist, and keyboardist since his early teens, David tries to write songs that showcase the particular talents of his bandmates. His playing style is both supportive and melodic, depending on the needs of the song. David’s deep love of jazz and other forms of improvised music shines through in his inventive approach to the bass. (Also composes, writes lyrics, and backup vocals.)',
  photo: davidPhoto
}, {
  musician: 'Jeff Lindsey',
  instrument: 'DRUMS',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzA1LjMxNnB4IiBoZWlnaHQ9IjIwMHB4IiB2%0D%0AaWV3Qm94PSIwIDAgMzA1LjMxNiAyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwNS4z%0D%0AMTYgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNTAuMDMxLDI1LjQxN2wtMC4wNjQsMC4yOTJjLTAuMDUyLDAu%0D%0AMTg5LTAuMTI2LDAuNDA4LTAuMjA1LDAuNTk4DQoJCQkJYy0wLjE0NywwLjMyMS0wLjMxNiwwLjU5%0D%0AMy0wLjUwNSwwLjgzNGMtMC4zODEsMC40NzctMC43OTMsMC44MzktMS4yMDQsMS4xMjhjLTAuODMs%0D%0AMC41ODQtMS42NTQsMC45NS0yLjQ3OSwxLjI3Mw0KCQkJCWMtMS42MzksMC42MjEtMy4yNjYsMS4w%0D%0AMDItNC44ODMsMS4zMTVjLTMuMjQ2LDAuNjE4LTYuNDgsMC45MjktOS43MDgsMS4xNWMtNi40NTYs%0D%0AMC40MTgtMTIuODkyLDAuNDA2LTE5LjMxMiwwLjIyNQ0KCQkJCWMtMTIuODQ1LTAuMzk2LTI1LjYz%0D%0AMi0xLjU0MS0zOC4zNTQtMy4xNDhjLTEyLjcxOS0xLjYyNi0yNS4zOC0zLjcxNS0zNy45LTYuNTM2%0D%0AYy02LjI1NS0xLjQyMi0xMi40NzktMy4wMTktMTguNTk4LTUuMDI4DQoJCQkJYy0zLjA1Ny0xLjAx%0D%0ANi02LjA5Mi0yLjExOC05LjAzOS0zLjUwNmMtMS40NjktMC43MDMtMi45Mi0xLjQ2My00LjI5My0y%0D%0ALjQzNGMtMC42ODQtMC40OTItMS4zNTEtMS4wMjYtMS45NDMtMS43MTgNCgkJCQlDMC45ODQsOS4x%0D%0AOSwwLjM4OSw4LjI1MSwwLjUxOCw3LjA4M2MwLjE1NC0xLjE1NywwLjk3LTEuOTMyLDEuNjc1LTIu%0D%0ANDM3YzAuNzM5LTAuNTIyLDEuNTIxLTAuODcyLDIuMzAxLTEuMTc3DQoJCQkJYzEuNTY4LTAuNTk1%0D%0ALDMuMTU3LTAuOTcyLDQuNzU0LTEuMjhjMy4xOTEtMC42MDcsNi4zOTktMC45MTcsOS42MDctMS4x%0D%0AMzhjNi40MTktMC40MTIsMTIuODM1LTAuNDAzLDE5LjIzNi0wLjIyDQoJCQkJYzEyLjgxMiwwLjM5%0D%0ANywyNS41NzksMS41MzcsMzguMjgsMy4xMzljMTIuNjk3LDEuNjIyLDI1LjMzOCwzLjcwOCwzNy44%0D%0AMjYsNi41MjJjNi4yMzgsMS40MjQsMTIuNDQ1LDMuMDEzLDE4LjUyNiw1LjAxDQoJCQkJYzMuMDM3%0D%0ALDEuMDEsNi4wNSwyLjEwNiw4Ljk0OCwzLjQ3M2MxLjQ0NCwwLjY4NiwyLjg2OCwxLjQzOCw0LjE3%0D%0AMywyLjM2MWMxLjIxNywwLjkxNiwyLjcyOSwyLjA2NywyLjYzOCwzLjc2MUwxNTAuMDMxLDI1LjQx%0D%0AN3oNCgkJCQkgTTE0OC40ODgsMjUuMTA1YzAuMDc0LTEuNjkxLTEuNDQ1LTIuODIxLTIuNjY5LTMu%0D%0ANzJjLTEuMzExLTAuOTEtMi43NDItMS42NDItNC4xODgtMi4zMTJjLTIuOTAxLTEuMzMxLTUuOTI4%0D%0ALTIuMzk1LTguOTY4LTMuMzcxDQoJCQkJYy02LjA5Ny0xLjkzMS0xMi4zMDctMy40NTctMTguNTU0%0D%0ALTQuODFjLTEyLjQ5My0yLjY4MS0yNS4xNC00LjYzNy0zNy44MzItNi4xMjZjLTEyLjY5NC0xLjQ3%0D%0ALTI1LjQ0Ni0yLjQ3NS0zOC4yMTItMi43MzkNCgkJCQlDMzEuNjg4LDEuOTA3LDI1LjMsMS45NjQs%0D%0AMTguOTUzLDIuNDRjLTMuMTY3LDAuMjUtNi4zMzMsMC41ODktOS40MjEsMS4yMDhjLTEuNTQsMC4z%0D%0AMTUtMy4wNjYsMC42OTYtNC40ODcsMS4yNTMNCgkJCQlDMy42ODMsNS40MjEsMi4xODEsNi4zMSwy%0D%0ALjA4LDcuMjgxYy0wLjExNCwwLjk3LDEuMTM4LDIuMTY3LDIuMzQsMi45ODVjMS4yNSwwLjg2NSwy%0D%0ALjY0NSwxLjU4Niw0LjA2NywyLjI0NA0KCQkJCWMyLjg1NCwxLjMxMiw1Ljg1MiwyLjM2Nyw4Ljg3%0D%0ANCwzLjMzN2M2LjA1OCwxLjkxNywxMi4yNTMsMy40NDIsMTguNDc5LDQuNzg5YzEyLjQ2NywyLjY3%0D%0ANiwyNS4wOTUsNC42MjQsMzcuNzYzLDYuMTEzDQoJCQkJYzEyLjY3MSwxLjQ2NywyNS40MDIsMi40%0D%0ANzUsMzguMTMxLDIuNzM2YzYuMzYzLDAuMTE3LDEyLjczMiwwLjA1OSwxOS4wMzUtMC40MTJjMy4x%0D%0ANDctMC4yNDksNi4yOS0wLjU4Nyw5LjMyOC0xLjIwMg0KCQkJCWMxLjUxMy0wLjMwOCwzLjAwNy0w%0D%0ALjY4NCw0LjM1LTEuMjEzYzEuMzM1LTAuNTAxLDIuNTY3LTEuMzM3LDIuNDkzLTEuODY4TDE0OC40%0D%0AODgsMjUuMTA1eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIg%0D%0AcG9pbnRzPSI3Ni40NjgsMTguMjY5IDc0Ljg5NSwxNTguMjczIDczLjMyLDE4LjI2OSAJCQkiLz4N%0D%0ACgkJPC9nPg0KCQk8Zz4NCgkJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iNzUuOTU5%0D%0ALDE1OS40MzQgNDEuOTg1LDE4OC40MDQgNzMuODMxLDE1Ny4xMTEgCQkJIi8+DQoJCTwvZz4NCgkJ%0D%0APGc+DQoJCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9Ijc1Ljk1OSwxNTcuMTExIDEw%0D%0ANy44MDMsMTg4LjQwNCA3My44MzEsMTU5LjQzNCAJCQkiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4N%0D%0ACgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTMwNC44MTYsOS4zMDJjLTAuMDI1LDAuMDI5LTAu%0D%0AMDQzLDAuMDc1LTAuMDY4LDAuMTA0Yy0wLjU3NywwLjY4My0xLjE4NywxLjE3Ny0xLjgwMSwxLjYz%0D%0AMQ0KCQkJYy0xLjIzNiwwLjg4NC0yLjUwMywxLjU2Mi0zLjc3NSwyLjE4MWMtMi41NTgsMS4yMjgt%0D%0ANS4xNjEsMi4xOTctNy43OCwzLjA5MWMtNS4yNDUsMS43NjYtMTAuNTYyLDMuMTczLTE1LjkwMyw0%0D%0ALjQzNg0KCQkJYy0xMC42OTIsMi40OTctMjEuNDk1LDQuMzY2LTMyLjM0OCw1Ljg0Yy0xMC44NTQs%0D%0AMS40NTEtMjEuNzYxLDIuNTA4LTMyLjcxOCwyLjkzM2MtNS40NzksMC4xOTEtMTAuOTYzLDAuMjQ2%0D%0ALTE2LjQ2LTAuMDY3DQoJCQljLTIuNzQ4LTAuMTcyLTUuNTAzLTAuNDEyLTguMjQ0LTAuOTFjLTEu%0D%0AMzcxLTAuMjU1LTIuNzQyLTAuNTY1LTQuMDk2LTEuMDdjLTAuNjgtMC4yNi0xLjM1NC0wLjU1NS0y%0D%0ALjAwOC0xLjAwNQ0KCQkJYy0wLjYyNC0wLjQ2OS0xLjM0LTEuMDQ1LTEuNTA5LTIuMjEzYy0wLjEy%0D%0AMy0wLjkxOSwwLjM5NC0xLjg0OCwwLjg3OS0yLjQwNmMwLjUwNC0wLjYwNCwxLjA3Ni0xLjA2Niwx%0D%0ALjY1Ny0xLjQ5NA0KCQkJYzEuMTcxLTAuODQxLDIuNDA2LTEuNTA1LDMuNjU3LTIuMTA5YzIuNTA3%0D%0ALTEuMjA3LDUuMDg5LTIuMTY3LDcuNjg4LTMuMDU0YzUuMjA1LTEuNzUxLDEwLjUwMi0zLjE1MSwx%0D%0ANS44My00LjQwNw0KCQkJYzEwLjY1OC0yLjQ5LDIxLjQ0My00LjM1NCwzMi4yNzEtNS44MjRjMTAu%0D%0AODM0LTEuNDUxLDIxLjcyNC0yLjUwNSwzMi42NDQtMi45MzFjNS40Ni0wLjE5OCwxMC45MzMtMC4y%0D%0ANDksMTYuMzg3LDAuMDYzDQoJCQljMi43MjUsMC4xNjcsNS40NTMsMC40MTEsOC4xNDUsMC45MDFj%0D%0AMS4zNCwwLjI0OSwyLjY3OCwwLjU1OCwzLjk2MywxLjAzM2MxLjIwNSwwLjQ4NywyLjcwNSwxLjEx%0D%0AMSwzLjAwMywyLjUyNEwzMDQuODE2LDkuMzAyeg0KCQkJIE0zMDAuNTA2LDMuODk1Yy0xLjA2OS0w%0D%0ALjMzMS0yLjE1MS0wLjYxNS0zLjI1Ni0wLjgwN2MtMi42ODgtMC40NTgtNS40MTQtMC42NjQtOC4x%0D%0AMzUtMC43OTkNCgkJCWMtNS40NS0wLjI0Ni0xMC45MS0wLjEyOS0xNi4zNTgsMC4xMzVjLTEwLjg5%0D%0ANSwwLjU1Mi0yMS43NTMsMS43MzktMzIuNTQ3LDMuMzE2Yy0xMC43ODgsMS41OTUtMjEuNTI1LDMu%0D%0ANTg5LTMyLjEwNyw2LjE4OA0KCQkJYy01LjI4MSwxLjMxMi0xMC41MzUsMi43NzEtMTUuNjU3LDQu%0D%0ANTY1Yy0yLjU1MiwwLjkwNy01LjA4OCwxLjg4Ni03LjQ4NSwzLjA3NmMtMS4xOTUsMC41OTgtMi4z%0D%0ANzEsMS4yNDctMy40MDUsMi4wMTQNCgkJCWMtMS4wMDcsMC43NDctMi4wMjEsMS43MjktMS44NzMs%0D%0AMi41NzNjMC4wNzMsMC42MDEsMS4zNDQsMS40MTgsMi41MDksMS43ODhjMS4yMDgsMC40MzUsMi41%0D%0AMTUsMC43MjEsMy44MjgsMC45NDQNCgkJCWMyLjYzNCwwLjQ0OSw1LjM0LDAuNjU1LDguMDM5LDAu%0D%0ANzg3YzUuNDA5LDAuMjQzLDEwLjg1NCwwLjEyOSwxNi4yOC0wLjEzMmMxMC44NjQtMC41NSwyMS43%0D%0AMDQtMS43MzEsMzIuNDc1LTMuMzA1DQoJCQljMTAuNzY3LTEuNTkzLDIxLjQ3OS0zLjU4MywzMi4w%0D%0AMjctNi4xOGM1LjI2Ny0xLjMxLDEwLjQ5OC0yLjc2NCwxNS41ODYtNC41NDdjMi41MzQtMC44OTks%0D%0ANS4wNDYtMS44NjksNy4zOTctMy4wMzcNCgkJCWMxLjE3MS0wLjU4NiwyLjMxMi0xLjIyMiwzLjI4%0D%0ANi0xLjk0MWMwLjk4Ny0wLjY5LDEuNzQtMS42NDgsMS41NTMtMS44OTNMMzAwLjUwNiwzLjg5NXoi%0D%0ALz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQzLjE0%0D%0ALDE1LjM3OCAyNDEuNTY1LDE2MC44NTQgMjM5Ljk5MSwxNS4zNzggCQkiLz4NCgk8L2c+DQoJPGc+%0D%0ADQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xOTQuMDk5LDc1LjIxNWM4LjAxMi0xLjYzOSwx%0D%0ANS45NjUtMy43MTMsMjMuNzMyLTYuMzAyYzMuODYxLTEuMzE2LDcuNzQ3LTIuNzExLDExLjI1NS00%0D%0ALjYyNA0KCQkJYzAuODUzLTAuNDg2LDEuNzEzLTEuMDMzLDIuMzA0LTEuNjQyYzAuMzA4LTAuMjc3%0D%0ALDAuMzk0LTAuNjcsMC4zODEtMC41NDdjMC4xNiwwLjEyMy0wLjMzMi0wLjIyMS0wLjc1LTAuMjgz%0D%0ADQoJCQljLTEuODMyLTAuNDE4LTMuOTQxLTAuNDEyLTUuOTY0LTAuNDA2Yy04LjE4MiwwLjE2Ni0x%0D%0ANi4zODcsMS4xNjgtMjQuNTIxLDIuMzkyYy04LjEyMiwxLjI5MS0xNi4yNTEsMi43OTQtMjQuMTA3%0D%0ALDUuMzA2DQoJCQljNy43ODktMi43MywxNS44OTEtNC40NTgsMjMuOTk3LTUuOTc3YzguMTI5LTEu%0D%0ANDQ1LDE2LjMwMS0yLjY3OCwyNC42MDEtMy4wOGMyLjA5MS0wLjA0OSw0LjE0NS0wLjE0OCw2LjM1%0D%0ANywwLjI4DQoJCQljMC41MjgsMC4yMDYsMS4yMDUsMC4xMSwxLjg1MiwxLjE4NGMwLjMzMiwxLjE1%0D%0ANi0wLjI4OSwxLjc1OC0wLjYyNywyLjIxNmMtMC44MTgsMC45MDctMS43MjIsMS40ODUtMi42Mjks%0D%0AMi4wNTcNCgkJCWMtMy42NjEsMi4xNzctNy41MjIsMy43MTQtMTEuMzk5LDUuMjA4Yy03Ljc3NCwy%0D%0ALjkyLTE1LjcyMiw1LjMxNS0yMy43OTIsNy4yODlMMTk0LjA5OSw3NS4yMTV6Ii8+DQoJPC9nPg0K%0D%0ACTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjI1LjQzMiwzNy4xMzdjMC4yNjUtMC4x%0D%0AODEtMS4xNjgtMC44NzMtMi4zOTYtMS4wNThjLTEuMjg4LTAuMjU4LTIuNjg1LTAuMzc1LTQuMDgt%0D%0AMC40MzcNCgkJCWMtMi44MDQtMC4xMTQtNS42NTIsMC4wMDYtOC41LDAuMjIyYy01LjY5MiwwLjQ0%0D%0ANi0xMS4zOTEsMS4zMS0xNy4wMTcsMi40MTljLTUuNjQ2LDEuMTI4LTExLjIzNiwyLjQ5OS0xNi43%0D%0AMTUsNC4yNw0KCQkJYy0yLjczMywwLjg5Ny01LjQ0NCwxLjg4MS04LjA1MywzLjA4M2MtMS4zMDQs%0D%0AMC42MDUtMi41ODgsMS4yNTctMy43ODMsMi4wNTdjLTAuNjAxLDAuMzk0LTEuMTcyLDAuODM2LTEu%0D%0ANjY5LDEuMzUNCgkJCWMtMC40ODYsMC41MDQtMC45NDcsMS4xNTMtMC44MzgsMS44OTdjLTAuMTQ2%0D%0ALTAuNzM4LDAuMjkyLTEuNDMzLDAuNzY0LTEuOTYxYzAuNDc5LTAuNTQ3LDEuMDM5LTEuMDIxLDEu%0D%0ANjI2LTEuNDQ1DQoJCQljMS4xNzUtMC44NTgsMi40MzgtMS41NzQsMy43MjQtMi4yNDRjMi41NzYt%0D%0AMS4zMzQsNS4yNTctMi40NDcsNy45NjUtMy40NzRjNS40MjgtMi4wMzUsMTEuMDAzLTMuNjc0LDE2%0D%0ALjYyMy01LjA2Ng0KCQkJYzUuNjQ2LTEuMzc3LDExLjM0MS0yLjUxNSwxNy4xMzctMy4yMzRjMi44%0D%0AOTYtMC4zNSw1LjgxMS0wLjYxMiw4Ljc4Ni0wLjYyNGMxLjQ4NywwLDIuOTg3LDAuMDQ2LDQuNTQs%0D%0AMC4yODMNCgkJCWMwLjc3OCwwLjExNywxLjU3MSwwLjI5MiwyLjQyLDAuNjE1YzAuNDE4LDAuMTU3%0D%0ALDAuODcsMC4zOTQsMS4zMjEsMC43MjljMC4yNTMsMC4yNDMsMC40MjgsMC4zMiwwLjcyLDAuNzc0%0D%0ADQoJCQljMC4zMTMsMC40OTUsMC4zMTMsMC42MjEsMC4zODksMC43NzhMMjI1LjQzMiwzNy4xMzd6%0D%0AIi8+DQoJPC9nPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE2My42%0D%0ANDUsNjcuMzI2IDE2Mi4zODQsNTAuOTM0IDE2Ni43NDYsNjYuNzg1IAkJIi8+DQoJPC9nPg0KCTxn%0D%0APg0KCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjIzMC45OSw2Mi4yMjMgMjI2Ljkx%0D%0AMywzNi42MDIgMjM0LjA2Nyw2MS41NDEgCQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRoIGZpbGw9%0D%0AIiNGRkZGRkYiIGQ9Ik0xMzIuNDEzLDc0LjU2M2MtNy40NjItMS43OTItMTUuMDMtMy4yNTMtMjIu%0D%0ANjI0LTQuNTI5Yy03LjU4Ny0xLjIxMS0xNS4yNTQtMi40MzItMjIuODU5LTIuNjIyDQoJCQljLTAu%0D%0AOTM5LTAuMDAzLTEuODg2LDAuMDE4LTIuNzcsMC4xMzVjLTAuNDM1LDAuMDU1LTAuODc2LDAuMTUz%0D%0ALTEuMTU5LDAuMjgzYy0wLjEzOSwwLjA1NS0wLjE2OCwwLjEzNS0wLjExMywwLjAxOQ0KCQkJYzAu%0D%0AMDA5LTAuMDA2LTAuMDItMC4wMzcsMC4wMzcsMC4wOTJjMC4yNjIsMC41MDcsMS4xMjQsMS4xMDYs%0D%0AMS44ODcsMS41NTVjMC43OTYsMC40NzQsMS42NDYsMC44OTIsMi41MSwxLjI4NQ0KCQkJYzMuNDc3%0D%0ALDEuNTYyLDcuMTQ1LDIuNzg5LDEwLjgxOCwzLjkzNWM3LjM2OCwyLjI1NywxNC44NzYsNC4xMTQs%0D%0AMjIuNDYxLDUuNTk1Yy03LjYzOC0xLjE5My0xNS4yMTktMi43NjEtMjIuNzA3LTQuNzQ3DQoJCQlj%0D%0ALTMuNzQtMS4wMTMtNy40NjMtMi4wOTUtMTEuMDk2LTMuNTY0Yy0wLjkwNi0wLjM3NS0xLjgxMS0w%0D%0ALjc3NS0yLjY5My0xLjI1NGMtMC44NzItMC41MjktMS43ODUtMC45MTctMi41NDQtMi4wNzgNCgkJ%0D%0ACWMtMC4xNzQtMC4yODktMC4zMjgtMC44My0wLjE3MS0xLjMwNGMwLjIwOS0wLjU4NCwwLjYxNC0w%0D%0ALjgwNiwwLjg5NS0wLjk2NWMwLjU5Mi0wLjI4OSwxLjExMS0wLjM4NywxLjYyOC0wLjQ3OQ0KCQkJ%0D%0AYzEuMDI3LTAuMTY2LDIuMDItMC4yMTUsMy4wMDUtMC4yNDNjNy44NjQtMC4wNCwxNS41NDYsMC45%0D%0ANTYsMjMuMjM1LDEuOTRjNy42ODQsMS4wNTIsMTUuMzQxLDIuMjg0LDIyLjk1OSwzLjg3MUwxMzIu%0D%0ANDEzLDc0LjU2M3oNCgkJCSIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIg%0D%0AZD0iTTE0Ny41Niw1My45MWMwLjMwNS0wLjAwOS0wLjctMS4xNTYtMS43MjMtMS43NzFjLTEuMDUx%0D%0ALTAuNzAxLTIuMjUtMS4zMTUtMy40NzEtMS44ODENCgkJCWMtMi40NS0xLjEzMS01LjAzMi0yLjA3%0D%0AMi03LjY0Ni0yLjkyM2MtNS4yMzUtMS42OTctMTAuNjE5LTMuMDE2LTE2LjA0OS00LjA5OGMtNS40%0D%0AMzMtMS4wNy0xMC45Mi0xLjktMTYuNDQ2LTIuMzMzDQoJCQljLTIuNzYyLTAuMjA2LTUuNTM0LTAu%0D%0AMzI5LTguMzA1LTAuMjEyYy0xLjM4NCwwLjA2MS0yLjc3LDAuMTcyLTQuMTIzLDAuNDM3Yy0wLjY4%0D%0AMiwwLjEzNS0xLjM1LDAuMzE2LTEuOTgyLDAuNTk2DQoJCQljLTAuNjE4LDAuMjY1LTEuMjY5LDAu%0D%0ANjc2LTEuNDM4LDEuMzc3YzAuMTM2LTAuNzEzLDAuNzgyLTEuMTY4LDEuMzk1LTEuNDdjMC42My0w%0D%0ALjMwNywxLjMwNC0wLjUyMiwxLjk3OS0wLjY4OA0KCQkJYzEuMzYyLTAuMzMyLDIuNzUxLTAuNTEs%0D%0ANC4xNDItMC42NGMyLjc4NS0wLjI0LDUuNTgtMC4yNTgsOC4zNjktMC4xNzhjNS41ODIsMC4xNzIs%0D%0AMTEuMTQ2LDAuNzUzLDE2LjY3NSwxLjU2OA0KCQkJYzUuNTI2LDAuODM2LDExLjAyMywxLjkwNiwx%0D%0ANi40NTYsMy4zODhjMi43MTUsMC43NSw1LjQwNywxLjU4Niw4LjA2MywyLjY2YzEuMzI4LDAuNTUs%0D%0AMi42NDksMS4xMzcsMy45NDcsMS45MTUNCgkJCWMwLjY1MSwwLjM5NCwxLjMwNCwwLjgzNiwxLjk0%0D%0AMiwxLjQzOWMwLjMxMywwLjI5OCwwLjYzNywwLjY3NiwwLjkyMywxLjE0OWMwLjEzNSwwLjMxNCww%0D%0ALjI2NSwwLjQ0MywwLjM2MSwwLjk2OQ0KCQkJYzAuMTAzLDAuNTc1LDAuMDU3LDAuNjgyLDAuMDYy%0D%0ALDAuODUyTDE0Ny41Niw1My45MXoiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNG%0D%0ARkZGRkYiIHBvaW50cz0iODAuNTY1LDY3LjQwOSA4Ni4zODMsNDMuMDg5IDgzLjY2NSw2Ny45NDcg%0D%0ACQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTQ1%0D%0ALjA2OSw2OC4xODEgMTQ5LjEyOCw1My45NzggMTQ4LjE3NSw2OC43MTkgCQkiLz4NCgk8L2c+DQoJ%0D%0APGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjQyLjYyOSwxNTkuNDM0IDIw%0D%0AOC42NTgsMTg4LjQwNCAyNDAuNTAyLDE1Ny4xMTEgCQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMjcuMjIxLDEzMi41OThjMC4wMjcsMTcuNTUzLTcuMjg2LDM1%0D%0ALTE5Ljc4Niw0Ny4yODVjLTEyLjM5MSwxMi40Mi0yOS44MTQsMTkuNTY0LTQ3LjMwOCwxOS40MDQN%0D%0ACgkJCWMtMTcuNDkzLDAuMDMxLTM0LjgwNS03LjIzNi00Ny4wMy0xOS42NjljLTEyLjM0MS0xMi4z%0D%0AMjItMTkuNDQ4LTI5LjY0NC0xOS4yODgtNDcuMDI0Yy0wLjAyNS0xNy4zODIsNy4xOTYtMzQuNTk4%0D%0ALDE5LjU2Mi00Ni43NDgNCgkJCWMxMi4yNDQtMTIuMjcyLDI5LjQ2MS0xOS4zNCw0Ni43NDQtMTku%0D%0AMTc3YzE3LjI5LTAuMDI0LDM0LjM4OSw3LjE1MSw0Ni40NzEsMTkuNDQyYzEyLjE5OSwxMi4xNzQs%0D%0AMTkuMjMzLDI5LjI4MiwxOS4wNjQsNDYuNDY4DQoJCQlMMjI3LjIyMSwxMzIuNTk4eiBNMjI1LjY0%0D%0ANiwxMzIuNTc4YzAuMDMtMTcuMTg4LTcuMTItMzQuMTgzLTE5LjM0My00Ni4xODhjLTEyLjA5Ni0x%0D%0AMi4xMjItMjkuMTE0LTE5LjA5NS00Ni4xODgtMTguOTQxDQoJCQljLTE3LjA5LTAuMDI0LTMzLjk3%0D%0AOCw3LjA4My00NS45MTEsMTkuMjI3Yy0xMi4wNTgsMTIuMDI3LTE4Ljk3NSwyOC45MzYtMTguODIx%0D%0ALDQ1LjkxMmMtMC4wMjMsMTYuOTgsNy4wMzQsMzMuNzczLDE5LjEwNCw0NS42MzkNCgkJCWMxMS45%0D%0ANjksMTEuOTc0LDI4Ljc2NCwxOC44NTQsNDUuNjQyLDE4LjY5OWMxNi44ODEsMC4wMiwzMy41NjQt%0D%0ANi45OTYsNDUuMzU3LTE4Ljk5MmMxMS45MDQtMTEuOSwxOC43NDQtMjguNTYyLDE4LjU4OC00NS4z%0D%0AODMNCgkJCUwyMjUuNjQ2LDEzMi41Nzh6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxs%0D%0APSIjRkZGRkZGIiBwb2ludHM9IjI0Mi42MjksMTU3LjExMSAyNzQuNDc5LDE4OC40MDQgMjQwLjUw%0D%0AMiwxNTkuNDM0IAkJIi8+DQoJPC9nPg0KCTxnPg0KCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBw%0D%0Ab2ludHM9IjEwNi42NDEsMTY4Ljk1NiA5NC41OTYsMTkxLjk0NSAxMDMuNzcyLDE2Ny42NjUgCQki%0D%0ALz4NCgk8L2c+DQoJPGc+DQoJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMjE2LjQ3%0D%0ANywxNjcuNjY1IDIyNS42NDYsMTkxLjk0NSAyMTMuNjA0LDE2OC45NTYgCQkiLz4NCgk8L2c+DQoJ%0D%0APGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNTUuOTg2LDY3LjY3N2MtMC42NTQtMC4y%0D%0ANC0xLjEyMi0wLjQ3OS0xLjU4OS0wLjcyNmMwLjAyOS0wLjI0LDAuMDA2LTAuNDgyLDAuMDE1LTAu%0D%0ANzIydi0xLjQ0OHYtMS40NDgNCgkJCVY2Mi42MWMwLjQ3OC0wLjI0NiwwLjk0MS0wLjQ4MiwxLjU3%0D%0ANC0wLjcyNmMwLjYzLDAuMjQzLDEuMDk4LDAuNDc5LDEuNTc0LDAuNzI2djAuNzIzdjEuNDQ4djEu%0D%0ANDQ4DQoJCQljMC4wMDYsMC4yNDMtMC4wMTcsMC40ODIsMC4wMTYsMC43MjJDMTU3LjEwOCw2Ny4x%0D%0AOTcsMTU2LjY0NSw2Ny40MzcsMTU1Ljk4Niw2Ny42Nzd6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0%0D%0AaCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQ3Ljk1Myw2MS44ODJjMC42Ny0wLjY1NSwxLjM0NC0xLjEy%0D%0AMiwyLjAxOC0xLjU4OWMwLjY3MSwwLjAzMSwxLjM0NywwLjAwNiwyLjAxNywwLjAxNWg0LjAzNGg0%0D%0ALjAzMw0KCQkJaDIuMDE3YzAuNjcsMC40NzcsMS4zNDcsMC45NDEsMi4wMTcsMS41NzRjLTAuNjcs%0D%0AMC42MzMtMS4zNCwxLjA5OC0yLjAxNywxLjU3NGgtMi4wMTdoLTQuMDMzaC00LjAzNA0KCQkJYy0w%0D%0ALjY3LDAuMDA2LTEuMzQzLTAuMDE2LTIuMDE3LDAuMDE1QzE0OS4zLDYzLjAwNCwxNDguNjI3LDYy%0D%0ALjUzNywxNDcuOTUzLDYxLjg4MnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==",
  description: "As a kid, he began playing on his mother's ironing board. As a teen, he joined multiple marching bands, then dove into progressive rock, funk, jazz, and country. He earned the nickname \"one take wonder\" during a few projects as a session drummer. Today, he stays surrounded by music at home and at work with the IATSE Local 417 stagehand crew at Durham Performing Arts Center, building and running Broadway shows and concerts.",
  photo: jeffPhoto
}, {
  musician: 'Cindy Jones',
  instrument: 'PERCUSSION',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdC%0D%0Ab3g9IjAgMCAyMDAgMjAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgMjAwIiB4bWw6%0D%0Ac3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZG%0D%0ARkYiIGQ9Ik0xODkuMzY4LDcuNTMyYzAuMDczLDAuMTYxLTAuMjAzLDEuNTgzLTAuNTQxLDEuOTlj%0D%0ALTAuMzM5LDAuNTU2LTAuNzI2LDAuOTg0LTEuMTE1LDEuMzQ3DQoJCQkJYy0wLjc3OCwwLjcyLTEu%0D%0ANTgzLDEuMjMtMi4zOTYsMS42ODZjLTEuNjE5LDAuOTEzLTMuMjY1LDEuNTYyLTQuOTE2LDIuMTY4%0D%0AYy0zLjMxMiwxLjE4LTYuNjYyLDIuMDUxLTEwLjAzNywyLjc5Ng0KCQkJCWMtNi43NDcsMS40NzQt%0D%0AMTMuNTY0LDIuNDEtMjAuNDAzLDMuMDNjLTYuODM5LDAuNTk0LTEzLjcxMSwwLjg3NS0yMC41ODks%0D%0AMC42MTdjLTMuNDM5LTAuMTM4LTYuODc4LTAuNDAzLTEwLjMwNS0wLjk3Mw0KCQkJCWMtMS43MTMt%0D%0AMC4yOTYtMy40MjgtMC42NDctNS4xMTMtMS4yMzZjLTAuODQ0LTAuMjktMS42ODktMC42NDQtMi40%0D%0AOTktMS4xNjFjLTAuNzcyLTAuNDk0LTEuNzE0LTEuMjc0LTEuODg4LTIuNTk2DQoJCQkJYy0wLjA0%0D%0ANS0wLjQ5OCwwLjE1NC0xLjI2OSwwLjQzNi0xLjcwMmMwLjI4LTAuNDU3LDAuNjE1LTAuODMxLDAu%0D%0AOTY2LTEuMTU2YzAuNzAxLTAuNjQ3LDEuNDY2LTEuMTM1LDIuMjQxLTEuNTY5DQoJCQkJYzEuNTUt%0D%0AMC44NzgsMy4xNjYtMS41MTcsNC43OTUtMi4xMTFjMy4yNi0xLjE2MSw2LjU4OC0yLjAyNSw5Ljkz%0D%0AOC0yLjc2NmM2LjY5Ny0xLjQ2MiwxMy40ODUtMi4zOTcsMjAuMjk3LTMuMDE0DQoJCQkJYzYuODEx%0D%0ALTAuNTk0LDEzLjY1LTAuODcyLDIwLjQ4MS0wLjYxNGMzLjQxNCwwLjEzOSw2LjgyNywwLjQwMywx%0D%0AMC4yMDIsMC45NjNjMS42ODIsMC4yOTMsMy4zNjIsMC42MzksNC45NzksMS4yMDMNCgkJCQljMC44%0D%0AMDYsMC4yNzcsMS42MDQsMC42MjIsMi4zMjYsMS4wNzVjMC43MDcsMC40NDcsMS4zOTYsMS4xMDIs%0D%0AMS41LDEuOTc2TDE4OS4zNjgsNy41MzJ6IE0xODcuNzE5LDcuNDgyDQoJCQkJYy0wLjExNS0wLjg3%0D%0AMi0wLjgxMS0xLjUwNC0xLjUyNS0xLjkyOWMtMC43MjUtMC40NDMtMS41Mi0wLjc2Mi0yLjMzMi0x%0D%0ALjAyM2MtMS42MTQtMC41MzEtMy4yOTctMC44NC00Ljk3OC0xLjA5OA0KCQkJCWMtMy4zNjgtMC40%0D%0AOTEtNi43NzYtMC42ODYtMTAuMTc5LTAuNzU0Yy02LjgxMi0wLjEyMy0xMy42MjIsMC4yOTItMjAu%0D%0AMzk1LDEuMDE5Yy02Ljc2MiwwLjc1Mi0xMy40OTgsMS44MTYtMjAuMSwzLjM5OA0KCQkJCWMtMy4y%0D%0AOTcsMC43OTktNi41NjIsMS43MTgtOS43MTIsMi45MTNjLTEuNTYsMC42MDYtMy4xMTQsMS4yNjMt%0D%0ANC41MjEsMi4wOTdjLTEuMzQ2LDAuNzUyLTIuODY3LDIuMDA1LTIuNzcxLDIuOTM4DQoJCQkJYzAu%0D%0AMTA0LDAuOTIsMS44MzksMS44LDMuMzA1LDIuMjQ3YzEuNTQzLDAuNTA3LDMuMTksMC44MTQsNC44%0D%0ANDQsMS4wNjdjMy4zMTIsMC40ODUsNi42OTYsMC42NzYsMTAuMDcxLDAuNzQ2DQoJCQkJYzYuNzYz%0D%0ALDAuMTE5LDEzLjU0OC0wLjI5MywyMC4yODctMS4wMTZjNi43MzMtMC43NDksMTMuNDQtMS44MSwx%0D%0AOS45OTYtMy4zNzljMy4yNzItMC43OTIsNi41MTktMS43MTEsOS42MTYtMi44ODUNCgkJCQljMS41%0D%0AMzEtMC41OTQsMy4wNTktMS4yMzksNC4zOTItMi4wMzljMS4zMjctMC43MzEsMi41OTEtMS44OTUs%0D%0AMi4zNTEtMi4zNDdMMTg3LjcxOSw3LjQ4MnoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZp%0D%0AbGw9IiNGRkZGRkYiIGQ9Ik0xODkuMDc4LDE2Mi4wOThjLTAuMDIxLDAuMTkxLDAuMDE0LDAuMTI5%0D%0ALTAuMDU5LDAuNTg2Yy0wLjA2NCwwLjM5My0wLjE4LDAuNjQ5LTAuMjc2LDAuODQyDQoJCQkJYy0w%0D%0ALjIxMiwwLjQ1MS0wLjQ3NiwwLjc2MS0wLjczNCwxLjA1MWMtMC41MjEsMC41NDktMS4wNTIsMC45%0D%0AMDQtMS41NzksMS4yMzZjLTEuMDU1LDAuNjQyLTIuMTA0LDEuMDg4LTMuMTU2LDEuNDgxDQoJCQkJ%0D%0AYy0yLjEwOSwwLjc3OS00LjIyOSwxLjMzMi02LjM1OSwxLjc5Yy00LjI2MiwwLjkwOC04LjU1Mywx%0D%0ALjQzLTEyLjg1NCwxLjcyN2MtNC4yOTcsMC4yODItOC42MTIsMC4zNC0xMi45MDEsMC4wMg0KCQkJ%0D%0ACWMtMi4xNDYtMC4xNjgtNC4yODktMC40MzItNi4zOTQtMC44OTZjLTEuMDQ5LTAuMjM4LTIuMDk2%0D%0ALTAuNTI3LTMuMDgyLTAuOTU5Yy0wLjkzMy0wLjQzMi0yLjA4NC0xLjAxOS0yLjIzNi0yLjE0NQ0K%0D%0ACQkJCWMwLjIyMiwxLjEwMiwxLjM3MSwxLjU4NCwyLjMxMiwxLjk1NWMwLjk5NSwwLjM1NSwyLjA0%0D%0AMSwwLjU3NCwzLjA4OSwwLjc1YzIuMDk0LDAuMzI4LDQuMjIxLDAuNDQ5LDYuMzQyLDAuNDc5DQoJ%0D%0ACQkJYzQuMjUyLDAuMDQ5LDguNTAyLTAuMjg3LDEyLjcwNy0wLjgzYzQuMjAxLTAuNTYzLDguMzgx%0D%0ALTEuMzUzLDEyLjQyNC0yLjQ5YzIuMDE0LTAuNTcyLDQuMDA4LTEuMjM1LDUuODU3LTIuMDYxDQoJ%0D%0ACQkJYzAuOTI0LTAuNDEyLDEuODItMC44NzYsMi41NjItMS40MDRjMC43NzgtMC41MTUsMS4yMjkt%0D%0AMS4xNjgsMS4wMzQtMS4xNzlMMTg5LjA3OCwxNjIuMDk4eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJ%0D%0APHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTExMS4yMDIsMTkuMDAyYzAuNDU4LTAuMjUsMC4zMzMt%0D%0AMC4yNDMsMC4zOTQtMC4yNzdjMC4wMTQtMC4wMTYsMCwwLTAuMDIxLDAuMDMxDQoJCQkJYy0wLjAz%0D%0ANSwwLjA2Mi0wLjA5NCwwLjE3Mi0wLjEzOSwwLjI5OWMtMC4wOTcsMC4yNTctMC4xODgsMC41ODEt%0D%0AMC4yNTksMC45MTVjLTAuMTQ3LDAuNjc0LTAuMjQzLDEuNDEzLTAuMzA4LDIuMTYyDQoJCQkJYy0w%0D%0ALjEzMywxLjUwNC0wLjE0OCwzLjA1OC0wLjEyNyw0LjYxNmMwLjA1NSwzLjEyNCwwLjMsNi4yNzMs%0D%0AMC42MDksOS40MTdjMC42MzMsNi4yOTgsMS41NjMsMTIuNTksMi42MDIsMTguODYyDQoJCQkJYzIu%0D%0AMDk2LDEyLjU0Nyw0LjY1LDI1LjAzMyw3LjM3NSwzNy40ODVjNS40NzcsMjQuODk0LDExLjY3Miw0%0D%0AOS42NDUsMTguMTMxLDc0LjMxN2MtNi45ODItMjQuNTI4LTEzLjcxNC00OS4xNDQtMTkuNzM2LTcz%0D%0ALjk0NQ0KCQkJCWMtMi45OTQtMTIuNDA5LTUuODI4LTI0Ljg1OS04LjIwMS0zNy40MjZjLTEuMTc0%0D%0ALTYuMjg0LTIuMjUtMTIuNTk2LTMuMDI5LTE4Ljk3N2MtMC4zODctMy4xOTMtMC43MDItNi4zOTYt%0D%0AMC44My05LjY1Mg0KCQkJCWMtMC4wNTktMS42MjctMC4wOC0zLjI2NCwwLjAyNy00Ljk0M2MwLjA1%0D%0ANi0wLjg0LDAuMTQzLTEuNjg3LDAuMzEyLTIuNTc1YzAuMDktMC40NDQsMC4xOTktMC45LDAuMzc0%0D%0ALTEuMzkxDQoJCQkJYzAuMDg5LTAuMjQ4LDAuMTkyLTAuNTAxLDAuMzQ5LTAuNzg5YzAuMDgtMC4x%0D%0ANDIsMC4xNzQtMC4yOTMsMC4zMTQtMC40NjhjMC4xODQtMC4xODQsMC4xOTUtMC4zMzUsMC44MzEt%0D%0AMC42NzJMMTExLjIwMiwxOS4wMDJ6Ig0KCQkJCS8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBm%0D%0AaWxsPSIjRkZGRkZGIiBkPSJNMTg4LjQyMSw3LjkwOGMwLjcwMywwLjIwNywwLjc0NCwwLjM1Miww%0D%0ALjk2OCwwLjVjMC4xNjYsMC4xNDUsMC4yODgsMC4yNzcsMC4zOTgsMC40MDYNCgkJCQljMC4yMDks%0D%0AMC4yNTQsMC4zNTksMC40ODUsMC40OTIsMC43MTNjMC4yNjgsMC40NTIsMC40NTMsMC44NzYsMC42%0D%0AMjEsMS4zMDNjMC4zMzksMC44NCwwLjU4LDEuNjU4LDAuNzkxLDIuNDc2DQoJCQkJYzAuNDIsMS42%0D%0AMzIsMC43MDMsMy4yNDUsMC45NDMsNC44NmMwLjQ3OSwzLjIyOCwwLjc1OCw2LjQ0LDAuOTc3LDku%0D%0ANjU1YzAuNDEyLDYuNDIzLDAuNTMxLDEyLjgzNywwLjUzOSwxOS4yNA0KCQkJCWMwLDEyLjgxMS0w%0D%0ALjQ2NywyNS41OTYtMS4xMDQsMzguMzYxYy0xLjMwOCwyNS41MzktMy4zMzYsNTEuMDE4LTUuNjM5%0D%0ALDc2LjQ2MmMxLjc1NC0yNS40ODMsMy4yMzUtNTEsMy45ODktNzYuNTI4DQoJCQkJYzAuMzYzLTEy%0D%0ALjc1OSwwLjU1Mi0yNS41MjcsMC4yNzktMzguMjY5Yy0wLjE0NS02LjM2Ni0wLjQwMi0xMi43MzQt%0D%0AMC45NDMtMTkuMDQ4Yy0wLjI3Ni0zLjE1Ni0wLjYyMy02LjMwMi0xLjE1MS05LjM4NA0KCQkJCWMt%0D%0AMC4yNjktMS41NDEtMC41NjktMy4wNjctMC45NzktNC41MjFjLTAuMjA1LTAuNzI2LTAuNDM3LTEu%0D%0ANDM1LTAuNzAxLTIuMDdjLTAuMTM1LTAuMzE4LTAuMjgzLTAuNjIyLTAuNDI2LTAuODQ5DQoJCQkJ%0D%0AYy0wLjA3NC0wLjExNS0wLjE0Ny0wLjIxNC0wLjE5Mi0wLjI2N2MtMC4wMjItMC4wMjMtMC4wMzkt%0D%0AMC4wMzYtMC4wMjItMC4wMmMwLjA2NywwLjAyLTAuMDU2LDAuMDQzLDAuNDUzLDAuMjAxTDE4OC40%0D%0AMjEsNy45MDh6Ig0KCQkJCS8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPGc+DQoJ%0D%0ACQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTk5LjAzNiw0Mi4zMjJjLTAuNjg2LTAuMzAyLTEu%0D%0AMTczLTAuNjA2LTEuNjY1LTAuOTA2YzAuMDMyLTAuMzAyLDAuMDA2LTAuNjA0LDAuMDE2LTAuOTA3%0D%0Adi0xLjgxNA0KCQkJCQl2LTEuODEzdi0wLjkwN2MwLjUtMC4zMDQsMC45ODUtMC42MDcsMS42NDgt%0D%0AMC45MDhjMC42NjQsMC4zMDQsMS4xNDgsMC42MDcsMS42NDgsMC45MDh2MC45MDd2MS44MTN2MS44%0D%0AMTQNCgkJCQkJYzAuMDA4LDAuMzAzLTAuMDE3LDAuNjA1LDAuMDE3LDAuOTA3QzEwMC4yMDksNDEu%0D%0ANzE4LDk5LjcyNSw0Mi4wMjIsOTkuMDM2LDQyLjMyMnoiLz4NCgkJCTwvZz4NCgkJCTxnPg0KCQkJ%0D%0ACTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik04OC45NzgsMzUuMDY0YzAuODQyLTAuNjg2LDEuNjgz%0D%0ALTEuMTczLDIuNTI2LTEuNjY1bDIuNTI2LDAuMDE2aDUuMDQ4aDUuMDQ3aDIuNTIzDQoJCQkJCWMw%0D%0ALjg0NSwwLjUwMiwxLjY4MywwLjk4NywyLjUyNCwxLjY0OWMtMC44MzcsMC42NjMtMS42ODEsMS4x%0D%0ANDctMi41MjQsMS42NDhoLTIuNTIzaC01LjA0N0g5NC4wM2wtMi41MjYsMC4wMTgNCgkJCQkJQzkw%0D%0ALjY2NCwzNi4yMzksODkuODIzLDM1Ljc1Myw4OC45NzgsMzUuMDY0eiIvPg0KCQkJPC9nPg0KCQk8%0D%0AL2c+DQoJCTxnPg0KCQkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxMDAuNjg2LDM4%0D%0ALjg0NiA5OS4wMzYsMTcxLjAyNyA5Ny4zODcsMzguODQ2IAkJCSIvPg0KCQk8L2c+DQoJCTxnPg0K%0D%0ACQkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIxMDAuMTUsMTY4LjgyNSA2NC41Njcs%0D%0AMTk5LjE3NiA5Ny45MjEsMTY2LjM5MyAJCQkiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwb2x5Z29u%0D%0AIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTAwLjE1LDE2Ni4zOTMgMTMzLjUwOSwxOTkuMTc2IDk3%0D%0ALjkyMSwxNjguODI1IAkJCSIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik04OS4yODIsMTQuMjg0Yy0wLjA1NiwwLjE5OS0wLjA0LDAuMzM3%0D%0ALTAuMzA0LDAuOTEzYy0wLjI0NiwwLjUzMS0wLjQzNSwwLjY1Ny0wLjY3NSwwLjk2Mw0KCQkJCWMt%0D%0AMC40NTUsMC40NDMtMC45MywwLjc3OC0xLjM3OCwxLjAyMmMtMC45MTEsMC40OTgtMS43OTIsMC44%0D%0AMTQtMi42NjEsMS4wNjJjLTEuNzQzLDAuNTAxLTMuNDUyLDAuNzc3LTUuMTYxLDAuOTk5DQoJCQkJ%0D%0AYy0zLjQxNiwwLjQyMS02LjgwMiwwLjU1LTEwLjE4NywwLjU3M2MtNi43NjYsMC4wMjEtMTMuNDc5%0D%0ALTAuNDYtMjAuMTc2LTEuMjNjLTYuNjY3LTAuNzg3LTEzLjMyNS0xLjg3My0xOS44NzctMy40MzkN%0D%0ACgkJCQljLTMuMjc3LTAuNzkzLTYuNTMyLTEuNjk3LTkuNzI0LTIuODc4Yy0xLjU5My0wLjU5OS0z%0D%0ALjE3Mi0xLjI1LTQuNjk5LTIuMTAzYy0wLjc2Mi0wLjQyMS0xLjUxMS0wLjkwNi0yLjIxMy0xLjUy%0D%0AOQ0KCQkJCWMtMC42NTUtMC42MDQtMS40ODYtMS40NTItMS40MzEtMi44MjhjMC4wMy0wLjUsMC40%0D%0AMy0xLjI0NiwwLjc4OS0xLjU4NWMwLjM3OC0wLjM2MywwLjc4NC0wLjY1NiwxLjE5My0wLjg3Mw0K%0D%0ACQkJCWMwLjgyMS0wLjQ0OSwxLjY1Mi0wLjc1MiwyLjQ4OS0wLjk5YzEuNjczLTAuNDgxLDMuMzU0%0D%0ALTAuNzU1LDUuMDM3LTAuOTczYzMuMzYzLTAuNDEyLDYuNzMtMC41NDMsMTAuMDktMC41NjMNCgkJ%0D%0ACQljNi43MTktMC4wMiwxMy40MTQsMC40NTksMjAuMDcxLDEuMjI0YzYuNjQ4LDAuNzg3LDEzLjI3%0D%0AMiwxLjg2NiwxOS43ODUsMy40MjNjMy4yNTQsMC43ODcsNi40ODUsMS42ODgsOS42MjgsMi44NDgN%0D%0ACgkJCQljMS41NjYsMC41OTEsMy4xMTksMS4yMyw0LjU4NCwyLjA1MWMwLjczMSwwLjQwNSwxLjQz%0D%0AOCwwLjg2OCwyLjA2NCwxLjQyNWMwLjYxMywwLjU0NCwxLjIwOSwxLjI2OSwxLjE1NCwyLjEzM0w4%0D%0AOS4yODIsMTQuMjg0eg0KCQkJCSBNODcuNjcxLDEzLjkyOWMwLjAzOC0wLjg2OC0wLjU2Ni0xLjU3%0D%0ALTEuMTg2LTIuMDk4Yy0wLjYzMy0wLjUzNy0xLjM0NC0wLjk4NS0yLjA4LTEuMzcxYy0xLjQ3Mi0w%0D%0ALjc4OC0zLjAzLTEuMzkyLTQuNjAzLTEuOTQ5DQoJCQkJYy0zLjE1My0xLjA5MS02LjM5MS0xLjky%0D%0AMi05LjY0OS0yLjYzOWMtNi41MjYtMS40MTctMTMuMTQtMi4zNTctMTkuNzg0LTMuMDA2Yy02LjYz%0D%0ANy0wLjYyNS0xMy4zMTEtMC45NjMtMTkuOTYxLTAuODA1DQoJCQkJYy0zLjMyNSwwLjA4OS02LjY0%0D%0AOCwwLjI4My05LjkxMiwwLjc1NWMtMS42MjYsMC4yNDMtMy4yNDksMC41NDgtNC43ODIsMS4wMjNj%0D%0ALTAuNzY1LDAuMjMtMS41MDcsMC41MjgtMi4xNDMsMC44OTMNCgkJCQljLTAuMzI3LDAuMTc3LTAu%0D%0ANTkxLDAuMzk1LTAuODE1LDAuNjExYy0wLjE5OCwwLjI4LTAuMjQ4LDAuMjczLTAuMzE3LDAuNjEz%0D%0AYy0wLjA2NiwwLjgyNCwxLjUyMywxLjk5NSwyLjg1LDIuNjc0DQoJCQkJYzEuNDA3LDAuNzUsMi45%0D%0ANDEsMS4zNDgsNC40ODQsMS44OTVjMy4xMDMsMS4wNzUsNi4zMjEsMS44OTksOS41NTMsMi42MTFj%0D%0ANi40ODIsMS40MTIsMTMuMDY3LDIuMzQ0LDE5LjY4OSwyLjk5MQ0KCQkJCWM2LjYwMSwwLjYyLDEz%0D%0ALjI1NSwwLjk1OSwxOS44NiwwLjhjMy4yOTctMC4wODksNi41OTgtMC4yODcsOS44MTMtMC43NTFj%0D%0AMS41OTktMC4yNCwzLjE5MS0wLjUzNyw0LjY1NS0wLjk5NQ0KCQkJCWMxLjQwMi0wLjM4NCwyLjk2%0D%0ANS0xLjI5MywyLjcyNy0xLjYxMkw4Ny42NzEsMTMuOTI5eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJ%0D%0APHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYyLjE4LDE1Ny4zNzljMC4wNDcsMC4wMS0wLjMzNiwx%0D%0ALjEyLTAuNjM2LDEuMzcxYy0wLjMxMiwwLjM4My0wLjYzNiwwLjYzNS0wLjk1LDAuODQ4DQoJCQkJ%0D%0AYy0wLjYyNCwwLjQwOC0xLjIwNywwLjYzMS0xLjc4NCwwLjgyN2MtMS4xNDQsMC4zODYtMi4yNDEs%0D%0AMC41NzctMy4zMzMsMC43MzdjLTIuMTgzLDAuMjk2LTQuMzI2LDAuMzgtNi40NTksMC4zOA0KCQkJ%0D%0ACWMtNC4yNy0wLjAxNy04LjQ4OC0wLjM4Ni0xMi42OC0wLjk2NmMtNC4xNzQtMC41OTItOC4zMjgt%0D%0AMS4zOTYtMTIuMzg3LTIuNTQzYy0yLjAyOS0wLjU3NC00LjAzNi0xLjIzNi01Ljk3Mi0yLjA4OA0K%0D%0ACQkJCWMtMC45NjMtMC40MjYtMS45MTYtMC44OTEtMi43OTMtMS40ODdjLTAuODE4LTAuNTc5LTEu%0D%0AODQ3LTEuMzI3LTEuODA2LTIuNDRjMC4wMzUsMS4xMDMsMS4wNzgsMS43NDYsMS45MTYsMi4yNjgN%0D%0ACgkJCQljMC44OTYsMC41MjEsMS44NjMsMC45MjQsMi44MzgsMS4yODFjMS45NTksMC43MDksMy45%0D%0AOCwxLjIzLDYuMDE1LDEuNjcyYzQuMDc5LDAuODY1LDguMjE2LDEuMzkxLDEyLjM3MiwxLjcwOQ0K%0D%0ACQkJCWM0LjEzOCwwLjI5Nyw4LjMxMywwLjM4MywxMi40MjEsMC4xMjljMi4wNTEtMC4xMzUsNC4w%0D%0AOTQtMC4zNTQsNi4wNDctMC43NmMwLjk2Ni0wLjE5OSwxLjkzMi0wLjQ0NSwyLjc1My0wLjc4NQ0K%0D%0ACQkJCWMwLjg2My0wLjMwNywxLjQ1LTAuODk2LDEuMjA2LTAuODE4TDYyLjE4LDE1Ny4zNzl6Ii8+%0D%0ADQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEuOTE2LDkuNzgz%0D%0AYzAuNzA4LTAuMjUsMC4zODUtMC4yMTEsMC40NDEtMC4xODdjLTAuMDQsMC4wMzgtMC4xMDUsMC4x%0D%0AMjQtMC4xNzEsMC4yMjcNCgkJCQljLTAuMTM1LDAuMjA4LTAuMjczLDAuNDgxLTAuNDAyLDAuNzc0%0D%0AYy0wLjI1NywwLjU4OC0wLjQ3OCwxLjI1Mi0wLjY3MywxLjkyOWMtMC4zOSwxLjM2Ni0wLjY4LDIu%0D%0AODAzLTAuOTI3LDQuMjU0DQoJCQkJYy0wLjQ5MSwyLjkwNS0wLjgxLDUuODgtMS4wNjIsOC44NTdD%0D%0AOC42MzQsMzEuNjAyLDguNDMsMzcuNjE0LDguMzM1LDQzLjYyOEM4LjE2Miw1NS42Niw4LjQ0Miw2%0D%0ANy43MTksOC44OTUsNzkuNzY3DQoJCQkJYzAuOTMsMjQuMTAzLDIuNTc4LDQ4LjE4Miw0LjQ4OCw3%0D%0AMi4yNDdjLTIuNDYtMjQuMDEyLTQuNjU2LTQ4LjA1OC02LjEzNi03Mi4xNjdDNi41Miw2Ny43OTIs%0D%0ANS45Niw1NS43Miw1Ljg2Miw0My42MTgNCgkJCQlDNS44MTgsMzcuNTY3LDUuODg0LDMxLjUwNSw2%0D%0ALjI0MywyNS40M2MwLjE4OC0zLjAzNywwLjQzOC02LjA4LDAuODg4LTkuMTM3YzAuMjI3LTEuNTI3%0D%0ALDAuNDk3LTMuMDU2LDAuODk5LTQuNjA2DQoJCQkJYzAuMjA1LTAuNzc1LDAuNDM4LTEuNTU0LDAu%0D%0ANzY1LTIuMzU4YzAuMTY2LTAuNDAyLDAuMzUzLTAuODExLDAuNjE3LTEuMjRDOS41NDcsNy44Nyw5%0D%0ALjY5NSw3LjY0Niw5LjkwOSw3LjQwMw0KCQkJCWMwLjMxMS0wLjI1MSwwLjI2NC0wLjQ5MywxLjM0%0D%0ALTAuODU1TDExLjkxNiw5Ljc4M3oiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNG%0D%0ARkZGRkYiIGQ9Ik04OC41NDYsMTQuNTE4YzAuOTU5LDAuNTUxLDAuODc1LDAuNzcxLDEuMTI5LDEu%0D%0AMDczYzAuMTYxLDAuMjczLDAuMjcxLDAuNTIsMC4zNjIsMC43NTUNCgkJCQljMC4xNzcsMC40NzIs%0D%0AMC4yOSwwLjkwNCwwLjM4MiwxLjMyNmMwLjE4MiwwLjg0NSwwLjI3MSwxLjY0OCwwLjMzNiwyLjQ0%0D%0AN2MwLjEyMiwxLjU4OSwwLjExNiwzLjE0MiwwLjA2OSw0LjY4Mg0KCQkJCWMtMC4xMDIsMy4wOC0w%0D%0ALjM4OCw2LjExLTAuNzQ1LDkuMTI0Yy0wLjcyMiw2LjAyOC0xLjcyOCwxMS45ODUtMi44NDIsMTcu%0D%0AOTE4Yy0yLjI0NiwxMS44Ni00Ljk0LDIzLjYwOS03Ljc5MSwzNS4zMDcNCgkJCQljLTUuNzQxLDIz%0D%0ALjM5Ni0xMi4xNzgsNDYuNjAxLTE4Ljg2OSw2OS43MjRjNi4xNjEtMjMuMjcxLDEyLjA2Ni00Ni42%0D%0AMSwxNy4yNTgtNzAuMDk1YzIuNTgzLTExLjc0Niw1LjAwMi0yMy41MjYsNi45NjUtMzUuMzY5DQoJ%0D%0ACQkJYzAuOTczLTUuOTE4LDEuODM1LTExLjg1NiwyLjQwNy0xNy43OTJjMC4yOC0yLjk2OCwwLjQ5%0D%0AMS01Ljk0MSwwLjUyMS04Ljg3OWMwLjAxLTEuNDY3LTAuMDItMi45MzItMC4xNjEtNC4zMzYNCgkJ%0D%0ACQljLTAuMDY5LTAuNjk5LTAuMTY5LTEuMzkxLTAuMzE3LTIuMDE0Yy0wLjA3Mi0wLjMxMS0wLjE2%0D%0ANS0wLjYwNC0wLjI1OS0wLjgzNWMtMC4wNDctMC4xMTUtMC4xLTAuMjExLTAuMTI4LTAuMjU5DQoJ%0D%0ACQkJYzAuMDU0LTAuMDEzLTAuMjUxLTAuMTIzLDAuMzc1LDAuMjVMODguNTQ2LDE0LjUxOHoiLz4N%0D%0ACgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K",
  description: 'Cindy Jones (aka Cindy-Anna- Jones and the Temple of Boom) has been playing and performing World percussion for over 20 years. Her playful polyrhythms and enthusiasm are contagious on and off the stage. When it comes to live performances, she serves up spicy sparks with a smile. (Also does backup vocals.)',
  photo: cindyPhoto
}, {
  musician: 'Sam Davis-Castro',
  instrument: 'KEYBOARDS',
  svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBB%0D%0AZG9iZSBJbGx1c3RyYXRvciAxNS4wLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9u%0D%0AOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBT%0D%0AVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzEx%0D%0ALmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxp%0D%0AbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMjAwLjIwMXB4IiBoZWlnaHQ9IjIwMHB4IiB2%0D%0AaWV3Qm94PSIwIDAgMjAwLjIwMSAyMDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwMC4y%0D%0AMDEgMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0K%0D%0ACQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLjc1LDc2LjY1NGwxNS42NCwxNS4wMzVsMTUu%0D%0ANTE0LDE1LjE2M2MxMC4zMjYsMTAuMTIzLDIwLjU1MiwyMC4zNDksMzAuODI5LDMwLjUyMQ0KCQkJ%0D%0ACQljMTAuMTgsMTAuMjcxLDIwLjQxOSwyMC40ODEsMzAuNTUxLDMwLjgwMWwxNS4xNzcsMTUuNDk4%0D%0AbDE1LjA1NCwxNS42MjJsLTAuMDcsMC4wN0wwLjY4LDc2LjcyNEwwLjc1LDc2LjY1NHoiLz4NCgkJ%0D%0ACQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMS4xMDMsNzYuMjk5bDE1LjYxLDE1LjA1bDE1LjQ5%0D%0ANSwxNS4xODdjMTAuMzE1LDEwLjE0MiwyMC41MjUsMjAuMzgxLDMwLjc5MiwzMC41NzENCgkJCQkJ%0D%0AYzEwLjE2NiwxMC4yODUsMjAuMzkxLDIwLjUxMiwzMC41MSwzMC44NDhsMTUuMTU2LDE1LjUyMmwx%0D%0ANS4wMjksMTUuNjQybDAuMTcxLDAuMTc4bC0wLjE3NCwwLjE3M2wtMC4wNywwLjA3bC0wLjE3Nyww%0D%0ALjE3Nw0KCQkJCQlsLTAuMTc3LTAuMTc3TDAuNjgsNzYuNzI0bDAsMGwwLDBsMC4wNy0wLjA3TDEu%0D%0AMTAzLDc2LjI5OXogTTAuNzUsNzYuNjU0bC0wLjA3LDAuMDdsMCwwbDEyMi45NDEsMTIyLjQ2Mmgt%0D%0AMC4zNTRsMC4wNy0wLjA3DQoJCQkJCWwtMC4wMDMsMC4zNTFsLTE1LjA3NS0xNS41OTlsLTE1LjE5%0D%0AOC0xNS40NzZjLTEwLjE0NS0xMC4zMDItMjAuMzk5LTIwLjQ5OS0zMC41OTUtMzAuNzU2DQoJCQkJ%0D%0ACWMtMTAuMjktMTAuMTU1LTIwLjUzMi0yMC4zNjgtMzAuODcxLTMwLjQ3NUwxNi4wNjMsOTIuMDI1%0D%0ATDAuNDAzLDc3LjAxNEwwLjc1LDc2LjY1NHoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8%0D%0AZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTk5LjUwMiwxMjMuMzQ0bC0x%0D%0ANS42MjktMTUuMDU3TDE2OC4zNyw5My4xMDVjLTEwLjMxOC0xMC4xMzgtMjAuNTM3LTIwLjM3Ni0z%0D%0AMC44MDctMzAuNTYzDQoJCQkJYy0xMC4xNzQtMTAuMjg0LTIwLjQwNS0yMC41MDgtMzAuNTI5LTMw%0D%0ALjg0MUw5MS44NjksMTYuMTgyTDc2LjgyNywwLjUzOWwwLjA3LTAuMDdsMTIyLjY3NiwxMjIuODA1%0D%0ATDE5OS41MDIsMTIzLjM0NHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xOTkuMTQ2%0D%0ALDEyMy42OTRsLTE1LjU5Ni0xNS4wNjdsLTE1LjQ4NC0xNS4yMDhjLTEwLjMwNy0xMC4xNTYtMjAu%0D%0ANTEtMjAuNDA4LTMwLjc2OS0zMC42MTQNCgkJCQljLTEwLjE1OC0xMC4yOTgtMjAuMzc2LTIwLjUz%0D%0AOC0zMC40ODctMzAuODg4TDkxLjY2NSwxNi4zNzVMNzYuNjQ3LDAuNzEybC0wLjE2OS0wLjE3N2ww%0D%0ALjE3Mi0wLjE3M2wwLjA3LTAuMDdsMC4xNzctMC4xNzgNCgkJCQlsMC4xNzcsMC4xNzhsMTIyLjUs%0D%0AMTIyLjk4MWwwLDBsMCwwbC0wLjA3MSwwLjA3TDE5OS4xNDYsMTIzLjY5NHogTTE5OS41MDIsMTIz%0D%0ALjM0NGwwLjA3MS0wLjA3bDAsMEw3Ni43MiwwLjY0NmwwLjM1NCwwDQoJCQkJbC0wLjA2OSwwLjA3%0D%0AbDAuMDAyLTAuMzVsMTUuMDYzLDE1LjYybDE1LjE4NiwxNS40OTZjMTAuMTM3LDEwLjMxNiwyMC4z%0D%0AODUsMjAuNTI3LDMwLjU3NCwzMC43OTcNCgkJCQljMTAuMjgxLDEwLjE3LDIwLjUxOCwyMC4zOTYs%0D%0AMzAuODQ4LDMwLjUxNmwxNS41MjIsMTUuMTU3bDE1LjY0OCwxNS4wMzJMMTk5LjUwMiwxMjMuMzQ0%0D%0AeiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJCQk8%0D%0AcGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzQuNjM5LDgzLjAyN2wtOS42MTEtOS42ODlsLTAuMzIt%0D%0AMC4zMjNsMC4zMjEtMC4zMTdsNDEuOTQxLTQxLjQ5NWwwLjE3OC0wLjE3NmwwLjE3NywwLjE3OA0K%0D%0ACQkJCQkJbDkuNTgzLDkuNjk5bDAuMTQzLDAuMTQ0bC0wLjE0NCwwLjE0MmwtNDEuOTEsNDEuNDg2%0D%0ATDc0LjYzOSw4My4wMjd6IE03NS4zNDgsODIuMzIybDQxLjI3LTQxLjQxOWwtMC4wMDEsMC4yODZs%0D%0ALTkuNjQ5LTkuNjMyDQoJCQkJCQlsMC4zNTQsMC4wMDFsLTQxLjY1Miw0MS43OHYtMC42NEw3NS4z%0D%0ANDgsODIuMzIyeiIvPg0KCQkJCQk8Zz4NCgkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03%0D%0ANC4yODMsODMuMzc3bC05Ljg5Ni0xMC4wNDRsLTAuMzE5LTAuMzI0bDAuMzIyLTAuMzE2bDQyLjU4%0D%0AMi00MS44NDRsMC4xNzktMC4xNzZsMC4xNzUsMC4xNzgNCgkJCQkJCQlsOS44NjgsMTAuMDU1bDAu%0D%0AMTQzLDAuMTQ1bC0wLjE0NCwwLjE0MUw3NC42MzksODMuMDI3TDc0LjI4Myw4My4zNzd6IE03NC45%0D%0AOTMsODIuNjc0bDQxLjkxNC00MS43N2wtMC4wMDEsMC4yODZsLTkuOTM3LTkuOTg3DQoJCQkJCQkJ%0D%0AbDAuMzU0LDAuMDAxTDY1LjAyNiw3My4zMzdsMC4wMDMtMC42NEw3NC45OTMsODIuNjc0eiIvPg0K%0D%0ACQkJCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTc0Ljk5NSw4MS45NjlsNDEuNDExLTQxLjI3%0D%0AN2wwLjUxOC0wLjUxNmwtMC4wMDUsMC43MjhsLTAuMDAyLDAuMjg2bC0wLjAwNSwwLjcxOGwtMC41%0D%0AMDUtMC41MDgNCgkJCQkJCQlsLTkuNjE2LTkuNjY1bC0wLjQzMy0wLjQzNWwwLjYxMSwwLjAwNGww%0D%0ALjM1NCwwLjAwMmwwLjYwMywwLjAwNGwtMC40MjYsMC40MjRMNjUuNzA0LDczLjM3M2wtMC4wODQs%0D%0AMC4wODNsMC0wLjExOGwwLjAwMi0wLjY0DQoJCQkJCQkJbDAtMC4xMTJsMC4wOCwwLjA3OUw3NC45%0D%0AOTUsODEuOTY5eiBNNzUuNzA0LDgyLjY3NGwtMC4zNTYtMC4zNTJsLTkuNzEyLTkuNTkxbDAuMDgt%0D%0AMC4wMzNsMC4wMDIsMC42NGwtMC4wODMtMC4wMzUNCgkJCQkJCQlsNDEuNTA5LTQxLjkyMmwwLjE3%0D%0ANywwLjQyOGgtMC4zNTRsMC4xNzktMC40M2w5LjY4Myw5LjU5OWwtMC41MSwwLjIxdi0wLjI4Nmww%0D%0ALjUxMiwwLjIxMkw3NS43MDQsODIuNjc0eiIvPg0KCQkJCQk8L2c+DQoJCQkJPC9nPg0KCQkJPC9n%0D%0APg0KCQk8L2c+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGZpbGw9IiNGRkZG%0D%0ARkYiIGQ9Ik01Ny4wNSw2NS40MzhsLTkuNjExLTkuNjg5bC0wLjMyLTAuMzIzbDAuMzIxLTAuMzE3%0D%0AbDQxLjk0LTQxLjQ5NWwwLjE3OC0wLjE3NmwwLjE3NSwwLjE3N2w5LjU4Myw5LjY5OQ0KCQkJCQkJ%0D%0AbDAuMTQzLDAuMTQ0TDk5LjMxNSwyMy42bC00MS45MSw0MS40ODZMNTcuMDUsNjUuNDM4eiBNNTcu%0D%0ANzU4LDY0LjczMmw0MS4yNy00MS40MTlsLTAuMDAxLDAuMjg2bC05LjY0OS05LjYzMmwwLjM1NCww%0D%0ALjAwMQ0KCQkJCQkJTDQ4LjA4LDU1Ljc0OXYtMC42NEw1Ny43NTgsNjQuNzMyeiIvPg0KCQkJCQk8%0D%0AZz4NCgkJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01Ni42OTMsNjUuNzg5bC05Ljg5Ni0x%0D%0AMC4wNDRsLTAuMzE5LTAuMzI0bDAuMzIyLTAuMzE2TDg5LjM4MiwxMy4yNmwwLjE3OS0wLjE3Nmww%0D%0ALjE3NSwwLjE3OA0KCQkJCQkJCWw5Ljg2NiwxMC4wNTNsMC4xNDIsMC4xNDVsLTAuMTQ0LDAuMTQy%0D%0ATDU3LjA1LDY1LjQzOEw1Ni42OTMsNjUuNzg5eiBNNTcuNDA0LDY1LjA4NWw0MS45MTMtNDEuNzcx%0D%0AbC0wLjAwMSwwLjI4N2wtOS45MzUtOS45ODcNCgkJCQkJCQlsMC4zNTQsMC4wMDJMNDcuNDM3LDU1%0D%0ALjc0OGwwLjAwMy0wLjY0TDU3LjQwNCw2NS4wODV6Ii8+DQoJCQkJCQk8cGF0aCBmaWxsPSIjRkZG%0D%0ARkZGIiBkPSJNNTcuNDA0LDY0LjM3OGw0MS40MTEtNDEuMjc2bDAuNTE3LTAuNTE2bC0wLjAwNSww%0D%0ALjcyOEw5OS4zMjYsMjMuNmwtMC4wMDUsMC43MThsLTAuNTA1LTAuNTA4DQoJCQkJCQkJTDg5LjIs%0D%0AMTQuMTQ2bC0wLjQzMi0wLjQzNWwwLjYxMSwwLjAwNGwwLjM1NCwwLjAwMmwwLjYwMywwLjAwNGwt%0D%0AMC40MjYsMC40MjRMNDguMTE1LDU1Ljc4NGwtMC4wODQsMC4wODNsMC0wLjExOGwwLjAwMi0wLjY0%0D%0ADQoJCQkJCQkJbDAtMC4xMTJsMC4wOCwwLjA3OUw1Ny40MDQsNjQuMzc4eiBNNTguMTE0LDY1LjA4%0D%0AM2wtMC4zNTYtMC4zNTFsLTkuNzEtOS41OWwwLjA4LTAuMDMzbDAuMDAyLDAuNjRsLTAuMDgzLTAu%0D%0AMDM1DQoJCQkJCQkJbDQxLjUwOS00MS45MjRsMC4xNzcsMC40MjhoLTAuMzU0bDAuMTc5LTAuNDNs%0D%0AOS42ODIsOS41OTlsLTAuNTEsMC4yMXYtMC4yODZsMC41MTIsMC4yMTJMNTguMTE0LDY1LjA4M3oi%0D%0ALz4NCgkJCQkJPC9nPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0K%0D%0ACQkJCTxnPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTA5LjgxOSwxMTguMjA2bC05%0D%0ALjYxMS05LjY4OGwtMC4zMi0wLjMyMmwwLjMyMS0wLjMxN2w0MS45NC00MS40OTVsMC4xNzgtMC4x%0D%0ANzZsMC4xNzYsMC4xNzgNCgkJCQkJCWw5LjU4Myw5LjY5OGwwLjE0NCwwLjE0NGwtMC4xNDUsMC4x%0D%0ANDJsLTQxLjkwOSw0MS40ODZMMTA5LjgxOSwxMTguMjA2eiBNMTEwLjUyNiwxMTcuNWw0MS4yNzEt%0D%0ANDEuNDE5bC0wLjAwMSwwLjI4Ng0KCQkJCQkJbC05LjY0OC05LjYzMWwwLjM1NCwwLjAwMWwtNDEu%0D%0ANjUsNDEuNzgxdi0wLjY0MUwxMTAuNTI2LDExNy41eiIvPg0KCQkJCQk8Zz4NCgkJCQkJCTxwYXRo%0D%0AIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMDkuNDYzLDExOC41NTdsLTkuODk2LTEwLjA0M2wtMC4zMTkt%0D%0AMC4zMjNsMC4zMjItMC4zMTZsNDIuNTgxLTQxLjg0NWwwLjE3OS0wLjE3NmwwLjE3NSwwLjE3OA0K%0D%0ACQkJCQkJCWw5Ljg2OCwxMC4wNTNsMC4xNDMsMC4xNDVsLTAuMTQ1LDAuMTQybC00Mi41NTIsNDEu%0D%0AODM1TDEwOS40NjMsMTE4LjU1N3ogTTExMC4xNzQsMTE3Ljg1NGw0MS45MTQtNDEuNzcxbC0wLjAw%0D%0AMiwwLjI4Nw0KCQkJCQkJCWwtOS45MzctOS45ODdsMC4zNTQsMC4wMDJsLTQyLjI5Nyw0Mi4xMzJs%0D%0AMC4wMDMtMC42NEwxMTAuMTc0LDExNy44NTR6Ii8+DQoJCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZG%0D%0AIiBkPSJNMTEwLjE3MywxMTcuMTQ2bDQxLjQxMS00MS4yNzdsMC41MTgtMC41MTZsLTAuMDA1LDAu%0D%0ANzI4bC0wLjAwMiwwLjI4NmwtMC4wMDUsMC43MThsLTAuNTA1LTAuNTA4DQoJCQkJCQkJbC05LjYx%0D%0ANS05LjY2NGwtMC40MzMtMC40MzVsMC42MTEsMC4wMDRsMC4zNTQsMC4wMDJsMC42MDMsMC4wMDRs%0D%0ALTAuNDI2LDAuNDI0bC00MS43OTMsNDEuNjM4bC0wLjA4NCwwLjA4NHYtMC4xMTgNCgkJCQkJCQls%0D%0AMC4wMDItMC42NDFsMC4wMDEtMC4xMTJsMC4wNzksMC4wNzlMMTEwLjE3MywxMTcuMTQ2eiBNMTEw%0D%0ALjg4MiwxMTcuODUybC0wLjM1NS0wLjM1MmwtOS43MDktOS41OWwwLjA4LTAuMDMzbDAuMDAyLDAu%0D%0ANjQxDQoJCQkJCQkJbC0wLjA4My0wLjAzNGw0MS41MDctNDEuOTI0bDAuMTc3LDAuNDI4aC0wLjM1%0D%0ANGwwLjE3OS0wLjQzbDkuNjgyLDkuNTk4bC0wLjUxLDAuMjFWNzYuMDhsMC41MTIsMC4yMTNMMTEw%0D%0ALjg4MiwxMTcuODUyeiIvPg0KCQkJCQk8L2c+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQk8L2c+DQoJ%0D%0ACTxnPg0KCQkJPGc+DQoJCQkJPGc+DQoJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMjcu%0D%0ANDA4LDEzNS43OTZsLTkuNjExLTkuNjg4bC0wLjMxOS0wLjMyM2wwLjMyLTAuMzE3bDQxLjkzOS00%0D%0AMS40OTRsMC4xNzktMC4xNzZsMC4xNzYsMC4xNzgNCgkJCQkJCWw5LjU4Myw5LjY5OGwwLjE0Myww%0D%0ALjE0NGwtMC4xNDQsMC4xNDJsLTQxLjkwOSw0MS40ODZMMTI3LjQwOCwxMzUuNzk2eiBNMTI4LjEx%0D%0ANiwxMzUuMDlsNDEuMjcxLTQxLjQxOWwtMC4wMDIsMC4yODYNCgkJCQkJCWwtOS42NDgtOS42MzFs%0D%0AMC4zNTQsMC4wMDFsLTQxLjY1LDQxLjc4di0wLjY0MUwxMjguMTE2LDEzNS4wOXoiLz4NCgkJCQkJ%0D%0APGc+DQoJCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTI3LjA1MiwxMzYuMTQ2bC05Ljg5%0D%0ANi0xMC4wNDRsLTAuMzE4LTAuMzIzbDAuMzIxLTAuMzE2bDQyLjU4MS00MS44NDRsMC4xNzktMC4x%0D%0ANzZsMC4xNzUsMC4xNzgNCgkJCQkJCQlsOS44NjcsMTAuMDUzbDAuMTQzLDAuMTQ1bC0wLjE0NCww%0D%0ALjE0MWwtNDIuNTUyLDQxLjgzNUwxMjcuMDUyLDEzNi4xNDZ6IE0xMjcuNzYzLDEzNS40NDNsNDEu%0D%0AOTEyLTQxLjc3bC0wLjAwMSwwLjI4Ng0KCQkJCQkJCWwtOS45MzYtOS45ODZsMC4zNTQsMC4wMDJs%0D%0ALTQyLjI5Niw0Mi4xM2wwLjAwNC0wLjYzOUwxMjcuNzYzLDEzNS40NDN6Ii8+DQoJCQkJCQk8cGF0%0D%0AaCBmaWxsPSIjRkZGRkZGIiBkPSJNMTI3Ljc2MywxMzQuNzM2bDQxLjQxMi00MS4yNzdsMC41MjEt%0D%0AMC41MThsLTAuMDA4LDAuNzMxbC0wLjAwMywwLjI4NmwtMC4wMDgsMC43MTVsLTAuNTAyLTAuNTA1%0D%0ADQoJCQkJCQkJbC05LjYxNS05LjY2NGwtMC40MzMtMC40MzVsMC42MTEsMC4wMDRsMC4zNTQsMC4w%0D%0AMDJsMC42MDMsMC4wMDRsLTAuNDI2LDAuNDI0bC00MS43OTMsNDEuNjM3bC0wLjA4NCwwLjA4NHYt%0D%0AMC4xMTgNCgkJCQkJCQlsMC4wMDItMC42NDFsMC4wMDEtMC4xMTJsMC4wNzksMC4wNzlMMTI3Ljc2%0D%0AMywxMzQuNzM2eiBNMTI4LjQ3MiwxMzUuNDQxbC0wLjM1NS0wLjM1MmwtOS43MDktOS41OWwwLjA4%0D%0ALTAuMDMzbDAuMDAyLDAuNjQxDQoJCQkJCQkJbC0wLjA4My0wLjAzNGw0MS41MDctNDEuOTIzbDAu%0D%0AMTc3LDAuNDI4aC0wLjM1NGwwLjE3OS0wLjQzbDkuNjgyLDkuNTk4bC0wLjUxLDAuMjA5bDAuMDAx%0D%0ALTAuMjg2bDAuNTEyLDAuMjE0TDEyOC40NzIsMTM1LjQ0MQ0KCQkJCQkJCXoiLz4NCgkJCQkJPC9n%0D%0APg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJ%0D%0ACQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQ0Ljk5OCwxNTMuMzg1bC05LjYxMi05LjY4OGwt%0D%0AMC4zMTgtMC4zMjNsMC4zMi0wLjMxN2w0MS45MzgtNDEuNDk0bDAuMTc5LTAuMTc3bDAuMTc2LDAu%0D%0AMTc5DQoJCQkJCQlsOS41ODQsOS42OTlsMC4xNDMsMC4xNDVsLTAuMTQ1LDAuMTQybC00MS45MDgs%0D%0ANDEuNDg1TDE0NC45OTgsMTUzLjM4NXogTTE0NS43MDYsMTUyLjY4bDQxLjI3LTQxLjQxOXYwLjI4%0D%0ANmwtOS42NDgtOS42MzMNCgkJCQkJCWwwLjM1NCwwLjAwMWwtNDEuNjUyLDQxLjc4bDAuMDAyLTAu%0D%0ANjM5TDE0NS43MDYsMTUyLjY4eiIvPg0KCQkJCQk8Zz4NCgkJCQkJCTxwYXRoIGZpbGw9IiNGRkZG%0D%0ARkYiIGQ9Ik0xNDQuNjQyLDE1My43MzVsLTkuODk2LTEwLjA0NGwtMC4zMTctMC4zMjJsMC4zMjEt%0D%0AMC4zMTZsNDIuNTgtNDEuODQ1bDAuMTc5LTAuMTc2bDAuMTc2LDAuMTc5DQoJCQkJCQkJbDkuODY3%0D%0ALDEwLjA1NmwwLjE0MywwLjE0NWwtMC4xNDUsMC4xNDJsLTQyLjU1MSw0MS44MzJMMTQ0LjY0Miwx%0D%0ANTMuNzM1eiBNMTQ1LjM1MywxNTMuMDMybDQxLjkxMy00MS43NjlsLTAuMDAyLDAuMjg2DQoJCQkJ%0D%0ACQkJbC05LjkzNy05Ljk4OGwwLjM1NCwwLjAwMmwtNDIuMjk1LDQyLjEzMmwwLjAwNC0wLjYzOUwx%0D%0ANDUuMzUzLDE1My4wMzJ6Ii8+DQoJCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQ1LjM1%0D%0AMywxNTIuMzI2bDQxLjQxLTQxLjI3N2wwLjUxNi0wLjUxM2wtMC4wMDMsMC43MjVsLTAuMDAxLDAu%0D%0AMjg2bC0wLjAwMywwLjcyMmwtMC41MDctMC41MTENCgkJCQkJCQlsLTkuNjE1LTkuNjY1bC0wLjQz%0D%0AMy0wLjQzNWwwLjYxMSwwLjAwNGwwLjM1NCwwLjAwMmwwLjYwMywwLjAwNGwtMC40MjYsMC40MjRs%0D%0ALTQxLjc5NSw0MS42MzhsLTAuMDg1LDAuMDg0bDAuMDAxLTAuMTE4DQoJCQkJCQkJbDAuMDA0LTAu%0D%0ANjM5bDAuMDAxLTAuMTEybDAuMDc5LDAuMDc5TDE0NS4zNTMsMTUyLjMyNnogTTE0Ni4wNjIsMTUz%0D%0ALjAzMWwtMC4zNTUtMC4zNTJsLTkuNzA5LTkuNTlsMC4wOC0wLjAzM3YwLjYzOQ0KCQkJCQkJCWwt%0D%0AMC4wODMtMC4wMzRsNDEuNTA5LTQxLjkyM2wwLjE3NywwLjQyOGgtMC4zNTRsMC4xNzktMC40MzFs%0D%0AOS42ODIsOS42bC0wLjUxLDAuMjEybC0wLjAwMS0wLjI4NmwwLjUxMiwwLjIxMkwxNDYuMDYyLDE1%0D%0AMy4wMzENCgkJCQkJCQl6Ii8+DQoJCQkJCTwvZz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4N%0D%0ACgkJPGc+DQoJCQk8Zz4NCgkJCQk8Zz4NCgkJCQkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9p%0D%0AbnRzPSIxMjkuNzk5LDU0LjAzOCA1My42MTQsMTI5LjU5OCAxMjkuMDkyLDUzLjMzMSAJCQkJCSIv%0D%0APg0KCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTMwLjE1MSw1NC4zOTNMMTMwLjE1MSw1%0D%0ANC4zOTNsLTc2LjM2MSw3NS4zODRsLTAuMzU1LTAuMzU1TDEyOS4wOSw1My4zM2wwLjAwMi0wLjAw%0D%0AMmwwLjAwMiwwLjAwMg0KCQkJCQkJbDAuNzA1LDAuNzA4TDEzMC4xNTEsNTQuMzkzeiBNMTI5LjQ0%0D%0ANCw1My42ODZsLTAuMzU0LTAuMzUzaDAuMDA0bC03NS4zMDEsNzYuNDQxbC0wLjM1NS0wLjM1NUwx%0D%0AMjkuNDQ0LDUzLjY4NnoiLz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwvZz4NCgkJPGc+DQoJCQk8%0D%0AZz4NCgkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTk5LjU4NiwxMjMuNDExbC05LjIxMSw5%0D%0ALjgxbC05LjMzNiw5LjY4NGMtNi4yNDEsNi40MzgtMTIuNTgzLDEyLjc3Ny0xOC44NzIsMTkuMTY4%0D%0ADQoJCQkJCWMtNi4zODcsNi4yOTMtMTIuNzE1LDEyLjY0Ni0xOS4xNSwxOC44OWwtOS42NzIsOS4z%0D%0ANDlsLTkuNzk5LDkuMjIzbC0wLjA3LTAuMDdsNzYuMDQxLTc2LjEyTDE5OS41ODYsMTIzLjQxMXoi%0D%0ALz4NCgkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTk5Ljk0MSwxMjMuNzYzbC05LjIyMiw5%0D%0ALjc3NWwtOS4zNjMsOS42NjdjLTYuMjYxLDYuNDMtMTIuNjE1LDEyLjc1Mi0xOC45MjYsMTkuMTM0%0D%0ADQoJCQkJCWMtNi40MDEsNi4yNzgtMTIuNzQ2LDEyLjYxNy0xOS4yLDE4Ljg1MWwtOS42OTYsOS4z%0D%0AMjlsLTkuODE2LDkuMTk2bC0wLjE3OCwwLjE2N2wtMC4xNzEtMC4xNzJsLTAuMDctMC4wN2wtMC4x%0D%0ANzctMC4xNzgNCgkJCQkJbDAuMTc3LTAuMTc2bDc2LjIxOC03NS45NDNsMCwwbDAsMGwwLjA2OSww%0D%0ALjA2OEwxOTkuOTQxLDEyMy43NjN6IE0xOTkuNTg2LDEyMy40MTFsLTAuMDY5LTAuMDY4bDAsMGwt%0D%0ANzUuODY0LDc2LjI5N3YtMC4zNTQNCgkJCQkJbDAuMDcsMC4wN2wtMC4zNDktMC4wMDZsOS43NzQt%0D%0AOS4yNDJsOS42NDctOS4zNjhjNi40MTktNi4yNTcsMTIuNzMzLTEyLjYyNSwxOS4xMDctMTguOTM1%0D%0ADQoJCQkJCWM2LjI3MS02LjQwMSwxMi42MDEtMTIuNzU5LDE4LjgyMy0xOS4yMDhsOS4zMS05Ljcw%0D%0AMWw5LjE4Ni05LjgyN0wxOTkuNTg2LDEyMy40MTF6Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgkJPGc+%0D%0ADQoJCQk8Zz4NCgkJCQk8Zz4NCgkJCQkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTc2LjcyNSww%0D%0ALjU0OGwtOS4yMSw5LjgwOWwtOS4zMzcsOS42ODNjLTYuMjQxLDYuNDM5LTEyLjU4MiwxMi43Nzgt%0D%0AMTguODcyLDE5LjE2OA0KCQkJCQkJYy02LjM4Nyw2LjI5My0xMi43MTUsMTIuNjQ2LTE5LjE1LDE4%0D%0ALjg5bC05LjY3Myw5LjM0N2wtOS43OTgsOS4yMjNsLTAuMDctMC4wN2w3Ni4wNC03Ni4xMjFMNzYu%0D%0ANzI1LDAuNTQ4eiIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzcuMDc3LDAuOTA0%0D%0AbC05LjIxNyw5Ljc3MWwtOS4zNjQsOS42NjZjLTYuMjYxLDYuNDI5LTEyLjYxNSwxMi43NTItMTgu%0D%0AOTI2LDE5LjEzNA0KCQkJCQkJYy02LjQwMSw2LjI3OC0xMi43NDUsMTIuNjE3LTE5LjE5OSwxOC44%0D%0ANTFsLTkuNjk3LDkuMzI3TDAuODU2LDc2Ljg1bC0wLjE3NywwLjE2N2wtMC4xNzEtMC4xNzJsLTAu%0D%0AMDY5LTAuMDdsLTAuMTc3LTAuMTc3DQoJCQkJCQlsMC4xNzctMC4xNzZMNzYuNjU0LDAuNDc3bDAs%0D%0AMGwwLDBsMC4wNywwLjA3MUw3Ny4wNzcsMC45MDR6IE03Ni43MjUsMC41NDhsLTAuMDctMC4wN2ww%0D%0ALDBMMC43OTIsNzYuNzc1di0wLjM1NGwwLjA3LDAuMDcNCgkJCQkJCWwtMC4zNDgtMC4wMDVsOS43%0D%0ANzMtOS4yNDNsOS42NDktOS4zNjdjNi40MTctNi4yNTYsMTIuNzMyLTEyLjYyNSwxOS4xMDYtMTgu%0D%0AOTM1YzYuMjcxLTYuNCwxMi42MDEtMTIuNzU4LDE4LjgyMy0xOS4yMDgNCgkJCQkJCWw5LjMxLTku%0D%0ANzAxbDkuMTg1LTkuODI4TDc2LjcyNSwwLjU0OHoiLz4NCgkJCQk8L2c+DQoJCQk8L2c+DQoJCTwv%0D%0AZz4NCgkJPGc+DQoJCQk8Zz4NCgkJCQk8Zz4NCgkJCQkJPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIg%0D%0AcG9pbnRzPSI3MC41MzcsNzguMjE3IDM2LjE1NiwxMTEuOTI4IDY5LjgzLDc3LjUxIAkJCQkJIi8+%0D%0ADQoJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03MC44ODksNzguNTcybC0wLjAwMSwwLjAw%0D%0AMWwtMzQuNTU1LDMzLjUzNWwtMC4zNTctMC4zNTdsMzMuODUxLTM0LjI0NWwwLjAwNC0wLjAwNGww%0D%0ALjAwNCwwLjAwNA0KCQkJCQkJbDAuNzAzLDAuNzFMNzAuODg5LDc4LjU3MnogTTcwLjE4Miw3Ny44%0D%0ANjVsLTAuMzU1LTAuMzUyaDAuMDA3bC0zMy40OTcsMzQuNTkxbC0wLjM1Ny0wLjM1N0w3MC4xODIs%0D%0ANzcuODY1eiIvPg0KCQkJCTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0KCQkJ%0D%0ACTxnPg0KCQkJCQk8cG9seWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEwNS43MTUsMTEzLjM5%0D%0ANiA3MS4zMzQsMTQ3LjEwNSAxMDUuMDA4LDExMi42ODkgCQkJCQkiLz4NCgkJCQkJPHBhdGggZmls%0D%0AbD0iI0ZGRkZGRiIgZD0iTTEwNi4wNjYsMTEzLjc1MmwtMC4wMDIsMC4wMDJsLTM0LjU1NCwzMy41%0D%0AMzJsLTAuMzU3LTAuMzU3bDMzLjg1MS0zNC4yNDNsMC4wMDQtMC4wMDNsMC4wMDQsMC4wMDMNCgkJ%0D%0ACQkJCWwwLjcwMywwLjcxMUwxMDYuMDY2LDExMy43NTJ6IE0xMDUuMzU5LDExMy4wNDVsLTAuMzU1%0D%0ALTAuMzUyaDAuMDA4bC0zMy40OTcsMzQuNTg5bC0wLjM1Ny0wLjM1N0wxMDUuMzU5LDExMy4wNDV6%0D%0AIi8+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQk8L2c+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPGc+DQoJ%0D%0ACQkJCTxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTIzLjMwNCwxMzAuOTg2IDg4Ljky%0D%0ANCwxNjQuNjk1IDEyMi41OTcsMTMwLjI3OSAJCQkJCSIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkZG%0D%0ARkZGIiBkPSJNMTIzLjY1NSwxMzEuMzQybC0wLjAwMiwwLjAwMmwtMzQuNTUzLDMzLjUzMmwtMC4z%0D%0ANTctMC4zNTdsMzMuODUtMzQuMjQzbDAuMDA0LTAuMDAzbDAuMDA0LDAuMDAzDQoJCQkJCQlsMC43%0D%0AMDMsMC43MTFMMTIzLjY1NSwxMzEuMzQyeiBNMTIyLjk0OCwxMzAuNjM1bC0wLjM1NS0wLjM1Mmgw%0D%0ALjAwOGwtMzMuNDk2LDM0LjU4OWwtMC4zNTctMC4zNTdMMTIyLjk0OCwxMzAuNjM1eiIvPg0KCQkJ%0D%0ACTwvZz4NCgkJCTwvZz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxnPg0KCQkJCQk8cG9s%0D%0AeWdvbiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE0MC44OTQsMTQ4LjU3NSAxMDYuNTEzLDE4Mi4y%0D%0AODUgMTQwLjE4NywxNDcuODY4IAkJCQkJIi8+DQoJCQkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9%0D%0AIk0xNDEuMjQ1LDE0OC45MzFsLTAuMDAyLDAuMDAybC0zNC41NTQsMzMuNTMzbC0wLjM1Ny0wLjM1%0D%0AN2wzMy44NTEtMzQuMjQ0bDAuMDA0LTAuMDAzbDAuMDA0LDAuMDAzDQoJCQkJCQlsMC43MDMsMC43%0D%0AMTFMMTQxLjI0NSwxNDguOTMxeiBNMTQwLjUzOCwxNDguMjI0bC0wLjM1NS0wLjM1MmgwLjAwOGwt%0D%0AMzMuNDk3LDM0LjU5bC0wLjM1Ny0wLjM1N0wxNDAuNTM4LDE0OC4yMjR6Ii8+DQoJCQkJPC9nPg0K%0D%0ACQkJPC9nPg0KCQk8L2c+DQoJCTxnPg0KCQkJPGc+DQoJCQkJPGc+DQoJCQkJCTxwb2x5Z29uIGZp%0D%0AbGw9IiNGRkZGRkYiIHBvaW50cz0iNTIuOTQ3LDYwLjYyOCAxOC41NjYsOTQuMzM3IDUyLjI0LDU5%0D%0ALjkyMSAJCQkJCSIvPg0KCQkJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTMuMjk4LDYwLjk4%0D%0AM2wtMC4wMDEsMC4wMDFMMTguNzQzLDk0LjUxN2wtMC4zNTctMC4zNTdsMzMuODUxLTM0LjI0M2ww%0D%0ALjAwNC0wLjAwNGwwLjAwNCwwLjAwNA0KCQkJCQkJbDAuNzAzLDAuNzFMNTMuMjk4LDYwLjk4M3og%0D%0ATTUyLjU5MSw2MC4yNzZsLTAuMzU0LTAuMzUxaDAuMDA3TDE4Ljc0Nyw5NC41MTRsLTAuMzU3LTAu%0D%0AMzU3TDUyLjU5MSw2MC4yNzZ6Ii8+DQoJCQkJPC9nPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0K%0D%0APC9nPg0KPC9zdmc+DQo=",
  description: "Started trumpet in 2nd grade and went to UNC School of the Arts for it. Found that playing more instruments = more fun. Self taught keyboard and guitar player; wishes he had time to try more of the instrument buffet. (Also plays guitar, trumpet and backup vocals.)",
  photo: samPhoto
}];
/* harmony default export */ __webpack_exports__["default"] = (instruments);

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Fsam.davis-castro%2FDesktop%2Fbellflower-site-nextjs%2Fpages%2Fabout.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=%2FUsers%2Fsam.davis-castro%2FDesktop%2Fbellflower-site-nextjs%2Fpages%2Fabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=%2FUsers%2Fsam.davis-castro%2FDesktop%2Fbellflower-site-nextjs%2Fpages%2Fabout.js!./");


/***/ }),

/***/ "dll-reference dll_ea92a4d9664833a26066":
/*!*******************************************!*\
  !*** external "dll_ea92a4d9664833a26066" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ea92a4d9664833a26066;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map