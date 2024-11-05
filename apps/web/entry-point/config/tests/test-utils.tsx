/**
 * Automatically add app-providers
 * @see https://testing-library.com/docs/react-testing-library/setup#configuring-jest-with-test-utils
 */
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { AppTestProviders } from './AppTestProviders';
import type { RenderOptions, RenderResult } from '@testing-library/react';

const customRender = (ui: ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, {
    wrapper: AppTestProviders,
    ...options,
  });

// re-export everything
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

// override render method
export { customRender as render };
