import path from 'path';
import React from 'react';
import App from './app';
import { renderToFile } from '../lib';
const debug = require('debug')('example');

renderToFile(
  path.resolve(__dirname, './example.html'),
  <App message="Hello World" />,
  App.config
).catch(debug);
