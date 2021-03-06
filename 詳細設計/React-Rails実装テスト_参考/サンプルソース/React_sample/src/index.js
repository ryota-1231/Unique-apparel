import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// 砂土居実装コード(購入画面実装)
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import './index.css'
import HorizontalLabelPositionBelowStepper from './stepbar';
import Link from '@material-ui/core/Link';


class OrderComplete extends Component {
  render () {
    return (
      <div className="contents">
        <HorizontalLabelPositionBelowStepper />
        <h1>ご注文ありがとうございました！</h1>
        <h2>ご注文番号: xxxxxxxxxxxxxx</h2>
        <p>こちらのメールアドレスxxx@xxx.xxxにメールを送りました</p>
        <p className="form-sentence">メールが届かない場合は、<a href="#">お客様お問い合わせ</a>よりご連絡ください</p>

        <Link href="#" ><Button variant="contained" className="ordercomplete-button">注文履歴へ</Button></Link>
        <Link href="#" ><Button variant="contained" className="ordercomplete-button">トップへ</Button></Link>
      </div>
    )
  }
}

OrderComplete.propTypes = {
  add: PropTypes.func.isRequired
}

ReactDOM.render(
  <OrderComplete />,
  document.getElementById('root')
)