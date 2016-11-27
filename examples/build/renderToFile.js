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

(0, _lib.renderToFile)(output, _react2.default.createElement(_app2.default, { bannerText: 'React-AMP-Template' }), _app2.default.config).catch(debug);
//# sourceMappingURL=renderToFile.js.map