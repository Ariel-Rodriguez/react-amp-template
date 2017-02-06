'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('example');
var output = _path2.default.resolve(__dirname, './example.html');

var rampt = new RAMPT({ ampValidations: true });

rampt.renderToFile(_react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' })).catch(debug);
//# sourceMappingURL=renderToFile.js.map