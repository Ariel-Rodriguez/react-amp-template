'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactInjection = require('react-dom/lib/ReactInjection');

var _defaults = require('../template/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  doctype: '<!DOCTYPE html>',
  template: _defaults2.default,
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