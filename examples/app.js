import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import styles from './styles';

const App = ({ message }) => (
  <div className={css(styles.red, styles.hover)}>
    {message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
