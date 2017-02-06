'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement(
  'div',
  { className: 'heading' },
  _react2.default.createElement(
    'h1',
    null,
    'Server Side Rendering with React + Modular CSS + AMP-custom-elements'
  ),
  _react2.default.createElement(
    'p',
    { id: 'summary' },
    'This is a sample of AMP article using react-amp-template library.'
  ),
  _react2.default.createElement(
    'p',
    null,
    _react2.default.createElement(
      'small',
      null,
      'By Ariel Rodriguez'
    )
  ),
  _react2.default.createElement(
    'p',
    { className: 'heading' },
    _react2.default.createElement('amp-social-share', {
      type: 'twitter',
      'data-param-text': 'react-amp-template. SSR with React+JSCSS+AMP-elements.',
      width: '45',
      height: '33'
    }),
    _react2.default.createElement('amp-social-share', {
      type: 'facebook',
      width: '45',
      height: '33',
      'data-attribution': 1185042588239232
    }),
    _react2.default.createElement('amp-social-share', {
      type: 'gplus',
      width: '45',
      height: '33'
    }),
    _react2.default.createElement('amp-social-share', {
      type: 'email',
      width: '45',
      height: '33'
    })
  )
);

var Heading = function Heading() {
  // amp-social-share script
  (0, _lib.addScript)('amp-social-share');

  return _ref;
};

exports.default = Heading;
//# sourceMappingURL=Heading.js.map