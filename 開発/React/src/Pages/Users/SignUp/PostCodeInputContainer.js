import React from 'react'
import AddressGetApi from './AddressGetApi'

class PostCodeInputContainer extends React.Component {
  render () {
    return (
      <div className='postcode-area'>
        <div className='postcode-title-area'>
          <h4 className='address-title'>住所</h4>
        </div>
        <AddressGetApi />
      </div>
    )
  }
}

export default PostCodeInputContainer
