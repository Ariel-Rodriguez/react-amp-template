import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { DOMProperty } from 'react-dom/lib/ReactInjection';
import { StyleSheetServer } from 'aphrodite/no-important';
import customScripts from './customScripts';
import customMetas from './customMetas';
import ampValidator from '../utils/ampvalidator';
import Template from '../template';
import DEFAULTS from './defaults';
const debug = require('debug')('rampt:core');

/**
 * A class that manages ReactDOMServer & ModularCSS to
 * transpile ReactElements into a single valid AMP HTML document.
 * @param {Object} options - its defaults is a set of DOMProperty needed to
 * prevent React in ignore AMP's attrs and custom-elements.
 * @export
 * @constructor
 */
class Core {
  constructor(options) {
    this.settings = Object.assign({}, DEFAULTS, options);
    debug('Injecting AMP DOMProperties.');
    DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
    this.render = ::this.render;
    this.renderToFile = ::this.renderToFile;
    this.getValidator = ::this.getValidator;
  }

  /**
   * Aphrodite's css server-side rendering
   * 'https://github.com/Khan/aphrodite'
   * @param {ReactElement} component
   * @returns {Object} - { css, html }
   */
  aphrodite(component) {
    debug('Running aphrodite.');
    return StyleSheetServer.renderStatic(() =>
      ReactDOMServer.renderToStaticMarkup(component)
    );
  }

  /**
   * Creates a Promise and fulfills it with the given component rendered into a
   * a valid AMP HTML document reduced to a single string.
   * The component is allowed to contain childrens with custom AMP elements.
   * @param {ReactElement} component - The component root to render into body.
   * @param {Object} config - required and contains few optional
   * parameters for AMP template.
   * @returns {Promise[string]} - String that contains the static markup
   */
  render(component, config) {
    const template = { ...DEFAULTS.template, ...config };
    debug('Template settings:', template);
    return new Promise((fulfill, reject) => {
      try {
        const { html, css } = this.aphrodite(component);
        debug('Executing reactDOMServer.');
        debug('Metas:', customMetas.getElements());
        debug('Scripts:', customScripts.getElements());

        const document = this.settings.doctype +
          ReactDOMServer.renderToStaticMarkup(
            <Template
              html={template.html}
              head={{
                ...template.head,
                customStyles: css.content,
                customScripts: customScripts.getElements(),
                customMetas: customMetas.getElements(),
              }}
              body={html}
            />
          );
        if (template.ampValidationEnabled) {
          debug('AMP validation is enabled.');
          return this.validateMarkup(document).then(fulfill).catch(reject);
        }
        return fulfill(document);
      } catch (error) {
        return reject(error);
      }
    });
  }

  renderToFile(file, ...toRender) {
    return this.render(...toRender)
    .then((staticMarkup) => {
      debug('Rendering to file --> ', file);
      try {
        fs.writeFileSync(file, staticMarkup);
        return staticMarkup;
      } catch (err) {
        throw new Error(err);
      }
    });
  }

  getValidator() {
    debug('Waiting for validator.');
    return ampValidator.getInstance()
      .then((instance) => (this.validator = instance))
      .then(() => (debug('Validator has arrived :).')));
  }

  validateMarkup(markup) {
    debug('validating markup.');
    return this.getValidator()
      .then(() => {
        this.validator.validateMarkup(markup);
        return markup;
      });
  }
}

export default Core;
