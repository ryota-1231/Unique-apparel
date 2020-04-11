import React from 'react'
import H1 from '../../../Atoms/heading/h1'
import Button from '../../../Atoms/button/button'
import styled from 'styled-components'

export default function InterFaceContainer () {
  return (
    <Wrapper>
      <Title title='SNS Sign In' />
      <Btn type='outlined' value='Google Account' />
      <Btn type='outlined' color='secondary' value='Instagram Account' />
      <Btn type='outlined' color='primary' value='Twitter Account' />
      <Btn type='outlined' color='primary' value='Facebook Account' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 30px 30px 23px;
  border-top: 1px solid #eee;
`

const Title = styled(H1)`
  text-align: center;
`

const Btn = styled(Button)`
  margin: 8px 0px !important;
  width: 100%;
`
