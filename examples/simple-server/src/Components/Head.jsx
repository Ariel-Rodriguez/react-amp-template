import React, { Fragment } from 'react'
import { AMP } from 'react-amp-template'

const metaContent = {
  'http-equiv': 'origin-trial',
  'data-expires': '2020-01-01',
  'data-feature': 'Web Share',
  content: 'Ajcrk411RcpUCQ3ovgC8le4e7Te/1kARZsW5Hd/OCnW6vIHTs5Kcq1PaABs7SzcrtfvT0TIlFh9Vdb5xWi9LiQsAAABSeyJvcmlnaW4iOiJodHRwczovL2FtcGJ5ZXhhbXBsZS5jb206NDQzIiwiZmVhdHVyZSI6IldlYlNoYXJlIiwiZXhwaXJ5IjoxNDkxMzM3MDEwfQ==',
}

const Head = () => (
  <Fragment>
    <AMP.Tag _name="title">This is the web page title</AMP.Tag>
    <AMP.Link canonical="" />
    <AMP.Meta {...metaContent} />
  </Fragment>
)

export default Head
