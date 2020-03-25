import React from 'react'
import Link from '@material-ui/core/Link'

export default function Items () {
  // 最終的にはDBからitems.allとかで持ってくる予定
  const items = [
    { name: '商品1', color: 'RED', price: '1000', size: 'S', image: '/static/images/購入商品画像1.png' },
    { name: '商品2', color: 'YELLOW', price: '2000', size: 'M', image: '/static/images/購入商品画像2.png' },
    { name: '商品3', color: 'GREEN', price: '2000', size: 'L', image: '/static/images/購入商品画像3.png' }
  ]
  return (
    <div className='items'>
      {items.map((item) =>
        <Item item={item} key={item.name + item.color + item.price + item.size} />)}
    </div>
  )
}

const Item = (props) => {
  const { name, color, price, size, image } = props.item
  return (
    <div className='item_image_area'>
      <Link href='#'><img src={image} className='item_image' alt='アイコン' /></Link>
      <div>
        <p>{name}</p>
        <p>{color}</p>
        <p>¥{size}</p>
      </div>
      <p>¥{price}</p>
    </div>
  )
}
