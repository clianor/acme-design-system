import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { KbdElement, KbdProps } from './types';

function Kbd(
  { className, ...restProps }: KbdProps,
  ref: React.ForwardedRef<KbdElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.kbdSprinkles.properties,
  );

  return (
    <Primitive.kbd
      ref={ref}
      className={clsx(css.kbd, css.kbdSprinkles(sprinklesProps), className)}
      data-testid="kbd"
      {...nativeProps}
    />
  );
}

const _Kbd = React.forwardRef(Kbd);
_Kbd.displayName = 'Kbd';

export { _Kbd as Kbd };
