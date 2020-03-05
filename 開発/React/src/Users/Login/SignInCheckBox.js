import React from 'react'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

class SignInCheckBox extends React.Component {
  render () {
    return (
      <div className='check-area'>
        <FormControl component='fieldset'>
          <FormGroup aria-label='position' row>
            <FormControlLabel
              value='end'
              control={<Checkbox color='primary' />}
              label='Remember Me?'
              labelPlacement='end'
            />
          </FormGroup>
        </FormControl>
        <Button variant='contained' id='users-signin-button' color='secondary' href='#'>Sing In!</Button>
      </div>
    )
  }
}

export default SignInCheckBox
