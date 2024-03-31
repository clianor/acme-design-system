import type React from 'react';

export interface AsProp<DefaultTag extends React.ElementType> {
  as?: DefaultTag;
}

export type PolymorphicRef<DefaultTag extends React.ElementType> =
  React.ComponentPropsWithRef<DefaultTag>['ref'];

export type PolymorphicComponentProps<
  DefaultTag extends React.ElementType,
  Props = object,
> = AsProp<DefaultTag> &
  Omit<React.ComponentPropsWithoutRef<DefaultTag>, keyof Props> &
  Props & {
    ref?: PolymorphicRef<DefaultTag>;
  };

export interface PolymorphicComponent<
  DefaultTag extends React.ElementType,
  Props = object,
> {
  <T extends React.ElementType = DefaultTag>(
    props: PolymorphicComponentProps<T, Props>,
  ): React.ReactElement | null;
  displayName?: string | undefined;
}
