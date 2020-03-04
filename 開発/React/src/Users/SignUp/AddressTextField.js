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
    <form id='address-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='address-city-input' label='都道府県' variant='outlined' />
      <TextField id='address-input' label='住所' style={{ margin: 8 }} margin='normal' variant='outlined' />
    </form>
  )
}
