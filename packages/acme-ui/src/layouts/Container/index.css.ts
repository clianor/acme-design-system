import { createVar, style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

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

export const ContainerProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'initial'],
    size: {
      1: {
        vars: {
          [sizeVar]: '448px',
        },
      },
      2: {
        vars: {
          [sizeVar]: '688px',
        },
      },
      3: {
        vars: {
          [sizeVar]: '880px',
        },
      },
      4: {
        vars: {
          [sizeVar]: '1136px',
        },
      },
    },
    align: {
      left: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      right: {
        alignItems: 'flex-end',
      },
    },
  },
});

export const container = style({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  flexShrink: 0,
  flexGrow: 1,
});

export const innerContainer = style({
  width: '100%',
  maxWidth: sizeVar,
});

export const containerSprinkles = createSprinkles(
  ContainerProperties,
  MarginProperties,
  PaddingProperties,
  LayoutProperties,
  OverflowProperties,
  FlexAndGridProperties,
  SizeProperties,
);

export type ContainerSprinkles = Parameters<typeof containerSprinkles>[0];
