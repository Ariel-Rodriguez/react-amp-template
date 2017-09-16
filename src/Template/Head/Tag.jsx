import { h } from 'preact'
import {
  AMP_CDN,
  AMP_EXTENSION_VERSION,
} from '../../constants'


export class Attribute {
  static json({ prefix = '', content, ...others }) {
    const html = (typeof content === 'string') ? content : JSON.stringify(content)
    return {
      type: `application/${prefix}json`,
      dangerouslySetInnerHTML: { __html: html },
      ...others,
    }
  }

  static ldjson(props) {
    return Attribute.json({ prefix: 'ld+', ...props })
  }

  static ampScript({ tag, version, ampCDN, ...others }) {
    const extensionType = (/mustache/.test(tag)) ? 'custom-template' : 'custom-element'
    const ver = version || AMP_EXTENSION_VERSION[tag] || AMP_EXTENSION_VERSION.default
    return {
      async: '',
      [extensionType]: tag,
      src: `${ampCDN || AMP_CDN}/${tag}-${ver}.js`,
      ...others,
    }
  }
}


export const createTag = (tag, { ampCDN, ...attrs }, content) => {
  const params = { tag, attrs, content }
  const isExtension = /^amp-/.test(tag)

  if (isExtension) {
    params.tag = 'script'
    params.attrs = Attribute.ampScript({ tag, ampCDN, ...attrs })
  } else if (Attribute[tag]) {
    params.tag = 'script'
    params.attrs = Attribute[tag]({ content, ...attrs })
  }

  return {
    isExtension,
    element: h(params.tag, params.attrs, params.content),
  }
}
