import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function h2 (props) {
  return (
    <H2 className={props.className}>{props.title}</H2>
  )
}

h2.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
}

const H2 = styled.h2`
  font-size: 20px;
  padding: 8px 10px;
  color: #2D2D2D;
`
