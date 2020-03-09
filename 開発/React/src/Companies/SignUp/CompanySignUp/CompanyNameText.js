import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class CompanyNameText extends React.Component {
  render () {
    return (
      <form id='company-name-form' noValidate autoComplete='off'>
        <TextField className='full-width' label={this.props.label} variant='outlined' size='small' />
      </form>
    )
  }
}

CompanyNameText.propTypes = {
  label: PropTypes.string
}

export default CompanyNameText
