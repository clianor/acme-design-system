import type { Primitive } from '../../shared/internal/Primitive';
import type { EmSprinkles, EmVariants } from './index.css';

export type EmElement = React.ElementRef<typeof Primitive.em>;
export type EmProps = React.ComponentProps<typeof Primitive.em> &
  EmVariants &
  EmSprinkles;
