import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'w',
  component: Button,
};

export const Text = () => <Button onClick={action('click')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// Emoji.story = {
//   name: 'with emoji',
// };
