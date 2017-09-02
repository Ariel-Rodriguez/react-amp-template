import Template, { renderToString } from '../../lib'
import StyledComponents from './StyledComponents'
import Aphrodite from './Aphrodite'
import NoStyles from './NoStyles'

console.log(new Template({
    styleManager: 'styled-components'
  }).renderToString(StyledComponents.render()))

console.log(new Template({
    styleManager: 'aphrodite'
  }).renderToString(Aphrodite.render()))

console.log(renderToString(NoStyles.render(), {
  title: 'No styles example'
}))
