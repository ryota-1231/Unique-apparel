import React, { Component } from 'react'
import './main.css'
import PurchaseConfirmation from './aside_top'
import PurchaseItemInformation from './aside_bottom'
import PurchaseFixing from './side_area'

class ItemPurchase extends Component {
  render () {
    return (
      <div className='contents'>
        <div className='main'>
          {/* aside_topコンポーネントの呼び出し */}
          <PurchaseConfirmation />
          {/* aside_bottomコンポーネントの呼び出し */}
          <PurchaseItemInformation />
        </div>
        <div className='side'>
          {/* side_areaコンポーネントの呼び出し */}
          <PurchaseFixing />
        </div>
      </div>
    )
  }
}

export default ItemPurchase
