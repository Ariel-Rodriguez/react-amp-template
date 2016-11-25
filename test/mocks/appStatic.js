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

MOCK_DATA.template.head.ampScripts = [
  () => (<script async custom-element="amp-jwplayer" src="https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js"></script>),
  () => (<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>),
];

const styles = StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },
});

const App = ({ message }) => (
  <div className={css(styles.red)}>
    <div>
      {message}
    </div>
    <amp-jwplayer
      data-playlist-id="482jsTAr"
      data-player-id="uoIbMPm3"
      layout="responsive"
      width="16"
      height="9"
    ></amp-jwplayer>
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
