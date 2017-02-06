'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('example');

var rampt = new _lib2.default({
  ampValidations: true // default
});

rampt.renderStatic(_react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' })).then(function (htmlDocument) {
  debug('renderToStaticMarkup: ', htmlDocument);
}).catch(debug);
//# sourceMappingURL=staticMarkup.js.map