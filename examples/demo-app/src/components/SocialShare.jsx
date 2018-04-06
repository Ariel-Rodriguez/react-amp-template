import { h } from 'preact'

const SocialShare = (props, { head }) => {
  head.append('amp-social-share')
  return <amp-social-share {...props} />
}

export default SocialShare
