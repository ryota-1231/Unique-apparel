import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}))

export default function Links () {
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()

  return (
    <Typography className={classes.root}>
      <Link href='#' onClick={preventDefault}>
        All
      </Link>
      <Link href='#' onClick={preventDefault}>
        Mens
      </Link>
      <Link href='#' onClick={preventDefault}>
        Women
      </Link>
      <Link href='#' onClick={preventDefault}>
        Women
      </Link>
      <Link href='#' onClick={preventDefault}>
        Kids
      </Link>
      <Link href='#' onClick={preventDefault}>
        Shoes
      </Link>
      <Link href='#' onClick={preventDefault}>
        Bag
      </Link>
      <Link href='#' onClick={preventDefault}>
        Other
      </Link>
    </Typography>
  )
}
