import React from 'react';
import PropTypes from 'prop-types'
import Link from '@material-ui/core/Link';


export default function Items() {
  const items = [
    {name: "商品1", amount: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", amount: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", amount: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", amount: "4000", image: "/static/images/購入完了画面.png"},
    {name: "商品1", amount: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", amount: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", amount: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", amount: "4000", image: "/static/images/購入完了画面.png"},
    {name: "商品1", amount: "1000", image: "/static/images/購入完了画面.png"},
    {name: "商品2", amount: "2000", image: "/static/images/購入完了画面.png"},
    {name: "商品3", amount: "3000", image: "/static/images/購入完了画面.png"},
    {name: "商品4", amount: "4000", image: "/static/images/購入完了画面.png"}]
  return (
    <div className="items">
      {items.map((item) =>
        <Item item={item} key={item.name + item.amount} />)}
    </div>
  );
}

Items.propTypes = {
  add: PropTypes.func.isRequirednpm
}

const Item = (props) => {
  const {name, amount, image} = props.item
  return (
    <div className="item">
      <Link href="#"><img src={image} className="item-image" alt="アイコン" /></Link>
      <p>{name}</p>
      <p>¥{amount}</p>
    </div>
  )
}

Item.propTypes = {
  add: PropTypes.func.isRequirednpm
}