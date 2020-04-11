import React from 'react'
import styled from 'styled-components'
import Pagination from '../../../Molecules/Pagination'
import OrderStatus from '../../../Molecules/OrderStatus'


class Contents extends React.Component {
  render () {
    return (
      <Container>
        <Pagination />
        <OrderStatus />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 900px;
  border-top: 1px solid #c0c0c0;
`

export default Contents