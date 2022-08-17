"use strict";

var _HelloMessage = _interopRequireDefault(require("./components/HelloMessage"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_HelloMessage["default"], {
  name: "Patrick"
}), document.getElementById('root'));