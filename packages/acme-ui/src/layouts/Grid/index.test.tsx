import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { GridProps } from '.';
import { Grid } from '.';

const gridText = 'Hello Grid';

describe('Grid', () => {
  function setup({ children = gridText, ...restProps }: GridProps = {}) {
    render(<Grid {...restProps}>{children}</Grid>);
    return screen.getByTestId('grid');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const grid = setup();
    expect(grid).toBeInTheDocument();
  });
});
