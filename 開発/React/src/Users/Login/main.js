import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import './main.css'
import Link from '@material-ui/core/Link'
import TextFieldContainer from './TextFieldContainer'
import CheckBoxContainer from './CheckBoxContainer'
import InterFaceContainer from './InterFaceContainer'

class UsersLogin extends React.Component {
  render () {
    return (
      <div className='contents'>
        <div className='content-left'>
          <div className='sign-in-top-area'>
            <h2 className='sign-in-title'>Sign In To ...</h2>
            {/* -------------テキストボックス-------------*/}
            <TextFieldContainer />
            {/* -------------チェックボックス・ラベル-------------*/}
            <div className='check-area'>
              <CheckBoxContainer />
              <Button variant='contained' id='users-signin-button' color="secondary" href='#'>Sing In!</Button>
            </div>
              <Link href='#' className='forget-password'>Forget PassWord?</Link>
          </div>
          <div className='sign-in-border-area'>
            <p className='sign-in-border-desc'><span>or</span></p>
          </div>
           {/* -------------外部連携ボタン-------------*/}
          <InterFaceContainer />
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
