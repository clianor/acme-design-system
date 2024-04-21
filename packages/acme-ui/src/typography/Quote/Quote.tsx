import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { QuoteElement, QuoteProps } from './types';

function Quote(
  { truncate, className, ...restProps }: QuoteProps,
  ref: React.ForwardedRef<QuoteElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.quoteSprinkles.properties,
  );

  return (
    <Primitive.q
      ref={ref}
      className={clsx(
        css.quote({ truncate }),
        css.quoteSprinkles(sprinklesProps),
        className,
      )}
      data-testid="quote"
      {...nativeProps}
    />
  );
}

const _Quote = React.forwardRef(Quote);
_Quote.displayName = 'Quote';

export { _Quote as Quote };
