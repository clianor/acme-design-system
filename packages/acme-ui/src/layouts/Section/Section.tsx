import clsx from 'clsx';
import React from 'react';

import { Primitive } from '../../shared/internal/Primitive';
import { extractSprinklesAndNativeProps } from '../../shared/utils/extractSprinklesAndNativeProps';
import * as css from './index.css';
import type { SectionElement, SectionProps } from './types';

function Section(
  { size = 3, className, ...restProps }: SectionProps,
  ref: React.ForwardedRef<SectionElement>,
) {
  const { sprinklesProps, nativeProps } = extractSprinklesAndNativeProps(
    restProps,
    css.sectionSprinkles.properties,
  );

  return (
    <Primitive.section
      ref={ref}
      className={clsx(
        css.section,
        css.sectionSprinkles({ size, ...sprinklesProps }),
        className,
      )}
      data-testid="section"
      {...nativeProps}
    />
  );
}

const _Section = React.forwardRef(Section);
_Section.displayName = 'Section';

export { _Section as Section };
