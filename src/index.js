import fs from 'fs';
import { isValidElement } from 'react';
import server from './server';
import Core from './core';

const debug = require('debug')('render');
const core = new Core({});

export const renderToStaticMarkup = (component, props) => (
  core.render(component, props)
);

export const renderToFile = (file, component, props, beforeWrite) => {
  let cb = beforeWrite;
  if (!isValidElement(component)) {
    throw new Error('Component given is not valid to render.');
  }
  if (props) {
    if (typeof pros === 'function') {
      cb = props;
    } else if (typeof props !== 'object') {
      throw new Error('Props must be a POJO!');
    }
  } else {
    cb = (template) => template;
  }
  return core.render(component, props)
  .then(cb)
  .then((template) => {
    try {
      debug('toFile: [%s]', file);
      fs.writeFileSync(file, template);
    } catch (err) {
      throw new Error(err);
    }
  });
};

export default {
  server,
  core,
};
