import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { EmElement, EmProps } from './types';

function Em(
  { truncate, className, ...restProps }: EmProps,
  ref: React.ForwardedRef<EmElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.emSprinkles.properties,
  );

  return (
    <Primitive.em
      ref={ref}
      className={clsx(
        css.em({ truncate }),
        css.emSprinkles(sprinklesProps),
        className,
      )}
      data-testid="em"
      {...nativeProps}
    />
  );
}

const _Em = React.forwardRef(Em);
_Em.displayName = 'Em';

export { _Em as Em };
