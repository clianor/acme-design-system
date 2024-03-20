import type { NODES } from './constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Pick<P, Exclude<keyof P, 'ref'>>
    : P
  : P;
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };
type PrimitiveForwardRefComponent<E extends React.ElementType> =
  React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>>;
type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};

export type { ComponentPropsWithoutRef, PrimitivePropsWithRef, Primitives };
