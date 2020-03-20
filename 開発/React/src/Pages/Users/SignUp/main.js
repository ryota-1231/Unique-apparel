import React from 'react'
import './main.css'
import MainContainer from './MainContainer'

class UsersSignUp extends React.Component {
  render () {
    return (
      <div id='user-signup-wrapper'>
        <div className='signup-title-area'>
          <h2 className='signup-title'>新規会員登録</h2>
        </div>
        <MainContainer parameter = {this.props}/>
      </div>
    )
  }
}

export default UsersSignUp
