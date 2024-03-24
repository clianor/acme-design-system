import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box } from '@acme/ui';

const meta: Meta<typeof Box> = {
  title: 'layouts/Box',
  component: Box,
  args: {
    display: 'block',
    width: 16,
    height: 16,
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: vars.colors.scale.blue[4],
        }}
      />
    ),
  },
};
