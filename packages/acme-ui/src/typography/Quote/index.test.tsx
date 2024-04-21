import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { QuoteProps } from '.';
import { Quote } from '.';

const text = 'Hello Quote';

describe('Quote', () => {
  function setup({ children = text, ...restProps }: QuoteProps = {}) {
    render(<Quote {...restProps}>{children}</Quote>);
    return screen.getByTestId('quote');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const quoteElem = setup();
    expect(quoteElem).toBeInTheDocument();
  });
});
