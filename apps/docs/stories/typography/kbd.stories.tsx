import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Kbd } from '@acme/ui';

import { fontSizeKeys } from '../utils/constants';

const meta: Meta<typeof Kbd> = {
  title: 'typography/Kbd',
  component: Kbd,
  parameters: {
    componentSubtitle: '키보드 입력 또는 단축키를 나타내는 컴포넌트',
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
  },
  args: {
    children: 'Shift + Tab',
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: (props) => {
    return <Kbd {...props} />;
  },
};

export const Size: Story = {
  render: (props) => {
    return (
      <Flex alignItems="start" flexDirection="column" rowGap={4}>
        {[...new Array(9)].map((_, index) => {
          return (
            <Kbd
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
