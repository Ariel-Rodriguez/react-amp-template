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
      store.registerElement(name, props)
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
