import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link'
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
    <form id='postcode-form' className={classes.root} noValidate autoComplete="off">
      <TextField id="postcode" label="郵便番号" variant="outlined" />
      <Button id='address-auto-input-interface' variant="contained" color="primary">住所自動入力</Button>
      <Link href='https://www.post.japanpost.jp/zipcode/index.html'><Button id='post-code-search-interface' color="primary">郵便番号を検索</Button></Link>
    </form>
  );
}