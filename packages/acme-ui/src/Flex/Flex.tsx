import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../internal/Primitive';
import type { FlexSprinkles } from './index.css';
import { flexSprinkles } from './index.css';
import type { FlexElement, FlexProps } from './types';

function Flex(
  { display = 'flex', className, ...restProps }: FlexProps,
  ref: React.ForwardedRef<FlexElement>,
) {
  const { sprinklesProps, nativeProps } = React.useMemo(() => {
    return Object.entries(restProps).reduce(
      (acc, [key, value]) => {
        if (flexSprinkles.properties.has(key as keyof FlexSprinkles))
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
      className={clsx(flexSprinkles({ display, ...sprinklesProps }), className)}
      data-testid="flex"
      {...nativeProps}
    />
  );
}

const _Flex = React.forwardRef(Flex);
_Flex.displayName = 'Flex';

export { _Flex as Flex };
