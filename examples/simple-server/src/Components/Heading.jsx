import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
`

const H1 = styled.h1`
  font-size: 1.5em;
  font-family: 'sans-serif';
`

const Heading = ({ date }) => (
  <Container>
    <H1>An AMP Live Blog</H1>
    <p><small className="date">{date}</small></p>
    <p><small>by Chiara Chiappini</small></p>
    <p id="summary">This is a sample article demonstrating how to write a live blog in AMP. It demonstrates the usage of amp-live-list component which allows to create live blogs.</p>
  </Container>
)

export default Heading
