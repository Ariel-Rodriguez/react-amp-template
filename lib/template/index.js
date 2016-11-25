'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('template');

var Template = function Template(_ref) {
  var html = _ref.html,
      head = _ref.head,
      children = _ref.children;

  var htmlProps = _extends({
    lang: 'en'
  }, html);
  debug('Render template with head options: \n', head);
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    _react2.default.createElement(
      'html',
      _extends({ amp: '' }, htmlProps),
      _react2.default.createElement(_Head2.default, head),
      _react2.default.createElement(
        'body',
        null,
        children
      )
    )
  );
};

exports.default = Template;
//# sourceMappingURL=index.js.map