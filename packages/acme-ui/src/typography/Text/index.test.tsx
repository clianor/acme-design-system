import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { TextProps } from '.';
import { Text } from '.';

const textText = 'Hello Text';

describe('Text', () => {
  function setup({ children = textText, ...restProps }: TextProps = {}) {
    render(<Text {...restProps}>{children}</Text>);
    return screen.getByTestId('text');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const text = setup();
    expect(text).toBeInTheDocument();
  });
});
