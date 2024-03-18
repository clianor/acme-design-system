import type { ButtonVariants } from './index.css';

export type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
} & Omit<React.ComponentProps<'button'>, 'color'> &
  ButtonVariants;
