import type { Primitive } from '../internal/Primitive';
import type { GridSprinkles } from './index.css';

export type GridElement = React.ElementRef<typeof Primitive.div>;
export type GridProps = React.ComponentPropsWithoutRef<typeof Primitive.div> &
  GridSprinkles;
