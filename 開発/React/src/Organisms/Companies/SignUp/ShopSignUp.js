import React from 'react'
import AddressArea from '../../../Molecules/AddressArea'
import Text from '../../../Molecules/TextArea'
import pTag from '../../../Atoms/input/description'
import RadioArea from '../../../Molecules/RadioArea'
import Border from '../../../Atoms/border/border'
import styled from 'styled-components'


class ShopSignUp extends React.Component {
  render () {
    return (
      <Wrapper>
        {/* ------------- 店舗代表者氏名入力------------- */}
        <Text title='店舗運営責任者' label={['氏', '名']} size='small' />
        <Text title='ふりがな' label={['氏（ふりがな）', '名（ふりがな）']} size='small' />
        <Border />
        {/* -------------------部署名------------------ */}
        <Text title='部署名' label={['正式名称']} size='small' />
        <Border />
        {/* -----------------郵送先選択----------------- */}
        <RadioArea title='郵便物等の送付先住所' label={['本社所在地と同じ', '店舗運営責任者の連絡先を入力']} />
        <P description={['※登記簿謄本の「本店」欄の住所または住民票と異なる場合入力。']}/>
        <Border />
        {/* ------------------住所入力------------------ */}
        <AddressArea title='連絡先住所' />
        <Border />
        {/* --------------連絡先電話番号入力------------- */}
        <Text title='連絡先電話番号' label={['電話番号']} size='small' helper='ハイフンなしで記入してください' />
        <Text title='連絡先FAX番号' label={['FAX番号']} size='small' helper='ハイフンなしで記入してください' />
        <Border />
        {/* ----------------メールアドレス---------------- */}
        <Text title='メールアドレス' label={['example@exam.co.jp']} size='small' />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`

const P = styled(pTag)`
  padding-left: 218px;
`

export default ShopSignUp
