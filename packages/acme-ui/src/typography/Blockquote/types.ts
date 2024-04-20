import type { NODES } from '../../shared/internal/Primitive/constants';
import type { PolymorphicComponentProps } from '../../shared/types';
import type { BlockquoteSprinkles, BlockquoteVariants } from './index.css';

export type BlockquoteNodes = Extract<
  (typeof NODES)[keyof typeof NODES],
  'span' | 'div' | 'label' | 'p'
>;

export type BlockquoteProps<T extends BlockquoteNodes> =
  PolymorphicComponentProps<T> & BlockquoteVariants & BlockquoteSprinkles;
