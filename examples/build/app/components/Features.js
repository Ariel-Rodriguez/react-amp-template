'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'h2',
  null,
  'Features'
);

var _ref2 = _react2.default.createElement(
  'ul',
  null,
  _react2.default.createElement(
    'li',
    null,
    'React server side rendering.'
  ),
  _react2.default.createElement(
    'li',
    null,
    'Modular CSS'
  ),
  _react2.default.createElement(
    'li',
    null,
    'AMP ready!'
  )
);

exports.default = function () {
  return _react2.default.createElement(
    'section',
    { className: css(section) },
    _ref,
    _ref2
  );
};
//# sourceMappingURL=Features.js.map