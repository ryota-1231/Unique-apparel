import React from 'react'
import styled from 'styled-components'
import H2 from '../../../Atoms/heading/h2'
import H3 from '../../../Atoms/heading/h3'

export default function ItemPrice () {
  return (
    <Container>
      <Wrapper>
        <PriceH2 title='¥3,000' />
        <TaxH3 title='税込(送料込み)' />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 900px;
  height: 80px;
`

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  margin: 0 auto;
`

const PriceH2 = styled(H2)`
  font-size: 48px;
  font-weight: bold;
`

const TaxH3 = styled(H3)`
line-height: 80px;
`
