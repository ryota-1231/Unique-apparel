import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export default function Text (props) {
  const labels = props.label
  const text = labels.map((label) => 
    <TextField
      key={label}
      className={props.className}  
      label={label} 
      size={props.size} 
      variant='outlined' 
    />
  )
  return (
    <TextForm noValidate autoComplete='off'>
      {text}
    </TextForm>
  )
}

Text.propTypes = {
  label: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string,
}

const TextForm = styled.form`
  display: flex;
  padding: 8px 10px;
`