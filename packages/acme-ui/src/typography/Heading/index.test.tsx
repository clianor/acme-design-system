import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { HeadingProps } from '.';
import { Heading } from '.';

const text = 'Hello Heading';

describe('Heading', () => {
  function setup({ children = text, ...restProps }: HeadingProps<'h1'> = {}) {
    render(<Heading {...restProps}>{children}</Heading>);
    return screen.getByTestId('heading');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const heading = setup();
    expect(heading).toBeInTheDocument();
  });
});
