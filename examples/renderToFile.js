import path from 'path';
import React, { PropTypes } from 'react';
import { templateProps } from './config';
import { renderToFile } from '../lib';
const debug = require('debug')('example');

const App = ({ message }) => (<div>{message}</div>);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

renderToFile(
  path.resolve(__dirname, './example'),
  <App message="Hello World" />,
  templateProps
).catch(debug);
