import React from 'react'
import test from 'ava'
import { renderToString } from '../src'
import styled from 'styled-components'

test('RAMPT render', async t => {
  const body = React.createElement('body', {})
  const output = renderToString(body)
  t.regex(output, /<body><\/body>/, 'Renders HTML template with body element.')
})

test('RAMPT render with styles', async t => {
  const styledBody = styled.body`background: red;`
  const body = React.createElement(styledBody, {})
  const output = renderToString(body)
  t.regex(output, /<body class=/, 'Renders HTML template with body element and class styles.')
})
