webpackHotUpdate("static\\development\\pages\\music.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./pages/music.js":
/*!************************!*\
  !*** ./pages/music.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Music; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\pages\\music.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PostLink = function PostLink(props) {
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post?title=".concat(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.title)));
};

function Music() {
  var nameField = asd;

  function handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + nameField);
    event.preventDefault();
  }

  return __jsx("form", {
    onSubmit: this.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Name:", __jsx("input", {
    type: "text",
    value: this.state.value,
    onChange: this.handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("input", {
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=music.js.f599ab1d732464cf0cf3.hot-update.js.map