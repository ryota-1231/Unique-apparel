import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    <form id='password-form' className={classes.root} noValidate autoComplete="off">
      <TextField id="password-input" label="パスワード" style={{ margin: 8 }} margin="normal"  helperText="8文字以上の英数字で入力してください。" variant="outlined" />
    </form>
  );
}