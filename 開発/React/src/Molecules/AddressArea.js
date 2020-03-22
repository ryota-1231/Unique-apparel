import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import AddressGetApi from './Address/AddressGetApi'

export default function AddressArea (props) {
  return (
    <Wrapper>
      <Title title={props.title} />
      <AddressGetApi />
    </Wrapper>
  )
}

AddressArea.propTypes = {
  title: PropTypes.string
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
`

const Title = styled(H3)`
  flex-shrink: 0;
  line-height: 56px;
  width: 200px !important;
`