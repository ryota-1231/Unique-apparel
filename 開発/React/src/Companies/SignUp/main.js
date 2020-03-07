import React from 'react'
// import PropTypes from 'prop-types'
import './main.css'
import MainContainer from './MainContainer'

class CompaniesSignUp extends React.Component {
  render () {
    return (
      <div id='user-signup-wrapper'>
        <div className='signup-title-area'>
          <h2 className='signup-title'>出品申込情報の入力</h2>
        </div>
        <MainContainer />
      </div>
    )
  }
}

/* -------------propsのバリデーション------------- */
// UsersLogin.propTypes = {
//   add: PropTypes.func.isRequired
// }

export default CompaniesSignUp
