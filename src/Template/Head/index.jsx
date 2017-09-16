import { h } from 'preact'
import render from 'preact-render-to-string'
import { createTag } from './Tag'
import { AMP_STYLES, AMP_CDN } from '../../constants'


export default class Head {
  constructor(props) {
    this.props = {
      createTag,
      ampCDN: AMP_CDN,
      ampStyles: AMP_STYLES.MAIN,
      ampStylesFallback: AMP_STYLES.FALLBACK,
      ...props,
    }
    this.customStyles = ''
    this.elements = []
    this.registeredExtensions = []
    this.append = this.append.bind(this)
    this.renderToString = this.renderToString.bind(this)
  }

  append(tag, props, children) {
    if (tag === 'css') {
      this.customStyles += children
      return true
    }

    const additionalProps = {
      ampCDN: this.props.ampCDN,
      ...props,
    }

    const {
      element, isExtension,
    } = this.props.createTag(tag, additionalProps, children)

    if (isExtension) {
      if (this.registeredExtensions.indexOf(tag) !== -1) {
        return false
      }
      this.registeredExtensions.push(tag)
    }

    this.elements.push(element)
    return true
  }

  renderToString(opts) {
    const { canonical, title, ampCDN, ampStyles, ampStylesFallback } = this.props

    return render(
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <script async src={`${ampCDN}.js`} />
        <style amp-boilerplate="">{ampStyles}</style>
        <noscript><style amp-boilerplate="">{ampStylesFallback}</style></noscript>
        {canonical ? <link rel="canonical" href={canonical} /> : null }
        {this.customStyles ? <style amp-custom>{this.customStyles}</style> : null }
        {this.elements}
      </head>, null, opts,
    )
  }
}
