import { h } from 'preact'
import preactToString from 'preact-render-to-string'

export default class StyledComponents {
  static render(element) {
    const { ServerStyleSheet, StyleSheetManager } = require('styled-components')

    const sheet = new ServerStyleSheet()
    const html = preactToString(
      <StyleSheetManager sheet={sheet.instance}>
        {element}
      </StyleSheetManager>
    )
    const styles = sheet.getStyleElement()[0]
    const css = (styles)
      ? styles.attributes.dangerouslySetInnerHTML.__html : ''

    return { html, css }
  }
}
