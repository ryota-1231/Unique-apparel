import React from 'react'
import MainContainer from '../../../Organisms/Users/MyPage/MainContainer'


class UsersMyPage extends React.Component {

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

export default UsersMyPage
