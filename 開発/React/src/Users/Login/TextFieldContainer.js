import React from 'react'
import './main.css'
import TextField from '@material-ui/core/TextField';

class TextFieldContainer extends React.Component {
  render() {
  return (
    <div className='form-area'>
    <form className='text-form' noValidate autoComplete="off">
      <TextField id="standard-basic" label="User ID" />
      <TextField id="standard-basic" label="PassWord" />
    </form>
    </div>
  );
  }
}

export default TextFieldContainer
