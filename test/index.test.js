import React from 'react'
import test from 'ava'
import { renderToString } from '../src'


test('RAMPT exports', t => {
  t.is(typeof renderToString, 'function', 'renderToString must be a function')

  const body = React.createElement('body', {})
  const output = renderToString(body)
  t.regex(output, /<body><\/body>/, 'Renders HTML template with body element.')
})
