import React from 'react'
import PostCodeTextField from './PostCodeTextField'

class PostCodeInputContainer extends React.Component {
  render () {
    return (
      <div className='postcode-area'>
        <div className='postcode-title-area'>
          <h4 className='postcode-title'>郵便番号</h4>
        </div>
        <PostCodeTextField />
      </div>
    )
  }
}

export default PostCodeInputContainer