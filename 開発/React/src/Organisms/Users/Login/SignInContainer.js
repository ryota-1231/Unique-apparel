import React from 'react'
import Link from '@material-ui/core/Link'
import styled from 'styled-components'
import H1 from '../../../Atoms/heading/h1'
import Text from '../../../Atoms/input/text'
import SignInCheckBox from '../../../Molecules/SignInCheckBox'

export default function SignInContainer () {
  return (
    <Wrapper>
      <Title title="Sign In To ..." />
      {/* -------------テキストボックス------------- */}
      <TextBox label={['User ID']} size={'small'} />
      <TextBox label={['PassWord']} size={'small'} />
      {/* -------------チェックボックス・ラベル------------- */}
      <SignInCheckBox />
      <Link href='#' className='forget-password'>Forget PassWord?</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding:  30px 20px 39px;
`

const Title = styled(H1)`
  text-align: center;
`

const TextBox = styled(Text)`
  width: 100%;
`