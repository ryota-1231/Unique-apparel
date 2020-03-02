import React from 'react'
import AddressTextContainer from './AddressTextContainer'

class AddressInputContainer extends React.Component {
  render () {
    return (
      <div className='address-area'>
        <div className='address-title-area'>
          <h4 className='address-title'>住所</h4>
        </div>
        <AddressTextContainer />
      </div>
    )
  }
}

export default AddressInputContainer