import { vars as themeVars } from './theme.css';
import type * as variables from './variables';

export const vars = themeVars as unknown as typeof variables;
