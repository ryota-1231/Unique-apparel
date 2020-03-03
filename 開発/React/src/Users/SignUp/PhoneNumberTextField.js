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
    <form id='phone-number-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='phone-number-input' label='電話番号' style={{ margin: 8 }} margin='normal' helperText='ハイフンなしで記入してください' variant='outlined' />
    </form>
  )
}
