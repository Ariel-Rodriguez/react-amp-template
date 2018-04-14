import test from 'ava'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Tag from '../../src/Components/Tag'


test('Tag', t => {
  const testRenderer = TestRenderer.create(React.createElement(Tag))
  const testInstance = testRenderer.root
  t.is(typeof testInstance.props._name, 'string', 'css property should be string')
})

