import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { DOMProperty } from 'react-dom/lib/ReactInjection';
import { StyleSheetServer } from 'aphrodite/no-important';
import customScripts from './customScripts';
import Template from '../template';
import DEFAULTS from './defaults';
const debug = require('debug')('rampt:core');


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
    debug('Running aphrodite.');
    return StyleSheetServer.renderStatic(() =>
      ReactDOMServer.renderToStaticMarkup(component)
    );
  }

  render(component, config) {
    return new Promise((fulfill, reject) => {
      try {
        const aphrodite = this.aphrodite(component);
        debug('Executing reactDOMServer.');
        const document = ReactDOMServer.renderToStaticMarkup(
          <Template
            html={config.html}
            head={{
              ...config.head,
              customStyles: aphrodite.css.content,
              customScripts: customScripts.getElements(),
            }}
            body={aphrodite.html}
          />
        );
        return fulfill(this.settings.doctype + document);
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
}

export default Core;
