import React from 'react'
// import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link'
import './main.css'
import SignInContainer from './SignInContainer'
// import InterFaceContainer from './InterFaceContainer'
// import SignUpContainer from './SignUpContainer'

class CompanyLogin extends React.Component {
  render () {
    return (
      <div id='company-login-wrapper'>
        <div className='contents'>
          <div className='content-left'>
            {/* -------------サインインエリア------------- */}
            <SignInContainer />
          </div>

        </div>
        <Link href='#' className='user-page-link'>Are you a User?</Link>
      </div>
    )
  }
}

 {/* -------------propsのバリデーション------------- */}
// UsersLogin.propTypes = {
//   add: PropTypes.func.isRequired
// }

export default CompanyLogin
