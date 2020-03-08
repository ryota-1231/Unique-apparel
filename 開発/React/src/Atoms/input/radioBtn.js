import React from 'react';
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

export default function RadioBtn(props) {
  const [value, setValue] = React.useState('female');
  const labels = props.label
  const RadioForm = labels.map((label) =>
    <FormControlLabel 
      key={label}
      value={label}
      control={<Radio color="primary" />}
      label={label}
    />
  );

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* --------------------ラベルをつけたい場合-------------------- */}
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        {RadioForm}
      </RadioGroup>
    </FormControl>
  );
}

RadioBtn.propTypes = {
  label: PropTypes.array
}