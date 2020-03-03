import React from 'react'
import NameKanaTextContainer from './NameKanaTextContainer'

class NameKanaInputContainer extends React.Component {
  render () {
    return (
      <div className='name-kana-area'>
        <div className='name-kana-title-area'>
          <h4 className='name-kana-title'>氏名（かな）</h4>
        </div>
        <NameKanaTextContainer />
      </div>
    )
  }
}

export default NameKanaInputContainer