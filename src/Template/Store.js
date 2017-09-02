import Tag, {
  TYPE_TAG_COMMON, TYPE_TAG_CUSTOM_SCRIPT,
} from './Tag'

export default class Store {
  constructor() {
    const commonElements = [TYPE_TAG_COMMON, []]
    const ampScriptElements = [TYPE_TAG_CUSTOM_SCRIPT, []]

    this.store = new Map([commonElements, ampScriptElements])
    this.getElements = this.getElements.bind(this)
    this.registerTag = this.registerTag.bind(this)
  }

  getElements() {
    return this.store.get(TYPE_TAG_COMMON)
      .concat(this.store.get(TYPE_TAG_CUSTOM_SCRIPT))
  }

  registerTag(tag, attrs, content) {
    // it won't register if script exists already
    if (this.store.has(tag)) {
      return false
    }

    const { element, type } = Tag.createElement(tag, attrs, content)

    if (type === TYPE_TAG_CUSTOM_SCRIPT) {
      // save reference for further comparitions
      this.store.set(tag, { attrs, content })
    }

    this.store.get(type).push(element)
    return true
  }
}
