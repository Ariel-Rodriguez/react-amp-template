import preactToString from 'preact-render-to-string'

export default class NoStyle {
  static render(element, opts) {
    return {
      html: preactToString(element, null, opts),
      css: '',
    }
  }
}
