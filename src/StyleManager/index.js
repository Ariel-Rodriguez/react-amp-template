import StyledComponets from './StyledComponents'
import Aphrodite from './Aphrodite'
import NoStyle from './NoStyle'

const StyleStrategies = {
  aphrodite: Aphrodite,
  'styled-components': StyledComponets,
  'no-styles': NoStyle,
}

export default class StyleManager {
  constructor(element, strategy = 'no-styles') {
    this.element = element
    this.strategy = (typeof strategy === 'string')
      ? StyleStrategies[strategy] : strategy
    this.renderToString = this.renderToString.bind(this)
  }

  renderToString(options) {
    return this.strategy.render(this.element, options)
  }

  static defaultStyleParser() {
    return StyleStrategies['no-styles']
  }
}
