import React from 'react'
// import Link from '@material-ui/core/Link'
import SignInContainer from './SignInContainer'
import InterFaceContainer from './InterFaceContainer'
import SignUpContainer from './SignUpContainer'
import { Link as RouteLink} from "react-router-dom";

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
            <RouteLink to="/user-signup"><SignUpContainer/></RouteLink>
          </div>
        </div>
        <RouteLink to="/page3">Are you a Company?</RouteLink>
      </div>
    )
  }
}

export default MainContainer;