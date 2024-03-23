import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { BoxProps } from '.';
import { Box } from '.';

const boxText = 'Hello Box';

describe('Box', () => {
  function setup({ children = boxText, ...restProps }: BoxProps = {}) {
    render(<Box {...restProps}>{children}</Box>);
    return screen.getByTestId('box');
  }

  it('박스가 렌더링 되는지 확인', () => {
    const box = setup();
    expect(box).toBeInTheDocument();
  });
});
