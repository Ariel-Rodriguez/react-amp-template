import StyledComponets from './StyledComponents'
import Aphrodite from './Aphrodite'
import NoStyle from './NoStyle'

const StyleStrategies = {
  aphrodite: Aphrodite,
  'styled-components': StyledComponets,
  'no-styles': NoStyle,
}

export default class StyleManager {
  constructor(strategy = 'no-styles') {
    this.renderToString = this.renderToString.bind(this)
    this.strategy = (typeof strategy === 'string')
      ? StyleStrategies[strategy] : strategy
  }

  renderToString(element) {
    return this.strategy.render(element)
  }

  static defaultStyleParser() {
    return StyleStrategies['no-styles']
  }
}
