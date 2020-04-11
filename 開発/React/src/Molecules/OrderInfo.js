import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export default function OrderInfo (props) {
  return (
    <OrderSection>
      {/* ②商品Id */}
      <IdLinks href='#'>{props.orderId}</IdLinks>
      {/* ③取引ステータス */}
      <Button variant='contained' color='primary'>{props.status}</Button>
      {/* ④出品_日時Id */}
      <p>{props.timestamp}</p>
      {/* ⑤お客様Id */}
      <IdLinks href='#'>{props.customer}</IdLinks>
      {/* ⑥お客様連絡先Id */}
      <p>{props.tel}</p>
    </OrderSection>
  )
}

OrderInfo.propTypes = {
  orderId: PropTypes.string,
  status: PropTypes.string,
  timestamp: PropTypes.string,
  customer: PropTypes.string,
  tel: PropTypes.string
}

const OrderSection = styled.div`
  justify-content: space-between;
  margin: 15px 0;
  display: flex;
`

const IdLinks = styled.a`
  text-decoration: none;
  color: skyblue;
  &:hover {
    opacity: 50%;
  }
`
