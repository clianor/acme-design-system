import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { SectionProps } from '.';
import { Section } from '.';

const sectionText = 'Hello Section';

describe('Section', () => {
  function setup({ children = sectionText, ...restProps }: SectionProps = {}) {
    render(<Section {...restProps}>{children}</Section>);
    return screen.getByTestId('section');
  }

  it('박스가 렌더링 되는지 확인', () => {
    const section = setup();
    expect(section).toBeInTheDocument();
  });
});
