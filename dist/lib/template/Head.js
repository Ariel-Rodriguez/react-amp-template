"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boilerplateStyles = "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}";
var boilerplateStylesNoScript = "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}";

var _ref2 = _jsx("meta", {
  charSet: "utf-8"
});

var _ref3 = _jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1"
});

var _ref4 = _jsx("script", {
  async: true,
  src: "https://cdn.ampproject.org/v0.js"
});

var _ref5 = _jsx("style", {
  "amp-boilerplate": ""
}, void 0, boilerplateStyles);

var _ref6 = _jsx("noscript", {}, void 0, _jsx("style", {
  "amp-boilerplate": ""
}, void 0, boilerplateStylesNoScript));

var Head = function Head(_ref) {
  var ampScripts = _ref.ampScripts,
      customStyles = _ref.customStyles,
      canonical = _ref.canonical,
      title = _ref.title;
  return _jsx("head", {}, void 0, _ref2, _ref3, _jsx("title", {}, void 0, title), _ref4, _jsx("link", {
    rel: "canonical",
    href: canonical
  }), _ref5, _ref6, customStyles && _jsx("style", {
    "amp-custom": true
  }, void 0, customStyles), ampScripts);
};

exports.default = Head;
//# sourceMappingURL=Head.js.map