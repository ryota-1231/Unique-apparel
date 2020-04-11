import React from 'react'
import styled from 'styled-components'
import H1 from '../../Atoms/heading/h1'
import Pagination from '../../Atoms/pagination/pagination'
import Link from '@material-ui/core/Link'

class History extends React.Component {
  render () {
    // サーバー連携後改修予定
    const images = [
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg',
      '/static/images/topPage_sample.jpg'
    ]
    return (
      <Wrapper>
        <H1 title='History' />
        <Container>
          {images.map((image, i) =>
            <Contents className={'image_' + i} key={i}>
              <Link href='#'>
                <Img src={image} key={i} className={'image_' + i} />
              </Link>
            </Contents>
          )}
        </Container>
        <Page />
      </Wrapper>
    )
  }
}

export default History

const Wrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`
const Container = styled.div`
  display: grid;
  width: 1040px;
  grid-template-rows: 272px;
  grid-template-columns: 208px 208px 208px 208px 208px;
  margin: 30px auto;
`
const Page = styled(Pagination)`
  width: 322px;
  margin: 0 auto;
  text-align: center;
`
const Img = styled.img`
  width:100%;
  height:100%;
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
`
