import React from 'react'
import './main.css'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import SignInContainer from './SignInContainer'
import InterFaceContainer from './InterFaceContainer'
import SignUpContainer from './SignUpContainer'

class MainContainer extends React.Component {
  componentWillUnmount () {
    console.log('アンマウント！！')
    clearInterval(this.props)
  }

  render () {
    return (
      <Wrapper>
        <Container>
          <Content>
            {/* -------------サインインエリア------------- */}
            <SignInContainer />
            {/* -------------外部連携ボタン------------- */}
            <InterFaceContainer />
          </Content>
          <Content>
            {/* -------------サインアップエリア------------- */}
            <RouteLink to='/users/signup'><SignUpContainer /></RouteLink>
          </Content>
        </Container>
        <RouteLink to='/companies/login'>Are you a Company?</RouteLink>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`
const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid #eee;
`

const Content = styled.div`
  width: 50%;
`

export default MainContainer
