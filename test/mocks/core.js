import React from 'react';
import { metas, scripts } from '../../lib';
import { ldJson, twitter } from './metas';

export const MOCK_DATA = {
  content: {
    data: 'mock',
  },
  config: {
    head: {
      title: 'mock',
      canonical: 'mock',
    },
  },
  expect: {
    metaJSON: "'dateModified': '1907-05-05T12:02:41Z'",
    metaTwitter: '<meta name="twitter:creator" content="@react-amp-template"/>',
  },
};

metas([
  ldJson,
  twitter,
]);
scripts('amp-social-share');

export const App = () => (<div>{MOCK_DATA.content.data}</div>);
