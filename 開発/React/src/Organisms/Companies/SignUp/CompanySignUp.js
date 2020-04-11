import React from 'react'
import styled from 'styled-components'
import RadioField from '../../../Molecules/RadioArea'
import AddressArea from '../../../Molecules/AddressArea'
import Text from '../../../Molecules/TextArea'
import Border from '../../../Atoms/border/border'

class CompanySignUp extends React.Component {
  render () {
    return (
      <Wrapper>
        {/* -------------事業形態------------- */}
        <RadioField title='事業形態' label={['法人', '個人事業主']} size='small' />
        <Border />
        {/* -------------会社名入力------------- */}
        <TextBox title='会社名' label={['正式名称']} size='small' />
        <TextBox label={['ふりがな']} size='small' />
        <Border />
        {/* -------------住所入力------------- */}
        <AddressArea title='本社所在地' />
        <Border />
        {/* -------------電話番号入力------------- */}
        <Text title='連絡先電話番号' label={['電話番号']} size='small' helper='ハイフンなしで記入してください' />
        <Text title='連絡先FAX番号' label={['FAX番号']} size='small' helper='ハイフンなしで記入してください' />
        <Border />
        {/* -------------代表者氏名入力------------- */}
        <Text title='代表者名' label={['氏', '名']} size='small' />
        <Text title='ふりがな' label={['氏（かな）', '名（かな）']} size='small' />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  
`
const TextBox = styled(Text)`
  width: 100% ;
`

export default CompanySignUp
