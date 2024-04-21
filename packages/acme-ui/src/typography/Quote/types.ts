import type { Primitive } from '../../shared/internal/Primitive';
import type { QuoteSprinkles, QuoteVariants } from './index.css';

export type QuoteElement = React.ElementRef<typeof Primitive.q>;
export type QuoteProps = React.ComponentProps<typeof Primitive.q> &
  QuoteVariants &
  QuoteSprinkles;
