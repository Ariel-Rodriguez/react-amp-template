import React from 'react'
import styled from 'styled-components'
import { AMP } from 'react-amp-template'


const Container = styled.div`
  line-height:36px;
  display: flex;
  padding-bottom: 16px;
  padding-top: 16px;
`

const SocialShare = () => (
  <Container>
    <AMP.SocialShare width="40" height="40" type="email" />
    <AMP.SocialShare
      width="40"
      height="40"
      type="facebook"
      data-param-app_id=""
    />
    <AMP.SocialShare width="40" height="40" type="gplus" />
    <AMP.SocialShare width="40" height="40" type="linkedin" />
    <AMP.SocialShare width="40" height="40" type="whatsapp" />
    <AMP.SocialShare width="40" height="40" type="twitter" />
  </Container>
)

export default SocialShare
