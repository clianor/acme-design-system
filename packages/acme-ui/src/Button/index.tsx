import React from 'react';

import * as css from './index.css';
import type { ButtonVariants } from './index.css';

export type ButtonProps = React.ComponentProps<'button'> & ButtonVariants;

export function Button({
  disabled,
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={css.button({})}
      data-disabled={disabled}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
