import React from 'react'
import styled from 'styled-components'

export default function ButtonArea () {
  return (
    <Wrapper>
      <Button>♡いいね4</Button>
      <Button>不適切な商品の報告</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 900px;
  height: auto;
  margin: 0 0 20px 0;
`
const Button = styled.button`
  border: 1px solid #eee;
  border-radius: 50px;
  background: #eee;
  height: 40px;
  padding: 5px 15px;
  line-height: 15px;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
  }
`
