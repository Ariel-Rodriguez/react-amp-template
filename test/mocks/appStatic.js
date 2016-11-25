import React from 'react';
import { renderToStaticMarkup } from '../../lib';
import App from '../../examples/app';

export default {
  render: () => renderToStaticMarkup(
    <App message="mock" />, App.config
  ),
};
