import React from 'react'
import ItemCategory from './itemCategory.js'
import ItemSize from './itemSize.js'
import SampleType from './sampleType.js'

export default function ListingItemStatus () {
  return (
    <section className='listing-item-area'>
      <h3>商品の状態</h3>
      <ItemCategory />
      <ItemSize />
      <SampleType />
    </section>
  )
}
