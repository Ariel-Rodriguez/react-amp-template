'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.form = undefined;

var _aphrodite = require('aphrodite');

var form = exports.form = _aphrodite.StyleSheet.create({
  form: {}
});

exports.default = _aphrodite.StyleSheet.create({
  red: {
    backgroundColor: 'red'
  },

  blue: {
    backgroundColor: 'blue'
  },

  hover: {
    ':hover': {
      backgroundColor: 'red'
    }
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red'
    }
  }
});
//# sourceMappingURL=styles.js.map