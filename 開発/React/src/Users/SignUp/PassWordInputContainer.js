import React from 'react'
import PassWordTextField from './PassWordTextField'

class PassWordInputContainer extends React.Component {
  render () {
    return (
      <div className='password-area'>
        <div className='password-title-area'>
          <h4 className='password-title'>パスワード</h4>
        </div>
        <PassWordTextField />
      </div>
    )
  }
}

export default PassWordInputContainer