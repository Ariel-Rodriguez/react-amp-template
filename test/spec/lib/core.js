import React from 'react'
import { expect } from 'chai'
import fs from 'fs'
import sinon from 'sinon'
import RAMPT from '../../../lib'
import { App, MOCK_DATA } from '../../mocks/core'

let errors = 'none'
let renderOutput
let rampt

describe('Core', sinon.test(() => {
  describe('Render Static Markup - defaults', () => {
    before('setup', (done) => {
      console.log(RAMPT)
      rampt = new RAMPT(MOCK_DATA.config)
      sinon.spy(rampt, 'getValidator')
      sinon.spy(rampt, 'validateMarkup')
      rampt.renderStatic(<App />).then((html) => {
        renderOutput = html
        fs.writeFileSync('./test-debug.html', html)
        done()
      })
    })
    after(() => {
      rampt.getValidator.restore()
      rampt.validateMarkup.restore()
    })
    it('Should call getValidator once.', () => {
      expect(rampt.getValidator.calledOnce).to.equal(true)
    })
    it('Should call validateMarkup once.', () => {
      expect(rampt.getValidator.calledOnce).to.equal(true)
    })
    it('Should not throw errors.', () => {
      expect(errors).to.equal('none')
    })
    it(`HTML rendered should contain '${MOCK_DATA.content.data}' string.`, () => {
      expect(renderOutput).to.contain(MOCK_DATA.content.data)
    })
    it('HTML rendered should contain lang="en" string.', () => {
      expect(renderOutput).to.contain(MOCK_DATA.content.data)
    })
  })
  describe('Render Static Markup', () => {
    it('Should add meta twitter.', () => {
      expect(renderOutput).to.contain(MOCK_DATA.expect.metaTwitter)
    })
    it('Should add meta ldJSON.', () => {
      expect(renderOutput).to.contain(MOCK_DATA.expect.metaJSON)
    })
  })
}))
