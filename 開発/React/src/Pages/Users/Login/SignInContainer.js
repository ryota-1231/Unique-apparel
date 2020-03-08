import React from 'react'
import Link from '@material-ui/core/Link'
import './main.css'
import SignInTextField from './SignInTextField'
import SignInCheckBox from './SignInCheckBox'

class SignInContainer extends React.Component {
  render () {
    return (
      <div className='sign-in-top-area'>
        <h2 className='sign-in-title'>Sign In To ...</h2>
        {/* -------------テキストボックス------------- */}
        <SignInTextField />
        {/* -------------チェックボックス・ラベル------------- */}
        <SignInCheckBox />
        <Link href='#' className='forget-password'>Forget PassWord?</Link>
      </div>
    )
  }
}

export default SignInContainer
