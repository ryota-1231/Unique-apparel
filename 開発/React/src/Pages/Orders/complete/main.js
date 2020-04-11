import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import './main.css'
import HorizontalLabelPositionBelowStepper from './stepbar'
import { Link as RouteLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

class OrderComplete extends Component {
  render () {
    return (
      <div className='contents'>
        <HorizontalLabelPositionBelowStepper />
        <h1>ご注文ありがとうございました！</h1>
        <h2>ご注文番号: xxxxxxxxxxxxxx</h2>
        <p>こちらのメールアドレスxxx@xxx.xxxにメールを送りました</p>
        <p className='form-sentence'>メールが届かない場合は、<a href='#'>お客様お問い合わせ</a>よりご連絡ください</p>

        <Link href='#'><Button variant='contained' className='ordercomplete-button'>注文履歴へ</Button></Link>
        <RouteLink to='/'><Button variant='contained' className='ordercomplete-button'>トップへ</Button></RouteLink>
      </div>
    )
  }
}

OrderComplete.propTypes = {
  add: PropTypes.func.isRequirednpm
}

export default OrderComplete
