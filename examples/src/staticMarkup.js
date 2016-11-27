import React from 'react';
import App from './app';
import { renderToStaticMarkup } from '../../lib';
const debug = require('debug')('example');

export default renderToStaticMarkup(<App bannerText="React-AMP-Template" />, App.config)
.then((htmlDocument) => {
  debug('renderToStaticMarkup: ', htmlDocument);
}).catch(debug);
