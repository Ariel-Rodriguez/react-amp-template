import { h } from 'preact'
import { AMP_CDN, AMP_SCRIPT_VERSION } from './constants'

export const TYPE_TAG_COMMON = 'tag-common'
export const TYPE_TAG_CUSTOM_SCRIPT = 'custom-element'
export const TYPE_TAG_IGNORE = ['meta', 'link', 'style']


export class Attribute {
  static json({ content, ...others }) {
    return {
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: content },
      ...others,
    }
  }

  static script({ tag, version, ...others }) {
    const type = (/mustache/.test(tag)) ? 'custom-template' : 'custom-element'
    return {
      async: '',
      [type]: tag,
      src: `${AMP_CDN}/${tag}-${version || AMP_SCRIPT_VERSION}.js`,
      ...others,
    }
  }
}


export default class Tag {
  static createElement(tag, attrs, content) {
    const tagType = Tag.getType(tag)
    const params = { tag, attrs, content }

    if (tagType === TYPE_TAG_CUSTOM_SCRIPT) {
      params.tag = 'script'
      params.attrs = (tag === 'json')
        ? Attribute.json({ content, ...attrs })
        : Attribute.script({ tag, ...attrs })
    }

    return {
      element: h(params.tag, params.attrs, params.content),
      type: tagType,
    }
  }

  static getType(tag) {
    return TYPE_TAG_IGNORE.includes(tag)
      ? TYPE_TAG_COMMON : TYPE_TAG_CUSTOM_SCRIPT
  }

  static isElementCustomScript(element) {
    return element.attributes[TYPE_TAG_CUSTOM_SCRIPT]
  }
}
