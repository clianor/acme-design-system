import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  GridProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  SizeProperties,
} from '../styles/properties.css';

export const gridSprinkles = createSprinkles(
  GridProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  SizeProperties,
);

export type GridSprinkles = Parameters<typeof gridSprinkles>[0];
