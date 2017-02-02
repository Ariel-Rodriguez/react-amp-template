import { css } from 'aphrodite/no-important';
import React, { PropTypes } from 'react';
import config from './config';
import { addMeta, addScript } from '../../../lib';
import styles from './styles';
import Heading from './components/Heading';

const App = ({ bannerText }) => {
  // Flexibility to add custom-scripts
  addScript([
    'amp-jwplayer',
    ['amp-youtube', '0.1'],
  ]);
  addMeta([
    {type: 'meta', content: { 'content':'pepe', 'name': 'people' }}
  ]);

  return (
    <div className={css(styles.blue, styles.hover)}>
      <div className="logo">
        <a href="https://github.com/Ariel-Rodriguez/react-amp-template">{bannerText}</a>
      </div>
      <Heading />
    </div>
  )
};

App.propTypes = {
  bannerText: PropTypes.string.isRequired,
};

export default App;
