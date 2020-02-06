module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Firestore.js":
/*!*********************************!*\
  !*** ./Components/Firestore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

var firebaseConfig = {
  apiKey: "AIzaSyDSezQlKpXeA0D6YZ7M0Hq9Xq6XtJWjvTM",
  authDomain: "firstweb-304f2.firebaseapp.com",
  databaseURL: "https://firstweb-304f2.firebaseio.com",
  projectId: "firstweb-304f2",
  storageBucket: "firstweb-304f2.appspot.com",
  messagingSenderId: "383518059850",
  appId: "1:383518059850:web:ebd87272f122e0712265b3",
  measurementId: "G-YT5F8JPX2M"
}; // Initialize Firebase

if (!firebase__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.analytics();
}

/* harmony default export */ __webpack_exports__["default"] = (firebase__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./Components/Form.js":
/*!****************************!*\
  !*** ./Components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Firestore */ "./Components/Firestore.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\Components\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const formStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

class Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "addPost", e => {
      e.preventDefault();
      const db = firebase__WEBPACK_IMPORTED_MODULE_2___default.a.firestore();
      const userRef = db.collection('posts').add({
        topic: this.state.topic,
        subject: this.state.subject
      }).then(() => window.location.reload());
      this.setState({
        topic: '',
        subject: ''
      });
    });

    _defineProperty(this, "updateInput", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    this.state = {
      topic: '',
      subject: ''
    };
  }

  render() {
    const {
      topic,
      subject
    } = this.state;
    return __jsx("div", {
      style: formStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Add post"), __jsx("form", {
      onSubmit: this.addPost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      placeholder: "Topic",
      name: "topic",
      value: topic,
      ref: el => this.element = el,
      onChange: this.updateInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      placeholder: "Subject",
      name: "subject",
      value: subject,
      ref: el => this.element = el,
      onChange: this.updateInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    })), __jsx("input", {
      type: "submit",
      value: "Submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\Components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Header = () => __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
  bg: "dark",
  variant: "dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Brand, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  width: "30",
  height: "35",
  src: "https://www.agf.dk/frontend/images/logo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/front",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/posts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Posts"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/musictaste",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Posts")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/Layout.js":
/*!******************************!*\
  !*** ./Components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./Components/Header.js");
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\Components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const layoutStyle = {
  backgroundColor: "#F2F2F2"
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("body", {
  style: layoutStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.children), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./Components/Post.js":
/*!****************************!*\
  !*** ./Components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\Components\\Post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const postStyle = {
  margin: 20,
  padding: 0,
  height: "500px",
  wordWrap: "break-word"
};

class PostList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      posts: []
    });
  }

  componentDidMount() {
    firebase__WEBPACK_IMPORTED_MODULE_1___default.a.firestore().collection("posts").get().then(querySnapshot => {
      const posts = [];
      querySnapshot.forEach(function (doc) {
        posts.push({
          topic: doc.data().topic,
          subject: doc.data().subject
        });
      });
      this.setState({
        posts
      });
    }).catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }

  render() {
    let columns = [];
    this.state.posts.map((v, i) => {
      columns.push(__jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        key: i,
        id: "postDiv",
        style: postStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        style: {
          height: "50%",
          border: '3px solid #DDD',
          borderColor: "#737373",
          padding: "0px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("img", {
        style: {
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          height: "100%"
        },
        src: "data:image/jpeg;base64,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",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), __jsx("div", {
        style: {
          padding: "20px",
          border: '3px solid #DDD',
          borderColor: "#737373",
          borderTop: "none",
          height: "50%",
          width: "100%",
          textAlign: "left",
          display: "inline-block",
          backgroundColor: "#D9D9D9"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, v.topic), __jsx("div", {
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          height: "50%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, v.subject))))));

      if ((i + 1) % 3 === 0) {
        console.log("række");
        columns.push(__jsx("div", {
          className: "w-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }));
      }

      if (this.state.posts.length === columns.length) {
        console.log("hej");

        if (columns.length % 3 === 1) {
          columns.push(__jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, __jsx("div", {
            key: i,
            id: "postDiv",
            style: (postStyle, {
              visibility: "hidden"
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          })));
        }

        if (columns.length % 3 === 2) {
          columns.push(__jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, __jsx("div", {
            key: i,
            id: "postDiv",
            style: (postStyle, {
              visibility: "hidden"
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          })));
        }
      }
    });
    return __jsx("di", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, columns));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Header = () => __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
  bg: "dark",
  variant: "dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Brand, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("img", {
  width: "30",
  height: "35",
  src: "https://www.agf.dk/frontend/images/logo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/front",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/posts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Posts"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
  href: "/musictaste",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Posts")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  false ? undefined : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      } // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/posts.js":
/*!************************!*\
  !*** ./pages/posts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _Components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Form */ "./Components/Form.js");
/* harmony import */ var _Components_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Post */ "./Components/Post.js");
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\pages\\posts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Posts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("h1", {
      style: headerText,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Posts"), __jsx(_Components_Post__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx(_Components_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

const headerText = {
  textAlign: "center",
  padding: "10px"
};
/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/posts.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mathias\IdeaProjects\fnatinflation.github.io\pages\posts.js */"./pages/posts.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=posts.js.map