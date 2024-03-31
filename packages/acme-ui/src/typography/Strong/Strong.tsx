import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { StrongElement, StrongProps } from './types';

function Strong(
  { truncate, className, ...restProps }: StrongProps,
  ref: React.ForwardedRef<StrongElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.strongSprinkles.properties,
  );

  return (
    <Primitive.span
      ref={ref}
      className={clsx(
        css.strong({ truncate }),
        css.strongSprinkles(sprinklesProps),
        className,
      )}
      data-testid="strong"
      {...nativeProps}
    />
  );
}

const _Strong = React.forwardRef(Strong);
_Strong.displayName = 'Strong';

export { _Strong as Strong };
