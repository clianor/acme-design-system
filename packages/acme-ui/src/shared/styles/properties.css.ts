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

const dimensions = {
  auto: 'auto',
  full: '100%',
  '1/2': '50%',
  '1/3': '33.33333%',
  '2/3': '66.66667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.66667%',
  '2/6': '33.33333%',
  '3/6': '50%',
  '4/6': '66.66667%',
  '5/6': '83.33333%',
  '1/12': '8.33333%',
  '2/12': '16.66667%',
  '3/12': '25%',
  '4/12': '33.33333%',
  '5/12': '41.66667%',
  '6/12': '50%',
  '7/12': '58.33333%',
  '8/12': '66.66667%',
  '9/12': '75%',
  '10/12': '83.33333%',
  '11/12': '91.66667%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

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
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      none: 'none',
      subgrid: 'subgrid',
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
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
      none: 'none',
      subgrid: 'subgrid',
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

export const OverflowProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    overflow: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    overflowX: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    overflowY: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  },
});

export const FlexAndGridProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    flexBasis: {
      ...dimensions,
      ...vars.box.dimensions,
    },
    flexShrink: ['0', '1'],
    flexGrow: ['0', '1'],
    gridColumn: {
      auto: 'auto',
      full: '1 / -1',
      1: 'span 1 / span 1',
      2: 'span 2 / span 2',
      3: 'span 3 / span 3',
      4: 'span 4 / span 4',
      5: 'span 5 / span 5',
      6: 'span 6 / span 6',
      7: 'span 7 / span 7',
      8: 'span 8 / span 8',
      9: 'span 9 / span 9',
      10: 'span 10 / span 10',
      11: 'span 11 / span 11',
      12: 'span 12 / span 12',
    },
    gridColumnStart: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    gridColumnEnd: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    gridRow: {
      auto: 'auto',
      full: '1 / -1',
      1: 'span 1 / span 1',
      2: 'span 2 / span 2',
      3: 'span 3 / span 3',
      4: 'span 4 / span 4',
      5: 'span 5 / span 5',
      6: 'span 6 / span 6',
      7: 'span 7 / span 7',
      8: 'span 8 / span 8',
      9: 'span 9 / span 9',
      10: 'span 10 / span 10',
      11: 'span 11 / span 11',
      12: 'span 12 / span 12',
    },
    gridRowStart: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    gridRowEnd: ['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
});

export const SizeProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    width: {
      svw: '100svw',
      lvw: '100lvw',
      dvw: '100dvw',
      ...dimensions,
      ...vars.box.dimensions,
    },
    minWidth: { ...dimensions, ...vars.box.dimensions },
    maxWidth: { ...dimensions, ...vars.box.dimensions },
    height: {
      svh: '100svh',
      lvh: '100lvh',
      dvh: '100dvh',
      ...dimensions,
      ...vars.box.dimensions,
    },
    minHeight: { ...dimensions, ...vars.box.dimensions },
    maxHeight: { ...dimensions, ...vars.box.dimensions },
  },
});
