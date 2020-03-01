import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class CheckBoxContainer extends React.Component {
  render() {
    return (
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Remember Me?"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
    );
  }
}

export default CheckBoxContainer