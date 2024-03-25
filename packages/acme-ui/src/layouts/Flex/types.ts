import type { Primitive } from '../../shared/internal/Primitive';
import type { FlexSprinkles } from './index.css';

export type FlexElement = React.ElementRef<typeof Primitive.div>;
export type FlexProps = React.ComponentPropsWithoutRef<typeof Primitive.div> &
  FlexSprinkles;
