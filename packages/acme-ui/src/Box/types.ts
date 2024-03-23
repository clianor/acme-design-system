import type { Primitive } from '../internal/Primitive';
import type { BoxSprinkles } from './index.css';

export type BoxElement = React.ElementRef<typeof Primitive.div>;
export type BoxProps = React.ComponentPropsWithoutRef<typeof Primitive.div> &
  BoxSprinkles;
