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
    <form id='name-form' className={classes.root} noValidate autoComplete='off'>
      <TextField id='family-name' label='氏' variant='outlined' size='small'/>
      <TextField id='first-name' label='名' variant='outlined' size='small' />
    </form>
  )
}
