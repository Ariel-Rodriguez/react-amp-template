import React, { PropTypes } from 'react';
import Head from './Head';
const debug = require('debug')('template');


const Template = ({ html, head, children }) => {
  const htmlProps = {
    lang: 'en',
    ...html,
  };
  debug('Render template with head options: \n', head);
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html amp="" {...htmlProps}>
      <Head {...head} />
      <body>{children}</body>
    </html>
  );
};

Template.propTypes = {
  html: PropTypes.object,
  head: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default Template;
