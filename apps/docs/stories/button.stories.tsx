import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Button } from '@acme/ui';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['1', '2', '3', '4'],
      defaultValue: '2',
      description: '버튼의 크기를 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '2' },
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: '버튼을 비활성화 상태로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      description: '버튼을 로딩 상태로 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loadingText: {
      control: 'text',
      defaultValue: 'Loading...',
      description: '로딩 상태일 때 표시할 텍스트를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'select' },
      options: accentColors,
      defaultValue: 'indigo',
      description: '버튼의 색상을 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'indigo' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Size: Story = {
  render: (props) => {
    return (
      <div style={{ display: 'flex', columnGap: '8px', alignItems: 'center' }}>
        <Button {...props} size="4" />
        <Button {...props} size="3" />
        <Button {...props} size="2" />
        <Button {...props} size="1" />
      </div>
    );
  },
  args: {
    children: 'Click me',
    type: 'button',
  },
};

export const Primary: Story = {
  render: (props) => <Button {...props} />,
  args: {
    children: 'Click me',
    type: 'button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    type: 'button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Click me',
    type: 'button',
    loading: true,
    loadingText: 'Loading...',
  },
};
