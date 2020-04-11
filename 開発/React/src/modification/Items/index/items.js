import React from 'react'
// import Link from '@material-ui/core/Link'
import PropTypes from 'prop-types'
// import ItemsShow from './../show'
import { Link as RouteLink } from 'react-router-dom'

class Items extends React.Component {
  render () {
    return (
      <div>
        <div className='items'>
          {this.props.itemData.map((item) =>
            <RouteLink to={'/items/show/' + item.id} key={item.id}>
              <Item item={item} key={item.id} />
            </RouteLink>
          )}
        </div>
      </div>
    )
  }
}

const Item = (props) => {
  const { name, price, images } = props.item
  // const url = `/static/images/${images[0].image_url}`
  const url = `${images}`
  return (
    <div className='item'>
      {/* <Link href='#'><img src={ url } className='item-image' alt='アイコン' /></Link> */}
      <img src={url} className='item-image' alt='アイコン' />
      <p>{name}</p>
      <p>¥{price}</p>
    </div>
  )
}

Items.propTypes = {
  itemData: PropTypes.array
}

Item.propTypes = {
  item: PropTypes.object
}
export default Items
