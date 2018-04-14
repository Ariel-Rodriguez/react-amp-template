import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../store'


const Tag = ({
  _name: name,
  children,
  ...props
}) => (
  <Consumer>
    {({ store }) => {
      if (typeof children === 'function') {
        store.registerElement(name, props)
        return children(props[0])
      }
      store.registerElement(name, { children, ...props })
      return null
    }}
  </Consumer>
)

Tag.defaultProps = {
  _name: '',
  children: null,
}

Tag.propTypes = {
  _name: PropTypes.string,
  children: PropTypes.node,
}

export default Tag
