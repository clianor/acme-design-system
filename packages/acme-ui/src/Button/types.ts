import type { ButtonVariants } from './index.css';

export type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
} & React.ComponentProps<'button'> &
  ButtonVariants;
