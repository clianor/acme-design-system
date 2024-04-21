import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { typographyLayer } from '../../shared/styles/layer.css';
import { conditions } from '../../shared/styles/properties.css';

export const em = recipe({
  base: {
    '@layer': {
      [typographyLayer]: {
        boxSizing: 'border-box',
        lineHeight: 1.25,
        color: 'inherit',
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

export const EmProperties = defineProperties({
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

export const emSprinkles = createSprinkles(EmProperties);

export type EmVariants = RecipeVariants<typeof em>;
export type EmSprinkles = Parameters<typeof emSprinkles>[0];
