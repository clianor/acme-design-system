import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { LinkElement, LinkProps } from './types';

function Link(
  { truncate, color, underline, className, ...restProps }: LinkProps,
  ref: React.ForwardedRef<LinkElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.linkSprinkles.properties,
  );

  return (
    <Primitive.a
      ref={ref}
      className={clsx(
        css.link({ truncate, color, underline }),
        css.linkSprinkles(sprinklesProps),
        className,
      )}
      data-testid="link"
      {...nativeProps}
    />
  );
}

const _Link = React.forwardRef(Link);
_Link.displayName = 'Link';

export { _Link as Link };
