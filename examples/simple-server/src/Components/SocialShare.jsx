import { AMP } from 'react-amp-template'

const SocialShare = AMP.SocialShare

const Container = styled.div`
  margin: 1em;
`


export default () => (
  <Container>
    <SocialShare width="40" height="40" type="email" />
    <SocialShare
      width="40"
      height="40"
      type="facebook"
      data-param-app_id="254325784911610"
    />
    <SocialShare width="40" height="40" type="gplus" />
    <SocialShare width="40" height="40" type="linkedin" />
    <SocialShare width="40" height="40" type="whatsapp" />
    <SocialShare width="40" height="40" type="twitter" />
  </Container>
)
