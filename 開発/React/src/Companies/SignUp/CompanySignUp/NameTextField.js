import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class NameTextField extends React.Component {
  render () {
    return (
      <form id='name-form' noValidate autoComplete='off'>
        <TextField id='family-name' label={this.props.leftLabel} variant='outlined' size='small'/>
        <TextField id='family-name' label={this.props.rightLabel}  variant='outlined' size='small'/>
      </form>
    )
  }
}

NameTextField.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
}

export default NameTextField

