import React from 'react'
import render from '../../lib'

const SocialShare = (props, { head }) => {
  head.append('amp-social-share')
  return <amp-social-share {...props} />
}

const metaContent = {
  'http-equiv': "origin-trial",
  'data-expires': '2020-01-01',
  'data-feature': "Web Share",
  'content': "Ajcrk411RcpUCQ3ovgC8le4e7Te/1kARZsW5Hd/OCnW6vIHTs5Kcq1PaABs7SzcrtfvT0TIlFh9Vdb5xWi9LiQsAAABSeyJvcmlnaW4iOiJodHRwczovL2FtcGJ5ZXhhbXBsZS5jb206NDQzIiwiZmVhdHVyZSI6IldlYlNoYXJlIiwiZXhwaXJ5IjoxNDkxMzM3MDEwfQ=="
}

const Body = (props, { head }) => {
  // Add required meta tags to head at any moment.
  head.append('meta', metaContent)
  head.append('link', {rel: 'amphtml', 'href': "https://www.example.com/url/to/amp/document.html"})
  return(
    <body>
      <h1>Preact for AMP is welcome as well!</h1>
      <SocialShare width="40" height="40" type="email"/>
      <SocialShare width="40" height="40" type="facebook"
        data-param-app_id="254325784911610" />
      <SocialShare width="40" height="40" type="gplus"/>
      <SocialShare width="40" height="40" type="linkedin"/>
      <SocialShare width="40" height="40" type="whatsapp"/>
      <SocialShare width="40" height="40" type="twitter"/>
    </body>
  )
}

export default () =>
  render(<Body />, {
    title: 'Rendering AMP with preact',
    canonical: 'https://my-website.com',
  })
