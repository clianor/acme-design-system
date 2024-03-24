import { defineProperties } from '@vanilla-extract/sprinkles';

import { breakpoints, vars } from '@acme/themes';

const conditions = {
  initial: {},
  xs: { '@media': `screen and (min-width: ${breakpoints.xs})` },
  sm: { '@media': `screen and (min-width: ${breakpoints.sm})` },
  md: { '@media': `screen and (min-width: ${breakpoints.md})` },
  lg: { '@media': `screen and (min-width: ${breakpoints.lg})` },
  xl: { '@media': `screen and (min-width: ${breakpoints.xl})` },
} as const;

export const BoxDisplayProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'inline', 'inline-block', 'block'],
  },
});

export const FlexProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'flex', 'inline-flex'],
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    alignItems: ['start', 'center', 'end', 'baseline', 'stretch'],
    justifyContent: ['start', 'center', 'end', 'between'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    rowGap: vars.box.spacing,
    columnGap: vars.box.spacing,
  },
  shorthands: {
    gap: ['rowGap', 'columnGap'],
  },
});
  },
});

export const MarginAndPaddingProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    marginTop: vars.box.spacing,
    marginRight: vars.box.spacing,
    marginBottom: vars.box.spacing,
    marginLeft: vars.box.spacing,
    paddingTop: vars.box.spacing,
    paddingRight: vars.box.spacing,
    paddingBottom: vars.box.spacing,
    paddingLeft: vars.box.spacing,
  },
  shorthands: {
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});

export const LayoutProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    inset: ['auto', '0', '50%', '100%'],
    top: ['auto', '0', '50%', '100%'],
    right: ['auto', '0', '50%', '100%'],
    bottom: ['auto', '0', '50%', '100%'],
    left: ['auto', '0', '50%', '100%'],
  },
});

export const SizeProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    width: {
      auto: 'auto',
      minContent: 'min-content',
      maxContent: 'max-content',
      full: '100%',
      ...vars.box.spacing,
    },
    height: {
      auto: 'auto',
      minContent: 'min-content',
      maxContent: 'max-content',
      full: '100%',
      ...vars.box.spacing,
    },
    flexShrink: ['0', '1'],
    flexGrow: ['0', '1'],
  },
});
