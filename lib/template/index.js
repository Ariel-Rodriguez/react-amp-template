'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('template');

var Template = function Template(_ref) {
  var head = _ref.head,
      children = _ref.children;

  debug('Render template with head options: \n', head);
  return _jsx('html', {
    amp: '',
    lang: 'en'
  }, void 0, _react2.default.createElement(_Head2.default, head), _jsx('body', {}, void 0, children));
};

exports.default = Template;
//# sourceMappingURL=index.js.map