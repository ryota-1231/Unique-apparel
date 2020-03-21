import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export default function TextBox (props) {
  const labels = props.label
  const text = labels.map((label) =>
    <Text
      key={label}
      className={props.className}
      label={label}
      size={props.size}
      helperText={props.helper}
      variant='outlined'
    />
  )
  return (
    <TextForm noValidate autoComplete='off'>
      {text}
    </TextForm>
  )
}

TextBox.propTypes = {
  label: PropTypes.array,
  className: PropTypes.string,
  size: PropTypes.string,
  helper: PropTypes.string,
}

const TextForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 10px;
`
const Text = styled(TextField)`
  width: 45%;
`