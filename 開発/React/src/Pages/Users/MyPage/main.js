import React from 'react'
import './main.css'
import H1 from '../../../Atoms/heading/h1'
import MainContainer from '../../../Organisms/Users/MainContainer'


class UsersMyPage extends React.Component {
  render () {
    return (
      <div id='user-signup-wrapper'>
        <H1 title='〇〇様  登録情報' />
        <MainContainer />
      </div>
    )
  }
}

export default UsersMyPage
