import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function BasicTextFields () {
  const classes = useStyles()

  return (
    <form id='birthday-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='birthday-year' label='年' variant='outlined' />
      <TextField id='birthday-month' label='月' variant='outlined' />
      <TextField id='birthday-day' label='日' variant='outlined' />
    </form>
  )
}
