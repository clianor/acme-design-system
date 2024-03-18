import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import type { ButtonProps } from '.';
import { Button } from '.';
import * as css from './index.css';

const loadingText = 'Loading...';
const buttonText = 'Click me';

describe('Button', () => {
  function setup(props: ButtonProps = {}) {
    render(<Button {...props}>{buttonText}</Button>);
    return screen.getByRole('button');
  }

  it('버튼이 렌더링 되는지 확인', () => {
    const button = setup();
    expect(button).toBeInTheDocument();
  });

  it('접근 가능한 이름을 가지는지 확인', () => {
    const button = setup();
    expect(button).toHaveAccessibleName(buttonText);
  });

  it('클릭 시 함수가 트리거 되는지 확인', async () => {
    const handleClick = vi.fn();
    const button = setup({ onClick: handleClick });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('버튼이 비활성화되었을 때 data-disabled 속성이 존재하는지 확인', () => {
    const button = setup({ disabled: true });
    expect(button).toHaveAttribute('data-disabled');
  });

  it('버튼이 로딩 상태일때 data-loading 속성이 존재하는지 확인', () => {
    const button = setup({ loading: true });
    expect(button).toHaveAttribute('data-loading');
  });

  it('버튼이 로딩 상태일때 spinner가 존재하는지 확인', () => {
    const button = setup({ loading: true });
    expect(
      button.querySelector(`.${css.spinner.classNames.base}`),
    ).toBeInTheDocument();
  });

  it('버튼이 로딩 상태일때 loadingText가 렌더링 되는지 확인', () => {
    const button = setup({ loading: true, loadingText });
    expect(button).toHaveTextContent(loadingText);
  });

  it('버튼이 로딩 상태일때 children이 존재하지 않는지 확인', () => {
    const button = setup({ loading: true });
    expect(button).not.toHaveTextContent(buttonText);
  });
});
