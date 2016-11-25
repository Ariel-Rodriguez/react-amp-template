import React, { PropTypes } from 'react';
import { templateProps } from './config';
import { renderToStaticMarkup } from '../lib';
const debug = require('debug')('example');

const App = ({ message }) => (<div>{message}</div>);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

renderToStaticMarkup(<App message="Hello World" />, templateProps)
.then((raw) => {
  debug('Template output:', raw);
}).catch(debug);
