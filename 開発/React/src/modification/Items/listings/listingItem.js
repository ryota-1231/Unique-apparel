import React from 'react'
import ListingForm from './listingForm.js'
import ListingDescriptionForm from './listingDescription.js'

export default function ListingItemInfo () {
  return (
    <section className='listing-item-area'>
      <ListingForm />
      <ListingDescriptionForm />
    </section>
  )
}
