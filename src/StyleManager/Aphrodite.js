import preactToString from 'preact-render-to-string'

export default class Aphrodite {
  static render(element, opts) {
    // eslint-disable-next-line global-require
    const { StyleSheetServer } = require('aphrodite')
    const { css, html } = StyleSheetServer.renderStatic(() => preactToString(element, null, opts))
    return {
      css: css.content,
      html,
    }
  }
}
