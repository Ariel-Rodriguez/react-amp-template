import server from './server';
import Core from './core';
const core = new Core();

export const renderToStaticMarkup = core.render;
export const renderToFile = core.renderToFile;

export default {
  server,
  core,
};
