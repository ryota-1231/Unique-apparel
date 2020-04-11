import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

// ToDo サーバ側と連動してページネーションできるようにする
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();

  return (
    // ⑦page送りボタン
    <div className={classes.root}>
      <Pagination count={10} color="primary" />
    </div>
  );
}