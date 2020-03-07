import React, { Component } from 'react'
import './main.css';
// import { Divider } from '@material-ui/core';
import BasicTextFields from './search';

class TopPages extends Component {
  render () {
    return(
      <div className = 'header'>
        <div className = 'header-logo'>
          <img/>
        </div>
        {/* サーチコンポーネントの呼び出し */}
        <div className = 'item-search'>
          <BasicTextFields/>
        </div>

        
      </div>
      // <div className = 'contents'>
      //   <div className = 'top-image'>
      //       <img src="/static/images/購入完了画面.png" className="main-image" />
      //   </div>
      // </div>
    
    )
  }
}

export default TopPages;