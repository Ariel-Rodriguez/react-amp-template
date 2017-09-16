import { h } from 'preact'
import preactToString from 'preact-render-to-string'

export default class StyledComponents {
  static render(element, opts) {
    // eslint-disable-next-line global-require
    const { ServerStyleSheet, StyleSheetManager } = require('styled-components')

    const sheet = new ServerStyleSheet()
    const html = preactToString(
      <StyleSheetManager sheet={sheet.instance}>
        {element}
      </StyleSheetManager>, null, opts,
    )
    const styles = sheet.getStyleElement()[0]
    const css = (styles)
      // eslint-disable-next-line no-underscore-dangle
      ? styles.attributes.dangerouslySetInnerHTML.__html : ''

    return { html, css }
  }
}
