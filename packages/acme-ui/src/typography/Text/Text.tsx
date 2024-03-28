import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { TextElement, TextProps } from './types';

function Text(
  { color, truncate, className, ...restProps }: TextProps,
  ref: React.ForwardedRef<TextElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.textSprinkles.properties,
  );

  return (
    <Primitive.span
      ref={ref}
      className={clsx(
        css.text({ color, truncate }),
        css.textSprinkles(sprinklesProps),
        className,
      )}
      data-testid="text"
      {...nativeProps}
    />
  );
}

const _Text = React.forwardRef(Text);
_Text.displayName = 'Text';

export { _Text as Text };
