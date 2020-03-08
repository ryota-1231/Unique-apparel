import React from 'react'
import TextField from '@material-ui/core/TextField'
import './main.css'

class SignInTextField extends React.Component {
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

export default SignInTextField
