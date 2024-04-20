import type { StyleRule } from '@vanilla-extract/css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import type { AccentColor } from '@acme/themes';
import { accentColors, vars } from '@acme/themes';

import { conditions } from '../../shared/styles/properties.css';

type FontSizeKey = keyof typeof vars.typography.fontSize;
type FontWeightKey = keyof typeof vars.typography.fontWeight;

const fontSizeKeys = Object.keys(
  vars.typography.fontSize,
) as unknown as FontSizeKey[];
const fontWeightKeys = Object.keys(
  vars.typography.fontWeight,
) as unknown as FontWeightKey[];

export const Blockquote = recipe({
  base: {
    boxSizing: 'border-box',
    borderLeft: `max(${vars.box.spacing[1]}, 0.25em)`,
    borderLeftStyle: 'solid',
    borderLeftColor: vars.colors.scale.indigoAlpha[6],
    paddingLeft: `min(${vars.box.spacing[5]}, max(${vars.box.spacing[3]}, 0.5em))`,
    selectors: {
      '&:where(&)': {
        margin: 0,
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
        { borderLeftColor: vars.colors.scale[`${color}Alpha` as const][6] },
      ]),
    ) as Record<AccentColor, StyleRule>,
  },
});

export const BlockquoteProperties = defineProperties({
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

export const BlockquoteSprinkles = createSprinkles(BlockquoteProperties);

export type BlockquoteVariants = RecipeVariants<typeof Blockquote>;
export type BlockquoteSprinkles = Parameters<typeof BlockquoteSprinkles>[0];
