import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Box, Flex, Grid, Strong, Text } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Text> = {
  title: 'typography/Text',
  component: Text,
  parameters: {
    componentSubtitle: '기본 텍스트',
    docs: {
      description: {
        component:
          '이 컴포넌트는 span 요소를 기반으로 하며 마진 속성을 지원합니다.',
      },
    },
  },
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'div', 'label', 'p'],
      description: 'Text 태그를 설정합니다.',
      table: {
        type: {
          summary: ['span', 'div', 'label', 'p'].join('|'),
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

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const AsAnotherElement: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        <Text {...props} as="p">
          This is a <Strong>paragraph</Strong> element.
        </Text>
        <Text {...props} as="label">
          This is a <Strong>label</Strong> element.
        </Text>
        <Text {...props} as="div">
          This is a <Strong>div</Strong> element.
        </Text>
        <Text {...props} as="span">
          This is a <Strong>span</Strong> element.
        </Text>
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
            <Text
              {...props}
              key={index.toLocaleString()}
              size={(index + 1) as never}
            >
              The quick brown fox jumps over the lazy dog.
            </Text>
          );
        })}
      </Flex>
    );
  },
};

export const SizeForLongFormContent: Story = {
  parameters: {
    docs: {
      description: {
        story: '2-4 사이즈는 장문의 콘텐츠에 잘 작동하도록 설계되었습니다.',
      },
    },
  },
  render: (props) => {
    return (
      <Box>
        <Text {...props} as="p" marginBottom={5} size={4}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
        <Text {...props} as="p" marginBottom={5} size={3}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
        <Text {...props} as="p" color="gray" size={2}>
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
      </Box>
    );
  },
};

export const SizeForUILabels: Story = {
  parameters: {
    docs: {
      description: {
        story: '사이즈 1-3은 UI 라벨에 잘 작동하도록 설계되었습니다.',
      },
    },
  },
  render: (props) => {
    return (
      <Grid alignItems="center" gridTemplateColumns={2} padding={3} rowGap={5}>
        <Flex flexDirection="column">
          <Text {...props} size={3} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={2}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={2} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={2}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={2} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={1}>
            Start your next project in minutes
          </Text>
        </Flex>

        <Flex flexDirection="column">
          <Text {...props} size={1} weight="bold">
            Get started
          </Text>
          <Text {...props} color="gray" size={1}>
            Start your next project in minutes
          </Text>
        </Flex>
      </Grid>
    );
  },
};

export const Weight: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['regular', 'bold'] as const).map((weight) => {
          return (
            <Text {...props} key={weight} weight={weight}>
              The quick brown fox jumps over the lazy dog
            </Text>
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
        <Text {...props} align="left">
          Left-aligned
        </Text>
        <Text {...props} align="center">
          Center-aligned
        </Text>
        <Text {...props} align="right">
          Right-aligned
        </Text>
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
              <Text {...props} truncate wrap={wrap}>
                The quick brown fox jumps over the lazy dog
              </Text>
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
            <Text {...props} key={color} color={color}>
              The quick brown fox jumps over the lazy dog
            </Text>
          );
        })}
      </Flex>
    );
  },
};
