import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  red: {
    backgroundColor: 'red',
  },

  blue: {
    backgroundColor: 'blue',
  },

  hover: {
    ':hover': {
      backgroundColor: 'red',
    },
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    },
  },
});
