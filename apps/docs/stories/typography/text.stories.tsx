import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Text } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Text> = {
  title: 'typography/Text',
  component: Text,
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
      options: ['normal', 'bold', 'bolder', 'lighter'],
      description: ['normal', 'bold', 'bolder', 'lighter'].join('|'),
      table: {
        type: { summary: 'string' },
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
