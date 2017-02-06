'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience function to render amp scripts into the head of the template.
 * @returns {ReactElement}
 */
var Script = function Script(_ref) {
  var name = _ref.name,
      version = _ref.version;
  return _react2.default.createElement('script', {
    async: true,
    'custom-element': name,
    src: 'https://cdn.ampproject.org/v0/' + name + '-' + version + '.js'
  });
};

exports.default = Script;
//# sourceMappingURL=Script.js.map