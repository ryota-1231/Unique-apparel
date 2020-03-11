import React from 'react'
import Items from './parts_of_purchase/items.js'
import OrderItem from './parts_of_purchase/order_item.js'
import ChangeButton from './parts_of_purchase/change_button.js'

export default function PurchaseItemInformation () {
  return (
    <aside className='aside_of_your_order'>
      <h2>お届けの商品</h2>
      {/* order_itemコンポーネントの呼び出し */}
      <OrderItem />
      <section className='section_image_area'>
        <h3>商品</h3>
        {/* itemsコンポーネントの呼び出し */}
        <Items />
        {/* change_buttonコンポーネントの呼び出し */}
        <ChangeButton />
      </section>
      <section className='sipping_fee_area'>
        <h3>送料</h3>
        <p className='payment_amount'>¥ 210</p>
      </section>
    </aside>
  )
}
