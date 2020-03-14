import React, { Component } from 'react'

class ItemCategory extends Component {
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
          <span>*</span>カテゴリー
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='mens'>Mens</option>
            <option value='Ladies'>Ladies</option>
            <option value='Kids'>Kids</option>
          </select>
        </label>
      </form>
    )
  }
}

export default ItemCategory
