import { h } from 'preact'
import render from 'preact-render-to-string'
import { AMP_STYLES } from './constants'

export default class Head {
  constructor(props) {
    this.props = props
  }

  set title(val) {
    this.props.title = val
  }

  set canonical(val) {
    this.props.canonical = val
  }

  renderToString() {
    const { getAdditionalHeadElements, canonical, title } = this.props
    return render(
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>{title}</title>
        <script async src="https://cdn.ampproject.org/v0.js" />
        <link rel="canonical" href={canonical} />
        <style amp-boilerplate="">{AMP_STYLES.MAIN}</style>
        <noscript><style amp-boilerplate="">{AMP_STYLES.NO_SCRIPT}</style></noscript>
        {getAdditionalHeadElements()}
      </head>
    )
  }
}
