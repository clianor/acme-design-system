import type { NODES } from '../../shared/internal/Primitive/constants';
import type { PolymorphicComponentProps } from '../../shared/types';
import type { HeadingSprinkles, HeadingVariants } from './index.css';

export type HeadingNodes = Extract<
  (typeof NODES)[keyof typeof NODES],
  `h${number}`
>;

export type HeadingProps<T extends HeadingNodes> =
  PolymorphicComponentProps<T> & HeadingVariants & HeadingSprinkles;
