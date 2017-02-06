'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addScript = exports.addMeta = undefined;

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

var _Tags = require('./core/Tags');

var Tags = _interopRequireWildcard(_Tags);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addMeta = exports.addMeta = Tags.addMeta;
var addScript = exports.addScript = Tags.addScript;

exports.default = _core2.default;
//# sourceMappingURL=index.js.map