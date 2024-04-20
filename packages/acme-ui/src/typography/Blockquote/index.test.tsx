import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { BlockquoteProps } from '.';
import { Blockquote } from '.';

const text = 'Hello Blockquote';

describe('Blockquote', () => {
  function setup({ children = text, ...restProps }: BlockquoteProps = {}) {
    render(<Blockquote {...restProps}>{children}</Blockquote>);
    return screen.getByTestId('Blockquote');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const blockquoteElem = setup();
    expect(blockquoteElem).toBeInTheDocument();
  });
});
