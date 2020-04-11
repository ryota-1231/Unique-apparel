import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import Text from '../Atoms/input/text'

export default function TextArea (props) {
  return (
    <Wrapper>
      <Title title={props.title} />
      <Text className={props.className} label={props.label} size={props.size} helper={props.helper} />
    </Wrapper>
  )
}

TextArea.propTypes = {
  title: PropTypes.string,
  label: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string,
  helper: PropTypes.string
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
