import fs from 'fs'
import path from 'path'

import aphrodite from './Aphrodite'
import noStyles from './NoStyles'
import styledComponents from './StyledComponents'


const writeToFile = (name, content) => {
  const out = path.resolve(`./examples/${name}.html`)
  fs.writeFile(out, content, err =>
    !err && console.log(`${name} --> ${out}`)
  )
}

writeToFile('styled-components', styledComponents())
writeToFile('aphrodite', aphrodite())
writeToFile('no-styles', noStyles())
