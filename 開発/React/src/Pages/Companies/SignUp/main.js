import React from 'react'
import MainContainer from '../../../Organisms/Companies/SignUp/MainContainer'


class CompaniesSignUp extends React.Component {

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

export default CompaniesSignUp