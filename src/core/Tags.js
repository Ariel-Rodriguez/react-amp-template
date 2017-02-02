import React from 'react';
import innerHTML from '../utils/innerHTML';
import Script from '../components/Script';
import DEFAULTS from './defaults';
const debug = require('debug')('rampt:tags');

const COLLECTION_SCRIPT = new Map();
const COLLECTION_META = [];
const SETTINGS = DEFAULTS.template.tags;

class Tags {
  constructor(options) {
    debug('Clearing meta/scripts tags.');
    /**
     * scripts is a small store that holds the name and version of the
     * customScripts. Should hold unique scripts, is not allowed the same
     * script more than once.
    **/
    COLLECTION_SCRIPT.clear();
    COLLECTION_META.length = 0;
  }
}

  /**
  * Handy interface to register an amp custom-script that will be appended into
  * document's head. It wont register more than once a same script.
  * @param {String|Array(String|[Array])} - Pass the amp script name, or an array
  * that first element tells the name and the second element tells its version.
  * optionally you can pass a list that holds the previous parameters.
  * Valid params: 'amp-script' | ['amp-script', '0.1'] |
  * [ 'amp-script-x', ['amp-script-y','0.1'], 'amp-script-z', ... ]
  * If the script exists already, only the newer will precede.
  */
export const addScript = (scripts) => {
    const arrScripts = (scripts instanceof Array) ? scripts : [scripts];
    arrScripts.forEach(
      (script) => {
        const scriptWithOptions = (script instanceof Array);
        const name = (scriptWithOptions) ? script[0] : script;
        const version = (scriptWithOptions) ? script[1] : SETTINGS['amp-script-version'];

        if (
          (!COLLECTION_SCRIPT.has(name)) ||
          (COLLECTION_SCRIPT.get(name).version < version)
        ) {
          debug('Registering script ', name);
          COLLECTION_SCRIPT.set(name, { version });
        } else {
          debug('custom-sript [%s] exists already, and it is not newer.', name, version);
        }
      }
    );
  };

  /**
  * @returns {Array with ReactElemnt}
  **/
export const getScripts = () => {
  const elements = [];
  let id = 0;
  COLLECTION_SCRIPT.forEach(
    (value, name) => {
      elements.push(
        <Script name={name} version={value.version} key={id} />
      );
      id += 1;
    }
  );
  return elements;
};


  /**
  */
export const addMeta = (meta) => {
  const arrMeta = (meta instanceof Array) ? meta : [meta];
  arrMeta.forEach(
    (meta) => {
      debug('Registering meta ', JSON.stringify(meta));
      COLLECTION_META.push({
        type: meta.type,
        content: meta.content
      });
    }
  );
}

export const getMetas = () => {
  const metas = COLLECTION_META.map((meta, key) => {
    if (meta.type === 'application/ld+json') {
      return <script type="application/ld+json" {...innerHTML(meta.content)} />
    }
    return React.createElement(meta.type, { key, ...meta.content })
  });
  return metas;
}


export default Tags;
