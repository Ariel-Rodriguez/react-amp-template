import { StyleSheet } from 'aphrodite';

export const form = StyleSheet.create({
  form: {
  },
});

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
