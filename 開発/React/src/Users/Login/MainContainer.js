import React from 'react'
// import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link'
import SignInContainer from './SignInContainer'
import InterFaceContainer from './InterFaceContainer'
import SignUpContainer from './SignUpContainer'

class MainContainer extends React.Component {
  render () {
    return (
      <div id='user-login-wrapper'>
        <div className='contents'>
          <div className='content-left'>
            {/* -------------サインインエリア------------- */}
            <SignInContainer />
            {/* -------------外部連携ボタン------------- */}
            <InterFaceContainer />
          </div>
          <div className='content-right'>
            {/* -------------サインアップエリア------------- */}
            <SignUpContainer />
          </div>
        </div>
        <Link href='#' className='company-page-link'>Are you a Company?</Link>
      </div>
    )
  }
}

// UsersLogin.propTypes = {
//   add: PropTypes.func.isRequired
// }

export default MainContainer
