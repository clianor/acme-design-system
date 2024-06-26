import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box, Grid } from '@acme/ui';

import { spacingKeys } from '../utils/constants';

const meta: Meta<typeof Grid> = {
  title: 'layouts/Grid',
  component: Grid,
  parameters: {
    componentSubtitle: '그리드 컴포넌트',
    docs: {
      description: {
        component: '그리드 레이아웃을 생성하는 컴포넌트.',
      },
    },
  },
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['none', 'inline-grid', 'grid'],
      defaultValue: 'grid',
      description: 'Grid 컨테이너의 display 속성을 설정합니다.',
      table: {
        type: { summary: ['none', 'inline-grid', 'grid'].join('|') },
        defaultValue: { summary: 'grid' },
      },
    },
    gridTemplateColumns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid'],
      description: 'Grid 컨테이너의 열 구조를 정의합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    gridTemplateRows: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none', 'subgrid'],
      description: 'Grid 컨테이너의 행 구조를 정의합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    gridAutoFlow: {
      control: { type: 'select' },
      options: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
      description: '자동 배치 알고리즘의 방향을 설정합니다.',
      table: {
        type: {
          summary: ['row', 'column', 'dense', 'row-dense', 'column-dense'].join(
            '|',
          ),
        },
      },
    },
    alignContent: {
      control: { type: 'select' },
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
      ],
      description:
        '그리드 항목들을 컨테이너의 교차 축(cross-axis)에 대해 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: [
            'start',
            'center',
            'end',
            'space-between',
            'space-around',
            'space-evenly',
            'stretch',
          ].join('|'),
        },
      },
    },
    alignItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description:
        '그리드 항목들을 컨테이너의 교차 축(cross-axis)에 대해 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'stretch', 'baseline'].join('|'),
        },
      },
    },
    alignSelf: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description:
        '개별 그리드 항목을 컨테이너의 교차 축(cross-axis)에 대해 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'stretch', 'baseline'].join('|'),
        },
      },
    },
    justifyContent: {
      control: { type: 'select' },
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description:
        '그리드 항목들을 컨테이너의 주 축(main-axis)에 대해 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: [
            'start',
            'center',
            'end',
            'space-between',
            'space-around',
            'space-evenly',
          ].join('|'),
        },
      },
    },
    justifyItems: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description:
        '그리드 항목들을 그리드 영역 내에서 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'stretch'].join('|'),
        },
      },
    },
    justifySelf: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description:
        '개별 그리드 항목을 해당 그리드 영역 내에서 어떻게 정렬할지 설정합니다.',
      table: {
        type: {
          summary: ['start', 'center', 'end', 'stretch'].join('|'),
        },
      },
    },
    gap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Grid 항목들 사이의 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
    rowGap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Grid 항목들 사이의 세로 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
    columnGap: {
      control: { type: 'select' },
      options: spacingKeys,
      description: 'Grid 항목들 사이의 가로 간격을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
      },
    },
  },
  args: {
    display: 'grid',
    gridTemplateColumns: 3,
    gap: 3,
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: [...Array(9)].map((_) => {
      return (
        <Box key={Math.random().toString(36)} height={16} width="auto">
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
