import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function OtherItem (props) {
  return (
      <ItemSection>
        <Img src={props.image} />
        <h2>{props.name}</h2>
        <H3>{props.price}</H3>
      </ItemSection>
  )
}

OtherItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
}

const ItemSection = styled.div`
  width: 900px;
  justify-content: space-between;
  margin: 15px 0;
`

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`

const H3 = styled.h3`
  font-weight: bold;
`