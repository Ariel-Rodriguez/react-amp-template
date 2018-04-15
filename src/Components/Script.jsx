import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../store'


const Script = ({
  _name: name,
  _version: version,
  children,
  ...props
}) => (
  <Consumer>
    {({ store }) => {
      if (name) {
        const attrs = { async: true, 'custom-element': name, src: store.getScriptSRC(name) }
        store.registerUniqueElement('script', attrs, name)
        return React.createElement(name, props, children)
      }
      store.registerElement('script', props)
      return children
    }}
  </Consumer>
)

Script.defaultProps = {
  _name: '',
  _version: '',
  children: null,
  src: null,
}

Script.propTypes = {
  _name: PropTypes.string,
  _version: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
}

export default Script
