import React from 'react'
import './main.css'
import MainContainer from '../../../Organisms/Companies/MainContainer'

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

export default CompaniesSignUp
