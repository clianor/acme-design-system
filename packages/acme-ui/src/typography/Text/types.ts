import type { Primitive } from '../../shared/internal/Primitive';
import type { TextSprinkles, TextVariants } from './index.css';

export type TextElement = React.ElementRef<typeof Primitive.span>;
export type TextProps = React.ComponentProps<typeof Primitive.span> &
  TextVariants &
  TextSprinkles;
