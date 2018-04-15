import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag'

const Title = ({ children }) =>
  <Tag _name="title" dangerouslySetInnerHTML={{ __html: children }} />

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
