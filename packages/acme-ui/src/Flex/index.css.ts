import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  FlexProperties,
  LayoutProperties,
  MarginAndPaddingProperties,
  SizeProperties,
} from '../styles/properties.css';

export const flexSprinkles = createSprinkles(
  FlexProperties,
  MarginAndPaddingProperties,
  LayoutProperties,
  SizeProperties,
);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];
