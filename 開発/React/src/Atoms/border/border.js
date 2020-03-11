import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function border (props) {
  return (
    <Border className={props.className} />
  )
}

border.propTypes = {
  className: PropTypes.string
}

const Border = styled.span`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #ddd !important;
`
