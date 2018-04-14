import test from 'ava'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Script from '../../src/Components/Script'


test('Script', t => {
  const testRenderer = TestRenderer.create(React.createElement(Script, { _name: 'amp-test' }))
  const testInstance = testRenderer.root
  t.is(testInstance.props._name, 'amp-test')
})

