import React from 'react'
import TextFieldContainer from './TextFieldContainer'

class BirthdayInputContainer extends React.Component {
  render () {
    return (
      <div className='birthday-area'>
        <div className='birthday-title-area'>
          <h4 className='birthday-title'>生年月日</h4>
        </div>
        <TextFieldContainer />
      </div>
    )
  }
}

export default BirthdayInputContainer