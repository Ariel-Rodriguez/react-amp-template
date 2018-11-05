import React from 'react'
import test from 'ava'
import { renderToString, AMP } from '../src'
import styled from 'styled-components'

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
  t.regex(output, /<body class=/, 'Renders HTML template with body element and class styles.')
})
