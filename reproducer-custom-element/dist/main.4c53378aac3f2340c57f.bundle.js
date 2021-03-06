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
/******/ 	__webpack_require__.p = "chromium-ios-bug-reproducer/reproducer-custom-element/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTest = undefined;

var _utils = __webpack_require__(1);

var count = 0;

var runTest = exports.runTest = function runTest() {
  var failed = false;
  try {
    window.history.pushState(null, '', 'test-me' + count);
    count++;
  } catch (ex) {
    (0, _utils.logToConsole)('<code><pre>PushState Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
    failed = true;
  }

  try {
    console.log('hello');
    console.log('hello2');
  } catch (ex) {
    (0, _utils.logToConsole)('<code><pre>ConsoleLog Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
    failed = true;
  }

  if (!failed) {
    (0, _utils.logToConsole)('<code><pre>Test Ran Successfully</pre></code>');
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logToConsole = exports.logToConsole = function logToConsole(html) {
  var initalHtml = document.querySelector('#console').innerHTML;
  document.querySelector('#console').innerHTML = html + initalHtml;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(4);

var _utils = __webpack_require__(1);

// Switch between regular function in object and nested
// No observable differences
var testScenario = 'with_function';
// const testScenario = 'with_nested_function';

['chromium-test-shadow.withFunction', 'chromium-test-html.withFunction'].forEach(function (selector) {
  var app = document.querySelector(selector);
  if (testScenario === 'with_function') {
    app.value = {
      x: function x() {}
    };
  }

  if (testScenario === 'with_nested_function') {
    app.value = {
      x: {
        y: function y() {}
      }
    };
  }
});

var getMessageQueue = function getMessageQueue() {
  try {
    window.__gCrWeb.message.getMessageQueue();
  } catch (ex) {
    (0, _utils.logToConsole)('\n    <code><pre>GetMessageQueue Exception: ' + ex.message + '\n' + ex.stack + '</pre></code>');
  }
};

var callGetMessageQueue = document.querySelector('#callGetMessageQueue');
callGetMessageQueue.addEventListener('click', getMessageQueue);

// In order to make refreshing easier for gh-pages
var initialHref = window.location.href;
var refreshDemo = document.querySelector('#refresh');
refreshDemo.addEventListener('click', function () {
  window.location.href = initialHref;
});

// in order to make it easier to play with functionality
// without the text getting in the way
var toggleInstructions = document.querySelector("#toggleInstructions");
var state = localStorage.getItem('instruction-state');
document.querySelector('#instructions').style.display = state ? state : 'block';
toggleInstructions.addEventListener('click', function () {
  var instructions = document.querySelector('#instructions');
  instructions.style.display = instructions.style.display === 'block' ? 'none' : 'block';
  localStorage.setItem('instruction-state', instructions.style.display);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _runTest = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var ChromiumTestComponent = function (_CustomElement2) {
  _inherits(ChromiumTestComponent, _CustomElement2);

  function ChromiumTestComponent() {
    _classCallCheck(this, ChromiumTestComponent);

    var _this = _possibleConstructorReturn(this, (ChromiumTestComponent.__proto__ || Object.getPrototypeOf(ChromiumTestComponent)).call(this));

    _this.attachShadow({ mode: 'open' });
    _this.setAttribute('tabindex', 0);
    return _this;
  }

  _createClass(ChromiumTestComponent, [{
    key: 'fireChangeEvent',
    value: function fireChangeEvent() {
      this.dispatchEvent(new Event('change'));
    }
  }, {
    key: 'fireComposedChangeEvent',
    value: function fireComposedChangeEvent() {
      this.dispatchEvent(new Event('change', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: 'fireChangeEventAndRunTest',
    value: function fireChangeEventAndRunTest() {
      this.fireChangeEvent();
      (0, _runTest.runTest)();
    }
  }, {
    key: 'fireComposedChangeEventAndRunTest',
    value: function fireComposedChangeEventAndRunTest() {
      this.fireComposedChangeEvent();
      (0, _runTest.runTest)();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(ChromiumTestComponent.prototype.__proto__ || Object.getPrototypeOf(ChromiumTestComponent.prototype), 'connectedCallback', this) && _get(ChromiumTestComponent.prototype.__proto__ || Object.getPrototypeOf(ChromiumTestComponent.prototype), 'connectedCallback', this).call(this);
      this.shadowRoot.innerHTML = '\n      <button id="fireChangeEvent">\n        A) Fire Change Event \n      </button>\n\n      <button id="fireComposedChangeEvent">\n        B) Fire Composed Change Event \n      </button>\n\n      <button id="runTest">\n        C) Run Test\n      </button>\n\n      <button id="fireChangeEventAndRunTest">\n        D) Fire Change Event and Run Test\n      </button>\n\n      <button id="fireComposedChangeEventAndRunTest">\n        E) Fire Composed Change Event and Run Test\n      </button>\n    ';

      this.shadowRoot.querySelector('#fireChangeEvent').addEventListener('click', this.fireChangeEvent);

      this.shadowRoot.querySelector('#fireComposedChangeEvent').addEventListener('click', this.fireComposedChangeEvent);

      this.shadowRoot.querySelector('#runTest').addEventListener('click', _runTest.runTest);

      this.shadowRoot.querySelector('#fireChangeEventAndRunTest').addEventListener('click', this.fireChangeEventAndRunTest.bind(this));

      this.shadowRoot.querySelector('#fireComposedChangeEventAndRunTest').addEventListener('click', this.fireComposedChangeEventAndRunTest.bind(this));
    }
  }]);

  return ChromiumTestComponent;
}(_CustomElement);

exports.default = ChromiumTestComponent;


customElements.define('chromium-test-shadow', ChromiumTestComponent);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _runTest = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
  return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var ChromiumTestComponent = function (_CustomElement2) {
  _inherits(ChromiumTestComponent, _CustomElement2);

  function ChromiumTestComponent() {
    _classCallCheck(this, ChromiumTestComponent);

    var _this = _possibleConstructorReturn(this, (ChromiumTestComponent.__proto__ || Object.getPrototypeOf(ChromiumTestComponent)).call(this));

    _this.setAttribute('tabindex', 0);
    return _this;
  }

  _createClass(ChromiumTestComponent, [{
    key: 'fireChangeEvent',
    value: function fireChangeEvent() {
      this.dispatchEvent(new Event('change'));
    }
  }, {
    key: 'fireComposedChangeEvent',
    value: function fireComposedChangeEvent() {
      this.dispatchEvent(new Event('change', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: 'fireChangeEventAndRunTest',
    value: function fireChangeEventAndRunTest() {
      this.fireChangeEvent();
      (0, _runTest.runTest)();
    }
  }, {
    key: 'fireComposedChangeEventAndRunTest',
    value: function fireComposedChangeEventAndRunTest() {
      this.fireComposedChangeEvent();
      (0, _runTest.runTest)();
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(ChromiumTestComponent.prototype.__proto__ || Object.getPrototypeOf(ChromiumTestComponent.prototype), 'connectedCallback', this) && _get(ChromiumTestComponent.prototype.__proto__ || Object.getPrototypeOf(ChromiumTestComponent.prototype), 'connectedCallback', this).call(this);
      this.innerHTML = '\n      <button class="fireChangeEvent">\n        A) Fire Change Event \n      </button>\n\n      <button class="fireComposedChangeEvent">\n        B) Fire Composed Change Event \n      </button>\n\n      <button class="runTest">\n        C) Run Test\n      </button>\n\n      <button class="fireChangeEventAndRunTest">\n        D) Fire Change Event and Run Test\n      </button>\n\n      <button class="fireComposedChangeEventAndRunTest">\n        E) Fire Composed Change Event and Run Test\n      </button>\n    ';

      this.querySelector('.fireChangeEvent').addEventListener('click', this.fireChangeEvent);

      this.querySelector('.fireComposedChangeEvent').addEventListener('click', this.fireComposedChangeEvent);

      this.querySelector('.runTest').addEventListener('click', _runTest.runTest);

      this.querySelector('.fireChangeEventAndRunTest').addEventListener('click', this.fireChangeEventAndRunTest.bind(this));

      this.querySelector('.fireComposedChangeEventAndRunTest').addEventListener('click', this.fireComposedChangeEventAndRunTest.bind(this));
    }
  }]);

  return ChromiumTestComponent;
}(_CustomElement);

exports.default = ChromiumTestComponent;


customElements.define('chromium-test-html', ChromiumTestComponent);

/***/ })
/******/ ]);
//# sourceMappingURL=main.4c53378aac3f2340c57f.bundle.js.map