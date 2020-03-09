import React from 'react'
import RadioField from '../../Molecules/RadioArea'
import PostCodeInputContainer from './CompanySignUp/PostCodeInputContainer'
import PhoneNumberInputContainer from './CompanySignUp/PhoneNumberInputContainer'
import TextArea from '../../Molecules/TextArea'

class CompanySignUp extends React.Component {
  render () {
    return (
      <div className='company-signup-area'>
        {/* -------------事業形態------------- */}
        <RadioField title='事業形態' label={['法人', '個人事業主']} size='small' />
        {/* -------------会社名入力------------- */}
        <TextArea title='会社名' label={['正式名称', 'ふりがな']} size='small'/>
        {/* -------------住所入力------------- */}
        <PostCodeInputContainer title='本社所在地' />
        {/* -------------電話番号入力------------- */}
        <PhoneNumberInputContainer label='代表電話番号' />
        {/* -------------代表者氏名入力------------- */}
        <TextArea title='代表者名' label={['氏','名']} size='small'/>
        <TextArea title='ふりがな' label={['氏（かな）','名（かな）']} size='small'/>
      </div>
    )
  }
}

export default CompanySignUp
