import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import P from '../../../Atoms/input/description'
import H2 from '../../../Atoms/heading/h2'

export default function DisplayArea (props) {
  return (
    <Wrapper>
      <ContainerLeft>
        <TitleH2 title={props.title} />
      </ContainerLeft>
      <ContainerRight>
      <P description={props.description} />
      </ContainerRight>
    </Wrapper>
  )
}

DisplayArea.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array
}

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
`
const ContainerLeft = styled.div`
  width: 150px;
  padding: 15px 15px;
  background: #f5f5f5;
`

const ContainerRight = styled.div`
  padding: 15px 15px;
`
const TitleH2 = styled(H2)`
font-size: 14px;
`