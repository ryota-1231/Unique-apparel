import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import Text from '../Atoms/input/text'

export default function TextArea (props) {
  return (
    <Wrapper>
      <TitleH3 title={props.title} />
      <TextBox label={props.label} size={props.size}/>
    </Wrapper>
  )
}

TextArea.propTypes = {
  title: PropTypes.string,
  label: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
`
const TitleH3 = styled(H3)`
  line-height: 56px;
  width: 200px;
`

const TextBox = styled(Text)`
  display: inline-block;
  margin-right: 20px;
`
