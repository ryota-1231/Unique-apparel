import React from 'react'

export default function RightDetailArea () {
  return (
    <section>
      <div className='item-detail-space'>
        <div className='info-space-container person'>
          <div className='listing-info-space-l'>
            <p>出品者</p>
          </div>
          <div className='listing-info-space-r'>
            <p>ガースー</p>
            <p>☆4.1</p>
          </div>
        </div>
        <div className='info-space-container category'>
          <div className='listing-info-space-l'>
            <p>カテゴリー</p>
          </div>
          <div className='listing-info-space-r'>
            <p>レディース</p>
            <p>ジャケット＞アウター</p>
            <p>ジャンパー/ブルゾン</p>
          </div>
        </div>
        <div className='info-space-container size'>
          <div className='listing-info-space-l'>
            <p>商品のサイズ</p>
          </div>
          <div className='listing-info-space-r'>
            <p>M</p>
          </div>
        </div>
      </div>
    </section>
  )
}
