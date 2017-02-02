import React from 'react';
import App from './app';
import RAMPT from '../../lib';
const debug = require('debug')('example');

const rampt = new RAMPT({
  ampValidations: true // default
});

rampt
  .renderStatic(<App bannerText="React-AMP-Template" />)
  .then((htmlDocument) => {
    debug('renderToStaticMarkup: ', htmlDocument);
  })
  .catch(debug);
