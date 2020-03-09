import React from 'react'
import TextField from '@material-ui/core/TextField'
import './main.css'

class TextFieldContainer extends React.Component {
  render () {
    return (
      <div className='form-area'>
        <form className='text-form' noValidate autoComplete='off'>
          <TextField id='Outlined-company-id' label='Company ID' variant="outlined" />
          <TextField id='Outlined-password' label='PassWord' variant="outlined" />
        </form>
      </div>
    )
  }
}

export default TextFieldContainer
