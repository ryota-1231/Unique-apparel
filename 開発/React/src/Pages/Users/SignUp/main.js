import React from 'react'
import MainContainer from '../../../Organisms/Users/SignUp/MainContainer'


class UsersSignUp extends React.Component {

  componentWillUnmount() {
    console.log('アンマウント！！')
    clearInterval(this.props);
  }
  
  render () {
    return (
      <MainContainer />
    )
  }
}

export default UsersSignUp