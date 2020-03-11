import React, { Component } from 'react'

class ListingDescriptionForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form>
        <label>
          <span>*</span>商品の説明
          <textarea value={this.state.value} onChange={this.handleChange} placeholder='商品の説明（必須1,000文字以内）' className='textarea-description' />
        </label>
      </form>
    )
  }
}

export default ListingDescriptionForm
