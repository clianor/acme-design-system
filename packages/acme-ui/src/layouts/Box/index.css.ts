import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  BoxProperties,
  FlexAndGridProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  OverflowProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const boxSprinkles = createSprinkles(
  BoxProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
