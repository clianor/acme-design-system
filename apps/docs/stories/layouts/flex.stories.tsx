import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box, Flex } from '@acme/ui';

const meta: Meta<typeof Flex> = {
  title: 'layouts/Flex',
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: [...Array(5)].map((_) => {
      return (
        <Box key={Math.random().toString(36)} height="9" width="9">
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
    gap: 3,
  },
};
