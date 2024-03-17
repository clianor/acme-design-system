import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import * as variables from './variables';

export const vars = createGlobalThemeContract(
  variables,
  (_value, path) => `acme-${path.join('-')}`,
);

createGlobalTheme(':root', vars, variables);
