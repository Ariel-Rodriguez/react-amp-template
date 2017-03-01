import React from 'react'
import { expect } from 'chai'
import fs from 'fs'
import sinon from 'sinon'
import RAMPT from '../../../src'
import App, { MOCK_DATA } from '../../mocks/App'

let errors = 'none'
let renderOutput
let rampt

describe('Core', sinon.test(() => {
  describe('Render Static Markup - defaults', () => {
    before('setup', (done) => {
      rampt = new RAMPT(MOCK_DATA.config)
      rampt
        .renderStatic(<App stylesEnabled={true} body={MOCK_DATA.content.body} />)
        .then((html) => {
          renderOutput = html
          fs.writeFileSync('./test-debug.html', html)
          done()
        })
        .catch((e) => {
          errors = e
          done()
        })
    })
    it('Should not throw errors.', () => {
      expect(errors).to.equal('none')
    })
    it(`HTML rendered should contain mock-title string.`, () => {
      expect(renderOutput).to.contain('mock-title')
    })
    it('HTML rendered should contain lang="en" string.', () => {
      expect(renderOutput).to.contain('lang="en"')
    })
    it('Should add meta twitter.', () => {
      expect(renderOutput).to.contain('<meta name="twitter:creator" content="@react-amp-template" />')
    })
    it('Should add meta ldJSON.', () => {
      expect(renderOutput).to.contain('dateModified': '1907-05-05T12:02:41Z')
    })
    it('Should have CoolFont,sans-serif fonts.', () => {
      expect(renderOutput).to.contain('font-family:"CoolFont",sans-serif;')
    })
  })
}))
