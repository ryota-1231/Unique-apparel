import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

export default function CheckBox (props){

  return (
    <FormControl component='fieldset'>
      <FormGroup aria-label='position' row>
        <FormControlLabel
          className={props.className}
          value={props.value}
          control={<Checkbox color='primary' />}
          label={props.label}
          labelPlacement={props.place}
        />
      </FormGroup>
    </FormControl>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  place: PropTypes.string
}