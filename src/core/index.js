import fs from 'fs';
import React from 'react';
import { StyleSheetServer } from 'aphrodite/no-important';
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
      'custom-element': DOMProperty.MUST_USE_PROPERTY,
    },
    isCustomAttribute: (attributeName) => attributeName.startsWith('amp'),
  },
};

class Core {
  constructor(options) {
    this.settings = {
      ...DEFAULTS,
      options,
    };
    debug('Injecting AMP DOMProperties.');
    DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
    this.render = ::this.render;
    this.renderToFile = ::this.renderToFile;
  }

  aphrodite(component) {
    return StyleSheetServer.renderStatic(() =>
      ReactDOMServer.renderToStaticMarkup(component)
    );
  }

  render(component, { head, html }) {
    return new Promise((fulfill, reject) => {
      try {
        try {
          const { css } = this.aphrodite(component);
          const document = ReactDOMServer.renderToStaticMarkup(
            <Template
              head={{ ...head, customStyles: css.content }}
              html={html}
            >
              {component}
            </Template>
          );
          debug('CSSS!!', css.content);
          return fulfill(this.settings.doctype + document);
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

  renderToFile(file, ...toRender) {
    return this.render(...toRender)
    .then((staticMarkup) => {
      try {
        fs.writeFileSync(file, staticMarkup);
        return staticMarkup;
      } catch (err) {
        throw new Error(err);
      }
    });
  }
}

export default Core;
