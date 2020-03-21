import React from 'react'
import ChangeButton from './change_button.js'

export default function OrderPayment () {
  return (
    <section className='payment_section_area'>
      <h3>支払い方法</h3>
      <p className='payment_type'>クレジットカード</p>
      <p className='payment_amount'>¥ 0</p>
      <ChangeButton />
    </section>
  )
}
