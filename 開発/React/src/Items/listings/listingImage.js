import React from 'react'

export default function ListingImage () {
  return (
    <section className='listing-image-area'>
      <h3><span>*</span>出品画像</h3>
      <p>最大10枚までアップロードできます</p>
      <div className='image-upload-area'>
        <p>ドラックアンドドロップ</p>
        <p>またはクリックしてファイルをアップロード</p>
      </div>
    </section>
  )
}
