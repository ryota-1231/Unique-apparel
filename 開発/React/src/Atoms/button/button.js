import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

export default function Btn (props) {
  return (
    <Button
      variant={props.type}
      color={props.color}
      className={props.className}
    >
      {props.value}
    </Button>

  )
}

Btn.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string
}
