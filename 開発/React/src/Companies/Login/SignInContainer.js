import React from 'react'
import Link from '@material-ui/core/Link'
import './main.css'
import TextFieldContainer from './TextFieldContainer'
import CheckBoxContainer from './CheckBoxContainer'

class SignInContainer extends React.Component {
  render () {
    return (
      <div className='sign-in-top-area'>
        <h2 className='sign-in-title'>Corporation User</h2>
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
