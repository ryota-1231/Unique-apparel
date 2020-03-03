import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './main.css'
import MenuListComposition from './sidebar';
import Items from './items.js';

console.log(Image);

class ItemIndex extends Component {
  render () {
    // 最終的にはDBからitems.allとかで持ってくる予定
    return (
      <div className="contents">
        {/* ここにヘッダーがある予定 */}
        <img src="/static/images/購入完了画面.png" className="main-image" />
        <div className="main-contents">
          {/* サイドバーコンポーネントの呼び出し */}
          <MenuListComposition />
          {/* 商品一覧部分の呼び出し */}
          <Items />
        </div>
        {/* ここにフッターがある予定 */}
      </div>
    )
  }
}

ItemIndex.propTypes = {
  add: PropTypes.func.isRequirednpm
}

export default ItemIndex;