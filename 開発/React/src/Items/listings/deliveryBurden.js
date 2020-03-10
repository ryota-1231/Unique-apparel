import React, { Component } from 'react'

class DeliveryBurden extends Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form>
        <label>
          <span>*</span>配送料の負担
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='listing-person'>出品者</option>
            <option value='purchaser'>購入者</option>
          </select>
        </label>
      </form>
    )
  }
}

export default DeliveryBurden
