import type { Meta, StoryObj } from '@storybook/react';

import { accentColors } from '@acme/themes';
import { Blockquote } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Blockquote> = {
  title: 'typography/Blockquote',
  component: Blockquote,
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['span', 'div', 'label', 'p'],
      defaultValue: 'span',
      description: 'Text 태그를 설정합니다.',
      table: {
        type: {
          summary: ['span', 'div', 'label', 'p'].join('|'),
          defaultValue: { summary: 'span' },
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

type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children:
      'Perfect typography is certainly the most elusive of all arts. Sculpture in stone alone comes near it in obstinacy.',
  },
};

export const Size: Story = {
  render: (props) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
        {[...new Array(9)].map((_, index) => {
          return (
            <Blockquote size={(index + 1) as never}>
              Perfect typography is certainly the most elusive of all arts.
              Sculpture in stone alone comes near it in obstinacy.
            </Blockquote>
          );
        })}
      </div>
    );
  },
};
