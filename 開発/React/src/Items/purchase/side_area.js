import React from 'react'
import Button from '@material-ui/core/Button'
import PurchaseTotal from './parts_of_purchase/purchase_total.js'
import EachPrice from './parts_of_purchase/each_price.js'

export default function PurchaseFixing () {
  return (
    <aside>
      <Button variant='contained' color='primary' disableElevation className='purchase_button'>
        購入確定する
      </Button>
      <section className='purchase_total_area'>
        <PurchaseTotal />
        <EachPrice />
      </section>
    </aside>
  )
}
