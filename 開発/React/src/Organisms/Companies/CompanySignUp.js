import React from 'react'
import RadioField from '../../Molecules/RadioArea'
import AddressArea from '../../Molecules/AddressArea'
import TextArea from '../../Molecules/TextArea'
import Border from '../../Atoms/border/border'

class CompanySignUp extends React.Component {
  render () {
    return (
      <div className='company-signup-area'>
        {/* -------------事業形態------------- */}
        <RadioField title='事業形態' label={['法人', '個人事業主']} size='small' />
        <Border />
        {/* -------------会社名入力------------- */}
        <TextArea title='会社名' label={['正式名称', 'ふりがな']} size='small' />
        <Border />
        {/* -------------住所入力------------- */}
        <AddressArea title='本社所在地' />
        <Border />
        {/* -------------電話番号入力------------- */}
        <TextArea title='連絡先電話番号' label={['電話番号']} size='small' helper='ハイフンなしで記入してください' />
        <TextArea title='連絡先FAX番号' label={['FAX番号']} size='small' helper='ハイフンなしで記入してください' />
        <Border />
        {/* -------------代表者氏名入力------------- */}
        <TextArea title='代表者名' label={['氏', '名']} size='small' />
        <TextArea title='ふりがな' label={['氏（かな）', '名（かな）']} size='small' />
      </div>
    )
  }
}

export default CompanySignUp
