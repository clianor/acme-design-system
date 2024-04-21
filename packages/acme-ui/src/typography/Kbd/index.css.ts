import type { StyleRule } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '@acme/themes';

import { typographyLayer } from '../../shared/styles/layer.css';
import { conditions } from '../../shared/styles/properties.css';

type FontSizeKey = keyof typeof vars.typography.fontSize;

const fontSizeKeys = Object.keys(
  vars.typography.fontSize,
) as unknown as FontSizeKey[];

export const kbd = style({
  '@layer': {
    [typographyLayer]: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontWeight: vars.typography.fontWeight.regular,
      verticalAlign: 'text-top',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      position: 'relative',
      top: '-0.03em',
      minWidth: '1.75em',
      lineHeight: '1.7em',
      boxSizing: 'border-box',
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
      paddingBottom: '0.05em',
      wordSpacing: '-0.1em',
      borderRadius: '0.35em',
      height: 'fit-content',
      color: vars.colors.scale.gray[12],
      backgroundColor: vars.colors.scale.gray[1],
      boxShadow: `inset 0 -0.05em 0.5em ${vars.colors.scale.grayAlpha[2]}, inset 0 0.05em ${vars.colors.overlay.whiteAlpha[12]}, inset 0 0.25em 0.5em ${vars.colors.scale.grayAlpha[2]}, inset 0 -0.05em ${vars.colors.scale.grayAlpha[6]}, 0 0 0 0.05em ${vars.colors.scale.grayAlpha[5]}, 0 0.08em 0.17em ${vars.colors.scale.grayAlpha[7]};`,
      transition: 'box-shadow 0.12s, background-color 0.12s',
    },
  },
});

export const KbdProperties = defineProperties({
  conditions,
  defaultCondition: 'initial',
  properties: {
    size: fontSizeKeys.reduce(
      (acc, fontSizeKey) => {
        acc[fontSizeKey] = {
          fontSize: `calc(${vars.typography.fontSize[fontSizeKey]} * 0.8)`,
        };
        return acc;
      },
      {} as Record<FontSizeKey, StyleRule>,
    ),
  },
});

export const kbdSprinkles = createSprinkles(KbdProperties);

export type KbdSprinkles = Parameters<typeof kbdSprinkles>[0];
