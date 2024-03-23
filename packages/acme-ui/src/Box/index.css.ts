import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  BoxDisplayProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  SizeProperties,
} from '../styles/properties.css';

export const boxSprinkles = createSprinkles(
  BoxDisplayProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  SizeProperties,
);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
