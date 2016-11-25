import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { renderToStaticMarkup } from '../../lib';

export const MOCK_DATA = {
  message: 'mock',
  template: {
    head: {
      title: 'mock',
      canonical: 'http://canonical',
    },
    html: {
      lang: 'mock',
    },
  },
};

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
});

const App = ({ message }) => (
  <div className={css(styles.red)}>
    {message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default {
  render: () => renderToStaticMarkup(
    <App message={MOCK_DATA.message} />,
    MOCK_DATA.template
  ),
};
