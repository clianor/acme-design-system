import type { BlockquoteSprinkles, BlockquoteVariants } from './index.css';

export type BlockquoteElement = React.ElementRef<'blockquote'>;
export type BlockquoteProps = React.ComponentPropsWithoutRef<'blockquote'> &
  BlockquoteVariants &
  BlockquoteSprinkles;
