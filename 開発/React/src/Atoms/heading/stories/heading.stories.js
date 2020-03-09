import React from 'react'
import styled from 'styled-components'

export default {
  title: 'heading',
  component: h3Tag
}

export function h3Tag () {
  return (
    <H3>Title</H3>
  )
}

const H3 = styled.h3`
  font-size: 18px;
  color: #2D2D2D;
`

h3Tag.story = {
  name: 'h3'
}

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
