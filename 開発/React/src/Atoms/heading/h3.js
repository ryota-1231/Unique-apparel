import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function h3 (props) {
  return (
    <H3 className={props.className}>{props.title}</H3>
  )
}

h3.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
}

const H3 = styled.h3`
  font-size: 18px;
  color: #2D2D2D;
`
