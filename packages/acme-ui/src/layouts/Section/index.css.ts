import { createVar, style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '@acme/themes';

import {
  FlexAndGridProperties,
  LayoutProperties,
  MarginProperties,
  OverflowProperties,
  PaddingProperties,
  SizeProperties,
  conditions,
} from '../../shared/styles/properties.css';

const sizeVar = createVar();

export const SectionProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'initial'],
    size: {
      1: {
        vars: {
          [sizeVar]: vars.box.spacing[5],
        },
      },
      2: {
        vars: {
          [sizeVar]: vars.box.spacing[7],
        },
      },
      3: {
        vars: {
          [sizeVar]: vars.box.spacing[9],
        },
      },
      4: {
        vars: {
          [sizeVar]: '5rem',
        },
      },
    },
  },
});

export const section = style({
  boxSizing: 'border-box',
  flexShrink: 0,
  paddingTop: sizeVar,
  paddingBottom: sizeVar,
});

export const sectionSprinkles = createSprinkles(
  SectionProperties,
  MarginProperties,
  PaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type SectionSprinkles = Parameters<typeof sectionSprinkles>[0];
