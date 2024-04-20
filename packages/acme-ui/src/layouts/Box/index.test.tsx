import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { BoxProps } from '.';
import { Box } from '.';

const text = 'Hello Box';

describe('Box', () => {
  function setup({ children = text, ...restProps }: BoxProps = {}) {
    render(<Box {...restProps}>{children}</Box>);
    return screen.getByTestId('box');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const box = setup();
    expect(box).toBeInTheDocument();
  });
});
