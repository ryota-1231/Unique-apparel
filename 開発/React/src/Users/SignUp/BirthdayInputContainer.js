import React from 'react'
import TextContainer from './TextContainer'

class BirthdayInputContainer extends React.Component {
  render () {
    return (
      <div className='birthday-area'>
        <div className='birthday-title-area'>
          <h4 className='birthday-title'>生年月日</h4>
        </div>
        <TextContainer />
      </div>
    )
  }
}

export default BirthdayInputContainer