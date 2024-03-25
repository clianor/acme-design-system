import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Container } from '@acme/ui';

const meta: Meta<typeof Container> = {
  title: 'layouts/Container',
  component: Container,
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['none', 'initial'],
      description: '컨테이너의 디스플레이 유형을 설정합니다.',
      table: {
        type: { summary: ['none', 'initial'].join('|') },
      },
    },
    size: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: '컨테이너의 크기를 설정합니다.',
      table: {
        type: { summary: [1, 2, 3, 4].join('|') },
        defaultValue: { summary: '4' },
      },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: '컨테이너의 정렬 방식을 설정합니다.',
      table: {
        type: { summary: ['left', 'center', 'right'].join('|') },
        defaultValue: { summary: 'center' },
      },
    },
  },
  args: {
    size: 1,
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          width: '100%',
          height: '128px',
          background: vars.colors.scale.blue[4],
        }}
      />
    ),
  },
};
