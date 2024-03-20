import React from 'react';

import { Slot } from '../Slot';
import { NODES } from './constants';
import type { PrimitivePropsWithRef, Primitives } from './types';

export const Primitive = NODES.reduce((primitives, node) => {
  const Node = React.forwardRef(
    (
      { asChild, ...primitiveProps }: PrimitivePropsWithRef<typeof node>,
      ref: unknown,
    ) => {
      const Comp: React.ElementType = asChild ? Slot : node;
      return <Comp {...primitiveProps} ref={ref} />;
    },
  );
  Node.displayName = `Primitive.${node}`;
  return { ...primitives, [node]: Node };
}, {} as Primitives);
