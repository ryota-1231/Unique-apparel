import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import H2 from '../../../Atoms/heading/h2'
import Border from '../../../Atoms/border/border'
import Information from '../../../Molecules/information'
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
          </Container>
            <Border />
          <Container>
            <Information title='基本情報' value='変更' description={['男性', '1900/12/12生まれ', '〒123-1234', '渋谷']} />
          </Container>
          <Border />
          <Container>
            <Information title='メールアドレス' value='変更' description={['sample@example.com']} />
          </Container>
          <Border />
          <Container>
            <Information title='パスワード' value='変更' description={['********', '※ セキュリティのためパスワードは非表示となっています。']} />
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
            <Information value='変更' description={['追加したお届け先はありません。']} />
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
            <Information value='変更' description={['クレジット情報登録はありません。']} />
            <Link href='#'>クレジット情報を登録する</Link>
          </Container>
        </CardContent>
      </Card>
    </div>
  )
}
