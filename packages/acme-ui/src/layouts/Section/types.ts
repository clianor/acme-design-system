import type { Primitive } from '../../shared/internal/Primitive';
import type { SectionSprinkles } from './index.css';

export type SectionElement = React.ElementRef<typeof Primitive.section>;
export type SectionProps = React.ComponentProps<typeof Primitive.section> &
  SectionSprinkles;
