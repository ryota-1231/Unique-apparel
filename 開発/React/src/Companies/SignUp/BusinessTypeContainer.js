import React from 'react'
import BusinessRadioButton from './BusinessRadioButton'

class BusinessTypeContainer extends React.Component {
  render () {
    return (
      <div className='business-type-area'>
        <div className='business-type-title-area'>
          <h4 className='business-type-title'>事業形態</h4>
        </div>
        <BusinessRadioButton />
      </div>
    )
  }
}

export default BusinessTypeContainer
