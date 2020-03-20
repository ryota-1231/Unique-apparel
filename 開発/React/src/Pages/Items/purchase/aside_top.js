import React from 'react'
import OrderConfirmation from './parts_of_purchase/order_confirmation.js'
import OrderPayment from './parts_of_purchase/order_payment.js'
import OrderCoupon from './parts_of_purchase/order_coupon.js'

export default function PurchaseConfirmation () {
  return (
    <aside className='aside_of_your_personal_information'>
      <h1>注文内容の確認</h1>
      {/* order_informationコンポーネントの呼び出し */}
      <OrderConfirmation />
      {/* order_paymentコンポーネントの呼び出し */}
      <OrderPayment />
      {/* order_couponコンポーネントの呼び出し */}
      <OrderCoupon />
    </aside>
  )
}
