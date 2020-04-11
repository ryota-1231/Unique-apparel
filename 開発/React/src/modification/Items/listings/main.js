import React, { Component } from 'react'
import './main.css'
import ListingImage from './listingImage.js'
import ListingItemInfo from './listingItem.js'
import ListingItemStatus from './listingStatus.js'
import AboutDelivery from './aboutDelivery.js'
import SellingPrice from './sellingPrice.js'
import SellingButton from './sellingButton.js'

class ListingNew extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにロゴを配置する */}
        <div className='main-contents'>
          <h1>商品の情報を入力</h1>
          <ListingImage />
          <ListingItemInfo />
          <ListingItemStatus />
          <AboutDelivery />
          <SellingPrice />
          <SellingButton />
        </div>
      </div>
    )
  }
}

export default ListingNew
