import { h } from 'preact'
import Head from './Head'
import Provider from './Provider'
import StyleManager from '../StyleManager'


class Template {
  constructor({ body, styleManager, ...props }) {
    this.props = {
      pretty: true,
      styleManager,
      ...props,
    }
    this.appendToHead = this.appendToHead.bind(this)
    this.renderToString = this.renderToString.bind(this)
    this.body = this.createBody(body)
    this.head = new Head(props)
  }

  appendToHead(tag, props, children) {
    this.head.append(tag, props, children)
  }

  createBody(children) {
    const context = {
      head: {
        append: this.appendToHead,
      },
    }

    return (
      <Provider {...context}>
        {children}
      </Provider>
    )
  }

  renderToString() {
    const { pretty, styleManager } = this.props

    const sm = new StyleManager(this.body, styleManager)
    const { css, html } = sm.renderToString({ pretty })

    this.appendToHead('css', null, css)
    const head = this.head.renderToString({ pretty })

    return `<!DOCTYPE html>\n<html ⚡>\n${head}\n${html}\n</html>`
  }
}

export default Template
