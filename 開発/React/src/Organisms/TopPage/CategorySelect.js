import React from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import H1 from '../../Atoms/heading/h1'

export default function Links () {
  return (
    <Wrapper>
      <Title title='NEW ARRIVALS' />
      <Container>
        <LinkTag href='#'>All</LinkTag>
        <LinkTag href='#'>Mens</LinkTag>
        <LinkTag href='#'>Women</LinkTag>
        <LinkTag href='#'>Women</LinkTag>
        <LinkTag href='#'>Kids</LinkTag>
        <LinkTag href='#'>Shoes</LinkTag>
        <LinkTag href='#'>Bag</LinkTag>
        <LinkTag href='#'>Other</LinkTag>
      </Container>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  width: 550px;
  margin: 30px auto 50px;
`
const Container = styled.div`

`
const Title = styled(H1)`
  text-align: center;
`
const LinkTag = styled(Link)`
  padding: 15px;
`
