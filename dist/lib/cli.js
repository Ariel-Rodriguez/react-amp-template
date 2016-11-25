'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.run = function () {
  new _server2.default(_constants2.default.server).start();
};
//# sourceMappingURL=cli.js.map