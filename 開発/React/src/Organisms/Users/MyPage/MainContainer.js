import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import H1 from '../../../Atoms/heading/h1'
import Info from '../../../Organisms/Users/MyPage/UsersInfo'
import Destination from '../../../Organisms/Users/MyPage/UsersDestination'
import CreditCard from '../../../Organisms/Users/MyPage/CreditCard'


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
    <Wrapper>
      <H1 title='〇〇様  登録情報' />
      {/* -------------会社登録情報エリア------------- */}
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <Info />
          </CardContent>
        </Card>
      </Container>
      {/* -------------お届け先の変更・追加エリア------------- */}
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <Destination />
          </CardContent>
        </Card>
      </Container>
      {/* -------------クレジットカードエリア------------- */}
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <CreditCard />
          </CardContent>
        </Card>
      </Container>
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