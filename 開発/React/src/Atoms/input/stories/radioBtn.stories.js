import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default {
  title: 'RadioBtn',
  component: RadioBtn
}

export function RadioBtn() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      {/* --------------------ラベルをつけたい場合-------------------- */}
      <FormLabel component="legend">Label(表示/非表示選択可)</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value}onChange={handleChange} row>
      <FormControlLabel 
        key='key'
        value='value'
        control={<Radio color="primary" />}
        label='RadioBtn'
      />
      </RadioGroup>
    </FormControl>
  )
}

RadioBtn.story = {
  name: 'RadioBtn',
};














// import React from 'react';

// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

// export default {
//   title: 'w',
//   component: Button,
// };

// export const Text = () => <Button onClick={action('click')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// // Emoji.story = {
// //   name: 'with emoji',
// // };
