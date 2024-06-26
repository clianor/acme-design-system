import type { Meta, StoryObj } from '@storybook/react';

import { Box, Flex, Strong, Text } from '@acme/ui';

const meta: Meta<typeof Strong> = {
  title: 'typography/Strong',
  component: Strong,
  parameters: {
    componentSubtitle: '강조된 텍스트 컴포넌트',
  },
  argTypes: {
    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'nowrap', 'pretty', 'balance'],
      description: '텍스트의 줄바꿈 방식을 설정합니다.',
      table: {
        type: { summary: ['wrap', 'nowrap', 'pretty', 'balance'].join('|') },
      },
    },
    truncate: {
      control: { type: 'boolean' },
      description: '텍스트가 잘릴지 여부를 결정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Strong>;

export const Default: Story = {
  render: () => {
    return (
      <Text>
        The most important thing to remember is, <Strong>stay positive</Strong>.
      </Text>
    );
  },
};

export const Wrap: Story = {
  render: (props) => {
    return (
      <Flex flexDirection="column" rowGap={3}>
        {(['nowrap', 'balance', 'pretty'] as const).map((wrap) => {
          return (
            <Box key={wrap} maxWidth={50}>
              <Strong {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Strong>
            </Box>
          );
        })}
      </Flex>
    );
  },
};

export const Truncate: Story = {
  render: (props) => {
    return (
      <Flex maxWidth={50}>
        <Strong {...props} truncate>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant.
        </Strong>
      </Flex>
    );
  },
};
