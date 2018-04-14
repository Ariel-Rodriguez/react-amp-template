import React, { Fragment } from 'react'
import { renderToString } from 'react-amp-template'
import Head from './Components/Head'
import Body from './Components/Body'

const App = ({ title }) => (
  <Fragment>
    <Head />
    <Body theme={{ bgColor: 'gray' }} />
  </Fragment>
)

export default props => renderToString(<App {...props} />)
