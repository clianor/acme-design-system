import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '@acme/themes';

import { typographyLayer } from '../../shared/styles/layer.css';
import { conditions } from '../../shared/styles/properties.css';

export const strong = recipe({
  base: {
    '@layer': {
      [typographyLayer]: {
        fontWeight: vars.typography.fontWeight.bold,
        selectors: {
          '&:where(&)': {
            fontSize: 'inherit',
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
  },
});

export const StrongProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
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

export const strongSprinkles = createSprinkles(StrongProperties);

export type StrongVariants = RecipeVariants<typeof strong>;
export type StrongSprinkles = Parameters<typeof strongSprinkles>[0];
