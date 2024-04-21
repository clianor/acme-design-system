import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Box, Flex, Heading } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Heading> = {
  title: 'typography/Heading',
  component: Heading,
  parameters: {
    componentSubtitle: '헤딩 컴포넌트',
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading 태그를 설정합니다.',
      table: {
        type: {
          summary: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].join('|'),
        },
      },
    },
    size: {
      control: { type: 'select' },
      options: fontSizeKeys,
      description: '폰트 크기를 설정합니다.',
      table: {
        type: { summary: fontSizeKeys.join('|') },
      },
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'regular', 'medium', 'bold'],
      description: '폰트 굵기를 설정합니다.',
      table: {
        type: { summary: ['light', 'regular', 'medium', 'bold'].join('|') },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: '텍스트의 정렬 방식을 설정합니다.',
      table: {
        type: { summary: ['left', 'center', 'right', 'justify'].join('|') },
      },
    },
    wrap: {
      control: { type: 'select' },
      options: ['wrap', 'nowrap', 'pretty', 'balance'],
      description: '텍스트의 줄바꿈 방식을 설정합니다.',
      table: {
        type: { summary: ['wrap', 'nowrap', 'pretty', 'balance'].join('|') },
      },
    },
    color: {
      control: { type: 'select' },
      options: accentColors,
      defaultValue: 'indigo',
      description: '텍스트의 색상을 설정합니다.',
      table: {
        type: { summary: accentColors.join('|') },
        defaultValue: { summary: 'indigo' },
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
  args: {
    size: 4,
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const AsAnotherElement: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        <Heading {...props} as="h1">
          Level 1
        </Heading>
        <Heading {...props} as="h2">
          Level 2
        </Heading>
        <Heading {...props} as="h3">
          Level 3
        </Heading>
      </Flex>
    );
  },
};

export const Size: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
          return (
            <Heading
              {...props}
              key={index.toLocaleString()}
              size={(index + 1) as never}
            >
              The quick brown fox jumps over the lazy dog
            </Heading>
          );
        })}
      </Flex>
    );
  },
};

export const Weight: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map((weight) => {
          return (
            <Heading {...props} key={weight} weight={weight}>
              The quick brown fox jumps over the lazy dog
            </Heading>
          );
        })}
      </Flex>
    );
  },
};

export const Align: Story = {
  render: (props) => {
    return (
      <Flex flexDirection="column" rowGap={3}>
        <Heading {...props} align="left">
          Left-aligned
        </Heading>
        <Heading {...props} align="center">
          Center-aligned
        </Heading>
        <Heading {...props} align="right">
          Right-aligned
        </Heading>
      </Flex>
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
              <Heading {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Heading>
            </Box>
          );
        })}
      </Flex>
    );
  },
};

export const Color: Story = {
  render: (props) => {
    return (
      <Flex flexDirection="column" rowGap={3}>
        {accentColors.map((color) => {
          return (
            <Heading {...props} key={color} color={color}>
              The quick brown fox jumps over the lazy dog
            </Heading>
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
        <Heading {...props} truncate>
          The quick brown fox jumps over the lazy dog
        </Heading>
      </Flex>
    );
  },
};
