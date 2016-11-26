import React, { PropTypes } from 'react';
import defaults from './defaults';
const debug = require('debug')('rampt:customscript');

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


const registeredScripts = new Map();

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

const CustomScripts = (scripts) => {
  const arrScripts = (scripts instanceof Array) ? scripts : [scripts];
  arrScripts.forEach(
    (script) => {
      debug('Parse new script ', script);
      const scriptWithOptions = (script instanceof Array);
      const name = (scriptWithOptions) ? script[0] : script;
      const version = (scriptWithOptions) ? script[1] : defaults.customScriptVersion;
      addScript(name, version);
    }
  );
};

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
