import React from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import H2 from '../../../Atoms/heading/h2'
import Border from '../../../Atoms/border/border'
import Information from '../../../Molecules/information'


export default function Destination () {
  return (
    <Wrapper>
      <H2 title='クレジットカード情報の変更' />
      <Border />
      <Information 
        value='変更'
        type='outlined'
        color='primary'
        description={[
          'クレジット情報登録はありません。'
          ]}
      />
      <Link href='#'>クレジット情報を登録する</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`