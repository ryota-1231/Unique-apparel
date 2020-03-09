import React from 'react'
import PropTypes from 'prop-types'
import CompanyNameText from './CompanyNameText'

class CompanyNameContainer extends React.Component {
  render () {
    return (
      <div className='company-name-area'>
        <div className='company-name-title-area'>
          <h4 className='company-name-title'>{this.props.title}</h4>
        </div>
        <div className='text-area'>
          <CompanyNameText label={this.props.label} />
        </div>
      </div>
    )
  }
}

CompanyNameContainer.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string
}

export default CompanyNameContainer
