import React from 'react'
import styled from 'styled-components'
import H2 from '../../../Atoms/heading/h2'
import Border from '../../../Atoms/border/border'
import Information from '../../../Molecules/information'

export default function UsersInfo () {
  return (
    <Wrapper>
      <H2 title='会員登録情報' />
      <Border />
      <Information
        title='基本情報'
        value='変更'
        type='outlined'
        color='primary'
        description={[
          '男性',
          '1900/12/12生まれ',
          '〒123-1234',
          '渋谷']}
      />
      <Border />
      <Information
        title='メールアドレス'
        value='変更'
        type='outlined'
        color='primary'
        description={[
          'sample@example.com'
        ]}
      />
      <Border />
      <Information
        title='パスワード'
        value='変更'
        type='outlined'
        color='primary'
        description={[
          '********',
          '※ セキュリティのためパスワードは非表示となっています。'
        ]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
