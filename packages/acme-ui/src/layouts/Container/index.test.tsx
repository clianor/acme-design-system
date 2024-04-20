import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { ContainerProps } from '.';
import { Container } from '.';

const text = 'Hello Container';

describe('Container', () => {
  function setup({ children = text, ...restProps }: ContainerProps = {}) {
    render(<Container {...restProps}>{children}</Container>);
    return screen.getByTestId('container');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const container = setup();
    expect(container).toBeInTheDocument();
  });
});
