import React from 'react'
import { Link as RouteLink} from "react-router-dom";
import styled from 'styled-components'
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'


class MainContainer extends React.Component {
  render () {
    return (
      <Wrapper>
        <Container>
        {/* -------------サインアップエリア------------- */}
          <Content>
            <RouteLink to="/companies/signup">
              <SignUpContainer/>
            </RouteLink>
          </Content>
        {/* -------------サインインエリア------------- */}
          <Content>
            <SignInContainer />
          </Content>
        </Container>
        <RouteLink to="/users/login">Are you a User?</RouteLink>
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

export default MainContainer;