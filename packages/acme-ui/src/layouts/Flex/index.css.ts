import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  FlexAndGridProperties,
  FlexProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  OverflowProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const flexSprinkles = createSprinkles(
  FlexProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];
