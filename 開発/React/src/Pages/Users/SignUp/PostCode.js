import React from 'react'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

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
      <form id='postcode-form' noValidate autoComplete='off'>
        <div id='psotcode-container'>
          <TextField id='postcode' label='郵便番号' variant='outlined' value={this.state.postCodeNo} onChange={e => this.onChangetext(e)} />
          <Button id='address-auto-input-interface' variant='contained' color='primary' onClick={() => this.hundleSubmit()}>住所自動入力</Button>
          <Link href='https://www.post.japanpost.jp/zipcode/index.html' target='_blank'><Button id='post-code-search-interface' color='primary'>郵便番号を検索</Button></Link>
        </div>
      </form>
    )
  }
}

PostCode.propTypes = {
  submitAddress: PropTypes.func
}

export default PostCode
