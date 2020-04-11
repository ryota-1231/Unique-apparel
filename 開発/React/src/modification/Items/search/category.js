import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export default function CategorySelect () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    category: ''
  })

  const inputLabel = React.useRef(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  return (
    <div>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor='outlined-category-native-simple'>
          カテゴリー
        </InputLabel>
        <Select
          native
          value={state.category}
          onChange={handleChange('category')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'category',
            id: 'outlined-category-native-simple'
          }}
        >
          <option value='' />
          <option value='t-shirt'>Tシャツ</option>
          <option value='jacket'>ジャケット</option>
          <option value='bottoms'>ボトムス</option>
          <option value='shoes'>靴</option>
          <option value='bag'>カバン</option>
        </Select>
      </FormControl>
    </div>
  )
}
