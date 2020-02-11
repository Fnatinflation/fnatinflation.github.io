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
      console.log(this.state.topic);
      const userRef = db.collection('posts').doc(this.state.topic).set({
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
        lineNumber: 43
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Add post"), __jsx("form", {
      onSubmit: this.addPost,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("textarea", {
      cols: "100",
      rows: "1",
      placeholder: "Topic",
      name: "topic",
      value: topic,
      ref: el => this.element = el,
      onChange: this.updateInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("textarea", {
      cols: "100",
      rows: "10",
      type: "text",
      placeholder: "Subject",
      name: "subject",
      value: subject,
      ref: el => this.element = el,
      onChange: this.updateInput,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), __jsx("input", {
      type: "submit",
      value: "Submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
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
  fixed: "top",
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


const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("body", {
  style: {
    backgroundColor: "#D9D9D9",
    paddingTop: "20px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  style: {
    margin: "0 auto",
    width: "50%",
    height: "100%",
    border: '1px solid #DDD',
    backgroundColor: "#F2F2F2"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, props.children)), __jsx("link", {
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mathias\\IdeaProjects\\fnatinflation.github.io\\Components\\Post.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const PostLink = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/posts/[id]",
  as: `/posts/${props.id}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.id));

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
        style: {
          cursor: "pointer"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/posts/[id]",
        as: `/posts/${v.topic}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        key: i,
        id: "postDiv",
        style: postStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
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
          lineNumber: 52
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
          lineNumber: 53
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
          display: "inline-block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("h1", {
        style: {
          textAlign: "center",
          fontSize: "18px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, v.topic), __jsx("div", {
        style: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          height: "80%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, v.subject)))))));

      if ((i + 1) % 3 === 0) {
        console.log("række");
        columns.push(__jsx("div", {
          className: "w-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
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
              lineNumber: 88
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
              lineNumber: 89
            },
            __self: this
          })));
        }

        if (columns.length % 3 === 2) {
          columns.push(__jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
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
              lineNumber: 98
            },
            __self: this
          })));
        }
      }
    });
    return __jsx("di", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
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
  fixed: "top",
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
  padding: "20px"
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