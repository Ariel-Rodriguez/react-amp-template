const fs = require('fs')
const { resolve } = require('path')
const app = require('../dist/App').default
const json = require('./data.json')

const html = app({
  title: 'test',
  date: Date().substring(0, 15),
  json,
})

const dest = resolve('./public/index.html')

fs.writeFile(dest, html, err => {
  if (err) {
    throw Error(err)
  }
  console.log(`\n ***  AMP generated in ${dest}\n`)
})
