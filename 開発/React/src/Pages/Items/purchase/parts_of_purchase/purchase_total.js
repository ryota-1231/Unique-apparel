import React from 'react'
import Link from '@material-ui/core/Link'

export default function PurchaseTotal () {
  return (
    <section>
      <p>商品代</p>
      <p>クーポン</p>
      <p>送料</p>
      <p>支払い手数料</p>
      <p className='total_amount'>合計(税込み)</p>
      <Link href='#'>返品について</Link>
    </section>
  )
}
