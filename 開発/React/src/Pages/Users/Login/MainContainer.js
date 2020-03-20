import React from 'react'
import PropTypes from 'prop-types'
// import Link from '@material-ui/core/Link'
import SignInContainer from './SignInContainer'
import InterFaceContainer from './InterFaceContainer'
import SignUpContainer from './SignUpContainer'
import { Link, withRouter } from "react-router-dom";

class MainContainer extends React.Component {
  navigate() {
    console.log(this.props.history);
    this.props.history.push("/");
  }
  render () {
    return (
      <div id='user-login-wrapper'>
        <div className='contents'>
          <div className='content-left'>
          {this.props.children}
            {/* -------------サインインエリア------------- */}
            <SignInContainer />
            {/* -------------外部連携ボタン------------- */}
            <InterFaceContainer />
          </div>
          <div className='content-right'>
            {/* -------------サインアップエリア------------- */}
            <Link to="page1/:id" onClick={this.navigate.bind(this)}><SignUpContainer/></Link>
          </div>
        </div>
        {/* <Link href='#' className='company-page-link'>Are you a Company?</Link> */}
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object
}

export default withRouter(MainContainer);
