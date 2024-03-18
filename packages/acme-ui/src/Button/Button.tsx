import React from 'react';

import { dataAttr } from '../utils/dataAttr';
import * as css from './index.css';
import type { ButtonProps } from './types';

function Button(
  {
    disabled = false,
    loading = false,
    loadingText,
    size,
    color,
    children,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
): JSX.Element {
  return (
    <button
      ref={ref}
      className={css.button({ size, color })}
      data-accent-color={color}
      data-disabled={dataAttr(disabled)}
      data-loading={dataAttr(loading)}
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
