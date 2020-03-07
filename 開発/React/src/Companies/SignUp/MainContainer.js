import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import BusinessTypeContainer from './BusinessTypeContainer'
import CompanyNameContainer from './CompanyNameContainer'
import PostCodeInputContainer from './PostCodeInputContainer'
import PhoneNumberInputContainer from './PhoneNumberInputContainer'
import NameInputContainer from './NameInputContainer'
import NameKanaInputContainer from './NameKanaInputContainer'

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
            <h3 className='contents-title'>会社情報</h3>
          </div>
          <div id='check-list-area'>
            <h3 className='check-list-title'>※ご確認事項※</h3>
            <p className='check-list-description'>
              ・内裏での出品申込は承ることができません。出店希望者ご自身でお申込みください。<br></br>
              ・本フォームの入力が完了した時点では、契約の成立にはなりません。
            </p>
          </div>
          {/* -------------事業形態------------- */}
          <BusinessTypeContainer />
          {/* -------------会社名入力------------- */}
          <CompanyNameContainer />
          {/* -------------住所入力------------- */}
          <PostCodeInputContainer />
          {/* -------------電話番号入力------------- */}
          <PhoneNumberInputContainer />
          {/* -------------代表者氏名入力------------- */}
          <NameInputContainer />
          {/* -------------代表者氏名（かな）入力------------- */}
          <NameKanaInputContainer />
        
        </div>
      </CardContent>
      <CardActions id='signup-btn-area'>
        <Button variant='contained' color='primary' size='large' id='user-register-btn'>会員登録する</Button>
      </CardActions>
    </Card>
  )
}
