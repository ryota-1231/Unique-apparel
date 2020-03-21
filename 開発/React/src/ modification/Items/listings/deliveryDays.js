import React, { Component } from 'react'

class DeliveryDays extends Component {
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
          <span>*</span>配送までの日数
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='day1'>最短</option>
            <option value='day2'>1~2日</option>
            <option value='day3'>2~3日</option>
            <option value='day4'>4日以上</option>
          </select>
        </label>
      </form>
    )
  }
}

export default DeliveryDays
