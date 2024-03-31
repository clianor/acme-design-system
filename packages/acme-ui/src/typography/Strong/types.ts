import type { Primitive } from '../../shared/internal/Primitive';
import type { StrongSprinkles, StrongVariants } from './index.css';

export type StrongElement = React.ElementRef<typeof Primitive.span>;
export type StrongProps = React.ComponentProps<typeof Primitive.span> &
  StrongVariants &
  StrongSprinkles;
