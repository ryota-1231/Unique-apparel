import React from 'react'
import PropTypes from 'prop-types'
import PhoneNumberTextField from './PhoneNumberTextField'

class PhoneNumberInputContainer extends React.Component {
  render () {
    return (
      <div className='phone-number-area'>
        <div className='phone-number-title-area'>
    <h4 className='phone-number-title'>{this.props.label}</h4>
        </div>
        <PhoneNumberTextField />
      </div>
    )
  }
}

PhoneNumberInputContainer.propTypes = {
  label: PropTypes.string
}

export default PhoneNumberInputContainer
