'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amphtmlValidator = require('amphtml-validator');

var _amphtmlValidator2 = _interopRequireDefault(_amphtmlValidator);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhanceValidator = function enhanceValidator(script) {
  var validateString = script.sandbox.amp.validator.validateString;

  return {
    validateMarkup: function validateMarkup(markup) {
      return validateString(markup, 'AMP');
    }
  };
};

var instance = void 0;
var getInstance = function getInstance() {
  if (!instance) {
    instance = _amphtmlValidator2.default.getInstance(_path2.default.resolve(__dirname, '../../vendors/validator.js')).then(enhanceValidator);
  }
  return instance;
};

exports.default = {
  getInstance: getInstance
};
//# sourceMappingURL=ampvalidator.js.map