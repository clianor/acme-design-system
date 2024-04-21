import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box, Flex } from '@acme/ui';

import { spacingKeys } from '../utils/constants';

const meta: Meta<typeof Flex> = {
  title: 'layouts/Flex',
  component: Flex,
  parameters: {
    componentSubtitle: '플렉스 컴포넌트',
    docs: {
      description: {
        component: '플렉스 레이아웃을 생성하는 컴포넌트.',
      },
    },
  },
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['none', 'flex', 'inline-flex'],
      description: 'Flex 컨테이너의 display 속성을 설정합니다.',
      table: {
        type: { summary: ['none', 'flex', 'inline-flex'].join('|') },
      },
    },
    flexDirection: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex 항목들의 주 축을 설정합니다.',
      table: {
        type: {
          summary: ['row', 'column', 'row-reverse', 'column-reverse'].join('|'),
        },
      },
    },
    alignContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Flex 컨테이너의 교차 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'baseline', 'stretch'].join('|'),
        },
      },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Flex 항목들의 교차 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'baseline', 'stretch'].join('|'),
        },
      },
    },
    alignSelf: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'baseline', 'stretch'],
      description: 'Flex 항목의 교차 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'baseline', 'stretch'].join('|'),
        },
      },
    },
    justifyContent: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between'],
      description: 'Flex 항목들의 주 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: { summary: ['start', 'center', 'end', 'between'].join('|') },
      },
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between'],
      description: 'Flex 항목들의 주 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: { summary: ['start', 'center', 'end', 'between'].join('|') },
      },
    },
    justifySelf: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between'],
      description: 'Flex 항목의 주 축에 대한 정렬 방식을 설정합니다.',
      table: {
        type: { summary: ['start', 'center', 'end', 'between'].join('|') },
      },
    },
    flexWrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex 항목들이 여러 줄로 나누어질지 여부를 설정합니다.',
      table: {
        type: { summary: ['nowrap', 'wrap', 'wrap-reverse'].join('|') },
      },
    },
    gap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Flex 항목들 사이의 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
    rowGap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Flex 항목들 사이의 세로 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
    columnGap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Flex 항목들 사이의 가로 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
  },
  args: {
    display: 'flex',
    gap: 3,
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: [...Array(5)].map((_) => {
      return (
        <Box key={Math.random().toString(36)} height={16} width={16}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: vars.colors.scale.blue[4],
            }}
          />
        </Box>
      );
    }),
  },
};
