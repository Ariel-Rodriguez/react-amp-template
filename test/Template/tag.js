import test from 'ava'
import { h } from 'preact'
import { createTag } from '../../src/Template/Head/Tag'


test('Tag', t => {

  let tag = createTag('amp-foo-bar', { id: 1 })
  let expectedAttrs = {
    async: '',
    'custom-element': 'amp-foo-bar',
    src: 'https://cdn.ampproject.org/v0/amp-foo-bar-0.1.js',
    id: 1
  }
  t.true(tag.isExtension, 'tags amp-* should be marked as extension')
  t.is(tag.element.nodeName, 'script' ,'Element is a script tag.')
  t.deepEqual(tag.element.attributes, expectedAttrs, 'element attributes should match to expected.');


  expectedAttrs = {
    'http-equiv': "origin-trial",
    'data-expires': '2020-01-01',
    'data-feature': "Web Share",
  }
  tag = createTag('link', expectedAttrs)
  t.false(tag.isExtension, 'tags link should not be marked as extension')
  t.is(tag.element.nodeName, 'link' , 'Element is a link tag.')
  t.deepEqual(tag.element.attributes, expectedAttrs, 'element attributes should match to expected.')


  let jsonContent = { mock: 1 }
  expectedAttrs = {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {__html: JSON.stringify(jsonContent)},
  }
  tag = createTag('ldjson', { content: jsonContent })
  t.false(tag.isExtension, 'tags ldjson should not be marked as extension')
  t.is(tag.element.nodeName, 'script' , 'Element is a script tag.')
  t.deepEqual(tag.element.attributes, expectedAttrs, 'element attributes should match to expected.')

  tag = createTag('ldjson', { }, JSON.stringify(jsonContent))
  t.deepEqual(tag.element.attributes, expectedAttrs, 'It accepts as third argument.')

  tag = createTag('ldjson', { }, jsonContent)
  t.deepEqual(tag.element.attributes, expectedAttrs, 'It accepts as POJO in third argument.')

  tag = createTag('ldjson', {content: jsonContent}, { mock: 2 })
  t.deepEqual(tag.element.attributes, expectedAttrs, 'Attrs has precedence over third parameter.');

  tag = createTag('ldjson', {id: 1}, { mock: 2 })
  t.deepEqual(tag.element.attributes, {
      type: 'application/ld+json',
      dangerouslySetInnerHTML: {__html: JSON.stringify({ mock: 2 })},
      id: 1
    }, 'Should add custom attributes.')
})
