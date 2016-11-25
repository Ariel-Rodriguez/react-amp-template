import path from 'path';
import React from 'react';
import App from './app';
import { templateProps } from './config';
import { renderToFile } from '../lib';
const debug = require('debug')('example');

templateProps.head.ampScripts = [
  () => (<script async custom-element="amp-jwplayer" src="https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js"></script>),
  () => (<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>),
];

renderToFile(
  path.resolve(__dirname, './example.html'),
  <App message="Hello World" />,
  templateProps
).catch(debug);
