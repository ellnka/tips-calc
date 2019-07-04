// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component =
/*#__PURE__*/
function () {
  function Component(_ref) {
    var element = _ref.element;

    _classCallCheck(this, Component);

    this.$element = element;
  }

  _createClass(Component, [{
    key: "hide",
    value: function hide() {
      Component.hideElements(this.$element);
    }
  }, {
    key: "show",
    value: function show() {
      Component.showElements(this.$element);
    }
  }, {
    key: "on",
    value: function on(eventName, handler) {
      this.$element.addEventListener(eventName, handler);
    }
  }, {
    key: "_trigger",
    value: function _trigger(eventName, detail) {
      var event = new CustomEvent(eventName, {
        detail: detail
      });
      this.$element.dispatchEvent(event);
    }
  }], [{
    key: "hideElements",
    value: function hideElements() {
      for (var _len = arguments.length, $elements = new Array(_len), _key = 0; _key < _len; _key++) {
        $elements[_key] = arguments[_key];
      }

      $elements.forEach(function ($element) {
        if ($element && $element.classList && !$element.classList.contains("d-none")) {
          $element.classList.add("d-none");
        }
      });
    }
  }, {
    key: "showElements",
    value: function showElements() {
      for (var _len2 = arguments.length, $elements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        $elements[_key2] = arguments[_key2];
      }

      $elements.forEach(function ($element) {
        if ($element && $element.classList && $element.classList.contains("d-none")) {
          $element.classList.remove("d-none");
        }
      });
    }
  }]);

  return Component;
}();

exports.Component = Component;
},{}],"field.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _component = require("./component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Field =
/*#__PURE__*/
function (_Component) {
  _inherits(Field, _Component);

  function Field(_ref) {
    var _this;

    var element = _ref.element;

    _classCallCheck(this, Field);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Field).call(this, {
      element: element
    }));

    _this.$element.oncut = _this.$element.onpaste = _this.$element.onkeypress = function () {
      _this._trigger('inputChanged');
    };

    return _this;
  }

  return Field;
}(_component.Component);

exports.Field = Field;
},{"./component":"component.js"}],"inputField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = void 0;

var _field = require("./field");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputField =
/*#__PURE__*/
function (_Field) {
  _inherits(InputField, _Field);

  function InputField(_ref) {
    var _this;

    var element = _ref.element,
        precision = _ref.precision,
        value = _ref.value,
        isMoreThanZero = _ref.isMoreThanZero;

    _classCallCheck(this, InputField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputField).call(this, {
      element: element
    }));
    _this.$element.value = value.toFixed(precision);
    _this.value = value;
    _this._precision = precision;
    _this._isMoreThanZero = isMoreThanZero;
    _this.$element.onchange = _this._changeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputField, [{
    key: "_changeHandler",
    value: function _changeHandler() {
      this._trigger('inputChanged');

      if (this._isMoreThanZero && Number(this.$element.value) <= 0) {
        this.$element.value = 1;
      }

      this.value = Number(this.$element.value);
      this.$element.value = this.value.toFixed(this._precision);
    }
  }]);

  return InputField;
}(_field.Field);

exports.InputField = InputField;
},{"./field":"field.js"}],"result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Result = void 0;

var _component = require("./component");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Result =
/*#__PURE__*/
function (_Component) {
  _inherits(Result, _Component);

  function Result(_ref) {
    var _this;

    var element = _ref.element;

    _classCallCheck(this, Result);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Result).call(this, {
      element: element
    }));
    _this.results = {
      bill: 0,
      split: 0
    };
    return _this;
  }

  _createClass(Result, [{
    key: "updateResults",
    value: function updateResults(tips, bill, splitCount) {
      this._calculateResults(tips, bill, splitCount);

      this._resetResults();
    }
  }, {
    key: "_calculateResults",
    value: function _calculateResults(tips, bill, splitCount) {
      var tipsAmount = Result.calculateTips(tips, bill);
      var billAmount = bill + tipsAmount;

      if (splitCount > 0) {
        this.results = {
          tips: tipsAmount / splitCount,
          bill: billAmount / splitCount
        };
      } else {
        this.results = {
          tips: tipsAmount,
          bill: billAmount
        };
      }
    }
  }, {
    key: "_resetResults",
    value: function _resetResults() {
      this.$element.querySelector('[data-selector="bill"]').textContent = Result.formatPrice(this.results.bill);
      this.$element.querySelector('[data-selector="tips"]').textContent = Result.formatPrice(this.results.tips);
    }
  }], [{
    key: "calculateTips",
    value: function calculateTips(tips, bill) {
      return bill * tips / 100;
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === "number" && isFinite(value);
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(price) {
      return Result.isNumber(price) ? (Math.ceil(price * 100) / 100).toFixed(2) + "$" : "";
    }
  }]);

  return Result;
}(_component.Component);

exports.Result = Result;
},{"./component":"component.js"}],"checkBoxField.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBoxField = void 0;

var _field = require("./field");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CheckBoxField =
/*#__PURE__*/
function (_Field) {
  _inherits(CheckBoxField, _Field);

  function CheckBoxField(_ref) {
    var _this;

    var element = _ref.element;

    _classCallCheck(this, CheckBoxField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckBoxField).call(this, {
      element: element
    }));
    _this.value = false;
    _this.$element.onchange = _this._changeHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CheckBoxField, [{
    key: "_changeHandler",
    value: function _changeHandler() {
      this._trigger('inputChanged', {
        detail: ""
      });

      this._trigger('checkBoxChanged', {
        detail: ""
      });

      this.value = !this.value;
    }
  }]);

  return CheckBoxField;
}(_field.Field);

exports.CheckBoxField = CheckBoxField;
},{"./field":"field.js"}],"tipCalculator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCalculator = void 0;

var _inputField = require("./inputField");

var _result = require("./result");

var _checkBoxField = require("./checkBoxField");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TipCalculator =
/*#__PURE__*/
function () {
  function TipCalculator(_ref) {
    var element = _ref.element;

    _classCallCheck(this, TipCalculator);

    this.$element = element;
    this.$bill = new _inputField.InputField({
      element: this.$element.querySelector('[data-component="bill"]'),
      precision: 2,
      value: 100,
      isMoreThanZero: true
    });
    this.$tips = new _inputField.InputField({
      element: this.$element.querySelector('[data-component="tips"]'),
      precision: 2,
      value: 10,
      isMoreThanZero: false
    });
    this.$splitCount = new _inputField.InputField({
      element: this.$element.querySelector('[data-component="splitCount"]'),
      precision: 0,
      value: 2,
      isMoreThanZero: true
    });
    this.$isBillSplit = new _checkBoxField.CheckBoxField({
      element: this.$element.querySelector('[data-component="isBillSplit"]')
    });
    this.$results = {
      total: new _result.Result({
        element: this.$element.querySelector('[data-component="totalResults"]')
      }),
      split: new _result.Result({
        element: this.$element.querySelector('[data-component="splitResults"]')
      })
    };
    this.$splitBetweenContainer = this.$element.querySelector('[data-selector="splitBetweenContainer"]');
    this.$bill.on("inputChanged", this._inputChangedHandler.bind(this));
    this.$tips.on("inputChanged", this._inputChangedHandler.bind(this));
    this.$splitCount.on("inputChanged", this._inputChangedHandler.bind(this));
    this.$isBillSplit.on("inputChanged", this._inputChangedHandler.bind(this));
    this.$isBillSplit.on("checkBoxChanged", this._checkBoxChangedHandler.bind(this));
    this.$element.addEventListener("submit", this._submitHandler.bind(this));
  }

  _createClass(TipCalculator, [{
    key: "_inputChangedHandler",
    value: function _inputChangedHandler() {
      this._hideAllResults();
    }
  }, {
    key: "_checkBoxChangedHandler",
    value: function _checkBoxChangedHandler() {
      this.$splitBetweenContainer.classList.toggle("d-none");
    }
  }, {
    key: "_submitHandler",
    value: function _submitHandler(event) {
      event.preventDefault();
      this.$results.total.updateResults(this.$tips.value, this.$bill.value);
      this.$results.total.show();

      if (this.$isBillSplit.value) {
        this.$results.split.updateResults(this.$tips.value, this.$bill.value, this.$splitCount.value);
        this.$results.split.show();
      } else {
        this.$results.split.updateResults(0, 0, 0);
        this.$results.split.hide();
      }
    }
  }, {
    key: "_hideAllResults",
    value: function _hideAllResults() {
      this.$results.total.hide();
      this.$results.split.hide();
    }
  }, {
    key: "_showAllResults",
    value: function _showAllResults() {
      this.$results.total.show();
      this.$results.split.show();
    }
  }]);

  return TipCalculator;
}();

exports.TipCalculator = TipCalculator;
},{"./inputField":"inputField.js","./result":"result.js","./checkBoxField":"checkBoxField.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _tipCalculator = require("./tipCalculator");

var tipCalculator = new _tipCalculator.TipCalculator({
  element: document.querySelector('[data-component="tipCalculator"]')
});
},{"./tipCalculator":"tipCalculator.js"}],"C:/Users/elenay/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61709" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/elenay/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map