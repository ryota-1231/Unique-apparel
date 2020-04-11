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

export default function SizeSelect () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    size: ''
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
        <InputLabel ref={inputLabel} htmlFor='outlined-size-native-simple'>
          サイズ
        </InputLabel>
        <Select
          native
          value={state.size}
          onChange={handleChange('size')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'size',
            id: 'outlined-size-native-simple'
          }}
        >
          <option value='' />
          <option value='small'>S</option>
          <option value='middle'>M</option>
          <option value='large'>L</option>
        </Select>
      </FormControl>
    </div>
  )
}
