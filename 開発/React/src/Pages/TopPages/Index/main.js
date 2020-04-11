import React, { Component } from 'react'
import './main.css'
import MainContainer from '../../../Organisms/TopPage/MainContainer'

class TopPages extends Component {
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

export default TopPages
