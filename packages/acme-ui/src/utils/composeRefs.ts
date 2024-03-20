import type React from 'react';

function updateRef<T>(ref: React.Ref<T>, node: T) {
  if (!ref) return;
  typeof ref === 'function'
    ? ref(node)
    : ((ref as React.MutableRefObject<T>).current = node);
}

export function composeRefs<T>(...refs: React.Ref<T>[]) {
  return (node: T) => {
    refs.forEach((ref) => {
      updateRef(ref, node);
    });
  };
}
