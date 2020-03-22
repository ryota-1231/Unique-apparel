import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import TextField from '@material-ui/core/TextField'
library.add(fab, fas, far);
import H1 from '../../../Atoms/heading/h1'
import ImageDetails from '../../../Molecules/ImageDetails'
import DetailDisplay from './DetailDisplay'
import ItemPrice from '../../../Molecules/itemPrice'
import ItemDescription from './itemDescription'
import LikeBtn from '../../../Atoms/input/likeButton'
// import TextField from '@material-ui/core/TextField'
import Button from '../../../Atoms/button/button'
import SocialButton from '../../../Molecules/SNSButton'
import OtherListingItem from './otherListingItem'


class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          name: 'test商品1',
          price: '1000',
          images: [
            '/static/images/mens.jpg',
            '/static/images/mens.jpg',
            '/static/images/mens.jpg',
            '/static/images/mens.jpg',
            '/static/images/mens.jpg',
            '/static/images/mens.jpg',
          ]
        }
      ]
    }
  }

  componentWillUnmount() {
    console.log('アンマウント！！')
    clearInterval(this.props);
    clearInterval(this.state);
  }

  render () {
    return (
      <Wrapper>
        {/* ここにロゴを配置する */}
          {/* ①商品名 */}
          <H1 title='お買い得商品！'/>
          <Container>
            {/* ②商品画像 */}
            <ImageDetails items={this.state.items[0]} />
            {/* ③出品会社名④カテゴリー⑤商品サイズ */}
            <DetailDisplay />
          </Container>
          {/* ⑥商品の値段 */}
          <ItemPrice price={this.state.items[0].price}/>
          {/* ⑦購入画面遷移ボタン */}
          <Btn type='contained' color='secondary' value='購入画面に進む'/>
          {/* ⑧商品説明 */}
          <ItemDescription />
          {/* ⑨いいねボタン */}
          <Content>
             <LikeBtn />
          </Content>
          {/* ⑩コメント */}
          <TextField id='comment-input' label='コメント' fullWidth variant='outlined' />
          {/* ⑪SNS */}
          <SocialButton />
          {/* ⑫出品会社のその他の商品・会社情報ページ遷移ボタン⑬その他の商品画像⑭その他の商品名⑮その他の商品額⑯その他商品のいいね */}
          <OtherListingItem />
      </Wrapper>
    )
  }
}

MainContainer.propTypes = {
  match: PropTypes.object,
  itemData: PropTypes.object
}

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`

const Content = styled.div`
  text-align: right;
`

const Btn = styled(Button)`
  width: 100%;
  height: 60px;
`

export default MainContainer
