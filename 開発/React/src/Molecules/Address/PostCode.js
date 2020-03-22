import React from 'react'
import './main.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'


class PostCode extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      postCodeNo: ''
    }
  }

  onChangetext (e) {
    this.setState({ postCodeNo: e.target.value })
  }

  hundleSubmit () {
    this.props.submitAddress(this.state.postCodeNo)
  }

  render () {
    return (
      <Wrapper>
        <Form>
          <Container>
            {/* --------------------------郵便番号入力欄-------------------------- */}
            <TextField 
              label='郵便番号' 
              variant='outlined' 
              size='small' 
              value={this.state.postCodeNo} 
              onChange={e => this.onChangetext(e)} 
            />
            {/* --------------------------住所自動入力ボタン-------------------------- */}
            <Button 
              className='address-auto-input-interface' 
              variant='contained' 
              color='primary' 
              onClick={() => this.hundleSubmit()}>
                住所自動入力
              </Button>
            {/* --------------------------郵便番号検索リンク-------------------------- */}
            <Link href='https://www.post.japanpost.jp/zipcode/index.html' target='_blank'>
              <Button className='post-code-search-interface' color='primary'>郵便番号を検索</Button>
            </Link>
          </Container>
        </Form>
      </Wrapper>
    )
  }
}

PostCode.propTypes = {
  submitAddress: PropTypes.func
}

const Wrapper = styled.div`
`

const Form = styled.form`
  margin-bottom: 8px;
`

const Container = styled.div`
`

export default PostCode