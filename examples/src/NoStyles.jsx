import React from 'react'
import Access from './shared/Access'
import { renderToString } from '../../lib'

export default class Aphrodite {
  static render() {
    return renderToString(<body><Access /></body>,
      { title: 'Awesome!', canonical: 'https://canonical.com' })
  }
}
