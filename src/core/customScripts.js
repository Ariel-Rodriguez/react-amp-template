import React, { PropTypes } from 'react';
import defaults from './defaults';
const debug = require('debug')('rampt:customscript');


/**
 * Convenience function to render amp scripts into the head of the template.
 * @returns {ReactElement}
 */
const Script = ({ name, version }) => (
  <script
    async
    custom-element={name}
    src={`https://cdn.ampproject.org/v0/${name}-${version}.js`}
  ></script>
);

Script.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

/**
 * registeredScripts is a small store that holds the name and version of the
 * customScripts. Should hold unique scripts, is not allowed the same
 * script more than once.
 */
const registeredScripts = new Map();

/**
* registers a new script into the map.
* @param {string} name
* @param {string} version
*/
const addScript = (name, version) => {
  if (
    (!registeredScripts.has(name)) ||
     (registeredScripts.get(name).version < version)
  ) {
    debug('Registering script ', name);
    registeredScripts.set(name, { version });
  } else {
    debug('custom-sript [%s] exists already, and it is not newer.', name, version);
  }
};

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
const CustomScripts = (scripts) => {
  const arrScripts = (scripts instanceof Array) ? scripts : [scripts];
  arrScripts.forEach(
    (script) => {
      debug('Parse new script ', script);
      const scriptWithOptions = (script instanceof Array);
      const name = (scriptWithOptions) ? script[0] : script;
      const version = (scriptWithOptions) ? script[1] : defaults.template.customScriptVersion;
      addScript(name, version);
    }
  );
};

/**
* @returns {Array with ReactElemnt}
**/
CustomScripts.getElements = () => {
  const elements = [];
  let id = 0;
  registeredScripts.forEach(
    (value, name) => {
      elements.push(
        <Script name={name} version={value.version} key={id} />
      );
      id += 1;
    }
  );
  debug('Retrieveing customScripts. total:', elements.length);
  return elements;
};

CustomScripts.clear = registeredScripts.clear;

export default CustomScripts;
