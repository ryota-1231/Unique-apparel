import React from 'react'
import CompanyNameContainer from './CompanySignUp/CompanyNameContainer'
import PostCodeInputContainer from './CompanySignUp/PostCodeInputContainer'
import PhoneNumberInputContainer from './CompanySignUp/PhoneNumberInputContainer'
import NameInputContainer from './CompanySignUp/NameInputContainer'
import RadioField from '../../Molecules/RadioField'

class ShopSignUp extends React.Component {
  render () {
    return (
      <div className='company-signup-area'>
        {/* -------------店舗代表者氏名入力------------- */}
        <NameInputContainer title='店舗運営責任者' leftLabel='氏' rightLabel='名' />
        <NameInputContainer title='ふりがな' leftLabel='氏（かな）' rightLabel='名（かな）' />
        {/* -------------部署名------------- */}
        <CompanyNameContainer title='部署名' label='正式名称' />
        {/* -------------郵送先選択------------- */}
        <RadioField name='郵便物等の送付先住所' label={['本社所在地と同じ', '店舗運営責任者の連絡先を入力']} />
        <p className='mailing-address'>登記簿謄本の「本店」欄の住所または住民票と異なる場合入力。同じ場合は入力不要</p>
        {/* -------------住所入力------------- */}
        <PostCodeInputContainer title='連絡先住所' />
        {/* -------------連絡先電話番号入力------------- */}
        <PhoneNumberInputContainer label='連絡先電話番号' />
        {/* -------------メールアドレス------------- */}
        <CompanyNameContainer title='メールアドレス' label='example@exam.co.jp' />

      </div>
    )
  }
}

export default ShopSignUp
