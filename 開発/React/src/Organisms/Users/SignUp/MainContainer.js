import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '../../../Atoms/button/button'
import H1 from '../../../Atoms/heading/h1'
import Info from '../../../Organisms/Users/SignUp/Info'

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
      <H1 title='新規会員登録' />
      <Container>
        <Card className={classes.root}>
          <CardContent>
            <Info />
          </CardContent>
        </Card>
      </Container>
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
