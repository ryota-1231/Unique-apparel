import React from 'react'
// import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import './main.css'
// import Link from '@material-ui/core/Link'
import SignInContainer from './SignInContainer'
import InterFaceContainer from './InterFaceContainer'
import SignUpContainer from './SignUpContainer'

class UsersLogin extends React.Component {
  render () {
    return ( 
      <div className='contents'>
        <div className='content-left'>
          {/* -------------サインインエリア-------------*/}
          <SignInContainer />
           {/* -------------外部連携ボタン-------------*/}
          <InterFaceContainer />
        </div>
        <div className='content-right'>
          <SignUpContainer />
          {/* <h2 className='signup-title'>Join Us!!</h2>
          <Link href='#'><Button variant='contained' className='users-signup-button'>Sing Up</Button></Link> */}
        </div>
      </div>
    )
  }
}

UsersLogin.propTypes = {
  add: PropTypes.func.isRequirednpm
}

export default UsersLogin
