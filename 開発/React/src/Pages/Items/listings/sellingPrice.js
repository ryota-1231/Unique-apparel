import React from 'react'
import YourDecidedPrice from './yourDecidedPrice.js'
import SalesProfit from './salesProfit.js'

export default function ListingItemStatus () {
  return (
    <section className='listing-item-area'>
      <h3>販売価格</h3>
      <p>(300~9,999,9999)</p>
      <YourDecidedPrice />
      <div className='sales-fee-area'>
        <p>販売手数料（10%）</p>
        <p>¥1,000</p>
      </div>
      <SalesProfit />
    </section>
  )
}
