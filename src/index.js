import server from './server';
import Core from './core';

const core = new Core({});

export const renderToStaticMarkup = (component, props) => {
  return core.render(component, props);
};

export default {
  server,
  core,
};
