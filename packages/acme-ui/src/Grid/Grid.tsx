import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../internal/Primitive';
import { extractSprinklesAndNativeProps } from '../utils/extractSprinklesAndNativeProps';
import { gridSprinkles } from './index.css';
import type { GridElement, GridProps } from './types';

function Grid(
  { display = 'grid', className, ...restProps }: GridProps,
  ref: React.ForwardedRef<GridElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    gridSprinkles.properties,
  );

  return (
    <Primitive.div
      ref={ref}
      className={clsx(gridSprinkles({ display, ...sprinklesProps }), className)}
      data-testid="grid"
      {...nativeProps}
    />
  );
}

const _Grid = React.forwardRef(Grid);
_Grid.displayName = 'Grid';

export { _Grid as Grid };
