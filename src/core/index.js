import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { DOMProperty } from 'react-dom/lib/ReactInjection';
import { StyleSheetServer } from 'aphrodite/no-important';
import Tags, { getMetas, getScripts } from './Tags';
import ampValidator from '../utils/ampvalidator';
import Template from '../components/Template';
import DEFAULTS from './defaults';
const debug = require('debug')('rampt:core');

let DOMInjected = false;
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
    this.settings = {
      ...DEFAULTS,
      ...options,
      template: {
        ...DEFAULTS.template,
        ...options.template,
      },
      DOMPropertyConfig: {
        ...DEFAULTS.DOMPropertyConfig,
        ...options.DOMPropertyConfig,
      }
    };
    debug('RAMPT settings: ', JSON.stringify(this.settings));
    if (!DOMInjected) {
      debug('Injecting AMP DOMProperties.');
      DOMProperty.injectDOMPropertyConfig(this.settings.DOMPropertyConfig);
      DOMInjected = true;
    } else {
      debug('Custom DOMProperties were injected already');
    }

    this.tags = new Tags(this.settings.tags);
    this.renderStatic = ::this.renderStatic;
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
  renderStatic(component) {
    const { template } = this.settings;
    return new Promise((fulfill, reject) => {
      try {
        const { html, css } = this.aphrodite(component);
        debug('Executing reactDOMServer.');

        const document = template.doctype +
          ReactDOMServer.renderToStaticMarkup(
            <Template
              html={template.html}
              head={{
                ...template.head,
                styles: css.content,
                scripts: getScripts(),
                metas: getMetas(),
              }}
              body={html}
            />
          );
        if (this.settings.ampValidations) {
          debug('AMP validation is enabled.');
          return this.validateMarkup(document)
            .then(fulfill)
            .catch((ampErrors)=> {
              reject({ validation: ampErrors, markup: document });
            });
        }
        return fulfill(document);
      } catch (error) {
        return reject({
          markup: error
        });
      }
    });
  }

  /**
  * Calls for render and writes the content into disc.
  * @param {String} output path.
  * @param {ReactElement} component - The component root to render into body.
  * @param {Object} config - required and contains few optional
  * parameters for AMP template.
  * @returns {Promise}
  */
  renderToFile(file, ...toRender) {
    return this.renderStatic(...toRender)
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
