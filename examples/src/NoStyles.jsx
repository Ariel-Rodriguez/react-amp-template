import React from 'react'
import RAMPT from '../../lib'

const AMPTemplate = new RAMPT({
  title: 'Creating AMP Page with React',
  canonical: 'https://my-website.com',
})

const SocialShare = (props, { template }) => {
  template.register('amp-social-share')
  return <amp-social-share {...props} />
}


const Body = (props, context) => {
  // Add required meta tags to head at any moment.
  context.template.register('meta', {'http-equiv': "origin-trial", 'data-feature': "Web Share"})

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

export default class Aphrodite {
  static render() {
    return AMPTemplate.renderToString(<Body />)
  }
}
