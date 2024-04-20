import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { FlexElement, FlexProps } from './types';

function Flex(
  {
    display = 'flex',
    justifyContent = 'start',
    className,
    ...restProps
  }: FlexProps,
  ref: React.ForwardedRef<FlexElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.flexSprinkles.properties,
  );

  return (
    <Primitive.div
      ref={ref}
      className={clsx(
        css.flex,
        css.flexSprinkles({ display, justifyContent, ...sprinklesProps }),
        className,
      )}
      data-testid="flex"
      {...nativeProps}
    />
  );
}

const _Flex = React.forwardRef(Flex);
_Flex.displayName = 'Flex';

export { _Flex as Flex };
