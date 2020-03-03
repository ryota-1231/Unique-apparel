import React from 'react'
import NameKanaTextField from './NameKanaTextField'

class NameKanaInputContainer extends React.Component {
  render () {
    return (
      <div className='name-kana-area'>
        <div className='name-kana-title-area'>
          <h4 className='name-kana-title'>氏名（かな）</h4>
        </div>
        <NameKanaTextField />
      </div>
    )
  }
}

export default NameKanaInputContainer