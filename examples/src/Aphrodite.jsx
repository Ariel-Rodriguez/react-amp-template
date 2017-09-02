import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important';
import Access from './shared/Access'

const styles = StyleSheet.create({
    btn: {
      'font-size': '1em',
      margin: '1em',
      padding: '0.25em 1em',
      'border-radius': '3px'
    },
    red: {
        color: 'palevioletred',
        border: 'palevioletred'
    },
    main: {
      color: 'mediumseagreen',
      border: 'mediumseagreen'
    },
});


const StyledBody = ({ children, ...props }, { template }) => {
  template.set('canonical', 'https://non-amp-address.com')

  return (
    <body {...props}>
      <button className={css(styles.btn, styles.main)}>Normal</button>
      <button className={css(styles.btn, styles.red)}>Themed</button>
      {children}
    </body>
  )
}


export default class Aphrodite {
  static render () {
    return (<StyledBody><Access /></StyledBody>)
  }
}
