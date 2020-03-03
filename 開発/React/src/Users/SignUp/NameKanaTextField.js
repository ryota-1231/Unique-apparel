import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form id='name-kana-form' className={classes.root} noValidate autoComplete="off">
      <TextField id="family-name-kana" label="氏（かな）" variant="outlined" />
      <TextField id="first-name-kana" label="名（かな）" variant="outlined" />
    </form>
  );
}