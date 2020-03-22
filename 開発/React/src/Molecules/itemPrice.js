import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import H2 from '../Atoms/heading/h2'
import H3 from '../Atoms/heading/h3'

export default function ItemPrice (props) {
  return (
    <Wrapper>
      <Container>
        <Price title={'¥' + props.price}/>
        <Tax title='税込(送料込み)'/>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 900px;
  height: 80px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Price = styled(H2)`
  font-size: 48px;
  font-weight: bold;
`

const Tax = styled(H3)`
  line-height: 80px;
`

ItemPrice.propTypes = {
  price: PropTypes.string
}