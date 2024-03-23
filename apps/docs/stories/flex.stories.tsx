import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box, Flex } from '@acme/ui';

const meta: Meta<typeof Flex> = {
  title: 'layout/Flex',
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: [...Array(5)].map((_, index) => (
      <Box key={index} width="9" height="9">
        <div
          style={{
            width: '100%',
            height: '100%',
            background: vars.colors.scale.blue[4],
          }}
        />
      </Box>
    )),
    gap: 3,
  },
};
