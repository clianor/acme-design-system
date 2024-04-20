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
  function setup({ children = buttonText, ...restProps }: ButtonProps = {}) {
    render(<Button {...restProps}>{children}</Button>);
    return screen.getByRole('button');
  }

  it('버튼이 렌더링 되는지 확인', () => {
    const buttonElem = setup();
    expect(buttonElem).toBeInTheDocument();
  });

  it('접근 가능한 이름을 가지는지 확인', () => {
    const buttonElem = setup();
    expect(buttonElem).toHaveAccessibleName(buttonText);
  });

  it('클릭 시 함수가 트리거 되는지 확인', async () => {
    const handleClick = vi.fn();
    const buttonElem = setup({ onClick: handleClick });
    await userEvent.click(buttonElem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('버튼이 비활성화되었을 때 data-disabled 속성이 존재하는지 확인', () => {
    const buttonElem = setup({ disabled: true });
    expect(buttonElem).toHaveAttribute('data-disabled');
  });

  it('버튼이 로딩 상태일때 data-loading 속성이 존재하는지 확인', () => {
    const buttonElem = setup({ loading: true });
    expect(buttonElem).toHaveAttribute('data-loading');
  });

  it('버튼이 로딩 상태일때 spinner가 존재하는지 확인', () => {
    const buttonElem = setup({ loading: true });
    expect(
      buttonElem.querySelector(`.${css.spinner.classNames.base}`),
    ).toBeInTheDocument();
  });

  it('버튼이 로딩 상태일때 loadingText가 렌더링 되는지 확인', () => {
    const buttonElem = setup({ loading: true, loadingText });
    expect(buttonElem).toHaveTextContent(loadingText);
  });

  it('버튼이 로딩 상태일때 children이 존재하지 않는지 확인', () => {
    const buttonElem = setup({ loading: true });
    expect(buttonElem).not.toHaveTextContent(buttonText);
  });

  it('버튼이 로딩 상태일 때 비활성화 상태인지 확인', () => {
    const buttonElem = setup({ loading: true });
    expect(buttonElem).toBeDisabled();
    expect(buttonElem).toHaveAttribute('data-disabled');
  });

  it('버튼 색상에 따른 data 속성 확인', () => {
    const buttonElem = setup({ color: 'indigo' });
    expect(buttonElem).toHaveAttribute('data-accent-color', 'indigo');
  });

  it('커스텀 버튼이 올바르게 렌더링되는지 확인', () => {
    const buttonElem = setup({
      asChild: true,
      role: 'button',
      children: <span>Custom Button</span>,
    });
    expect(buttonElem).toHaveTextContent('Custom Button');
    expect(buttonElem.tagName.toLowerCase()).toBe('span');
    expect(buttonElem).toHaveAttribute('role', 'button');
  });
});
