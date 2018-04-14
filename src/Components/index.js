import React from 'react'
import Link from './Link'
import Meta from './Meta'
import Script from './Script'
import Tag from './Tag'

/**
 * Transforms to toKebabCase for each upper case coincidence.
 * @returns {String} e.g -sticky-ad
 * @param {String} str React custom-element name e.g StickyAd
 */
const toKebabCase = str =>
  str.replace(/([A-Z])/g, '-$1').toLowerCase()

// Primitives RAMPT components to be exposed.
const PublicComponents = {
  Link, Meta, Script, Tag,
}

/**
 * @description Exposes a factory to generate components in runtime
 * @returns {Object} React component
 */
export default new Proxy(PublicComponents, {
  get(object, property) {
    if (property in object) {
      return object[property]
    }

    // defaults to amp-element
    return (...props) => (
      React.createElement(Script, {
        _name: `amp${toKebabCase(property)}`,
        ...props,
      })
    )
  },
})
