import React from 'react'
import Link from '@material-ui/core/Link'

class Items extends React.Component {
  render () {
    return (
      <div className='items'>
        {this.props.itemData.map((item) =>
          <Item item={item} key={item.id} />)}
      </div>
    )
  }
}

const Item = (props) => {
  const { name, price, images } = props.item
  const url = `/static/images/${images[0].image_url}`
  return (
    <div className='item'>
      <Link href='#'><img src={ url } className='item-image' alt='アイコン' /></Link>
      <p>{name}</p>
      <p>¥{price}</p>
    </div>
  )
}


export default Items
