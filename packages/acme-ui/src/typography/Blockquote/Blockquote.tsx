import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { BlockquoteElement, BlockquoteProps } from './types';

function Blockquote(
  { color, truncate, className, ...restProps }: BlockquoteProps,
  ref: React.ForwardedRef<BlockquoteElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.BlockquoteSprinkles.properties,
  );

  return (
    <Primitive.blockquote
      ref={ref}
      className={clsx(
        css.Blockquote({ color, truncate }),
        css.BlockquoteSprinkles(sprinklesProps),
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
