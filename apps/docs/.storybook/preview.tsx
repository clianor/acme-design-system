import type { Preview } from '@storybook/react';

import './globals.css';

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['layouts', 'components'],
      },
    },
  },
};

export default preview;
