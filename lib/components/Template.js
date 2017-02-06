'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerHTML = require('../utils/innerHTML');

var _innerHTML2 = _interopRequireDefault(_innerHTML);

var _Head = require('./Head');

var _Head2 = _interopRequireDefault(_Head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('rampt:template');

var Template = function Template(_ref) {
  var html = _ref.html,
      head = _ref.head,
      body = _ref.body;

  debug({
    'script tags': head.scripts.length,
    'meta tags': head.metas.length,
    hasCustomStyles: head.styles.length ? 'Yes' : 'No'
  });
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    _react2.default.createElement(
      'html',
      _extends({ amp: '' }, html),
      _react2.default.createElement(_Head2.default, head),
      _react2.default.createElement('body', (0, _innerHTML2.default)(body))
    )
  );
};

exports.default = Template;
//# sourceMappingURL=Template.js.map