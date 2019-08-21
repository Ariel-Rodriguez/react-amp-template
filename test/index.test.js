import React from 'react'
import test from 'ava'
import { renderToString, AMP } from '../src'
import styled from 'styled-components'

test('it renders simple node element', async t => {
  const body = React.createElement('body', {})
  const output = renderToString(body)
  t.regex(output, /<body><\/body>/, 'Renders HTML template with body element.')
})

const renderAllAMPComponents = key => {
  const Title = React.createElement(AMP.Title, { key: `title-${key}`}, 'title')
  const Link = React.createElement(AMP.Link, { src: 'https://link', key: `link-${key}` }, 'link')
  const body = React.createElement('body', {}, [Title, Link])
  return renderToString(body)
}

test('it renders all AMP node element', t => {
  const render1 = renderAllAMPComponents()
  const render2 = renderAllAMPComponents()
  t.true(render1 === render2, 'Each render should not mix the state between each other.')
  t.snapshot(render1)
})


test('RAMPT render with styles', async t => {
  const styles = "background: url('https://www.somedomain.com');"
  const styledBody = styled.body`${styles}`
  const body = React.createElement(styledBody, {})
  const output = renderToString(body)

  const unScapedStyles = styles.replace(/\(/g, '\\(').replace(/\)/g, '\\)')

  t.regex(output, new RegExp(unScapedStyles), 'Renders HTML template with body element and styles.')
})

test('RAMPT renderToString multiple calls', async t => {
  const stylesFirstRender = 'background: red;'
  const stylesLastRender = 'background: blue;'

  const styledBody = styled.body`${stylesFirstRender}`
  const body = React.createElement(styledBody, {})

  const styledBody2 = styled.body`${stylesLastRender}`
  const body2 = React.createElement(styledBody2, {})
  
  // First render with background: red
  renderToString(body)
  // 2nd render with background: blue
  const output2 = renderToString(body2)

  t.regex(output2, new RegExp(stylesLastRender), 'It should render unique styles from each render.')
  t.notRegex(output2, new RegExp(stylesFirstRender), 'It should not mix class styles from each render.')
})

