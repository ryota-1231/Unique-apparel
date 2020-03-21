import React from 'react'
import ChangeButton from './change_button.js'

export default function OrderCoupon () {
  return (
    <section className='sipping_fee_area'>
      <p className='payment_type'>クーポン</p>
      <p className='payment_amount'>ご利用可能クーポン:5%オフ</p>
      <ChangeButton />
    </section>
  )
}
