import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  FlexAndGridProperties,
  GridProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  OverflowProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const gridSprinkles = createSprinkles(
  GridProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type GridSprinkles = Parameters<typeof gridSprinkles>[0];
