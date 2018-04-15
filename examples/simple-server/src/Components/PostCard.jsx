import React from 'react'
import styled from 'styled-components'
import { AMP } from 'react-amp-template'
import SocialShare from './SocialShare'

const Container = styled.div`
  padding: 0;
  min-width: 70%;
  background: #fff;
`

const Title = styled.h4`
  color: white;
  position: relative;
  top: -48px;
  margin: 0 16px;
  height: 0;
  padding-bottom: 16px;
`

const Text = styled.h4`
  color: black;
  padding-top: 0;
`
const Date = styled.p`
  color: #a8a3ae;
  font-size: 12px
`

const PostCard = () => (
  <Container>
    <amp-img
      src="/img/landscape_green_1280x853.jpg"
      layout="responsive"
      width="1280"
      height="853"
    />
    <Title>Green landscape</Title>
    <Date>00:21:45</Date>
    <Text>A green landscape with trees.</Text>
    <SocialShare />
  </Container>
)

export default PostCard
