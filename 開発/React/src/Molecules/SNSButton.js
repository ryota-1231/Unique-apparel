import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialButton () {
  return (
    <Wrapper>
      <a href='https://www.facebook.com'><Span><FontAwesomeIcon icon={['fab', 'facebook-square']} size='3x' color='blue' /></Span></a>
      <a href='https://www.twitter.com'><Span><FontAwesomeIcon icon={['fab', 'twitter-square']} size='3x' color='skyblue' /></Span></a>
      <a href='https://www.pinterest.jp'><Span><FontAwesomeIcon icon={['fab', 'pinterest-square']} size='3x' color='red' /></Span></a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 20px 0;
  text-align: center;
  line-height: 200px;

`

const Span = styled.span`
  padding: 0 10px;
  &:hover {
    opacity: 50%;
  }
`
