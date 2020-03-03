import React from 'react'
import PhoneNumberTextContainer from './PhoneNumberTextContainer'

class PhoneNumberInputContainer extends React.Component {
  render () {
    return (
      <div className='phone-number-area'>
        <div className='phone-number-title-area'>
          <h4 className='phone-number-title'>電話番号</h4>
        </div>
        <PhoneNumberTextContainer />
      </div>
    )
  }
}

export default PhoneNumberInputContainer