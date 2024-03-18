import { keyframes } from '@vanilla-extract/css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@acme/themes';

export const button = recipe({
  base: {
    boxSizing: 'border-box',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    userSelect: 'none',
    verticalAlign: 'top',
  },
  variants: {
    size: {
      '1': {
        paddingLeft: vars.box.spacing[2],
        paddingRight: vars.box.spacing[2],

        gap: vars.box.spacing[1],
        fontSize: vars.typography.fontSize[1],
        lineHeight: vars.typography.lineHeight[1],
        letterSpacing: vars.typography.letterSpacing[1],

        height: vars.box.spacing[5],
      },
      '2': {
        paddingLeft: vars.box.spacing[3],
        paddingRight: vars.box.spacing[3],

        gap: vars.box.spacing[2],
        fontSize: vars.typography.fontSize[2],
        lineHeight: vars.typography.lineHeight[2],
        letterSpacing: vars.typography.letterSpacing[2],

        height: vars.box.spacing[6],
      },
      '3': {
        paddingLeft: vars.box.spacing[4],
        paddingRight: vars.box.spacing[4],

        gap: vars.box.spacing[3],
        fontSize: vars.typography.fontSize[3],
        lineHeight: vars.typography.lineHeight[3],
        letterSpacing: vars.typography.letterSpacing[3],

        height: vars.box.spacing[7],
      },
      '4': {
        paddingLeft: vars.box.spacing[5],
        paddingRight: vars.box.spacing[5],

        gap: vars.box.spacing[4],
        fontSize: vars.typography.fontSize[4],
        lineHeight: vars.typography.lineHeight[4],
        letterSpacing: vars.typography.letterSpacing[4],

        height: vars.box.spacing[8],
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
});

const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = recipe({
  base: {
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: 'inline-block',
    borderTop: '2px solid currentcolor',
    borderRight: '2px solid currentcolor',
    borderBottom: '2px solid transparent',
    borderLeft: '2px solid transparent',
    borderRadius: '50%',
  },
  variants: {
    size: {
      '1': {
        width: vars.box.spacing[1],
        height: vars.box.spacing[1],
      },
      '2': {
        width: vars.box.spacing[2],
        height: vars.box.spacing[2],
      },
      '3': {
        width: vars.box.spacing[3],
        height: vars.box.spacing[3],
      },
      '4': {
        width: vars.box.spacing[4],
        height: vars.box.spacing[4],
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
