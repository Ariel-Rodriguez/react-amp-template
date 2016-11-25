import React from 'react';
import App from './app';
import { templateProps } from './config';
import { renderToStaticMarkup } from '../lib';
const debug = require('debug')('example');

renderToStaticMarkup(<App message="Hello World" />, templateProps)
.then((raw) => {
  debug('Template output:', raw);
}).catch(debug);
