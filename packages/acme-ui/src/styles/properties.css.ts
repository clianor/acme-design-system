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

export const BoxProperties = defineProperties({
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
    alignContent: ['start', 'center', 'end', 'baseline', 'stretch'],
    alignItems: ['start', 'center', 'end', 'baseline', 'stretch'],
    alignSelf: ['start', 'center', 'end', 'baseline', 'stretch'],
    justifyContent: ['start', 'center', 'end', 'between'],
    justifyItems: ['start', 'center', 'end', 'between'],
    justifySelf: ['start', 'center', 'end', 'between'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: vars.box.spacing,
    rowGap: vars.box.spacing,
    columnGap: vars.box.spacing,
  },
});

export const GridProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    display: ['none', 'inline-grid', 'grid'],
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
    },
    gridAutoFlow: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
    alignContent: ['start', 'center', 'end', 'baseline', 'stretch'],
    alignItems: ['start', 'center', 'end', 'baseline', 'stretch'],
    alignSelf: ['start', 'center', 'end', 'baseline', 'stretch'],
    justifyContent: ['start', 'center', 'end', 'between'],
    justifyItems: ['start', 'center', 'end', 'between'],
    justifySelf: ['start', 'center', 'end', 'between'],
    gap: vars.box.spacing,
    rowGap: vars.box.spacing,
    columnGap: vars.box.spacing,
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
