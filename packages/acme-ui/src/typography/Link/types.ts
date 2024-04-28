import type { Primitive } from '../../shared/internal/Primitive';
import type { LinkSprinkles, LinkVariants } from './index.css';

export type LinkElement = React.ElementRef<typeof Primitive.a>;
export type LinkProps = React.ComponentProps<typeof Primitive.a> &
  LinkVariants &
  LinkSprinkles;
