import test from 'ava'
import React from 'react'
import TestRenderer from 'react-test-renderer'
import Components from '../../src/Components'

test('Script component', async t => {
  const Script = TestRenderer.create(React.createElement(Components.Script, { _name: 'amp-test' }))
  t.is(Script.root.props._name, 'amp-test')
  t.snapshot(Script.toJSON())
})

test('Custom script ldjson with children', async t => {
  const Div = React.createElement('div', { id: 'child' })
  const Script = TestRenderer.create(React.createElement(Components.Script, { type: 'application/ld+json' }, Div))
  t.is(Script.root.props.type, 'application/ld+json', 'should identify ld+json type to append in head')
  // should return the child element to append in body
  t.snapshot(Script.toJSON())
})

test('Renders amp-live-list element', async t => {
  const LiveList = TestRenderer.create(React.createElement(Components.LiveList, {
    layout: 'container',
    'data-poll-interval': '15000',
    'data-max-items-per-page': '5',
  }))
  t.snapshot(LiveList.toJSON())
})

test('Renders amp-live-list with children', async t => {
  const Div = React.createElement('div', { id: 'child' })
  const LiveList = TestRenderer.create(React.createElement(Components.LiveList, null, Div))
  t.is(LiveList.root.findByType('div').props.id, 'child', 'should render a child with respective props.')
  t.snapshot(LiveList.toJSON())
})

test('Custom Tag with children', async t => {
  const Div = React.createElement('div', { id: 'child' })
  const Script = TestRenderer.create(React.createElement(Components.Script, { type: 'application/ld+json' }, Div))
  t.is(Script.root.props.type, 'application/ld+json', 'should identify ld+json type to append in head')
  // should return the child element to append in body
  t.snapshot(Script.toJSON())
})

test('Meta component', async t => {
  const Child = React.createElement('div', { id: 'child' })
  const testRenderer = TestRenderer.create(React.createElement(Components.Meta, { content: 'test' }, Child))
  t.is(testRenderer.toJSON(), null, 'Meta tag should return null.')
})

test('Link component', async t => {
  const Child = React.createElement('div', { id: 'child' })
  const testRenderer = TestRenderer.create(React.createElement(Components.Link, { content: 'test' }, Child))
  t.is(testRenderer.toJSON(), null, 'Link tag should return null.')
})

test('Title component', async t => {
  const Child = 'A title'
  const testRenderer = TestRenderer.create(React.createElement(Components.Title, null, Child))
  t.is(testRenderer.toJSON(), null, 'Title tag should return null.')
})
