import Template from './Template'
import StyleManager from './StyleManager'

const renderToString = (body, settings) =>
  new Template({
    body,
    title: 'Awesome AMP Preact Template!',
    ...settings,
  }).renderToString()


export { StyleManager, Template }
export default renderToString
