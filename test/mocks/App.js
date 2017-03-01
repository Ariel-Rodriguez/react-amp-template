import {
  StyleSheet,
  css,
} from 'aphrodite/no-important'
import React from 'react'
import { addMeta, addScript } from '../../lib'
import { ldJSON, twitter } from './metas'
import innerHTML from '../../src/utils/innerHTML'

export const MOCK_DATA = {
  content: {
    body: 'mock-body',
  },
  config: {
    template: {
      head: {
        title: 'mock-title',
        canonical: 'mock-canonical',
      },
    }
  }
}

const coolFont = {
    fontFamily: "CoolFont",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url('coolfont.woff2') format('woff2')",
};

const appStyles = StyleSheet.create({
    headingText: {
        fontFamily: coolFont,
        fontSize: 20,
    },
    bodyText: {
        fontFamily: [coolFont, "sans-serif"],
        fontSize: 12,
    }
});

const App = ({ stylesEnabled, body }) => {
  addMeta([twitter, ldJSON])
  addScript('amp-social-share')
  if (stylesEnabled) {
    return (<div classNames={css(appStyles.bodyText)} {...innerHTML(body)} ></div>)
  }
  return (
   <div {...innerHTML(body)} />
  )
}

export default App
