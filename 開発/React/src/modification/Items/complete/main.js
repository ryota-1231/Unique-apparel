import React, { Component } from 'react'
import './main.css'
import ContainedButtons from './button'

class ItemComplete extends Component {
  render () {
    return (
      <div className='contents'>
        {/* ここにヘッダーがある予定 */}
        <div className='main-contents'>
          <h1>出品が完了しました！</h1>
          <ContainedButtons />
        </div>
        {/* ここにフッターがある予定 */}
      </div>
    )
  }
}

export default ItemComplete
