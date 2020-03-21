import React, { Component } from 'react'

class RegionalOfDelivery extends Component {
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
          <span>*</span>配送元の地域
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='hokkaido'>北海道</option>
            <option value='tokyo'>東京</option>
            <option value='kanagawa'>神奈川</option>
            <option value='osaka'>大阪</option>
            <option value='fukuoka'>福岡</option>
          </select>
        </label>
      </form>
    )
  }
}

export default RegionalOfDelivery
