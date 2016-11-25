import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import styles from './styles';

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

export default App;
