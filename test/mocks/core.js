import React from 'react';
import { addMeta, addScript } from '../../lib';
import { ldJson, twitter } from './metas';

export const MOCK_DATA = {
  content: {
    data: 'mock',
  },
  config: {
    template: {
      head: {
        title: 'mock',
        canonical: 'mock',
      },
    }
  },
  expect: {
    metaJSON: "'dateModified': '1907-05-05T12:02:41Z'",
    metaTwitter: '<meta name="twitter:creator" content="@react-amp-template"/>',
  },
};


export const App = () => {
  addMeta([twitter]);
  addScript('amp-social-share');
  return <div>{MOCK_DATA.content.data}</div>
};
