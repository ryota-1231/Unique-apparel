import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import NameInputContainer from './NameInputContainer'
import NameKanaInputContainer from './NameKanaInputContainer'
import MailInputContainer from './MailInputContainer'
import PassWordInputContainer from './PassWordInputContainer'
import GenderSelectContainer from './GenderSelectContainer'
import BirthdayInputContainer from './BirthdayInputContainer'
import PostCodeInputContainer from './PostCodeInputContainer'
import PhoneNumberInputContainer from './PhoneNumberInputContainer'
import { Link  as RouteLink} from "react-router-dom";


class MainContainer extends React.Component {
  render () {
  return (
    
    <Card id='signup-area' >
      <CardContent>
        <div className='contents'>
          <div className='contents-title-area'>
            <h3 className='contents-title'>基本情報</h3>
          </div>
          {/* --------------氏名入力---------------- */}
          <NameInputContainer />
          {/* -------------氏名（かな）入力------------ */}
          <NameKanaInputContainer />
          {/* -----------メールアドレス入力------------ */}
          <MailInputContainer />
          {/* -------------パスワード入力------------- */}
          <PassWordInputContainer />
          {/* ---------------性別入力--------------- */}
          <GenderSelectContainer />
          {/* -------------生年月日入力------------- */}
          <BirthdayInputContainer />
          {/* ---------------住所入力--------------- */}
          <PostCodeInputContainer />
          {/* -------------電話番号入力------------- */}
          <PhoneNumberInputContainer />
        </div>
      </CardContent>
      <CardActions id='signup-btn-area'>
        <RouteLink to="page2" >
          <Button variant='contained' color='primary' size='large' id='user-register-btn'>会員登録する</Button>
        </RouteLink>
      </CardActions>
    </Card>
    )
  }
}

export default MainContainer;