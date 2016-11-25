import React, { PropTypes } from 'react';
import Head from './Head';
const debug = require('debug')('template');


const Template = ({ head, children }) => {
  debug('Render template with head options: \n', head);
  return (
    <html amp="" lang="en">
      <Head {...head} />
      <body>{children}</body>
    </html>
  );
};

Template.propTypes = {
  head: PropTypes.object.isRequired,
  children: PropTypes.element,
};

export default Template;
