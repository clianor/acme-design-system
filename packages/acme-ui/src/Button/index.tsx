import React from 'react';

import * as css from './index.css';
import type { ButtonVariants } from './index.css';

export type ButtonProps = React.ComponentProps<'button'> & ButtonVariants;

export function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={css.button({})} data-disabled type="button" {...props}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
