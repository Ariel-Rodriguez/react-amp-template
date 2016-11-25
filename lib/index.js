'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToStaticMarkup = undefined;

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var core = new _core2.default({});

var renderToStaticMarkup = exports.renderToStaticMarkup = function renderToStaticMarkup(component, props) {
  return core.render(component, props);
};

exports.default = {
  server: _server2.default,
  core: core
};
//# sourceMappingURL=index.js.map