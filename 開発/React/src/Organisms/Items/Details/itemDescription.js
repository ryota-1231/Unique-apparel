import React from 'react'
import styled from 'styled-components'
import P from '../../../Atoms/input/description'

export default function ItemDescription () {
  return (
    <Wrapper>
      <StyledP description={['ここは商品の説明一行目です','ここは商品の説明二行目です', 'ここは商品の説明三行目です', 'ここは商品の説明四行目です', 'ここは商品の説明五行目です']} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
  height: 400px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-radius: 4px;
`

const StyledP = styled(P)`
padding: 20px 5px 0 5px;
`