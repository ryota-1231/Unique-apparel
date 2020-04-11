import React, { Component } from 'react'
import './main.css';
import BasicTextFields from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Links from './category';


class TopPages extends Component {

  componentWillUnmount() {
    console.log('アンマウント！！')
    clearInterval(this.props);
  }

  render () {
    
    return(
      <div className = 'container'>
      <div className = 'header'>
        {/* サーチコンポーネントの呼び出し */}
          <BasicTextFields/>
          
        <div className = 'notification'>
          <FontAwesomeIcon icon={faComment} />
        </div>
        </div>
        <div className='contents'>
          {/* メイン画像 */}
          <div className = 'main-image'>
            
          </div>
          {/* コンセプト */}
          <div className='concept'>
            <h1 className='title'>コンセプトタイトル</h1>
            <p className='description'>テキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
          <div className='main'>
            <h2>NEW ARRIVALS</h2>
            {/* カテゴリーコンポーネントの呼び出し */}
            <Links />
            <div className='main-container'>
            {/* メンズカテゴリ */}
            <div className='mens-category'>
              <div className="items">
                <img className='item' src='/static/images/mens_item.jpg' title='メンズ商品画像1'/>
                <img className='item' src='/static/images/mens_item.jpg' title='メンズ商品画像2'/>
                <img className='item' src='/static/images/mens_item.jpg' title='メンズ商品画像3'/>
                <img className='item' src='/static/images/mens_item.jpg' title='メンズ商品画像4'/>
              </div>
              <div className='login'>
                <img className='login-item' src='/static/images/mens.jpg' title='メンズ画像'/>
                  <div className='login-title'>
                    <p>Mens</p>
                  </div>
                <img className='item2' src='/static/images/mens_item.jpg' title='メンズ商品画像3'/>
                <img className='item2' src='/static/images/mens_item.jpg' title='メンズ商品画像4'/>
              </div>
            </div>
            
            {/* レディースカテゴリ */}
            <div className='women-category'>
              <div className='items'>
              <img className='item' src='/static/images/women_item.jpg' title='レディース商品画像1'/>
              <img className='item' src='/static/images/women_item.jpg' title='レディース商品画像2'/>
              <img className='item' src='/static/images/women_item.jpg' title='レディース商品画像3'/>
              <img className='item' src='/static/images/women_item.jpg' title='レディース商品画像3'/>
              </div>
              <div className='login'>
                <img className='login-item' src='/static/images/women.jpg' title='メンズ画像'/>
                <div className='login-title'>
                <p>Women</p>
                </div>
                <img className='item2' src='/static/images/women_item.jpg' title='メンズ商品画像3'/>
                <img className='item2' src='/static/images/women_item.jpg' title='メンズ商品画像4'/>
              </div>
            </div>
            {/* キッズカテゴリ */}
            <div className='kids-category'>
              <p>Kids</p>
              <img src='../Image/kids.jp' title='キッズ画像'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像1'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像2'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像3'/>
              </div>
            {/* 全てのカテゴリ */}
            <div className='all-category'>
              <p>All</p>
              <img src='../Image/kids.jp' title='キッズ画像'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像1'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像2'/>
              <img src='../Image/kids_item.jp' title='キッズ商品画像3'/>
              </div>
            </div>
        </div>
      </div>

      

    
    )
  }
}

export default TopPages;
