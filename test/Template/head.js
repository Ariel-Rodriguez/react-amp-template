import test from 'ava'
import { h } from 'preact'
import Head from '../../src/Template/Head'

const createTag = () => ({ isExtension: true, })

test('Head', t => {
  let isExtension = true
  const head = new Head({
    createTag: (tag, attrs) => ({ isExtension, element: h(tag, attrs) }),
    ampCDN: 'https://test/v0',
    ampStyles: 'mock_a',
    ampStylesFallback: 'mock_b',
  })


  t.true(head.append('test'), 'Head should append an extension if not exist already.')
  t.false(head.append('test'), 'Head should not append an extension if exist already.')

  isExtension = false
  t.true(head.append('test'), 'Head should append if it is not an extension.')
  t.true(head.append('test'), 'Head should append if it is not an extension.')

  t.true(head.append('css', null, '.class{}'), 'Head should append css content.')

  const output = head.renderToString()
  t.regex(output, /https\:\/\/test\/v0.js/, 'Head renders expected CDN mock.')
  t.regex(output, /<style amp-custom>\.class\{\}<\/style>/, 'Head renders expected CSS mock.')
})
