import amphtmlValidator from 'amphtml-validator';
import path from 'path';

const enhanceValidator = (script) => {
  const validateString = script.sandbox.amp.validator.validateString;

  return {
    validateMarkup: (markup) => {
      return validateString(markup, 'AMP');
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
