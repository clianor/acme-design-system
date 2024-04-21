import { style } from '@vanilla-extract/css';
import { createSprinkles } from '@vanilla-extract/sprinkles';

import { layoutLayer } from '../../shared/styles/layer.css';
import {
  BoxProperties,
  FlexAndGridProperties,
  LayoutProperties,
  MarginProperties,
  OverflowProperties,
  PaddingProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const box = style({
  '@layer': {
    [layoutLayer]: {
      boxSizing: 'border-box',
    },
  },
});

export const boxSprinkles = createSprinkles(
  BoxProperties,
  MarginProperties,
  PaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
