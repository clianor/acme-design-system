import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import type { PolymorphicRef } from '../../shared/types';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { TextNodes, TextProps } from './types';

function Text<T extends TextNodes = 'span'>(
  { as, color, truncate, className, ...restProps }: TextProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Element: TextNodes = as || 'span';
  const Component = Primitive[Element];

  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.textSprinkles.properties,
  );

  return (
    <Component
      ref={ref as never}
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
