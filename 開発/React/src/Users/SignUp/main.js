import React from 'react'
// import PropTypes from 'prop-types'
// import Link from '@material-ui/core/Link'
import './main.css'
import MainContainer from './MainContainer'

// import SignInContainer from './SignInContainer'
// import InterFaceContainer from './InterFaceContainer'
// import SignUpContainer from './SignUpContainer'


class UsersSignUp extends React.Component {
  render () {
    return (
      <div id='user-signup-wrapper'>
        <div className="signup-title-area">
          <h2 className="signup-title">新規会員登録</h2>
        </div>
        <MainContainer />
      </div>
    )
  }
}

 {/* -------------propsのバリデーション------------- */}
// UsersLogin.propTypes = {
//   add: PropTypes.func.isRequired
// }

export default UsersSignUp
