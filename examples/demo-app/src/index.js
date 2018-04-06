import fs from 'fs'
import { resolve } from 'path'
import app from './App'

const dest = resolve('index.html')


fs.writeFile(dest, app, err => {
  if (err) {
    throw Error(err)
  }
  console.log(`\n ***  AMP generated in ${dest}\n`)
})
