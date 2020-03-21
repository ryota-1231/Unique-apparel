import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ColorSelect() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    color: '',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-color-native-simple">
          色
        </InputLabel>
        <Select
          native
          value={state.color}
          onChange={handleChange('color')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'color',
            id: 'outlined-color-native-simple',
          }}
        >
          <option value="" />
          <option value={'red'}>赤</option>
          <option value={'blue'}>青</option>
          <option value={'green'}>緑</option>
        </Select>
      </FormControl>
    </div>
  );
}