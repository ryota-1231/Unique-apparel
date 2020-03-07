import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  }
}))

export default function BasicTextFields () {
  const classes = useStyles()

  return (
    <form id='name-form' className={classes.root} noValidate autoComplete='off'>
      <TextField className='full-width' label='正式名称' variant='outlined' size="small" />
      <TextField className='full-width' label='ふりがな' variant='outlined' size="small"/>
    </form>
  )
}
