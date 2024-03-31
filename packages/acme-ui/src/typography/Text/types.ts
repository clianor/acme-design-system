import type { NODES } from '../../shared/internal/Primitive/constants';
import type { PolymorphicComponentProps } from '../../shared/types';
import type { TextSprinkles, TextVariants } from './index.css';

export type TextNodes = Extract<
  (typeof NODES)[keyof typeof NODES],
  'span' | 'div' | 'label' | 'p'
>;

export type TextProps<T extends TextNodes> = PolymorphicComponentProps<T> &
  TextVariants &
  TextSprinkles;
