'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _amphtmlValidator = require('amphtml-validator');

var _amphtmlValidator2 = _interopRequireDefault(_amphtmlValidator);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = require('debug')('rampt:validator');

var enhanceValidator = function enhanceValidator(script) {
  var validateString = script.sandbox.amp.validator.validateString;

  return {
    validateMarkup: function validateMarkup(markup, ignoreErrors) {
      var validationResult = validateString(markup, 'AMP');
      if (!ignoreErrors && validationResult.status !== 'PASS') {
        validationResult.errors.forEach(function (error) {
          debug(error.severity + ' ' + error.params + '\n            line:' + error.code + ' col:' + error.col + ' ' + error.specUrl);
        });
        debug(markup);
        throw new Error(validationResult.errors);
      }
      debug('AMP validation status %s', validationResult.status);
      return validationResult;
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