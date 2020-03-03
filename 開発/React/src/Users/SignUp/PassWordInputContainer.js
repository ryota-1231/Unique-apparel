import React from 'react'
import PassWordTextContainer from './PassWordTextContainer'

class PassWordInputContainer extends React.Component {
  render () {
    return (
      <div className='password-area'>
        <div className='password-title-area'>
          <h4 className='password-title'>パスワード</h4>
        </div>
        <PassWordTextContainer />
      </div>
    )
  }
}

export default PassWordInputContainer