import { DOMProperty } from 'react-dom/lib/ReactInjection'

export default {
  ampValidations: true,
  template: {
    prettyPrint: true,
    doctype: '<!DOCTYPE html>',
    tags: {
      'amp-script-version': '0.1',
    },
    html: {
      lang: 'en',
    },
  },
  DOMPropertyConfig: {
    Properties: {
      amp: DOMProperty.MUST_USE_PROPERTY,
      'amp-boilerplate': DOMProperty.MUST_USE_PROPERTY,
      'amp-custom': DOMProperty.MUST_USE_PROPERTY,
      'custom-element': DOMProperty.MUST_USE_PROPERTY,
    },
    isCustomAttribute: (attributeName) => attributeName.startsWith('amp'),
  },
}
