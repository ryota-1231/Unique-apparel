import React from 'react'
import Button from '../Atoms/button/button'
import Checkbox from '../Atoms/input/checkBox'
import styled from 'styled-components'

export default function SignInCheckBox () {
  return (
    <Wrapper>
      <Check label='Remember Me?' place='end' />
      <Button type='contained' value='Sing In!' color='secondary' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between !important;
`

const Check = styled(Checkbox)`
  margin-right: 50px !important;
`
