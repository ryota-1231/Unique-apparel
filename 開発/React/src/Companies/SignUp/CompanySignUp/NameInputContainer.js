import React from 'react'
import PropTypes from 'prop-types'
import NameTextField from './NameTextField'

class NameInputContainer extends React.Component {
  render () {
    return (
      <div className='name-area'>
        <div className='name-title-area'>
          <h4 className='name-title'>{this.props.title}</h4>
        </div>
        <div className='name-field'>
          <NameTextField leftLabel={this.props.leftLabel} rightLabel={this.props.rightLabel} />
        </div>
      </div>
    )
  }
}

NameInputContainer.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string
}

export default NameInputContainer
