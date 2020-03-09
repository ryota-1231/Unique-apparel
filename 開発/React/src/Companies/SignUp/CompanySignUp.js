import React from 'react'
import RadioField from '../../Molecules/RadioField'
import CompanyNameContainer from './CompanySignUp/CompanyNameContainer'
import PostCodeInputContainer from './CompanySignUp/PostCodeInputContainer'
import PhoneNumberInputContainer from './CompanySignUp/PhoneNumberInputContainer'
import NameInputContainer from './CompanySignUp/NameInputContainer'

class CompanySignUp extends React.Component {
  render () {
    return (
      <div className='company-signup-area'>
        {/* -------------事業形態------------- */}
        <RadioField name='事業形態' label={['法人', '個人事業主']} />
        {/* -------------会社名入力------------- */}
        <CompanyNameContainer title='会社名' label='正式名称' />
        <CompanyNameContainer label='ふりがな' />
        {/* -------------住所入力------------- */}
        <PostCodeInputContainer title='本社所在地' />
        {/* -------------電話番号入力------------- */}
        <PhoneNumberInputContainer label='代表電話番号' />
        {/* -------------代表者氏名入力------------- */}
        <NameInputContainer title='代表者名' leftLabel='氏' rightLabel='名' />
        <NameInputContainer title='ふりがな' leftLabel='氏（かな）' rightLabel='名（かな）' />
      </div>
    )
  }
}

export default CompanySignUp
