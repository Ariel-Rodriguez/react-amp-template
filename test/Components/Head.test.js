import test from 'ava'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Head from '../../src/Components/Head'


test('Head empty css', t => {
  const testRenderer = TestRenderer.create(React.createElement(Head))
  const testInstance = testRenderer.root
  t.is(typeof testInstance.props.css, 'string', 'css property should be string')
  t.is(testInstance.props.css, '', 'css property defaults empty string')
})

test('Head with css', t => {
  const testRenderer = TestRenderer.create(React.createElement(Head, { css: '.class {}' }))
  const testInstance = testRenderer.root
  t.is(typeof testInstance.props.css, 'string', 'css property should be string')
  t.is(testInstance.props.css, '.class {}', 'css property should match')
})
