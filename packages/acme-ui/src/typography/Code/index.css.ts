import {
  type StyleRule,
  assignVars,
  createThemeContract,
} from '@vanilla-extract/css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import type { AccentColor } from '@acme/themes';
import { accentColors, vars } from '@acme/themes';

import { typographyLayer } from '../../shared/styles/layer.css';
import { conditions } from '../../shared/styles/properties.css';

type FontSizeKey = keyof typeof vars.typography.fontSize;
type FontWeightKey = keyof typeof vars.typography.fontWeight;

const fontSizeKeys = Object.keys(
  vars.typography.fontSize,
) as unknown as FontSizeKey[];
const fontWeightKeys = Object.keys(
  vars.typography.fontWeight,
) as unknown as FontWeightKey[];

export const colorVars = createThemeContract({
  solid: {
    backgroundColor: null,
    foregroundColor: null,
  },
  soft: {
    backgroundColor: null,
    foregroundColor: null,
  },
  outline: {
    backgroundColor: null,
    foregroundColor: null,
  },
});

export const Code = recipe({
  base: {
    '@layer': {
      [typographyLayer]: {
        lineHeight: 1.25,
        borderRadius: `calc(${vars.box.radius[1]} + 0.2em)`,

        boxSizing: 'border-box',
        paddingTop: '0.1em',
        paddingBottom: '0.1em',
        paddingLeft: '0.25em',
        paddingRight: '0.25em',
        height: 'fit-content',

        selectors: {
          '&:where(&)': {
            fontSize: 'inherit',
          },
        },
      },
    },
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: colorVars.solid.backgroundColor,
        color: colorVars.solid.foregroundColor,
      },
      soft: {
        backgroundColor: colorVars.soft.backgroundColor,
        color: colorVars.soft.foregroundColor,
      },
      outline: {
        boxShadow: `inset 0 0 0 max(1px, 0.033em) ${colorVars.outline.backgroundColor}`,
        color: colorVars.outline.foregroundColor,
      },
      ghost: {
        padding: 0,
      },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    color: Object.fromEntries(
      accentColors.map((color) => [
        color,
        {
          vars: assignVars(colorVars, {
            solid: {
              backgroundColor: vars.colors.scale[`${color}Alpha` as const][9],
              foregroundColor: vars.colors.scale[color].contrast,
            },
            soft: {
              backgroundColor: vars.colors.scale[`${color}Alpha` as const][3],
              foregroundColor: vars.colors.scale[`${color}Alpha` as const][11],
            },
            outline: {
              backgroundColor: vars.colors.scale[`${color}Alpha` as const][8],
              foregroundColor: vars.colors.scale[`${color}Alpha` as const][11],
            },
          }),
        },
      ]),
    ) as Record<AccentColor, StyleRule>,
  },
  defaultVariants: {
    variant: 'soft',
    color: 'indigo',
  },
});

export const CodeProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    size: fontSizeKeys.reduce(
      (acc, fontSizeKey) => {
        acc[fontSizeKey] = {
          fontSize: vars.typography.fontSize[fontSizeKey],
          lineHeight: vars.typography.lineHeight[fontSizeKey],
          letterSpacing: vars.typography.letterSpacing[fontSizeKey],
        };
        return acc;
      },
      {} as Record<FontSizeKey, StyleRule>,
    ),
    weight: fontWeightKeys.reduce(
      (acc, fontWeightKey) => {
        acc[fontWeightKey] = {
          fontWeight: vars.typography.fontWeight[fontWeightKey],
        };
        return acc;
      },
      {} as Record<FontWeightKey, StyleRule>,
    ),
    wrap: {
      wrap: {
        whiteSpace: 'wrap',
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
      pretty: {
        whiteSpace: 'pretty',
      },
      balance: {
        whiteSpace: 'balance',
      },
    },
  },
});

export const CodeSprinkles = createSprinkles(CodeProperties);

export type CodeVariants = RecipeVariants<typeof Code>;
export type CodeSprinkles = Parameters<typeof CodeSprinkles>[0];
