import type { RecipeVariants } from '@vanilla-extract/recipes';
import { recipe } from '@vanilla-extract/recipes';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { typographyLayer } from '../../shared/styles/layer.css';
import { conditions } from '../../shared/styles/properties.css';

export const quote = recipe({
  base: {
    '@layer': {
      [typographyLayer]: {
        boxSizing: 'border-box',
        fontStyle: 'italic',
        fontWeight: 'inherit',
        lineHeight: 1.25,
        color: 'inherit',
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

export const QuoteProperties = defineProperties({
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

export const quoteSprinkles = createSprinkles(QuoteProperties);

export type QuoteVariants = RecipeVariants<typeof quote>;
export type QuoteSprinkles = Parameters<typeof quoteSprinkles>[0];
