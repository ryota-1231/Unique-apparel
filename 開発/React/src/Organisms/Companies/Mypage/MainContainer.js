import React from 'react'
import styled from 'styled-components'
import H1 from '../../../Atoms/heading/h1'
import SideNav from './SideNav'
import MainContents from './MainContents'

class MainContainer extends React.Component {
  render () {
    return (
      <Wrapper>
        {/* ①企業Id */}
        <MypageH1 title='{企業}様の登録情報' />
        <Container>
          <SideNav />
          <MainContents />
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

`
const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
`

const MypageH1 = styled(H1)`
  width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  font-weight: bold;
  letter-spacing: 0.2em;
`

export default MainContainer;