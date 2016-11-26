import React, { PropTypes } from 'react';
import innerHTML from '../utils/innerHTML';
import Head from './Head';
const debug = require('debug')('rampt:template');


const Template = ({ html, head, body }) => {
  const htmlProps = {
    lang: 'en',
    ...html,
  };
  debug('Render template with head options: \n', {
    title: head.title,
    canonical: head.canonical,
    customScriptsCount: head.customScripts.length,
    hasCustomStyles: (head.customStyles.length) ? 'Yes' : 'No',
  });
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html amp="" {...htmlProps}>
      <Head {...head} />
      <body {...innerHTML(body)} />
    </html>
  );
};

Template.propTypes = {
  html: PropTypes.object,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
};

export default Template;
