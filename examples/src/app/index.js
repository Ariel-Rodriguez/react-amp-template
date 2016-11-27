import { css } from 'aphrodite/no-important';
import React, { PropTypes } from 'react';
import config from './config';
import { scripts } from '../../../lib';
import styles from './styles';
import Heading from './components/Heading';

// Flexibility to add custom-scripts
scripts([
  'amp-jwplayer',
  ['amp-youtube', '0.1'],
]);
// don't worries, only the most recent version will be preserved.
scripts('amp-jwplayer');

const App = ({ bannerText }) => (
  <div className={css(styles.blue, styles.hover)}>
    <div className="logo">
      <a href="https://github.com/Ariel-Rodriguez/react-amp-template">{bannerText}</a>
    </div>
    <Heading />
  </div>
);

App.propTypes = {
  bannerText: PropTypes.string.isRequired,
};

App.config = config;


export default App;
