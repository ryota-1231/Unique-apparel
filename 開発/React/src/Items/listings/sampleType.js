import React, { Component } from 'react'

class SampleType extends Component {
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
          <span>*</span>サンプルの種類
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='--'>--</option>
            <option value='sample1'>量産前サンプル（お得）</option>
            <option value='sample2'>提案サンプル（世界に1つ）</option>
          </select>
        </label>
      </form>
    )
  }
}

export default SampleType
