import React from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import render from '../../lib'
import Access from './shared/Access'

const styles = StyleSheet.create({
  btn: {
    'font-size': '1em',
    margin: '1em',
    padding: '0.25em 1em',
    'border-radius': '3px',
  },
  red: {
    color: 'palevioletred',
    border: 'palevioletred',
  },
  main: {
    color: 'mediumseagreen',
    border: 'mediumseagreen',
  },
})


const StyledBody = ({ children, ...props }, { head }) =>
  <body {...props}>
    <button className={css(styles.btn, styles.main)}>Normal</button>
    <button className={css(styles.btn, styles.red)}>Themed</button>
    {children}
  </body>


const Aphrodite = () =>
  <StyledBody><Access /></StyledBody>

export default () =>
  render(<Aphrodite />, {
    title: 'Styling AMP with Aphrodite',
    canonical: 'https://canonical.com',
    styleManager: 'aphrodite',
  })
