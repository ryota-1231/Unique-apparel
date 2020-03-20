import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import AddressGetApi from './Address/AddressGetApi'

export default function AddressArea (props) {
  return (
    <Wrapper>
      <TitleH3 title={props.title} />
      <AddressGetApi />
    </Wrapper>
  )
}

AddressArea.propTypes = {
  title: PropTypes.string
}

const Wrapper = styled.div`
`

const TitleH3 = styled(H3)`
  line-height: 56px;
  width: 200px;
`
