import React from 'react'
import MailTextField from './MailTextField'

class MailInputContainer extends React.Component {
  render () {
    return (
      <div className='mail-area'>
        <div className='mail-title-area'>
          <h4 className='mail-title'>メールアドレス</h4>
          <p className='mail-subtitle'>(ユーザーID)</p>
        </div>
        <MailTextField />
      </div>
    )
  }
}

export default MailInputContainer
