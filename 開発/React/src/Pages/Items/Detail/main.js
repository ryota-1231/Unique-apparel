import React from 'react'
import MainContainer from '../../../Organisms/Items/Details/MainContainer'


class ItemDetails extends React.Component {
  
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

export default ItemDetails