import React from 'react'
import './main.css'
import MainContainer from './MainContainer'
import RadioField from '../../Molecules/RadioField'

class CompaniesSignUp extends React.Component {
  render () {
    return (
      <div id='user-signup-wrapper'>
        <div className='signup-title-area'>
          <h2 className='signup-title'>出品申込情報の入力</h2>
        </div>
        <RadioField name='kkk' label={['end','top', 'gggg']}/>
        <MainContainer />
      </div>
    )
  }
}

export default CompaniesSignUp
