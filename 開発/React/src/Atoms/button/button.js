import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

export default function Btn (props) {
  return (
    <Button 
      variant="outlined" 
      color="primary">
      {props.btn}</Button>
    
  )
}

Btn.propTypes = {
  btn: PropTypes.string,
}

