import React, { Component } from 'react'
import './main.css'
import MenuListComposition from './sidebar'
import Items from './items.js'
import Header from '../../Template/header';
import Footer from '../../Template/footer';

class ItemIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          name: 'test商品1',
          price: '1000',
          images: '/static/images/mens.jpg'
        },
        {
          id: 2,
          name: 'test商品2',
          price: '2000',
          images: '/static/images/mens.jpg'
        },
        {
          id:3,
          name: 'test商品3',
          price: '3000',
          images: '/static/images/mens.jpg'
        }
      ]
    }
  }

  // componentDidMount() {
  //   const axios = require('axios');
  //   axios.get('http://localhost:3001/items')
  //   .then((results) => {
  //     this.setState({items: results.data})
  //   })
  // }

  componentWillUnmount() {
    console.log('アンマウント！！')
    clearInterval(this.props);
  }

  render () {
    return (
      <div className='contents'>
        <Header />
        <img src='/static/images/購入完了画面.png' className='main-image' />
        <div className='main-contents'>
          {/* サイドバーコンポーネントの呼び出し */}
          <MenuListComposition />
          {/* 商品一覧部分の呼び出し */}
          <Items itemData={this.state.items} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default ItemIndex
