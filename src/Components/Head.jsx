import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../store'

const buildStyleProps = plainCSS => ({
  dangerouslySetInnerHTML: { __html: plainCSS },
})

const Head = ({ css }) => (
  <Consumer>
    {({ store: { state } }) => (
      <head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <script async src="https://cdn.ampproject.org/v0.js" />
        {state.elements}
        <style amp-boilerplate="" />
        {/** eslint-disable-next-line react/no-danger */}
        <style amp-custom="" {...buildStyleProps(css)} />
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
