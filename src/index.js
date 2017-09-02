import Template from './Template'
import StyleManager from './StyleManager'
import preactToString from 'preact-render-to-string'

const renderToString = (component, settings) =>
  new Template({
    title: 'Awesome AMP Preact Template!',
    ...settings
  }).renderToString(component)


export { StyleManager, renderToString }
export default Template
