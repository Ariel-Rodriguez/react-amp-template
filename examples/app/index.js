import { css } from 'aphrodite/no-important';
import React, { PropTypes } from 'react';
import config from './config';
import { scripts } from '../../lib';
import styles from './styles';
import Form from './form';

// Flexibility for adding custom-scripts
scripts([
  'amp-jwplayer',
  ['amp-youtube', '0.1'],
]);
// don't worries, only the most recent version will be preserved.
scripts('amp-jwplayer');

const App = ({ message }) => (
  <div className={css(styles.blue, styles.hover)}>
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
    <Form />
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

App.config = config;


export default App;
