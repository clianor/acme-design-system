import { keyframes } from '@vanilla-extract/css';
import type { StyleRule } from '@vanilla-extract/css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';

import type { AccentColor } from '@acme/themes';
import { accentColors, vars } from '@acme/themes';

import { componentLayer } from '../../shared/styles/layer.css';

export const button = recipe({
  base: {
    '@layer': {
      [componentLayer]: {
        outline: 'none',
        boxSizing: 'border-box',
        border: 'none',
        cursor: 'pointer',

        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        userSelect: 'none',
        verticalAlign: 'top',

        selectors: {
          '&[data-disabled]': {
            cursor: 'not-allowed',
            color: vars.colors.scale.grayAlpha[8],
            backgroundColor: vars.colors.scale.grayAlpha[3],
          },
        },
      },
    },
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
    color: accentColors.reduce(
      (acc, color) => {
        const colorKey = `${color}Alpha` as const;
        acc[color] = {
          backgroundColor: vars.colors.scale[colorKey][3],
          color: vars.colors.scale[colorKey][11],
          selectors: {
            '&:not([data-disabled]):hover': {
              backgroundColor: vars.colors.scale[colorKey][4],
            },
            '&:not([data-disabled]):active': {
              backgroundColor: vars.colors.scale[colorKey][5],
            },
          },
        };
        return acc;
      },
      {} as Record<AccentColor, StyleRule>,
    ),
  },
  defaultVariants: {
    size: '2',
    color: 'indigo',
  },
});

const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = recipe({
  base: {
    '@layer': {
      [componentLayer]: {
        animation: `${spinKeyframes} 0.45s linear infinite`,
        display: 'inline-block',
        borderTop: '2px solid currentcolor',
        borderRight: '2px solid currentcolor',
        borderBottom: '2px solid transparent',
        borderLeft: '2px solid transparent',
        borderRadius: '50%',
      },
    },
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
