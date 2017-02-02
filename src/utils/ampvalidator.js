import amphtmlValidator from 'amphtml-validator';
import path from 'path';
const debug = require('debug')('rampt:validator');

const enhanceValidator = (script) => {
  const validateString = script.sandbox.amp.validator.validateString;

  return {
    validateMarkup: (markup, ignoreErrors) => {
      const validationResult = validateString(markup, 'AMP');
      if (!ignoreErrors && validationResult.status !== 'PASS') {
        validationResult.errors.forEach((error) => {
          debug(`${error.severity} ${error.params}
            line:${error.code} col:${error.col} ${error.specUrl}`);
        });
        debug(markup);
        throw new Error(validationResult.errors);
      }
      debug('AMP validation status %s', validationResult.status);
      return validationResult;
    },
  };
};

let instance;
const getInstance = () => {
  if (!instance) {
    instance = amphtmlValidator.getInstance(
      path.resolve(__dirname, '../../vendors/validator.js')
    ).then(enhanceValidator);
  }
  return instance;
};

export default {
  getInstance,
};
