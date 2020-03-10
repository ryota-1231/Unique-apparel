import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import CompanySignUp from './CompanySignUp'
import ShopSignUp from './ShopSignUp'

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
    <div className='company-signup-wrapper'>
      <Card id='signup-area' className={classes.root}>
        <CardContent>
          <div className='contents'>
            <div id='check-list-area'>
              <h3 className='check-list-title'>※ご確認事項※</h3>
              <p className='check-list-description'>
                ・内裏での出品申込は承ることができません。出店希望者ご自身でお申込みください。<br />
                ・本フォームの入力が完了した時点では、契約の成立にはなりません。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className='contents-title-area'>
        <h3 className='contents-title'>会社情報</h3>
      </div>
      <Card id='signup-area' className={classes.root}>
        <CardContent>
          {/* -------------会社登録エリア------------- */}
          <CompanySignUp />
        </CardContent>
      </Card>
      <div className='contents-title-area'>
        <h3 className='contents-title'>店舗運営責任者</h3>
      </div>
      <Card id='signup-area' className={classes.root}>
        <CardContent>
          {/* -------------店舗登録エリア------------- */}
          <ShopSignUp />
        </CardContent>
      </Card>
      {/* -------------登録ボタンエリア------------- */}
      <CardActions id='signup-btn-area'>
        <Button variant='contained' color='primary' size='large' id='user-register-btn'>会員登録する</Button>
      </CardActions>
    </div>
  )
}
