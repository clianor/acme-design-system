import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { EmProps } from '.';
import { Em } from '.';

const text = 'Hello Em';

describe('Em', () => {
  function setup({ children = text, ...restProps }: EmProps = {}) {
    render(<Em {...restProps}>{children}</Em>);
    return screen.getByTestId('em');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const emElem = setup();
    expect(emElem).toBeInTheDocument();
  });
});
