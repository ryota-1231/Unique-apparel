import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form id='address-form' className={classes.root} noValidate autoComplete="off">
      <TextField id="address-post-code" label="郵便番号" variant="outlined" />
      <Button id='post-code-search-interface' color="secondary">郵便番号を検索</Button>
      <TextField id="address-input" label="住所" style={{ margin: 8 }} margin="normal" variant="outlined" />
    </form>
  );
}