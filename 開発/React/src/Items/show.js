import React, { Component } from 'react'
import './itemDetail/show.css'
import LeftImageArea from './itemDetail/leftImageArea.js'
import RightDetailArea from './itemDetail/rightDetailArea.js'
import ItemPrice from './itemDetail/itemPrice.js'
import ItemDescription from './itemDetail/itemDescription.js'
import LikeButton from './itemDetail/likeButton.js'
import InappropriateButton from './itemDetail/inappropriateButton.js'
import Button from '@material-ui/core/Button'

class ItemDetail extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにロゴを配置する */}
        <div className='main-contents'>
          <h1>一点ものにつき早いもの勝ち！メンズTシャツ</h1>
          <article className='item-detail-container'>
            <LeftImageArea />
            <RightDetailArea />
          </article>
          <article className='item-price-container'>
            <ItemPrice/>
            <Button variant='contained' color='secondary' className='buying-button'>
              購入画面に進む
            </Button>
          </article>
          <article>
            <ItemDescription/>
            <LikeButton/>
            <InappropriateButton/>
          </article>
        </div>
      </div>
    )
  }
}

export default ItemDetail
