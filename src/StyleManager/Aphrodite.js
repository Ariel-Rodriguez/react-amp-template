import preactToString from 'preact-render-to-string'

export default class Aphrodite {
  static render(element) {
    const { StyleSheetServer } = require('aphrodite')
    return StyleSheetServer.renderStatic(() => preactToString(element))
  }
}
