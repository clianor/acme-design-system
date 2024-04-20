import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { SectionProps } from '.';
import { Section } from '.';

const text = 'Hello Section';

describe('Section', () => {
  function setup({ children = text, ...restProps }: SectionProps = {}) {
    render(<Section {...restProps}>{children}</Section>);
    return screen.getByTestId('section');
  }

  it('컴포넌트가 렌더링 되는지 확인', () => {
    const sectionElem = setup();
    expect(sectionElem).toBeInTheDocument();
  });
});
