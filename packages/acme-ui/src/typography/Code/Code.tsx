import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { CodeElement, CodeProps } from './types';

function Code(
  { variant, color, truncate, className, ...restProps }: CodeProps,
  ref: React.ForwardedRef<CodeElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.CodeSprinkles.properties,
  );

  return (
    <Primitive.code
      ref={ref}
      className={clsx(
        css.Code({ variant, color, truncate }),
        css.CodeSprinkles(sprinklesProps),
        className,
      )}
      data-testid="Code"
      {...nativeProps}
    />
  );
}

const _Code = React.forwardRef(Code);
_Code.displayName = 'Code';

export { _Code as Code };
