import React from 'react'
import NameTextField from './NameTextField'

class NameInputContainer extends React.Component {
  render () {
    return (
      <div className='name-area'>
        <div className='name-title-area'>
          <h4 className='name-title'>氏名</h4>
        </div>
        <NameTextField />
      </div>
    )
  }
}

export default NameInputContainer
