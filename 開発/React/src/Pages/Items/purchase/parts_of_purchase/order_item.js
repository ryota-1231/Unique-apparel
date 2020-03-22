import React from 'react'
import ChangeButton from './change_button.js'

export default function OrderItem () {
  return (
    <section className='your_order_item'>
      <h3>お届け日</h3>
      <div>
        <p>指定無し:2月25日~2月27日発送予定</p>
        <p>日時指定:午前中</p>
        <p>即日配送:最短2月24日(月)午前中</p>
      </div>
      <div>
        <p>¥ 0</p>
        <p>¥ 0</p>
        <p>¥ 350</p>
      </div>
      <ChangeButton />
    </section>
  )
}
