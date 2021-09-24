"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/navbar.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Navbar = props => {
  let className = "link";
  if (props.type) className += " link-" + props.type;
  if (props.serif) className += " link-serif";
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-container " + (props.outline ? "nav-container-outline" : ""),
    id: "navbar"
  }, /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "home"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://ekazuki.fr"
  }, "Eka'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, props.twitter ? /*#__PURE__*/_react.default.createElement("a", {
    href: "https://twitter.com/ekazukiii",
    className: "social-link",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Twitter")) : '', props.github ? /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/ekazukii",
    className: "social-link",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Github")) : ''))));
};

var _default = Navbar;
exports.default = _default;