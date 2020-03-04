import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function BasicTextFields () {
  const classes = useStyles()

  return (
    <form id='mail-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='mail-input' label='例：sample@exampl.com' style={{ margin: 8 }} margin='normal' helperText='メールアドレスがIDになります。' variant='outlined' />
    </form>
  )
}
