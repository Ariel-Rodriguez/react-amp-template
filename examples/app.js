import React, { PropTypes } from 'react';
import defaults from './config';
import { css } from 'aphrodite/no-important';
import styles from './styles';

const customScripts = [
  (id) => (<script key={id} async custom-element="amp-jwplayer" src="https://cdn.ampproject.org/v0/amp-jwplayer-0.1.js"></script>),
  (id) => (<script key={id} async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>),
];

const App = ({ message }) => (
  <div className={css(styles.red, styles.hover)}>
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

App.config = {
  ...defaults,
  head: {
    ...defaults.head,
    customScripts,
  },
};


export default App;
