import React, { Component } from 'react'
import './itemDetail/show.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);
import H1 from '../../Atoms/heading/h1'
import LeftImageArea from './itemDetail/leftImageArea.js.js'
import RightDetailArea from './itemDetail/rightDetailArea.js.js'
import ItemPrice from './itemDetail/itemPrice.js.js'
import ItemDescription from './itemDetail/itemDescription.js.js'
import ButtonArea from './itemDetail/likeButton.js.js'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SocialButton from './itemDetail/socialButton'
import OtherListingItem from './itemDetail/otherListingItem'

class ItemDetail extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにロゴを配置する */}
        <div className='main-contents'>
          {/* ①商品名 */}
          <H1 title='お買い得商品！'></H1>
          <section className='item-detail-container'>
            {/* ②商品画像 */}
            <LeftImageArea />
            {/* ③出品会社名④カテゴリー⑤商品サイズ */}
            <RightDetailArea />
          </section>
          {/* ⑥商品の値段 */}
          <ItemPrice/>
          {/* ⑦購入画面遷移ボタン */}
          <Button variant='contained' color='secondary' className='buying-button'>購入画面に進む</Button>
          {/* ⑧商品説明 */}
          <ItemDescription />
          {/* ⑨いいねボタン */}
          <ButtonArea />
          {/* ⑩コメント */}
          <TextField id='comment-input' label='コメント' fullWidth variant='outlined' />
          {/* ⑪SNS */}
          <SocialButton />
          {/* ⑫出品会社のその他の商品・会社情報ページ遷移ボタン⑬その他の商品画像⑭その他の商品名⑮その他の商品額⑯その他商品のいいね */}
          <OtherListingItem />
        </div>
      </div>
    )
  }
}

export default ItemDetail
