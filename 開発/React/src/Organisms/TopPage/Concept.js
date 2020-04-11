import React from 'react'
import styled from 'styled-components'
import H1 from '../../Atoms/heading/h1'
// import Link from '@material-ui/core/Link';

class Concept extends React.Component {
  render () {
    return (
      <Wrapper>
        <Container>
          <H1 title='Concept' />
          <Contents>
            <Content>
              <Img src='/static/images/topPage_sample.jpg' alt='トップページメイン画像' />
            </Content>
            <Content>
              <p>コンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプトコンセプト</p>
            </Content>
          </Contents>
        </Container>
      </Wrapper>
    )
  }
}

export default Concept

const Wrapper = styled.div`
`
const Container = styled.div`
  width: 1132px;
  margin: 30px auto;
  text-align: center;
`
const Contents = styled.div`
  display: flex;
  margin-top: 40px;
`
const Content = styled.div`
  width: 50%;
  padding: 20px;
`
const Img = styled.img`
  width: 100%
`
