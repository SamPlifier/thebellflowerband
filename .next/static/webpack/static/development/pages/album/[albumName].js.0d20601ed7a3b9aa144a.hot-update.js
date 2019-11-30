webpackHotUpdate("static/development/pages/album/[albumName].js",{

/***/ "./components/AlbumVendors.js":
false,

/***/ "./pages/album/[albumName].js":
/*!************************************!*\
  !*** ./pages/album/[albumName].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ViewAlbumSides */ "./components/ViewAlbumSides.js");
/* harmony import */ var _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/albumInfo.js */ "./public/albumInfo.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import AlbumVendors from '../../components/AlbumVendors';

var Album = function Album() {
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2852094415",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2852094415" + " " + "albums",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (album, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(AlbumVendors, {
      vendor: album.vendors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "INFO"), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Album Name", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, album.name)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Release Date", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, album.releaseDate)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Composers", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, album.writers.map(function (writer, j) {
      if (j + 1 < album.writers.length) {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, "".concat(writer, ", "));
      } else {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, writer);
      }
    }))), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Song Number", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, album.songs)), __jsx("div", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Song Names", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, album.songNames.map(function (song, k) {
      return __jsx("div", {
        key: k,
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, song), __jsx("br", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }))), __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "ART"), __jsx(_components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__["default"], {
      album: album.name.toLowerCase().split(' ').join('-'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2852094415",
    __self: this
  }, ".album-vendors.jsx-2852094415{display:grid;grid-template-areas:\"iTunes googlePlay\" \"amazonPrime cdBaby\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;margin:2rem 0;}.albums.jsx-2852094415{text-align:left;}.detail.jsx-2852094415{color:#f29a2f;}.detail.jsx-2852094415 span.jsx-2852094415{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bS9bYWxidW1OYW1lXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBSThCLEFBU0csQUFHRixBQUdILFdBQ2YsRUFkcUMsQ0FXckMsRUFIQSwwREFQbUMsK0JBQ0MsZ0NBQ2Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2FsYnVtL1thbGJ1bU5hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgVmlld0FsYnVtU2lkZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWV3QWxidW1TaWRlcyc7XG5pbXBvcnQgYWxidW1JbmZvIGZyb20gJy4uLy4uL3B1YmxpYy9hbGJ1bUluZm8uanMnO1xuLy8gaW1wb3J0IEFsYnVtVmVuZG9ycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsYnVtVmVuZG9ycyc7XG5cbmNvbnN0IEFsYnVtID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtc1wiPlxuICAgICAgICAgICAgICAgIHthbGJ1bUluZm8ubWFwKChhbGJ1bSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGJ1bVZlbmRvcnMgdmVuZG9yPXthbGJ1bS52ZW5kb3JzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklORk88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsXCI+QWxidW0gTmFtZTxici8+PHNwYW4+e2FsYnVtLm5hbWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbFwiPlJlbGVhc2UgRGF0ZTxici8+PHNwYW4+e2FsYnVtLnJlbGVhc2VEYXRlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxcIj5Db21wb3NlcnM8YnIvPjxzcGFuPnthbGJ1bS53cml0ZXJzLm1hcCgod3JpdGVyLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGorMSA8IGFsYnVtLndyaXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2p9PntgJHt3cml0ZXJ9LCBgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtqfT57d3JpdGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxcIj5Tb25nIE51bWJlcjxici8+PHNwYW4+e2FsYnVtLnNvbmdzfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlNvbmcgTmFtZXM8YnIvPjxzcGFuPnthbGJ1bS5zb25nTmFtZXMubWFwKChzb25nLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfT48c3Bhbj57c29uZ308L3NwYW4+PGJyLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BUlQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdBbGJ1bVNpZGVzIGFsYnVtPXthbGJ1bS5uYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCctJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAuYWxidW0tdmVuZG9ycyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImlUdW5lcyBnb29nbGVQbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbWF6b25QcmltZSBjZEJhYnlcIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFwiM3JlbSAzcmVtXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBcIjUwJSA1MCVcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxidW1zIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMjlhMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ })

})
//# sourceMappingURL=[albumName].js.0d20601ed7a3b9aa144a.hot-update.js.map