// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyProps = Record<string, any>;

export function mergeProps(
  slotProps: AnyProps,
  childProps: AnyProps,
): AnyProps {
  const overrideProps = { ...childProps };

  Object.entries(childProps).forEach(([propName, childPropValue]) => {
    const slotPropValue = slotProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler && slotPropValue) {
      overrideProps[propName] = (...args: unknown[]) => {
        childPropValue(...args);
        slotPropValue(...args);
      };
    } else if (isHandler && !childPropValue) {
      overrideProps[propName] = slotPropValue;
    } else if (propName === 'style') {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === 'className') {
      overrideProps[propName] = [slotPropValue, childPropValue]
        .filter(Boolean)
        .join(' ');
    }
  });

  return { ...slotProps, ...overrideProps };
}
