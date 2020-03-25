import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import H3 from '../Atoms/heading/h3'
import Button from '../Atoms/button/button'
import Description from '../Atoms/input/description'


export default function BtnTag (props) {
  return (
    <Wrapper>
      <Title title={props.title} />
      <Container>
        <Description description={props.description} />
        <Btn 
          value={props.value}
          type={props.type}
          color={props.color}
          className={props.className}
        />
      </Container>
    </Wrapper>
  )
}

BtnTag.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.array
}

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
`
const Title = styled(H3)`
  line-height: 56px;
  width: 200px;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Btn = styled(Button)`
  display: block;
  width: 45px;
  height: 35px;
  padding: 5px 8px !important;
  line-height: 25px !important;
`
