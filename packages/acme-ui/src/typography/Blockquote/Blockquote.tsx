import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import type { PolymorphicRef } from '../../shared/types';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { BlockquoteNodes, BlockquoteProps } from './types';

function Blockquote<T extends BlockquoteNodes = 'span'>(
  { as, size, color, truncate, className, ...restProps }: BlockquoteProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Element: BlockquoteNodes = as || 'span';
  const Component = Primitive[Element];

  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.BlockquoteSprinkles.properties,
  );

  return (
    <Component
      ref={ref as never}
      className={clsx(
        css.Blockquote({ color, truncate }),
        css.BlockquoteSprinkles({ size, ...sprinklesProps }),
        className,
      )}
      data-testid="Blockquote"
      {...nativeProps}
    />
  );
}

const _Blockquote = React.forwardRef(Blockquote);
_Blockquote.displayName = 'Blockquote';

export { _Blockquote as Blockquote };
