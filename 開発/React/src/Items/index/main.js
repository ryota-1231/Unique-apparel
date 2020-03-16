import React, { Component } from 'react'
import './main.css'
import MenuListComposition from './sidebar'
import Items from './items.js'
import Header from '../../header';

class ItemIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const axios = require('axios');
    axios.get('http://localhost:3001/items')
    .then((results) => {
      this.setState({items: results.data})
    })
  }

  render () {
    return (
      <div className='contents'>
        {/* ここにヘッダーがある予定 */}
        <Header />
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
