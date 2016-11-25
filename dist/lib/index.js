'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderToFile = exports.renderToStaticMarkup = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _react = require('react');

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('render');
var core = new _core2.default({});

var renderToStaticMarkup = exports.renderToStaticMarkup = function renderToStaticMarkup(component, props) {
  return core.render(component, props);
};

var renderToFile = exports.renderToFile = function renderToFile(file, component, props, beforeWrite) {
  var cb = beforeWrite;
  if (!(0, _react.isValidElement)(component)) {
    throw new Error('Component given is not valid to render.');
  }
  if (props) {
    if (typeof pros === 'function') {
      cb = props;
    } else if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') {
      throw new Error('Props must be a POJO!');
    }
  } else {
    cb = function cb(template) {
      return template;
    };
  }
  return core.render(component, props).then(cb).then(function (template) {
    try {
      debug('toFile: [%s]', file);
      _fs2.default.writeFileSync(file, template);
    } catch (err) {
      throw new Error(err);
    }
  });
};

exports.default = {
  server: _server2.default,
  core: core
};
//# sourceMappingURL=index.js.map