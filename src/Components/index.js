import React from 'react'
import Link from './Link'
import Meta from './Meta'
import Script from './Script'
import Tag from './Tag'
import Title from './Title'

/**
 * Transforms input to hyphened lowercase for each upper case coincidence.
 * @param {String} str React custom-element name e.g StickyAd
 * @returns {String} the input as kebabCase with leaded by a hyphen e.g. sticky-ad
 */
const toKebabCase = str =>
  str.replace(/([A-Z])/g, '-$1').slice(1).toLowerCase()

function derivatedScriptComponent(name) {
  if (!/^[A-Z]/.test(name)) {
    throw Error(`Failed to fallback component name ${name}. Component to import must begin with uppercase.`)
  }
  return function scriptComponent(props) {
    return React.createElement(Script, {
      _name: `amp-${toKebabCase(name)}`,
      ...props,
    })
  }
}

/**
 * @description Exposes a factory to generate AMP components in runtime.
 * @returns {Object} React component
 */
export default new Proxy({
  Link, Meta, Script, Tag, Title, toKebabCase,
}, {
  get(thisModule, componentName) {
    return thisModule[componentName] || derivatedScriptComponent(componentName)
  },
})
