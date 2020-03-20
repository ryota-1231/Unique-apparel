import React, { Component } from 'react'

class ItemSize extends Component {
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
          <span>*</span>サイズ
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='LL'>LL</option>
          </select>
        </label>
      </form>
    )
  }
}

export default ItemSize
