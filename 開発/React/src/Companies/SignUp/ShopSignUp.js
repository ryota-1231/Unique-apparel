import React from 'react'
import PostCodeInputContainer from './CompanySignUp/PostCodeInputContainer'
import PhoneNumberInputContainer from './CompanySignUp/PhoneNumberInputContainer'
import TextArea from '../../Molecules/TextArea'
import RadioArea from '../../Molecules/RadioArea'

class ShopSignUp extends React.Component {
  render () {
    return (
      <div className='company-signup-area'>
        {/* -------------店舗代表者氏名入力------------- */}
        <TextArea title='店舗運営責任者' label={['氏', '名']} size='small'/>
        <TextArea title='ふりがな' label={['氏（ふりがな）', '名（ふりがな）']} size='small'/>
        {/* -------------部署名------------- */}
        <TextArea title='部署名' label={['正式名称']} size='small'/>
        {/* -------------郵送先選択------------- */}
        <RadioArea title='郵便物等の送付先住所' label={['本社所在地と同じ', '店舗運営責任者の連絡先を入力']} />
        <p className='mailing-address'>登記簿謄本の「本店」欄の住所または住民票と異なる場合入力。同じ場合は入力不要</p>
        {/* -------------住所入力------------- */}
        <PostCodeInputContainer title='連絡先住所' />
        {/* -------------連絡先電話番号入力------------- */}
        <PhoneNumberInputContainer label='連絡先電話番号' />
        {/* -------------メールアドレス------------- */}
        <TextArea title='メールアドレス' label={['example@exam.co.jp']} size='small'/>
      </div>
    )
  }
}

export default ShopSignUp
