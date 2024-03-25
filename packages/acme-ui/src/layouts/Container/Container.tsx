import clsx from 'clsx';
import React from 'react';

import type { ContainerProps } from '.';
import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { ContainerElement } from './types';

function Container(
  {
    size = 4,
    align = 'center',
    className,
    children,
    ...restProps
  }: ContainerProps,
  ref: React.ForwardedRef<ContainerElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.containerSprinkles.properties,
  );

  return (
    <Primitive.div
      ref={ref}
      className={clsx(
        css.container,
        css.containerSprinkles({ size, align, ...sprinklesProps }),
        className,
      )}
      data-testid="container"
      {...nativeProps}
    >
      <div className={css.innerContainer}>{children}</div>
    </Primitive.div>
  );
}

const _Container = React.forwardRef(Container);
_Container.displayName = 'Container';

export { _Container as Container };
