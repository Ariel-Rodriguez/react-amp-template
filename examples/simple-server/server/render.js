const fs = require('fs')
const { resolve } = require('path')
const app = require('../dist/App').default
const json = require('./data.json')
const mkdirp = require('mkdirp')

const dest = resolve('./public')

function onError(err) {
  throw err
}

function renderApp(cb) {
  const html = app({
    title: 'test',
    date: Date().substring(0, 15),
    json,
  })

  fs.writeFile(`${dest}/index.html`, html, err => {
    if (err) return onError(err)

    console.log(`\n ***  AMP generated in ${dest}\n`)
  })
}

function createDir(cb) {
  mkdirp(dest, err => {
    if (err) return onError(err)
    return cb()
  })
}

createDir(renderApp)
