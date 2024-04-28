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
  color: null,
  textDecorationColor: null,
  outlineColor: null,
});

export const link = recipe({
  base: {
    '@layer': {
      [typographyLayer]: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: colorVars.color,
        textDecorationColor: colorVars.textDecorationColor,
        textDecorationLine: 'none',
        textDecorationStyle: 'solid',
        textDecorationThickness: 'min(2px, max(1px, 0.05em))',
        textUnderlineOffset: 'calc(0.025em + 2px)',
        selectors: {
          '&:where(:disabled, [data-disabled])': {
            cursor: 'not-allowed',
          },
          '&:focus-visible': {
            borderRadius: '0.07em',
            outlineColor: colorVars.outlineColor,
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineOffset: '2px',
          },
        },
      },
    },
  },
  variants: {
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
            color: vars.colors.scale[color][11],
            textDecorationColor: vars.colors.scale[`${color}Alpha`][5],
            outlineColor: vars.colors.scale[`${color}Alpha`][8],
          }),
        },
      ]),
    ) as Record<AccentColor, StyleRule>,
    underline: {
      auto: {
        ':hover': {
          textDecorationLine: 'underline',
        },
      },
      always: {
        textDecorationLine: 'underline',
      },
      hover: {
        ':hover': {
          textDecorationLine: 'underline',
        },
      },
      none: {},
    },
  },
  defaultVariants: {
    underline: 'auto',
    color: 'indigo',
  },
});

export const LinkProperties = defineProperties({
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

export const linkSprinkles = createSprinkles(LinkProperties);

export type LinkVariants = RecipeVariants<typeof link>;
export type LinkSprinkles = Parameters<typeof linkSprinkles>[0];
