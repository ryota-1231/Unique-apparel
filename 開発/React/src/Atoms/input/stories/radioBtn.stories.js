import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

export default {
  title: 'RadioBtn',
  component: RadioBtn
}

export function RadioBtn () {
  const [value, setValue] = React.useState('female')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <FormControl component='fieldset'>
      {/* --------------------ラベルをつけたい場合-------------------- */}
      <FormLabel component='legend'>Label(表示/非表示選択可)</FormLabel>
      <RadioGroup aria-label='position' name='position' value={value} onChange={handleChange} row>
        <FormControlLabel
          key='key'
          value='value'
          control={<Radio color='primary' />}
          label='RadioBtn'
        />
      </RadioGroup>
    </FormControl>
  )
}

RadioBtn.story = {
  name: 'RadioBtn'
}
