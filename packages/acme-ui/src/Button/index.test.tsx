import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import type { ButtonProps } from '.';
import { Button } from '.';

describe('Button', () => {
  function setup(props: ButtonProps = {}) {
    render(<Button {...props}>Click me</Button>);
    return screen.getByRole('button', { name: /click me/i });
  }

  it('버튼이 렌더링 되는지 확인', () => {
    const button = setup();
    expect(button).toBeInTheDocument();
  });

  it('접근 가능한 이름을 가지는지 확인', () => {
    const button = setup();
    expect(button).toHaveAccessibleName('Click me');
  });

  it('클릭 시 함수가 트리거 되는지 확인', async () => {
    const handleClick = vi.fn();
    const button = setup({ onClick: handleClick });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('버튼이 비활성화되었을 때 data-disabled 속성이 존재하는지 확인', () => {
    const button = setup({ disabled: true });
    expect(button).toHaveAttribute('data-disabled', 'true');
  });
});
