export function extractSprinklesAndNativeProps<
  T extends object,
  P extends Set<string>,
>(props: T, properties: P) {
  return Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (properties.has(key)) acc.sprinklesProps[key] = value;
      else acc.nativeProps[key] = value;
      return acc;
    },
    {
      sprinklesProps: {} as Record<string, unknown>,
      nativeProps: {} as Record<string, unknown>,
    },
  );
}
