import React from 'react'
import AddressTextField from './AddressTextField'

class AddressInputContainer extends React.Component {
  render () {
    return (
      <div className='address-area'>
        <div className='address-title-area'>
          <h4 className='address-title'>住所</h4>
        </div>
        <AddressTextField />
      </div>
    )
  }
}

export default AddressInputContainer
