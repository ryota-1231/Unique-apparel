import React, { Component } from 'react'

class YourDecidedPrice extends Component {
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
          <span>*</span>価格
          <textarea value={this.state.value} onChange={this.handleChange} placeholder='例）300' className='input-price-area' />
        </label>
      </form>
    )
  }
}

export default YourDecidedPrice
