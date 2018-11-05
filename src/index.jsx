import React from 'react'
import { renderToString as reactRenderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import pretty from 'pretty'

import store, { setOptions } from './store'
import Components from './Components'
import Head from './Components/Head'

/**
 * Transform React component into HTML AMP format.
 * @returns {String} html
 * @param {Class|Object} body React component to render
 * @param {Object} options Settings
 * @property {string} options.cdnURI absolute URL to AMP CDN
 * @property {string} options.boilerplate HTML string which contains AMP boilerplate styles
 * @property {object} options.extensions Key map of references to specify an extension version
 * @property {object} options.extensions.default default version for all amp-extensions e.g '0.1'
 * @property {object} options.extensions.extension [extension-name]
 ** specify custom version for derived extension e.g: 'amp-sticky-ad': '1.0'
 */
export const renderToString = (body, options = {}) => {
  setOptions(options)
  const sheet = new ServerStyleSheet()
  const bodyStyless = pretty(reactRenderToString(sheet.collectStyles(body)))
  const styles = sheet.getStyleElement()[0]
  // eslint-disable-next-line no-underscore-dangle
  const css = styles ? styles.props.dangerouslySetInnerHTML.__html : ''
  const head = pretty(reactRenderToString(<Head css={css} />))
    .replace('<style amp-boilerplate=""></style>', store.boilerplate)

  return `<!DOCTYPE html>\n<html ⚡>\n${head}\n${bodyStyless}\n</html>`
}

export { Components as AMP }
