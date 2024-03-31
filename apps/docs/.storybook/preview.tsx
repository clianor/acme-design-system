import type { Preview } from '@storybook/react';

import './globals.css';

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: [
          'layouts',
          ['Box', 'Flex', 'Grid', 'Container', 'Section', '*'],
          'typography',
          ['Text', 'Strong', '*'],
          'components',
        ],
      },
    },
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export default preview;
