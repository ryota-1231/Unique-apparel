import React from 'react'
import RadioButtonContainer from './RadioButtonContainer'

class GenderSelectContainer extends React.Component {
  render () {
    return (
      <div className='gender-area'>
        <div className='gender-title-area'>
          <h4 className='gender-title'>性別</h4>
        </div>
        <RadioButtonContainer />
      </div>
    )
  }
}

export default GenderSelectContainer
