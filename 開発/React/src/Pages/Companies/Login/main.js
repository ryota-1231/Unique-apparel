import React from 'react'
import MainContainer from '../../../Organisms/Companies/Login/MainContainer'

class CompanyLogin extends React.Component {
  componentWillUnmount () {
    console.log('アンマウント！！')
    clearInterval(this.props)
  }

  render () {
    return (
      <MainContainer />
    )
  }
}

export default CompanyLogin
