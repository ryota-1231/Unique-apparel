import React from 'react'
import DisplayArea from '../../Organisms/ItemDetail/DetailDisplayArea'

export default function RightDetailArea () {
  return (
    <section>
      <div className='item-detail-space'>
        <DisplayArea title='出品者' description={['ガースー', '☆4.1']} />
        <DisplayArea title='カテゴリー' description={['レディース', 'ジャケット＞アウター', 'ジャンパー/ブルゾン']} />
        <DisplayArea title='商品のサイズ' description={['M']} />
      </div>
    </section>
  )
}
