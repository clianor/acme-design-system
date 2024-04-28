import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { LinkProps } from '.';
import { Link } from '.';

const text = 'Hello Link';

describe('Link', () => {
  function setup({ children = text, ...restProps }: LinkProps = {}) {
    render(<Link {...restProps}>{children}</Link>);
    return screen.getByTestId('link');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const linkElem = setup();
    expect(linkElem).toBeInTheDocument();
  });
});
