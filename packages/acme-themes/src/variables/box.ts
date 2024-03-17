import { overlay, scale } from './colors';

export const spacing = {
  1: '.25rem',
  2: '.5rem',
  3: '.75rem',
  4: '1rem',
  5: '1.5rem',
  6: '2rem',
  7: '2.5rem',
  8: '3rem',
  9: '4rem',
} as const;

export const radius = {
  1: '.1875rem',
  2: '.25rem',
  3: '.375rem',
  4: '.5rem',
  5: '.75rem',
  6: '1rem',
} as const;

export const shadows = {
  1: `
    inset 0 0 0 1px ${scale.grayAlpha[5]},
    inset 0 1.5px 2px 0 ${scale.grayAlpha[2]},
    inset 0 1.5px 2px 0 ${overlay.blackAlpha[2]}
  `,
  2: `
    0 0 0 1px ${scale.grayAlpha[3]},
    0 0 0 0.5px ${overlay.blackAlpha[1]},
    0 1px 1px 0 ${scale.grayAlpha[2]},
    0 2px 1px -1px ${overlay.blackAlpha[1]},
    0 1px 3px 0 ${overlay.blackAlpha[1]}
  `,
  3: `
    0 0 0 1px ${scale.grayAlpha[3]},
    0 2px 3px -2px ${scale.grayAlpha[3]},
    0 3px 12px -4px ${overlay.blackAlpha[2]},
    0 4px 16px -8px ${overlay.blackAlpha[2]}
  `,
  4: `
    0 0 0 1px ${scale.grayAlpha[3]},
    0 8px 40px ${overlay.blackAlpha[1]},
    0 12px 32px -16px ${scale.grayAlpha[3]}
  `,
  5: `
    0 0 0 1px ${scale.grayAlpha[3]},
    0 12px 60px ${overlay.blackAlpha[3]},
    0 12px 32px -16px ${scale.grayAlpha[5]}
  `,
  6: `
    0 0 0 1px ${scale.grayAlpha[3]},
    0 12px 60px ${overlay.blackAlpha[3]},
    0 16px 64px ${scale.grayAlpha[2]},
    0 16px 36px -20px ${scale.grayAlpha[7]}
  `,
} as const;
