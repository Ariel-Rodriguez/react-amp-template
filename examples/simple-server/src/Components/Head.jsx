import React, { Fragment } from 'react'
import { AMP } from 'react-amp-template'

const {
  Tag, Link, Meta, Script,
} = AMP

const metaContent = {
  httpEquiv: 'origin-trial',
  'data-expires': '2020-01-01',
  'data-feature': 'Web Share',
  content: 'Ajcrk411RcpUCQ3ovgC8le4e7Te/1kARZsW5Hd/OCnW6vIHTs5Kcq1PaABs7SzcrtfvT0TIlFh9Vdb5xWi9LiQsAAABSeyJvcmlnaW4iOiJodHRwczovL2FtcGJ5ZXhhbXBsZS5jb206NDQzIiwiZmVhdHVyZSI6IldlYlNoYXJlIiwiZXhwaXJ5IjoxNDkxMzM3MDEwfQ==',
}

const Head = ({ title, json }) => (
  <Fragment>
    <Tag _name="title">{title}</Tag>
    <Link rel="canonical" href="http://localhost" />
    <Meta charSet="utf-8" />
    <Meta {...metaContent} />
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  </Fragment>
)

export default Head
