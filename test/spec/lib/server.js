import { expect } from 'chai'
import sinon from 'sinon'
import Server from '../../../lib/server'
import http from 'http'

const sx = sinon.sandbox.create()
let server
let listen

describe('Server', sinon.test(() => {
  before('setup', () => {
    listen = sx.spy()
    sx.stub(http, 'createServer', () => ({ listen }))
    server = new Server({ port: 9999 })
  })

  after(() => {
    sx.restore()
  })

  it('server instance of ../lib/Server', () => {
    expect(server).to.be.an.instanceof(Server)
  })
  it('server has method start.', () => {
    expect(server).respondTo('start')
  })
}))
