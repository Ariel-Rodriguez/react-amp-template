import Core from './core';
import customScripts from './core/customScripts';
import validator from './utils/ampvalidator';

const core = new Core();

export const renderToStaticMarkup = core.render;
export const renderToFile = core.renderToFile;
export const scripts = customScripts;
export const ampValidator = validator.getInstance();
