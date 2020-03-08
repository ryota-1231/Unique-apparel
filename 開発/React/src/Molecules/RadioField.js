import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import H3 from '../Atoms/heading/h3'
import RadioBtn from '../Atoms/input/radioBtn'


export default function RadioField (props) {
  return (
    <Wrapper>
      <H3 name={props.name} />
      <RadioBtn label={props.label}/>
    </Wrapper>
  )
}

RadioField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.array
}

const Wrapper = styled.div`
  padding: 8px 10px;
`