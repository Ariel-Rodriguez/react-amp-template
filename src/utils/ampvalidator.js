import amphtmlValidator from 'amphtml-validator'
const debug = require('debug')('rampt:validator')

export const validateMarkup = (markup, ignoreErrors) => {
  debug('validating markup.')
  return amphtmlValidator.getInstance()
    .then((validator) => {
      const validationResult = validator.validateString(markup, 'AMP')
      if (!ignoreErrors && validationResult.status !== 'PASS') {
        validationResult.errors.forEach((error) => {
          debug(`${error.severity} ${error.params}
            line:${error.code} col:${error.col} ${error.specUrl}`)
        })
        throw validationResult.errors
      }
      debug('AMP validation status %s', validationResult.status)
      return markup
    })
}
