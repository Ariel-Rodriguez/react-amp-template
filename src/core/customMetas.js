import React from 'react';
const debug = require('debug')('rampt:custommeta');


// registeredScripts is a small store that holds ReactElements
const registeredMetas = [];

const createMeta = (meta) => {
  registeredMetas.push(
    React.createElement(meta, { key: registeredMetas.length })
  );
};

/**
* Handy interface react components into head.
* @param {String|Array(String|[Array])} - Pass a React Component, or an array
* of React Components.
*/
const CustomMeta = (component) => {
  if (component instanceof Array) {
    debug('Registering bunch of metas.');
    component.forEach((el) => {
      createMeta(el);
    });
  } else {
    debug('Registering meta');
    createMeta(component);
  }
};

CustomMeta.getElements = () => registeredMetas;

CustomMeta.clear = () => (registeredMetas.splice(registeredMetas.length));

export default CustomMeta;
