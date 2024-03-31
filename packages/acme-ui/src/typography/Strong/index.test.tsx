import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { StrongProps } from '.';
import { Strong } from '.';

const strongStrong = 'Hello Strong';

describe('Strong', () => {
  function setup({ children = strongStrong, ...restProps }: StrongProps = {}) {
    render(<Strong {...restProps}>{children}</Strong>);
    return screen.getByTestId('strong');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const strong = setup();
    expect(strong).toBeInTheDocument();
  });
});
