import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import * as variables from './variables';

function toTitleCase(s: string): string {
  return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
}

export const vars = createGlobalThemeContract(variables, (_value, path) =>
  path.map(toTitleCase).join(''),
);

createGlobalTheme(':root', vars, variables);
