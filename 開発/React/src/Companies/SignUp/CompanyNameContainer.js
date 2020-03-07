import React from 'react'
import CompanyNameText from './CompanyNameText'

class CompanyNameContainer extends React.Component {
  render () {
    return (
      <div className='name-area'>
        <div className='name-title-area'>
          <h4 className='name-title'>会社名</h4>
        </div>
        <CompanyNameText />
      </div>
    )
  }
}

export default CompanyNameContainer
