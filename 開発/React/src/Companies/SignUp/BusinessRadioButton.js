import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3)
  }
}))

export default function RadioButtonsGroup () {
  const classes = useStyles()
  const [value, setValue] = React.useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div>
      <FormControl component='fieldset' className={classes.formControl}>
        <RadioGroup aria-label='gender' name='gender2' value={value} onChange={handleChange} row>
          <FormControlLabel
            value='corporation'
            control={<Radio color='primary' />}
            label='法人'
            labelPlacement='end'
          />
          <FormControlLabel
            value='sole-proprietorship'
            control={<Radio color='primary' />}
            label='個人事業主'
            labelPlacement='end'
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
