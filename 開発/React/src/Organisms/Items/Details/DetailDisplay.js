import React from 'react'
import Display from '../../../Molecules/ItemDisplay'
import styled from 'styled-components'

export default function DetailDisplay () {
  return (
    <Wrapper>
      <Container>
        <Display title='出品者' description={['ガースー', '☆4.1']} />
        <Display title='カテゴリー' description={['レディース', 'ジャケット＞アウター', 'ジャンパー/ブルゾン']} />
        <Display title='商品のサイズ' description={['M']} />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
`

const Container = styled.div`
  border: 1px solid #eee;
  border-bottom: none;
  border-radius: 4px;
  margin-left: 15px;
`
