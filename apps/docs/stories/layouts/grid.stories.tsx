import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box, Grid } from '@acme/ui';

const meta: Meta<typeof Grid> = {
  title: 'layouts/Grid',
  component: Grid,
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: [...Array(9)].map((_) => {
      return (
        <Box key={Math.random().toString(36)} height="9" width="auto">
          <div
            style={{
              width: '100%',
              height: '100%',
              background: vars.colors.scale.blue[4],
            }}
          />
        </Box>
      );
    }),
    gridTemplateColumns: 3,
    gap: 3,
  },
};
