import React from 'react'
import styled from 'styled-components'
import H3 from '../../../Atoms/heading/h3'
import Contents from '../../Companies/Mypage/Contents'

class MainContents extends React.Component {
  render () {
    return (
      <Wrapper>
        <MainContentsH3 title='出品履歴'/>
        <Contents />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 900px;
  margin: 40px 0 0 60px;
`

const MainContentsH3 = styled(H3)`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2em;
  padding-bottom: 10px;
`

export default MainContents