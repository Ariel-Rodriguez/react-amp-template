import path from 'path';
import React from 'react';
const lib = require(path.resolve(__dirname, '../lib'));
const debug = require('debug')('example');
const { renderToStaticMarkup, renderToFile } = lib;

const output = path.resolve(__dirname, './simple.html');

const AMP = {
  head: {
    title: 'Hello World React-AMP-Template.',
    canonical: 'http://example.com/amp/hello-world.html',
  },
};

const App = () => (
  <div>
    <header>
      <h1>Hello World</h1>
    </header>
    <div>
      <amp-social-share
        type="linkedin"
        width="60"
        height="44"
        data-text="React AMP template!"
        data-url="https://ampbyexample.com/"
        data-attribution="AMPhtml"
      >
      </amp-social-share>
    </div>
    <p>Simple example.</p>
  </div>
);


renderToStaticMarkup(<App />, AMP.head)
  .then(debug)
  .catch(debug);

renderToFile(output, <App />, AMP.head)
  .then(() => {
    debug('Template created --> ', output);
  })
  .catch(debug);
