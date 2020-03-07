import React from 'react'
import PropTypes from 'prop-types'
import BusinessRadioButton from './BusinessRadioButton'

class BusinessTypeContainer extends React.Component {
  render () {
    return (
      <div className='business-type-area'>
        <div className='business-type-title-area'>
          <h4 className='business-type-title'>{this.props.title}</h4>
        </div>
        <BusinessRadioButton leftLabel={this.props.radioBtnLeft} rightLabel={this.props.radioBtnRight}/>
      </div>
    )
  }
}

BusinessTypeContainer.propTypes = {
  title: PropTypes.string,
  radioBtnLeft: PropTypes.string,
  radioBtnRight: PropTypes.string
}

export default BusinessTypeContainer
