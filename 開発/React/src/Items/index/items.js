import React from 'react'
import Link from '@material-ui/core/Link'

class Items extends React.Component {
  render () {
    return (
      <div className='items'>
        {this.props.itemData.map((item) =>
          <Item item={item} key={item.name + item.price} />)}
      </div>
    )
  }
}

const Item = (props) => {
  const { name, price, image } = props.item
  return (
    <div className='item'>
      <Link href='#'><img src={image} className='item-image' alt='アイコン' /></Link>
      <p>{name}</p>
      <p>¥{price}</p>
    </div>
  )
}

export default Items