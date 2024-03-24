import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  BoxProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  SizeProperties,
} from '../styles/properties.css';

export const boxSprinkles = createSprinkles(
  BoxProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  SizeProperties,
);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
