import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

export default function h3Tag (props) {
  return (
    <H3>{props.name}</H3>
  )
}

h3Tag.propTypes = {
  name: PropTypes.string
}

const H3 = styled.h3`
  font-size: 18px;
  color: #2D2D2D;
`