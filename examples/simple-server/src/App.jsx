import React, { Fragment } from 'react'
import { renderToString } from 'react-amp-template'
import Head from './Components/Head'
import Body from './Components/Body'

const App = ({ title, date, json }) => (
  <Fragment>
    <Head title={title} json={json} />
    <Body date={date} theme={{ bgColor: 'gray' }} />
  </Fragment>
)

export default props => renderToString(<App {...props} />)
