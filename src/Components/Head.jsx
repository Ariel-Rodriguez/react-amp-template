import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../store'

const Head = ({ css }) => (
  <Consumer>
    {({ store: { state } }) => (
      <head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <script async src="https://cdn.ampproject.org/v0.js" />
        {state.elements}
        <style amp-boilerplate="" />
        <style amp-custom="" dangerouslySetInnerHTML={{ __html: css }} />
      </head>
    )
  }
  </Consumer>
)

Head.defaultProps = {
  css: '',
}
Head.propTypes = {
  css: PropTypes.string,
}

export default Head
