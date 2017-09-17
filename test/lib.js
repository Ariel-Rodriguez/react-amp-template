import { h } from 'preact'
import test from 'ava'
import render, { Template, StyleManager } from '../src'


test('Lib exports', t => {
  t.is(typeof Template.constructor, 'function', 'Template must be a class.')
  t.is(typeof StyleManager.constructor, 'function', 'StyleManager must be a class.')
  t.is(typeof render, 'function', 'default export is a function.')

  const output = render(h('div'), { title: 'mock' })
  t.regex(output, /<title>mock<\/title>/, 'Renders document.');
})
