import React from 'react';

import * as css from './index.css';
import type { ButtonProps } from './types';

function Button(
  {
    disabled = false,
    loading = false,
    loadingText,
    size,
    children,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
): JSX.Element {
  return (
    <button
      ref={ref}
      className={css.button({ size })}
      data-disabled={disabled}
      data-loading={loading}
      disabled={disabled}
      type="button"
      {...props}
    >
      {loading ? <div className={css.spinner({ size })} /> : children}
      {loading && loadingText ? <span>{loadingText}</span> : null}
    </button>
  );
}

const _Button = React.forwardRef(Button);
_Button.displayName = 'Button';
export { _Button as Button };
