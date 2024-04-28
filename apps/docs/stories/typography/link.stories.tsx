import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Flex, Link } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Link> = {
  title: 'typography/Link',
  component: Link,
  parameters: {
    componentSubtitle: '페이지 간 탐색을 위한 컴포넌트',
  },
  argTypes: {
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
    underline: {
      control: { type: 'select' },
      options: ['auto', 'always', 'hover', 'none'],
      description: '링크의 밑줄 표시 여부를 설정합니다.',
      defaultValue: 'auto',
      table: {
        type: { summary: ['auto', 'always', 'hover', 'none'].join('|') },
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    href: '#',
    children: 'Sign up',
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (props) => {
    return <Link {...props} />;
  },
};

export const Size: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {[...new Array(9)].map((_, index) => {
          return (
            <Link
              {...props}
              key={index.toLocaleString()}
              size={(index + 1) as never}
            />
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
          return <Link {...props} key={weight} weight={weight} />;
        })}
      </Flex>
    );
  },
};

export const Color: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {accentColors.map((color) => {
          return <Link {...props} key={color} color={color} />;
        })}
      </Flex>
    );
  },
};

export const Truncate: Story = {
  render: (props) => {
    return (
      <Flex maxWidth={38}>
        <Link {...props} truncate>
          Sign up to the newsletter
        </Link>
      </Flex>
    );
  },
};

export const Underline: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={3}>
        {(['hover', 'always'] as const).map((underline) => {
          return <Link {...props} key={underline} underline={underline} />;
        })}
      </Flex>
    );
  },
};
