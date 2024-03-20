/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { composeRefs } from '../utils/composeRefs';
import { mergeProps } from '../utils/mergeProps';
import type { SlotProps } from './types';

function Slot(props: SlotProps, forwardedRef: React.Ref<HTMLElement>) {
  const { children, ...restProps } = props;
  const childrenArray = React.Children.toArray(children);
  const newChildren = childrenArray[0];

  if (React.isValidElement(newChildren)) {
    return React.cloneElement(newChildren, {
      ...mergeProps(restProps, newChildren.props),
      ref: forwardedRef
        ? composeRefs(forwardedRef, (newChildren as any).ref)
        : (newChildren as any).ref,
    } as any);
  }
  return childrenArray.length > 1 ? React.Children.only(null) : null;
}

const _Slot = React.forwardRef(Slot);
export { _Slot as Slot };
