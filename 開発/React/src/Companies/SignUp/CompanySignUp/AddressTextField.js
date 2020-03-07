import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class AddressTextField extends React.Component {
  render () {
    return (
      <form id='address-form' noValidate autoComplete='off'>
        <div id='address-auto-input'>
          <p id='address-prefectures-input'>{this.props.prefectures}</p>
          <p id='address-city-input'>{this.props.city}</p>
        </div>
        <TextField id='address-input' className='full-width' label='住所' style={{ margin: 8 }} margin='normal' variant='outlined' size='small' />
      </form>
    )
  }
}

AddressTextField.propTypes = {
  prefectures: PropTypes.string,
  city: PropTypes.string
}

export default AddressTextField
