import fs from 'fs'
import path from 'path'

import Aphrodite from './Aphrodite'
import NoStyles from './NoStyles'
import StyledComponents from './StyledComponents'


fs.writeFileSync(
  path.resolve('./examples/styled-components.html'),
  StyledComponents.render())

fs.writeFileSync(
  path.resolve('./examples/aphrodite.html'),
  Aphrodite.render())

fs.writeFileSync(
  path.resolve('./examples/no-styles.html'),
  NoStyles.render())
