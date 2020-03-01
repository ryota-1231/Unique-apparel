import React from 'react'
import './main.css'
import Link from '@material-ui/core/Link'
import TextFieldContainer from './TextFieldContainer'
import CheckBoxContainer from './CheckBoxContainer'

class SignInContainer extends React.Component {
  render () {
    return (
      <div className='sign-in-top-area'>
        <h2 className='sign-in-title'>Sign In To ...</h2>
        {/* -------------テキストボックス------------- */}
        <TextFieldContainer />
        {/* -------------チェックボックス・ラベル------------- */}
        <CheckBoxContainer />
        <Link href='#' className='forget-password'>Forget PassWord?</Link>
      </div>
    )
  }
}

export default SignInContainer
