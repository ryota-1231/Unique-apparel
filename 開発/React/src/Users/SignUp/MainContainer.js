import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
// import AddressInputContainer from './AddressInputContainer'
import PhoneNumberInputContainer from './PhoneNumberInputContainer'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

export default function SimpleCard () {
  const classes = useStyles()

  return (
    <Card id='signup-area' className={classes.root}>
      <CardContent>
        <div className='contents'>
          <div className='contents-title-area'>
            <h3 className='contents-title'>基本情報</h3>
          </div>
          {/* -------------氏名入力------------- */}
          <NameInputContainer />
          {/* -------------氏名（かな）入力------------- */}
          <NameKanaInputContainer />
          {/* -------------メールアドレス入力------------- */}
          <MailInputContainer />
          {/* -------------パスワード入力------------- */}
          <PassWordInputContainer />
          {/* -------------性別入力------------- */}
          <GenderSelectContainer />
          {/* -------------生年月日入力------------- */}
          <BirthdayInputContainer />
          {/* -------------住所入力------------- */}
          <PostCodeInputContainer />
          {/* -------------電話番号入力------------- */}
          <PhoneNumberInputContainer />
        </div>
      </CardContent>
      <CardActions id='signup-btn-area'>
        <Button variant='contained' color='primary' size='large' id='user-register-btn'>会員登録する</Button>
      </CardActions>
    </Card>
  )
}
