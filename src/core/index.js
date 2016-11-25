import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { DOMProperty } from 'react-dom/lib/ReactInjection';
import Template from '../template';

const debug = require('debug')('core');

const DEFAULTS = {
  doctype: '<!DOCTYPE html>',
  DOMPropertyConfig: {
    Properties: {
      amp: DOMProperty.MUST_USE_PROPERTY,
      'amp-boilerplate': DOMProperty.MUST_USE_PROPERTY,
      'amp-custom': DOMProperty.MUST_USE_PROPERTY,
    },
    isCustomAttribute: (attributeName) => attributeName.startsWith('amp'),
  },
};

class Core {
  constructor(options) {
    this.settings = Object.assign({}, options, DEFAULTS);
    debug('Injecting AMP DOMProperties.');
    DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
  }

  render(component, props) {
    return new Promise((fulfill, reject) => {
      try {
        let staticMarkup = this.settings.doctype;
        try {
          staticMarkup += ReactDOMServer.renderToStaticMarkup(
            <Template {...props}>
              {component}
            </Template>
          );
          return fulfill(staticMarkup);
        } catch (error) {
          return reject(error);
        }
      } catch (error) {
        return reject(error);
      } finally {
        debug('render finish.');
      }
    });
  }
}

export default Core;
