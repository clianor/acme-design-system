import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { FlexProps } from '.';
import { Flex } from '.';

const flexText = 'Hello Flex';

describe('Flex', () => {
  function setup({ children = flexText, ...restProps }: FlexProps = {}) {
    render(<Flex {...restProps}>{children}</Flex>);
    return screen.getByTestId('flex');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const flex = setup();
    expect(flex).toBeInTheDocument();
  });
});
