import path from 'path';
import React from 'react';
const renderToStaticMarkup = require(path.resolve(__dirname, '../lib')).renderToStaticMarkup;
const debug = require('debug')('example');

const App = () => (<div>Hello World</div>);

const markup = renderToStaticMarkup(<App />, {
  head: {
    title: 'Hello World React-AMP-Template.',
    canonical: 'http://example.com/amp/hello-world.html',
  },
}).then((raw) => {
  debug('Template output:', raw);
}).catch((err) => {
  debug('Error:'+err);
});

