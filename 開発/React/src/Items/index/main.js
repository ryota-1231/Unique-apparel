import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './main.css'
import Link from '@material-ui/core/Link';
import MenuListComposition from './sidebar';

console.log(Image);

class ItemIndex extends Component {
  render () {
    const items = [
      {name: "商品1", amount: "1000"},
      {name: "商品2", amount: "2000"}]
    return (
      <div className="contents">
        {/* <img src="#">メイン画面</img> */}
        <div className="main-contents">
          <div className="sidebar">
            <h1 className="category">CATEGORY</h1>
            <MenuListComposition />
          </div>
          <div className="items">
            {items.map((item) =>
              <Item item={item} key={item.name + item.amount} />)}
          </div>
        </div>
      </div>
    )
  }
}

ItemIndex.propTypes = {
  add: PropTypes.func.isRequirednpm
}

const Item = (props) => {
  const {name, amount} = props.item
  return (
    <div>
      <Link href="#"><img src="./images/購入完了画面.png"  alt="アイコン" /></Link>
      <p>{name}</p>
      <p>¥{amount}</p>
    </div>
  )
}

Item.propTypes = {
  add: PropTypes.func.isRequirednpm
}

export default ItemIndex;