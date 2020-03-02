import React from 'react'
import TextField from '@material-ui/core/TextField'
import './main.css'

class TextFieldContainer extends React.Component {
  render () {
    return (
      <div className='form-area'>
        <form className='text-form' noValidate autoComplete='off'>
          <TextField id='standard-user-id' label='User ID' />
          <TextField id='standard-password' label='PassWord' />
        </form>
      </div>
    )
  }
}

export default TextFieldContainer
