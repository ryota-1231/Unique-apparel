import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h2'
import Btn from '../Atoms/button/button'
import Description from '../Atoms/input/description'

export default function BtnTag (props) {
  return (
    <Wrapper>
      <TitleH3 title={props.title} />
      <Container>
        <Description description={props.description} />
        <Btn btn={props.btn} />
      </Container>
    </Wrapper>
  )
}

BtnTag.propTypes = {
  title: PropTypes.string,
  btn: PropTypes.string,
  description: PropTypes.array
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
`
const TitleH3 = styled(H3)`
  line-height: 56px;
  width: 200px;
`
const Container = styled.div`
  display: flex;
`