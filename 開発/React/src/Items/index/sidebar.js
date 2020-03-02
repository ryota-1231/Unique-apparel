import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';

export default function MenuListComposition() {
  return (
    <div className="sidebar">
      <h1 className="category">CATEGORY</h1>
      <Paper className="paper">
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