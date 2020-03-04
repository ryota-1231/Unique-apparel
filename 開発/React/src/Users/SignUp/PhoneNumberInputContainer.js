import React from 'react'
import PhoneNumberTextField from './PhoneNumberTextField'

class PhoneNumberInputContainer extends React.Component {
  render () {
    return (
      <div className='phone-number-area'>
        <div className='phone-number-title-area'>
          <h4 className='phone-number-title'>電話番号</h4>
        </div>
        <PhoneNumberTextField />
      </div>
    )
  }
}

export default PhoneNumberInputContainer
