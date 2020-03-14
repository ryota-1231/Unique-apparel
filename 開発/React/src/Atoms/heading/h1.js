import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function h1 (props) {
  return (
    <H1 className={props.className}>{props.title}</H1>
  )
}

h1.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
}

const H1 = styled.h1`
  font-size: 30px;
  color: #2D2D2D;
`
