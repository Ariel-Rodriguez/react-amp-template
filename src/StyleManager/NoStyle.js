import preactToString from 'preact-render-to-string'

export default class NoStyle {
  static render(element) {
    return {
      html: preactToString(element),
      css: '',
    }
  }
}
