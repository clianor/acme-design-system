import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { dataAttr } from '../../shared/utils/dataAttr';
import * as css from './index.css';
import type { ButtonElement, ButtonProps } from './types';

function Button(
  {
    disabled = false,
    loading = false,
    loadingText,
    size,
    color,
    className,
    children,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<ButtonElement>,
): JSX.Element {
  const isDisabled = disabled || loading;
  return (
    <Primitive.button
      ref={ref}
      className={clsx(css.button({ size, color }), className)}
      data-accent-color={color}
      data-disabled={dataAttr(isDisabled)}
      data-loading={dataAttr(loading)}
      disabled={isDisabled}
      type="button"
      {...props}
    >
      {loading ? <div className={css.spinner({ size })} /> : children}
      {loading && loadingText ? <span>{loadingText}</span> : null}
    </Primitive.button>
  );
}

const _Button = React.forwardRef(Button);
_Button.displayName = 'Button';
export { _Button as Button };
