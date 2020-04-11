import React from 'react'
import styled from 'styled-components'
import H1 from '../../Atoms/heading/h1'
import Link from '@material-ui/core/Link'

class ItemIndex extends React.Component {
  render () {
    // サーバー連携後改修予定
    const images = [
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg'
    ]

    return (
      <Wrapper>
        <Container>
          {images.map((image, i) =>
            <Contents className={'image_' + i} key={i}>
              {i === 4 ? <Title title='Tops' className={'title_' + i} /> : ''}
              {i === 5 ? <Title title='Bottoms' className={'title_' + i} /> : ''}
              <Link href='#'>
                <Img src={image} key={i} className={'image_' + i} />
              </Link>
            </Contents>
          )}
        </Container>
      </Wrapper>
    )
  }
}

export default ItemIndex

const Wrapper = styled.div`
`
const Container = styled.div`
  display: grid;
  width: 1132px;
  grid-template-rows: 272px 272px;
  grid-template-columns: 208px 208px 208px 208px 300px ;
  margin: 0 auto;
`
const Contents = styled.div`
  height: 100%;
  width: 100%;
  &.image_0 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding: 10px 10px;
  }
  &.image_1 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding: 10px 10px;
  }
  &.image_2 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    padding: 10px 10px;
  }
  &.image_3 {
    grid-row: 1 / 2;
    grid-column: 4 / 5;
    padding: 10px 10px;
  }
  &.image_4 {
    grid-row: 1 / 3;
    grid-column: 5 / 6;
    padding: 10px 10px;
    position: relative;
  }
  &.image_5 {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    padding: 10px 10px;
    position: relative;
  }
  &.image_6 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    padding: 10px 10px;
  }
  &.image_7 {
    grid-row: 2 / 3;
    grid-column: 4 / 5;
    padding: 10px 10px;
  }
`
const Title = styled(H1)`
  font-size: 40px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`
const Img = styled.img`
  width:100%;
  height:100%;
`
