import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Section } from '@acme/ui';

const meta: Meta<typeof Section> = {
  title: 'layouts/Section',
  component: Section,
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
        type: {
          summary: [1, 2, 3, 4].join(' | '),
          detail: '1 (24px) | 2 (40px) | 3 (64px) | 4 (80px)',
        },
        defaultValue: { summary: '3' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    style: {
      background: vars.colors.scale.blue[4],
    },
  },
};
