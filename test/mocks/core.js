import React from 'react';

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
};

export const App = () => (<div>{MOCK_DATA.content.data}</div>);
