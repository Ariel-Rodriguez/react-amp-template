'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('example');

exports.default = (0, _lib.renderToStaticMarkup)(_react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' }), _app2.default.config).then(function (htmlDocument) {
  debug('renderToStaticMarkup: ', htmlDocument);
}).catch(debug);
//# sourceMappingURL=staticMarkup.js.map