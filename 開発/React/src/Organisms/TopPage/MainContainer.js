import React from 'react'
import styled from 'styled-components'
import CategorySelect from './CategorySelect'
import Border from '../../Atoms/border/border'
import ItemIndex from '../../Organisms/TopPage/ItemIndex'
import Concept from '../../Organisms/TopPage/Concept'
import History from '../../Organisms/TopPage/History'

class MainContainer extends React.Component {
  componentWillUnmount () {
    console.log('アンマウント！！')
    clearInterval(this.props)
  }

  render () {
    return (
      <Wrapper>
        <Container>
          <Img src='/static/images/topPage_sample.jpg' alt='トップページメイン画像' />
        </Container>
        <CategorySelect />
        <Border />
        <Container className='item_index'>
          <ItemIndex />
        </Container>
        <Border />
        <Container>
          <Concept />
        </Container>
        <Border />
        <Container>
          <History />
        </Container>
      </Wrapper>
    )
  }
}
export default MainContainer

const Wrapper = styled.div`
`
const Container = styled.div`
  &.item_index {
    margin: 70px;
  }
`
const Img = styled.img`
  width: 100vw;
`
