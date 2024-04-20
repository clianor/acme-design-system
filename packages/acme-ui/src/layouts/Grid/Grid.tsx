import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { GridElement, GridProps } from './types';

function Grid(
  {
    display = 'grid',
    alignItems = 'stretch',
    className,
    ...restProps
  }: GridProps,
  ref: React.ForwardedRef<GridElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.gridSprinkles.properties,
  );

  return (
    <Primitive.div
      ref={ref}
      className={clsx(
        css.gridSprinkles({ display, alignItems, ...sprinklesProps }),
        className,
      )}
      data-testid="grid"
      {...nativeProps}
    />
  );
}

const _Grid = React.forwardRef(Grid);
_Grid.displayName = 'Grid';

export { _Grid as Grid };
