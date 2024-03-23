import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../internal/Primitive';
import type { BoxSprinkles } from './index.css';
import { boxSprinkles } from './index.css';
import type { BoxElement, BoxProps } from './types';

function Box(
  { className, ...restProps }: BoxProps,
  ref: React.ForwardedRef<BoxElement>,
) {
  const { sprinklesProps, nativeProps } = React.useMemo(() => {
    return Object.entries(restProps).reduce(
      (acc, [key, value]) => {
        if (boxSprinkles.properties.has(key as keyof BoxSprinkles))
          acc.sprinklesProps[key] = value;
        else acc.nativeProps[key] = value;
        return acc;
      },
      {
        sprinklesProps: {} as Record<string, unknown>,
        nativeProps: {} as Record<string, unknown>,
      },
    );
  }, [restProps]);

  return (
    <Primitive.div
      ref={ref}
      className={clsx(boxSprinkles(sprinklesProps), className)}
      data-testid="box"
      {...nativeProps}
    />
  );
}

const _Box = React.forwardRef(Box);
_Box.displayName = 'Box';

export { _Box as Box };
