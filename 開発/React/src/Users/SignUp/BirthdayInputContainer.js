import React from 'react'
import BirthdayTextField from './BirthdayTextField'

class BirthdayInputContainer extends React.Component {
  render () {
    return (
      <div className='birthday-area'>
        <div className='birthday-title-area'>
          <h4 className='birthday-title'>生年月日</h4>
        </div>
        <BirthdayTextField />
      </div>
    )
  }
}

export default BirthdayInputContainer
