import React from 'react'
import NameTextContainer from './NameTextContainer'

class NameInputContainer extends React.Component {
  render () {
    return (
      <div className='name-area'>
        <div className='name-title-area'>
          <h4 className='name-title'>氏名</h4>
        </div>
        <NameTextContainer />
      </div>
    )
  }
}

export default NameInputContainer