import { DOMProperty } from 'react-dom/lib/ReactInjection';

export default {
  doctype: '<!DOCTYPE html>',
  customScriptVersion: '0.1',
  DOMPropertyConfig: {
    Properties: {
      amp: DOMProperty.MUST_USE_PROPERTY,
      'amp-boilerplate': DOMProperty.MUST_USE_PROPERTY,
      'amp-custom': DOMProperty.MUST_USE_PROPERTY,
      'custom-element': DOMProperty.MUST_USE_PROPERTY,
    },
    isCustomAttribute: (attributeName) => attributeName.startsWith('amp'),
  },
};
