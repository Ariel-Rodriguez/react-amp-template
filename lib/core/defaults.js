'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactInjection = require('react-dom/lib/ReactInjection');

exports.default = {
  ampValidations: true,
  template: {
    prettyPrint: true,
    doctype: '<!DOCTYPE html>',
    tags: {
      'amp-script-version': '0.1'
    },
    html: {
      lang: 'en'
    }
  },
  DOMPropertyConfig: {
    Properties: {
      amp: _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'amp-boilerplate': _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'amp-custom': _ReactInjection.DOMProperty.MUST_USE_PROPERTY,
      'custom-element': _ReactInjection.DOMProperty.MUST_USE_PROPERTY
    },
    isCustomAttribute: function isCustomAttribute(attributeName) {
      return attributeName.startsWith('amp');
    }
  }
};
//# sourceMappingURL=defaults.js.map