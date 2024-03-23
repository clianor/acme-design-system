import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../internal/Primitive';
import { extractSprinklesAndNativeProps } from '../utils/extractSprinklesAndNativeProps';
import { boxSprinkles } from './index.css';
import type { BoxElement, BoxProps } from './types';

function Box(
  { className, ...restProps }: BoxProps,
  ref: React.ForwardedRef<BoxElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    boxSprinkles.properties,
  );

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
