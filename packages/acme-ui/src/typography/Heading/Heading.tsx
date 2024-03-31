import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import type { PolymorphicRef } from '../../shared/types';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { HeadingNodes, HeadingProps } from './types';

function Heading<T extends HeadingNodes = 'h1'>(
  { as, size = 6, color, truncate, className, ...restProps }: HeadingProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Element: HeadingNodes = as || 'h1';
  const Component = Primitive[Element];

  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.headingSprinkles.properties,
  );

  return (
    <Component
      ref={ref}
      className={clsx(
        css.heading({ color, truncate }),
        css.headingSprinkles({ size, ...sprinklesProps }),
        className,
      )}
      data-testid="heading"
      {...nativeProps}
    />
  );
}

const _Heading = React.forwardRef(Heading);
_Heading.displayName = 'Heading';

export { _Heading as Heading };
