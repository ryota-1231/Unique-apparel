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

export default function GenderSelect () {
  const classes = useStyles()
  const [state, setState] = React.useState({
    gender: ''
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
        <InputLabel ref={inputLabel} htmlFor='outlined-gender-native-simple'>
          性別
        </InputLabel>
        <Select
          native
          value={state.gender}
          onChange={handleChange('gender')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'gender',
            id: 'outlined-gender-native-simple'
          }}
        >
          <option value='' />
          <option value='male'>男性</option>
          <option value='female'>女性</option>
        </Select>
      </FormControl>
    </div>
  )
}
