import React from 'react'
import styled from 'styled-components'
import H2 from '../../../Atoms/heading/h2'
import Border from '../../../Atoms/border/border'
import Text from '../../../Molecules/TextArea'
import RadioField from '../../../Molecules/RadioArea'
import AddressArea from '../../../Molecules/AddressArea'

export default function Info () {
  return (
    <Wrapper>
      <H2 title='基本情報' />
      <Border />
      {/* --------------------氏名入力-------------------- */}
      <Text
        title='氏名'
        label={['氏', '名']}
        size='small'
      />
      <Text
        title='ふりがな'
        label={['氏（かな）', '名（かな）']}
        size='small'
      />
      <Border />
      {/* -----------------メールアドレス----------------- */}
      <Text
        title='メールアドレス'
        label={['example@exam.co.jp']}
        helper='ユーザーIDになります。'
        size='small'
      />
      <Border />
      {/* -----------------パスワード入力----------------- */}
      <Text
        title='パスワード'
        label={['パスワード']}
        size='small'
        helper='8文字以上の英数字で入力してください。'
      />
      <Border />
      {/* --------------------性別入力-------------------- */}
      <RadioField
        title='性別'
        label={['女性', '男性', 'その他']}
        size='small'
      />
      <Border />
      {/* ------------------生年月日入力------------------ */}
      <Text
        title='生年月日'
        label={['年', '月', '日']}
        size='small'
      />
      <Border />
      {/* ------------------住所入力------------------ */}
      <AddressArea title='住所' />
      <Border />
      {/* ------------------電話番号入力------------------ */}
      <Text
        title='電話番号'
        label={['電話番号']}
        size='small'
        helper='ハイフンなしで記入してください'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`
