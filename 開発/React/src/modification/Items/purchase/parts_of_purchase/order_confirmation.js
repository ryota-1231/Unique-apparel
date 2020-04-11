import React from 'react'
import ChangeButton from './/change_button.js'

export default function OrderConfirmation () {
  return (
    <section className='your_order_confirmation'>
      <h3>お届け先</h3>
      <div>
        <p>チームぱぱ様</p>
        <p>住所:〒1510001 東京都渋谷区千駄ヶ谷123-4 コーポ原宿3F</p>
        <p>電話:03-1234-5678</p>
      </div>
      <ChangeButton />
    </section>
  )
}
