import type { Meta, StoryObj } from '@storybook/react';

import { Box, Flex, Quote, Text } from '@acme/ui';

const meta: Meta<typeof Quote> = {
  title: 'typography/Quote',
  component: Quote,
  parameters: {
    componentSubtitle: '짧은 인라인 인용문 컴포넌트',
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

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  render: () => {
    return (
      <Text>
        His famous quote,{' '}
        <Quote>
          Styles come and go. Good design is a language, not a style
        </Quote>
        , elegantly summs up Massimo’s philosophy of design.
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
              <Quote {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Quote>
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
        <Quote {...props} truncate>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant.
        </Quote>
      </Flex>
    );
  },
};
