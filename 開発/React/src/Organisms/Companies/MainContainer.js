import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import H2 from '../../Atoms/heading/h2'
import H3 from '../../Atoms/heading/h3'
import Border from '../../Atoms/border/border'
import { Container } from '@material-ui/core'

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
      <Card className={classes.root}>
        <CardContent>
          {/* -------------会社登録情報エリア------------- */}
          <Container>
             <H2 title='会員登録情報' />
          <Border />
          <H3 title='基本情報' />
          <p>男性<br></br>1990/12/12生まれ<br></br>〒123-1234<br></br>東京都渋谷区</p>
          </Container>
          <Border />
          <Container>
            <H3 title='メールアドレス' />
            <p>sample@example.com</p>
          </Container>
          <Border />
          <Container>
            <H3 title='パスワード' />
            <p>********</p>
            <p>※セキュリティ保護のためパスワードは非表示になっています。</p>
          </Container>
          <Border />
        </CardContent>
      </Card> 
      <Card id='signup-area' className={classes.root}>
        <CardContent>
          {/* -------------お届け先の変更・追加エリア------------- */}
          <Container>
            <H2 title='お届け先の変更・追加' />
            <Border />
            <p>追加したお届け先はありません。</p>
            <Link href='#'>お届け先を追加する</Link>
          </Container>
        </CardContent>
      </Card>
      {/* -------------クレジットカードエリア------------- */}
      <Card>
        <CardContent>
          <Container>
            <H2 title='クレジットカード情報の変更' />
            <Border />
            <p>クレジット情報登録はありません。</p>
            <Link href='#'>クレジット情報を登録する</Link>
          </Container>
        </CardContent>
        <Button variant='contained' color='primary' size='large' id='user-register-btn'>会員登録する</Button>
      </Card>
    </div>
  )
}
