import React, { Component } from 'react'

class ListingForm extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>*</span>商品名
          <textarea value={this.state.value} onChange={this.handleChange} placeholder='商品名（必須40字まで）' />
        </label>
      </form>
    )
  }
}

export default ListingForm
