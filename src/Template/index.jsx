import { h } from 'preact'
import preactToString from 'preact-render-to-string'
import Head from './Head'
import Provider from './Provider'
import Store from './Store'
import StyleManager from '../StyleManager'

class Template {

  constructor({ canonical = '', title = '', styleManager }) {
    this.store = new Store()
    this.styleManager = new StyleManager(styleManager)
    this.head = new Head({
      getAdditionalHeadElements: this.store.getElements,
      canonical,
      title
    })
    this.context = {
      template: {
        register: this.register.bind(this),
        set: this.set.bind(this)
      }
    }
    this.parseElements = this.parseElements.bind(this)
    this.renderToString = this.renderToString.bind(this)
  }

  set(target, value) {
    this.head[target] = value
  }

  register(tag, props, children) {
    this.store.registerTag(tag, props, children)
  }

  parseElements(elements) {
    const parse = this.styleManager.renderToString

    const {
      html,
      css = ''
    } = parse(<Provider {...this.context}>{elements}</Provider>)

    if (css.length) {
      this.store.registerTag('style', {
        'amp-custom': '',
        dangerouslySetInnerHTML: {__html: css} })
    }

    return html
  }

  renderToString(body) {
    const bodyHTML = this.parseElements(body)
    const headHTML = this.head.renderToString()

    return `<!DOCTYPE html><html ⚡>${headHTML + bodyHTML}</html>`
  }
}

export default Template
