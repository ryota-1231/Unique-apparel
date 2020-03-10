import React, { Component } from 'react'
import './main.css'
import ListingImage from './listingImage.js'
import ListingItemInfo from './listingItem.js'
import ListingItemStatus from './listingStatus.js'
import AboutDelivery from './aboutDelivery.js'
import SellingPrice from './sellingPrice.js'
import SellingEditButton from './sellingEditButton.js'

class ListingEdit extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにロゴを配置する */}
        <div className='main-contents'>
          <h1>商品情報の編集</h1>
          <ListingImage />
          <ListingItemInfo />
          <ListingItemStatus />
          <AboutDelivery />
          <SellingPrice />
          <SellingEditButton />
        </div>
      </div>
    )
  }
}

export default ListingEdit
