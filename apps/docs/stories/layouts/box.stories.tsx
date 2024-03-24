import type { Meta, StoryObj } from '@storybook/react';

import { vars } from '@acme/themes';
import { Box } from '@acme/ui';

import { dimensionKeys, spacingKeys } from '../utils/constants';

const layoutCategoryTitle = '레이아웃 컴포넌트 공통';

const meta: Meta<typeof Box> = {
  title: 'layouts/Box',
  component: Box,
  argTypes: {
    display: {
      control: { type: 'select' },
      options: ['none', 'inline', 'inline-block', 'block'],
      defaultValue: 'block',
      description: '박스의 디스플레이 유형을 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
      },
    },
    // * 아래의 내용은 Box, Flex, Grid 컴포넌트에서 공유되는 Props입니다.
    marginTop: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '상단 여백을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    marginRight: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '우측 여백을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    marginBottom: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '하단 여백을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    marginLeft: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '좌측 여백을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    paddingTop: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '상단 패딩을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    paddingRight: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '우측 패딩을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    paddingBottom: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '하단 패딩을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    paddingLeft: {
      control: { type: 'select' },
      options: spacingKeys,
      description: '좌측 패딩을 설정합니다.',
      table: {
        type: { summary: spacingKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Spacing',
      },
    },
    position: {
      control: { type: 'select' },
      options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
      description: '박스의 위치 유형을 설정합니다.',
      table: {
        type: {
          summary: ['static', 'relative', 'absolute', 'fixed', 'sticky'].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    inset: {
      control: { type: 'select' },
      options: ['auto', '0', '50%', '100%'],
      description: '박스의 위치를 상대적으로 조정합니다.',
      table: {
        type: { summary: ['auto', '0', '50%', '100%'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    top: {
      control: { type: 'select' },
      options: ['auto', '0', '50%', '100%'],
      description: '상단에서의 위치를 설정합니다.',
      table: {
        type: { summary: ['auto', '0', '50%', '100%'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    right: {
      control: { type: 'select' },
      options: ['auto', '0', '50%', '100%'],
      description: '우측에서의 위치를 설정합니다.',
      table: {
        type: { summary: ['auto', '0', '50%', '100%'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    bottom: {
      control: { type: 'select' },
      options: ['auto', '0', '50%', '100%'],
      description: '하단에서의 위치를 설정합니다.',
      table: {
        type: { summary: ['auto', '0', '50%', '100%'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    left: {
      control: { type: 'select' },
      options: ['auto', '0', '50%', '100%'],
      description: '좌측에서의 위치를 설정합니다.',
      table: {
        type: { summary: ['auto', '0', '50%', '100%'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Position',
      },
    },
    overflow: {
      control: { type: 'select' },
      options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      description: '컨텐츠가 박스를 넘어갈 때 어떻게 처리할지 설정합니다.',
      table: {
        type: {
          summary: ['visible', 'hidden', 'clip', 'scroll', 'auto'].join('|'),
        },
        category: layoutCategoryTitle,
        subcategory: 'Overflow',
      },
    },
    overflowX: {
      control: { type: 'select' },
      options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      description:
        '컨텐츠가 박스의 가로를 넘어갈 때 어떻게 처리할지 설정합니다.',
      table: {
        type: {
          summary: ['visible', 'hidden', 'clip', 'scroll', 'auto'].join('|'),
        },
        category: layoutCategoryTitle,
        subcategory: 'Overflow',
      },
    },
    overflowY: {
      control: { type: 'select' },
      options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
      description:
        '컨텐츠가 박스의 세로를 넘어갈 때 어떻게 처리할지 설정합니다.',
      table: {
        type: {
          summary: ['visible', 'hidden', 'clip', 'scroll', 'auto'].join('|'),
        },
        category: layoutCategoryTitle,
        subcategory: 'Overflow',
      },
    },
    flexBasis: {
      control: { type: 'select' },
      options: dimensionKeys,
      description: 'flex 항목의 기본 크기를 설정합니다.',
      table: {
        type: { summary: dimensionKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Flexbox',
      },
    },
    flexShrink: {
      control: { type: 'select' },
      options: ['0', '1'],
      description: 'flex 항목이 축소될 수 있는지 여부를 설정합니다.',
      table: {
        type: { summary: ['0', '1'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Flexbox',
      },
    },
    flexGrow: {
      control: { type: 'select' },
      options: ['0', '1'],
      description: 'flex 항목이 확장될 수 있는지 여부를 설정합니다.',
      table: {
        type: { summary: ['0', '1'].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Flexbox',
      },
    },
    gridColumn: {
      control: { type: 'select' },
      options: ['auto', 'full', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '그리드 항목이 차지할 열의 크기를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 'full', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    gridColumnStart: {
      control: { type: 'select' },
      options: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      description: '그리드 항목이 시작하는 열의 위치를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    gridColumnEnd: {
      control: { type: 'select' },
      options: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      description: '그리드 항목이 끝나는 열의 위치를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    gridRow: {
      control: { type: 'select' },
      options: ['auto', 'full', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: '그리드 항목이 차지할 행의 크기를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 'full', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    gridRowStart: {
      control: { type: 'select' },
      options: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      description: '그리드 항목이 시작하는 행의 위치를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    gridRowEnd: {
      control: { type: 'select' },
      options: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      description: '그리드 항목이 끝나는 행의 위치를 설정합니다.',
      table: {
        type: {
          summary: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].join(
            '|',
          ),
        },
        category: layoutCategoryTitle,
        subcategory: 'Grid',
      },
    },
    width: {
      control: { type: 'select' },
      options: ['svw', 'lvw', 'dvw', ...dimensionKeys],
      description: '박스의 너비를 설정합니다.',
      table: {
        type: { summary: ['svw', 'lvw', 'dvw', ...dimensionKeys].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
    minWidth: {
      control: { type: 'select' },
      options: dimensionKeys,
      description: '박스의 최소 너비를 설정합니다.',
      table: {
        type: { summary: dimensionKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
    maxWidth: {
      control: { type: 'select' },
      options: dimensionKeys,
      description: '박스의 최대 너비를 설정합니다.',
      table: {
        type: { summary: dimensionKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
    height: {
      control: { type: 'select' },
      options: ['svh', 'lvh', 'dvh', ...dimensionKeys],
      description: '박스의 높이를 설정합니다.',
      table: {
        type: { summary: ['svh', 'lvh', 'dvh', ...dimensionKeys].join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
    minHeight: {
      control: { type: 'select' },
      options: dimensionKeys,
      description: '박스의 최소 높이를 설정합니다.',
      table: {
        type: { summary: dimensionKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
    maxHeight: {
      control: { type: 'select' },
      options: dimensionKeys,
      description: '박스의 최대 높이를 설정합니다.',
      table: {
        type: { summary: dimensionKeys.join('|') },
        category: layoutCategoryTitle,
        subcategory: 'Dimension',
      },
    },
  },
  args: {
    display: 'block',
    width: 16,
    height: 16,
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: vars.colors.scale.blue[4],
        }}
      />
    ),
  },
};
