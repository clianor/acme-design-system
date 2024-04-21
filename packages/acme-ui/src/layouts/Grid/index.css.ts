import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  FlexAndGridProperties,
  GridProperties,
  LayoutProperties,
  MarginProperties,
  OverflowProperties,
  PaddingProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const gridSprinkles = createSprinkles(
  GridProperties,
  MarginProperties,
  PaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type GridSprinkles = Parameters<typeof gridSprinkles>[0];
