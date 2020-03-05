import React from 'react';
import Link from '@material-ui/core/Link';


export default function Items() {
  // 最終的にはDBからitems.allとかで持ってくる予定
  const items = [
    {name: "商品1", price: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", price: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", price: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", price: "4000", image: "/static/images/購入完了画面.png"},
    {name: "商品1", price: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", price: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", price: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", price: "4000", image: "/static/images/購入完了画面.png"},
    {name: "商品1", price: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", price: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", price: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", price: "4000", image: "/static/images/購入完了画面.png"}]
  return (
    <div className="items">
      {items.map((item) =>
        <Item item={item} key={item.name + item.price} />)}
    </div>
  );
}

const Item = (props) => {
  const {name, price, image} = props.item
  return (
    <div className="item">
      <Link href="#"><img src={image} className="item-image" alt="アイコン" /></Link>
      <p>{name}</p>
      <p>¥{price}</p>
    </div>
  )
}