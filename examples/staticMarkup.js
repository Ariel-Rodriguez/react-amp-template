import React from 'react';
import App from './app';
import { renderToStaticMarkup } from '../lib';
const debug = require('debug')('example');

renderToStaticMarkup(<App message="Hello World" />, App.config)
.then((raw) => {
  debug('Template output:', raw);
}).catch(debug);
