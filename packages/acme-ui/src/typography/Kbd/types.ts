import type { Primitive } from '../../shared/internal/Primitive';
import type { KbdSprinkles } from './index.css';

export type KbdElement = React.ElementRef<typeof Primitive.kbd>;
export type KbdProps = React.ComponentProps<typeof Primitive.kbd> &
  KbdSprinkles;
