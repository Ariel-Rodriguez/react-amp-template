import { DOMProperty } from 'react-dom/lib/ReactInjection';
import TEMPLATE_DEFAULTS from '../template/defaults';

export default {
  doctype: '<!DOCTYPE html>',
  template: TEMPLATE_DEFAULTS,
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
