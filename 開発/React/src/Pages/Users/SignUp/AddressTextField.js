import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

class AddressTextField extends React.Component {
  render () {
    return (
      <form id='address-form' noValidate autoComplete='off'>
        <div id='address-auto-input'>
          <p id='address-prefectures-input'>{this.props.prefectures}</p>
          <p id='address-city-input'>{this.props.city}</p>
        </div>
        <TextField id='address-input' label='住所' style={{ margin: 8 }} margin='normal' variant='outlined' />
      </form>
    )
  }
}

AddressTextField.propTypes = {
  prefectures: PropTypes.string,
  city: PropTypes.string
}

export default AddressTextField
