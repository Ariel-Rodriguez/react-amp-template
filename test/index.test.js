import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import test from 'ava'
import { renderToString, AMP } from '../src'

test('it renders simple node element', async t => {
  const body = React.createElement('body', {})
  const output = renderToString(body)
  t.regex(output, /<body><\/body>/, 'Renders HTML template with body element.')
})

const renderAllAMPComponents = () => {
  const Title = React.createElement(AMP.Title, {}, 'title')
  const Link = React.createElement(AMP.Link, { src: 'https://link' }, 'link')
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
  const styledBody = styled.body`background: red;`
  const body = React.createElement(styledBody, {})
  const output = renderToString(body)
  console.log(output)
  t.regex(output, /background: red/, 'Renders HTML template with body element and class styles.')
})

test('RAMPT supports styled components v4 global styles', async t => {
  const GlobalStyle = createGlobalStyle`
    p {
      font-size: ${({ fontSize }) => (fontSize || 1)}rem;
      font-family: monospace;
    }
  `
  const styledBody = styled.body`background: red;`
  const Body = React.createElement(styledBody, { key: 1 })
  const GlobalStyles = React.createElement(GlobalStyle, { key: 2, fontSize: 1.4 })
  const App = React.createElement(Fragment, {}, [Body, GlobalStyles])
  const output = renderToString(App)
  t.regex(output, /font-size: 1.4rem/, 'Renders HTML template with body element and class styles.')
  t.snapshot(output)
})
