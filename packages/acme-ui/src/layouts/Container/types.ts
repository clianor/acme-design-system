import type { Primitive } from '../../shared/internal/Primitive';
import type { ContainerSprinkles } from './index.css';

export type ContainerElement = React.ElementRef<typeof Primitive.div>;
export type ContainerProps = React.ComponentProps<typeof Primitive.div> &
  ContainerSprinkles;
