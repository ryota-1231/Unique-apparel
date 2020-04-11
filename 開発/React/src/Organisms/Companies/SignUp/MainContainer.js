import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '../../../Atoms/button/button'
import H1 from '../../../Atoms/heading/h1'
import H2 from '../../../Atoms/heading/h2'
import H3 from '../../../Atoms/heading/h2'
import P from '../../../Atoms/input/description'
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

export default function MainContainer () {
  const classes = useStyles()

  return (
    <Wrapper>
      <H1 title='出品申込情報の入力' />
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <H3 title='※ご確認事項※' />
            <P
              description={[
                '・代理での出品申込は承ることができません。出店希望者ご自身でお申込みください。',
                '・本フォームの入力が完了した時点では、契約の成立にはなりません。'
              ]}
            />
          </CardContent>
        </Card>
      </Container>
      {/* -------------会社登録エリア------------- */}
      <Container>
        <H2 title='会社情報' />
        <Card className={classes.root}>
          <CardContent>
            <CompanySignUp />
          </CardContent>
        </Card>
      </Container>
      {/* -------------店舗登録エリア------------- */}
      <Container>
        <H2 title='店舗運営責任者' />
        <Card className={classes.root}>
          <CardContent>
            <ShopSignUp />
          </CardContent>
        </Card>
      </Container>
      {/* -------------登録ボタンエリア------------- */}
      <CardActions>
        <Btn type='contained' value='会員登録する' color='primary' />
      </CardActions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 900px;
  margin: 0 auto;
`

const Container = styled.div`
  margin: 30px auto 60px;
`

const Btn = styled(Button)`
  width: 300px;
  margin: 0 auto !important;
`
