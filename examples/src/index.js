import fs from 'fs'
import path from 'path'

import Aphrodite from './Aphrodite'
import NoStyles from './NoStyles'
import StyledComponents from './StyledComponents'


const writeToFile = (name, content) => {
  const out = path.resolve(`./examples/${name}.html`)
  fs.writeFile(out, content, err =>
    !err && console.log(`${name} --> ${out}`)
  )
}

writeToFile('styled-components', StyledComponents.render())
writeToFile('aphrodite', Aphrodite.render())
writeToFile('no-styles', NoStyles.render())
