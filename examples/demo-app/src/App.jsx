import { h } from 'preact'
import render from 'react-amp-template'

import Body from './components/Body'

const App = render(<Body />, {
  title: 'Rendering AMP with preact',
  canonical: 'https://my-website.com',
})

export default App
