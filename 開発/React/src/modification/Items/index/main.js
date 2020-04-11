import React, { Component } from 'react'
import './main.css'
import MenuListComposition from './sidebar'
import Items from './items'

class ItemIndex extends Component {
  constructor (props) {
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
          id: 3,
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

  render () {
    return (
      <div className='contents'>
        {/* ここにヘッダーがある予定 */}
        <img src='/static/images/購入完了画面.png' className='main-image' />
        <div className='main-contents'>
          {/* サイドバーコンポーネントの呼び出し */}
          <MenuListComposition />
          {/* 商品一覧部分の呼び出し */}
          <Items itemData={this.state.items} />
        </div>
        {/* ここにフッターがある予定 */}
      </div>
    )
  }
}

export default ItemIndex
