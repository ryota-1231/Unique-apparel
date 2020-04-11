import React, { Component } from 'react'
import './itemDetail/show.css'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import H1 from '../../Atoms/heading/h1'
import LeftImageArea from './itemDetail/leftImageArea'
import RightDetailArea from './itemDetail/rightDetailArea'
import ItemPrice from './itemDetail/itemPrice'
import ItemDescription from './itemDetail/itemDescription'
import ButtonArea from './itemDetail/likeButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SocialButton from './itemDetail/socialButton'
import OtherListingItem from './itemDetail/otherListingItem'
library.add(fab, fas, far)

class ItemDetail extends Component {
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

  render () {
    return (
      <div className='contents'>
        {/* ここにロゴを配置する */}
        <div className='main-contents'>
          {/* ①商品名 */}
          <H1 title='お買い得商品！' />
          <section className='item-detail-container'>
            {/* ②商品画像 */}
            <LeftImageArea />
            {/* ③出品会社名④カテゴリー⑤商品サイズ */}
            <RightDetailArea />
          </section>
          {/* ⑥商品の値段 */}
          <ItemPrice />
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

ItemDetail.propTypes = {
  match: PropTypes.object,
  itemData: PropTypes.object
}

export default ItemDetail
