import type { CodeSprinkles, CodeVariants } from './index.css';

export type CodeElement = React.ElementRef<'code'>;
export type CodeProps = React.ComponentPropsWithoutRef<'code'> &
  CodeVariants &
  CodeSprinkles;
