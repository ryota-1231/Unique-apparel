import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}))

export default function PaginationSize (props) {
  const classes = useStyles()

  return (
    <div className={classes.root + ' ' + props.className}>
      <Pagination count={5} size='large' />
    </div>
  )
}

PaginationSize.propTypes = {
  className: PropTypes.string
}
