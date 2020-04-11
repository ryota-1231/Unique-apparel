import React from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import H2 from '../../../Atoms/heading/h2'
import Border from '../../../Atoms/border/border'
import Information from '../../../Molecules/information'

export default function Destination () {
  return (
    <Wrapper>
      <H2 title='お届け先の変更・追加' />
      <Border />
      <Information
        value='変更'
        type='outlined'
        color='primary'
        description={[
          '追加したお届け先はありません。'
        ]}
      />
      <Link href='#'>お届け先を追加する</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
