import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import './main.css'
import Link from '@material-ui/core/Link'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextFieldContainer from './TextFieldContainer'

class UsersLogin extends React.Component {
  render () {
    return (
      <div className='contents'>
        <div className='content-left'>
          <div className='sign-in-top-area'>
            <h2 className='sign-in-title'>Sign In To ...</h2>
            {/* <input id='user-id' className='textbox' placeholder='User ID' />
            <input id='user-password' className='textbox' placeholder='PassWord' /> */}
            <TextFieldContainer />
            <div className='check-area'>
              {/* -------------チェックボックス・ラベル-------------*/}
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                      value="end"
                      control={<Checkbox color="primary" />}
                      label="Remember Me?"
                      labelPlacement="end"
                    />
                  </FormGroup>
                </FormControl>
              <Link href='#'><Button variant='contained' className='users-signin-button'>Sing In!</Button></Link>
            </div>
            <Link href='#' className='forget-password'>Forget PassWord?</Link>
          </div>
          <div className='sign-in-border-area'>
            <p className='sign-in-border-desc'><span>or</span></p>
          </div>
          <div className='sign-in-bottom-area'>
            <Button variant="outlined" id='google-btn' className='btn'>Google Account</Button>
            <Button variant="outlined" color="secondary" id='instagram-btn' className='btn' href='#'>Instagram Account</Button>
            <Button variant="outlined" color="primary" id='twitter-btn' className='btn' href='#'>Twitter Account</Button>
          </div>
        </div>
        <div className='content-right'>
          <h2 className='signup-title'>Join Us!!</h2>
          <Link href='#'><Button variant='contained' className='users-signup-button'>Sing Up</Button></Link>
        </div>
      </div>
    )
  }
}

UsersLogin.propTypes = {
  add: PropTypes.func.isRequirednpm
}

export default UsersLogin
