import React from 'react'
import styled from 'styled-components'

export default {
  title: 'heading',
  component: h3Tag
}

export function h3Tag () {
  return (
    <H3>Title</H3>
  )
}

const H3 = styled.h3`
  font-size: 18px;
  color: #2D2D2D;
`

h3Tag.story = {
  name: 'h3'
}
