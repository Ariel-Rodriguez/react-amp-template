import path from 'path';
import React from 'react';
import App from './app';
import { renderToFile } from '../../lib';
const debug = require('debug')('example');
const output = path.resolve(__dirname, './example.html');

const rampt = new RAMPT({ ampValidations: true });

rampt
  .renderToFile(<App bannerText="React-AMP-Template" />)
  .catch(debug);

