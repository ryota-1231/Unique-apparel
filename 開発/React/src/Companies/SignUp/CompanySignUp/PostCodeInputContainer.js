import React from 'react'
import PropTypes from 'prop-types'
import AddressGetApi from './AddressGetApi'

class PostCodeInputContainer extends React.Component {
  render () {
    return (
      <div className='postcode-area'>
        <div className='postcode-title-area'>
          <h4 className='address-title'>{this.props.title}</h4>
        </div>
        <AddressGetApi />
      </div>
    )
  }
}

PostCodeInputContainer.propTypes = {
  title: PropTypes.string
}

export default PostCodeInputContainer
