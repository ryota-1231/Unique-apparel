import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import GenderSelect from './gender'
import CategorySelect from './category'
import ColorSelect from './color'
import SizeSelect from './size'
import PriceRange from './price'
import Buttons from './button'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function FormPropsTextFields () {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div className='sidebar'>
        <h1>詳細検索</h1>
        <h2 className='search-label'>キーワードを追加する</h2>
        <TextField id='family-name' placeholder='キーワード' variant='outlined' />
        <h2 className='search-label'>性別を選択する</h2>
        <GenderSelect />
        <h2 className='search-label'>カテゴリーを選択する</h2>
        <CategorySelect />
        <h2 className='search-label'>色を選択する</h2>
        <ColorSelect />
        <h2 className='search-label'>サイズを選択する</h2>
        <SizeSelect />
        <h2 className='search-label'>値段を選択する</h2>
        <PriceRange />
        {/* 検索ボタン */}
        <Buttons />
      </div>
    </form>
  )
}
