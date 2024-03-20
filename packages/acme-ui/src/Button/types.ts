import type { Primitive } from '../internal/Primitive';
import type { ButtonVariants } from './index.css';

export type ButtonElement = React.ElementRef<typeof Primitive.button>;
export type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Primitive.button>, 'color'> &
  ButtonVariants;
