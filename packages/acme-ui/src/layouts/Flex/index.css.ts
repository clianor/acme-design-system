import { style } from '@vanilla-extract/css';
import { createSprinkles } from '@vanilla-extract/sprinkles';

import {
  FlexAndGridProperties,
  FlexProperties,
  LayoutProperties,
  MarginProperties,
  OverflowProperties,
  PaddingProperties,
  SizeProperties,
} from '../../shared/styles/properties.css';

export const flex = style({
  justifyContent: 'flex-start',
});

export const flexSprinkles = createSprinkles(
  FlexProperties,
  MarginProperties,
  PaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];
