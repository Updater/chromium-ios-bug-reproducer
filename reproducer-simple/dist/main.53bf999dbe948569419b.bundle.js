/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "chromium-ios-bug-reproducer/reproducer-simple/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
document.querySelector('chromium-test').value = {
  x: function x() {}
};

var Test = function (_CustomElement2) {
  _inherits(Test, _CustomElement2);

  function Test() {
    _classCallCheck(this, Test);

    var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this));

    _this.setAttribute('tabindex', 0);
    return _this;
  }

  _createClass(Test, [{
    key: 'fireChangeEvent',
    value: function fireChangeEvent() {
      this.dispatchEvent(new Event('change'));
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.innerHTML = '\n    <button>Reproduce</button>\n    ';
      this.querySelector('button').addEventListener('click', this.fireChangeEvent);
    }
  }]);

  return Test;
}(_CustomElement);

customElements.define('chromium-test', Test);

var logToConsole = function logToConsole(html) {
  var initalHtml = document.querySelector('#console').innerHTML;
  document.querySelector('#console').innerHTML = html + initalHtml;
};

document.querySelector('#button').addEventListener('click', function () {
  var failed = false;

  try {
    console.log('a');
  } catch (ex) {
    failed = true;
    logToConsole('<code><pre>ConsoleLog Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
  }
  try {
    history.pushState(null, '', 'b');
  } catch (ex) {
    failed = true;
    logToConsole('<code><pre>PushState Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
  }
  if (!failed) {
    logToConsole('<code><pre>Test passed successfully</pre></code>');
  }
});

document.querySelector('#gCrWeb').addEventListener('click', function () {
  try {
    __gCrWeb.message.getMessageQueue();
  } catch (ex) {
    logToConsole('<code><pre>gCrWeb Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.53bf999dbe948569419b.bundle.js.map