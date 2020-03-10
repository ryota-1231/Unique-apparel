import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import RadioBtn from '../Atoms/input/radioBtn'

export default function RadioArea (props) {
  return (
    <Wrapper>
      <TitleH3 title={props.title} />
      <RadioBtn label={props.label} />
    </Wrapper>
  )
}

RadioArea.propTypes = {
  title: PropTypes.string,
  label: PropTypes.array,
  className: PropTypes.string
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
`
const TitleH3 = styled(H3)`
  line-height: 42px;
  width: 200px;
  margin-right: 10px;
`
