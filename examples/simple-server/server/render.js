const fs = require('fs')
const { resolve } = require('path')
const app = require('../dist/App').default

const dest = resolve('./public/index.html')


fs.writeFile(dest, app, err => {
  if (err) {
    throw Error(err)
  }
  console.log(`\n ***  AMP generated in ${dest}\n`)
})
