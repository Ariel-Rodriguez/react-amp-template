import React from 'react';
import innerHTML from '../../lib/utils/innerHTML';

const ldJSONContent = `{
  '@context': 'http://schema.org',
  '@type': 'NewsArticle',
  'mainEntityOfPage': 'http://cdn.ampproject.org/article-metadata.html',
  'headline': 'Lorem Ipsum',
  'datePublished': '1907-05-05T12:02:41Z',
  'dateModified': '1907-05-05T12:02:41Z',
  'description': 'The Catiline Orations continue to begule engineers and designers alike -- but can it stand the test of time?',
  'author': {
    '@type': 'Person',
    'name': 'Jordan M Adler',
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Google',
    'logo': {
      '@type': 'ImageObject',
      'url': 'http://cdn.ampproject.org/logo.jpg',
      'width': 600,
      'height': 60,
    },
  },
  'image': {
    '@type': 'ImageObject',
    'url': 'http://cdn.ampproject.org/leader.jpg',
    'height': 2000,
    'width': 800
  }
}`;

export const ldJson = () => (
  <script type="application/ld+json" {...innerHTML(ldJSONContent)}>
  </script>
);

export const twitter = {
  type: 'meta',
  content: {
    content: '@react-amp-template',
    name: 'twitter:creator',
  },
};
