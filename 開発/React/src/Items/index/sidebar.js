import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <Link href="#" ><MenuItem>全てのカテゴリ</MenuItem></Link>
          <Link href="#" ><MenuItem>コート・ブルゾン</MenuItem></Link>
          <Link href="#" ><MenuItem>ジャケット・スーツ</MenuItem></Link>
          <Link href="#" ><MenuItem>シャツ・ブラウス</MenuItem></Link>
          <Link href="#" ><MenuItem>カットソー</MenuItem></Link>
          <Link href="#" ><MenuItem>ニット</MenuItem></Link>
          <Link href="#" ><MenuItem>ワンピース・ドレス</MenuItem></Link>
          <Link href="#" ><MenuItem>パンツ</MenuItem></Link>
          <Link href="#" ><MenuItem>スカート</MenuItem></Link>
          <Link href="#" ><MenuItem>バッグ</MenuItem></Link>
          <Link href="#" ><MenuItem>シューズ</MenuItem></Link>
          <Link href="#" ><MenuItem>その他</MenuItem></Link>
        </MenuList>
      </Paper>
    </div>
  );
}