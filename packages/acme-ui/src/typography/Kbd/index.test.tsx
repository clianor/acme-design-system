import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { KbdProps } from '.';
import { Kbd } from '.';

const text = 'Hello Kbd';

describe('Kbd', () => {
  function setup({ children = text, ...restProps }: KbdProps = {}) {
    render(<Kbd {...restProps}>{children}</Kbd>);
    return screen.getByTestId('kbd');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const kbdElem = setup();
    expect(kbdElem).toBeInTheDocument();
  });
});
