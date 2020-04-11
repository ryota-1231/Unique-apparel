import React, { Component } from 'react'
import './main.css'
import FormPropsTextFields from './sidebar'
import Items from '../index/main'

class ItemSearch extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにヘッダーがある予定 */}
        <img src='/static/images/購入完了画面.png' className='main-image' />
        <div className='main-contents'>
          {/* サイドバーコンポーネントの呼び出し */}
          <FormPropsTextFields />
          {/* 商品一覧部分の呼び出し */}
          <Items />
        </div>
        {/* ここにフッターがある予定 */}
      </div>
    )
  }
}

export default ItemSearch
