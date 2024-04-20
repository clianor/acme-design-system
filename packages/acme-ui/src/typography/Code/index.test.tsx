import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { CodeProps } from '.';
import { Code } from '.';

const text = 'Hello Code';

describe('Code', () => {
  function setup({ children = text, ...restProps }: CodeProps = {}) {
    render(<Code {...restProps}>{children}</Code>);
    return screen.getByTestId('Code');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const codeElem = setup();
    expect(codeElem).toBeInTheDocument();
  });
});
