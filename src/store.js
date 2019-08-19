import React from 'react'
import * as AMP from './constants'


/**
 * Store type definition
 * @typedef {Object} state
 * @property {string} cdnURI absolute URL to AMP CDN
 * @property {string} boilerplate
 * @property {object} extensions Key map of references to specify an extension version
 * @property {Array} elements List of runtime generated elements to be appended into Head
 */
const state = {
  cdnURI: AMP.CDN,
  boilerplate: AMP.BOILERPLATE,
  extensions: AMP.EXTENSION_VERSION,
  runtimeURI: AMP.RUNTIME,
  elements: [],
}

let hashRegister = []

const createElement = (tag, attrs, key) =>
  React.createElement(tag, { ...attrs, key })

/**
 * Resolves the source URI for the extension script.
 * @returns {String} CDN URI of script extension
 * @param {String} extensionName script extension e.g "amp-fit-text"
 */
const getScriptSRC = extensionName =>
  `${state.cdnURI}/${extensionName}-${state.extensions[extensionName] || state.extensions.default}.js`

/**
 * Updates the store with the given element to be appended into Head.
 * @param {String} tag html tag e.g "script"
 * @param {Object} attrs html element attributes
 */
const registerElement = (tag, attrs) => {
  state.elements.push(createElement(tag, attrs, `${tag}-${state.elements.length}`))
}

/**
 * Same as registerElement but only updates the store if the element was not registered before.
 * It is required for managing script in head.
 * It is desired to do not load the same script twice.
 * @param {String} tag html tag e.g "script"
 * @param {Object} attrs html element attributes
 * @param {String} name custom-element name e.g "amp-fit-text"
 */
const registerUniqueElement = (tag, attrs, name) => {
  if (hashRegister.indexOf(name) === -1) {
    hashRegister.push(name)
    state.elements.push(createElement(tag, attrs, name))
  }
}

const setOptions = ({
  boilerplate, extensions, runtimeURI, cdnURI,
}) => {
  state.cdnURI = cdnURI || state.cdnURI
  state.boilerplate = boilerplate || state.boilerplate
  state.runtimeURI = runtimeURI || state.runtimeURI
  state.extensions = { ...state.extensions, ...extensions }
  state.elements.length = 0
  hashRegister = []
}

const { Provider, Consumer } = React.createContext({
  store: {
    state,
    getScriptSRC,
    registerElement,
    registerUniqueElement,
  },
})

export {
  Consumer,
  createElement,
  registerElement,
  registerUniqueElement,
  getScriptSRC,
  Provider,
  setOptions,
}
export default state
