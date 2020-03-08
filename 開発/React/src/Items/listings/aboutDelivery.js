import React from 'react'
import DeliveryBurden from './deliveryBurden.js'
import RegionalOfDelivery from './regionalOfDelivery.js'
import DeliveryDays from './deliveryDays.js'

export default function ListingItemStatus () {
  return (
    <section className='listing-item-area'>
      <h3>配送について</h3>
      <DeliveryBurden />
      <RegionalOfDelivery />
      <DeliveryDays />
    </section>
  )
}
