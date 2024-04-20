import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Code, Flex, Grid } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Code> = {
  title: 'typography/Code',
  component: Code,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: fontSizeKeys,
      description: '폰트 크기를 설정합니다.',
      table: {
        type: { summary: fontSizeKeys.join('|') },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outline', 'ghost'],
      description: '텍스트의 변형을 설정합니다.',
      defaultValue: 'soft',
      table: {
        type: { summary: ['solid', 'soft', 'outline', 'ghost'].join('|') },
        defaultValue: { summary: 'soft' },
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

type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: 'console.log()',
  },
};

export const Size: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
          return (
            <Code
              {...props}
              key={index.toLocaleString()}
              size={(index + 1) as never}
            >
              console.log()
            </Code>
          );
        })}
      </Flex>
    );
  },
};

export const Variant: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['solid', 'soft', 'outline', 'ghost'] as const).map((variant) => {
          return (
            <Code {...props} key={variant} variant={variant}>
              console.log()
            </Code>
          );
        })}
      </Flex>
    );
  },
};

export const Color: Story = {
  render: (props) => {
    return (
      <Grid
        alignItems="start"
        gap={2}
        gridTemplateColumns={{
          xs: 1,
          sm: 3,
          md: 5,
          lg: 6,
        }}
        justifyItems="start"
      >
        {accentColors.map((color) => {
          return (
            <Code {...props} key={color} color={color}>
              console.log()
            </Code>
          );
        })}
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
            <Code {...props} key={weight} weight={weight}>
              console.log()
            </Code>
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
        <Code {...props} truncate>
          linear-gradient(red, orange, yellow, green, blue);
        </Code>
      </Flex>
    );
  },
};
